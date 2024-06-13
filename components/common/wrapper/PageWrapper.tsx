import React, { ReactNode, FC } from "react";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import { cn } from "@/lib/utils";
interface IPageWrapperProps {
  children: any;
  lang: string;
}
const PageWrapper: FC<IPageWrapperProps> = ({ children, lang }) => {
  return (
    <section className={cn(fontSwitcher(lang))}>
      <section className="mt-[60px]">{children}</section>
    </section>
  );
};

export default PageWrapper;
