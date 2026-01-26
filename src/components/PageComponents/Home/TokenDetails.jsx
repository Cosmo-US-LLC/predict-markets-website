export default function TokenDetails({
  title = 'Token Details',
  subtitle = 'The token allocation is structured to give early supporters the strongest advantage.',
  chartImage,
  allocations = [],
}) {
  return (
    <section 
      className="bg-[#020b10] py-12 md:py-20 px-4 md:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(33, 4, 255, 0.32) 0%, rgba(33, 4, 255, 0) 70%)`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-2 items-center text-center mb-12 md:mb-12">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px] max-w-[713px]">
            {subtitle}
          </p>
        </div>

        {/* Chart Container */}
        <div className="bg-[rgba(54,117,171,0.17)] border-[0.5px] border-[#2104ff] rounded-[15px] h-[693px] relative w-full max-w-[1209px] mx-auto overflow-visible">
          {/* Chart Image - Centered */}
          <div className="absolute left-1/2 top-[67.5px] -translate-x-1/2 w-[712.524px] h-[554.186px]">
            <img
              src={chartImage}
              alt="Token Allocation Chart"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Allocation Labels with Lines */}
          {allocations.map((allocation) => (
            <div key={allocation.id} className="absolute pointer-events-none">
              {/* Line/Connector */}
              {allocation.lineImage && allocation.linePosition && (
                <div
                  className="absolute"
                  style={{
                    top: allocation.linePosition.top || '0',
                    left: allocation.linePosition.left || '0',
                    transform: allocation.lineTransform || 'none',
                  }}
                >
                  <img
                    src={allocation.lineImage}
                    alt=""
                    className="w-auto h-auto max-w-none"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Label */}
              {allocation.position && (
                <div
                  className="absolute"
                  style={{
                    top: allocation.position.top || '0',
                    left: allocation.position.left || '0',
                  }}
                >
                  <p className="text-white text-xl font-medium leading-7 capitalize whitespace-pre-wrap">
                    {allocation.percentage}% {allocation.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}