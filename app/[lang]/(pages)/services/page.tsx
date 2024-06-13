import ServiceCategoryCard from "@/components/common/cards/ServiceCategoryCard";
import { Heading } from "@/components/common/typography/Heading";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";

interface IOurWorksProps {
  params: { lang: string };
}

const OurWorks: FC<IOurWorksProps> = ({ params: { lang } }) => {
  return (
    <PageWrapper lang={lang}>
      <SectionWrapper>
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
          <ServiceCategoryCard lang={lang} />
          <ServiceCategoryCard lang={lang} />
          <ServiceCategoryCard lang={lang} />
          <ServiceCategoryCard lang={lang} />
        </div>
        <Button variant="warning" shape="pill">
          See more
        </Button>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OurWorks;
