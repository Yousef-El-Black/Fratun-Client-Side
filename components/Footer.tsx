// Next
import Link from "next/link";
import Image from "next/image";

// Images
import LinkedinIcon from "@/public/linkedin-icon.png";
import InstagramIcon from "@/public/instagram-icon.png";
import TwitterIcon from "@/public/twitter-icon.png";
import DiscordIcon from "@/public/discord-icon.png";
import TelegramIcon from "@/public/telegram-icon.png";
import SmileFace from "@/public/smile-face.png";

const Footer = () => {
  const textList = [
    ["About Us", "/aboutus"],
    ["Career", "/career"],
    ["Contact", "/contact"],
    ["Documents", "/documents"],
    ["Discover", "/discover"],
    ["Privacy Policy", "/privacy-policy"],
    ["General Data Protection Policy", "/general-data-protection-policy"],
    ["Cookie Policy", "/cookie-policy"],
  ];

  const productList = [
    ["Fratun Social App", "/fratun-social-app"],
    ["Fratun Airdrop", "/fratun-airdrop"],
    ["Fratun Presale", "/fratun-presale"],
    ["Fratun Magic Tree", "/fratun-magic-tree"],
    ["Fratun Coin", "/fratun-coin"],
    ["Fratun Monetization", "/fratun-monetization"],
    ["Fratun Wages for life", "/fratun-wages-for-life"],
    ["Fratun Launchpad", "/fratun-launchpad"],
    ["Fratun NFT Marketplace", "/fratun-nft-marketplace"],
  ];

  const learnList = [
    ["Dictionary", "/dictionary"],
    ["Announcements", "/announcements"],
    ["Whitepaper", "/whitepaper"],
    ["Tokenomics", "/tokenomics"],
  ];

  return (
    <>
      <div
        className="support-mobile bg-[#202020CC] rounded-t-lg border-t-[3px] border-electricGreen relative z-[3] lg:hidden"
        style={{ boxShadow: "inset #FFFFFF50 0px 0 20px 5px" }}
      >
        <div className="container mx-auto flex justify-between items-center py-5">
          <div className="text flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-honeydew">Support</h3>
            <p className="text-honeydew text-lg relative z-[3]">Need Help?</p>
          </div>
          <Image src={SmileFace} alt="Smile Face Img" />
        </div>
      </div>
      <footer
        className="relative z-[3] bg-[#00000096]"
        style={{ boxShadow: "inset 0 2px 10px 0 rgb(255 255 255 / 30%)" }}
      >
        <div className="container mx-auto">
          <div className="text-honeydew flex flex-wrap justify-between items-start py-10">
            <div className="text-list w-1/2 lg:w-auto">
              <h4 className="text-2xl py-3">Text</h4>
              <ul>
                {textList.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item[1]}
                      className="hover:underline"
                    >
                      <li>{item[0]}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="product-list w-1/2 lg:w-auto">
              <h4 className="text-2xl py-3">Product</h4>
              <ul>
                {productList.map((item, index) => {
                  return (
                    <Link
                      href={item[1]}
                      key={index}
                      className="hover:underline"
                    >
                      <li>{item[0]}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="learn-list">
              <h4 className="text-2xl py-3">Learn</h4>
              <ul>
                {learnList.map((item, index) => {
                  return (
                    <Link
                      href={item[1]}
                      key={index}
                      className="hover:underline"
                    >
                      <li>{item[0]}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div></div>
            <div></div>
            <div className="xl:hidden"></div>
            <div className="support hidden lg:block absolute right-0">
              <div className="p-5 bg-[#0BF10680] relative rounded-l-lg border-t-[3px] border-electricGreen mx-auto flex flex-col justify-between items-start">
                <div
                  className="gradient bg-gradient-to-b from-[#050505] to-[#022301] absolute top-0 left-0 w-full h-full opacity-[80%] rounded-l-lg"
                  style={{
                    boxShadow:
                      "0 20px 24px 0 rgba(0,0,0,24%), inset 0 12px 30px 0 rgba(255,255,255, 30%) ",
                  }}
                ></div>
                <div className="head flex flex-row-reverse justify-start items-center lg:w-4/5 mx-auto gap-5 relative z-[3]">
                  <Image src={SmileFace} alt="Smile Face Img" />
                  <h3 className="text-2xl font-semibold text-honeydew pl-5">
                    Support
                  </h3>
                </div>
                <p className="text-honeydew text-lg relative z-[3] px-5">
                  Need Help?
                </p>
              </div>
            </div>
          </div>
          <div className="social-media-icons py-5">
            <ul className="flex justify-start items-center gap-4">
              <Link href="/">
                <li>
                  <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  <Image src={InstagramIcon} alt="Instagram Icon" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  <Image src={TwitterIcon} alt="Twitter Icon" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  <Image src={DiscordIcon} alt="Discord Icon" />
                </li>
              </Link>
              <Link href="/">
                <li>
                  <Image src={TelegramIcon} alt="Telegram Icon" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
