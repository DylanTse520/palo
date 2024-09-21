const Link = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="cursor-pointer text-xl font-normal leading-[24.2px] tracking-[-0.02em] text-[#FFFFFF]"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="mb-[26px] mt-[134px] flex justify-between gap-4 pl-[53px] pr-[95px]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[5px]">
          <span className="text-[30px] font-semibold leading-[36.31px] tracking-[-0.02em] text-[#E4E4EA]">
            Palo
          </span>
          <span className="text-[15px] font-medium leading-[18.15px] tracking-[-0.02em] text-[#A2A2A2]">
            Palo Alto, CA
          </span>
        </div>
        <span className="text-[15px] font-medium leading-[18.15px] tracking-[-0.02em] text-[#737373]">
          Palo, Inc &copy; {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex pt-[6px]">
        <div className="flex flex-col gap-[25px]">
          <span className="text-xl font-normal leading-[24.2px] tracking-[-0.02em] text-[#A2A2A2]">
            Product
          </span>
          <div className="flex flex-col gap-[7px]">
            <Link>Generate Videos</Link>
            <Link>Earn Revenue</Link>
          </div>
        </div>
        <div className="ml-[72px] flex flex-col gap-[25px]">
          <span className="text-xl font-normal leading-[24.2px] tracking-[-0.02em] text-[#A2A2A2]">
            Company
          </span>
          <div className="flex flex-col gap-[10px]">
            <Link>Help & Support</Link>
            <Link>Careers</Link>
            <Link>Blog</Link>
          </div>
        </div>
        <div className="ml-[83px] flex flex-col gap-[25px]">
          <span className="text-xl font-normal leading-[24.2px] tracking-[-0.02em] text-[#A2A2A2]">
            Terms & policies
          </span>
          <div className="flex flex-col gap-[10px]">
            <Link>Terms of use</Link>
            <Link>Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
