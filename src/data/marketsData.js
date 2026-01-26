// Market card images
const cryptoImage = "https://www.figma.com/api/mcp/asset/b16617f9-4510-4e85-9183-cd4877de321b";
const politicsImage = "https://www.figma.com/api/mcp/asset/fe6bf4bf-600c-4a3e-99ef-6f72d6709abe";
const economyImage = "https://www.figma.com/api/mcp/asset/16f9a563-d184-4e4f-b439-ad2159c47869";
const sportsImage = "https://www.figma.com/api/mcp/asset/9fad3319-64c7-4798-8873-e42550a31a38";
const trendingImage = "https://www.figma.com/api/mcp/asset/9d000eca-694d-4c1b-8f13-8fa0efcc27bf";
const techImage = "https://www.figma.com/api/mcp/asset/351b17e0-3bc4-4d31-87f4-517a0356c9e9";
const cultureImage = "https://www.figma.com/api/mcp/asset/83a484da-c6ab-41e5-82b7-0e07628c89df";

// Icons
const unionIcon = "https://www.figma.com/api/mcp/asset/bd442f66-dda0-4a82-a6bb-297fb82d2c06";
const bitcoinIcon = "https://www.figma.com/api/mcp/asset/f246b83d-1516-4886-b88e-0d2dde1dd88d";
const bitcoinIcon2 = "https://www.figma.com/api/mcp/asset/716f963b-3681-407e-84b8-884b2857366a";
const chartIcon = "https://www.figma.com/api/mcp/asset/73fcc9c9-e784-4a69-be34-4a6c9cccea66";
const soccerIcon = "https://www.figma.com/api/mcp/asset/8feb9abb-0782-4686-8941-0045fd0e142c";
const unionIcon2 = "https://www.figma.com/api/mcp/asset/13049abc-0a93-4840-b9bf-6f524b342268";
const processorIcon = "https://www.figma.com/api/mcp/asset/42497d11-34b7-4555-b3c5-3360d1aded62";
const unionIcon3 = "https://www.figma.com/api/mcp/asset/e2cc6004-119b-4972-bdd3-b1019903e307";
const cultureIcon = "https://www.figma.com/api/mcp/asset/3822b45e-bb10-452f-9164-325593aa0990";

export const marketsData = [
  {
    id: 1,
    title: "Cryptocurrency",
    description: "Forecasts covering major digital assets like Bitcoin and ETH, leading altcoins, DeFi, Layer 2 ecosystems, and key news across the entire crypto market.",
    image: cryptoImage,
    iconBackground: unionIcon,
    iconImage: bitcoinIcon,
    link: "/markets/crypto",
  },
  {
    id: 2,
    title: "Politics",
    description: "Elections, changes in leadership, major policy decisions, and global events influencing governments around the world.",
    image: politicsImage,
    iconBackground: unionIcon,
    iconImage: bitcoinIcon2,
    link: "/markets/politics",
  },
  {
    id: 3,
    title: "Global Economy",
    description: "Inflation trends, interest rate decisions, growth metrics, and labour data shaping global markets and policy.",
    image: economyImage,
    iconBackground: unionIcon,
    iconImage: chartIcon,
    link: "/markets/economy",
  },
  {
    id: 4,
    title: "Sports",
    description: "Championship winners, match results, and standout players across soccer, football, hockey, basketball, tennis, combat sports, esports, and racing.",
    image: sportsImage,
    iconBackground: unionIcon2,
    iconImage: soccerIcon,
    link: "/markets/sports",
  },
  {
    id: 5,
    title: "Trending News",
    description: "Prediction markets focused on the most talked-about events shaping global attention right now.",
    image: trendingImage,
    iconBackground: unionIcon,
    iconImage: chartIcon,
    link: "/markets/trending",
  },
  {
    id: 6,
    title: "Technology",
    description: "AI advances, hardware and product launches, major tech earnings, and the milestones shaping the tech industry.",
    image: techImage,
    iconBackground: unionIcon3,
    iconImage: processorIcon,
    link: "/markets/tech",
  },
  {
    id: 7,
    title: "Culture",
    description: "Entertainment, cultural figures, and trends shaping media, style, and public attention.",
    image: cultureImage,
    iconBackground: unionIcon,
    iconImage: cultureIcon,
    link: "/markets/culture",
  },
];

export const marketsConfig = {
  title: "Markets",
};