import { Link } from 'react-router-dom';
import { Circle } from 'lucide-react';

const backgroundImage = 'https://www.figma.com/api/mcp/asset/273c6853-b05b-43ee-b290-32f371b01adc';
const coinImage = 'https://www.figma.com/api/mcp/asset/7fbd8ea6-1fad-4098-81aa-d9048ee3ffde';
const liveIndicatorDot = 'https://www.figma.com/api/mcp/asset/d6d94eab-fa5c-4f94-a511-d34428416a05';

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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[503px] px-4 md:px-8 lg:px-[302px] py-12 md:py-[106px]">
        {/* Card Container */}
        <div className="relative backdrop-blur-[18.65px] bg-[rgba(15,15,15,0.96)] border-[0.5px] border-[#2104ff] rounded-[44px] w-full max-w-[1278px] min-h-[503px] overflow-hidden">
          {/* Decorative Coins */}
          <div className="hidden lg:flex absolute left-[48.5px] top-[-0.5px] w-[189.588px] h-[192.528px] items-center justify-center pointer-events-none">
            <div className="rotate-[-19.8deg] w-[146.872px] h-[151.753px]">
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

          <div className="hidden lg:flex absolute left-[974.5px] top-[-37.5px] w-[155.492px] h-[184.414px] items-center justify-center pointer-events-none">
            <div className="rotate-[-19.8deg] w-[108.806px] h-[156.831px]">
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

          <div className="hidden lg:flex absolute left-[1170.81px] top-[115.64px] w-[154.876px] h-[184.138px] items-center justify-center pointer-events-none">
            <div className="rotate-[19.48deg] w-[108.806px] h-[156.831px] blur-[5.5px]">
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

          <div className="hidden lg:flex absolute left-[-59.7px] top-[261.51px] w-[170.034px] h-[161.012px] items-center justify-center pointer-events-none">
            <div className="rotate-[-126.43deg] w-[96.965px] h-[139.764px] blur-[5.5px]">
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

          <div className="hidden lg:flex absolute left-[196.5px] top-[361.5px] w-[147.967px] h-[181.705px] items-center justify-center pointer-events-none">
            <div className="rotate-[-19.8deg] w-[100.808px] h-[156.831px]">
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

          <div className="hidden lg:flex absolute left-[936.5px] top-[289.5px] w-[207.23px] h-[212.948px] items-center justify-center pointer-events-none">
            <div className="rotate-[34.74deg] w-[139.621px] h-[162.319px]">
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

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-[22px] items-center justify-center min-h-[290px] px-4 py-8">
            {/* Title */}
            <h1 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent text-center max-w-[1041px]">
              {title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-[#cacaca] text-lg md:text-[20px] leading-7 tracking-[0.4px] text-center max-w-[939px]">
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
                className="flex items-center justify-center gap-2.5 h-[49px] px-[13px] py-4 border-[0.5px] border-white rounded-full bg-transparent hover:bg-white/10 transition-colors"
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