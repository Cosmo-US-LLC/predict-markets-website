const uniswapLogo1 = "https://www.figma.com/api/mcp/asset/9f0af66d-a2e4-4a7f-9385-36db78a0b43f";
const uniswapLogo2 = "https://www.figma.com/api/mcp/asset/695876c0-af94-4dd3-a579-680eb0ea81fc";
const uniswapLogo3 = "https://www.figma.com/api/mcp/asset/63e62fae-f638-4d3a-8e7f-51103ae84324";
const uniswapLogo4 = "https://www.figma.com/api/mcp/asset/88ea62bf-366d-45f0-a706-bfe11281b45e";
const uniswapLogo5 = "https://www.figma.com/api/mcp/asset/a1499c7f-270d-4a1f-a7bc-853763acba4b";

export default function ExchangeListings({
  title = "Multiple Exchange\nListings After Launch",
  exchanges = [
    { id: 1, logo: uniswapLogo1 },
    { id: 2, logo: uniswapLogo2 },
    { id: 3, logo: uniswapLogo3 },
    { id: 4, logo: uniswapLogo4 },
    { id: 5, logo: uniswapLogo5 },
  ],
}) {
  return (
    <section className="w-full bg-[#020b10] px-4 md:px-8 lg:px-[80px] py-12 md:py-[84px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[48px] items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] via-[#bbe1ff] to-white bg-clip-text text-transparent text-center max-w-[840px]">
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Exchange Cards */}
        <div className="flex flex-wrap gap-[15px] items-start justify-center w-full">
          {exchanges.map((exchange) => (
            <div
              key={exchange.id}
              className="bg-[#0f0f0f] border-[0.5px] border-[#2104ff] rounded-[15px] h-[165px] w-full sm:w-[243px] overflow-hidden relative flex items-center justify-center"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[207px] h-[51.905px] flex items-center justify-center">
                <img
                  src={exchange.logo}
                  alt={`Exchange ${exchange.id}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}