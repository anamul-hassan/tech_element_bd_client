import { Heading } from "@/components/common/typography/Heading";
import { Label } from "@/components/common/typography/Label";
import { Paragraph } from "@/components/common/typography/Paragraph";
import CardWrapper from "@/components/common/wrapper/CardWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import { LucideAtSign, LucideMapPin, LucideSmartphone } from "lucide-react";
import React, { FC } from "react";

interface ICallToActionSectionProps {
  lang: string;
}

const CallToActionSection: FC<ICallToActionSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading
        gradient="secondary"
        className="text-center w-[90%] mb-[50px]"
        size="h3"
      >
        {langSwitcher(
          lang,
          "Partner with us to unlock new possibilities, streamline process, and elevate your digital presence",
          "ব্যবহারকারী পর্যালোচনা"
        )}
      </Heading>
      <div className="flex gap-x-[30px] w-full">
        <div className="w-full flex flex-col gap-y-10">
          <div className="flex gap-x-[30px]">
            <Input
              type="text"
              placeholder={langSwitcher(lang, "First Name", "")}
            />
            <Input
              type="text"
              placeholder={langSwitcher(lang, "Sure Name", "")}
            />
          </div>
          <Input
            type="email"
            placeholder={langSwitcher(lang, "Email Address", "")}
          />
          <div className="flex gap-x-[30px]">
            <Input
              type="text"
              placeholder={langSwitcher(lang, "Country", "")}
            />
            <Input
              type="phone"
              placeholder={langSwitcher(lang, "Phone ", "")}
            />
          </div>
          <Textarea placeholder={langSwitcher(lang, "Message", "")} />
          <div className="flex justify-end">
            <Button shape="rounded" variant="secondary">
              Send us
            </Button>
          </div>
        </div>
        <CardWrapper
          variant="secondary"
          blur="sm"
          rounded="xl"
          className="w-[500px] -mt-1.5"
        >
          <Heading size="h4">
            {langSwitcher(lang, "Contact Information", "")}
          </Heading>
          <ul className="flex flex-col gap-y-5 mt-8">
            <li>
              <span className="flex gap-x-4 items-center">
                <LucideMapPin className="size-6" />
                <Label size="md">
                  {langSwitcher(lang, "Office Address:", "")}
                </Label>
              </span>
              <Paragraph className="ml-10" size="sm">
                {langSwitcher(
                  lang,
                  `Motijheel Branch. Krishi Bhaban, 49-51 Dilkusha Commercial Area, Dhaka-1000`,
                  ""
                )}
              </Paragraph>
            </li>
            <li>
              <span className="flex gap-x-4 items-center">
                <LucideAtSign className="size-6" />
                <Label size="md">
                  {langSwitcher(lang, "Email Address:", "")}
                </Label>
              </span>
              <Paragraph className="ml-10" size="sm">
                {langSwitcher(lang, "mail@example.com", "")}
              </Paragraph>
            </li>
            <li>
              <span className="flex gap-x-4 items-center">
                <LucideSmartphone className="size-6" />
                <Label size="md">
                  {langSwitcher(lang, "Phone number:", "")}
                </Label>
              </span>
              <Paragraph className="ml-10" size="sm">
                {langSwitcher(lang, "+880 101212121212", "")}
              </Paragraph>
              <Paragraph className="ml-10" size="sm">
                {langSwitcher(lang, "+880 101212121212", "")}
              </Paragraph>
            </li>
          </ul>
        </CardWrapper>
      </div>
    </SectionWrapper>
  );
};

export default CallToActionSection;
