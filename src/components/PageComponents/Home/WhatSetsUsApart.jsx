import { useState } from 'react';
import { Check, X } from 'lucide-react';

const IconWithFallback = ({ src, alt, FallbackComponent, className = "w-[22.6px] h-[22.6px]" }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError || !src) {
    return <FallbackComponent className={className} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  );
};

export default function WhatSetsUsApart({
  title = 'What Sets Us Apart',
  description = 'Prediction markets are growing fast...',
  tableData = [],
  platforms = {},
  icons = {},
}) {
  const renderCellValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <IconWithFallback
            src={icons.check || icons.checkIcon}
            alt="Check"
            FallbackComponent={(props) => <Check {...props} className={`${props.className} text-[#2104ff]`} />}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <IconWithFallback
            src={icons.cross || icons.crossIcon}
            alt="Cross"
            FallbackComponent={(props) => <X {...props} className={`${props.className} text-red-500`} />}
          />
        </div>
      );
    }
    return (
      <span className="text-white text-base font-semibold leading-6 tracking-[0.32px]">
        {value}
      </span>
    );
  };

  return (
    <section className="bg-[#020b10] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-10">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-[868px] text-center mx-auto">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px]">
            {description}
          </p>
        </div>

        {/* Desktop / Tablet Comparison Table */}
        <div className="hidden md:block">
          <div className="bg-[#0f0f0f] p-6 md:p-8 gradient-border-rounded overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[972px]">
                {/* Table Header */}
                <div className="border-b border-white/20 px-[40px] lg:px-[55px] py-6">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-1" />
                    <div className="col-span-1 flex flex-col items-center justify-center gap-2">
                      <div className="w-[45px] h-[45px] rounded-[7.261px] bg-white/10 flex items-center justify-center">
                        <div className="w-[24.141px] h-[30.317px] flex flex-wrap gap-0.5">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="w-[7.299px] h-[6.737px] bg-white rounded-[1.323px]"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-white flex flex-row items-center justify-center text-base font-medium leading-6 capitalize">
                        {platforms.predictMarkets?.name || 'PredictMarkets'}
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center gap-2">
                      <img
                        src={platforms.polyMarket?.icon}
                        alt={platforms.polyMarket?.name || 'PolyMarket'}
                        className="w-[45px] h-[45px] object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span className="text-white text-base font-medium leading-6 capitalize">
                        {platforms.polyMarket?.name || 'PolyMarket'}
                      </span>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center gap-2">
                      <img
                        src={platforms.kalshi?.icon}
                        alt={platforms.kalshi?.name || 'Kalshi'}
                        className="w-[45px] h-[45px] object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span className="text-white text-base font-medium leading-6 capitalize">
                        {platforms.kalshi?.name || 'Kalshi'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="px-[40px] lg:px-[55px]">
                  {tableData.map((row, index) => (
                    <div
                      key={row.id}
                      className={`grid grid-cols-4 gap-4 items-center py-4 ${
                        index < tableData.length - 1
                          ? 'border-b border-white/10'
                          : ''
                      }`}
                    >
                      {/* Feature Name */}
                      <div className="col-span-1">
                        <span className="text-white text-base font-medium leading-6 tracking-[0.32px]">
                          {row.feature}
                        </span>
                      </div>

                      {/* PredictMarkets Value */}
                      <div className="col-span-1 flex items-center justify-center">
                        {renderCellValue(row.predictMarkets)}
                      </div>

                      {/* PolyMarket Value */}
                      <div className="col-span-1 flex items-center justify-center">
                        {renderCellValue(row.polyMarket)}
                      </div>

                      {/* Kalshi Value */}
                      <div className="col-span-1 flex items-center justify-center">
                        {renderCellValue(row.kalshi)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {tableData.map((row) => (
            <div
              key={row.id}
              className="bg-[#0f0f0f] gradient-border-rounded px-4 py-4 flex flex-col gap-3"
            >
              {/* Feature */}
              <div>
                <span className="text-white text-base font-medium leading-6 tracking-[0.32px]">
                  {row.feature}
                </span>
              </div>

              {/* PredictMarkets row */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-[32px] h-[32px] rounded-[6px] bg-white/10 flex items-center justify-center">
                    <div className="w-[18px] h-[22px] flex flex-wrap gap-[2px]">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-[5px] h-[5px] bg-white rounded-[1px]"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-white text-sm font-medium leading-5 capitalize">
                    {platforms.predictMarkets?.name || 'PredictMarkets'}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  {renderCellValue(row.predictMarkets)}
                </div>
              </div>

              {/* PolyMarket row */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {platforms.polyMarket?.icon && (
                    <img
                      src={platforms.polyMarket.icon}
                      alt={platforms.polyMarket.name || 'PolyMarket'}
                      className="w-[32px] h-[32px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <span className="text-white text-sm font-medium leading-5 capitalize">
                    {platforms.polyMarket?.name || 'PolyMarket'}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  {renderCellValue(row.polyMarket)}
                </div>
              </div>

              {/* Kalshi row */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {platforms.kalshi?.icon && (
                    <img
                      src={platforms.kalshi.icon}
                      alt={platforms.kalshi.name || 'Kalshi'}
                      className="w-[32px] h-[32px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <span className="text-white text-sm font-medium leading-5 capitalize">
                    {platforms.kalshi?.name || 'Kalshi'}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  {renderCellValue(row.kalshi)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}