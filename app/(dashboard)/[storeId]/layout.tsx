import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import Navbar from '@/components/navbar'
import prismadb from '@/lib/prismadb';
import { Alert } from "flowbite-react";
import Sidebar from '@/components/sidebar';


export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    }
  });

  if (!store) {
    redirect('/');
  };

  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};
