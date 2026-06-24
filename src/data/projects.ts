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
    slug: 'dex-trading-terminal',
    title: 'High-Performance DEX Aggregator & Trading Terminal',
    shortTitle: 'DEX Aggregator',
    category: 'DEX Aggregator',
    client: 'Proprietary Web3 Trading Terminal Provider',
    industry: 'DeFi, DEX Aggregation, Anti-MEV, Sniping, Trading Tools',
    engagement: 'Low-latency trading terminal design and backend build',
    timeline: 'Architecture design -> mempool sniper build -> smart router -> launch support',
    image: '/images/projects/dex-terminal.png',
    summary: 'A high-performance decentralized trading terminal and multi-chain DEX aggregator supporting real-time token sniping, automated pre-trade honeypot simulation, and account abstraction.',
    cardSummary: 'High-performance DEX aggregator & trading terminal with Anti-MEV, EIP-7702, and Rust signal parsers.',
    problem:
      'Decentralized traders face latency slippage, high gas costs, and constant threats from malicious smart contracts (honeypots, liquidity locks). Standard Web3 routers don\'t handle bot execution monetization or account abstraction well at the infrastructure level.',
    solution:
      'Engineered a custom Smart Contract Router supporting multi-DEX protocol aggregation with integrated fee-on-transfer monetization. Built a real-time token sniping service with mempool monitoring via gRPC/WebSockets, automated pre-trade token audits in NestJS, and EIP-7702/ERC-8004 standards for onchain AI Agent verification.',
    role: [
      'Design and build multi-protocol EVM smart contract routers for DEX aggregation with integrated fee monetization',
      'Wrote high-performance token sniper service with mempool monitoring via gRPC/WebSockets for Block-0 execution',
      'Develop automated pre-trade token audit simulator in NestJS to detect malicious contract patterns',
      'Implement EIP-7702 account abstraction and ERC-8004 AI verification standards',
      'Create low-latency signal parser using Rust for Solana integration'
    ],
    stack: ['Solidity', 'Rust', 'NestJS', 'Redis', 'MongoDB', 'gRPC', 'WebSockets', 'EIP-7702', 'ERC-8004'],
    modules: [
      { name: 'Mempool Monitor & Sniper', detail: 'Real-time mempool scanning using gRPC/WebSockets to execute trades at Block-0 with gas-optimized strategies.' },
      { name: 'DEX Aggregator Router', detail: 'Smart Contract Router that aggregates routes across multiple DEXes with integrated fee-on-transfer fee monetization.' },
      { name: 'Automated Audit Engine', detail: 'NestJS simulator executing dry-runs of token contracts before purchase to detect rugpull risks, tax traps, and honeypots.' },
      { name: 'AI & Abstraction Layers', detail: 'EIP-7702 Account Abstraction workflow and ERC-8004 for cryptographically verifying AI-driven trading signals.' }
    ],
    architecture: [
      { layer: 'DEX Router (Solidity)', detail: 'Gas-optimized aggregation contracts handling token swaps, slippage controls, and fees.' },
      { layer: 'Parser & Snipping (Rust)', detail: 'Ultra-low latency microservice monitoring blockchain feeds via gRPC for block-0 transaction landing.' },
      { layer: 'Simulation (NestJS/VM)', detail: 'Isolated execution sandbox simulating token swaps and transfer scenarios to detect contract vulnerabilities.' },
      { layer: 'Data & Cache (Redis/Mongo)', detail: 'High-speed caching of verified contracts, active routes, and blacklist registries.' }
    ],
    deliverables: [
      'Smart Contract Router (EVM)',
      'gRPC Mempool Snipping Microservice',
      'Pre-Trade Honeypot Detection Service',
      'EIP-7702 Account Abstraction Integration',
      'Rust Solana Signal Parser'
    ],
    outcomes: [
      'Successful Block-0 trading capabilities for active user base',
      'Zero-loss honeypot prevention for automated trades',
      'Integrated monetization model via customizable router fee-on-transfer features'
    ],
    metrics: [
      { label: 'Execution', value: 'Block-0' },
      { label: 'Latency', value: 'Sub-ms' },
      { label: 'Chains', value: 'Multi-Chain' }
    ],
    cardFacts: [
      { label: 'Type', value: 'DEX Aggregator' },
      { label: 'Chains', value: 'EVM & Solana' }
    ],
    links: []
  },
  {
    slug: 'telegram-gamefi-app',
    title: 'Massive-Scale GameFi Telegram Mini App',
    shortTitle: 'Telegram GameFi',
    category: 'GameFi & Mini App',
    client: 'Top Play-to-Earn Telegram Game Studio',
    industry: 'GameFi, Telegram Mini Apps, NFT, TON Blockchain',
    engagement: 'High-scale GameFi product engineering and DevOps infrastructure',
    timeline: 'Smart contract build -> mini-app APIs -> devops clustering -> scaling & launch',
    image: '/images/projects/gamefi-app.png',
    summary: 'A highly popular Play-to-Earn Telegram Mini App game serving over 9M+ total users, featuring custom Jettons, dynamic merge trees, and multi-region GKE scaling.',
    cardSummary: 'Telegram GameFi mini-app with 9M+ users, top #1 Open League Hackathon winner, and TON/funC contracts.',
    problem:
      'Handling massive scale (9M+ users, 100k+ concurrent users) for Web3 features (airdrops, NFTs, Jettons) without high transaction fees, wallet onboarding friction, or massive cloud infrastructure costs.',
    solution:
      'Built scalable backend APIs using NestJS and MongoDB, integrated TON network via Tonapi/Toncenter, Wrote funC contracts for dynamic NFTs/Jettons, and designed a multi-cluster GKE setup that reduced cloud infrastructure costs by 82.5%.',
    role: [
      'Design and deploy TON smart contracts (funC) for Jettons and dynamic NFT merges',
      'Build scalable backend APIs and indexer integrations using NestJS and MongoDB',
      'Implement gas-efficient Merkle tree airdrop contracts',
      'Design and deploy multi-region Google Kubernetes Engine (GKE) ingress configurations',
      'Create GitLab CI/CD and ArgoCD GitOps pipelines for automated environment rollouts',
      'Optimize server configurations to handle high concurrent user traffic (100k+ CCU)'
    ],
    stack: ['NestJS', 'MongoDB', 'Redis', 'FunC', 'Solidity', 'GKE', 'Terraform', 'ArgoCD', 'GitLab CI'],
    modules: [
      { name: 'Gameplay Contracts', detail: 'funC-based contracts managing Jetton tokens, NFT reverse auctions, and merge trees on TON.' },
      { name: 'Game Backend APIs', detail: 'Scalable NestJS and MongoDB services handling profile progress, quests, and game state validation.' },
      { name: 'Merkle Airdrop Engine', detail: 'Gas-efficient Merkle tree contract enabling millions of active players to claim rewards securely.' },
      { name: 'DevOps & Infrastructure', detail: 'Multi-region GKE deployment with ArgoCD and Terraform managing automated scaling.' }
    ],
    architecture: [
      { layer: 'TON Contracts', detail: 'funC contracts handling gameplay asset ownership, dynamic merge logic, and tokens.' },
      { layer: 'API Service', detail: 'NestJS cluster executing game logic and caching live player data with Redis.' },
      { layer: 'Blockchain Adapter', detail: 'Custom RPC bridge using toncenter and dton.io for indexing onchain token states.' },
      { layer: 'Global Infra', detail: 'Terraform-provisioned GKE clusters with automated autoscaling and load balancers.' }
    ],
    deliverables: [
      'funC Smart Contracts (TON)',
      'High-Scale NestJS Game APIs',
      'Merkle Airdrop Claim System',
      'GKE Terraform Configurations',
      'ArgoCD GitOps Pipeline'
    ],
    outcomes: [
      'Won Top #1 in The Open League Hackathon',
      'Featured in a major Web3 Accelerator program and listed on top-tier CEXes',
      '82.5% reduction in cloud infrastructure costs ($40k/mo down to $7k/mo)',
      'Processed 3M+ transactions and $1M+ in revenue with 200k+ UAW'
    ],
    metrics: [
      { label: 'Total Users', value: '9M+' },
      { label: 'Peak CCU', value: '100k+' },
      { label: 'Cost Save', value: '82%' }
    ],
    cardFacts: [
      { label: 'Users', value: '9M+ Total' },
      { label: 'Rank', value: 'Top #1 OpenLeague' }
    ],
    links: []
  },
  {
    slug: 'web3-gaming-hub',
    title: 'Web3 Gaming Hub & Onboarding Portal',
    shortTitle: 'Gaming Hub',
    category: 'GameFi Platform',
    client: 'Web3 Gaming Platform Provider',
    industry: 'GameFi, Game SDK, Cross-Questing, System Observability',
    engagement: 'Web3 game portal development and observability integration',
    timeline: 'Quest engine -> NFT Bridge -> Observability setup -> GraphQL Subgraphs',
    image: '/images/projects/gaming-hub.png',
    summary: 'A comprehensive game portal enabling Web2 developers to convert games to Web3. Features cross-questing, NFT bridges, and full-stack observability with OpenTelemetry.',
    cardSummary: 'Comprehensive Web3 game portal with quest engines, cross-chain bridges, and deep OpenTelemetry monitoring.',
    problem:
      'Game publishers struggle to onboard Web2 players into Web3 games, track engagement across multiple game titles, and monitor highly distributed gaming services under high load.',
    solution:
      'Developed a Web3 onboarding portal and cross-quest system. Wrote Solidity and funC contracts for NFT marketplaces, bridges, and airdrops, and implemented full-stack observability using OpenTelemetry, Prometheus, Grafana, and Jaeger.',
    role: [
      'Build portal backend APIs and custom indexing using NestJS and MongoDB',
      'Write smart contracts for NFT marketplaces, cross-chain bridges, and airdrops',
      'Implement full-stack system observability using OpenTelemetry, Prometheus, Grafana, and Jaeger',
      'Structure subgraphs and indexers for real-time player quest tracking'
    ],
    stack: ['NestJS', 'MongoDB', 'FunC', 'Solidity', 'GraphQL', 'Subgraph', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Jaeger'],
    modules: [
      { name: 'Cross-Quest Engine', detail: 'Logic engine allowing developers to create quests that span multiple games to drive user traffic.' },
      { name: 'NFT Bridge & Market', detail: 'Smart contracts supporting multi-chain NFT transfers, secondary market trades, and rewards.' },
      { name: 'Observability System', detail: 'OpenTelemetry instrumentation exposing database, API, and network stats for real-time dashboard tracking.' },
      { name: 'GraphQL Subgraphs', detail: 'Fast decentralized indexers queryable via GraphQL to display in-game item transactions.' }
    ],
    architecture: [
      { layer: 'Onchain Core', detail: 'Solidity and funC contracts governing NFT bridges, airdrops, and token trade rules.' },
      { layer: 'Portal API', detail: 'GraphQL and NestJS server querying subgraphs and validating off-chain actions.' },
      { layer: 'Indexing Layer', detail: 'The Graph protocol subgraphs listening to EVM and TON events for real-time asset tracking.' },
      { layer: 'Observability', detail: 'Prometheus & Jaeger collectors compiling traces and metrics into centralized Grafana dashboards.' }
    ],
    deliverables: [
      'Solidity & funC Bridge Contracts',
      'Quest Management Portal APIs',
      'OpenTelemetry Instrumentation Package',
      'Centralized Grafana Dashboards',
      'GraphQL Subgraph Indexer'
    ],
    outcomes: [
      'Onboarded multiple Web2 games into the Web3 ecosystem',
      'Sub-second query response times for blockchain assets using subgraphs',
      'Reduced incident response times by 65% via distributed tracing'
    ],
    metrics: [
      { label: 'Questing', value: 'Multi-Game' },
      { label: 'Tracing', value: 'Distributed' },
      { label: 'API Interface', value: 'GraphQL' }
    ],
    cardFacts: [
      { label: 'Type', value: 'Portal & Hub' },
      { label: 'Observability', value: 'OTel Stack' }
    ],
    links: []
  },
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
    slug: 'kulturhotel-kaiserhof',
    title: 'Kulturhotel Kaiserhof Website',
    shortTitle: 'Kaiserhof Hotel',
    category: 'Websites & Portals',
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
      { label: 'Type', value: 'Hotel Website' },
      { label: 'Stack', value: 'Next.js' },
    ],
    links: [{ label: 'Visit project', href: 'https://www.kulturhotel-kaiserhof.de' }],
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
    summary: 'A Solana-native DeFi platform for swaps, staking, auto-staking, and borrowing, featuring an autonomous background yield optimizer and Telegram-based trading and social tools.',
    cardSummary: 'Solana DeFi platform with Jupiter swaps, Kamino yield, auto-staking, and Telegram Social Signals.',
    problem:
      'DeFi users need fast access to yield, staking, borrow, and portfolio actions without jumping between many protocol interfaces. The product needed to communicate automation, protocol coverage, and a clean path to app launch.',
    solution:
      'Engineered a unified Solana DeFi DApp integrating Jupiter swaps, Kamino vaults, and an autonomous auto-staking yield optimizer. Built a companion Telegram Bot providing Social Signals, Pump Radars for early Solana tokens, scanner token analytics, and a private Social Sniper dashboard.',
    role: [
      'Design and build Web3 landing/product surfaces for a Solana DeFi platform',
      'Communicate staking, earn, borrow, portfolio, and yield aggregation flows',
      'Present protocol integrations such as Jupiter and Kamino in a clear product narrative',
      'Create frontend sections that support launch, community, and app conversion paths',
      'Designed mockups and user flows for the accompanying Telegram scanner and sniper bots'
    ],
    stack: ['Solana', 'Next.js', 'React', 'TypeScript', 'DeFi', 'Jupiter', 'Kamino', 'Staking UX'],
    modules: [
      { name: 'Unified Swap & Borrow', detail: 'Instant token swaps and collateralized borrowing powered by deep Jupiter and Kamino protocol integrations.' },
      { name: 'Auto-Staking Vaults', detail: 'Autonomous background yield optimizer that automatically migrates assets to maximize yield and APR.' },
      { name: 'Telegram Bot Interface', detail: 'Full-featured chat assistant enabling wallet operations, portfolio tracking, and yield actions from Telegram.' },
      { name: 'Social Signals & Sniper', detail: 'Pump.fun-style market monitoring (Pump Radar), KOL token call signals, scanner analytics, and automated sniper rules.' }
    ],
    architecture: [
      { layer: 'DApp Frontend', detail: 'Next.js application featuring real-time yield surfaces, APR dashboards, and wallet adapters.' },
      { layer: 'Protocol Router', detail: 'Integration layer communicating with Jupiter DEX aggregator and Kamino Lending SDKs.' },
      { layer: 'Telegram Client', detail: 'Node.js bot processing chat commands, portfolio queries, and triggering swaps.' },
      { layer: 'Signal Processor', detail: 'Scanning engine monitoring KOL channels and pump.fun contracts for real-time sniper alerts.' }
    ],
    deliverables: [
      'Web DApp for Swaps & Borrowing',
      'Auto-Staking Yield Optimization Engine',
      'Telegram DeFi & Wallet Bot',
      'Pump Radar & Scanner Bot',
      'Social Sniper Dashboard'
    ],
    outcomes: [
      'Streamlined Solana DeFi access into a single, unified interface',
      'Automated yield generation with hands-off auto-staking mechanics',
      'Enhanced early token discovery via Telegram social call triggers'
    ],
    metrics: [
      { label: 'Chain', value: 'Solana' },
      { label: 'Scope', value: 'DeFi' },
      { label: 'Stack', value: 'Next.js' }
    ],
    cardFacts: [
      { label: 'Type', value: 'DeFi App' },
      { label: 'Chain', value: 'Solana' }
    ],
    links: [{ label: 'Visit project', href: 'https://1tap.finance/' }]
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
    summary: 'An AI-powered ERC-4626 vault platform for yield optimization, featuring automated testnet stakers and multi-sig risk management on the Pharos Network.',
    cardSummary: 'AI ERC-4626 vault with autonomous stakers, Rays Allocation Engine, and Pharos Network integration.',
    problem:
      'Vault products can be difficult for users to understand because yield sources, redemption paths, NAV, share accounting, and strategy health are often hidden behind protocol terminology.',
    solution:
      'Built an AI-driven ERC-4626 yield aggregator featuring a MetaVault layer and the Rays Allocation Engine to suggest yield strategies based on user risk profiles. Integrated with Pharos Network Atlantic Testnet using Permit2, Multicall3, and ERC-4337 Account Abstraction.',
    role: [
      'Design the product narrative for an AI-powered ERC-4626 vault',
      'Create technical UI surfaces for vault assets, NAV, redemption paths, and yield engine status',
      'Explain AI yield optimization in a user-readable DeFi product experience',
      'Structure the site around protocol credibility, user trust, and vault mechanics',
      'Integrated the client application with Pharos Atlantic Testnet contracts (Permit2, Multicall3, EntryPoint)'
    ],
    stack: ['ERC-4626', 'DeFi', 'AI Strategy', 'Vault UX', 'React', 'Next.js', 'Pharos Network'],
    modules: [
      { name: 'MetaVault Core', detail: 'ERC-4626 standard compliance governing deposit accounting, share pricing, NAV, and redemptions.' },
      { name: 'Rays Allocation Engine', detail: 'AI-powered intelligence engine analyzing DeFi profiles to recommend and execute dynamic yield adjustments.' },
      { name: 'Account Abstraction', detail: 'ERC-4337 EntryPoint contract integration providing gasless, seedless, and 1-click transaction flows.' },
      { name: 'Pharos Adapter', detail: 'Atlantic Testnet integration supporting USDC, USDT, WBTC, WETH, and WPHRS testnet tokens.' }
    ],
    architecture: [
      { layer: 'MetaVault Layer', detail: 'ERC-4626 standard smart contracts governing asset deposits, share value accounting, and redemption rules.' },
      { layer: 'Intelligence Engine', detail: 'Off-chain AI models assessing protocol safety, gas costs, and routing Ray token allocations.' },
      { layer: 'Account Abstraction', detail: 'ERC-4337 smart account infrastructure and Permit2 contract signatures for gasless token approvals.' },
      { layer: 'Network Interface', detail: 'EVM RPC connection to Pharos Atlantic Testnet (ChainID 688689) with rate-limiting fallback controls.' }
    ],
    deliverables: [
      'ERC-4626 MetaVault Contracts',
      'Rays Allocation Recommendation Engine',
      'ERC-4337 EntryPoint Integration',
      'Permit2 & Multicall3 Adapters',
      'Pharos Network Integration Interface'
    ],
    outcomes: [
      'Automated yield rebalancing across Pharos testnet protocols',
      'Onboarded Web2 users via gasless smart account abstraction flows',
      'Safe sandbox for learning yield optimization strategies'
    ],
    metrics: [
      { label: 'Standard', value: 'ERC-4626' },
      { label: 'Engine', value: 'AI' },
      { label: 'ChainID', value: '688689' }
    ],
    cardFacts: [
      { label: 'Type', value: 'AI Vault' },
      { label: 'Standard', value: 'ERC-4626' }
    ],
    links: [{ label: 'Visit project', href: 'https://www.neurovault.cc/' }]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
