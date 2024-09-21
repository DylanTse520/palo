import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between pl-[53px] pr-[35px]">
      <div className="mb-[20px] mt-[13px] flex flex-col justify-center">
        <Image
          src="/logo.png"
          alt="Palo logo"
          width={53}
          height={53}
          priority
        />
      </div>
      <div className="mb-[11px] mt-[17px] flex rounded-[15px] bg-[#2A2B30] p-[6px] outline outline-[3px] outline-[#1E1E21] drop-shadow-[0px_0px_4px_#00000040]">
        <Image
          src="/profile.png"
          alt="Profile image"
          width={48}
          height={46}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
