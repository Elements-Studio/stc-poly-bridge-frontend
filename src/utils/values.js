import { WalletName, ChainId } from './enums';
import { TARGET_MAINNET } from './env';

export const HTTP_BASE_URL = TARGET_MAINNET
  ? 'https://bridge.poly.network/v1'
  : 'https://bridge.poly.network/testnet/v1';
//    'https://bridge.poly.network/merge/v1/bridge'
//  : 'https://bridge.poly.network/testnet/merge/v1/bridge';

export const HTTP_NFT_BASE_URL = TARGET_MAINNET
  ? 'https://bridge.poly.network/nft/v1'
  : 'https://bridge.poly.network/testnet/nft/v1';
//    'https://bridge.poly.network/merge/v1/nft'
//  : 'https://bridge.poly.network/testnet/merge/v1/nft';

export const WALLETS = [
  {
    name: WalletName.MetaMask,
    supportedChainIds: [
      ChainId.Eth,
      ChainId.Bsc,
      ChainId.Heco,
      ChainId.Ok,
      ChainId.Polygon,
      ChainId.Palette,
      ChainId.Arbitrum,
      ChainId.xDai,
      ChainId.Optimistic,
      ChainId.Fantom,
      ChainId.Avalanche,
    ],
    icon: require('@/assets/svg/meta-mask.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
  },
  {
    name: WalletName.Math,
    supportedChainIds: [ChainId.Eth, ChainId.Bsc, ChainId.Heco, ChainId.Ok],
    icon: require('@/assets/png/math.png'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc',
  },
  {
    name: WalletName.NeoLine,
    supportedChainIds: [ChainId.Neo],
    icon: require('@/assets/svg/neoline.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/neoline/cphhlgmgameodnhkjdmkpanlelnlohao',
  },
  {
    name: WalletName.NeoLineN3,
    supportedChainIds: [ChainId.N3],
    icon: require('@/assets/svg/neoline.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/neoline/cphhlgmgameodnhkjdmkpanlelnlohao',
  },
  {
    name: WalletName.O3,
    supportedChainIds: [ChainId.Neo],
    icon: require('@/assets/svg/o3.svg'),
    downloadUrl: 'https://o3.network/#download',
  },
  {
    name: WalletName.Binance,
    supportedChainIds: [ChainId.Bsc],
    icon: require('@/assets/svg/binance.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp',
  },
  {
    name: WalletName.Cyano,
    supportedChainIds: [ChainId.Ont],
    icon: require('@/assets/svg/ONT.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm',
  },
  {
    name: WalletName.StarMask,
    supportedChainIds: [ChainId.Stc],
    icon: require('@/assets/svg/stc.svg'),
    downloadUrl:
      'https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk',
  },
  // ...(TARGET_MAINNET
  //   ? [
  {
    name: WalletName.WalletConnect,
    supportedChainIds: [ChainId.Eth],
    icon: require('@/assets/svg/wallet-connect.svg'),
    downloadUrl: 'https://walletconnect.org/wallets',
  },
  //   ]
  // : []),
];

export const CHAINS = [
  {
    id: ChainId.Poly,
    explorerUrl: TARGET_MAINNET
      ? 'http://explorer.poly.network/tx/{txHash}'
      : 'http://explorer.poly.network/testnet/tx/{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'http://explorer.poly.network/nfttx/{txHash}'
      : 'http://explorer.poly.network/testnet/nfttx/{txHash}',
  },
  {
    id: ChainId.Eth,
    nativeFee: true,
    icon: require('@/assets/svg/eth.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://etherscan.io/tx/0x{txHash}'
      : 'https://ropsten.etherscan.io/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://etherscan.io/tx/0x{txHash}'
      : 'https://ropsten.etherscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xd380450e9e373bDC389951C54616edb2EE653524'
      : //   : '0xe498fb7D00468a67A79dE5D4Ca264d3350165280',
        '0xDc37471Af6a8aB7f45F444c5a3Ef4758281bE32C',
    nftLockContractHash: TARGET_MAINNET
      ? '0xe5204d62361A353C665668C858Ea213070CA159c'
      : '0x940300dc3Fc26e3A330a300be766184C0b5Fe019',
    pltNftLockContractHash: TARGET_MAINNET
      ? '0xD728e9844af285fA116806c273aa413686aE65e8'
      : '0xbaBaAF5CF7f63437755aAAFE7a4106463c5cD540',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
  },
  /*   {
    id: ChainId.Neo,
    nativeFee: false,
    icon: require('@/assets/svg/neo.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://neotube.io/transaction/0x{txHash}'
      : 'https://testnet.neotube.io/transaction/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '125c83403763670c215f9c7c815ef759b258a41b'
      : 'cd074cd290acc3d73c030784101afbcf40fd86a1',
  }, */
  {
    id: ChainId.N3,
    nativeFee: false,
    icon: require('@/assets/svg/neo.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://neo3.neotube.io/transaction/{txHash}'
      : 'https://neo3.testnet.neotube.io/transaction/{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f8328398c4c8e77b6c5843f5e404be0170d5012e'
      : 'd63810ca692b43e0ed35bfa40e653d05b2cb3585',
    nftFeeContractHash: 'd2a4cff31913016155e38e474a2c06d08be276cf',
    nftFeeName: 'GAS',
  },
  {
    id: ChainId.xDai,
    nativeFee: false,
    icon: require('@/assets/png/xdai.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://blockscout.com/xdai/mainnet/tx/0x{txHash}'
      : 'https://blockscout.com/poa/sokol/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x74A7f2A3aFa8B0CB577985663B5811901A860619'
      : '0xa7eDA65F94A2a334a0de42d479585b65D27b2249',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'xDai',
  },
  {
    id: ChainId.Bsc,
    nativeFee: true,
    icon: require('@/assets/svg/bsc.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://bscscan.com/tx/0x{txHash}'
      : 'https://testnet.bscscan.com/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://bscscan.com/tx/0x{txHash}'
      : 'https://testnet.bscscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x4b0CFdb5e1Ca898a225F9E14AfF9e4eF178a10d2'
      : //  : '0xCed7997C3e807Fcdc5ac18fFC0B8af93a15a9eE5',
        '0x9f9F15CC407F7b26f55D71D43f993580a9107007',
    nftLockContractHash: TARGET_MAINNET
      ? '0xe2bD9dD8FAF5C4C2087Ab82eC7E63F619CcAa152'
      : '0x61E289D43C1FEA7598786557A2F309979ad144D3',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'BNB',
  },
  {
    id: ChainId.Heco,
    nativeFee: true,
    icon: require('@/assets/svg/heco.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://hecoinfo.com/tx/0x{txHash}'
      : 'https://testnet.hecoinfo.com/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://hecoinfo.com/tx/0x{txHash}'
      : 'https://testnet.hecoinfo.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x1B0C55be400e2a7D924032B257Fbc75Bbfd256E7'
      : //  : '0x3c92F1E31aACA43Eb4fF8aE498C7E85618680F45',
        '0xCC8407Ee04AaC2AdC0E6A55E7E97176C701146cd',
    nftLockContractHash: TARGET_MAINNET
      ? '0xe2bD9dD8FAF5C4C2087Ab82eC7E63F619CcAa152'
      : '0xbaBaAF5CF7f63437755aAAFE7a4106463c5cD540',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'HT',
  },
  {
    id: ChainId.Polygon,
    nativeFee: true,
    icon: require('@/assets/svg/polygon.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://polygonscan.com/tx/0x{txHash}'
      : 'https://mumbai.polygonscan.com/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://polygonscan.com/tx/0x{txHash}'
      : 'https://mumbai.polygonscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xB88f13682F3C602aCD84B4b2eEB96A9DD75Afd89'
      : '0xD5d63Dce45E0275Ca76a8b2e9BD8C11679A57D0D',
    nftLockContractHash: TARGET_MAINNET
      ? '0xeA5B2a0cF4cA9bd5c72Ea1fbEE1FFe420e57f692'
      : '0xeA5B2a0cF4cA9bd5c72Ea1fbEE1FFe420e57f692',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'MATIC',
  },
  {
    id: ChainId.Optimistic,
    nativeFee: true,
    icon: require('@/assets/svg/op.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://optimistic.etherscan.io/tx/0x{txHash}'
      : 'https://kovan-optimistic.etherscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f06587dE89e289Ce480CDf21109A14547eb33A0d'
      : '032F9A78473F73A6E10B78CD165F547559125EF1',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
  },
  {
    id: ChainId.Fantom,
    nativeFee: true,
    icon: require('@/assets/png/ftm.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://ftmscan.com/tx/0x{txHash}'
      : 'https://testnet.ftmscan.com/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f06587dE89e289Ce480CDf21109A14547eb33A0d'
      : 'FAddf0cfb08F92779560db57BE6b2C7303aaD266',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'FTM',
  },
  {
    id: ChainId.Avalanche,
    nativeFee: true,
    icon: require('@/assets/png/avax.png'),
    explorerUrl: TARGET_MAINNET
      ? 'https://avascan.info/blockchain/c/tx/0x{txHash}'
      : 'https://testnet.avascan.info/blockchain/c/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f06587dE89e289Ce480CDf21109A14547eb33A0d'
      : 'ac0a6759696569B3729177ba6844D41FF6D57844',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'AVAX',
  },
  {
    id: ChainId.Arbitrum,
    nativeFee: true,
    icon: require('@/assets/svg/Arbitrum.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://arbiscan.io/tx/0x{txHash}'
      : 'https://testnet.arbiscan.io/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x0f8C16BA16E58525Eb2aDc231ff360cfa00bB527'
      : '0x27eb74B4Db37517F1dC6dE67364e19782624402F',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'ETH',
  },
  {
    id: ChainId.Palette,
    nativeFee: false,
    icon: require('@/assets/svg/plt.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    nftexplorerUrl: TARGET_MAINNET
      ? 'https://palettescan.com/#/chain/tx/0x{txHash}'
      : 'http://106.75.251.68/#/chain/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0x0A9C412633465fdeE4861CeE02987386100bEAe6'
      : '0x3b855e095b32fcd2811663cba56bbfa6b1781821',
    nftLockContractHash: TARGET_MAINNET
      ? '0x41985E2A8826233618392e38d46d2060fbCC3F2A'
      : '0x0806e6925e6960E06cD4781e22A636bA233B53De',
    nftFeeContractHash: '0000000000000000000000000000000000000103',
    nftFeeName: 'PLT',
  },
  {
    id: ChainId.Ok,
    nativeFee: true,
    icon: require('@/assets/svg/ok.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://www.oklink.com/okexchain/tx/0x{txHash}'
      : 'https://www.oklink.com/okexchain-test/tx/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? '0xbd4a08577476A521C41a21EF3f00b045b74175d5'
      : //  : '0x5598226aD2E8991deEFD03203739C87BdF6e6D03',
        '0xbAa40bBd7888f79614057d82bdcE88dF2D23bf55',
    nftFeeContractHash: '0000000000000000000000000000000000000000',
    nftFeeName: 'OKT',
  },
  {
    id: ChainId.Ont,
    nativeFee: false,
    icon: require('@/assets/svg/ONT.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://explorer.ont.io/transaction/{txHash}'
      : 'https://explorer.ont.io/transaction/{txHash}/testnet',
    lockContractHash: TARGET_MAINNET
      ? 'c93837e82178d406af8c84e1841c6960af251cb5'
      : 'a5c101afa9e04e9dd2c912983795005a49e02efa',
  },
  {
    id: ChainId.Stc,
    nativeFee: false,
    icon: require('@/assets/svg/stc.svg'),
    explorerUrl: TARGET_MAINNET
      ? 'https://stcscan.io/main/transactions/detail/0x{txHash}'
      : 'https://stcscan.io/barnard/transactions/detail/0x{txHash}',
    lockContractHash: TARGET_MAINNET
      ? 'f8328398c4c8e77b6c5843f5e404be0170d5012e'
      : 'd63810ca692b43e0ed35bfa40e653d05b2cb3585',
    nftFeeContractHash: 'd2a4cff31913016155e38e474a2c06d08be276cf',
    nftFeeName: 'STC',
  },
];

export const UNKNOWN_ICON = require('@/assets/svg/unknown.svg');
export const UNKNOWN_NFT = require('@/assets/png/nft.png');

export const TOKEN_BASIC_ICONS = {
  NEO: require('@/assets/svg/neo-token.svg'),
  nNEO: require('@/assets/svg/neo-token.svg'),
  ETH: require('@/assets/svg/eth-token.svg'),
  USDT: require('@/assets/svg/usdt.svg'),
  USDC: require('@/assets/svg/usdc.svg'),
  DAI: require('@/assets/svg/dai.svg'),
  sUSD: require('@/assets/svg/susd.svg'),
  BAC: require('@/assets/svg/bac.svg'),
  BASv2: require('@/assets/svg/basv2.svg'),
  CWS: require('@/assets/png/cws.png'),
  SHARE: require('@/assets/svg/share.svg'),
  FLM: require('@/assets/svg/flm.svg'),
  SWTH: require('@/assets/svg/swth.svg'),
  ONTd: require('@/assets/svg/ONT.svg'),
  WING: require('@/assets/svg/wing.svg'),
  YFI: require('@/assets/svg/YFI.svg'),
  UNI: require('@/assets/svg/UNI.svg'),
  UNFI: require('@/assets/svg/UNFI.svg'),
  MDX: require('@/assets/svg/mdx.svg'),
  WBTC: require('@/assets/svg/WBTC.svg'),
  renBTC: require('@/assets/svg/renBTC.svg'),
  COOK: require('@/assets/svg/cook.svg'),
  FEI: require('@/assets/png/fei.png'),
  Tribe: require('@/assets/png/tribe.png'),
  YNI: require('@/assets/png/yni.png'),
  REVO: require('@/assets/svg/revo.svg'),
  revo: require('@/assets/svg/revo.svg'),
  Revo: require('@/assets/svg/revo.svg'),
  ESS: require('@/assets/svg/ESS.svg'),
  Bles: require('@/assets/svg/bles.svg'),
  BLES: require('@/assets/svg/bles.svg'),
  aDAI: require('@/assets/svg/adai.svg'),
  aETH: require('@/assets/svg/aeth.svg'),
  cDAI: require('@/assets/svg/cdai.svg'),
  cETH: require('@/assets/svg/ceth.svg'),
  FLUX: require('@/assets/svg/flux.svg'),
  CVT: require('@/assets/svg/cvt.svg'),
  KEL: require('@/assets/png/kel.png'),
  SHIB: require('@/assets/png/shib.png'),
  Shib: require('@/assets/png/shib.png'),
  STACK: require('@/assets/png/stack.png'),
  CC: require('@/assets/png/ccswap.png'),
  PLF: require('@/assets/png/plf.png'),
  TSX: require('@/assets/png/tsx.png'),
  O3: require('@/assets/png/o3.png'),
  KISHU: require('@/assets/png/kishu.png'),
  CELL: require('@/assets/png/cell.png'),
  ECELL: require('@/assets/svg/ecell.svg'),
  ISM: require('@/assets/jpg/ism.jpg'),
  BBANK: require('@/assets/jpg/bbank.jpg'),
  DOWS: require('@/assets/svg/shadows.svg'),
  PLUT: require('@/assets/svg/plut.svg'),
  mBTM: require('@/assets/svg/mbtm.svg'),
  LEV: require('@/assets/svg/lev.svg'),
  XTM: require('@/assets/svg/xtm.svg'),
  XTF: require('@/assets/svg/xtf.svg'),
  TAP: require('@/assets/svg/tap.svg'),
  STC: require('@/assets/svg/stc.svg'),
  '8PAY': require('@/assets/jpg/8pay.jpg'),
};

export const DEFAULT_TOKEN_BASIC_NAME = 'USDT';
export const DEFAULT_CHAIN_NAME = 'ETH';

export const TOP_TOKEN_BASIC_NAMES = ['STC', 'NEO', 'nNEO', 'ETH', 'USDT', 'USDC', 'DAI'];
