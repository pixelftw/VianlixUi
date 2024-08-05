import { PropsWithChildren } from "react";

export function PreviewBox({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full min-h-[20rem] md:min-h-[40rem] flex justify-center items-center border mt-6 border-gray-800 rounded-xl">
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
