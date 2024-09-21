import { ChevronIcon } from "./icon/chevronIcon";
import Image from "next/image";

const ScriptTile = () => {
  return (
    <div className="flex min-h-[757px] w-[47%] max-w-[653px] flex-col gap-[19px] rounded-[20px] bg-[#161617] px-7 pt-7">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold leading-5 text-[#E4E4EA]">
          Script/Notes
        </span>
        <button className="flex w-[94px] items-center justify-between rounded-[10px] bg-[#007AFF] px-[9px] py-1 text-[15px] font-medium leading-5">
          Draft 1
          <div className="flex h-[21px] w-[22px] items-center justify-center pt-[2.2px]">
            <ChevronIcon />
          </div>
        </button>
      </div>
      <div className="relative flex h-full flex-1 flex-col rounded-b-[5px] rounded-t-[20px] border-2 border-b-0 border-solid border-[#2A2B30] bg-[#18181B]">
        <div className="h-[59px] overflow-hidden pl-[25px] pt-3">
          <div className="w-[567px]">
            <Image
              src="/toolbar.png"
              alt="Toolbar placeholder"
              width={567}
              height={36}
              priority
            />
          </div>
        </div>
        <div
          contentEditable
          className="-mx-[2px] flex-1 rounded-[5px] border-2 border-b-0 border-solid border-[#2A2B30] bg-[#202020] px-[25px] pt-[26px] focus:outline-none"
        >
          <span className="absolute text-xl font-medium leading-5 text-[#828282]">
            Enter text here...
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScriptTile;
