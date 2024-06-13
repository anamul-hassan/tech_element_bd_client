import React, { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { Subheading } from "../typography/Subheading";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import IconWrapper from "../wrapper/IconWrapper";
import { LucideCommand } from "lucide-react";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";

interface IServiceCategoryCardProps {
  lang: string;
}

const ServiceCategoryCard: FC<IServiceCategoryCardProps> = ({ lang }) => {
  return (
    <CardWrapper
      className={fontSwitcher(lang)}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <div className="flex gap-x-[30px]">
        <IconWrapper size="lg" shape="circle" blur="sm">
          <LucideCommand className="size-[56px]" />
        </IconWrapper>
        <div className="w-8/12">
          <Subheading case="upper" variant="success" size="h4">
            {langSwitcher(
              lang,
              "Software Development",
              "সফটওয়্যার ডেভেলপমেন্ট"
            )}
          </Subheading>
          <Heading size="h4">
            {langSwitcher(
              lang,
              "Custom software solutions tailored to your specific needs",
              "আপনার নির্দিষ্ট চাহিদা অনুযায়ী গড়া সফটওয়্যার সমাধান।"
            )}
          </Heading>
        </div>
      </div>
      <Paragraph className="mt-9" size="md">
        {langSwitcher(
          lang,
          `Software development is a dynamic and multifaceted field that
        encompasses the creation, design, deployment, and maintenance of
        software applications. It involves a variety of activities such as
        coding, testing, debugging, and refining to ensure that the final
        product meets user needs and performs efficiently. This process often
        begins with requirement analysis, where developers work closely with
        stakeholders to understand the desired features and functionalities.`,
          `সফটওয়্যার ডেভেলপমেন্ট হল একটি গতিশীল এবং বহুমুখী ক্ষেত্র যা সফটওয়্যার অ্যাপ্লিকেশানগুলির সৃষ্টি, নকশা, কার्यान্বयन এবং রক্ষণাবেক্ষণকে জুড়ে দেয়। এটি কোডিং, পরীক্ষা, ডিবাগিং এবং পরিশোধন সহ বিভিন্ন কার্যকলাপ জড়িত করে, যাতে শেষ পণ্যটি ব্যবহারকারীর চাহিদা পূরণ করে এবং দক্ষতার সাথে সম্পাদন করে। এই প্রক্রিয়াটি প্রায়শই প্রয়োজনীয়তা বিশ্লেষণের সাথে শুরু হয়, যেখানে ডেভেলপাররা স্টেকহোল্ডারদের সাথে ঘনিষ্ঠভাবে কাজ করে পছন্দসই বৈশিষ্ট্য এবং কার্যকারিতাগুলি বোঝার জন্য।`
        )}
      </Paragraph>
    </CardWrapper>
  );
};

export default ServiceCategoryCard;
