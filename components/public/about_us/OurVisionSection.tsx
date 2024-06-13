import { Heading } from "@/components/common/typography/Heading";
import { Paragraph } from "@/components/common/typography/Paragraph";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";

interface IOurVisionSectionProps {
  lang: string;
}

const OurVisionSection: FC<IOurVisionSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading gradient="secondary" size="h3">
        {langSwitcher(
          lang,
          "Our Vision",
          "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
        )}
      </Heading>
      <div className="mt-[50px] flex flex-col gap-y-8">
        <Paragraph size="md">
          {langSwitcher(
            lang,
            "At Tech Element BD, our mission is to empower businesses and individuals by delivering innovative, reliable, and user-centric web applications. We are committed to driving digital transformation through cutting-edge technology, exceptional design, and unparalleled functionality. Our goal is to create solutions that not only meet the needs of today but also anticipate the demands of tomorrow. By fostering a culture of continuous learning, creativity, and excellence, we strive to set new standards in the industry and contribute to a more connected, efficient, and dynamic digital world.",
            "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
          )}
        </Paragraph>
      </div>
    </SectionWrapper>
  );
};

export default OurVisionSection;
