// Next
import Link from "next/link";
import Image from "next/image";

// Images
import SmileFace from "@/public/smile-face.png";

const SideBar = () => {
  const dashboardMenu = [
    ["Overview", "/overview"],
    ["FTCAirdrop", "/ftc-airdrop"],
    ["Settings", "/settings"],
    ["Support", "/support"],
    ["Wallet", "/wallet"],
  ];

  return (
    <aside className="sticky top-0 w-1/5 h-screen z-[97] left-0 hidden lg:flex flex-col">
      <ul className="w-full bg-raisinBlack px-5 py-10 flex flex-col justify-start items-start gap-5 h-full flex-1">
        {dashboardMenu.map((item, index) => {
          return (
            <Link
              href={item[1]}
              key={index}
              className="hover:underline hover:underline-offset-2 text-honeydew"
            >
              <li className="text-honeydew">{item[0]}</li>
            </Link>
          );
        })}
      </ul>
      <div className="w-full">
        <div className="relative z-[2] text-center lg:text-start w-full">
          <div className="h-auto 2xl:h-[250px] w-full  p-5 bg-[##0BF10633] relative rounded-lg border-t-[3px] border-electricGreen mx-auto flex flex-col justify-between items-start">
            <div
              className="gradient bg-gradient-to-b from-[#050505] to-[#022301] absolute top-0 left-0 w-full h-full opacity-[80%] rounded-lg"
              style={{
                boxShadow:
                  "0 20px 24px 0 rgba(0,0,0,24%), inset 0 12px 30px 0 rgba(255,255,255, 30%) ",
              }}
            ></div>
            <div className="head flex flex-col py-3 xl:flex-row justify-start items-center lg:w-4/5 mx-auto gap-5 relative z-[3]">
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
      </div>
    </aside>
  );
};

export default SideBar;
