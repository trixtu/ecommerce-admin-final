import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { SizeColumn } from "./components/columns"
import { SizesClient } from "./components/client";

const SizesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-1 items-center w-screen md:w-full shadow-sm">
      <div className="space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
