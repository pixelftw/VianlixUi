import { StaggerText } from "@/components/motion/stagger-text";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8 z-0">
      <Link
        href="https://github.com/pixelftw/motion-components"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <StaggerText
        as="h1"
        variant="slideIn"
        className="text-3xl font-bold mb-4 sm:text-7xl justify-center uppercase"
      >
        Beautiful animation components for your React and Next apps
      </StaggerText>
      <StaggerText
        as="p"
        variant="flip"
        transition={{ delay: 1 }}
        className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground justify-center"
      >
        Vianlix is a hub of reusable components build with framer motion that
        you can copy and paste in your NextJs and React applications
      </StaggerText>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="https://github.com/pixelftw/motion-components"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Github
        </Link>
      </div>
    </div>
  );
}
