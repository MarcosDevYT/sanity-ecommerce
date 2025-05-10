import { ProductsView } from "@/components/ProductsView";
import SaleBanner from "@/components/SaleBanner";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Store Frontend - Home",
};

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function HomePage() {
  const produtcs = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <main className="px-4 mx-auto container">
      <SaleBanner />

      <section className="flex flex-col rounded-lg items-center justify-top min-h-screen bg-gray-100 px-6 py-10 my-4">
        <ProductsView products={produtcs} categories={categories} />
      </section>
    </main>
  );
}
