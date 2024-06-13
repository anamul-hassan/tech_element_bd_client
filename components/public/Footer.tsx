import React, { FC } from "react";
import SectionWrapper from "../common/wrapper/SectionWrapper";
import Image from "next/image";
import Logo from "../../public/tech_element_bd_logo.svg";
import { Label } from "../common/typography/Label";
import { Button } from "../ui/button";
import {
  LucideFacebook,
  LucideInstagram,
  LucideLinkedin,
  LucideTwitter,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import BlurEffect from "../common/effect/BlurEffect";

interface IFooterProps {
  lang: string;
}

const Footer: FC<IFooterProps> = ({ lang }) => {
  return (
    <SectionWrapper className="relative">
      <BlurEffect align="left_bottom" variant="tertiary" blur="sm" size="sm" />
      <div className="py-[70px] flex w-full">
        <div className="flex w-1/2 flex-col">
          <Image
            src={Logo}
            alt="tech element bg logo"
            width={221}
            height={35}
          />
          <Label className="mb-[40px] mt-[6px]" size="md">
            Get in Touch. We want to hear from you!
          </Label>
          <Label className="mb-[212px]" size="sm">
            hello@techelementbd.com
          </Label>
          <Label size="md">© 2024 All Right Reserved. | Tech Element BD.</Label>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <div className="flex gap-x-20">
            <ul className="flex flex-col gap-y-5">
              <li>
                <Label size="md">Services</Label>
              </li>
              <li>
                <Label size="md">Case Studies</Label>
              </li>
              <li>
                <Label size="md">Blog</Label>
              </li>
              <li>
                <Label size="md">About Us</Label>
              </li>
            </ul>
            <ul className="flex flex-col gap-y-5">
              <li>
                <Label size="md">Services</Label>
              </li>
              <li>
                <Label size="md">Case Studies</Label>
              </li>
              <li>
                <Label size="md">Blog</Label>
              </li>
              <li>
                <Label size="md">About Us</Label>
              </li>
            </ul>
          </div>
          <ul className="flex gap-x-5 mt-[50px] mr-12">
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button shape="pill" size="square">
                      <LucideFacebook className="size-[30px]" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button shape="pill" size="square">
                      <LucideTwitter className="size-[30px]" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Twitter &#40;X&#41;</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button shape="pill" size="square">
                      <LucideLinkedin className="size-[30px]" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Linkedin</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button shape="pill" size="square">
                      <LucideInstagram className="size-[30px]" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
