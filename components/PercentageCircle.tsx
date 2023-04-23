type PercentageCircleProps = {
  percentage: number;
  circleColor: string;
  backgroundColor: string;
  textColor: string;
  value: number;
};

const PercentageCircle = ({
  percentage,
  circleColor,
  backgroundColor,
  textColor,
  value,
}: PercentageCircleProps) => {
  let newPercentage = percentage * 2.2;

  return (
    <div className="flex justify-center items-center relative">
      <svg
        width={100}
        height={100}
        className="flex justify-center items-center"
      >
        <circle
          cx={50}
          cy={50}
          r={45}
          strokeLinecap="round"
          style={{
            fill: backgroundColor,
            stroke: circleColor,
            strokeWidth: "5px",
            strokeDasharray: 220,
            strokeDashoffset: 220 - newPercentage,
            transform: "rotate(-45deg)",
            transformOrigin: "center",
          }}
        ></circle>
      </svg>
      <span
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm"
        style={{ color: textColor }}
      >
        {value}
      </span>
    </div>
  );
};
export default PercentageCircle;
