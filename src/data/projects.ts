export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  client: string;
  industry: string;
  engagement: string;
  timeline: string;
  image: string;
  summary: string;
  cardSummary: string;
  problem: string;
  solution: string;
  role: string[];
  stack: string[];
  modules: Array<{ name: string; detail: string }>;
  architecture: Array<{ layer: string; detail: string }>;
  deliverables: string[];
  outcomes: string[];
  metrics: Array<{ label: string; value: string }>;
  cardFacts: Array<{ label: string; value: string }>;
  links: Array<{ label: string; href: string }>;
};

export const projects: Project[] = [
  {
    slug: 'lumnia-dex',
    title: 'Lumnia DEX Platform',
    shortTitle: 'Lumnia DEX',
    category: 'DeFi Platform',
    client: 'Lumnia, a Somnia-native DeFi product team',
    industry: 'DeFi, AMM, rewards, NFT incentives',
    engagement: 'Dedicated Web3 product squad',
    timeline: 'Discovery -> contract integration -> frontend build -> launch support',
    image: '/images/projects/lumnia-dex.jpg',
    summary: 'Gamified DEX experience on Somnia with v2/v3 AMM flows, NFT incentives, lottery mechanics, and LX Points.',
    cardSummary: 'Somnia DEX with AMM, rewards, NFT incentives, and launch-ready Web3 UX.',
    problem:
      'The product needed to be more than a standard swap UI. It had to introduce a new ecosystem, support liquidity behavior, and make rewards visible enough for users to understand why they should return.',
    solution:
      'We shaped the product into connected DeFi surfaces: swap, liquidity, reward, collectible, and documentation-ready launch flows. The UI was built around clear transaction states and modular protocol screens.',
    role: [
      'Translate product concept into launchable DeFi UX',
      'Build frontend flows for swap, liquidity, reward, and NFT modules',
      'Integrate wallet states and protocol interaction states',
      'Prepare technical handoff for future protocol modules',
    ],
    stack: ['Solidity', 'Somnia', 'React', 'TypeScript', 'Web3 SDKs', 'Tailwind', 'AMM UX'],
    modules: [
      { name: 'Swap terminal', detail: 'Token selection, route feedback, transaction state, and post-swap confirmation.' },
      { name: 'Liquidity module', detail: 'Pool discovery, position entry points, and v2/v3-oriented interaction patterns.' },
      { name: 'Rewards layer', detail: 'LX Points, lottery, and NFT surfaces connected to user activity.' },
      { name: 'Launch foundation', detail: 'Responsive routing, error states, documentation references, and growth-ready structure.' },
    ],
    architecture: [
      { layer: 'UI shell', detail: 'React/TypeScript screens with wallet-aware state and responsive DeFi layouts.' },
      { layer: 'Protocol adapter', detail: 'Typed interaction layer for contract calls, transaction payloads, and app status.' },
      { layer: 'Incentive surfaces', detail: 'Reward, NFT, and lottery modules exposed as product loops instead of hidden mechanics.' },
      { layer: 'Handoff', detail: 'Documentation, deployment notes, and component boundaries for continued iteration.' },
    ],
    deliverables: ['DEX web application', 'Wallet and transaction UX', 'Smart contract integration layer', 'Reward and NFT module screens', 'Launch support'],
    outcomes: ['Clear Somnia-native DEX experience', 'Reusable foundation for future DeFi modules', 'Reward loop that users can understand quickly'],
    metrics: [
      { label: 'AMM', value: 'v2/v3' },
      { label: 'Chain', value: 'Somnia' },
      { label: 'Modules', value: '4+' },
    ],
    cardFacts: [
      { label: 'Type', value: 'DEX' },
      { label: 'Chain', value: 'Somnia' },
    ],
    links: [
      { label: 'Visit project', href: 'https://www.lumnia.tech/' },
      { label: 'Docs', href: 'https://docs.lumnia.tech/' },
    ],
  },
  {
    slug: 'wikiagent-ai',
    title: 'WikiAgent AI Analytics',
    shortTitle: 'WikiAgent AI',
    category: 'AI Analytics',
    client: 'Crypto intelligence and research platform',
    industry: 'AI research, token analytics, market intelligence',
    engagement: 'AI workflow and analytics product build',
    timeline: 'Model workflow -> data integration -> analysis UI -> iteration',
    image: '/images/projects/wikiagent-ai.jpg',
    summary: 'AI-powered crypto research platform that turns token, chain, and market data into readable analysis.',
    cardSummary: 'AI crypto analytics that turns token and market data into readable research.',
    problem:
      'Crypto research is fragmented across explorers, dashboards, social feeds, and model outputs. The client needed a product that could assemble context and explain it without overwhelming users.',
    solution:
      'We designed a model-assisted research flow with token context, data aggregation, generated narratives, and UI states that help users move from search to interpretation.',
    role: [
      'Define AI-assisted analysis workflow',
      'Integrate multiple model providers and data sources',
      'Design token research screens and generated analysis states',
      'Structure product for future chain and model expansion',
    ],
    stack: ['AI/ML', 'GPT-4o', 'Grok', 'DeepSeek', 'React', 'API aggregation', 'Prompt workflows'],
    modules: [
      { name: 'Research query', detail: 'Search and token entry points designed around fast discovery.' },
      { name: 'Model orchestration', detail: 'Provider workflow for summaries, risk notes, and project narratives.' },
      { name: 'Token intelligence', detail: 'Market, chain, and contextual views that support generated explanations.' },
      { name: 'Analysis output', detail: 'Readable summaries with enough structure for both analysts and retail users.' },
    ],
    architecture: [
      { layer: 'Frontend', detail: 'Research workspace with loading, empty, comparison, and generated-analysis states.' },
      { layer: 'AI workflow', detail: 'Prompt and provider routing for multi-model outputs.' },
      { layer: 'Data aggregation', detail: 'Market and chain data shaped into model-ready context.' },
      { layer: 'Expansion', detail: 'Provider-agnostic structure for additional chains, models, and signals.' },
    ],
    deliverables: ['Analytics interface', 'AI provider workflow', 'Token analysis modules', 'Generated summary UX', 'Data integration path'],
    outcomes: ['Faster token research', 'Readable AI-generated analysis', 'Architecture ready for more providers and datasets'],
    metrics: [
      { label: 'Models', value: 'AI' },
      { label: 'Data', value: 'Crypto' },
      { label: 'Scope', value: 'Analytics' },
    ],
    cardFacts: [
      { label: 'Type', value: 'AI analytics' },
      { label: 'Data', value: 'Crypto market' },
    ],
    links: [{ label: 'Visit project', href: 'https://www.wikiagent.ai/' }],
  },
  {
    slug: 'meowtopia',
    title: 'Meowtopia Game',
    shortTitle: 'Meowtopia',
    category: 'GameFi',
    client: 'Mini dapp game for social chat ecosystems',
    industry: 'GameFi, casual gaming, NFT progression',
    engagement: 'Game product engineering',
    timeline: 'Gameplay systems -> mobile UX -> Web3 loop -> launch prep',
    image: '/images/projects/meowtopia.jpg',
    summary: 'Casual mini dapp game with cat rescue, house building, zodiac merge mechanics, and blockchain progression.',
    cardSummary: 'Mobile GameFi mini app with rescue, collection, merge, and progression loops.',
    problem:
      'The game had to feel simple for chat-platform users while still creating enough progression depth for repeat sessions and collectible mechanics.',
    solution:
      'We turned the concept into mobile-first gameplay surfaces with collection, merge, rescue, and Web3-aware progression. Crypto mechanics stay supporting, not blocking.',
    role: [
      'Shape gameplay loop and progression surfaces',
      'Build mobile-first mini dapp UI patterns',
      'Connect NFT and inventory concepts to gameplay',
      'Prepare expansion paths for future economy layers',
    ],
    stack: ['GameFi', 'LINE Mini Dapp', 'React', 'NFT mechanics', 'Blockchain integration', 'Mobile UX'],
    modules: [
      { name: 'Rescue loop', detail: 'Core player action loop around rescue, collection, and return sessions.' },
      { name: 'House building', detail: 'Progression surfaces that give users visible ownership and upgrade goals.' },
      { name: 'Zodiac merge', detail: 'Collection and merge mechanic designed for repeat engagement.' },
      { name: 'Web3 layer', detail: 'NFT-aware state that supports ownership without heavy onboarding friction.' },
    ],
    architecture: [
      { layer: 'Game shell', detail: 'Mobile-first screens optimized for mini app entry points.' },
      { layer: 'Progression state', detail: 'Inventory, collection, merge, and reward concepts organized by loop.' },
      { layer: 'Blockchain surface', detail: 'NFT and account-aware mechanics presented as game progression.' },
      { layer: 'Growth', detail: 'Feature boundaries for future missions, events, and economy modules.' },
    ],
    deliverables: ['Game interface', 'Gameplay state flows', 'Mobile interaction system', 'Web3 integration plan', 'Progression screens'],
    outcomes: ['Accessible mini dapp experience', 'Clear retention mechanics', 'Foundation for future NFT and event modules'],
    metrics: [
      { label: 'Platform', value: 'Mini app' },
      { label: 'Genre', value: 'GameFi' },
      { label: 'Format', value: 'Mobile' },
    ],
    cardFacts: [
      { label: 'Type', value: 'Mini game' },
      { label: 'Genre', value: 'GameFi' },
    ],
    links: [{ label: 'Visit project', href: 'https://meowtopia.fun/' }],
  },
  {
    slug: 'ez-wallet',
    title: 'EZ Wallet',
    shortTitle: 'EZ Wallet',
    category: 'Wallet & DeFi',
    client: 'Consumer crypto wallet for Web2 users',
    industry: 'Wallet, fintech, DeFi onboarding',
    engagement: 'Full-stack wallet product build',
    timeline: 'Backend APIs -> wallet UX -> DeFi flows -> provider integration',
    image: '/images/projects/ezwallet.jpg',
    summary: 'Simplified crypto wallet with learn-and-earn, safer sending, limit-order DeFi, identity, and fiat onboarding.',
    cardSummary: 'Consumer crypto wallet with safer sending, DeFi actions, identity, and fiat flows.',
    problem:
      'The client wanted real wallet and DeFi functionality without exposing mainstream users to the complexity that usually makes crypto products feel risky.',
    solution:
      'We designed wallet flows around confirmation, clarity, identity, and progressive DeFi actions. The backend supports expandable product state and third-party provider integrations.',
    role: [
      'Build API architecture and wallet product flows',
      'Design safer transaction confirmation patterns',
      'Integrate DeFi and fiat provider surfaces',
      'Create foundation for account, identity, and product expansion',
    ],
    stack: ['NestJS', 'GraphQL', 'Solidity', 'web3.js', 'DeFi', 'MoonPay', 'Transak'],
    modules: [
      { name: 'Wallet account', detail: 'Account, balance, identity, and user state exposed through backend APIs.' },
      { name: 'Send flow', detail: 'Confirmation-first transaction pattern for safer token transfers.' },
      { name: 'DeFi actions', detail: 'Limit-order and protocol surfaces connected through wallet UX.' },
      { name: 'Fiat bridge', detail: 'Provider entry points for MoonPay/Transak-style onboarding.' },
    ],
    architecture: [
      { layer: 'Backend', detail: 'NestJS/GraphQL API layer for wallet, account, and product state.' },
      { layer: 'Web3', detail: 'Smart contract and web3.js touchpoints for token and DeFi interactions.' },
      { layer: 'UX', detail: 'Consumer-grade wallet flows with explicit confirmation and status feedback.' },
      { layer: 'Providers', detail: 'Fiat and identity-aware integration paths for onboarding and growth.' },
    ],
    deliverables: ['Wallet app flows', 'GraphQL API architecture', 'Smart contract touchpoints', 'Fiat integration paths', 'DeFi action surfaces'],
    outcomes: ['Simpler onboarding for Web2 users', 'Expandable wallet backend', 'Cleaner bridge between fiat, identity, and DeFi'],
    metrics: [
      { label: 'Type', value: 'Wallet' },
      { label: 'Scope', value: 'DeFi' },
      { label: 'Backend', value: 'GraphQL' },
    ],
    cardFacts: [
      { label: 'Type', value: 'Wallet' },
      { label: 'Scope', value: 'DeFi + fiat' },
    ],
    links: [{ label: 'Visit project', href: 'https://ezwallet.xyz/' }],
  },
  {
    slug: 'kulturhotel-kaiserhof',
    title: 'Kulturhotel Kaiserhof Website',
    shortTitle: 'Kaiserhof Hotel',
    category: 'Hospitality Website',
    client: 'Kulturhotel Kaiserhof, a historic hotel in Bad Liebenstein, Germany',
    industry: 'Hospitality, hotel booking, tourism, local destination marketing',
    engagement: 'Next.js website, SEO foundation, admin panel, content workflow',
    timeline: 'Discovery -> UX/UI build -> SEO setup -> admin panel -> deployment support',
    image: '/images/projects/kulturhotel-kaiserhof.png',
    summary: 'A premium hotel website for a well-known German hospitality brand, built with Next.js, SEO-ready pages, booking surfaces, and admin content management.',
    cardSummary: 'Premium German hotel website with Next.js, SEO, booking surfaces, and admin updates.',
    problem:
      'The hotel needed a fast, elegant, multilingual web presence that could communicate rooms, packages, restaurant, events, wellness, and destination content while staying easy for the internal team to update.',
    solution:
      'We built a Next.js website with structured sections, strong SEO metadata, booking-oriented UX, responsive hospitality pages, and an admin panel so hotel staff can update content without developer involvement.',
    role: [
      'Build production-grade Next.js frontend for a premium hospitality website',
      'Create reusable content sections for rooms, arrangements, restaurant, wellness, meetings, and destination pages',
      'Implement SEO-ready metadata and page structure for hotel and tourism search intent',
      'Deliver an admin panel workflow for updating website content and marketing sections',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'SEO', 'Admin Panel', 'CMS Workflow', 'Responsive UI'],
    modules: [
      { name: 'Hotel landing page', detail: 'Hero, booking entry points, brand story, location messaging, and conversion-focused content blocks.' },
      { name: 'Content management', detail: 'Admin workflow for updating key website content, marketing copy, images, and structured sections.' },
      { name: 'SEO foundation', detail: 'Metadata, semantic sections, localized search intent, and page structure for hotel discovery.' },
      { name: 'Booking surfaces', detail: 'Prominent booking CTA, date/guest entry points, and availability-checking user journey.' },
    ],
    architecture: [
      { layer: 'Frontend', detail: 'Next.js pages and reusable React components for hospitality content and booking-oriented layouts.' },
      { layer: 'Content layer', detail: 'Admin-editable content model for rooms, packages, restaurant, wellness, meetings, and destination areas.' },
      { layer: 'SEO', detail: 'Structured metadata and content hierarchy designed for hotel, region, room, and tourism keywords.' },
      { layer: 'Operations', detail: 'Deployment-ready build with a handoff flow that lets the hotel team maintain content internally.' },
    ],
    deliverables: ['Next.js hotel website', 'Responsive hospitality UI', 'SEO metadata setup', 'Admin panel content workflow', 'Booking CTA surfaces', 'Deployment support'],
    outcomes: ['Premium digital presence for a historic German hotel', 'Internal content updates without developer dependency', 'Search-friendly structure for hospitality and tourism pages'],
    metrics: [
      { label: 'Stack', value: 'Next.js' },
      { label: 'SEO', value: 'Ready' },
      { label: 'Admin', value: 'Panel' },
    ],
    cardFacts: [
      { label: 'Type', value: 'Hotel website' },
      { label: 'Stack', value: 'Next.js' },
    ],
    links: [{ label: 'Visit project', href: 'https://stag.kulturhotel-kaiserhof.de/' }],
  },
  {
    slug: '1tap-finance',
    title: '1Tap Finance DeFi Platform',
    shortTitle: '1Tap Finance',
    category: 'Solana DeFi',
    client: '1Tap Finance, a Solana DeFi product for yield and portfolio actions',
    industry: 'Solana DeFi, staking, earn, borrow, yield aggregation',
    engagement: 'Web3 product website and DeFi experience',
    timeline: 'Product positioning -> landing UI -> DeFi flows -> protocol integration surfaces',
    image: '/images/projects/1tap-finance.png',
    summary: 'A Solana DeFi product experience for staking, earn, borrow, and yield opportunities across protocols such as Jupiter and Kamino.',
    cardSummary: 'Solana DeFi interface for staking, earn, borrow, and protocol yield discovery.',
    problem:
      'DeFi users need fast access to yield, staking, borrow, and portfolio actions without jumping between many protocol interfaces. The product needed to communicate automation, protocol coverage, and a clean path to app launch.',
    solution:
      'We helped shape a technical DeFi web experience around automated yield management, protocol integrations, launch/app CTAs, and a clear visual system for Solana-native finance users.',
    role: [
      'Design and build Web3 landing/product surfaces for a Solana DeFi platform',
      'Communicate staking, earn, borrow, portfolio, and yield aggregation flows',
      'Present protocol integrations such as Jupiter and Kamino in a clear product narrative',
      'Create frontend sections that support launch, community, and app conversion paths',
    ],
    stack: ['Solana', 'Next.js', 'React', 'TypeScript', 'DeFi', 'Jupiter', 'Kamino', 'Staking UX'],
    modules: [
      { name: 'DeFi landing system', detail: 'Hero, product narrative, app launch CTA, community CTA, and protocol integration messaging.' },
      { name: 'Yield surfaces', detail: 'Visual representation of vaults, APR, portfolio values, staking status, and automated opportunities.' },
      { name: 'Protocol messaging', detail: 'Jupiter, Kamino, and Solana ecosystem positioning shown as user-facing product value.' },
      { name: 'Conversion paths', detail: 'Launch app, join community, and product navigation built for active Web3 users.' },
    ],
    architecture: [
      { layer: 'Frontend', detail: 'Next.js/React interface optimized for fast landing pages and DeFi product storytelling.' },
      { layer: 'DeFi UX', detail: 'Borrow, earn, staking, and portfolio concepts organized into simple user-facing flows.' },
      { layer: 'Protocol layer', detail: 'Product messaging and integration surfaces around Solana protocols including Jupiter and Kamino.' },
      { layer: 'Growth', detail: 'CTA and community entry points designed to move users from marketing site to app usage.' },
    ],
    deliverables: ['DeFi product website', 'Solana-focused UI system', 'Landing page conversion flow', 'Protocol integration messaging', 'Staking/earn/borrow product surfaces'],
    outcomes: ['Clear product story for Solana DeFi users', 'Fast route from landing page to app launch', 'Better explanation of yield automation and protocol coverage'],
    metrics: [
      { label: 'Chain', value: 'Solana' },
      { label: 'Scope', value: 'DeFi' },
      { label: 'Stack', value: 'Next.js' },
    ],
    cardFacts: [
      { label: 'Type', value: 'DeFi app' },
      { label: 'Chain', value: 'Solana' },
    ],
    links: [{ label: 'Visit project', href: 'https://1tap.finance/' }],
  },
  {
    slug: 'neurovault',
    title: 'NeuroVault AI ERC-4626 Vault',
    shortTitle: 'NeuroVault',
    category: 'AI Vault',
    client: 'NeuroVault, an AI-powered onchain vault product',
    industry: 'DeFi vaults, ERC-4626, AI yield optimization, user yield distribution',
    engagement: 'AI DeFi vault product and technical web experience',
    timeline: 'Vault concept -> product UI -> ERC-4626 messaging -> AI yield strategy surfaces',
    image: '/images/projects/neurovault.png',
    summary: 'An ERC-4626 vault product using AI to optimize yield strategies and distribute generated yield back to users.',
    cardSummary: 'AI-powered ERC-4626 vault experience for yield optimization and user distribution.',
    problem:
      'Vault products can be difficult for users to understand because yield sources, redemption paths, NAV, share accounting, and strategy health are often hidden behind protocol terminology.',
    solution:
      'We shaped the product experience around AI-managed vault intelligence, clear ERC-4626 vault concepts, transparent asset/NAV surfaces, redemption paths, yield engine health, and user-facing distribution logic.',
    role: [
      'Design the product narrative for an AI-powered ERC-4626 vault',
      'Create technical UI surfaces for vault assets, NAV, redemption paths, and yield engine status',
      'Explain AI yield optimization in a user-readable DeFi product experience',
      'Structure the site around protocol credibility, user trust, and vault mechanics',
    ],
    stack: ['ERC-4626', 'DeFi', 'AI Strategy', 'Vault UX', 'React', 'Next.js', 'Yield Optimization'],
    modules: [
      { name: 'Vault overview', detail: 'Total vault assets, NAV, user shares, and asset allocation presented in a readable dashboard-style surface.' },
      { name: 'AI yield engine', detail: 'Product surfaces explaining how AI evaluates strategies to target improved yield performance.' },
      { name: 'Redemption paths', detail: 'Instant and async redemption concepts shown clearly for user confidence and operational transparency.' },
      { name: 'User distribution', detail: 'Yield distribution messaging designed to help users understand where optimized yield goes.' },
    ],
    architecture: [
      { layer: 'Vault standard', detail: 'ERC-4626 concepts translated into product UX: assets, shares, NAV, deposits, and redemptions.' },
      { layer: 'AI strategy layer', detail: 'AI-driven strategy selection and yield engine health represented as understandable product states.' },
      { layer: 'User accounting', detail: 'Claimable shares, vault NAV, and redemption paths communicated through dashboard components.' },
      { layer: 'Trust surface', detail: 'Technical messaging, transparent mechanics, and visual system built for DeFi users evaluating vault risk.' },
    ],
    deliverables: ['AI vault product website', 'ERC-4626 product narrative', 'Vault dashboard visuals', 'Yield engine UI sections', 'Redemption path explanation', 'User distribution messaging'],
    outcomes: ['Clear explanation of AI-powered vault mechanics', 'More understandable ERC-4626 user experience', 'Stronger trust surface for DeFi vault users'],
    metrics: [
      { label: 'Standard', value: 'ERC-4626' },
      { label: 'Engine', value: 'AI' },
      { label: 'Scope', value: 'Vault' },
    ],
    cardFacts: [
      { label: 'Type', value: 'AI vault' },
      { label: 'Standard', value: 'ERC-4626' },
    ],
    links: [{ label: 'Visit project', href: 'https://www.neurovault.cc/' }],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
