import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import AnimacaoBasica from "../components/AnimacaoBasica";
import Spring from "@/components/Spring";
import ButtonAnimation from "@/components/ButtonAnimation";
import ListaAnimada from "@/components/ListaAnimada";
import ScrollAnimation from "@/components/ScrollAnimation";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <AnimacaoBasica/>
        <Spring></Spring>
        <ButtonAnimation></ButtonAnimation>
        <ListaAnimada></ListaAnimada>
        <ScrollAnimation></ScrollAnimation>

        
      </main>
    </HydrateClient>
  );
}
