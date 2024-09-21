import FilesTile from "./filesTile";
import Footer from "./footer";
import Header from "./header";
import ScriptTile from "./scriptTile";
import StepsTile from "./stepsTile";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col">
      <Header />
      <main className="flex w-full gap-[18px] pl-5 pr-[22px]">
        <div className="flex w-[53%] max-w-[727px] flex-col gap-5">
          <StepsTile />
          <div className="flex flex-1 gap-[13px]">
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex-1 rounded-[20px] bg-[#161617]" />
              <div className="h-[338px] rounded-[20px] bg-[#161617]" />
            </div>
            <div className="flex w-[43.9%] max-w-[319px] flex-col gap-[15px]">
              <div className="w-full flex-1 rounded-[20px] bg-[#161617]" />
              <FilesTile />
            </div>
          </div>
        </div>
        <ScriptTile />
      </main>
      <Footer />
    </div>
  );
}
