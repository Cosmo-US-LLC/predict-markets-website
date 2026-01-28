import { useState } from 'react';
import { Copy } from 'lucide-react';

export default function TokenDetails({
  title = 'Token Details',
  subtitle = 'The token allocation is structured to give early supporters the strongest advantage.',
  chartImage,
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
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px] max-w-[713px]">
            {subtitle}
          </p>
        </div>

         {/* Chart (optional) */}
         {chartImage && (
          <div className="bg-[rgba(54,117,171,0.17)] flex items-center justify-center gradient-border-rounded !rounded-[15px] h-[600px] relative w-full max-w-[1209px] mx-auto overflow-visible">
            <div className="w-full max-w-[712px] h-[554px]">
              <img
                src={chartImage}
                alt="Token Allocation Chart"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        )}
        {/* Token details cards grid */}
        {details.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1209px] mx-auto">
            {details.map((item, index) => (
              <div
                key={item.id}
                className={`bg-[#14181B] gradient-border-rounded !rounded-[15px] p-4 md:p-5 flex flex-col gap-2 ${
                  index === details.length - 1 ? 'md:col-span-3' : ''
                }`}
              >
                <span className="text-[#cacaca] text-sm font-normal leading-5 tracking-[0.32px]">
                  {item.label}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-white text-base leading-6 tracking-[0.32px] ${
                      item.value.length > 40 ? 'font-normal' : 'font-bold'
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
