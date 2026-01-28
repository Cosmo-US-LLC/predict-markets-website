import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../ui/carousel';

import checkIcon from "../../../assets/images/home/get_extra_rewards/golden_check.webp";
import infoIcon from "../../../assets/images/home/get_extra_rewards/infoIcon.webp";


export default function GetExtraRewards({
  title = "Get Extra Rewards Starting From $1,000",
  subtitle = "Not only will you get more $PREDICT, but you'll also unlock greater rewards! Enroll in the exclusive Elite PREDICT Members Club and enjoy incredible benefits starting from as little as $1000. These advantages are exclusively available during the presale.",
  sliderLabel = "How much do you want to spend?",
  sliderValue = "$56,256",
  sliderMin = 1000,
  sliderMax = 100000,
  membershipCards = [],
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
  disclaimer = "(You will get the membership NFT automatically when you purchase $PREDICT)",
  autoPlayInterval = 5000, // 5 seconds
}) {
  const [api, setApi] = useState();
  const [sliderValueState, setSliderValueState] = useState(56256);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Loop back to start
        api.scrollTo(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlayInterval]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Calculate slider percentage
  const sliderPercentage = ((sliderValueState - sliderMin) / (sliderMax - sliderMin)) * 100;

  // Find matching membership card based on slider value
  const getMatchingCard = () => {
    const sortedCards = [...membershipCards].sort((a, b) => a.minAmount - b.minAmount);
    for (let i = sortedCards.length - 1; i >= 0; i--) {
      if (sliderValueState >= sortedCards[i].minAmount) {
        return sortedCards[i];
      }
    }
    return sortedCards[0] || null;
  };

  const matchingCard = getMatchingCard();

  // Update slider value display
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValueState(value);
    
    // Find and scroll to matching card
    const sortedCards = [...membershipCards].sort((a, b) => a.minAmount - b.minAmount);
    const cardIndex = sortedCards.findIndex((card, index) => {
      const nextCard = sortedCards[index + 1];
      return value >= card.minAmount && (!nextCard || value < nextCard.minAmount);
    });
    
    if (cardIndex !== -1 && api) {
      api.scrollTo(cardIndex);
    }
  };

  if (!membershipCards || membershipCards.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#020b10] py-12 md:py-[60px] ">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Full layout (left + right) inside carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {membershipCards.map((card, index) => (
              <CarouselItem key={card.id || index} className="basis-full">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  {/* Left Side - Slider (same for all slides, but moves with carousel) */}
                  <div className="flex flex-col gap-6 flex-1 max-w-[597px] w-full">
                    {/* Slider */}
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4 max-w-[640px] w-full mb-10">
                        <h2 className="heading-two capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">
                          {title}
                        </h2>
                        <p className="text-[#cacaca] text-base font-normal leading-[24px] tracking-[0.32px]">
                          {subtitle}
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-white text-base font-bold leading-6 tracking-[0.32px]">
                          {sliderLabel}
                        </p>
                        <p className="text-white text-base font-bold leading-6 tracking-[0.32px] text-right">
                          {formatCurrency(sliderValueState)}
                        </p>
                      </div>
                      <div className="relative w-full">
                        {/* Slider Track */}
                        <div className="relative w-full h-[18.347px] bg-[rgba(255,255,255,0.2)] border-[0.764px] border-[rgba(255,255,255,0.12)] rounded-[76.444px] overflow-hidden">
                          {/* Filled Portion */}
                          <div
                            className="absolute left-0 top-0 h-full bg-[#94a7b5] rounded-bl-[76.444px] rounded-tl-[76.444px]"
                            style={{ width: `${sliderPercentage}%` }}
                          />
                          {/* Inner Shadow Effects */}
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-3.058px_7.644px_0px_rgba(255,255,255,0.58),inset_0px_3.058px_45.867px_0px_rgba(255,255,255,0.08),inset_0px_3.058px_14.524px_0px_rgba(255,255,255,0.25)]" />
                        </div>
                        {/* Slider Thumb */}
                        <input
                          type="range"
                          min={sliderMin}
                          max={sliderMax}
                          value={sliderValueState}
                          onChange={handleSliderChange}
                          className="absolute top-1/2 -translate-y-1/2 w-full h-[30.578px] appearance-none bg-transparent cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[5.644px] [&::-webkit-slider-thumb]:h-[30.578px] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-[5.644px] [&::-moz-range-thumb]:h-[30.578px] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                          style={{
                            left: 0,
                          }}
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full w-[5.644px] h-[30.578px] pointer-events-none z-20"
                          style={{ left: `calc(${sliderPercentage}% - 2.822px)` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Membership Card + Benefits */}
                  <div className="flex-1 w-full lg:max-w-[650px]">
                    <div
                      className="backdrop-blur-[7.644px] border-[0.764px] border-[rgba(255,255,255,0.1)] rounded-[15.289px] p-6 flex flex-col lg:flex-row gap-[58px] items-center min-h-[349px] relative overflow-hidden"
                    >
                      {/* Background Gradient */}
                      <div
                        className="absolute inset-0 opacity-100"
                        style={{
                          background: card.backgroundGradient,
                        }}
                      />
                      {/* Blurred Light Effect */}
                      <div
                        className="absolute blur-[114.667px] h-[97px] w-[250px] opacity-86"
                        style={{
                          left: '128.24px',
                          top: '111.24px',
                          backgroundImage: 'linear-gradient(90.94449786147293deg, rgb(229, 228, 226) 5.4665%, rgb(170, 187, 200) 38.552%, rgb(229, 228, 226) 69.431%, rgb(148, 167, 181) 97.222%)',
                        }}
                      />
                      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-6 items-center">
                        {/* Left Side - NFT Card */}
                        <div className="flex flex-col gap-5 w-full lg:w-[294px]">
                          <div className="flex flex-col gap-2.5">
                            <h3 className="text-[#e5e4e2] text-2xl md:text-[30px] font-medium leading-[1.1] uppercase">
                              {card.tier}
                              <br />
                              MEMBERSHIP
                            </h3>
                            <p className="text-white text-base font-normal leading-[1.4] tracking-[0.32px]">
                              When you buy $PREDICT for {formatCurrency(card.minAmount)}
                            </p>
                          </div>

                          {/* NFT Card with single image */}
                          <div
                            className="bg-black border-[0.5px] border-white rounded-[15px] h-[174px] w-full relative overflow-hidden shadow-lg"
                            style={{ boxShadow: `0px 0px 10.1px 0px ${card.shadowColor}` }}
                          >
                            {/* Background Gradient */}
                            {/* <div
                              className="absolute inset-0 rounded-[13px]"
                              style={{ backgroundImage: card.nftBackgroundGradient }}
                            /> */}

                            {/* Single Card Image */}
                            {card.cardImage && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                  src={card.cardImage}
                                  alt={`${card.tier} membership`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                            )}

                            {/* Member Text */}
                            {/* <div className="absolute left-[19.5px] bottom-[19.5px] text-white text-base font-medium leading-[1.1] uppercase">
                              <p className="mb-0">{card.tier}</p>
                              <p>Member</p>
                            </div> */}
                          </div>
                        </div>

                        {/* Right Side - Benefits */}
                        <div className="flex flex-col gap-3 flex-1 w-full lg:w-[353px]">
                          {card.benefits && card.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-3 items-center">
                              <div className="bg-black border-[0.764px] border-[rgba(255,255,255,0.51)] rounded-[3.058px] w-[19.876px] h-[19.876px] flex items-center justify-center shrink-0">
                                <img
                                  src={checkIcon}
                                  alt=""
                                  className="w-3 h-3"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <div className="flex gap-1 items-start flex-1">
                                <h5 className="text-white text-[14px] font-medium leading-[1.1] capitalize">
                                  {benefit}
                                </h5>
                                <img
                                  src={infoIcon}
                                  alt=""
                                  className="w-[14.183px] h-[14.183px] shrink-0"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                          ))}

                          {/* Buy Button */}
                          <div className="flex flex-col gap-[18px] items-center mt-4">
                            <Link
                              to={buyButtonLink}
                              className="relative w-full max-w-[361.711px] h-[52.988px] rounded-[152.889px] overflow-hidden group"
                            >
                              <div className="absolute inset-0 blur-[7.644px] bg-gradient-to-r from-[#2104ff] via-[#0d76ff] to-[#2104ff]" />
                              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(249,242,149,0.2)] via-[rgba(224,170,62,0.2)] to-[rgba(249,242,149,0.2)] flex items-center justify-center">
                                <span className="text-white text-base font-extrabold leading-[1.1] tracking-[0.32px] uppercase">
                                  {buyButtonText}
                                </span>
                              </div>
                            </Link>
                            <p className="text-[#cacaca] text-sm md:text-base font-normal leading-[1.11] text-center tracking-[-0.14px]">
                              {disclaimer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}