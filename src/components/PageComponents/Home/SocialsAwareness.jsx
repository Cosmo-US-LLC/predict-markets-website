import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import { cn } from '../../../lib/utils';
import socialsAwarenessBg from '../../../assets/images/home/socials_awareness/socials_awareness_bg.webp';
import socialsAwarenessCard1 from '../../../assets/images/home/socials_awareness/socials_awareness_card1.webp';
import socialsAwarenessCard2 from '../../../assets/images/home/socials_awareness/socials_awareness_card2.webp';

const heroCards = [
  {
    id: 'whitepaper',
    title: 'Whitepaper',
    buttonText: 'Read Here',
    image: socialsAwarenessCard1,
    link: '/whitepaper',
  },
  {
    id: 'how-to-buy',
    title: 'How to Buy',
    buttonText: 'Learn More',
    image: socialsAwarenessCard2,
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
    <section className="bg-[#020b10] py-16 md:py-20  relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-10 w-full h-full object-cover">
      <img
        src={socialsAwarenessBg}
        alt="Socials Awareness Background"
        className="w-full h-full object-cover"
      />
      </div>
      {/* Border */}
      <div className="absolute border-b border-[#191919] inset-x-0 top-0" />
      
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:gap-4 gap-2 items-start">
          {/* Left Side - Image Cards */}
          <div className="flex flex-col relative z-20 sm:flex-row gap-4 flex-1">
            {heroCards.map((card) => (
              <Link
                key={card.id}
                to={card.link}
                className="group relative md:h-[348px] h-[300px] w-full md:w-[416px] rounded-[12px] "
              >
                {/* Background Image with Overlay */}
                <div className="border border-[#262626] rounded-[12px]">
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
                <div className='flex flex-col gap-3 absolute bottom-[80px] md:bottom-[20px] left-[20px]'>
                  <h3 className="text-white text-[20px] md:text-[24px] font-[500] md:font-[600] leading-[28px] capitalize">
                    {card.title}
                  </h3>
                  <button className="btn_primary md:w-[200px] w-[170px]">
                    {card.buttonText}
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side - Social Cards */}
          <div className="flex flex-col relative z-20 gap-4 w-full md:w-[416px]">
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