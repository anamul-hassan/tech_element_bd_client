import { Heading } from "@/components/common/typography/Heading";
import { Paragraph } from "@/components/common/typography/Paragraph";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";

interface IOurStorySectionProps {
  lang: string;
}

const OurStorySection: FC<IOurStorySectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading gradient="secondary" size="h3">
        {langSwitcher(
          lang,
          "Our Story",
          "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
        )}
      </Heading>
      <div className="mt-[50px] flex flex-col gap-y-8">
        <Paragraph size="md">
          {langSwitcher(
            lang,
            "At Tech Element BD, our journey began with a simple yet powerful vision: to revolutionize the digital landscape through innovative web applications. Founded by a team of passionate developers and visionary entrepreneurs, we embarked on a mission to create cutting-edge solutions that empower businesses and individuals alike. With a relentless focus on quality, user experience, and technological excellence, we've grown from a small startup into a leading web application company. Our story is one of dedication, creativity, and a commitment to pushing the boundaries of what's possible in the digital realm. Every line of code we write and every application we build is a testament to our belief in the transformative power of technology. Join us as we continue to innovate, inspire, and lead the way in the ever-evolving world of web applications.",
            "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
          )}
        </Paragraph>
        <Paragraph size="md">
          {langSwitcher(
            lang,
            "At Tech Element BD, our journey began with a simple yet powerful vision: to revolutionize the digital landscape through innovative web applications. Founded by a team of passionate developers and visionary entrepreneurs, we embarked on a mission to create cutting-edge solutions that empower businesses and individuals alike. With a relentless focus on quality, user experience, and technological excellence, we've grown from a small startup into a leading web application company. Our story is one of dedication, creativity, and a commitment to pushing the boundaries of what's possible in the digital realm. Every line of code we write and every application we build is a testament to our belief in the transformative power of technology. Join us as we continue to innovate, inspire, and lead the way in the ever-evolving world of web applications.",
            "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
          )}
        </Paragraph>
        <Paragraph size="md">
          {langSwitcher(
            lang,
            "At Tech Element BD, our journey began with a simple yet powerful vision: to revolutionize the digital landscape through innovative web applications. Founded by a team of passionate developers and visionary entrepreneurs, we embarked on a mission to create cutting-edge solutions that empower businesses and individuals alike. With a relentless focus on quality, user experience, and technological excellence, we've grown from a small startup into a leading web application company. Our story is one of dedication, creativity, and a commitment to pushing the boundaries of what's possible in the digital realm. Every line of code we write and every application we build is a testament to our belief in the transformative power of technology. Join us as we continue to innovate, inspire, and lead the way in the ever-evolving world of web applications.",
            "আমরা ইতিমধ্যেই কিছু দুর্দান্ত প্রকল্প তৈরি করেছি।"
          )}
        </Paragraph>
      </div>
    </SectionWrapper>
  );
};

export default OurStorySection;
