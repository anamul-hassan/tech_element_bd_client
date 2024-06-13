import {
  InfiniteCarousel,
  InfiniteCarouselItem,
} from "@/components/common/InfiniteCarousel";
import TestimonialCard from "@/components/common/cards/TestimonialCard";
import BlurEffect from "@/components/common/effect/BlurEffect";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";

interface ITestimonialSectionProps {
  lang: string;
}

const TestimonialSection: FC<ITestimonialSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper className="w-full overflow-hidden">
      <Heading className="leading-3 -mb-3" size="h4">
        {langSwitcher(lang, "Testimonials", "ব্যবহারকারী পর্যালোচনা")}
      </Heading>
      <Heading gradient="secondary" size="h3">
        {langSwitcher(
          lang,
          "Our Happy Clients",
          "যারা আমাদের সেবায় সফল হয়েছেন"
        )}
      </Heading>
      <div className="flex flex-col gap-y-[30px] mt-[50px] overflow-hidden w-full">
        <InfiniteCarousel className="w-full gap-x-[30px] ">
          <InfiniteCarouselItem>
            <TestimonialCard lang={lang} />
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <TestimonialCard lang={lang} />
          </InfiniteCarouselItem>
        </InfiniteCarousel>
        <InfiniteCarousel className="w-full gap-x-[30px]" direction="right">
          <InfiniteCarouselItem>
            <TestimonialCard lang={lang} />
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <TestimonialCard lang={lang} />
          </InfiniteCarouselItem>
        </InfiniteCarousel>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialSection;
