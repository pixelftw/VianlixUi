import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github } from "lucide-react";
import { Magnet } from "./motion/magnet";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          🫶
          <p className="text-center">
            Crafted Passionately by
            <Link
              className="px-1 underline underline-offset-2"
              href="https://vikasonweb.vercel.app"
              target="_blank"
            >
              Vikas Yadav
            </Link>
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <Magnet>
      <Link
        href="https://github.com/pixelftw/motion-components"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Github className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Github
      </Link>
    </Magnet>
  );
}
