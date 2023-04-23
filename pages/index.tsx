// React
import { useState, useEffect } from "react";

// Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Images
import LandingBallDesktop from "@/public/landing-ball-desktop.png";
import LandingPhoneDesktop from "@/public/landing-phone-desktop.png";
import LogoImg from "@/public/logo-img.png";
import FeateuresBallDesktop from "@/public/features-ball-desktop.png";
import FeateuresGreenBallDesktop from "@/public/features-green-ball-desktop.png";
import OnMobileAndDesktop from "@/public/on-mobile-and-desktop.png";
import SocialiseAndMakeMoney from "@/public/socialise-and-make-money.png";
import MoreThanSocialising from "@/public/more-than-socialising.png";
import BeAnInfluencer from "@/public/be-an-influencer.png";
import SmileFace from "@/public/smile-face.png";
import HelpBackground from "@/public/help-background.png";

// Icons
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState("loading");

  const featuresItems = [
    {
      img: MoreThanSocialising,
      title: "More",
      head: "than Socialising",
      text: "With a variety of socialising and making money features, you have endless options when it comes to making money online by expressing yourself.",
    },
    {
      img: BeAnInfluencer,
      title: "Be an Influencer",
      head: "and make money",
      text: "Provide high quality contents on your timeline and make money with them automatically.",
    },
    {
      img: SocialiseAndMakeMoney,
      title: "Socialise",
      head: "and make money",
      text: "Build a community of strong followers then earn massively",
    },
    {
      img: OnMobileAndDesktop,
      title: "On Mobile",
      head: "and Desktop",
      text: "Activities on Fratun social app are 100% synced between devices, including members to members sharing of data.",
    },
  ];

  useEffect(() => {
    innerWidth >= 768 ? setScreenWidth("desktop") : setScreenWidth("mobile");
    console.log(screenWidth);
  }, []);

  return (
    <>
      <Head>
        <title>Fratun</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <main className="bg-[url('/background-desktop.png')] bg-repeat">
        <Header />

        {/* End Landing */}
        {screenWidth == "desktop" ? (
          <div className="landing py-10 overflow-hidden">
            <div className="container mx-auto">
              <div className="w-full h-[500px] bg-[#0BF10680] relative rounded-lg border-t-[3px] border-electricGreen">
                <div
                  className="gradient bg-gradient-to-b from-[#050505] to-[#022301] absolute top-0 left-0 w-full h-full opacity-[80%] rounded-lg"
                  style={{
                    boxShadow:
                      "0 20px 24px 0 rgba(0,0,0,24%), inset 0 12px 30px 0 rgba(255,255,255, 30%) ",
                  }}
                ></div>
                <div className="background-imgs absolute flex items-center justify-around h-full w-full">
                  <Image
                    src={LandingBallDesktop}
                    alt="Ball 1"
                    height={450}
                    className="mix-blend-hard-light"
                  />
                  <Image src={LandingPhoneDesktop} alt="Phone" height={450} />
                </div>
                <div className="text w-1/2 h-full text-center px-5 relative z-[3] flex flex-col py-5 items-center justify-evenly text-honeydew">
                  <h1 className="text-4xl font-semibold">
                    Welcome to the future of Social Interactions
                  </h1>
                  <p className="text-2xl font-medium px-10">
                    We make connecting with the world fast, fluid, and fun.
                  </p>
                  <p className="text-md font-medium px-10">
                    Be involved in a social media platform for crypto lovers
                    that pays you to engage.
                  </p>
                  <button className="bg-[#7050F9] text-[#6DFB6A] py-3 px-4 rounded-lg hover:opacity-80 duration-300">
                    Download White Paper
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="landing overflow-hidden">
            {/*Mobile Version*/}
            <div className="container mx-auto py-5">
              <div className="w-full h-[300px] bg-[#0BF10680] relative rounded-lg border-t-[3px] border-electricGreen">
                <div
                  className="gradient bg-gradient-to-b from-[#050505] to-[#022301] absolute top-0 left-0 w-full h-full opacity-[80%] rounded-lg"
                  style={{
                    boxShadow:
                      "0 20px 24px 0 rgba(0,0,0,24%), inset 0 12px 30px 0 rgba(255,255,255, 30%) ",
                  }}
                ></div>
                <div className="background-imgs absolute flex items-start justify-start h-full w-full">
                  <Image
                    src={LandingBallDesktop}
                    alt="Ball 1"
                    height={200}
                    className="mix-blend-hard-light"
                  />
                </div>
                <div className="text h-full relative z-[3] flex flex-col  items-center justify-evenly text-honeydew px-4">
                  <h1 className="text-4xl font-semibold">
                    Welcome to the future of Social Interactions
                  </h1>
                  <button className="bg-[#7050F9] text-[#6DFB6A] py-3 px-4 rounded-lg hover:opacity-80 duration-300">
                    Download White Paper
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* End Landing */}

        {/* Start Download App */}
        <div className="download-app py-3">
          <div className="container mx-auto text-center">
            <div className="logo mx-auto w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] flex flex-col bg-[#1F1F1F] rounded-lg border-t-[3px] border-electricGreen p-[10px] justify-center items-center">
              <Image
                src={LogoImg}
                alt="Logo Icon"
                height={screenWidth == "desktop" ? 120 : 75}
              />
              <span className="text-[#F9C301] font-bold text-2xl">Fratun</span>
            </div>
            <p className="text-honeydew py-5 font-medium">
              Install the Fratun mobile app
            </p>
            <div className="btns text-[#E2E2E2] flex lg:flex-row flex-col items-center justify-center gap-5">
              <button className="rounded-lg bg-[#525252] px-4 py-3 flex gap-3 justify-center items-center w-full lg:w-auto">
                <AppleIcon />
                <span className="text-electricGreen">App Store</span>
                <span>|</span>
                <span>Soon</span>
              </button>
              <button className="rounded-lg bg-[#525252] px-4 py-3 flex gap-3 justify-center items-center w-full lg:w-auto">
                <GoogleIcon />
                <span className="text-electricGreen">Google Play</span>
                <span>|</span>
                <span>Soon</span>
              </button>
            </div>
          </div>
        </div>
        {/* End Download App */}

        {/* Start Features */}
        <div className="features relative">
          <div className="container mx-auto relative z-[3] py-10">
            <div className="features-items flex flex-col 2xl:flex-row justify-between items-center gap-20 2xl:gap-5">
              {featuresItems.map((item, index) => {
                return (
                  <div
                    className="item text-honeydew flex flex-col 2xl:gap-5 items-center justify-center"
                    key={index}
                  >
                    <Image
                      src={item.img}
                      alt={item.title + item.head + "Image"}
                      height={150}
                      className="h-[150px]"
                    />
                    <h3 className="font-semibold text-xl w-[250px] h-[60px] text-center">
                      <span className="bg-gradient-to-r from-electricGreen to-[#037500] bg-clip-text text-transparent">
                        {item.title}{" "}
                      </span>
                      {item.head}
                    </h3>
                    <div className="h-auto 2xl:h-[200px] w-full 2xl:w-[300px] p-5 bg-[#0BF10680] relative rounded-lg border-t-[3px] border-electricGreen">
                      <div
                        className="gradient bg-gradient-to-b from-[#050505] to-[#022301] absolute top-0 left-0 w-full h-full opacity-[80%] rounded-lg"
                        style={{
                          boxShadow:
                            "0 20px 24px 0 rgba(0,0,0,24%), inset 0 12px 30px 0 rgba(255,255,255, 30%) ",
                        }}
                      ></div>
                      <p className="relative z-[2] text-lg">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Image
            src={FeateuresGreenBallDesktop}
            alt="Green Ball"
            className="absolute top-0 right-0 hidden lg:block"
          />
        </div>
        {/* End Features */}

        {/* Start Need Help */}
        <div className="need-help py-5 relative">
          <div className="container mx-auto relative z-[2] text-center lg:text-start">
            <div className="h-auto 2xl:h-[250px] w-full 2xl:w-[500px] p-5 bg-[#0BF10680] relative rounded-lg border-t-[3px] border-electricGreen mx-auto flex flex-col justify-between items-start">
              <div
                className="gradient bg-gradient-to-b from-[#050505] to-[#022301] absolute top-0 left-0 w-full h-full opacity-[80%] rounded-lg"
                style={{
                  boxShadow:
                    "0 20px 24px 0 rgba(0,0,0,24%), inset 0 12px 30px 0 rgba(255,255,255, 30%) ",
                }}
              ></div>
              <div className="head flex justify-start items-center lg:w-4/5 mx-auto gap-5 relative z-[3]">
                <Image src={SmileFace} alt="Smile Face Img" />
                <h3 className="text-2xl font-semibold text-honeydew">
                  Need Help?
                </h3>
              </div>
              <p className="text-honeydew text-lg relative z-[3] px-5">
                Go to contact page for questions and queries
              </p>
              <Link
                href="/contact"
                className="text-electricGreen text-md relative px-5 py-5 lg:py-0 z-[3] underline"
              >
                Go to contact page
              </Link>
            </div>
          </div>
          <Image
            src={HelpBackground}
            alt="Dark Dashboard"
            className={`absolute top-[-100px] right-0 z-[1] ${
              screenWidth == "mobile" ? "hidden" : ""
            }`}
            height={787}
          />
        </div>
        {/* End Need Help */}

        <Footer />
      </main>
    </>
  );
}