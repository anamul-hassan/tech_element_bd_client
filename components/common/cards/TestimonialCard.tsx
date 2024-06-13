import { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import { Subheading } from "../typography/Subheading";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../typography/Label";

interface ITestimonialCardProps {
  lang: string;
  className?: string;
}

const TestimonialCard: FC<ITestimonialCardProps> = ({ lang, className }) => {
  return (
    <CardWrapper
      className={cn(
        fontSwitcher(lang),
        "w-[466px] p-8 hover:bg-secondary/10 duration-300 transition-all border-transparent border hover:border-secondary group",
        className
      )}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <div className="flex gap-x-[20px]">
        <Avatar className="size-[71.472px]  duration-300 transition-all border-transparent border group-hover:border-secondary">
          <AvatarImage src={"../../../public/photo-2.jpg"} />
          <AvatarFallback>KW</AvatarFallback>
        </Avatar>
        <div className="w-8/12">
          <Heading size="h4">
            {langSwitcher(lang, "Kate Winslate", "Kate Winslate")}
          </Heading>
          <Label size="sm">
            {langSwitcher(lang, "Fantabulous", "Fantabulous")}
          </Label>
        </div>
      </div>
      <Paragraph size="sm" className="mt-5 leading-6">
        {langSwitcher(
          lang,
          `Implementation involves writing code in programming languages such as Java, Python, or C++, while adhering to best practices and coding standards. Testing is critical to identify and fix bugs, ensuring the software is reliable and secure.`,
          `সফটওয়্যার ডেভেলপমেন্ট হল একটি গতিশীল এবং বহুমুখী ক্ষেত্র যা সফটওয়্যার অ্যাপ্লিকেশানগুলির সৃষ্টি, নকশা, কার्यान্বयन এবং রক্ষণাবেক্ষণকে জুড়ে দেয়। এটি কোডিং, পরীক্ষা, ডিবাগিং এবং পরিশোধন সহ বিভিন্ন কার্যকলাপ জড়িত করে, যাতে শেষ পণ্যটি ব্যবহারকারীর চাহিদা পূরণ করে এবং দক্ষতার সাথে সম্পাদন করে।`
        )}
      </Paragraph>
    </CardWrapper>
  );
};

export default TestimonialCard;
