import React, { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import IconWrapper from "../wrapper/IconWrapper";
import { Heading } from "../typography/Heading";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import { Paragraph } from "../typography/Paragraph";
import { Button } from "@/components/ui/button";
import { LucideSendHorizonal } from "lucide-react";

interface IServiceCardProps {
  lang: string;
}

const ServiceCard: FC<IServiceCardProps> = ({ lang }) => {
  return (
    <CardWrapper
      className={(fontSwitcher(lang), "w-full relative")}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <span className="absolute top-[5px] right-[50px] text-[120px] font-extrabold text-secondary/20">
        {langSwitcher(lang, "01", "")}
      </span>

      <Heading size="h4" className="w-1/2">
        {langSwitcher(
          lang,
          "Custom software solutions tailored to your specific needs",
          ""
        )}
      </Heading>

      <Paragraph className="mt-[30px] w-10/12" size="md">
        {langSwitcher(
          lang,
          "Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. It involves a variety of activities such as coding, testing, debugging, and refining to ensure that the final product meets user needs and performs efficiently. This process often begins with requirement analysis, where developers work closely with stakeholders to understand the desired features and functionalities.",
          ""
        )}
      </Paragraph>
      <div className="mt-10 flex items-center gap-x-[30px]">
        <Button gradient="secondary" shape="rounded">
          {langSwitcher(lang, "Live Demo", "")}
          <LucideSendHorizonal className="size-5 ml-2" />
        </Button>
        <Button variant="outline" shape="rounded">
          {langSwitcher(lang, "Live Demo", "")}
          <LucideSendHorizonal className="size-5 ml-2" />
        </Button>
      </div>
    </CardWrapper>
  );
};

export default ServiceCard;
