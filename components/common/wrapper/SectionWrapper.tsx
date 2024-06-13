import React, { ReactNode, FC } from "react";
import { cn } from "@/lib/utils";
interface ISectionWrapperProps {
  children: ReactNode;
  className?: string;
}
const SectionWrapper: FC<ISectionWrapperProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "w-[1300px] flex flex-col items-center  mx-auto my-[150px]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
