(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-73f9ed3e"],{"6b41":function(e,t,a){},"8fbf":function(e,t,a){},9406:function(B,e,t){"use strict";t.r(e);var l=t("b0c4");const d={class:"layout"},u={class:"layout-inner radius-box"},h={class:"container"},b={class:"dashboard-page"};var a=t("90fe");const s=e=>(Object(l.pushScopeId)("data-v-a556e92e"),e=e(),Object(l.popScopeId)(),e),n={class:"datas-list"},p={class:"market-info"},i=s(()=>Object(l.createElementVNode)("span",{class:"text-inner"},"前往交易",-1)),m=[i],y={class:"datas-list"},j={class:"avg-prices"},g=s(()=>Object(l.createElementVNode)("div",{class:"title"},"选择不同趋势实时加密货币",-1)),O={class:"sold-view"},V={class:"sold-list"},f=["onClick"],k={class:"infos"},v={class:"info-title"},N=["src"],w={class:"title-text"},x={class:"title-identity"},C={key:0,class:"title-identitySpan"},L={key:0,style:{color:"red"}},z={key:1},q={style:{color:"yellow"}},M={style:{color:"yellow"}},I={style:{color:"yellow"}},$={style:{color:"yellow"}},P={style:{color:"yellow"}},H={key:2,style:{color:"green"}},R={style:{color:"yellow"}},Q={class:"info-datas"},Y={class:"data-item"},J=s(()=>Object(l.createElementVNode)("span",null,"Price",-1)),Z=["innerHTML"],G={class:"data-item"},K=s(()=>Object(l.createElementVNode)("span",null,"24h成交量",-1)),W={class:"data-item"},X=s(()=>Object(l.createElementVNode)("span",null,"较昨天增量",-1)),ee={class:"right-info"},te={class:"price-value"},ae={class:"valut-top"},se={class:"amount"},ie=["innerHTML"],re={key:0,class:"usd-value",style:{color:"green"}},oe={key:1,class:"usd-value",style:{color:"red"}},ce={class:"times"},ne=s(()=>Object(l.createElementVNode)("span",null," 流动性 ",-1));t("24b8");var r=t("9035"),o=t.n(r);let c=0;var S,_="webkit moz ms o".split(" ");let T,E;if("undefined"==typeof window)T=function(){},E=function(){};else{T=window.requestAnimationFrame,E=window.cancelAnimationFrame;for(let e=0;e<_.length&&(!T||!E);e++)S=_[e],T=T||window[S+"RequestAnimationFrame"],E=E||window[S+"CancelAnimationFrame"]||window[S+"CancelRequestAnimationFrame"];T&&E||(T=function(e){const t=(new Date).getTime(),a=Math.max(0,16-(t-c)),s=window.setTimeout(()=>{e(t+a)},a);return c=t+a,s},E=function(e){window.clearTimeout(e)})}var r={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(e){return 0<=e}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(e,t,a,s){return a*(1-Math.pow(2,-10*e/s))*1024/1023+t}}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=T(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){E(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,T(this.count)},reset(){this.startTime=null,E(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(e){this.startTime||(this.startTime=e);e=(this.timestamp=e)-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=T(this.count):this.$emit("callback")},isNumber(e){return!isNaN(parseFloat(e))},formatNumber(e){e.toFixed||(e-=0),e=e.toFixed(this.decimals);e=(e+="").split(".");let t=e[0];var e=1<e.length?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(t);)t=t.replace(a,"$1"+this.separator+"$2");return this.prefix+t+e+this.suffix}},destroyed(){E(this.rAF)}},U=t("b3f2"),U=t.n(U),r=U()(r,[["render",function(e,t,a,s,i,r){return Object(l.openBlock)(),Object(l.createElementBlock)("span",null,Object(l.toDisplayString)(i.displayValue),1)}]]),D=r,r=("undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",r),t("dd27")),F=t.n(r),r={data(){return{rankList:[],scanList:[],blackList:[],rankTimer:0,scanTimer:0,contractAddress:"",coinSelectQuery:"size=100",coinSelect:{searchPhrase:"",priceUsd:{},marketCapUsd:{},volume24hUsd:{},totalLiquidityUsd:{from:7e3,to:1e8},trades24h:{from:200},firstTradingDate:{},chainIds:[56]}}},components:{countTo:D},mounted(){this.getRankList(),this.rankTimer=setInterval(()=>{this.getRankList()},5e3),this.scanTimer=setInterval(()=>{this.scanCoinList()},3e3)},beforeUnmount(){this.clearTimer()},methods:{refreshPage(e){this.$router.push({path:"/swap/Pancake",query:{outputCurrency:e.address}})},gotFixed(e){var t=/(\d+)\.([0]+)(\d+)/g.exec(e);return e-=0,e=t&&e<1?4<=t[2].length?(e=e.toFixed(t[2].length+3)).replace(t[2],"0<span style='font-size: 14px;color: #7f7f7f;margin-right: 0px;'>"+t[2].length+"</span>"):e.toFixed(t[2].length+3):e.toFixed(5)},formatMoney(e,t=0,a=".",s=","){e=(e+"").replace(/[^0-9+-Ee.]/g,"");for(var e=isFinite(+e)?+e:0,t=isFinite(+t)?Math.abs(t):0,i=void 0===s?",":s,s=void 0===a?".":a,r="",r=(t?function(e,t){t=Math.pow(10,t);return""+Math.ceil(e*t)/t}(e,t):""+Math.round(e)).split("."),o=/(-?\d+)(\d{3})/;o.test(r[0]);)r[0]=r[0].replace(o,"$1"+i+"$2");return(r[1]||"").length<t&&(r[1]=r[1]||"",r[1]+=new Array(t-r[1].length+1).join("0")),r.join(s)},contractAddressChange(){this.contractAddress<=1||o.a.post("https://api.coinbrain.com/cointoaster/coins?size=100",{searchPhrase:this.contractAddress,chainIds:[56]}).then(e=>{e=this.coinsFilter(e.data.items);this.rankList=e.sort((e,t)=>e.volumes-t.volumes).slice(0,40)})},buttonSelectChange(e){var t=e.currentTarget.attributes.datas.value,a=("yellow"==e.currentTarget.style.borderColor?e.currentTarget.style.borderColor="green":"red"==e.currentTarget.style.borderColor?e.currentTarget.style.borderColor="yellow":e.currentTarget.style.borderColor="red",e.currentTarget.style.borderColor);switch(t){case"1":this.coinSelect={searchPhrase:"",priceUsd:{},marketCapUsd:{},volume24hUsd:{},totalLiquidityUsd:{from:7e3,to:1e8},trades24h:{from:200},firstTradingDate:{},chainIds:[56]},this.coinSelectQuery="yellow"!=a&&"red"!=a?"size=100":"yellow"==a?"size=100&sort=priceChange7d%3Adesc":"size=100&sort=priceChange7d%3Aasc";break;case"2":this.coinSelect={searchPhrase:"",priceUsd:{},marketCapUsd:{},volume24hUsd:{from:2e4},totalLiquidityUsd:{from:15e3,to:1e8},trades24h:{from:200},firstTradingDate:{},chainIds:[56]},this.coinSelectQuery="yellow"!=a&&"red"!=a?"size=100":"yellow"==a?"size=100&sort=volume24hUsd%3Adesc":"size=100&sort=volume24hUsd%3Aasc";break;case"3":var s=A.formatUTC();this.coinSelect={searchPhrase:"",priceUsd:{},marketCapUsd:{},volume24hUsd:{from:1e4},totalLiquidityUsd:{from:2e4,to:1e8},trades24h:{from:300},firstTradingDate:{from:s},chainIds:[56]},this.coinSelectQuery="yellow"!=a&&"red"!=a?"size=100":"yellow"==a?"size=100&sort=age%3Adesc":"size=100&sort=age%3Aasc";break;case"4":this.coinSelect={searchPhrase:"",priceUsd:{},marketCapUsd:{},volume24hUsd:{},totalLiquidityUsd:{from:7e3,to:1e8},trades24h:{from:200},firstTradingDate:{},chainIds:[56]},this.coinSelectQuery="yellow"!=a&&"red"!=a?"size=100":"yellow"==a?"size=100&sort=priceChange24h%3Adesc":"size=100&sort=priceChange24h%3Aasc"}this.getRankList()},clearTimer(){clearInterval(this.rankTimer),clearInterval(this.scanTimer),this.scanTimer=null,this.rankTimer=null},scanCoinList(){let e=this.rankList.filter(t=>{if(!this.scanList.find(e=>e.address==t.address))return t});if(0==e.length)this.rankList.filter(t=>{var e=this.scanList.find(e=>e.address==t.address);if(e)return t.token_security=e,t});else{const a=(e=e.shift()).address;o.a.get("https://api.gopluslabs.io/api/v1/token_security/56?contract_addresses="+a).then(e=>{var e=e.data.result[a.toLowerCase()],t=e.owner_address;e.address=a,e.is_owner="0x0000000000000000000000000000000000000000"==t||"0x000000000000000000000000000000000000dead"==t||""==t,null==e.buy_tax&&(e.buy_tax=0,e.sell_tax=0),("1"===e.is_honeypot||50<(100*e.buy_tax).toFixed(1)||50<(100*e.sell_tax).toFixed(1))&&this.blackList.push(e),this.scanList.push(e)})}},coinsFilter(e){return e.filter(t=>{if(t.priceUsd24hAgo=F()(t.priceUsd24hAgo).toFixed(),t.priceUsd=F()(t.priceUsd).toFixed(),t.priceUsd7dAgo=F()(t.priceUsd7dAgo).toFixed(),56==t.chainId)return t.price24h=[],t.token_security=[],t.price24h.amount=F()(t.priceUsd-t.priceUsd24hAgo).toFixed(),t.priceUsd24hAgo>t.priceUsd?(t.price24h.is_up=!1,t.price24h.price=(100-t.priceUsd/t.priceUsd24hAgo*100).toFixed(2)):(t.price24h.is_up=!0,t.price24h.price=(t.priceUsd/t.priceUsd24hAgo*100-100).toFixed(2)),t.price24h.amount=this.gotFixed(t.price24h.amount),t.priceUsd=this.gotFixed(t.priceUsd),t.volumes=t.volume24hUsd-t.volume24hUsd24hAgo,t.token_security=this.scanList.find(e=>e.address==t.address),t})},getRankList(){0<this.contractAddress.length||o.a.post("https://api.coinbrain.com/cointoaster/coins/merged?"+this.coinSelectQuery,this.coinSelect).then(e=>{e=this.coinsFilter(e.data.items);this.rankList=e.slice(0,40)})}}};const A={format(e,t=new Date){var a,s,i={"Y+":(t=new Date(t)).getFullYear().toString(),"M+":(t.getMonth()+1).toString(),"D+":t.getDate().toString(),"h+":t.getHours().toString(),"m+":t.getMinutes().toString(),"s+":t.getSeconds().toString()};for(s in i)a=new RegExp("("+s+")").exec(e),a&&(e=e.replace(a[1],1===a[1].length?i[s]:i[s].padStart(a[1].length,"0")));return e},formatUTC:()=>{let e=A.format("YYYY-MM-DD hh:mm:ss",(new Date).getTime()-288e5-1728e5);return e=(e=e.replace(/\//g,"-")).replace(" ","T"),e+=".435Z"}};t("e66c");D={data(){return{activeName:"NavHot"}},components:{navHot:U()(r,[["render",function(e,t,a,s,i,r){const o=Object(l.resolveComponent)("el-button"),c=Object(l.resolveComponent)("countTo");return Object(l.openBlock)(),Object(l.createElementBlock)(l.Fragment,null,[Object(l.createElementVNode)("div",n,[Object(l.createElementVNode)("div",p,[Object(l.withDirectives)(Object(l.createElementVNode)("input",{type:"text",style:{"min-width":"300px"},"onUpdate:modelValue":t[0]||(t[0]=e=>i.contractAddress=e),class:"price-info",onInput:t[1]||(t[1]=(...e)=>r.contractAddressChange&&r.contractAddressChange(...e)),placeholder:"请输入合约地址/代币名字"},null,544),[[l.vModelText,i.contractAddress]]),42==i.contractAddress.length?(Object(l.openBlock)(),Object(l.createElementBlock)("a",{key:0,onClick:t[2]||(t[2]=e=>r.refreshPage({address:i.contractAddress})),class:"common-button button-primary button-44 disabled"},m)):Object(l.createCommentVNode)("",!0)])]),Object(l.createElementVNode)("div",y,[Object(l.createElementVNode)("div",j,[g,Object(l.createVNode)(o,{datas:"1",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:r.buttonSelectChange},{default:Object(l.withCtx)(()=>[Object(l.createTextVNode)("默认")]),_:1},8,["onClick"]),Object(l.createVNode)(o,{datas:"2",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:r.buttonSelectChange},{default:Object(l.withCtx)(()=>[Object(l.createTextVNode)("热门硬币")]),_:1},8,["onClick"]),Object(l.createVNode)(o,{datas:"3",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:r.buttonSelectChange},{default:Object(l.withCtx)(()=>[Object(l.createTextVNode)("顶级新币")]),_:1},8,["onClick"]),Object(l.createVNode)(o,{datas:"4",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:r.buttonSelectChange},{default:Object(l.withCtx)(()=>[Object(l.createTextVNode)("赢家/输家")]),_:1},8,["onClick"])])]),Object(l.createElementVNode)("div",O,[Object(l.createElementVNode)("div",V,[(Object(l.openBlock)(!0),Object(l.createElementBlock)(l.Fragment,null,Object(l.renderList)(i.rankList,(t,e)=>(Object(l.openBlock)(),Object(l.createElementBlock)("a",{key:t.address,onClick:e=>r.refreshPage(t),class:"sold-item"},[Object(l.createElementVNode)("div",k,[Object(l.createElementVNode)("div",v,[t.logo?(Object(l.openBlock)(),Object(l.createElementBlock)("img",{key:0,src:t.logo},null,8,N)):(Object(l.openBlock)(),Object(l.createElementBlock)("div",{key:1,class:"rank-lst__item--logo",style:Object(l.normalizeStyle)({background:"#"+e+t.symbol.length+e})},Object(l.toDisplayString)(t.symbol.substr(0,1)),5)),Object(l.createElementVNode)("div",w,Object(l.toDisplayString)(t.symbol),1),Object(l.createElementVNode)("div",x,[Object(l.createTextVNode)(Object(l.toDisplayString)(t.name)+" ",1),t.token_security?(Object(l.openBlock)(),Object(l.createElementBlock)("span",C,[Object(l.createTextVNode)(" (买卖税: "+Object(l.toDisplayString)((100*t.token_security.buy_tax).toFixed(1))+"/ "+Object(l.toDisplayString)((100*t.token_security.sell_tax).toFixed(1))+") ",1),"1"===t.token_security.is_honeypot||50<(100*t.token_security.buy_tax).toFixed(1)||50<(100*t.token_security.sell_tax).toFixed(1)?(Object(l.openBlock)(),Object(l.createElementBlock)("span",L," 高税/貔貅; ")):t.token_security.is_owner&&"1"!=t.token_security.is_proxy&&"1"!=t.token_security.hidden_owner?(Object(l.openBlock)(),Object(l.createElementBlock)("span",H,Object(l.toDisplayString)(t.token_security.is_owner?"已弃权":""),1)):(Object(l.openBlock)(),Object(l.createElementBlock)("span",z,[Object(l.createElementVNode)("span",q,Object(l.toDisplayString)("1"==t.token_security.is_proxy?"代理合约":""),1),Object(l.createElementVNode)("span",M,Object(l.toDisplayString)("1"==t.token_security.transfer_pausable?"存在交易开关":""),1),Object(l.createElementVNode)("span",I,Object(l.toDisplayString)("1"==t.token_security.is_blacklisted?"存在黑名单":""),1),Object(l.createElementVNode)("span",$,Object(l.toDisplayString)("1"==t.token_security.slippage_modifiable?"可调税":""),1),Object(l.createElementVNode)("span",P,Object(l.toDisplayString)("1"==t.token_security.hidden_owner?"隐藏权限":"未弃权"),1)])),Object(l.createElementVNode)("span",R,Object(l.toDisplayString)("1"==t.token_security.cannot_sell_all?"卖不掉完":""),1)])):Object(l.createCommentVNode)("",!0)])]),Object(l.createElementVNode)("div",Q,[Object(l.createElementVNode)("div",Y,[J,Object(l.createTextVNode)(" $"),1<t.priceUsd?(Object(l.openBlock)(),Object(l.createBlock)(c,{key:0,startVal:0,endVal:t.priceUsd,duration:"1000",decimals:"5"},null,8,["endVal"])):(Object(l.openBlock)(),Object(l.createElementBlock)("span",{key:1,innerHTML:t.priceUsd},null,8,Z))]),Object(l.createElementVNode)("div",G,[K,Object(l.createTextVNode)(" $"+Object(l.toDisplayString)(this.formatMoney(t.volume24hUsd,0)),1)]),Object(l.createElementVNode)("div",W,[X,Object(l.createTextVNode)(" $"+Object(l.toDisplayString)(this.formatMoney(t.volume24hUsd-t.volume24hUsd24hAgo,0)),1)])])]),Object(l.createElementVNode)("div",ee,[Object(l.createElementVNode)("div",te,[Object(l.createElementVNode)("div",ae,[Object(l.createElementVNode)("span",se,[Object(l.createElementVNode)("div",{innerHTML:t.price24h.amount},null,8,ie)])]),t.price24h.is_up?(Object(l.openBlock)(),Object(l.createElementBlock)("span",re,"+"+Object(l.toDisplayString)(t.price24h.price)+"%",1)):Object(l.createCommentVNode)("",!0),t.price24h.is_up?Object(l.createCommentVNode)("",!0):(Object(l.openBlock)(),Object(l.createElementBlock)("span",oe,"-"+Object(l.toDisplayString)(t.price24h.price)+"%",1))]),Object(l.createElementVNode)("div",ce,[ne,Object(l.createTextVNode)(" $"+Object(l.toDisplayString)(this.formatMoney(t.totalLiquidityUsd,0)),1)])])],8,f))),128))])])],64)}],["__scopeId","data-v-a556e92e"]])},methods:{tabChange(){Object(a.e)("Tea Dao-"+this.activeName)}}},t("cb7f"),r=U()(D,[["render",function(e,t,a,s,i,r){const o=Object(l.resolveComponent)("navHot"),c=Object(l.resolveComponent)("el-tab-pane"),n=Object(l.resolveComponent)("el-tabs");return Object(l.openBlock)(),Object(l.createElementBlock)("div",d,[Object(l.createElementVNode)("div",u,[Object(l.createElementVNode)("div",h,[Object(l.createElementVNode)("div",b,[Object(l.createVNode)(n,{class:"dashboard-item",modelValue:i.activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>i.activeName=e),onTabClick:r.tabChange},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(c,{label:e.$t("dashboard.navHot"),name:"NavHot",lazy:""},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(o)]),_:1},8,["label"]),Object(l.createVNode)(c,{label:e.$t("dashboard.navBot"),name:"NavBot",lazy:""},{default:Object(l.withCtx)(()=>[Object(l.createTextVNode)(" 建设中1 ")]),_:1},8,["label"]),Object(l.createVNode)(c,{label:e.$t("dashboard.navTool"),name:"NavTool",lazy:""},{default:Object(l.withCtx)(()=>[Object(l.createTextVNode)(" 建设中2 ")]),_:1},8,["label"]),Object(l.createVNode)(c,{label:"扫描仪",name:"Airdrop",lazy:""},{default:Object(l.withCtx)(()=>[Object(l.createTextVNode)(" 建设中3 ")]),_:1})]),_:1},8,["modelValue","onTabClick"])])])])])}]]);e.default=r},cb7f:function(e,t,a){"use strict";a("6b41")},e66c:function(e,t,a){"use strict";a("8fbf")}}]);