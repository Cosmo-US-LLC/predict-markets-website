import { Link } from 'react-router-dom';
import FeaturedIn from './FeaturedIn';
import FeaturedInSection from './FeaturedInSection';
import { featuredInLogos, featuredInSectionConfig } from '../../../data/featuredInSectionData';

import predictMarketsHeroCoin1 from "../../../assets/images/home/predict_hero/coin_1.webp";
import predictMarketsHeroCoin2 from "../../../assets/images/home/predict_hero/coin_2.webp";
import predictMarketsHeroCoin3 from "../../../assets/images/home/predict_hero/coin_3.webp";
import predictMarketsHeroCoin4 from "../../../assets/images/home/predict_hero/coin_4.webp";
import predictMarketsHeroCoin5 from "../../../assets/images/home/predict_hero/coin_5.webp";

import predictHeroBg from "../../../assets/images/home/predict_hero/predict_hero_bg.webp";
import predictDashboard from "../../../assets/images/home/predict_hero/predict_hero_desboard.webp";


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
          src={predictHeroBg}
          alt=""
          className="absolute h-[101.18%] left-0 top-[0.02%] w-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      {/* Main Content */}
      <div className='w-full max-w-[1440px] mx-auto relative'>
        <div className='absolute top-[10%] left-[-3%] w-[150px] h-[150px]'>
          <img src={predictMarketsHeroCoin1} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='absolute top-[28%] left-[20%] w-[120px] h-[120px]'>
          <img src={predictMarketsHeroCoin2} alt="" className='w-full h-full object-cover' />
        </div>
      
      <div className='absolute top-[16%] right-[-1%] w-[150px] h-[150px]'>
        <img src={predictMarketsHeroCoin3} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='absolute top-[65%] left-[2%] w-[100px] h-[100px]'>
        <img src={predictMarketsHeroCoin4} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='absolute bottom-[15%] right-0 w-[150px] h-[150px]'>
        <img src={predictMarketsHeroCoin5} alt="" className='w-full h-full object-cover' />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1280px] px-4 md:px-8 py-12 md:py-14 mx-auto">
        {/* Featured In Badge - At Top */}
       
          <FeaturedIn
            leftText={featuredInLeftText}
            rightText={featuredInRightText}
          />
         

       

        {/* Hero Content - Below Image */}
        <div className="flex flex-col gap-6 items-center text-center mb-8 md:mb-12">
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

         {/* Center Image - In Middle */}
         {predictDashboard && (
          <div className="relative w-full  h-full flex items-center justify-center">
            <img
              src={predictDashboard}
              alt="PredictMarkets Hero"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Featured In Section - At Bottom */}
        <div className="w-full">
          <FeaturedInSection
            title={featuredInSectionConfig.title}
            logos={featuredInLogos}
          />
        </div>
      </div>
      </div>
    </section>
  );
}