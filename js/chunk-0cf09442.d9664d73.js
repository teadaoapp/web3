(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0cf09442"],{"16f3":function(e,t,s){},"1dfe":function(e,t,s){"use strict";s("3b02")},"289f":function(e,t,s){"use strict";s("3216")},3216:function(e,t,s){},"3b02":function(e,t,s){},"4e1a":function(e,t,s){"use strict";var h=s("b0c4");const b={class:"flex-column-start tokens-content"},p={class:"flex-row-start align-center"},u={class:"flex-h__1 tokens-list"},m={key:0,class:"tokens-list__import flex-row-start align-center PL-30 PR-30 PB-30 PT-30"},k={class:"flex-row-start flex-1 align-center"},f={class:"tokens-list__item-icon MR-10"},O={class:"tokens-list__import-name MR-10"},j={class:"tokens-list__import-desc"},g=["onClick"],y={class:"tokens-list__item-icon MR-10"},v={class:"flex-1"},w={class:"token-list__item-title"},_={class:"token-list__item-desc"},C={class:"token-list__item-price"};s("24b8");var i=s("b706"),o=s("90fe"),n=s("82d8"),n={name:"Tokens",data(){return{utils:i.b,getBit:o.c,getLogo:o.d,dialogVisible:!1,activeAddress:[],searchTxt:"",getTokens:[],importTokens:{},tokens:[],type:""}},computed:{...Object(n.c)(["currentNetwork"])},async mounted(){var{outputCurrency:e,inputCurrency:t}=this.$route.query;e&&42==e.length&&(this.type="item2",await this.getCurrencyInfo(e),this.importHandler()),t&&42==t.length&&(this.type="item1",await this.getCurrencyInfo(t),this.importHandler()),this.type=""},watch:{"currentNetwork.ChainID":{immediate:!0,handler(){var e=localStorage.getItem(this.currentNetwork.ChainID+"tokens");this.tokens=e?JSON.parse(e):this.currentNetwork.Token,this.getTokens=Object(h.toRaw)(this.tokens),this.getBalance()}},searchTxt(e){this.searchTxtChange(e)}},methods:{searchTxtChange(s){s||(this.getTokens=Object(h.toRaw)(this.tokens));var e=this.tokens.filter(e=>{var{name:e,address:t}=e;return!(null==e||null==t||!e.toLocaleLowerCase().includes(s.toLocaleLowerCase())&&!t.toLocaleLowerCase().includes(s.toLocaleLowerCase()))});this.importTokens={},this.getTokens=Object(h.toRaw)(e),e.length<=0&&42===s.length&&this.getCurrencyInfo(s)},fastImport(s,e=!0){s=s||this.searchTxt;const t=this.tokens.find(e=>e.address===s);if(t)this.selectHandler(t);else{this.importTokens={name:s.slice(0,6),symbol:s.slice(0,6),address:s,isAdd:!0},this.importHandler(e);const t=window.wallet.initContract(s),i=[t.name(),t.symbol()];Promise.all(i).then(([e,t])=>{this.updateTokenInfo(s,e,t)})}},updateTokenInfo(t,e,s){var i=this.tokens.findIndex(e=>e.address===t),i=(0<=i&&(this.tokens[i].name=e,this.tokens[i].symbol=s),this.getTokens.findIndex(e=>e.address===t));0<=i&&(this.getTokens[i].name=e,this.getTokens[i].symbol=s),this.$emit("update",{address:t,name:e,symbol:s}),localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))},removeTokens(e){const t=this.getTokens[e],s=this.tokens.findIndex(e=>t.address==e.address);this.tokens.splice(s,1),this.searchTxtChange(this.searchTxt),localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))},async getCurrencyInfo(i){var e=window.wallet.initContract(i),e=[e.name(),e.symbol(),e.decimals()];try{await Promise.all(e).then(([e,t,s])=>{this.importTokens={name:e,symbol:t,decimals:s,address:i,isAdd:!0}})}catch(e){Object(o.a)(e)}},async getBalance(){if(window.wallet.accounts[0]){let s=[];for(let e=0;e<this.getTokens.length;e++){var i=this.getTokens[e];let t;if(i.address===this.currentNetwork.MainCoin.address)t=window.wallet.provider.getBalance();else{if(null==i.address)continue;{const e=window.wallet.initContract(i.address);t=e.balanceOf(window.wallet.accounts[0])}}s.push(t)}Promise.allSettled(s).then(e=>{e.forEach((e,t)=>{var{status:e,value:s}=e;this.getTokens[t].balance="fulfilled"===e?s:""})})}else for(let e=0;e<this.getTokens.length;e++)this.getTokens[e].balance=""},importHandler(e=!0){!this.tokens.find(e=>e.address===this.importTokens.address)&&e&&(this.tokens.push(this.importTokens),this.searchTxt="",localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))),this.selectHandler(this.importTokens)},open(e){this.activeAddress=e,this.dialogVisible=!0,this.importTokens={},this.getBalance()},selectHandler(e){this.$emit("change",e,this.type),this.dialogVisible=!1,this.importTokens={}}}},a=(s("d5f7"),s("b3f2")),s=s.n(a)()(n,[["render",function(e,t,s,i,o,n){const a=Object(h.resolveComponent)("el-button"),c=Object(h.resolveComponent)("Close"),r=Object(h.resolveComponent)("el-icon"),l=Object(h.resolveComponent)("el-dialog"),d=Object(h.resolveDirective)("lazy");return Object(h.openBlock)(),Object(h.createBlock)(l,{modelValue:o.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>o.dialogVisible=e),title:e.$t("swap.selectToken"),width:"420px","custom-class":"tokens"},{default:Object(h.withCtx)(()=>[Object(h.createElementVNode)("div",b,[Object(h.createElementVNode)("div",p,[Object(h.withDirectives)(Object(h.createElementVNode)("input",{type:"text",class:"tokens-input flex-1","onUpdate:modelValue":t[0]||(t[0]=e=>o.searchTxt=e),placeholder:"Search name or paste address"},null,512),[[h.vModelText,o.searchTxt,void 0,{trim:!0}]]),Object(h.createVNode)(a,{class:"MR-20",onClick:t[1]||(t[1]=e=>n.fastImport()),disabled:!o.searchTxt||42!=o.searchTxt.length&&!o.importTokens.name},{default:Object(h.withCtx)(()=>[Object(h.createTextVNode)(Object(h.toDisplayString)(e.t("swap.fastImport")),1)]),_:1},8,["disabled"])]),Object(h.createElementVNode)("div",u,[o.importTokens.name?(Object(h.openBlock)(),Object(h.createElementBlock)("div",m,[Object(h.createElementVNode)("div",k,[Object(h.withDirectives)(Object(h.createElementVNode)("img",f,null,512),[[d,o.getLogo(o.importTokens.address)]]),Object(h.createElementVNode)("div",O,Object(h.toDisplayString)(o.importTokens.name),1),Object(h.createElementVNode)("div",j,Object(h.toDisplayString)(o.importTokens.symbol),1)]),Object(h.createVNode)(a,{class:"tokens-list__import-btn",onClick:n.importHandler},{default:Object(h.withCtx)(()=>[Object(h.createTextVNode)(Object(h.toDisplayString)(e.t("swap.import")),1)]),_:1},8,["onClick"])])):(Object(h.openBlock)(!0),Object(h.createElementBlock)(h.Fragment,{key:1},Object(h.renderList)(o.getTokens,(t,s)=>(Object(h.openBlock)(),Object(h.createElementBlock)("div",{class:"tokens-list__item pointer flex-row-start align-center pointer",key:t.address,onClick:e=>n.selectHandler(t)},[Object(h.withDirectives)(Object(h.createElementVNode)("img",y,null,512),[[d,o.getLogo(t.address)]]),Object(h.createElementVNode)("div",v,[Object(h.createElementVNode)("div",w,Object(h.toDisplayString)(t.name),1),Object(h.createElementVNode)("div",_,Object(h.toDisplayString)(t.symbol),1)]),Object(h.createElementVNode)("div",C,Object(h.toDisplayString)(t.balance?o.getBit(o.utils.formatUnits(t.balance,t.decimals||18),5):""),1),t.isAdd?(Object(h.openBlock)(),Object(h.createBlock)(r,{key:0,size:30,color:"#fff",class:"ML-10",onClick:Object(h.withModifiers)(e=>n.removeTokens(s),["stop"])},{default:Object(h.withCtx)(()=>[Object(h.createVNode)(c)]),_:2},1032,["onClick"])):Object(h.createCommentVNode)("",!0)],8,g))),128))])])]),_:1},8,["modelValue","title"])}]]);t.a=s},"68ee":function(e,t,s){"use strict";s("1dfe");t.a={}},7761:function(e,t,s){"use strict";s("d00e")},8182:function(e,t,s){},9730:function(e,t,s){"use strict";var r=s("b0c4");const l={class:"layout"},d={class:"layout-inner radius-box"},h={class:"container"},b={class:"dashboard-page"};s("24b8");var i=s("82d8"),i={props:{tabChange:{type:Function,default:null},trade:{type:Object},hot:{type:Object,default:null},liquidity:{type:Object,default:null},activeName:{type:Object}},data(){return{activeItem:this.activeName}},components:{},computed:{...Object(i.c)(["currentNetwork","networkList","currentDex"])},methods:{tabChange(e,t){"trade"===this.activeItem?this.$router.push({path:"/trade/"+this.currentDex.symbol}):this.$router.push({path:"/dashboard/"+this.activeItem}),document.title=this.activeItem}}},o=(s("c052"),s("289f"),s("7761"),s("e05c"),s("b3f2")),s=s.n(o)()(i,[["render",function(e,t,s,i,o,n){const a=Object(r.resolveComponent)("el-tab-pane"),c=Object(r.resolveComponent)("el-tabs");return Object(r.openBlock)(),Object(r.createElementBlock)("div",l,[Object(r.createElementVNode)("div",d,[Object(r.createElementVNode)("div",h,[Object(r.createElementVNode)("div",b,[Object(r.createVNode)(c,{class:"dashboard-item",modelValue:o.activeItem,"onUpdate:modelValue":t[0]||(t[0]=e=>o.activeItem=e),onTabClick:n.tabChange},{default:Object(r.withCtx)(()=>[Object(r.createVNode)(a,{label:e.$t("dashboard.Hot"),name:"hot",lazy:""},{default:Object(r.withCtx)(()=>[(Object(r.openBlock)(),Object(r.createBlock)(Object(r.resolveDynamicComponent)(s.hot)))]),_:1},8,["label"]),Object(r.createVNode)(a,{label:e.$t("dashboard.Trade"),name:"trade",lazy:""},{default:Object(r.withCtx)(()=>[(Object(r.openBlock)(),Object(r.createBlock)(Object(r.resolveDynamicComponent)(s.trade)))]),_:1},8,["label"]),Object(r.createVNode)(a,{label:e.$t("dashboard.Liquidity"),name:"liquidity",lazy:""},{default:Object(r.withCtx)(()=>[(Object(r.openBlock)(),Object(r.createBlock)(Object(r.resolveDynamicComponent)(s.liquidity)))]),_:1},8,["label"]),Object(r.createVNode)(a,{label:"扫描仪",name:"Airdrop",lazy:""},{default:Object(r.withCtx)(()=>[Object(r.createTextVNode)(" 建设中3 ")]),_:1})]),_:1},8,["modelValue","onTabClick"])])])])])}]]);t.a=s},b6f2:function(e,t,s){},c052:function(e,t,s){"use strict";s("8182")},d00e:function(e,t,s){},d5f7:function(e,t,s){"use strict";s("b6f2")},e05c:function(e,t,s){"use strict";s("16f3")},f6e7:function(e,t,s){"use strict";s("24b8");var i=s("9035"),o=s.n(i),n=s("90fe");t.a={rankList:[],scanList:[],blackList:[],Merger(e){for(var t=e.filter(t=>{var e=this.rankList.findIndex(e=>e.address==t.address);if(-1==e)return t;var s=this.scanList.find(e=>e.address==t.address);s&&(this.rankList[e]=t,this.rankList[e].token_security=s)});0<t.length;){var s=t.shift();this.rankList.push(s)}},scanCoinList(){let e=this.rankList.filter(t=>{if(!this.scanList.find(e=>e.address==t.address))return t});var t;0!=e.length?(t=(e=e.shift()).address,o.a.get("https://api.gopluslabs.io/api/v1/token_security/56?contract_addresses="+t).then(e=>{e=e.data.result[t.toLowerCase()];this.coinsScanFilter(e,t.toLowerCase())})):this.rankList=this.rankList.filter(t=>{var e=this.scanList.find(e=>e.address==t.address);if(e)return t.token_security=e,t})},coinsFilter(e,s=!1){return e.filter(t=>{if(t.priceUsd24hAgo=Object(n.e)(t.priceUsd24hAgo),t.priceUsd=Object(n.e)(t.priceUsd),t.priceUsd7dAgo=Object(n.e)(t.priceUsd7dAgo),56==t.chainId&&(t.price24h=[],t.token_security=[],t.price24h.amount=Object(n.e)(t.priceUsd-t.priceUsd24hAgo),t.price24h.amount7=Object(n.e)(t.priceUsd-t.priceUsd7dAgo),t.priceUsd24hAgo>t.priceUsd?(t.price24h.is_up=!1,t.price24h.price=Object(n.e)(100-t.priceUsd/t.priceUsd24hAgo*100,2)):(t.price24h.is_up=!0,t.price24h.price=Object(n.e)(t.priceUsd/t.priceUsd24hAgo*100-100,2)),t.price24h.amount=Object(n.g)(t.price24h.amount),t.priceUsd=Object(n.g)(t.priceUsd),t.volumes=t.volume24hUsd-t.volume24hUsd24hAgo,t.token_security=this.scanList.find(e=>e.address==t.address),!s||!this.blackList.find(e=>e.address==t.address)))return t})},coinsScanFilter(e,t){var s=e.owner_address,i=(e.address=t,e.is_owner="0x0000000000000000000000000000000000000000"==s||"0x000000000000000000000000000000000000dead"==s||""==s,null==e.buy_tax&&(e.buy_tax=0,e.sell_tax=0),e.lp_total_supply);if(null!=e.lp_holders){var o,n=e.lp_holders.filter(e=>{if(1==e.is_contract)return e});for(o in n)i-=n[o].balance}i>.5*e.lp_total_supply&&(e.lp_lost="1"),("1"===e.is_honeypot||50<(100*e.buy_tax).toFixed(1)||50<(100*e.sell_tax).toFixed(1))&&(e.is_honeypot="1");t=(100*e.buy_tax+100*e.sell_tax).toFixed(1);return("1"===e.is_honeypot||"1"==e.hidden_owner||20<t)&&this.blackList.push(e),this.scanList.push(e),e}}}}]);