// React
import { useState, useEffect } from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Images
import LogoIcon from "@/public/logo-icon.png";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState("loading");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    ["Home", "/home"],
    ["Overview", "/overview"],
    ["Roadmap", "/roadmap"],
    ["Charity", "/charity"],
    ["Contest", "/contest"],
  ];

  const btnsItems = ["Presale", "Airdrop"];

  const handleMenuBtn = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  useEffect(() => {
    innerWidth >= 768 ? setScreenWidth("desktop") : setScreenWidth("mobile");
  }, []);

  return (
    <>
      {screenWidth == "desktop" ? (
        <header className="bg-[#000000CC] relative z-[90]">
          <div
            className={`container mx-auto py-5 flex items-center justify-between ${
              isMenuOpen ? "fixed top-0 left-0" : ""
            }`}
          >
            <div className="logo text-[#F9C301] font-bold flex items-center gap-1">
              <Image src={LogoIcon} alt="Fratun Logo" />
              Fratun
            </div>
            <nav>
              <ul className="flex items-center justify-center gap-5">
                {navItems.map((item, index) => {
                  return (
                    <Link
                      href={item[1]}
                      key={index}
                      className="text-honeydew text-[16px] hover:underline hover:underline-offset-2 capitalize"
                    >
                      <li>{item[0]}</li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
            <div className="btns flex gap-4 items-center justify-center">
              {btnsItems.map((btn, index) => {
                return (
                  <button
                    key={index}
                    className="flex justify-center items-center rounded-lg capitalize bg-electricGreen text-[#463399] font-semibold py-3 px-4 hover:opacity-75 duration-300"
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          </div>
        </header>
      ) : (
        <header className="bg-[#030303] overflow-hidden w-screen">
          <div className="container mx-auto py-5 flex items-center justify-between z-[99] re]lative bg-[#030303] relative">
            <div className="logo text-[#F9C301] font-bold flex items-center gap-1">
              <Image src={LogoIcon} alt="Fratun Logo" />
              Fratun
            </div>
            <div className="menu-icon" onClick={handleMenuBtn}>
              {isMenuOpen ? (
                <CloseIcon className="text-white" />
              ) : (
                <MenuIcon className="text-white" />
              )}
            </div>
          </div>
          <div
            className={`close fixed top-0 w-screen h-[66px] z-[97] bg-black text-white flex justify-center items-center hover:opacity-60 ${
              isMenuOpen ? "" : "hidden"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon />
          </div>
          <nav
            className={`z-[98] fixed w-screen bg-[#030303] left-0 duration-300 h-screen top-65px py-5 ${
              isMenuOpen ? "" : "translate-y-[-120%]"
            }`}
          >
            <ul className="flex flex-col justify-center gap-5 items-center">
              {navItems.map((item, index) => {
                return (
                  <Link
                    href={item[1]}
                    key={index}
                    className="text-honeydew text-center"
                  >
                    <li>{item[0]}</li>
                  </Link>
                );
              })}
            </ul>
            <hr className="my-4" />
            <div className="btns flex gap-4 items-center justify-center">
              {btnsItems.map((btn, index) => {
                return (
                  <Link
                    href="a"
                    key={index}
                    className="flex justify-center items-center rounded-lg capitalize bg-electricGreen text-[#463399] font-semibold py-3 px-4 hover:opacity-75 duration-300"
                  >
                    {btn}
                  </Link>
                );
              })}
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
