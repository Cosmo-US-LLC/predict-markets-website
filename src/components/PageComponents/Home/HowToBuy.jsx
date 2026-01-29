import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../ui/carousel';

export default function HowToBuy({
  steps = [],
  title = 'How to Buy',
  subtitle = 'Follow the guide below to purchase $PREDICT during the presale. The process supports both crypto and card payments and is designed to be quick, secure, and easy to follow.',
  buyButtonText = 'BUY $PREDICT',
  buyButtonLink = '/buy',
}) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section 
      className="bg-[#020b10] py-12 md:py-20  relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(33, 4, 255, 0.63) 0%, rgba(33, 4, 255, 0) 70%), linear-gradient(90deg, rgb(2, 11, 16) 0%, rgb(2, 11, 16) 100%)`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-[9px] items-center text-center mb-12 md:mb-12">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2.56px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-[#cacaca] text-base leading-[22.4px] tracking-[0.32px] max-w-[703px]">
            {subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {steps.map((step) => (
                <CarouselItem key={step.id} className="pl-3">
                  <div className="bg-[#0f0f0f] gradient-border-rounded p-4 flex flex-col gap-[19px]">
                    {/* Image Container */}
                    <div 
                      className="h-[160px] rounded-[15px] overflow-hidden relative"
                      style={{
                        backgroundImage: "linear-gradient(143.47815653030875deg, rgb(13, 0, 109) 29.719%, rgb(18, 0, 157) 79.19%)",
                      }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-2">
                      {/* Step Header */}
                      <div className="flex gap-3 flex-col">
                        <div className="border border-[#2104ff] max-w-[70px] rounded-[41.006px] px-3 py-1">
                          <span className="text-white text-sm font-normal leading-[22px] tracking-[0.28px] whitespace-nowrap">
                            {step.stepNumber}
                          </span>
                        </div>
                        <h3 className="text-white text-xl font-medium leading-7 capitalize">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[#cacaca] text-sm leading-[22px] h-[90px] tracking-[0.28px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-[21px] mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#0f0f0f] gradient-border-rounded p-[26px] flex flex-col gap-[19px]"
            >
              {/* Image Container */}
              <div 
                className="h-[186px] rounded-[15px] overflow-hidden relative"
                style={{
                  backgroundImage: "linear-gradient(143.47815653030875deg, rgb(13, 0, 109) 29.719%, rgb(18, 0, 157) 79.19%)",
                }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                {/* Step Header */}
                <div className="flex gap-3 items-center">
                  <div className="border border-[#2104ff] rounded-[41.006px] px-3 py-1">
                    <span className="text-white text-sm font-normal leading-[22px] tracking-[0.28px] whitespace-nowrap">
                      {step.stepNumber}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-medium leading-8 capitalize whitespace-nowrap">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px] whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buy Button */}
        <div className="flex justify-center">
          <Link
            to={buyButtonLink}
            className="btn_primary w-[232px] flex items-center justify-center"
          >
            {buyButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}