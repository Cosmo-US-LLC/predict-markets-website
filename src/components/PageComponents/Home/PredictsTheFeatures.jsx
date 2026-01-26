const featureImage1 = "https://www.figma.com/api/mcp/asset/832082e3-55d8-4a6c-8cf6-06b7590fa3a9";
const featureImage2 = "https://www.figma.com/api/mcp/asset/a18a47f6-c50f-47cf-953e-33a7be2445b1";
const featureImage3 = "https://www.figma.com/api/mcp/asset/45e4eb1f-7f03-4673-bef3-3fe5057b3ef4";
const featureImage4 = "https://www.figma.com/api/mcp/asset/7cd96064-8406-4739-9e55-36f96fb69651";
const featureImage5 = "https://www.figma.com/api/mcp/asset/30c2101e-5570-4621-a332-94976d3e463e";
const featureImage6 = "https://www.figma.com/api/mcp/asset/6772bfe2-41c6-42c4-ba1d-8afe430a7a23";

export default function PredictsTheFeatures({
  title = "Redefining How the World\nPredicts the Future",
  subtitle = "The building blocks behind the world's most rewarding prediction platform",
  features = [
    {
      id: 1,
      image: featureImage1,
      title: "Real Time Prediction Markets",
      description: "Users can participate in live markets covering politics, finance, sports, and global events as they unfold.",
    },
    {
      id: 2,
      image: featureImage2,
      title: "Crowd Powered Probabilities",
      description: "Market prices reflect collective intelligence, turning public sentiment into clear probability signals.",
    },
    {
      id: 3,
      image: featureImage3,
      title: "Buyback & Burn Mechanism",
      description: "Markets settle based on predefined real world outcomes using trusted resolution mechanisms.",
    },
    {
      id: 4,
      image: featureImage4,
      title: "Onchain Transparency",
      description: "All markets and outcomes are recorded on-chain, ensuring verifiable and tamper resistant results.",
    },
    {
      id: 5,
      image: featureImage5,
      title: "24/7 Open Markets",
      description: "Built on efficient blockchain infrastructure, displaying live market movements for fast execution with instant trades and withdrawals.",
    },
    {
      id: 6,
      image: featureImage6,
      title: "Hold-To-Earn",
      description: "By holding the $PREDICT token, users earn daily USDT through the community revenue sharing model.",
    },
  ],
}) {
  return (
    <section
      className="w-full px-4 md:px-8 lg:px-[80px] py-12 md:py-[84px] relative"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(33, 4, 255, 0.3) 0%, rgba(33, 4, 255, 0) 70%), linear-gradient(90deg, rgb(2, 11, 16) 0%, rgb(2, 11, 16) 100%)`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[48px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-2 md:gap-[8px] items-center text-center max-w-[1034px]">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent max-w-[952px] whitespace-pre-wrap">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-[#a3a3a3] text-base md:text-[16px] font-normal leading-[24px] tracking-[0.32px] whitespace-pre-wrap">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col gap-4 md:gap-[16px] w-full">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[16px] items-center md:items-start">
            {features.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="bg-[#0f0f0f] border-[0.5px] border-[#2104ff] rounded-[15px] w-full md:w-[416px] overflow-hidden flex flex-col gap-3 md:gap-[12px] pb-6 md:pb-[24px] pt-4 md:pt-[16px] px-4 md:px-[16px]"
              >
                {/* Image */}
                <div className="h-[152px] relative rounded-[15px] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-1.5 md:gap-[6px] items-start">
                  <h3 className="text-white text-lg md:text-[20px] font-medium leading-[28px] capitalize w-full">
                    {feature.title}
                  </h3>
                  <p className="text-[#cacaca] text-sm md:text-[16px] font-normal leading-[24px] tracking-[0.32px] w-full whitespace-pre-wrap">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-[16px] items-center md:items-start">
            {features.slice(3, 6).map((feature) => (
              <div
                key={feature.id}
                className="bg-[#0f0f0f] border-[0.5px] border-[#2104ff] rounded-[15px] w-full md:w-[416px] overflow-hidden flex flex-col gap-3 md:gap-[12px] pb-6 md:pb-[24px] pt-4 md:pt-[16px] px-4 md:px-[16px]"
              >
                {/* Image */}
                <div className="h-[152px] relative rounded-[15px] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-1.5 md:gap-[6px] items-start">
                  <h3 className="text-white text-lg md:text-[20px] font-medium leading-[28px] capitalize w-full">
                    {feature.title}
                  </h3>
                  <p className="text-[#cacaca] text-sm md:text-[16px] font-normal leading-[24px] tracking-[0.32px] w-full whitespace-pre-wrap">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}