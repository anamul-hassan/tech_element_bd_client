import { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { Subheading } from "../typography/Subheading";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import { Paragraph } from "../typography/Paragraph";
import { Heading } from "../typography/Heading";
import Image from "next/image";
import CardThumbnail from "../../../public/project_thumbnail.png";

interface IProjectCardProps {
  lang: string;
  reverse?: boolean;
}

const ProjectCard: FC<IProjectCardProps> = ({ lang, reverse = false }) => {
  return (
    <CardWrapper
      className={`${fontSwitcher(lang)} p-0 flex overflow-hidden ${
        reverse && " flex-row-reverse"
      }`}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <div className="w-1/2 p-[35px]">
        <div className="mb-[20px]">
          <Subheading case="upper" variant="success" size="h4">
            {langSwitcher(
              lang,
              "Custom point of sale application",
              "কাস্টম পয়েন্ট অফ সেল অ্যাপ্লিকেশান"
            )}
          </Subheading>
          <Heading size="h4">
            {langSwitcher(
              lang,
              "We build this application for Smart Gadget & Gear",
              "এই অ্যাপটি আমরা স্মার্ট গ্যাজেট এবং গিয়ারের জন্য তৈরি করেছি।"
            )}
          </Heading>
        </div>
        <div className="mb-[11px]">
          <Heading size="h5">
            {langSwitcher(lang, "Inspiration", "অনুপ্রেরণা")}
          </Heading>
          <Paragraph size="md">
            {langSwitcher(
              lang,
              `Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. details`,
              "সফটওয়্যার ডেভেলপমেন্ট হল একটি গতিশীল এবং বহুমুখী ক্ষেত্র, যা সফটওয়্যার অ্যাপ্লিকেশানের সম্পূর্ণ জীবনচক্র জুড়ে বিস্তৃত কার্যকলাপকে (Bistirno karyakolapke) অন্তর্ভুক্ত করে, যার মধ্যে রয়েছে।"
            )}
          </Paragraph>
        </div>
        <div>
          <Heading size="h5">
            {langSwitcher(lang, "Case Study", "কেইস স্ট্যাডি")}
          </Heading>
          <Paragraph size="md">
            {langSwitcher(
              lang,
              `Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. details`,
              "সফটওয়্যার ডেভেলপমেন্ট হল একটি গতিশীল এবং বহুমুখী ক্ষেত্র, যা সফটওয়্যার অ্যাপ্লিকেশানের সম্পূর্ণ জীবনচক্র জুড়ে বিস্তৃত কার্যকলাপকে (Bistirno karyakolapke) অন্তর্ভুক্ত করে, যার মধ্যে রয়েছে।"
            )}
          </Paragraph>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center  overflow-hidden">
        <Image
          src={CardThumbnail}
          alt="project thumbnail"
          width={584}
          height={471}
          className="scale-[200%] hover:scale-[210%] duration-300 overflow-hidden -rotate-12"
        />
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
