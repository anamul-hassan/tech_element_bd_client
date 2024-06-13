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
          {langSwitcher(lang, "Case Study", "আমাদের প্রকলসমূহ")}
        </Heading>
        <Heading gradient="secondary" size="h3">
          {langSwitcher(
            lang,
            "We built already some amazing projects",
            "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
          )}
        </Heading>

        <div className="w-full flex flex-col gap-y-[24px] mt-[50px] mb-[150px]"></div>
        <Button variant="warning" shape="pill">
          See more
        </Button>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OurWorks;
