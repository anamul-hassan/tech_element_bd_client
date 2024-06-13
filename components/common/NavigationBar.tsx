"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  EMPLOYEE_PROFILE_NAVIGATION,
  NAVIGATION_LINKS,
  USER_PROFILE_NAVIGATION,
} from "@/constants/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavigationCollapsible from "../nav/NavigationCollapsible";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useLoadAuthDataQuery } from "@/redux/features/api/apiSlice";
import PageLoader from "./PageLoader";
import { useAppContext } from "@/context";
import ButtonLoader from "./ButtonLoader";
import NavigationProfileDropdown from "../nav/NavigationProfileDropdown";
import { useLogoutEveryoneMutation } from "@/redux/features/auth/authApi";
import Image from "next/image";
import Logo from "../../public/tech_element_bd_logo.svg";
import langSwitcher from "@/services/helper_functions/languageSwitcher";
import SectionWrapper from "./wrapper/SectionWrapper";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";

interface INavigationBarProps {
  lang: string;
}

const NavigationBar: FC<INavigationBarProps> = ({ lang }) => {
  const location = usePathname();
  // CONTEXT STATE
  const { load, setLoad } = useAppContext();
  // SCROLL STATE
  const [scrollY, setScrollY] = useState(0);

  // REDUX STATE
  const { isLoading: authLoading } = useLoadAuthDataQuery({});
  // LOGOUT CONTROLLER
  const [logoutEveryone, { error, isSuccess, isLoading: logoutLoding }] =
    useLogoutEveryoneMutation();

  const authData = useSelector((state: any) => state.auth.authData);

  useEffect(() => {
    setLoad(false);
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);
  // INITIAL LOADING STATE CHECK
  // LOGOUT HANDLER
  const handleLogout = async () => {
    await logoutEveryone({});
  };

  if (load) {
    return <PageLoader />;
  }

  return (
    <nav
      className={`w-full  py-2 fixed left-0 top-0 border-b border-transparent  z-50 transition-all duration-200  ${
        scrollY > 0 &&
        "bg-background/20 backdrop-blur-lg border-b border-secondary/15"
      }`}
    >
      <SectionWrapper
        className={`flex flex-row justify-between items-center my-0 ${fontSwitcher(
          lang
        )}`}
      >
        {/* LEFT SIDE NAVIGATION LINKS */}
        <ul className="flex gap-x-10 items-center justify-start w-5/12 ">
          <li>
            <Link
              className={
                location?.includes("our_works")
                  ? "navigation_link_active"
                  : "navigation_link"
              }
              href={`../../../${lang}/our_works`}
            >
              {langSwitcher(lang, "Our Works", "আমাদের কার্যক্রম")}
            </Link>
          </li>
          <li>
            <Link
              className={
                location?.includes("services")
                  ? "navigation_link_active"
                  : "navigation_link"
              }
              href={`../../../${lang}/services`}
            >
              {langSwitcher(lang, "Services", "আমাদের কার্যক্রম")}
            </Link>
          </li>
          <li>
            <Link
              className={
                location?.includes("case_study")
                  ? "navigation_link_active"
                  : "navigation_link"
              }
              href={`../../../${lang}/case_study`}
            >
              {langSwitcher(lang, "Case Study", "পদ্ধতিগত অধ্যয়ন ")}
            </Link>
          </li>
        </ul>
        {/* LOGO */}
        <div className="w-2/12 justify-center flex">
          <Link href={`../../../${lang}`}>
            <Image
              src={Logo}
              alt="tech element bg logo"
              width={221}
              height={35}
            />
          </Link>
        </div>

        {/* LEFT SIDE NAVIGATION LINKS */}
        <div className="flex justify-end items-center w-5/12 ">
          <ul className="flex items-center gap-x-10 h-12">
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <ThemeSwitcher lang={lang} />
            </li>
            <li>
              <Link
                className={
                  location === "about_us"
                    ? "navigation_link_active"
                    : "navigation_link"
                }
                href={`../../../${lang}/about_us`}
              >
                {langSwitcher(lang, "About Us", "আমাদের কার্যক্রম")}
              </Link>
            </li>

            {authLoading ? (
              <Button
                className="flex justify-center items-center transition-all duration-300"
                shape="rounded"
                variant="ghost"
                disabled
              >
                <ButtonLoader />
              </Button>
            ) : authData?.email ? (
              ""
            ) : (
              <li>
                <Link href={`../../${lang}/auth/user_login`}>
                  <Button shape="rounded" variant="secondary">
                    {lang === "en" ? "Login" : "লগইন"}
                  </Button>
                </Link>
              </li>
            )}
            {((authData?.email && authData?.role === "admin") ||
              authData?.role === "teacher" ||
              authData?.role === "manager") && (
              <li className="mr-2">
                <NavigationProfileDropdown
                  handleLogout={handleLogout}
                  isLoading={logoutLoding}
                  path={`../../${lang}/${authData?.role}`}
                  links={EMPLOYEE_PROFILE_NAVIGATION}
                  lang={lang}
                />
              </li>
            )}
            {authData?.email && authData?.role === "user" && (
              <li className="mr-2">
                <NavigationProfileDropdown
                  handleLogout={handleLogout}
                  isLoading={logoutLoding}
                  path={`../../${lang}/${authData?.role}`}
                  links={USER_PROFILE_NAVIGATION}
                  lang={lang}
                />
              </li>
            )}
          </ul>
          <ul>
            {/* <Sheet>
              <SheetTrigger className="inline-flex md:hidden  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground p-[6px]">
                <HiMenuAlt1 className="text-lg opacity-80" />
              </SheetTrigger>
              <SheetContent>
                <div className="my-8 overflow-y-auto scroll-hidden h-full">
                  {NAVIGATION_LINKS.length > 0 &&
                    NAVIGATION_LINKS.map((menuItems: any) => (
                      <NavigationCollapsible
                        path={`../../${lang}`}
                        location={location}
                        lang={lang}
                        key={menuItems.key}
                        menuItems={menuItems}
                      />
                    ))}
                </div>
              </SheetContent>
            </Sheet> */}
          </ul>
        </div>
      </SectionWrapper>
    </nav>
  );
};

export default NavigationBar;
