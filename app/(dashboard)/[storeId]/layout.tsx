import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';
import Layout from '@/components/Layout';


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

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    }
  });

  if (!store) {
    redirect('/');
  };


  return (
    <Layout parameter={children} params={params.storeId} stores={stores} />
  );
};
