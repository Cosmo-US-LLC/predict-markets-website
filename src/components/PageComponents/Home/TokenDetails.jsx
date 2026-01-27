export default function TokenDetails({
  title = 'Token Details',
  subtitle = 'The token allocation is structured to give early supporters the strongest advantage.',
  chartImage,
 
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
        <div className="bg-[rgba(54,117,171,0.17)] flex items-center justify-center gradient-border-rounded !rounded-[15px] h-[600px] relative w-full max-w-[1209px] mx-auto overflow-visible">
           
          <div className=" w-[712.524px] h-[554.186px]">
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
      </div>
    </section>
  );
}