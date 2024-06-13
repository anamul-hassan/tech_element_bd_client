import ProjectCard from "@/components/common/cards/ProjectCard";
import BlurEffect from "@/components/common/effect/BlurEffect";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";

interface IOurProjectSectionProps {
  lang: string;
}

const OurProjectSection: FC<IOurProjectSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading className="leading-3 -mb-3" size="h4">
        {langSwitcher(lang, "Our Projects", "আমাদের প্রকলসমূহ")}
      </Heading>
      <Heading gradient="secondary" size="h3">
        {langSwitcher(
          lang,
          "We built already some amazing projects",
          "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
        )}
      </Heading>

      <div className="w-full flex flex-col gap-y-[24px] mt-[50px] mb-[150px]">
        <ProjectCard lang={lang} />
        <ProjectCard reverse lang={lang} />
      </div>
      <Button variant="warning" shape="pill">
        See more
        <BlurEffect align="center" variant="warning" blur="sm" size="md" />
      </Button>
    </SectionWrapper>
  );
};

export default OurProjectSection;
