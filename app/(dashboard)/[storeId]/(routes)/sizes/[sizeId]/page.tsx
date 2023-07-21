import prismadb from "@/lib/prismadb";
import SizesForm from "./components/size-form";

const SizePage = async ({
  params,
}: {
  params: { sizeId: string,storeId:string };
}) => {
  const sizes = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });


  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <SizesForm initialData={sizes} />
         </div>
    </div>
  );
};
export default SizePage;
