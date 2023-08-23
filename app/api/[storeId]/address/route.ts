import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { headers } from "next/headers";
import { hash } from "bcrypt";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const address = await prismadb.address.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(address);
  } catch (error) {
    console.log("[ADDRESS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const {
      data: { id, land, postzahl, stadt, street, telefon, firma },
    } = await req.json();

    const address = await prismadb.address.update({
      where: {
        id: id,
      },
      data: {
        	land,
          postzahl,
          stadt,
          street,
          telefon,
          firma
      },
    });

    return NextResponse.json(
      {
        address: {
          user: address.userId,
        },
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.log("[ADDRESS_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
