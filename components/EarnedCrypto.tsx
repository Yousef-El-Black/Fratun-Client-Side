// Components
import PercentageCircle from "./PercentageCircle";

const EarnedCrypto = () => {
  let USDTWithdrawn: number = 500;

  const pointersEarnedCrypto = [
    {
      name: "Earned USDT",
      color: "#0BF106",
      borderColor: "#0BF106",
      backColor: "#025C00",
      max: 2000,
      value: 1000,
    },
    {
      name: "Available USDT",
      color: "#D2A600",
      borderColor: "#E1E1E1",
      backColor: "#665100",
      max: 20000,
      value: 10000,
    },
    {
      name: "Earned FTC",
      color: "#9A8CD9",
      borderColor: "#9B8CD9",
      backColor: "#352673",
      max: 400,
      value: 138,
    },
    {
      name: "Available USDT",
      color: "#4664FF",
      borderColor: "#99A9FF",
      backColor: "#001166",
      max: 100000,
      value: 40000,
    },
  ];

  return (
    <div className="earned-crypto flex flex-col w-full lg:w-2/3 bg-[#2E2E2ECC] rounded-lg border-t-[3px] border-electricGreen px-10 relative z-[2]">
      <div className="head flex justify-between items-center py-4">
        <h3 className="text-xl">Earned Crypto</h3>
        <div className="details-icon justify-center items-center gap-1 hidden lg:flex">
          <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
          <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
          <span className="w-[5px] h-[5px] bg-white rounded-full"></span>
        </div>
      </div>
      <div className="pointers flex flex-col lg:flex-row justify-between items-start lg:items-center flex-wrap gap-5 lg:gap-0">
        {pointersEarnedCrypto.map((pointer, index) => {
          return (
            <div
              className="pointer lg:w-[100px] flex gap-5 flex-row-reverse lg:flex-row lg:block"
              key={index}
            >
              <div className="head flex lg:justify-between items-center gap-2">
                <span
                  className={`inline-block w-[10px] h-[10px] rounded-full`}
                  style={{ backgroundColor: pointer.color }}
                ></span>
                <h5 className="text-[11px]">{pointer.name}</h5>
              </div>
              <div className="body">
                <PercentageCircle
                  percentage={(pointer.value / pointer.max) * 100}
                  circleColor={pointer.borderColor}
                  backgroundColor={pointer.backColor}
                  textColor="#F0FFF0"
                  value={pointer.value}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="btns flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-3 py-5 text-center">
        <div className="bg-[#141414] text-honeydew border-[1px] rounded-lg flex justify-center items-center border-[#B4B4B4] w-full h-[60px] font-medium hover:text-[#141414] hover:bg-[#B4B4B4] duration-300 cursor-pointer">
          Available BNB: {pointersEarnedCrypto[0].value}
        </div>
        <div className="bg-[#141414] text-honeydew border-[1px] rounded-lg flex justify-center items-center border-[#B4B4B4] w-full h-[60px] font-medium hover:text-[#141414] hover:bg-[#B4B4B4] duration-300 cursor-pointer">
          FTC Withdrawn: {pointersEarnedCrypto[2].value}
        </div>
        <div className="bg-[#141414] text-honeydew border-[1px] rounded-lg flex justify-center items-center border-[#B4B4B4] w-full h-[60px] font-medium hover:text-[#141414] hover:bg-[#B4B4B4] duration-300 cursor-pointer">
          USDT Withdrawn: {USDTWithdrawn}
        </div>
        <div className="bg-[#09DB04] w-full h-[60px] text-[#463399] rounded-lg flex justify-center items-center font-medium hover:opacity-50 duration-300 cursor-pointer">
          Withdraw Earnings
        </div>
      </div>
    </div>
  );
};

export default EarnedCrypto;
