import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { headers } from "next/headers";
import { hash } from "bcrypt";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string; storeId: string } }
) {
  try {
    const body = await req.json();

    const { email, vorname, nachname } = body;

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    const user = await prismadb.user.update({
      where: {
        id: params.userId,
      },
      data: {
        email,
        vorname,
        nachname,
      },
    });

    return NextResponse.json({
       user
      },{headers:corsHeaders});
  } catch (error) {
    console.log("[USER_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}