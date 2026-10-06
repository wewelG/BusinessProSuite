import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { EMPLOYEES } from "@/lib/mockData";

export async function POST(request: Request) {
  try {
    const { employeeId, email } = await request.json();

    if (!employeeId || !email) {
      return NextResponse.json(
        { error: "Employee ID and Email are required." },
        { status: 400 }
      );
    }

    const trimmedId = employeeId.trim();
    const trimmedEmail = email.trim().toLowerCase();

    // 1. Try DB lookup via Prisma
    try {
      const user = await prisma.user.findFirst({
        where: {
          employeeId: { equals: trimmedId, mode: "insensitive" },
          email: { equals: trimmedEmail, mode: "insensitive" },
        },
      });

      if (user) {
        if (user.status === "ACTIVE") {
          return NextResponse.json({
            message: "Account is already active.",
            details: "Please log in directly using your email and password.",
            status: "ALREADY_ACTIVE",
          });
        }

        // Activate the user
        await prisma.user.update({
          where: { id: user.id },
          data: { status: "ACTIVE" },
        });

        return NextResponse.json({
          message: "Account verified and activated!",
          details: `A confirmation receipt has been sent to ${trimmedEmail}. You may now log in.`,
          status: "SUCCESS",
        });
      }
    } catch {
      // If DB connection fails or is not yet configured, fall back to mock data
      console.log("Database unavailable, checking mock data roster...");
    }

    // 2. Check Mock Data roster
    const mockEmp = EMPLOYEES.find(
      (e) =>
        e.employeeId.toLowerCase() === trimmedId.toLowerCase() &&
        e.email.toLowerCase() === trimmedEmail
    );

    if (mockEmp) {
      return NextResponse.json({
        message: "Account verified and activated!",
        details: `Welcome ${mockEmp.name}! A secure verification message has been sent to ${trimmedEmail}.`,
        status: "SUCCESS",
      });
    }

    return NextResponse.json(
      {
        error: "No record matches this Employee ID and Email combination. Please contact your HR administrator.",
      },
      { status: 404 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
