import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {

    const body = await req.json();

    const { name,email,password } = body;

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    if (!password) {
      return new NextResponse("Password is required", { status: 400 });
    }


    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const user = await prismadb.user.create({
      data: {
        email,
        password,
        name,
        storeId: params.storeId
      }
    });
  
    return NextResponse.json({user},{headers:corsHeaders});
  } catch (error) {
    console.log('[USERS_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const users = await prismadb.user.findMany({
      where: {
        storeId: params.storeId
      }
    });
  
    return NextResponse.json(users);
  } catch (error) {
    console.log('[USERS_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};