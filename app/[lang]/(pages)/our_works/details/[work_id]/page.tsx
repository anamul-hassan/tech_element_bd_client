import PhotoLazyLoader from "@/components/common/photo/PhotoLazyLoader";
import { Heading } from "@/components/common/typography/Heading";
import { Subheading } from "@/components/common/typography/Subheading";
import PageWrapper from "@/components/common/wrapper/PageWrapper";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import React, { FC } from "react";
import Thumb from "../../../../../../public/project_thumbnail.png";
import { Button } from "@/components/ui/button";
import { LucideImage } from "lucide-react";
import { Paragraph } from "@/components/common/typography/Paragraph";
import ProjectCard from "@/components/common/cards/ProjectCard";
import { Tag } from "@/components/common/typography/Tag";
interface IOurWorkDetailsProps {
  params: { lang: string };
}

const OurWorkDetails: FC<IOurWorkDetailsProps> = ({ params: { lang } }) => {
  return (
    <PageWrapper lang={lang}>
      {/* PROJECT DETAILS SECTION */}
      <SectionWrapper>
        <div className="w-full">
          <Subheading case="upper" variant="success" size="h4">
            {langSwitcher(
              lang,
              "Custom point of sale application",
              "সফটওয়্যার ডেভেলপমেন্ট"
            )}
          </Subheading>
          <Heading size="h3">
            {langSwitcher(
              lang,
              "We build this application for Smart Gadget & Gear",
              "আপনার নির্দিষ্ট চাহিদা অনুযায়ী গড়া সফটওয়্যার সমাধান।"
            )}
          </Heading>
        </div>
        <div className="mt-[30px]">
          <PhotoLazyLoader
            className="w-full rounded-xl overflow-hidden border-2 border-secondary/20"
            src={Thumb}
          />
          <div className="mt-3 flex flex-x-6">
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
            <Button size="square" shape="rounded">
              <LucideImage className="size-[35px]" />
            </Button>
          </div>
        </div>

        {/* PARAGRAPH SECTIONS */}
        <div className="mt-[50px] flex flex-col gap-y-[50px]">
          {/* INSPIRATION */}
          <div>
            <Heading size="h4">{langSwitcher(lang, "Inspiration", "")}</Heading>
            <Paragraph size="md">
              {langSwitcher(
                lang,
                `Software development is a dynamic and multifaceted field that
              encompasses the creation, design, deployment, and maintenance of
              software applications. Software development is a dynamic and
              multifaceted field that encompasses the creation, design,
              deployment, and maintenance of software applications. Software
              development is a dynamic and multifaceted field that encompasses
              the creation, design, deployment, and maintenance of software
              applications. Software development is a dynamic and multifaceted
              field that encompasses the creation, design, deployment, and
              maintenance of software applications. Software development is a
              dynamic and multifaceted field that encompasses the creation,
              design, deployment, and maintenance of software applications.
              Software development is a dynamic and multifaceted field that
              encompasses the creation, design, deployment, and maintenance of
              software applications.`,
                ""
              )}
            </Paragraph>
          </div>
          {/* CASE STUDY */}
          <div>
            <Heading size="h4">{langSwitcher(lang, "Case Study", "")}</Heading>
            <div className="flex flex-col gap-y-[30px]">
              <Paragraph size="md">
                {langSwitcher(
                  lang,
                  `Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. `,
                  ""
                )}
              </Paragraph>
              <Paragraph size="md">
                {langSwitcher(
                  lang,
                  `Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. `,
                  ""
                )}
              </Paragraph>
            </div>
          </div>
          {/* TECHNOLOGIES */}
          <div>
            <Heading size="h4">
              {langSwitcher(lang, "Technologies", "")}
            </Heading>
            <div className="flex gap-x-4">
              <Tag variant="secondary" shape="pill">
                TypeScript
              </Tag>
              <Tag variant="secondary" shape="pill">
                Next.js
              </Tag>
              <Tag variant="secondary" shape="pill">
                Node.js
              </Tag>
              <Tag variant="secondary" shape="pill">
                Prisma
              </Tag>
              <Tag variant="secondary" shape="pill">
                MySQL
              </Tag>
              <Tag variant="secondary" shape="pill">
                ShadCN
              </Tag>
            </div>
          </div>
          {/* PURPOSE FOR SELECTING TECHNOLOGIES */}
          <div>
            <Heading className=" text-opacity-80" size="h4">
              {langSwitcher(
                lang,
                "Purpose For Selecting These Technologies",
                ""
              )}
            </Heading>
            <Paragraph size="md">
              {langSwitcher(
                lang,
                `Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. Software development is a dynamic and multifaceted field that encompasses the creation, design, deployment, and maintenance of software applications. `,
                ""
              )}
            </Paragraph>
          </div>
        </div>
      </SectionWrapper>
      {/* RELATED PRODUCTS */}
      <SectionWrapper className="flex flex-col gap-y-[24px] mt-[50px] mb-[150px]">
        <Heading className="text-left w-full" size="h4">
          {langSwitcher(lang, "Related Projects", "")}
        </Heading>
        <ProjectCard lang={lang} />
        <ProjectCard reverse lang={lang} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OurWorkDetails;
