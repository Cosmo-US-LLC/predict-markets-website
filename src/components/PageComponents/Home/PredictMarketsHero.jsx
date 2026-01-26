import { Link } from 'react-router-dom';
import FeaturedIn from './FeaturedIn';

// Images from Figma
const backgroundImage = "https://www.figma.com/api/mcp/asset/aa057e0b-8838-4398-823e-3f020131406a";
const walletImage = "https://www.figma.com/api/mcp/asset/d49a1b26-d8b0-4171-9c25-140712596f36";
const arrowsImage = "https://www.figma.com/api/mcp/asset/d009a595-0373-4412-8035-f24f1e3be936";
const coinImage = "https://www.figma.com/api/mcp/asset/0598d8ed-f739-4d88-913c-822dd9be9779";

export default function PredictMarketsHero({
  title = "Own the future of prediction markets",
  description = "$PREDICT powers PredictMarkets, the most rewarding decentralised prediction platform that turns real world events into live on-chain markets and shares platform revenue with token holders.",
  buttonText = "Join The Presale",
  buttonLink = "/presale",
  centerImage,
  featuredInLeftText = "First Hold-To-Earn Token",
  featuredInRightText = "Built on Ethereum",
}) {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={backgroundImage}
          alt=""
          className="absolute h-[101.18%] left-0 top-[0.02%] w-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Decorative Coins */}
      {/* Top Left Coin */}
      <div className="hidden lg:flex absolute left-[-38.26px] top-[148.23px] w-[192.522px] h-[134.765px] items-center justify-center pointer-events-none">
        <div className="rotate-[180deg] w-full h-full">
          <img
            src={walletImage}
            alt=""
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Top Right Arrows */}
      <div className="hidden lg:flex absolute right-[4px] top-[367.98px] w-[103.278px] h-[113.017px] items-center justify-center pointer-events-none">
        <div className="rotate-[180deg] w-full h-full">
          <div className="relative w-full h-full">
            {/* Blurred Arrow */}
            <div className="absolute left-[0.14px] top-[4.33px] w-[103.143px] h-[108.685px] flex items-center justify-center">
              <div className="rotate-[165deg] w-[82.559px] h-[90.397px] blur-[3.9px] rounded-[24px]">
                <img
                  src={arrowsImage}
                  alt=""
                  className="w-full h-full object-contain rounded-[24px]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            {/* Sharp Arrow */}
            <div className="absolute left-0 top-0 w-[103.143px] h-[108.685px] flex items-center justify-center">
              <div className="rotate-[165deg] w-[82.559px] h-[90.397px] rounded-[24px]">
                <img
                  src={arrowsImage}
                  alt=""
                  className="w-full h-full object-contain rounded-[24px]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Coin */}
      <div className="hidden lg:flex absolute left-[999.32px] top-[882.95px] w-[112.68px] h-[130.051px] items-center justify-center pointer-events-none">
        <div className="rotate-[-158.68deg] w-[78.415px] h-[109px]">
          <img
            src={coinImage}
            alt=""
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Bottom Right Coins */}
      <div className="hidden lg:flex absolute right-[4px] top-[1074.01px] w-[170px] h-[150.99px] items-center justify-center pointer-events-none">
        <div className="rotate-[180deg] w-full h-full" />
      </div>

      <div className="hidden lg:flex absolute right-[10.59px] top-[1074.47px] w-[189.588px] h-[192.528px] items-center justify-center pointer-events-none">
        <div className="rotate-[160.2deg] w-[146.872px] h-[151.753px]">
          <img
            src={coinImage}
            alt=""
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div className="hidden lg:flex absolute right-[45.84px] top-[1003.59px] w-[183.355px] h-[188.414px] items-center justify-center pointer-events-none">
        <div className="rotate-[-145.26deg] w-[123.535px] h-[143.618px]">
          <img
            src={coinImage}
            alt=""
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[784px] px-4 py-12 md:py-24 mx-auto">
        {/* Featured In Section - At Top */}
        <div className="mb-6 md:mb-8">
          <FeaturedIn
            leftText={featuredInLeftText}
            rightText={featuredInRightText}
          />
        </div>

        {/* Center Image - In Middle */}
        {centerImage && (
          <div className="w-full max-w-[600px] mb-8 md:mb-12">
            <img
              src={centerImage}
              alt=""
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Hero Content - Below Image */}
        <div className="flex flex-col gap-6 items-center text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-[60px] font-medium leading-[68px] tracking-[-1px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent max-w-[784px]">
            {title}
          </h1>

          {/* Description */}
          <p className="text-white text-base font-normal leading-6 tracking-[0.32px] max-w-[564px]">
            {description}
          </p>

          {/* Button */}
          <Link
            to={buttonLink}
            className="btn_secondary mt-2"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}