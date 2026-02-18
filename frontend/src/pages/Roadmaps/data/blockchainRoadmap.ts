import type { Topic, RoadmapSection } from './frontendRoadmap';

export const BLOCKCHAIN_TOPICS: Record<string, Topic> = {
    // ── Fundamentals ──
    'what-is-blockchain': {
        id: 'what-is-blockchain',
        title: 'What is Blockchain?',
        description: 'Blockchain is a distributed, immutable ledger. Blocks linked by cryptographic hashes, consensus mechanisms, decentralization, and trustless systems.',
        resources: [
            { type: 'article', title: 'Blockchain Explained', url: 'https://www.investopedia.com/terms/b/blockchain.asp' },
            { type: 'video', title: 'Blockchain in 100 Seconds', url: 'https://www.youtube.com/watch?v=kHybf1aC-jE' },
        ],
    },
    'decentralization': {
        id: 'decentralization',
        title: 'Decentralization',
        description: 'Why decentralization matters — censorship resistance, single point of failure elimination, trustless interactions, and the tradeoffs (speed, cost, complexity).',
        resources: [
            { type: 'article', title: 'Why Decentralization Matters', url: 'https://onlineethics.org/cases/why-decentralization-matters' },
        ],
    },
    cryptography: {
        id: 'cryptography',
        title: 'Cryptography Basics',
        description: 'Hash functions (SHA-256, Keccak), public/private key cryptography, digital signatures, Merkle trees, and zero-knowledge proofs.',
        resources: [
            { type: 'video', title: 'Cryptography Explained', url: 'https://www.youtube.com/watch?v=jhXCTbFnK8o' },
        ],
    },
    consensus: {
        id: 'consensus',
        title: 'Consensus Mechanisms',
        description: 'Proof of Work (Bitcoin), Proof of Stake (Ethereum), Delegated PoS, Proof of History (Solana), BFT variants, and the blockchain trilemma.',
        resources: [
            { type: 'article', title: 'Consensus Mechanisms', url: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/' },
        ],
    },

    // ── Blockchain Platforms ──
    ethereum: {
        id: 'ethereum',
        title: 'Ethereum',
        description: 'Ethereum is the leading smart contract platform. EVM, gas system, accounts (EOA vs contract), state management, and the merge to Proof of Stake.',
        resources: [
            { type: 'official', title: 'Ethereum Documentation', url: 'https://ethereum.org/en/developers/docs/' },
            { type: 'course', title: 'Ethereum.org Learn', url: 'https://ethereum.org/en/learn/' },
        ],
    },
    bitcoin: {
        id: 'bitcoin',
        title: 'Bitcoin',
        description: 'Bitcoin is the first and largest cryptocurrency. UTXO model, proof of work, halvings, Lightning Network, and Bitcoin Script.',
        resources: [
            { type: 'article', title: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' },
            { type: 'official', title: 'Bitcoin.org Developer', url: 'https://developer.bitcoin.org/' },
        ],
    },
    solana: {
        id: 'solana',
        title: 'Solana',
        description: 'Solana is a high-performance blockchain. Proof of History, parallel processing (Sealevel), Rust programs, and the Anchor framework.',
        resources: [
            { type: 'official', title: 'Solana Documentation', url: 'https://solana.com/docs' },
        ],
    },
    'layer2': {
        id: 'layer2',
        title: 'Layer 2 Solutions',
        description: 'Scaling solutions built on top of L1 blockchains. Optimistic rollups (Arbitrum, Optimism), ZK rollups (zkSync, StarkNet), and sidechains (Polygon).',
        resources: [
            { type: 'article', title: 'Layer 2 Scaling', url: 'https://ethereum.org/en/developers/docs/scaling/' },
        ],
    },

    // ── Smart Contracts ──
    solidity: {
        id: 'solidity',
        title: 'Solidity',
        description: 'Solidity is the primary language for Ethereum smart contracts. State variables, functions, modifiers, events, inheritance, and the EVM compilation model.',
        resources: [
            { type: 'official', title: 'Solidity Documentation', url: 'https://docs.soliditylang.org/' },
            { type: 'course', title: 'CryptoZombies', url: 'https://cryptozombies.io/' },
            { type: 'video', title: 'Solidity Full Course', url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ' },
        ],
    },
    rust: {
        id: 'rust',
        title: 'Rust (for Solana)',
        description: 'Rust is used for Solana smart contracts (programs). Ownership model, memory safety without GC, and the Anchor framework simplifies Solana development.',
        resources: [
            { type: 'official', title: 'Rust Book', url: 'https://doc.rust-lang.org/book/' },
        ],
    },
    'smart-contract-security': {
        id: 'smart-contract-security',
        title: 'Smart Contract Security',
        description: 'Reentrancy attacks, integer overflow, front-running, flash loan attacks, access control vulnerabilities, and security best practices. Auditing is essential.',
        resources: [
            { type: 'article', title: 'Smart Contract Security (OpenZeppelin)', url: 'https://docs.openzeppelin.com/contracts/5.x/' },
            { type: 'course', title: 'Damn Vulnerable DeFi', url: 'https://www.damnvulnerabledefi.xyz/' },
        ],
    },

    // ── Development Tools ──
    hardhat: {
        id: 'hardhat',
        title: 'Hardhat',
        description: 'Hardhat is the most popular Ethereum development environment. Compile, deploy, test, and debug smart contracts with TypeScript/JavaScript.',
        resources: [
            { type: 'official', title: 'Hardhat Documentation', url: 'https://hardhat.org/docs' },
        ],
    },
    foundry: {
        id: 'foundry',
        title: 'Foundry',
        description: 'Foundry is a blazing-fast smart contract toolchain written in Rust. Forge for testing, Cast for interactions, Anvil for local chains. Tests in Solidity.',
        resources: [
            { type: 'official', title: 'Foundry Book', url: 'https://book.getfoundry.sh/' },
        ],
    },
    'ethers-viem': {
        id: 'ethers-viem',
        title: 'ethers.js / viem',
        description: 'JavaScript libraries for blockchain interaction. ethers.js is the classic, viem is the modern TypeScript-first alternative. Contract calls, signing, and providers.',
        resources: [
            { type: 'official', title: 'ethers.js Documentation', url: 'https://docs.ethers.org/' },
            { type: 'official', title: 'viem Documentation', url: 'https://viem.sh/' },
        ],
    },

    // ── Standards ──
    'erc-tokens': {
        id: 'erc-tokens',
        title: 'Token Standards (ERC-20, ERC-721)',
        description: 'ERC-20 for fungible tokens, ERC-721 for NFTs, ERC-1155 for multi-tokens, and ERC-4626 for vaults. OpenZeppelin implementations.',
        resources: [
            { type: 'official', title: 'ERC-20 Standard', url: 'https://eips.ethereum.org/EIPS/eip-20' },
            { type: 'official', title: 'OpenZeppelin Contracts', url: 'https://docs.openzeppelin.com/contracts/' },
        ],
    },

    // ── DeFi ──
    defi: {
        id: 'defi',
        title: 'DeFi (Decentralized Finance)',
        description: 'AMMs (Uniswap), lending protocols (Aave, Compound), flash loans, yield farming, liquidity pools, stablecoins, and DEX aggregators.',
        resources: [
            { type: 'article', title: 'DeFi Developer Guide', url: 'https://ethereum.org/en/defi/' },
        ],
    },
    oracles: {
        id: 'oracles',
        title: 'Oracles (Chainlink)',
        description: 'Oracles bridge on-chain and off-chain data. Chainlink price feeds, VRF for randomness, and Automation for scheduled contract execution.',
        resources: [
            { type: 'official', title: 'Chainlink Documentation', url: 'https://docs.chain.link/' },
        ],
    },

    // ── Frontend ──
    dapps: {
        id: 'dapps',
        title: 'Building dApps',
        description: 'Decentralized application architecture. Connecting wallets (MetaMask, WalletConnect), reading chain state, sending transactions, and event listening.',
        resources: [
            { type: 'article', title: 'Building a Full Stack dApp', url: 'https://ethereum.org/en/developers/tutorials/hello-world-smart-contract-fullstack/' },
        ],
    },
    wagmi: {
        id: 'wagmi',
        title: 'wagmi / RainbowKit',
        description: 'wagmi provides React hooks for Ethereum. RainbowKit adds a polished wallet connection UI. The modern stack for Web3 frontend development.',
        resources: [
            { type: 'official', title: 'wagmi Documentation', url: 'https://wagmi.sh/' },
            { type: 'official', title: 'RainbowKit', url: 'https://www.rainbowkit.com/' },
        ],
    },

    // ── Storage ──
    ipfs: {
        id: 'ipfs',
        title: 'IPFS',
        description: 'InterPlanetary File System for decentralized file storage. Content-addressed storage, pinning services (Pinata, Infura), and NFT metadata storage.',
        resources: [
            { type: 'official', title: 'IPFS Documentation', url: 'https://docs.ipfs.tech/' },
        ],
    },
};

export const BLOCKCHAIN_SECTIONS: RoadmapSection[] = [
    {
        id: 'fundamentals',
        title: 'Blockchain Fundamentals',
        leftTopics: [
            { id: 'what-is-blockchain', title: 'What is Blockchain?' },
            { id: 'decentralization', title: 'Decentralization' },
        ],
        rightTopics: [
            { id: 'cryptography', title: 'Cryptography' },
            { id: 'consensus', title: 'Consensus Mechanisms' },
        ],
    },
    {
        id: 'platforms',
        title: 'Blockchain Platforms',
        leftTopics: [
            { id: 'ethereum', title: 'Ethereum' },
            { id: 'bitcoin', title: 'Bitcoin' },
        ],
        rightTopics: [
            { id: 'solana', title: 'Solana' },
            { id: 'layer2', title: 'Layer 2 Solutions' },
        ],
    },
    {
        id: 'languages',
        title: 'Smart Contract Languages',
        leftTopics: [{ id: 'solidity', title: 'Solidity' }],
        rightTopics: [
            { id: 'rust', title: 'Rust (Solana)' },
            { id: 'smart-contract-security', title: 'Security' },
        ],
    },
    {
        id: 'tools',
        title: 'Development Tools',
        leftTopics: [
            { id: 'hardhat', title: 'Hardhat' },
            { id: 'foundry', title: 'Foundry' },
        ],
        rightTopics: [{ id: 'ethers-viem', title: 'ethers.js / viem' }],
    },
    {
        id: 'standards',
        title: 'Token Standards',
        rightTopics: [{ id: 'erc-tokens', title: 'ERC-20, ERC-721, ERC-1155' }],
    },
    {
        id: 'defi-section',
        title: 'DeFi',
        description: 'Decentralized Finance',
        leftTopics: [{ id: 'defi', title: 'DeFi Protocols' }],
        rightTopics: [{ id: 'oracles', title: 'Oracles (Chainlink)' }],
    },
    {
        id: 'frontend',
        title: 'dApp Frontend',
        leftTopics: [{ id: 'dapps', title: 'Building dApps' }],
        rightTopics: [{ id: 'wagmi', title: 'wagmi / RainbowKit' }],
    },
    {
        id: 'storage',
        title: 'Decentralized Storage',
        rightTopics: [{ id: 'ipfs', title: 'IPFS' }],
    },
];
