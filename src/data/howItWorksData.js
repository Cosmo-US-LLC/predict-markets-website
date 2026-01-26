// Images
const stackOfCoinsImage = "https://www.figma.com/api/mcp/asset/57ea7aba-62f7-40fe-88c8-35302b12c18e";
const coinImage = "https://www.figma.com/api/mcp/asset/f4ac3998-8486-441f-ae32-c381e5558757";
const arrowImage1 = "https://www.figma.com/api/mcp/asset/dcacf852-6d2e-4e25-98cf-a48a19be50ea";
const arrowImage2 = "https://www.figma.com/api/mcp/asset/f98b17d3-12be-4a9f-b2b3-643050137aa1";
const arrowImage3 = "https://www.figma.com/api/mcp/asset/062d40a2-75aa-422e-8e85-a407b4960bb9";
const arrowImage4 = "https://www.figma.com/api/mcp/asset/bef21d62-b3ad-41f8-a6ba-31b7936c6861";
const tokenImage1 = "https://www.figma.com/api/mcp/asset/da80776d-b734-4243-ade7-edc6cbded29e";
const tokenImage2 = "https://www.figma.com/api/mcp/asset/04aef86e-e6a5-4446-a789-a6b0b22f985d";
const tokenImage3 = "https://www.figma.com/api/mcp/asset/81fd5158-b83f-4a40-bd7b-1abe5c8fff3a";
const tokenImage4 = "https://www.figma.com/api/mcp/asset/91c3db00-99fa-437a-9c7d-5f7c743abd32";
const fireIcon = "https://www.figma.com/api/mcp/asset/1693afdf-d600-4451-8ca4-d1517f215a9a";

export const howItWorksSteps = [
  {
    id: 1,
    title: "PredictMarkets generates daily revenue from\ntrading fees",
    image: stackOfCoinsImage,
    coinImage: coinImage,
    position: { top: '336px', left: '50%', transform: 'translateX(-50%)' },
    width: '324px',
  },
  {
    id: 2,
    title: "$PREDICT\nfrom Uniswap",
    image: coinImage,
    position: { top: '589.51px', left: 'calc(50% + 414.24px)', transform: 'translateX(-50%)' },
    width: '266.479px',
  },
  {
    id: 3,
    title: "$PREDICT\nPrice Goes Up",
    image: tokenImage3,
    tokenImages: [tokenImage4],
    position: { top: '588px', left: 'calc(50% - 426.76px)', transform: 'translateX(-50%)' },
    width: '266.479px',
  },
  {
    id: 4,
    title: "$PREDICT Holders get daily passive USDT staking income",
    image: tokenImage2,
    tokenImages: [tokenImage1],
    position: { top: '883px', left: '50%', transform: 'translateX(-50%)' },
    width: '286px',
  },
];

export const howItWorksArrows = [
  {
    id: 1,
    label: "Buys back",
    from: 1,
    to: 2,
    image: arrowImage1,
    position: { top: '366.42px', left: '889.23px' },
    size: { width: '220.741px', height: '130.195px' },
  },
  {
    id: 2,
    label: "50% Burns",
    from: 2,
    to: 'fire',
    image: arrowImage2,
    position: { top: '684px', left: '821px' },
    size: { width: '162px', height: '3px' },
  },
  {
    id: 3,
    label: "50% Rewards",
    from: 2,
    to: 4,
    image: arrowImage4,
    position: { top: '816px', left: '912px' },
    size: { width: '228px', height: '180px' },
  },
  {
    id: 4,
    label: "",
    from: 'fire',
    to: 3,
    image: arrowImage3,
    position: { top: '684px', left: '454px' },
    size: { width: '147px', height: '3px' },
    rotate: true,
  },
];

export const howItWorksConfig = {
  title: "How does it work?",
  subtitle: "PredictMarkets is a decentralised prediction platform where users trade on real world event outcomes. Every trade generates fees that directly strengthen the $PREDICT ecosystem through daily buybacks, token burns, and revenue sharing designed to increase long term token value.",
};