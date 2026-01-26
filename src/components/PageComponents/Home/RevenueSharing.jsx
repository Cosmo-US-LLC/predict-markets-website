import { Link } from 'react-router-dom';

const backgroundImage = "https://www.figma.com/api/mcp/asset/404d2039-58b5-425d-bd2a-7b25736255e5";
const coinsImage = "https://www.figma.com/api/mcp/asset/d0a4b083-b1e9-4efe-85cb-7bb4a88aecd1";

export default function RevenueSharing({
  title = "Experience a Revolutionary revenue sharing system",
  description = "Every day, 50% of all trading revenue is shared with $PREDICT holders. Simply hold $PREDICT and receive USDT.\n\nRewards are distributed automatically and proportionally from platform trading fees, fully on-chain, transparent, and driven by real trading activity.\n\nTake part in the ecosystem and benefit daily from the growth of PredictMarkets.",
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
  revenuePercentage = "50% Daily Revenue",
}) {
  return (
    <section className="relative bg-black w-full overflow-hidden py-12 md:py-[60px] flex items-center justify-center min-h-[600px]">
      {/* Blurred Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1478px] h-[985px] blur-[16.8px]">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 backdrop-blur-[18.65px] bg-[#020b10] border-[0.5px] border-[#2104ff] rounded-[44px] w-full max-w-[1302px] mx-auto px-6 md:px-12 lg:px-[48px] py-8 md:py-12 lg:py-[48px] flex flex-col lg:flex-row gap-8 lg:gap-[32px] items-center overflow-hidden">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-[22px] items-start z-10">
          {/* Title */}
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent w-full">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[#cacaca] text-base md:text-[16px] font-normal leading-[24px] tracking-[0.32px] max-w-[526px] whitespace-pre-wrap">
            {description}
          </p>

          {/* Buy Button */}
          <Link
            to={buyButtonLink}
            className="btn_primary w-full sm:w-[210px] h-[50px] flex items-center justify-center"
          >
            {buyButtonText}
          </Link>
        </div>

        {/* Right Visual Content */}
        <div className="flex-1 relative w-full lg:w-[511px] h-[464px] flex items-center justify-center z-10">
          {/* Coins Background (Blurred) */}
          <div className="absolute left-[-274px] top-[-213px] w-[1138.38px] h-[1329.855px] flex items-center justify-center pointer-events-none">
            <div className="rotate-[-13.18deg] w-[898.665px] h-[1155.426px] blur-[15.163px] opacity-47">
              <img
                src={coinsImage}
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Coins Foreground */}
          <div className="absolute left-[-171px] top-[-156px] w-[923px] h-[865px] pointer-events-none">
            <img
              src={coinsImage}
              alt=""
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Blue Sphere with Revenue Text */}
          <div className="absolute left-[178.65px] top-[311.9px] bg-[#2104ff] border-[2.056px] border-[#2104ff] rounded-[124.901px] w-[249.803px] h-[249.803px] flex flex-col items-center justify-center py-[32.896px] shadow-[inset_0px_4.112px_30.429px_0px_rgba(0,0,0,0.85)] z-20">
            <p className="text-white text-[32.896px] font-medium leading-[32.896px] text-center">
              {revenuePercentage.includes('Daily') ? (
                <>
                  50% Daily<br />Revenue
                </>
              ) : (
                revenuePercentage
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}