// Next
import Head from "next/head";
import Image from "next/image";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

// Images
import DashedLine from "@/public/dashed-line.png";
import CarImage from "@/public/car.png";

const MagicTree = () => {
  return (
    <>
      <Head>
        <title>Magic Tree</title>
        <meta name="descrip tion" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.png" />
      </Head>
      <div className="main bg-eerieBlack bg-repeat relative">
        <Header />
        <div className="content flex relative">
          <SideBar />
          <div className="main px-5 lg:w-4/5">
            <h1 className="text-4xl my-20 text-honeydew text-center">
              Magic Tree
            </h1>
            {/* Start Note */}
            <div className="note w-full lg:w-2/3 mx-auto bg-[#202020CC] border-t-[3px] border-t-electricGreen rounded-lg p-5 lg:p-10 flex flex-col justify-between items-start gap-5 text-honeydew">
              <p>
                The Fratun Multi Level Marketing (MagicTree) system is a
                referral system that applies to all products in the Fratun
                Social ecosystem.
              </p>
              <p>
                This system enables users to participate in the ecosystem{"'"}s
                revenue sharing.
              </p>
              <p>
                With MagicTree, a process that begins with a user referring
                another person can continue up to the 8th level. Unlike
                traditional referral systems, in MagicTree, you are to receive a
                reward for just one person. When the people you invite also
                bring other users into the ecosystem and these users pay the
                2500 Fratun Coins activation fee, you will continue to earn from
                the commission they paid as up to over 900 BNB.
              </p>
            </div>
            {/* End Note */}

            {/* Start Magic Tree Network */}
            <div className="magic-tree-network w-full lg:w-4/5 mx-auto">
              <h1 className="bg-clip-text bg-gradient-to-r from-[#09DB04] to-[#DCFFDB] text-transparent capitalize text-4xl text-center my-10 py-5">
                Magic Tree Network
              </h1>
              <div className="body relative">
                <div className="stages relative z-[3] text-honeydew w-full  mx-auto">
                  <div className="double-stage flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 my-5 lg:my-[100px]">
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#1F1F1FE5] to-[#282401E5] border-t-[3px] border-t-[#F1E806] rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[-50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 1</h4>
                        <span>Builder</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2x2 Matrix = 0.002 BNB Each</p>
                        <p>Level 2 x 0.002 = 0.004 BNB</p>
                        <p>Level 4 x 0.002 = 0.008 BNB</p>
                        <p>Total Payout = 0.012 BNB</p>
                      </div>
                    </div>
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#1F1F1FE5] to-[#011328E5] border-t-[3px] border-t-[#0047FD] rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 2</h4>
                        <span>Saphire</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2x3 Matrix = 0.005 BNB Each</p>
                        <p>Level 2 x 0.005 = 0.01 BNB</p>
                        <p>Level 4 x 0.005 = 0.02 BNB</p>
                        <p>Level 8 x 0.005 = 0.04 BNB</p>
                        <p>Total Payout = 0.07 BNB</p>
                      </div>
                    </div>
                  </div>
                  <div className="double-stage my-5 lg:my-[100px] flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#1F1F1FE5] to-[#280101E5] border-t-[3px] border-t-[#FD0000] rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[-50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 3</h4>
                        <span>Ruby</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2x3 Matrix = 0.02 BNB Each</p>
                        <p>Level 2 x 0.02 = 0.04 BNB</p>
                        <p>Level 4 x 0.02 = 0.08 BNB</p>
                        <p>Level 8 x 0.02 = 0.16 BNB</p>
                        <p>Total Payout = 0.28 BNB</p>
                      </div>
                    </div>
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#1F1F1FE5] to-[#002F02E0] border-t-[3px] border-t-electricGreen rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 4</h4>
                        <span>Emerald</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2x3 Matrix = 0.1 BNB Each</p>
                        <p>Level 2 x 0.1 = 0.2 Each</p>
                        <p>Level 4 x 0.1 = 0.4 Each</p>
                        <p>Level 8 x 0.1 = 0.8 Each</p>
                        <p>Total Payout = 1.4 BNB</p>
                      </div>
                    </div>
                  </div>
                  <div className="double-stage my-5 lg:my-[100px] flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#1F1F1FE5] to-[#676767E0] border-t-[3px] border-t-[#B0B0B0] rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[-50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 5</h4>
                        <span>Diamond</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2x3 Matrix = 0.5 BNB Each</p>
                        <p>Level 2 x 0.5 = 1 BNB</p>
                        <p>Level 4 x 0.5 = 2 BNB</p>
                        <p>Level 8 x 0.5 = 4 BNB</p>
                        <p>Total Payout = 7 BNB</p>
                      </div>
                    </div>
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#817825E5] to-[#282401E5] border-t-[3px] border-t-[#F1E806] rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 6</h4>
                        <span>Crown Diamond</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2x3 Matrix = 1.55 BNB Each</p>
                        <p>Level 2 x 1.55 = 3.1 BNB</p>
                        <p>Level 4 x 1.55 = 6.2 BNB</p>
                        <p>Level 8 x 1.55 = 12.4 BNB</p>
                        <p>Total Payout = 21.7 BNB</p>
                        <p>Branded IPhone 14 Pro Max</p>
                      </div>
                    </div>
                  </div>
                  <div className="double-stage my-5 lg:my-[100px] flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#482581E5] to-[#9A9A9AE0] border-t-[3px] border-t-[#D4ABFE] rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[-50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 7</h4>
                        <span>Ambassadors</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2X3 Matrix = 4 BNB Each</p>
                        <p>Level 2 × 4 = 8 BNB</p>
                        <p>Level 4 × 4 = 16 BNB</p>
                        <p>Level 8 × 4 = 32 BNB</p>
                        <p>Total Payout = 56 BNB</p>
                      </div>
                    </div>
                    <div className="stage w-full lg:w-1/3 bg-gradient-to-b from-[#482581E5] to-[#D2C373E0] border-t-[3px] border-t-[#FEEBAB] rounded-lg p-5 flex flex-col gap-3 lg:translate-y-[50px]">
                      <div className="text-center">
                        <h4 className="text-xl">Stage 8</h4>
                        <span>Crown Ambassadors</span>
                      </div>
                      <div className="text-center lg:text-start">
                        <p>2X3 Matrix = 40 BNB Each</p>
                        <p>Level 2 × 40 = 80 BNB</p>
                        <p>Level 4 × 40 = 160 BNB</p>
                        <p>Level 8 × 40 = 320 BNB</p>
                        <p>Total Payout = 560 BNB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={DashedLine}
                  alt="Dashed Arrow"
                  className=" absolute top-0 left-[50%] translate-x-[-60%] h-full hidden lg:block"
                />
              </div>
            </div>
            {/* End Magic Tree Network */}

            {/* Start Incentives */}
            <div className="incentives w-full lg:w-2/3 mx-auto">
              <h1 className="text-center text-4xl text-honeydew my-10">
                Incentives
              </h1>
              <div className="car flex flex-col lg:flex-row gap-5 bg-[#202020CC] border-t-[3px] rounded-lg border-t-electricGreen justify-between items-center p-5">
                <div className="text flex flex-col gap-5 text-honeydew text-lg font-semibold">
                  <p>Brand new SUV worth 250 BNB</p>
                  <span>+</span>
                  <p>$500 weekly wages for life</p>
                </div>
                <div className="img">
                  <Image src={CarImage} alt="Car Image" />
                </div>
              </div>
              <div className="flex flex-col gap-5 bg-[#202020CC] border-t-electricGreen border-t-[3px] rounded-lg px-10 py-5 text-lg text-honeydew my-10">
                <p>
                  All these for free when you partake in the Presale/ICO in the
                  above chart, the percentage rate and amount for each step are
                  specified so you get to know what you stand to gain if taken
                  serious and all these with just a one time activation fee of
                  2500 on the social app.
                </p>
                <p>
                  In this example, each person in the referral network will
                  receive a portion of the commission earned from the
                  transaction of the user referred by the previous person. This
                  distribution will continue up to the 8th level.MagicTree is a
                  system that offers users the opportunity to earn income
                  without having to be active.
                </p>
                <p>
                  Even if your goal is to bring 5 people into the ecosystem,
                  your network will continue to grow and you will be able to
                  earn from the transactions in this network as long as only one
                  person is active.
                </p>
                <p>
                  To increase your income with this referral system, all you
                  need to do is to bring in more people.
                </p>
                <p>
                  Also, don{"'"}t forget that each person you refer will earn
                  you FRATAirtime for the Fratun Airdrop event!
                </p>
              </div>
            </div>
            {/* End Incentives */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MagicTree;
