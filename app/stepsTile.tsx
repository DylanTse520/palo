import { OneIcon } from "./icon/oneIcon";
import { ThreeIcon } from "./icon/threeIcon";
import { TwoIcon } from "./icon/twoIcon";

const StepsTile = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[20px] bg-[#161617] pb-[30px] pl-[38px] pt-[43px]">
      <div className="flex gap-[10px]">
        <div className="flex h-[29px] w-[114px] items-center gap-[3px] rounded-[10px] bg-[#007AFF] pl-1 outline outline-1 outline-[#0D3662]">
          <div className="flex h-[25px] w-[25px] items-center justify-center">
            <OneIcon />
          </div>
          <span className="text-[19px] font-semibold leading-5 text-[#FFFFFF]">
            Writing
          </span>
        </div>
        <div className="flex h-[29px] w-[114px] items-center gap-[3px] rounded-[10px] bg-[#2A2B30] pl-1">
          <div className="flex h-[25px] w-[25px] items-center justify-center">
            <TwoIcon />
          </div>
          <span className="text-[19px] font-semibold leading-5 text-[#878787]">
            Editing
          </span>
        </div>
        <div className="flex h-[29px] w-[114px] items-center gap-[3px] rounded-[10px] bg-[#2A2B30] pl-1">
          <div className="flex h-[25px] w-[25px] items-center justify-center">
            <ThreeIcon />
          </div>
          <span className="text-[19px] font-semibold leading-5 text-[#878787]">
            Review
          </span>
        </div>
      </div>
      <input
        className="w-[386px] rounded-[5px] border border-[#2A2B30] bg-transparent px-[9px] py-[3px] text-[50px] font-semibold leading-[60.51px] tracking-[-0.02em] text-[#B5B5B5] focus:outline-none"
        value={"Untitled Project"}
      />
    </div>
  );
};

export default StepsTile;
