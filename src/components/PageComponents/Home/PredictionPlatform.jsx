import { Link } from 'react-router-dom';
import { Circle } from 'lucide-react';
import backgroundImage from '../../../assets/images/home/prediction_platform/prediction_platform_bg.webp';
import liveIndicatorDot from '../../../assets/images/home/prediction_platform/live_dot.webp';


export default function PredictionPlatform({ 
  title = 'The Most Rewarding Global\nDecentralised Prediction Platform',
  subtitle = 'Buy $PREDICT now and get early access benefits before the public launch begins.',
  buyButtonText = 'Buy Now',
  supportButtonText = '24/7 Live Support Here',
  buyButtonLink = '/buy',
  supportButtonLink = '/support',
}) {
  return (
    <section className="relative bg-black w-full overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute left-1/2 top-[calc(50%+58px)] -translate-x-1/2 -translate-y-1/2 w-[1448px] h-[965px] blur-[16.8px]">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[503px] max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Card Container */}
        <div className="relative prediction_platform_card_bg backdrop-blur-[18.65px] bg-[rgba(15,15,15,0.96)] gradient-border-rounded !rounded-[30px] flex  items-center justify-center w-full min-h-[503px] overflow-hidden">
        

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-[22px] items-center justify-center min-h-[290px] px-4 py-8">
            {/* Title */}
            <h2 className="heading-two capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent text-center max-w-[941px]">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-[#cacaca] text-lg md:text-[20px] paragraph-medium text-center max-w-[939px]">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-[22px] items-center justify-center pt-[2px]">
              <Link
                to={buyButtonLink}
                className="btn_primary w-[231px]"
              >
                {buyButtonText}
              </Link>
              <Link
                to={supportButtonLink}
                className="flex items-center justify-center gap-2.5 h-[44px] px-[13px] py-4 border-[0.5px] border-white rounded-full bg-transparent hover:bg-white/10 transition-colors"
              >
                <img
                  src={liveIndicatorDot}
                  alt=""
                  className="w-[10px] h-[10px] shrink-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Circle className="w-[10px] h-[10px] fill-green-500 text-green-500 hidden shrink-0" />
                <span className="text-white text-base font-medium leading-6 capitalize whitespace-nowrap">
                  {supportButtonText}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}