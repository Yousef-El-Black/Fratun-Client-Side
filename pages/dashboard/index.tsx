// React
import { useState } from "react";

// Next
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// Components
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import EarnedCrypto from "@/components/EarnedCrypto";

// Images
import InstagramIcon from "@/public/colorful-instagram-icon.png";
import TwitterIcon from "@/public/colorful-twitter-icon.png";
import TiktokIcon from "@/public/colorful-tiktok-icon.png";
import TelegramIcon from "@/public/colorful-telegram-icon.png";
import SocialAppLogo from "@/public/social-app-logo.png";
import GlobalIcon from "@/public/global.png";
import ShakeHandsIcon from "@/public/shake-hands.png";
import CommunityImage from "@/public/community-image.png";
import ContactImage from "@/public/contact-image.png";
import CopyIcon from "@/public/copy-icon.png";
import Ball1 from "@/public/features-ball-desktop.png";
import Ball2 from "@/public/landing-ball-desktop.png";

const Dashboard = () => {
  const [isShowCopied, setIsShowCopied] = useState(false);

  let totalMemberClaims: number = 1000000;

  let tokenContractAddress: string =
    "0x73Efd9D0e29a7e86C118ebcDb9Cd85F8Ced34b69";

  let presaleContractAddress: string =
    "0x68A46444E19B57B30D2e30E9fd483A56Bc60Ed49";

  const handleCopiedMessage = () => {
    setIsShowCopied(true);
    setTimeout(() => {
      setIsShowCopied(false);
    }, 1_000);
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <main className="bg-eerieBlack bg-repeat relative">
        <Header />
        <div className="content relative flex">
          {/* Start Side Bar */}
          <SideBar />
          {/* End Side Bar */}

          {/* Start Main Content */}
          <div className="main lg:w-4/5 px-5">
            <div className="text-honeydew">
              <h1 className="flex justify-center items-center py-10 font-semibold text-2xl">
                Reward Portal
              </h1>
              <div className="boxs flex flex-col justify-center items-center lg:flex-row gap-5 lg:h-[350px]">
                {/* Start Earned Crypto */}
                <EarnedCrypto />
                {/* End Earned Crypto */}

                {/* Start Airdrop Special Offer */}
                <div className="airdrop-special-offer lg:w-1/3 h-[300px] lg:h-full p-7 text-center flex flex-col justify-around items-center bg-gradient-to-b from-[#1F1F1FB2] to-[#033C01B2] rounded-lg border-t-electricGreen border-t-[3px] z-[2]">
                  <h3 className="text-xl">Fratun Airdrop Special Offer!</h3>
                  <p className="text-md">
                    Invite Your Friends and <br />
                    Earn FTC Coins + USDT0.25 USDT + 510 FTC
                  </p>
                  <button className="w-full h-[50px] border-[#99FF99] border-[1px] rounded-md text-[#99FF99] hover:bg-[#09DB04] hover:text-[#463399] duration-300">
                    Invite now!
                  </button>
                </div>
                {/* End Airdrop Special Offer */}
                <Image
                  src={Ball1}
                  alt="Ball 1"
                  className="hidden lg:block absolute z-[0] right-0 top-0 translate-y-[50%]"
                />
                <Image
                  src={Ball2}
                  alt="Ball 2"
                  width={250}
                  height={250}
                  className="hidden lg:block absolute z-[0] left-[-50px] top-[-100px]"
                />
              </div>
            </div>

            {/* Start Claim FTC Airdrop */}
            <div className="claim-ftc-airdrop-policy lg:w-2/3 mx-auto text-center py-10 flex flex-col justify-center items-center gap-5 relative">
              <h2 className="bg-gradient-to-r from-[#09DB04] to-[#DCFFDB] bg-clip-text text-transparent text-2xl">
                Claim FTC Arirdrop
              </h2>
              <p className="text-honeydew">
                Your claimable FTC = 510.0 (Worth 0.153 BNB and $47.58).
              </p>
              <p className="font-semibold w-4/5 lg:w-2/5 mx-auto text-honeydew">
                You won’t be eligible yet to claim airdrop untill you do these
                tasks:
              </p>
              <Image
                src={Ball1}
                alt="Ball 1"
                width={50}
                height={50}
                className="hidden lg:block absolute z-[0] right-[30%] top-0"
              />
              <Image
                src={Ball2}
                alt="Ball 2"
                width={300}
                height={300}
                className="hidden lg:block absolute z-[0] left-[-40%] top-10 mix-blend-hard-light"
              />
            </div>
            {/* End Claim FTC Airdrop */}

            {/* Start Social Tasks */}
            <div className="social-tasks lg:w-2/3 mx-auto text-center py-10 flex flex-col justify-center items-center gap-5">
              <h2 className="text-honeydew text-2xl">Social Tasks</h2>
              <p className="text-honeydew w-4/5 lg:w-2/5 mx-auto">
                Connect your social media accounts, complete sharing tasks, earn
                FTC
              </p>
              <div className="social-connections flex flex-col lg:grid grid-cols-2 grid-rows-2 w-full gap-5 text-honeydew py-3">
                <div className="instagram flex border-[#DFDFDF] bg-[#1C1C1C] border-[1px] rounded-lg px-3 py-2 justify-between items-center">
                  <Image src={InstagramIcon} alt="Instagram Icon" />
                  <h4>Instagram</h4>
                  <button className="bg-[#011F00] border-[1px] border-[#99FF99] text-[#99FF99] hover:bg-[#99FF99] hover:text-[#011F00] duration-300 rounded-lg p-2">
                    Connect
                  </button>
                </div>
                <div className="telegram flex border-[#DFDFDF] bg-[#1C1C1C] border-[1px] rounded-lg px-3 py-2 justify-between items-center">
                  <Image src={TelegramIcon} alt="Telegram Icon" />
                  <h4>Telegram</h4>
                  <button className="bg-[#011F00] border-[1px] border-[#99FF99] text-[#99FF99] hover:bg-[#99FF99] hover:text-[#011F00] duration-300 rounded-lg p-2">
                    Connect
                  </button>
                </div>
                <div className="twitter flex border-[#DFDFDF] bg-[#1C1C1C] border-[1px] rounded-lg px-3 py-2 justify-between items-center">
                  <Image src={TwitterIcon} alt="Twitter Icon" />
                  <h4>Twitter</h4>
                  <button className="bg-[#011F00] border-[1px] border-[#99FF99] text-[#99FF99] hover:bg-[#99FF99] hover:text-[#011F00] duration-300 rounded-lg p-2">
                    Connect
                  </button>
                </div>
                <div className="tiktok flex border-[#DFDFDF] bg-[#1C1C1C] border-[1px] rounded-lg px-3 py-2 justify-between items-center">
                  <Image src={TiktokIcon} alt="Tiktok Icon" />
                  <h4>Tiktok</h4>
                  <button className="bg-[#011F00] border-[1px] border-[#99FF99] text-[#99FF99] hover:bg-[#99FF99] hover:text-[#011F00] duration-300 rounded-lg p-2">
                    Connect
                  </button>
                </div>
              </div>
            </div>
            {/* End Social Tasks */}

            {/* Start Win More */}
            <div className="win-more text-honeydew w-2/3 mx-auto text-center py-5 relative">
              <h2 className="capitalize text-2xl">
                To win more in this event,
              </h2>
              <p className="py-5">
                earn USDT by promoting the event on social media, creating
                videos on YouTube, or sharing on Twitter USING YOUR REFERRAL
                LINK.
                <br />
                <br />
                For everyone that claims the Airdrop through your referral link
                you will earn $0.25 real time USDT per invitee plus an
                additional 500 FTC. There’s no limit to this earning the more
                you refer the more you earn.
              </p>
              <button className="bg-electricGreen text-[#463399] rounded-lg flex justify-center items-center py-3 px-4 mx-auto font-semibold text-lg hover:opacity-50 duration-300 my-4">
                Claim Airdrop Now
              </button>
              <Image
                src={Ball1}
                alt="Ball 1"
                width={150}
                height={150}
                className="hidden lg:block absolute z-[0] left-[-20%] top-0"
              />
              <Image
                src={Ball2}
                alt="Ball 2"
                width={250}
                height={250}
                className="hidden lg:block absolute z-[0] right-[-40%] top-[55%] mix-blend-hard-light"
              />
            </div>
            {/* End Win More */}

            {/* Start Features */}
            <div className="features lg:w-2/3 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-10 text-honeydew">
              <div className="feature md:w-1/3 flex flex-col justify-center items-center text-center gap-7">
                <Image
                  src={SocialAppLogo}
                  alt="Feature 1"
                  className="w-[75%]"
                />
                <p className="w-[75%] md:w-auto">
                  Social App to be launched inmediately after we hit 15.000
                  airdrop claims
                </p>
              </div>
              <div className="feature md:w-1/3 flex flex-col justify-center items-center text-center gap-7">
                <Image
                  src={ShakeHandsIcon}
                  alt="Feature 2"
                  className="w-[75%]"
                />
                <p className="w-[75%] md:w-auto">
                  CEX listing soon to follow after presale
                </p>
              </div>
              <div className="feature md:w-1/3 flex flex-col justify-center items-center text-center gap-7">
                <Image src={GlobalIcon} alt="Feature 3" className="w-[75%]" />
                <p className="w-[75%] md:w-auto">
                  Featured in the largest global publications
                </p>
              </div>
            </div>
            {/* End Features */}

            {/* Start Airdrop Rules */}
            <div className="airdrop-rules text-honeydew bg-gradient-to-b from-[#1F1F1FB2] to-[#033C01B2] rounded-lg border-t-[3px] border-t-electricGreen lg:w-2/3 mx-auto p-5 my-10 relative">
              <h3 className="pb-5 text-xl">Airdrop Rules</h3>
              <ul className="rules pl-[15px]" style={{ listStyle: "disc " }}>
                <li className="py-1">
                  Airdrop Rules Visit the airdrop page{" "}
                  <Link
                    href="https://airdrop.fratun.com"
                    className="hover:text-electricGreen duration-300"
                  >
                    https://airdrop.fratun.com
                  </Link>{" "}
                  in your browser
                </li>
                <li className="py-1">
                  Airdrop Rules Connect your trust wallet through wallet connect
                  to sign up• Perform the tasks highlighted then the option to
                  claim the airdrop becomes clickable• Claim your free airdrop
                  and it reflect on your dashboard which after you can request
                  withdrawal immediately or purchase from the ICO so you can
                  withdraw all at once.
                </li>
                <li className="py-1">
                  Finally click “Transfer to Wallet” and instantly your FTC
                  Balance will be credited into your wallet.
                </li>
                <li className="py-1">
                  Copy and share your referral link with your friends, and
                  receive a reward of 510 FTC coins + $0.25 for each referral.
                </li>
              </ul>
              <div className="notes">
                <p className="py-2">
                  You can invite unlimited numbers of person and accumulate
                  enough $0.25 with 510 FTC per person when they activate their
                  social app.
                </p>
                <p className="py-2">
                  NOTEThis airdrop is completely free of charge but you need
                  very small quantity of BNB to be used as gas fee. (We strongly
                  recommend you have at least 0.009 BNB so as not to have failed
                  transactions) when you are withdrawing without participating
                  in the PRESALE/ICO but completely free withdrawal fee when you
                  partake in the PRESALE/ICO.
                </p>
              </div>
              <Image
                src={Ball1}
                alt="Ball 1"
                width={500}
                height={500}
                className="hidden lg:block absolute z-[0] left-[-70%] top-0"
              />
            </div>
            {/* End Airdrop Rules */}

            {/* Start Community */}
            <div className="community lg:w-2/3 text-honeydew mx-auto bg-gradient-to-r from-[#1F1F1FB2] via-[#033C01B2] to-[#127D00B2] text-center flex flex-col md:flex-row items-center justify-center rounded-lg border-t-[3px] border-t-electricGreen my-10">
              <div className="right md:w-1/2 p-4 flex flex-col justify-between items-center gap-5">
                <h2 className="capitalize bg-clip-text text-transparent bg-gradient-to-r from-[#09DB04] to-[#DCFFDB] font-semibold text-2xl">
                  Join the thousands already in our community
                </h2>
                <Image src={CommunityImage} alt="Community Image" />
              </div>
              <div className="left md:w-1/2 p-4 flex flex-col gap-5">
                <p className="top capitalize">
                  Welcome to our member count section! Here, you can track the
                  growth of our community and get a sense of the scale of our
                  website{"'"}s audience. Our member count represents the number
                  of individuals who have successfully CLAIMED our Airdrop on
                  our website and joined our community.
                </p>
                <div className="bottom">
                  <div className="text text-xl">Total Member Claims</div>
                  <div className="num text-5xl font-semibold">
                    {totalMemberClaims}
                  </div>
                </div>
              </div>
            </div>
            {/* End Community */}

            {/* Start Contract */}
            <div className="contract text-center w-full flex flex-col justify-center items-center gap-10 my-10 relative z-[2]">
              <h2 className="capitalize text-2xl text-honeydew">
                Fratun Smart Contract Addresses
              </h2>
              <Image
                src={ContactImage}
                alt="Contact Image"
                className="relative z-[2]"
              />
              <div className="addresses bg-[#2E2E2ECC] border-t-[3px] border-t-electricGreen rounded-lg md:w-2/3 text-honeydew text-start p-3 flex flex-col gap-5 relative z-[2]">
                <div className="token flex flex-col lg:flex-row  justify-between items-center gap-3">
                  <div className="right">
                    <h5 className="text-lg font-semibold">
                      Token Contract Address
                    </h5>
                    <p className="break-words w-[270px]">
                      {tokenContractAddress}
                    </p>
                  </div>
                  <button
                    className="left"
                    onClick={() => {
                      navigator.clipboard.writeText(presaleContractAddress);
                      handleCopiedMessage();
                    }}
                  >
                    <Image src={CopyIcon} alt="Copy Icon" />
                  </button>
                </div>
                <div className="presale flex flex-col lg:flex-row  justify-between items-center gap-3">
                  <div className="right">
                    <h5 className="text-lg font-semibold">
                      Presale Contract Address
                    </h5>
                    <p className="break-words w-[270px]">
                      {presaleContractAddress}
                    </p>
                  </div>
                  <button
                    className="left"
                    onClick={() => {
                      navigator.clipboard.writeText(presaleContractAddress);
                      handleCopiedMessage();
                    }}
                  >
                    <Image src={CopyIcon} alt="Copy Icon" />
                  </button>
                </div>
              </div>
              <Image
                src={Ball2}
                alt="Ball 2"
                width={330}
                height={330}
                className="hidden lg:block absolute z-[0] right-[-15%] top-[-10%] mix-blend-hard-light"
              />
              <Image
                src={Ball1}
                alt="Ball 1"
                width={350}
                height={350}
                className="hidden lg:block absolute z-[0] left-0 top-[40%]"
              />
            </div>
            {/* End Contract */}
          </div>
          {/* End Main Content */}
        </div>
        <Footer />
        {/* Start Copied Message */}
        <div
          className={`copied-message flex justify-center items-center bg-gradient-to-r from-[#1F1F1FB2] to-[#033C01B2] text-honeydew p-3 text-lg fixed left-[50%] translate-x-[-50%] z-[99] duration-300 rounded-lg border bottom-[53px] ${
            isShowCopied ? "" : "hidden"
          }`}
        >
          Copied!
        </div>
        {/* Start Copied Message */}
      </main>
    </>
  );
};

export default Dashboard;