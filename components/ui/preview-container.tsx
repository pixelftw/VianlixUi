import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RotateCwIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type PreviewContainerProps = {
  dropDownProps?: {
    options: string[];
    onChange: (v: string) => void;
    defaultValue?: string;
  };
  onRestart?: () => void;
  className?: string;
} & PropsWithChildren;

export function PreviewContainer({
  children,
  dropDownProps,
  onRestart,
  className,
}: PreviewContainerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden w-full min-h-[20rem] md:min-h-[40rem] flex justify-center items-center border mt-6 border-gray-800 rounded-xl",
        className
      )}
    >
      <div className="absolute inset-0 p-8">
        <div className="absolute right-2 top-2 flex gap-2">
          {dropDownProps && (
            <Select
              onValueChange={dropDownProps.onChange}
              defaultValue={dropDownProps?.defaultValue}
            >
              <SelectTrigger className="w-28 capitalize">
                <SelectValue placeholder="Select a Variant" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Variants</SelectLabel>
                  {dropDownProps.options.map((variant) => (
                    <SelectItem
                      className="capitalize"
                      key={variant}
                      value={variant}
                    >
                      {variant}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          {onRestart ? (
            <Button size="icon" variant="secondary" onClick={onRestart}>
              <RotateCwIcon />
            </Button>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
