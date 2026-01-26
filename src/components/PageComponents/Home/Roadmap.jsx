import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../ui/carousel';
import { CarouselLeftArrow, CarouselRightArrow } from '../../ui/carousel-arrow';
import { cn } from '../../../lib/utils';

export default function Roadmap({ 
  roadmapItems = [],
  title = 'Roadmap',
  subtitle = 'Building the world\'s most rewarding decentralised prediction platform',
}) {
  const [api, setApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on('select', () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  if (!roadmapItems || roadmapItems.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#020b10] py-12 md:py-[60px] px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-[14px] items-center mb-12 md:mb-12">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent text-center">
            {title}
          </h2>
          <p className="text-white text-base leading-6 tracking-[0.32px] text-center max-w-4xl">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {roadmapItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full md:basis-[390px]">
                  <div className="bg-[#0f0f0f] border-[0.5px] border-[#2104ff] rounded-[15px] px-4 py-8 md:px-4 md:py-8 h-[494px] flex flex-col gap-[30px]">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-white text-xl md:text-2xl font-medium leading-8 capitalize whitespace-nowrap">
                        {item.title}
                      </h3>
                      <div
                        className={cn(
                          "h-[30px] rounded-full px-3 flex items-center justify-center min-w-[102px]",
                          item.statusType === 'completed'
                            ? "bg-[#2104ff]"
                            : item.statusType === 'current'
                            ? "border border-[#2104ff]"
                            : "border border-[#2104ff]"
                        )}
                      >
                        <span className="text-white text-sm font-normal leading-[6.462px] tracking-[-0.42px]">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="flex gap-2.5 flex-1">
                      {/* Checkmark Column */}
                      <div className="flex flex-col gap-[58px] pt-1 w-[15px] shrink-0">
                        {item.items.map((_, index) => (
                          <div
                            key={index}
                            className="bg-[#2104ff] flex h-[15px] w-[15px] items-center justify-center p-1 rounded-[7.5px]"
                          >
                            <Check className="h-[7px] w-[7px] text-white" strokeWidth={3} />
                          </div>
                        ))}
                      </div>

                      {/* Text Column */}
                      <div className="flex-1 min-w-0 max-w-[250px]">
                        <div className="space-y-0">
                          {item.items.map((listItem, index) => (
                            <div
                              key={index}
                              className="text-[#cacaca] text-base leading-6 tracking-[0.32px] mb-[58px] last:mb-0"
                            >
                              {listItem}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Arrow Buttons */}
            <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2">
              <CarouselLeftArrow
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
              />
            </div>
            <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2">
              <CarouselRightArrow
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}