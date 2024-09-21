import { FolderIcon } from "./icon/folderIcon";

const FileButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex h-[35px] items-center gap-[3px] rounded-[10px] bg-[#1B1C1F] pl-[7px] pr-[15px] outline outline-2 outline-[#2A2B3066] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
      <div className="flex h-[22px] w-[21px] items-center justify-center">
        <FolderIcon />
      </div>
      {children}
    </button>
  );
};

const FilesTile = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[20px] bg-[#161617] p-[21px]">
      <span className="text-xl font-medium leading-5 text-[#E4E4EA]">
        Files
      </span>
      <div className="flex flex-col gap-[10px]">
        <FileButton>
          <div className="flex flex-1 items-center justify-between">
            <span className="text-sm font-medium text-[#A5A5A5]">Scripts</span>
            <span className="text-xs font-medium leading-5 text-[#858585]">
              <span className="font-bold">1</span>
              <span>{` Draft`}</span>
            </span>
          </div>
        </FileButton>
        <FileButton>
          <div className="flex flex-1 items-center justify-between">
            <span className="text-sm font-medium text-[#A5A5A5]">Video</span>
            <span className="text-xs font-medium leading-5 text-[#858585]">
              <span className="font-semibold">0</span>
              <span>{` Files`}</span>
            </span>
          </div>
        </FileButton>
        <FileButton>
          <div className="flex flex-1 items-center justify-between">
            <span className="text-sm font-medium text-[#A5A5A5]">Audio</span>
            <span className="text-xs font-medium leading-5 text-[#858585]">
              <span className="font-bold">1</span>
              <span>{` File`}</span>
            </span>
          </div>
        </FileButton>
        <FileButton>
          <div className="flex flex-1 items-center justify-between">
            <span className="text-sm font-medium text-[#A5A5A5]">Graphics</span>
            <span className="text-xs font-medium leading-5 text-[#858585]">
              <span>5 Files</span>
            </span>
          </div>
        </FileButton>
      </div>
    </div>
  );
};

export default FilesTile;
