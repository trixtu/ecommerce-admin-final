import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { headers } from "next/headers";


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
    { params }: { params: { storeId: string }}
  ) {
  const {
    data: { email, password, vorname, nachname,name },
  } = await req.json();

 // const hashed = await hash(password, 12);

  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";

  const user = await prismadb.user.create({
    data: {
      email,
      password,
      name,
      storeId:params.storeId
    },
  });

  // const token = await prismadb.activateToken.create({
  //   data: {
  //     token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ""),
  //     userId: user.id,
  //   },
  // });

  // const mailgun = new Mailgun(formData);

  // const client = mailgun.client({ username: "api", key: API_KEY });

  // const messageData = {
  //   from:`Example email <hello${DOMAIN}>`,
  //   to:user.email,
  //   subject:'Please Activate Your Account',
  //   text:`Hello ${user.name}, please activate your account by clicking this link: http://localhost:3000/activate/${token.token}`,
  // }

  // await client.messages.create(DOMAIN,messageData)
  


  return NextResponse.json({
    user: {
      email: user.email,
    },
  },{headers:corsHeaders});
}


// export async function POST(
//   req: Request,
//   { params }: { params: { storeId: string } }
// ) {
//   try {

//     const body = await req.json();

//     const { name,email,password } = body;

//     if (!email) {
//       return new NextResponse("Email is required", { status: 400 });
//     }

//     if (!password) {
//       return new NextResponse("Password is required", { status: 400 });
//     }


//     if (!params.storeId) {
//       return new NextResponse("Store id is required", { status: 400 });
//     }

//     const user = await prismadb.user.create({
//       data: {
//         email,
//         password,
//         name,
//         storeId: params.storeId
//       }
//     });
  
//     return NextResponse.json({user},{headers:corsHeaders});
//   } catch (error) {
//     console.log('[USERS_POST]', error);
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