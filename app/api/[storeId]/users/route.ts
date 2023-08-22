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