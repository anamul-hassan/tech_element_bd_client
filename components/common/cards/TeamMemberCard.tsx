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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  LucideFacebook,
  LucideInstagram,
  LucideLinkedin,
  LucideTwitter,
} from "lucide-react";

interface ITeamMemberCardProps {
  lang: string;
  className?: string;
}

const TeamMemberCard: FC<ITeamMemberCardProps> = ({ lang, className }) => {
  return (
    <CardWrapper
      className={cn(
        fontSwitcher(lang),
        " p-8 hover:bg-secondary/10 duration-300 transition-all border-transparent border hover:border-secondary group",
        className
      )}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <div className="flex flex-col items-center gap-y-[30px] relative">
        <Avatar className="size-[147px] duration-300 transition-all border-transparent border group-hover:border-secondary absolute -top-1/2 left-1/2 -translate-x-1/2 z-10">
          <AvatarImage src={"./photo-2.jpg"} />
          <AvatarFallback>KW</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center mt-[70px]">
          <Heading size="h4">
            {langSwitcher(lang, "Kate Winslate", "Kate Winslate")}
          </Heading>
          <Label size="md">
            {langSwitcher(lang, "Fantabulous", "Fantabulous")}
          </Label>
        </div>
        <ul className="flex gap-x-5">
          <li>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button shape="pill" size="square">
                    <LucideFacebook className="size-[30px]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
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
                <TooltipContent side="top">
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
                <TooltipContent side="top">
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
                <TooltipContent side="top">
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </div>
    </CardWrapper>
  );
};

export default TeamMemberCard;
