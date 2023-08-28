import React from "react";
import { SubcategoryForm } from "./components/subcategory-form";
import prismadb from "@/lib/prismadb";

const SubcategoryPage = async ({
  params,
}: {
  params: { subcategoryId: string, storeId: string };
}) => {
  const subcategory = await prismadb.subcategory.findUnique({
    where: {
      id: params.subcategoryId,
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    }
  })
  return <div className="flex-1 items-center w-screen md:w-full shadow-sm">
    <div className="space-y-4 p-8 pt-6">
      <SubcategoryForm
        categories={categories}
        intialData={subcategory}
      />
    </div>
  </div>;
};

export default SubcategoryPage;
