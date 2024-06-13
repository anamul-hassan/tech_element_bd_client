import {
  InfiniteCarousel,
  InfiniteCarouselItem,
} from "@/components/common/InfiniteCarousel";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";
import Ashrafee from "../../../public/brands/ashrafee.png";
import Fntabulous from "../../../public/brands/fantabulous_main.png";
import GenerationAppleBD from "../../../public/brands/generation-apple-bd.png";
import KRY from "../../../public/brands/kry-favicon.png";
import PhoneFeatureBD from "../../../public/brands/phone-features-bd.png";
import Safwans from "../../../public/brands/safwans_favicon.png";
import Image from "next/image";

interface IFeaturedSectionProps {
  lang: string;
}

const FeaturedSection: FC<IFeaturedSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper className="w-full overflow-hidden">
      <Heading gradient="secondary" size="h3">
        {langSwitcher(
          lang,
          "The companies trust our platform",
          "যারা আমাদের সেবায় সফল হয়েছেন"
        )}
      </Heading>
      <div className="flex flex-col gap-y-[30px] mt-[50px] overflow-hidden w-full">
        <InfiniteCarousel className="gap-x-[30px]" speed="slow">
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-[#75FFF7] m-2 to-[#FFFFFF] size-[115px] flex justify-center items-center">
              <Image src={Ashrafee} alt="Ashrafee" width={115} height={115} />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-[#75FFF7] m-2 to-[#FFFFFF] size-[115px] flex justify-center items-center">
              <Image
                className="size-[110px]"
                src={Fntabulous}
                alt="Fntabulous"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-[#75FFF7] m-2 to-[#FFFFFF] size-[115px] flex justify-center items-center">
              <Image
                className="size-[110px]"
                src={GenerationAppleBD}
                alt="GenerationAppleBD"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-[#75FFF7] m-2 to-[#FFFFFF] size-[115px] flex justify-center items-center">
              <Image
                className="size-[110px]"
                src={KRY}
                alt="KRY"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full bg-gradient-to-tr from-[#75FFF7] m-2 to-[#FFFFFF] size-[115px] flex justify-center items-center">
              <Image
                className="size-[110px]"
                src={PhoneFeatureBD}
                alt="PhoneFeatureBD"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
          <InfiniteCarouselItem>
            <div className="rounded-full flex justify-center items-center bg-gradient-to-tr from-[#75FFF7] m-2 to-[#FFFFFF] size-[115px]">
              <Image
                className="size-[110px]"
                src={Safwans}
                alt="Safwans"
                width={110}
                height={110}
              />
            </div>
          </InfiniteCarouselItem>
        </InfiniteCarousel>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedSection;
