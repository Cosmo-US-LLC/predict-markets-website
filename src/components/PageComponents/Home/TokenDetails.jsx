import { useState } from 'react';
import { Copy } from 'lucide-react';
import tokenDetailsImageDesktop from "../../../assets/images/home/token_details/token_details_desktop.webp";
import tokenDetailsImageMobile from "../../../assets/images/home/token_details/token_details_mobile.webp";

export default function TokenDetails({
  title = 'Token Details',
  subtitle = 'The token allocation is structured to give early supporters the strongest advantage.',
  // chartImage,
  details = [],
}) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, value) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      className="bg-[#020b10] py-12 md:py-20 px-4 md:px-8 lg:px-[80px] relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(33, 4, 255, 0.32) 0%, rgba(33, 4, 255, 0) 70%)`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize text-[#ffffff]">
            {title}
          </h2>
          <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px] max-w-[713px]">
            {subtitle}
          </p>
        </div>

         {/* Chart (optional) */}
          
          <div className="bg-[rgba(54,117,171,0.17)] flex items-center justify-center gradient-border-rounded !rounded-[15px] md:h-[600px] h-[422px] relative w-full max-w-[1209px] mx-auto overflow-visible">
              <div className="w-full max-w-full h-[422px] max-md:hidden relative">
                <h4 className='heading-four text-white absolute top-[-30px] left-[36.5%]'>
                  1% Marketing
                </h4>
                <h4 className='heading-four text-white absolute top-[-30px] left-[53%]'>
                1% Team
                </h4>
                <h4 className='heading-four text-white absolute top-[-2px] left-[18%]'>
                3% Development
                </h4>
                <h4 className='heading-four text-white absolute top-[29px] left-[63.5%]'>
                40% Public Sale
                </h4>
                <img
                  src={tokenDetailsImageDesktop}
                  alt="Token Allocation Chart"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <h4 className='heading-four text-white absolute top-[98px] left-[17.5%] max-w-[187px]'>10% Reserved for CEX Listing</h4>
                <h4 className='heading-four text-white absolute bottom-[24%] left-[14.5%] '>25% Liquidity Pool</h4>
                <h4 className='heading-four text-white absolute bottom-[8%] right-[15%] '>20% Staking Rewards</h4>
                
              </div>
              <div className="w-full max-w-full h-[294px] md:hidden relative">
              <p className='text-white paragraph-regular absolute top-[11%] left-[2%] '>3% Development</p>
                <p className='text-white paragraph-regular absolute top-[-10%] left-[23%]'>1% Marketing</p>
                <p className='text-white paragraph-regular absolute top-[10%] right-[32%] '>1%Team</p>
                <p className='text-white paragraph-regular absolute top-[8%] right-[8%] max-w-[52px]'>40% Public Sale</p>
                <img
                  src={tokenDetailsImageMobile}
                  alt="Token Allocation Chart"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <p className='text-white paragraph-regular absolute bottom-[16%] left-[2%] max-w-[107px]'>10% <br/> Reserved for CEX Listing</p>
                <p className='text-white paragraph-regular absolute bottom-[-9%] left-[8%] max-w-[152px]'>25% Liquidity Pool</p>
                <p className='text-white paragraph-regular absolute bottom-[-10%] max-w-[122px] right-[-1%] '>20% Staking Rewards</p>
              </div>
          </div>
        
        {/* Token details cards grid */}
        {details.length > 0 && (
          <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4 md:max-w-[1209px] max-w-full mx-auto">
            {/* Row 1: First 3 cards in 3 columns on mobile */}
            <div className="grid grid-cols-3 gap-3 md:contents">
              {details.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-[#14181B] gradient-border-rounded !rounded-[15px] p-3 md:p-5 flex flex-col gap-2"
                >
                  <span className="text-[#cacaca] text-sm font-normal leading-[22px] tracking-[0.28px]">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-base md:text-base leading-6 tracking-[0.32px] font-medium">
                      {item.value}
                    </span>
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.value)}
                        className="shrink-0 w-8 h-8 rounded flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                        aria-label="Copy address"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {item.copyable && copiedId === item.id && (
                    <span className="text-[#94a7b5] text-xs">Copied!</span>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2: Next 2 cards in 2 columns on mobile */}
            {details.length > 3 && (
              <div className="grid grid-cols-2 gap-3 w-full md:contents">
                {details.slice(3, 5).map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#14181B] gradient-border-rounded !rounded-[15px] p-3 md:p-5 flex flex-col gap-2"
                  >
                    <span className="text-[#cacaca] text-sm font-normal leading-[22px] tracking-[0.28px]">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white text-base md:text-base leading-6 tracking-[0.32px] font-medium">
                        {item.value}
                      </span>
                      {item.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, item.value)}
                          className="shrink-0 w-8 h-8 rounded flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                          aria-label="Copy address"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    {item.copyable && copiedId === item.id && (
                      <span className="text-[#94a7b5] text-xs">Copied!</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Remaining cards: Full width on both mobile and desktop */}
            {details.slice(5).map((item, index) => (
              <div
                key={item.id}
                className={`bg-[#14181B] gradient-border-rounded !rounded-[15px] p-3 md:p-5 flex flex-col gap-2 ${
                  index === details.length - 6 ? 'md:col-span-3' : ''
                }`}
              >
                <span className="text-[#cacaca] text-sm font-normal leading-[22px] tracking-[0.28px]">
                  {item.label}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-white leading-6 tracking-[0.32px] ${
                      item.value.length > 40 ? 'text-[11px] md:text-base font-medium' : 'text-base font-medium'
                    }`}
                  >
                    {item.value}
                  </span>
                  {item.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.value)}
                      className="shrink-0 w-8 h-8 rounded flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      aria-label="Copy address"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {item.copyable && copiedId === item.id && (
                  <span className="text-[#94a7b5] text-xs">Copied!</span>
                )}
              </div>
            ))}
          </div>
        )}

       
      </div>
    </section>
  );
}
