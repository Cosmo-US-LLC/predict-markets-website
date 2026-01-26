import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

const faqData = [
  {
    id: 'what-is-predictmarkets',
    question: 'What Is PredictMarkets?',
    answer: 'PredictMarkets is a decentralized platform for predicting real-world events across crypto, politics, sports, technology, economics, culture, and more. Pick the outcome you believe in and take a position. If you\'re right, you earn a payout. Exit at any time or hold until the event settles.',
  },
  {
    id: 'what-is-predict-token',
    question: 'What Is $PREDICT Token?',
    answer: 'The $PREDICT token is the native utility token of the PredictMarkets platform. It powers the prediction market ecosystem, enabling users to participate in markets, earn rewards, and govern the platform through decentralized decision-making.',
  },
  {
    id: 'presale-difference',
    question: 'What makes the $PREDICT Crypto presale different?',
    answer: 'The $PREDICT presale offers early access to the platform\'s native token with exclusive benefits, competitive pricing, and a transparent allocation structure. Unlike traditional presales, we prioritize community participation and long-term value creation.',
  },
  {
    id: 'presale-growth',
    question: 'How does the presale support long-term growth?',
    answer: 'The presale is designed to fund platform development, marketing, and community building initiatives. Funds raised are allocated strategically to ensure sustainable growth, platform security, and ecosystem expansion, creating long-term value for all participants.',
  },
  {
    id: 'token-safety',
    question: 'Are my $PREDICT tokens safe?',
    answer: 'Yes, $PREDICT tokens are secured through smart contracts audited by leading security firms. We implement industry-standard security measures, including multi-signature wallets, regular security audits, and transparent token allocation. Always store your tokens in a secure wallet and never share your private keys.',
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <section className="bg-[#020b10] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-2 items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px] max-w-[812px]">
            Quick answers to help you understand Predictmarkets, launch timeline,<br />
            our native token and find the support you need.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="w-full space-y-0">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={cn(
                  "border-b border-[#191919] overflow-hidden bg-transparent",
                  index === 0 && "rounded-t-[16px]",
                  index === faqData.length - 1 && "rounded-b-[16px] border-b-0"
                )}
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline text-left bg-transparent">
                  <span className="text-white text-xl font-medium leading-7 capitalize flex-1 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-6 w-6 text-white shrink-0 ml-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>        {/* Support Section */}
        <div className="bg-[#090909] rounded-[16px] p-6 md:p-8">
          <h3 className="text-white text-xl font-medium leading-7 capitalize mb-4">
            Need help or have questions?
          </h3>
          <div className="text-[#cacaca] text-base leading-6 tracking-[0.32px] space-y-2">
            <p>
              You can reach the PredictMarkets team through our official community channels, where verified team members are available to help. For direct support or specific inquiries, you can also contact us by email.
            </p>
            <p className="pt-2">
              General support:{' '}
              <a
                href="mailto:support@predictmarkets.io"
                className="text-white hover:underline"
              >
                support@predictmarkets.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
