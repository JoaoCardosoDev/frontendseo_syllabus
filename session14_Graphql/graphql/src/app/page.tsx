import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import ProductList from "@/components/productlist";
import ProductForm from "@/components/ProductForm";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <ProductForm></ProductForm>
      <ProductList></ProductList>
      </main>
    </HydrateClient>
  );
}
