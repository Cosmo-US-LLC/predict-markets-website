import howItWorksBg from "../../../assets/images/home/how_does_work/how_does_work_image.webp";
import howItWorksBgMobile from "../../../assets/images/home/how_does_work/how_does_work_mobile_image.webp";

export default function HowItWorks({
  title = "How does it work?",
  subtitle = "PredictMarkets is a decentralised prediction platform where users trade on real world event outcomes. Every trade generates fees that directly strengthen the $PREDICT ecosystem through daily buybacks, token burns, and revenue sharing designed to increase long term token value.",
}) {
  return (
    <section
      className="relative w-full py-12 md:py-16"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(33, 4, 255, 0.15) 0%, rgba(33, 4, 255, 0) 70%), linear-gradient(90deg, rgb(2, 11, 16) 0%, rgb(2, 11, 16) 100%)`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="w-[90%] md:max-w-[1220px] mx-auto px-4 md:px-8 py-12 md:py-16 relative gradient-border-rounded flex flex-col gap-12">
        <div className="relative z-10 flex flex-col gap-2 md:gap-[8px] items-center text-center">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize text-[#ffffff] w-full">
            {title}
          </h2>
          <p className="text-[#cacaca] text-base md:text-[16px] font-normal leading-[24px] tracking-[0.32px] max-w-[767px] whitespace-pre-wrap">
            {subtitle}
          </p>
        </div>

        {/* Flow Diagram Container */}
        <div className="relative w-full max-md:hidden">
        <h4 className="absolute top-[18%] left-[38%] z-10 max-w-[300px] text-center text-[#ffffff] text-base md:text-[20px] font-medium leading-[28px] w-full whitespace-pre-wrap">
        PredictMarkets generates daily revenue from <br /> trading fees
        </h4>
        <h4 className="absolute top-[18%] text-[#CACACA] left-[63%] z-10 max-w-[300px] text-center text-[16px] font-medium leading-[28px] w-full whitespace-pre-wrap">Buys back</h4>
        <h4 className="absolute top-[51%] left-[1%] z-10 max-w-[300px] text-center text-[#ffffff] text-base md:text-[20px] font-medium leading-[28px] w-full whitespace-pre-wrap">
        $PREDICT <br /> Price Goes Up
        </h4>
        <h4 className="absolute top-[45%] text-[#CACACA] left-[54%] z-10 max-w-[300px] text-center text-[16px] font-medium leading-[28px] w-full whitespace-pre-wrap">50% Burns</h4>
        <img src={howItWorksBg} alt="How It Works" className="w-full h-full object-cover " />
        <h4 className="absolute bottom-[2%] left-[38%] z-10 max-w-[300px] text-center text-[#ffffff] text-base md:text-[20px] font-[500] leading-[28px] w-full whitespace-pre-wrap">
        $PREDICT Holders get daily passive USDT staking income
        </h4>
        <h4 className="absolute top-[76%] text-[#CACACA] left-[63%] z-10 max-w-[300px] text-center text-[16px] font-medium leading-[28px] w-full whitespace-pre-wrap">50% Rewards</h4>
        <h4 className="absolute top-[53%] -right-[1%] z-10 max-w-[300px] text-center text-[#ffffff] text-base md:text-[20px] font-[500] leading-[28px] w-full whitespace-pre-wrap">
        $PREDICT <br /> from Uniswap
        </h4>
        </div>

        <div className="relative w-[300px] h-full md:hidden">
        <h4 className="absolute top-[14.5%] left-[23.5%] max-w-[160px] z-10 text-center text-[#ffffff] text-[14px] font-medium leading-[18px] capitalize w-full whitespace-pre-wrap">
        PredictMarkets generates daily revenue from trading fees
        </h4>
        <h4 className="absolute top-[21%] left-[86.5%] max-w-[60px] z-10 text-center text-[#CACACA] text-[14px] font-medium leading-[18px] capitalize w-full whitespace-pre-wrap">
        Buys back
        </h4>
        <h4 className="absolute top-[47%] left-[2%] z-10 max-w-[80px] text-center text-[#ffffff] text-[13px] font-medium leading-[18px] capitalize w-full whitespace-pre-wrap">
        $PREDICT Price Goes Up
        </h4>
        <h4 className="absolute top-[57%] left-[35.5%] max-w-[90px] z-10 text-center text-[#CACACA] text-[14px] font-medium leading-[18px] capitalize w-full whitespace-pre-wrap">
        50% Burns
        </h4>
        <img src={howItWorksBgMobile} alt="How It Works" className="w-full h-full object-cover " />
        <h4 className="absolute bottom-[6%] left-[28.5%] z-10 max-w-[130px] text-center text-[#ffffff] text-[13px] font-medium capitalize leading-[18px] w-full whitespace-pre-wrap">
        $PREDICT Holders get daily passive USDT staking income
        </h4>
        <h4 className="absolute bottom-[32%] left-[61.5%] text-right max-w-[60px] z-10 text-[#CACACA] text-[14px] font-medium leading-[18px] capitalize w-full whitespace-pre-wrap">
        50% Rewards
        </h4>
        <h4 className="absolute top-[46%] -right-[2%] z-10 max-w-[100px] text-center text-[#ffffff] text-[13px] capitalize font-medium leading-[18px] w-full whitespace-pre-wrap">
        $PREDICT <br /> from Uniswap
        </h4>
        </div>


      </div>
    </section>
  );
}