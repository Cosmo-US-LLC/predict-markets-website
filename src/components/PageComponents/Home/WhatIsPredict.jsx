import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const backgroundImage = "https://www.figma.com/api/mcp/asset/7fb36196-c7af-45f0-a98a-fa24db40d6da";
const coinImage = "https://www.figma.com/api/mcp/asset/7adb02e4-2a9a-48e2-9a8c-2bd8aa4eccbc";
const ellipseImage = "https://www.figma.com/api/mcp/asset/a585eb86-8895-4981-aaf8-255cbc48b1ac";
const checkIcon = "https://www.figma.com/api/mcp/asset/d8301168-f720-4203-8aa7-229a5733c7bf";

export default function WhatIsPredict({
  title = "What is $PREDICT?",
  description = "$PREDICT is the cryptocurrency that powers the PredictMarkets decentralised ecosystem, enabling peer-to-peer predictions on real world events such as elections, sports, global financial markets, and much more, without the need for a bookmaker.\n\nPredictMarkets is transparent, global, and anonymous, offering instant withdrawals and full user control in a fair prediction marketplace built for the future.\n\nHolding $PREDICT unlocks real utility and exclusive platform advantages across the platform.",
  benefits = [
    "Daily USDT staking income from trading fee revenue",
    "Lower fees and access to exclusive memberships",
    "Payment method with cashback included",
    "Weekly bonuses and free games",
  ],
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
}) {
  return (
    <section className="relative bg-black w-full overflow-hidden min-h-[698px] flex items-center justify-center py-12 md:py-20">
      {/* Blurred Background */}
      <div className="absolute inset-0 w-full h-full blur-[16.8px]">
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
      <div className="relative z-10 backdrop-blur-[18.65px] bg-[#04132c] border-[0.5px] border-[#2104ff] rounded-[44px] w-full max-w-[1302px] mx-auto px-6 md:px-12 lg:px-[48px] py-8 md:py-12 lg:py-[48px] min-h-[698px] flex flex-col lg:flex-row gap-8 lg:gap-[32px] items-center overflow-hidden">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-[22px] items-start z-10">
          {/* Title */}
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent whitespace-nowrap">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[#cacaca] text-sm md:text-[14px] font-normal leading-[22px] tracking-[0.28px] max-w-[483px] whitespace-pre-wrap">
            {description}
          </p>

          {/* Benefits List */}
          <div className="flex flex-col gap-3 md:gap-[12px]">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 md:gap-[12px] items-center">
                {/* Check Icon */}
                <div className="bg-black border-[0.764px] border-white/51 rounded-[3.058px] w-[19.876px] h-[19.876px] flex items-center justify-center shrink-0">
                  <div className="w-[15.289px] h-[15.289px] flex items-center justify-center">
                    <img
                      src={checkIcon}
                      alt=""
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <Check className="w-full h-full text-white hidden" />
                  </div>
                </div>
                {/* Benefit Text */}
                <p className="text-[#cacaca] text-base md:text-[16px] font-medium leading-[24px] capitalize">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Buy Button */}
          <Link
            to={buyButtonLink}
            className="btn_primary w-full sm:w-[210px] h-[50px] flex items-center justify-center"
          >
            {buyButtonText}
          </Link>
        </div>

        {/* Right Visual Content */}
        <div className="flex-1 relative w-full lg:w-auto h-[400px] md:h-[500px] lg:h-[635px] flex items-center justify-center z-10">
          {/* Ellipse Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[445px] h-[498px] opacity-50">
            <img
              src={ellipseImage}
              alt=""
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Coin Image */}
          <div className="relative w-full max-w-[547px] h-full flex items-center justify-center">
            <img
              src={coinImage}
              alt="PredictMarkets Coin"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}