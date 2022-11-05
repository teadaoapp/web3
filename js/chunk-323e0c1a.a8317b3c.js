(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-323e0c1a","chunk-2d225651","chunk-2d20770c"],{"00ea":function(e,t,n){},"47bb":function(e,t,n){"use strict";n("d3c1")},"4dbb":function(e,t,n){},"9c1a":function(e,t,n){"use strict";n("4dbb")},a117:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"AddPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"MAX_SUPPLY_TOKEN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SMART_DISPATCH_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"claimedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"enablePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllSupplyTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"rewardTokens_","type":"address[]"},{"internalType":"address","name":"admin_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},d3c1:function(e,t,n){},dd74:function(e,t,n){"use strict";n("00ea")},e3e2:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_usdt","type":"address"},{"internalType":"address","name":"_amo","type":"address"},{"internalType":"address","name":"_dor","type":"address"},{"internalType":"address","name":"_stock","type":"address"},{"internalType":"address","name":"_swap","type":"address"},{"internalType":"address","name":"_nftPool","type":"address"},{"internalType":"address","name":"_fundAddr","type":"address"},{"internalType":"uint256","name":"_time","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amo","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"binRouter","outputs":[{"internalType":"contract IBinRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createDispatchInitialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dor","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dorPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"givePoolReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hole","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"invStockRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"invUsdtRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"level","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"levelRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeUsdt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"poolContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolRouter","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_binRouter","type":"address"}],"name":"setBinRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"setMinStakeUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolRouter","type":"address"}],"name":"setSwapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"setUserContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmoiunt","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeDor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeUsdt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stock","outputs":[{"internalType":"contract StockToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamStock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"user","outputs":[{"internalType":"contract DayOfRightsReferral","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"userLevelCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userNode","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},fe01:function(e,t,n){"use strict";n.r(t);var p=n("33a9");const a=e=>(Object(p.pushScopeId)("data-v-f0070d16"),e=e(),Object(p.popScopeId)(),e),o={class:"tool swap flex-row-start"},r={class:"flex-row-center flex-1 flex-start"},d={class:"swap-info PB-20 imputation"},l={class:"dor swap-item"},y={class:"flex-row-between text-16"},c={class:"flex-row-between text-16"},m={class:"MT-10 flex-row-between"},b=a(()=>Object(p.createElementVNode)("a",{href:"/#/swap/Pancake?inputCurrency=0x23766cb8a96ff2f46f664bc7d088a6306de73618&chart=1",target:"_bank",class:"dor-btn flex-column-center align-center buy pointer text-center"},[Object(p.createElementVNode)("span",null,"Swap")],-1)),w={class:"flex-row-center flex-1 flex-start"},f={class:"swap-info PB-20 imputation"},T={class:"dor swap-item"},O=a(()=>Object(p.createElementVNode)("div",{class:"flex-row-between text-16"}," 不建议购买AMO ",-1)),v={class:"flex-row-between text-16"},j={class:"flex-row-between text-16"},M={class:"MT-10 flex-row-between"},x=a(()=>Object(p.createElementVNode)("a",{href:"/#/swap/Pancake?inputCurrency=0x7a349cccbB341D57e274c298f1e4751fB33158E5&chart=1",target:"_bank",class:"dor-btn flex-column-center align-center buy pointer text-center"},[Object(p.createElementVNode)("span",null,"Swap")],-1)),h=a(()=>Object(p.createElementVNode)("div",{class:"flex-row-center flex-1 flex-start"},[Object(p.createElementVNode)("div",{class:"swap-info PB-20 imputation"},[Object(p.createElementVNode)("div",{class:"dor swap-item"},[Object(p.createElementVNode)("div",{class:"flex-row-between text-16"},[Object(p.createTextVNode)(" 本页面是提供给受伤用户继续提取链上资产,并非与本站有关! "),Object(p.createElementVNode)("br"),Object(p.createTextVNode)(" 有其他项目奖励领取可以联系管理员 ")]),Object(p.createElementVNode)("a",{href:"https://t.me/TeaDaoCn"},"https://t.me/TeaDaoCn")])])],-1));var i=n("767c"),s=n("dcd5"),u=n("a117"),k=n("e3e2"),g=n("1630"),N=n("90fe"),C=n("8e44");let V="0x55d398326f99059fF775485246999027B3197955";i={data(){return{utils:g.b,getBit:N.c,isLogin:!1,availableNum:0,availableUsdt:0,activeName:"imputation",contract:null,AmoContract:null,AmoNum:0,AmoUsdt:0,AmorewardLoading:!1,Aloading:!1,loading:!1,rewardLoading:!1}},mounted(){this.isLogin=!!window.wallet.accounts[0],this.isLogin&&this.loginCallBack(),window.wallet.on("accountChange",()=>{this.isLogin=!!window.wallet.accounts[0],this.isLogin&&this.loginCallBack()})},methods:{...Object(i.b)(["setConnectDialog"]),loginCallBack(){this.contract=window.wallet.initContract(s.product.DOR,u),this.AmoContract=window.wallet.initContract("0xea4fb5ad31602a5a02fe7e16fbfdc2c23702fa76",k),this.loading=!0,this.contract.available("0x23766CB8a96fF2f46F664BC7D088a6306DE73618",window.wallet.accounts[0]).then(e=>{this.availableNum=e,window.wallet.ContractWETH.getAmountsOut(e,["0x23766CB8a96fF2f46F664BC7D088a6306DE73618",V]).then(e=>{this.availableUsdt=e[1]})}).finally(()=>{this.loading=!1}),this.Aloading=!0,this.AmoContract.earned(window.wallet.accounts[0]).then(e=>{this.AmoNum=e,window.wallet.ContractWETH.getAmountsOut(e,["0x7a349cccbB341D57e274c298f1e4751fB33158E5",V]).then(e=>{this.AmoUsdt=e[1]})}).finally(()=>{this.Aloading=!1})},async getReward(){this.AmorewardLoading=!0;try{await(await this.AmoContract.getReward()).wait(),Object(C.a)({type:"success",title:"Success",message:"代币领取成功"})}catch(e){Object(N.a)(e)}this.AmorewardLoading=!1},async availableHandler(){this.rewardLoading=!0;try{await(await this.contract.claim("0x23766CB8a96fF2f46F664BC7D088a6306DE73618",{gasPrice:g.b.parseUnits("5",9),gasLimit:4e5})).wait(),Object(C.a)({type:"success",title:"Success",message:"代币领取成功"})}catch(e){Object(N.a)(e)}this.rewardLoading=!1}}};n("dd74"),n("9c1a"),n("47bb"),i.render=function(t,e){const n=Object(p.resolveComponent)("Loading"),a=Object(p.resolveComponent)("el-icon"),i=Object(p.resolveComponent)("el-button"),s=Object(p.resolveComponent)("el-tab-pane"),u=Object(p.resolveComponent)("el-tabs");return Object(p.openBlock)(),Object(p.createElementBlock)("div",o,[Object(p.createVNode)(u,{modelValue:t.activeName,"onUpdate:modelValue":e[2]||(e[2]=e=>t.activeName=e),class:"swap-tabs"},{default:Object(p.withCtx)(()=>[Object(p.createVNode)(s,{label:"Dor Nft 分红奖励",name:"imputation",lazy:""},{default:Object(p.withCtx)(()=>[Object(p.createElementVNode)("div",r,[Object(p.createElementVNode)("div",d,[Object(p.createElementVNode)("div",l,[Object(p.createElementVNode)("div",y,[Object(p.createTextVNode)(" 可领取DOR数量："+Object(p.toDisplayString)(t.getBit(t.utils.formatUnits(t.availableNum,18),5))+" ",1),t.loading?(Object(p.openBlock)(),Object(p.createBlock)(a,{key:0,class:"is-loading"},{default:Object(p.withCtx)(()=>[Object(p.createVNode)(n)]),_:1})):Object(p.createCommentVNode)("",!0)]),Object(p.createElementVNode)("div",c,[Object(p.createTextVNode)(" 价值:~$"+Object(p.toDisplayString)(t.getBit(t.utils.formatUnits(t.availableUsdt,18),5))+" ",1),t.loading?(Object(p.openBlock)(),Object(p.createBlock)(a,{key:0,class:"is-loading"},{default:Object(p.withCtx)(()=>[Object(p.createVNode)(n)]),_:1})):Object(p.createCommentVNode)("",!0)]),Object(p.createElementVNode)("div",m,[t.isLogin?(Object(p.openBlock)(),Object(p.createBlock)(i,{key:0,class:"dor-btn",disabled:t.availableNum<=0,loading:t.rewardLoading,onClick:t.availableHandler},{default:Object(p.withCtx)(()=>[Object(p.createTextVNode)("领取")]),_:1},8,["disabled","loading","onClick"])):(Object(p.openBlock)(),Object(p.createBlock)(i,{key:1,class:"dor-btn",onClick:e[0]||(e[0]=e=>t.setConnectDialog(!0))},{default:Object(p.withCtx)(()=>[Object(p.createTextVNode)("链接钱包")]),_:1})),b])])])])]),_:1}),Object(p.createVNode)(s,{label:"AMO原始股分红",name:"AMO",lazy:""},{default:Object(p.withCtx)(()=>[Object(p.createElementVNode)("div",w,[Object(p.createElementVNode)("div",f,[Object(p.createElementVNode)("div",T,[O,Object(p.createElementVNode)("div",v,[Object(p.createTextVNode)(" 可领取AMO数量："+Object(p.toDisplayString)(t.getBit(t.utils.formatUnits(t.AmoNum,18),5))+" ",1),t.loading?(Object(p.openBlock)(),Object(p.createBlock)(a,{key:0,class:"is-loading"},{default:Object(p.withCtx)(()=>[Object(p.createVNode)(n)]),_:1})):Object(p.createCommentVNode)("",!0)]),Object(p.createElementVNode)("div",j,[Object(p.createTextVNode)(" 价值:~$"+Object(p.toDisplayString)(t.getBit(t.utils.formatUnits(t.AmoUsdt,18),5))+" ",1),t.loading?(Object(p.openBlock)(),Object(p.createBlock)(a,{key:0,class:"is-loading"},{default:Object(p.withCtx)(()=>[Object(p.createVNode)(n)]),_:1})):Object(p.createCommentVNode)("",!0)]),Object(p.createElementVNode)("div",M,[t.isLogin?(Object(p.openBlock)(),Object(p.createBlock)(i,{key:0,class:"dor-btn",disabled:t.AmoNum<=0,loading:t.rewardLoading,onClick:t.getReward},{default:Object(p.withCtx)(()=>[Object(p.createTextVNode)("领取")]),_:1},8,["disabled","loading","onClick"])):(Object(p.openBlock)(),Object(p.createBlock)(i,{key:1,class:"dor-btn",onClick:e[1]||(e[1]=e=>t.setConnectDialog(!0))},{default:Object(p.withCtx)(()=>[Object(p.createTextVNode)("链接钱包")]),_:1})),x])])])])]),_:1}),Object(p.createVNode)(s,{label:"其他说明",name:"other",lazy:""},{default:Object(p.withCtx)(()=>[h]),_:1})]),_:1},8,["modelValue"])])},i.__scopeId="data-v-f0070d16",t.default=i}}]);