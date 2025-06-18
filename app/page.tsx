import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/ShinyText/ShinyText";
import { FileUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DOB = 2004;
const limit = 2;

export default function Home() {
  return (
    <>
      <article className="mt-8 flex flex-col gap-16 pb-16">
        <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <Image
            className="rounded-lg"
            src="/ved.jpg"
            width={175}
            height={175}
            alt="Vedank Wakalkar"
            priority
          />
          <div className="flex max-w-[320px] flex-col sm:max-w-full">
            <h1 className="title text-balance text-4xl sm:text-5xl flex items-center">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <div>Hi I'm Vedank.👋</div>
            </h1>
            <ShinyText
              text="Looking for Opportunity"
              speed={3}
              className="max-w-auto mt-2 mb-2"
            ></ShinyText>
            <p className="mt-2 text-sm font-medium sm: text-base">
              {new Date().getFullYear() - DOB} yo full stack engineer from India
              🇮🇳
            </p>
            <p className="mt-4 text-sm font-medium sm:text-base">
              I enjoy building full-stack applications <br></br> with a focus on
              AI.
            </p>
            <p className="mt-2 text-sm font-medium sm:text-medium font-normal">
              Currently exploring LLMs,
              <br /> Cloud deployments, and scalable architectures.
            </p>
            <section className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/Vedank_Wakalkar.pdf" target="_blank">
                <Button variant="outline">
                  <span className="font-semibold">Resume</span>
                  <FileUser />
                </Button>
              </Link>
              <Socials />
            </section>
          </div>
        </section>
        
      </article>
    </>
  );
}
