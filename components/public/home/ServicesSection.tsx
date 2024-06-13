import ServiceCategoryCard from "@/components/common/cards/ServiceCategoryCard";
import BlurEffect from "@/components/common/effect/BlurEffect";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";

interface IServicesSectionProps {
  lang: string;
}

const ServicesSection: FC<IServicesSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper className="relative">
      <BlurEffect align="right_top" variant="secondary" blur="md" size="sm" />
      <BlurEffect align="left_bottom" variant="warning" blur="sm" size="sm" />
      <Heading className="leading-3 -mb-3" size="h4">
        {langSwitcher(lang, "Our Services", "আমাদের সেবাসমূহ")}
      </Heading>
      <Heading gradient="secondary" size="h3">
        {langSwitcher(lang, "Services We Offer", "আমাদের সেবাসমূহ")}
      </Heading>

      <div className="grid grid-cols-2 gap-[30px] w-full mt-[50px] mb-[150px]">
        <ServiceCategoryCard lang={lang} />
        <ServiceCategoryCard lang={lang} />
        <ServiceCategoryCard lang={lang} />
        <ServiceCategoryCard lang={lang} />
      </div>
      <Button variant="warning" shape="pill">
        See more
        <BlurEffect align="center" variant="warning" blur="sm" size="md" />
      </Button>
    </SectionWrapper>
  );
};

export default ServicesSection;
