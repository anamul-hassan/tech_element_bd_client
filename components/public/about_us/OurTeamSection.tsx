import TeamMemberCard from "@/components/common/cards/TeamMemberCard";
import { Heading } from "@/components/common/typography/Heading";
import { Paragraph } from "@/components/common/typography/Paragraph";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";

interface IOurTeamSectionProps {
  lang: string;
}

const OurTeamSection: FC<IOurTeamSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading gradient="secondary" size="h3">
        {langSwitcher(
          lang,
          "Our Team",
          "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
        )}
      </Heading>
      <div className="grid grid-cols-3 gap-y-[100px] gap-[30px] w-full mt-[140px]">
        <TeamMemberCard lang={lang} />
        <TeamMemberCard lang={lang} />
        <TeamMemberCard lang={lang} />
        <TeamMemberCard lang={lang} />
        <TeamMemberCard lang={lang} />
        <TeamMemberCard lang={lang} />
      </div>
    </SectionWrapper>
  );
};

export default OurTeamSection;
