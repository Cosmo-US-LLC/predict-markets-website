import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import { cn } from '../../../lib/utils';

const heroCards = [
  {
    id: 'whitepaper',
    title: 'Whitepaper',
    buttonText: 'Read Here',
    image: 'https://www.figma.com/api/mcp/asset/8bccd8d9-0906-4db7-9ff2-10da059bce7c',
    link: '/whitepaper',
  },
  {
    id: 'how-to-buy',
    title: 'How to Buy',
    buttonText: 'Learn More',
    image: 'https://www.figma.com/api/mcp/asset/44eb5fa8-18cb-4f68-a2c7-6e4d83e9252e',
    link: '/how-to-buy',
  },
];

const socialCards = [
  {
    id: 'telegram-chat',
    title: 'Telegram (Chat)',
    description: 'Join the conversation',
    link: 'https://t.me/predictmarkets',
    icon: Send,
  },
  {
    id: 'telegram-ann',
    title: 'Telegram (Ann)',
    description: 'Subscribe for regular updates',
    link: 'https://t.me/predictmarkets_ann',
    icon: Send,
  },
];

export default function SocialsAwareness() {
  return (
    <section className="bg-[#020b10] py-12 md:py-20 px-4 md:px-8 relative">
      {/* Border */}
      <div className="absolute border-b border-[#191919] inset-x-0 top-0" />
      
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* Left Side - Image Cards */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {heroCards.map((card) => (
              <Link
                key={card.id}
                to={card.link}
                className="group relative h-[348px] w-full sm:w-[416px] rounded-[12px] overflow-hidden"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[44.955%] to-black/40 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className={cn(
                  "absolute flex flex-col gap-3",
                  card.id === 'whitepaper' ? "left-1/2 -translate-x-1/2 bottom-[116px]" : "left-4 bottom-[116px]"
                )}>
                  <h3 className="text-white text-2xl font-medium leading-8 capitalize">
                    {card.title}
                  </h3>
                  <button className="btn_primary w-[240px]">
                    {card.buttonText}
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side - Social Cards */}
          <div className="flex flex-col gap-4 w-full lg:w-[416px]">
            {socialCards.map((social) => {
              const Icon = social.icon;
              return (
                <div
                  key={social.id}
                  className="bg-[#0f0f0f] border border-[#262626] rounded-[12px] p-5 flex flex-col gap-[54px]"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2">
                    <Icon className="w-6 h-6 text-white" />
                    <h4 className="text-white text-xl font-medium leading-7 capitalize">
                      {social.title}
                    </h4>
                  </div>

                  {/* Link Button */}
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#191919] flex items-center justify-between px-4 py-[9px] rounded-lg hover:bg-[#222222] transition-colors group"
                  >
                    <span className="text-[#cacaca] text-lg leading-[26px] tracking-[0.36px]">
                      {social.description}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#cacaca] group-hover:text-white transition-colors shrink-0" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}