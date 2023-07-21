import prismadb from "@/lib/prismadb";
import CategoriesForm from "./components/category-form";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string,storeId:string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where:{
      storeId : params.storeId
    }
  })
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <CategoriesForm initialData={category} billboards={billboards}/>
         </div>
    </div>
  );
};
export default CategoryPage;
