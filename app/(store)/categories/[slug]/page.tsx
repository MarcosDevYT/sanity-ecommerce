import { ProductsView } from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategorySlug } from "@/sanity/lib/products/getProductsByCategorySlug";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category",
  description: "Store Frontend - Category",
};

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const products = await getProductsByCategorySlug(slug);
  const categories = await getAllCategories();

  return (
    <main className="container mx-auto flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
        </h1>
        <ProductsView products={products} categories={categories} />
      </div>
    </main>
  );
};

export default CategoryPage;
