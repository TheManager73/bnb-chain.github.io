"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(u,r(r({ref:t},h),{},{components:n})):o.createElement(u,r({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"Token Migration"},r="Migrate Tokens From Polygon to BSC",s={unversionedId:"migration/evm-chains/token-migration",id:"migration/evm-chains/token-migration",title:"Migrate Tokens From Polygon to BSC",description:"In this article, we'll discuss how to migrate deployed tokens from Polygon to BSC and also the migration of vested tokens.",source:"@site/docs/migration/evm-chains/token-migration.md",sourceDirName:"migration/evm-chains",slug:"/migration/evm-chains/token-migration",permalink:"/docs/migration/evm-chains/token-migration",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/migration/evm-chains/token-migration.md",tags:[],version:"current",frontMatter:{sidebar_label:"Token Migration"},sidebar:"bscSideBar",previous:{title:"Token Standard Comparison",permalink:"/docs/migration/evm-chains/token-comparison"},next:{title:"Introduction",permalink:"/docs/learn/beaconIntro"}},l={},c=[{value:"Token migration",id:"token-migration",level:2},{value:"Creating ERC20 Token on BSC",id:"creating-erc20-token-on-bsc",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Setting Up Remix IDE",id:"setting-up-remix-ide",level:3},{value:"Creating a Workspace in Remix IDE",id:"creating-a-workspace-in-remix-ide",level:3},{value:"Writing the Smart Contract",id:"writing-the-smart-contract",level:3},{value:"Bridging Tokens from Polygon to BSC",id:"bridging-tokens-from-polygon-to-bsc",level:2},{value:"Celer&#39;s cBridge",id:"celers-cbridge",level:3},{value:"Using Celer cBridge to bridge tokens from Polygon to BSC",id:"using-celer-cbridge-to-bridge-tokens-from-polygon-to-bsc",level:3},{value:"Migrating Vested Token from Polygon to BSC",id:"migrating-vested-token-from-polygon-to-bsc",level:2},{value:"Migrating Vesting Contract",id:"migrating-vesting-contract",level:2},{value:"Migrating Vesting Tokens",id:"migrating-vesting-tokens",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrate-tokens-from-polygon-to-bsc"},"Migrate Tokens From Polygon to BSC"),(0,a.kt)("p",null,"In this article, we'll discuss how to migrate deployed tokens from Polygon to BSC and also the migration of vested tokens."),(0,a.kt)("h2",{id:"token-migration"},"Token migration"),(0,a.kt)("p",null,"Often, blockchain projects begin as whitepapers, promising innovative technologies to follow in the future. However, there can be multiple twists and turns in the process of transforming from a design paper to a real product. One such can be choosing to move to an entirely different blockchain, than that initially proposed.\nIn such scenarios, projects can require a token migration, also known as a token swap. "),(0,a.kt)("p",null,"Token migration is a process that involves transmitting a token holder's balance on one blockchain to another blockchainLet's discuss how to create an ERC20 token on BSC and how to bridge an ERC20 token from the EVM-based blockchain to BSC - we'll be using Polygon as an example."),(0,a.kt)("h2",{id:"creating-erc20-token-on-bsc"},"Creating ERC20 Token on BSC"),(0,a.kt)("p",null,"Since EVM chains are compatible with ERC20 tokens, in this section, we provide  guidelines on how to develop ERC20 tokens on BSC and how to bridge an ERC20 token from Polygon to BSC.\nFor this tutorial, we will use Truffle Suite to compile and deploy ERC20 token smart contracts onto the BSC network."),(0,a.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"There is no need for any local environment settings for deploying Solidity smart contracts on BSC using the Remix IDE.\nAll you require is a browser-based Web3 wallet (e.g. MetaMask) to interact with the BSC Testnet and the deployed contracts. If you are already using MetaMask, it is recommended to create a new account for testing with Replit. You can do this from the account menu, which appears when you click on the account avatar in the top right corner of the MetaMask interface.\nYou must set up all of the following prerequisites to be able to deploy your Solidity smart contract on BSC:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Download Metamask wallet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"Configure BNB Smart Chain Testnet on Metamask")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.bnbchain.org/en/testnet-faucet"},"Get BNB Testnet tokens"))),(0,a.kt)("h3",{id:"setting-up-remix-ide"},"Setting Up Remix IDE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remix is an online IDE to develop smart contracts."),(0,a.kt)("li",{parentName:"ul"},"You need to choose Solidity compiler - choose the appropriate compiler version; 0.8.15 was used for this tutorial.")),(0,a.kt)("h3",{id:"creating-a-workspace-in-remix-ide"},"Creating a Workspace in Remix IDE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the plus icon to create a new workspace.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(55910).Z,width:"317",height:"38"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose the OpenZeppelin's ERC20 template; give a meaningful name to your workspace and press ok.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(57859).Z,width:"510",height:"525"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Remix will create the smart contract "MyToken.sol" for you as well as will import any dependencies. We can edit this "MyToken.sol" to create our own ERC20 tokens.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27920).Z,width:"374",height:"406"})),(0,a.kt)("h3",{id:"writing-the-smart-contract"},"Writing the Smart Contract"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Open the "MyToken.sol" file and replace the token name and symbol with that of your choice, as shown in the code  below')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.4;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\ncontract ERC20Example is ERC20 {\n    constructor() ERC20("ERC20Example", "ERC20EG") {}\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rename the MyToken.sol file to the name of your token.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30129).Z,width:"575",height:"619"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compile the smart contract ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(55458).Z,width:"366",height:"631"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deploy the smart contract. Make sure that your MetaMask wallet is configured for use with the BNB Smart Chain Testnet. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select inject provider in the environment variable and make sure you see your connect account address in the Account field. "),(0,a.kt)("li",{parentName:"ul"},"Click on the Deploy button to deploy the ERC20 token smart contract.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66666).Z,width:"351",height:"563"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Confirm the transaction by pressing the confirm button on the metamask notification. ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(49251).Z,width:"343",height:"600"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To view your tokens in your metamask wallet, follow ",(0,a.kt)("a",{parentName:"li",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask"},"this")," tutorial.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(90037).Z,width:"398",height:"387"})),(0,a.kt)("h2",{id:"bridging-tokens-from-polygon-to-bsc"},"Bridging Tokens from Polygon to BSC"),(0,a.kt)("p",null,"With several different blockchain platforms available for development, of the varied underlying architecture, consensus mechanism, etc., interoperability and cross-communication between these platforms with respect to token and data transfers can be nearly impossible. "),(0,a.kt)("p",null,"Blockchain bridges are designed to overcome this hindrance of interoperability and provide a secure mechanism for decentralized token transfers.\nA cross-chain bridge connects independent blockchains and enables the transfer of assets and information between them, allowing users to access other protocols easily. Most commonly, the lock-and-mint model is used by cross-chain bridges for the purpose of moving assets between different chains. An easy description of things work is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Alice sends a certain amount of Token A to a specific address on the source chain (say, Polygon) and pays the transaction fee. "),(0,a.kt)("li",{parentName:"ol"},"Alice's Token A is locked up in a smart contract by a trusted validator or held with a trusted custodian. "),(0,a.kt)("li",{parentName:"ol"},"Equal amount of Token B is minted on the destination blockchain (say, BSC). "),(0,a.kt)("li",{parentName:"ol"},"Alice receives Token B in her wallet address and can use it on the new blockchain. ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.makerdao.com/what-are-blockchain-bridges-and-why-are-they-important-for-defi/"},"Image Source")),(0,a.kt)("p",null,"Now, what if Alice needs to move back the Token B onto her source chain and use them as Token A. This is where the burning mechanism comes into play:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Alice sends leftover Token B to a specific address on the second chain. These tokens are "burned" in the sense that they are irrecoverable. '),(0,a.kt)("li",{parentName:"ol"},'The validator or custodian triggers the release of Alice\'s Token A on the source chain. Alice then receives the released funds in her original wallet.\nOne thing critical to understand is how cross-chain bridges actually work. Cross-chain bridges work by "wrapping" tokens in a smart contract and issuing native assets you can use on another chain. For example, wrapped Bitcoin (wBTC) is an ERC-20 token that uses Bitcoin (BTC) as a collateral. Users must deposit BTC on the Bitcoin blockchain, before receiving wBTC tokens on the BSC network. ')),(0,a.kt)("h3",{id:"celers-cbridge"},"Celer's cBridge"),(0,a.kt)("p",null,"In this section of the article, we describe how to use ",(0,a.kt)("a",{parentName:"p",href:"https://cbridge.celer.network/1/10/DF"},"Celer's cBridge")," for bridging tokens from Polygon to BSC. For custom tokens, you will have to get your token whitelisted by the Celer team. For this tutorial, we will be bridging a more commonly supported USDC token from the Polygon blockchain to BSC using the ",(0,a.kt)("a",{parentName:"p",href:"https://cbridge.celer.network/1/10/DF"},"Celer cBridge"),"."),(0,a.kt)("h3",{id:"using-celer-cbridge-to-bridge-tokens-from-polygon-to-bsc"},"Using Celer cBridge to bridge tokens from Polygon to BSC"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Head over to the official Website of cBridge and connect your wallet. After clicking on the connect wallet button, choose your desired wallet. If metamask is chosen, confirm the connection on the popup notification.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1231).Z,width:"1313",height:"630"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Select your source and destination chains. To make sure your Metamask wallet is connected to the source chain, approve and switch to the network by confirming the metamask notification. "),(0,a.kt)("li",{parentName:"ol"},"Make sure your source chain is set to Polygon and the destination chain is BSC. Also, confirm that you have selected USDC for transfer. ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92152).Z,width:"574",height:"538"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Adjust the slippage tolerance if required. Your transfer may fail if you choose a very low slippage tolerance.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(16655).Z,width:"594",height:"560"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Review your transaction details and confirm the transaction."),(0,a.kt)("li",{parentName:"ol"},"Confirm Transfer, then sign the transaction on your wallet."),(0,a.kt)("li",{parentName:"ol"},"Wait for the transaction to confirm and for your funds to arrive on your destination"),(0,a.kt)("li",{parentName:"ol"},"In case of transfer failure, due to insufficient liquidity on the destination chain or an unfavorable slippage tolerance, you will receive a popup explaining the reason for the failure. You can cancel the transfer either through the popup, or by clicking Request Refund in the transfer history.")),(0,a.kt)("h2",{id:"migrating-vested-token-from-polygon-to-bsc"},"Migrating Vested Token from Polygon to BSC"),(0,a.kt)("p",null,"In crypto space, Vesting is known as the process of locking and distributing purchased tokens within a particular timeframe known as the Vesting Period. Vested tokens can be described as a certain amount of tokens that are held aside for a particular time period, usually for the team members, partners, advisors, and others who are contributing to the development of the project.\nVested tokens are essentially locked in a smart contract and are released automatically until certain conditions are met. Vesting basically gives the impression that the team is highly interested in the project and aims to continue working on the project development. Additionally, vesting lowers market price manipulations.\nThere are two options available for migrating vested tokens from EMV-based blockchain to BSC."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Migrate the vesting contract and move the whole vesting schedule to BSC."),(0,a.kt)("li",{parentName:"ul"},"Migrate the tokens that are being released as per the schedule")),(0,a.kt)("h2",{id:"migrating-vesting-contract"},"Migrating Vesting Contract"),(0,a.kt)("p",null,"Vesting is essentially a smart contract that has all of the vested tokens locked up which are released over a time period automatically when certain conditions are met. One of the possible ways to migrate vested tokens from BSC is to migrate the vesting contract that is to deploy your vesting smart contract to BSC. "),(0,a.kt)("h3",{id:"migrating-vesting-tokens"},"Migrating Vesting Tokens"),(0,a.kt)("p",null,"Another method is to ask the holders of vested tokens to exchange the already bought vested tokens with a newly created equivalent token on BSC and continue the release of vested tokens as per schedule. Another way is to take a snapshot of the vested token holders and update their wallets with an equivalent amount of new tokens and continue with the vesting schedule and release of tokens."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"With several advantages and an ecosystem that supports web3 development, BNB Chain has gained a lot of attention from developers and blockchain projects. Several blockchain projects are now choosing to migrate their tokens from other EVM chains to BSC. In this article, we provided a brief overview of how to migrate tokens from one EVM to another, in particular from Polygon to BSC."))}p.isMDXComponent=!0},55910:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},1231:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-10-4151fedb951bc986c1d281eb89ab5ef0.png"},92152:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-11-6b03f02a2f294b72c8cb0197b2c845dc.png"},16655:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-12-038bf755b694a74df3de5cc961645c26.png"},57859:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-2-587b85b0e6baf7b3c2f8efb6919b063a.png"},27920:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-3-017af9a531d6009a3fe5ad6f862dd2ad.png"},30129:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-4-a5c2e2fd1a3415a2f8dbd28be877f661.png"},55458:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-5-dc1e47f8ffd655d4701dbcac8029c422.png"},66666:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-6-74bfabe4333b4182c3d7b87359e08abd.png"},49251:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-7-e39af19cde7dd08666eba41769d1a284.png"},90037:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/token-8-eb8c504c8c359e217424657630c2fbe2.png"}}]);