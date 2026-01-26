// Images for membership cards
const platinumJut6 = "https://www.figma.com/api/mcp/asset/e9987177-2ba0-4c0d-b058-dfcb22767bcc";
const platinumCoin = "https://www.figma.com/api/mcp/asset/fe280031-32c4-4dc9-832f-c586eeab8787";
const platinumLogo = "https://www.figma.com/api/mcp/asset/c72ee0b5-f979-49c4-8f1c-3f12ec0cc071";

const diamondJut6 = "https://www.figma.com/api/mcp/asset/b3e51963-2a8a-47bf-80c9-5a69aae89d9b";
const diamondCoin = "https://www.figma.com/api/mcp/asset/24a8da8b-99e8-4500-ab2d-316408464c78";
const diamondLogo = "https://www.figma.com/api/mcp/asset/c40c803b-03e0-425a-bc41-a0f4902e22b9";

const goldJut6 = "https://www.figma.com/api/mcp/asset/29dd9d3e-e158-4bda-bf72-c919874af6cf";
const goldCoin = "https://www.figma.com/api/mcp/asset/70c32807-8f7a-49d5-a970-75ee617ef0fa";
const goldLogo = "https://www.figma.com/api/mcp/asset/2db5a97f-b108-487e-9d52-6526ad77df69";

const silverJut6 = "https://www.figma.com/api/mcp/asset/e8bec8cb-8414-4712-b1f8-4512b51a7b0a";
const silverCoin = "https://www.figma.com/api/mcp/asset/a87831f6-e98e-4c30-a6f0-c429d8a955c4";
const silverLogo = "https://www.figma.com/api/mcp/asset/ba472c83-9e64-46c0-807b-7257830b2408";

const bronzeJut6 = "https://www.figma.com/api/mcp/asset/65a281f4-f274-4a67-bbab-f3f76619ede4";
const bronzeCoin = "https://www.figma.com/api/mcp/asset/2f6a2a22-aea7-403f-8baf-752b26a5bf62";
const bronzeLogo = "https://www.figma.com/api/mcp/asset/b747bb2c-857a-46c8-a763-93beab310889";

export const membershipCards = [
  {
    id: 1,
    tier: "Platinum",
    minAmount: 50000,
    decorativeImage: platinumJut6,
    coinImage: platinumCoin,
    logoImage: platinumLogo,
    shadowColor: "#504cc2",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(16,9,73,0.75) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(33, 4, 255) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "10% $PREDICT Bonus",
      "5% PredictMarkets Credits",
      "Bonus Staking Rewards",
      "USDT Staking Rewards",
      "PredictMarkets VIP Package",
    ],
  },
  {
    id: 2,
    tier: "Diamond",
    minAmount: 30000,
    decorativeImage: diamondJut6,
    coinImage: diamondCoin,
    logoImage: diamondLogo,
    shadowColor: "#62c9f3",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(18,56,73,0.75) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(0, 178, 255) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "10% $PREDICT Bonus",
      "5% PredictMarkets Credits",
      "Bonus Staking Rewards",
      "USDT Staking Rewards",
      "PredictMarkets VIP Package",
    ],
  },
  {
    id: 3,
    tier: "Gold",
    minAmount: 20000,
    decorativeImage: goldJut6,
    coinImage: goldCoin,
    logoImage: goldLogo,
    shadowColor: "#c99500",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(92,70,17,0.88) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(231, 172, 0) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "10% $PREDICT Bonus",
      "5% PredictMarkets Credits",
      "Bonus Staking Rewards",
      "USDT Staking Rewards",
      "PredictMarkets VIP Package",
    ],
  },
  {
    id: 4,
    tier: "Silver",
    minAmount: 10000,
    decorativeImage: silverJut6,
    coinImage: silverCoin,
    logoImage: silverLogo,
    shadowColor: "#a1a1a1",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(50,50,51,0.67) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(197, 197, 197) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "10% $PREDICT Bonus",
      "5% PredictMarkets Credits",
      "Bonus Staking Rewards",
      "USDT Staking Rewards",
      "PredictMarkets VIP Package",
    ],
  },
  {
    id: 5,
    tier: "Bronze",
    minAmount: 1000,
    decorativeImage: bronzeJut6,
    coinImage: bronzeCoin,
    logoImage: bronzeLogo,
    shadowColor: "#b07356",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(73,57,50,0.895) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(136, 104, 89) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "10% $PREDICT Bonus",
      "5% PredictMarkets Credits",
      "Bonus Staking Rewards",
      "USDT Staking Rewards",
      "PredictMarkets VIP Package",
    ],
  },
];

export const getExtraRewardsConfig = {
  title: "Get Extra Rewards Starting From $1,000",
  subtitle: "Not only will you get more $PREDICT, but you'll also unlock greater rewards! Enroll in the exclusive Elite PREDICT Members Club and enjoy incredible benefits starting from as little as $1000. These advantages are exclusively available during the presale.",
  sliderLabel: "How much do you want to spend?",
  sliderMin: 1000,
  sliderMax: 100000,
  buyButtonText: "BUY $PREDICT",
  buyButtonLink: "/buy",
  disclaimer: "(You will get the membership NFT automatically when you purchase $PREDICT)",
  autoPlayInterval: 5000, // 5 seconds
};