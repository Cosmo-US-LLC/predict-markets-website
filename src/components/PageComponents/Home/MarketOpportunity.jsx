import { Link } from 'react-router-dom';

export default function MarketOpportunity({
  title = 'Huge Market Opportunity',
  description = 'Prediction markets are one of the fastest growing sectors...',
  chartImage,
  backgroundImage,
  market2026,
  market2030,
  buyButtonText = 'BUY $PREDICT',
  buyButtonLink = '/buy',
}) {
  return (
    <section className="relative bg-black w-full overflow-hidden py-12 md:py-20">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-cover bg-center w-full mx-auto h-full flex items-center justify-center">
        <div className="rotate-180 blur-[16.8px] w-full h-full">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-8">
        <div className="backdrop-blur-[18.65px] bg-[#020b10] gradient-border-rounded !rounded-[44px] w-full max-w-[1220px] overflow-hidden flex flex-col lg:flex-row gap-8 md:gap-[18px] items-center px-6 md:px-[80px] py-8 md:py-[32px]">
          {/* Left Side - Chart */}
          <div className="relative h-[487px] w-full lg:w-[426px] flex-shrink-0">
            {/* Chart Image */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[389px] h-[351px]">
              <img
                src={chartImage}
                alt="Market Opportunity Chart"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Market 2026 Label - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center text-white w-full">
              <p className="text-base font-medium leading-6 tracking-[0.32px] mb-0.5">
                {market2026?.label || 'Prediction Marketplaces in 2026'}
              </p>
              <p className="text-base font-bold leading-6 tracking-[0.32px] h-[21px]">
                {market2026?.value || 'Currently Valued at $20B+'}
              </p>
            </div>

            {/* Market 2030 Label - Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-white w-full">
              <p className="text-base font-medium leading-6 tracking-[0.32px] mb-0.5 whitespace-pre-line">
                {market2030?.label || 'Prediction Marketplaces in 2030\nExpected by Industry Experts'}
              </p>
              <p className="text-base font-bold leading-6 tracking-[0.32px] h-[21px]">
                {market2030?.value || 'Valued above $200B+'}
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-8 md:gap-12 flex-1 max-w-[628px]">
            {/* Text Content */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">
                {title}
              </h2>
              <div className="text-[#cacaca] text-base leading-6 tracking-[0.32px] whitespace-pre-line">
                {description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-4' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Buy Button */}
            <div>
              <Link
                to={buyButtonLink}
                className="btn_primary w-[232px] h-[50px] flex items-center justify-center"
              >
                {buyButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}