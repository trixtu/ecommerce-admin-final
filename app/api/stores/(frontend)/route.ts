import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

// export async function POST(req: Request,) {
//   try {
//     const body = await req.json();

//     const {  } = body;

//     const storeByUserId = await prismadb.user.findMany();

//     return NextResponse.json();
//   } catch (error) {
//     console.log('[CATEGORIES_POST]', error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// };

export async function GET(req: Request) {
  try {
    const users = await prismadb.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    console.log("[USERS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
