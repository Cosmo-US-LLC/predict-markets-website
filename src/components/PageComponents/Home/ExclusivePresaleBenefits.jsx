export default function ExclusivePresaleBenefits({
  title = "Exclusive Presale Benefits",
  benefits = [
    {
      id: 1,
      icon: coinImage,
      title: "Lowest Entry Price Before Launch",
      description: "During the presale, you can buy $PREDICT at its lowest price before it launches on centralised and decentralised exchanges.",
    },
    {
      id: 2,
      icon: laptopImage,
      title: "Priority Access to Platform Features",
      description: "Early holders receive priority access to key features at launch, including advanced markets and early participation opportunities.",
    },
    {
      id: 3,
      icon: treasureChestImage,
      title: "Receive up to 40% platform credits",
      description: "Receive up to 40% in free credits to predict and bet on PredictMarkets, with no conditions or obligations attached.",
    },
    {
      id: 4,
      icon: diamondImage,
      title: "$250K giveaway participation",
      description: "Participate in our 250k giveaway and go all out to win big. This event is exclusively available for presale $PREDICT buyers.",
    },
  ],
}) {
  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#020b10] py-12 md:py-[60px] ">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Title */}
        <h2 className="heading-two capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent text-center mb-12 md:mb-[48px]">
          {title}
        </h2>

        {/* Benefits Grid */}
        <div className="flex flex-col md:flex-row gap-[10px] items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[rgba(15,15,15,0.42)] gradient-border-rounded flex flex-col gap-8 items-center px-4 py-7 flex-1 min-w-0"
            >
              {/* Icon */}
              <div className="h-[98px] w-[106px] flex items-center justify-center shrink-0">
                <img
                  src={benefit.icon}
                  alt=""
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 items-center text-center w-full">
                <h3 className="text-white heading-three capitalize">
                  {benefit.title}
                </h3>
                <p className="text-[#cacaca] paragraph-regular">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}