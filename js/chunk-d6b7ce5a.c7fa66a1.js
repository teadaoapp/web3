(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d6b7ce5a"],{"0e96":function(e,t,s){},"30ed":function(e,t){e.exports="./images/transformebb01c918573a7c339ab07503981c3be.png"},"68ca":function(l,e,t){"use strict";var g=t("b0c4"),s=t("30ed"),a=t.n(s);const o=e=>(Object(g.pushScopeId)("data-v-4f28c44e"),e=e(),Object(g.popScopeId)(),e),u={class:"flex-row-center flex-1 flex-start wrapper"},j={class:"swap-info PB-20 imputation"},k={class:"swap-item"},w={class:"swap-item__top flex-row-between"},f={class:"flex-row-start align-center pointer"},v={class:"swap-item__top-icon MR-10"},N={class:"swap-item__top-name text-overflow__1"},V={class:"swap-item__desc text-20 flex-row-end align-center"},x=o(()=>Object(g.createElementVNode)("img",{src:a.a,class:"swap-transform pointer"},null,-1)),C={key:0,class:"flex-1 wrapper-box__back flex-column-start"},y={class:"flex-h__1"},E={class:"imputation-table"},T=o(()=>Object(g.createElementVNode)("th",null,"发送地址",-1)),B=o(()=>Object(g.createElementVNode)("th",null,"接收地址",-1)),_=o(()=>Object(g.createElementVNode)("th",null,"执行结果",-1)),L={class:"flex-row-start align-center MB-20 MT-20"},D=o(()=>Object(g.createElementVNode)("div",{class:"text-16 MR-30"},"发送数量",-1)),I={class:"swap-item__input flex-1 flex-row-start align-center"},S={class:"swap-slippage MT-10 MB-20"},A={class:"swap-slippage__select flex-row-between pointer"},M=o(()=>Object(g.createElementVNode)("div",{class:"text-16"},"GWEI",-1)),U={class:"flex-row-end"},W={class:"flex-row-start align-center"};t("24b8");var s=t("c64b"),c=t("5f79"),b=t("b6f8"),m=t("8e44"),p=t("b706"),h=t("90fe"),n=t("82d8");const i=t("6d13").a.global["t"];s={data(){return{t:i,utils:p.b,getLogo:h.d,getBit:h.c,toOne:!0,isBack:!1,price:"",activeName:"imputation",progress:10,imputationLoading:!1,gWei:5,gWeiList:[5,7,10,15,20],type:"",sendAddress:"",getAddressOne:"",getAddress:"",tableList:[],item1:{name:"BNB",symbol:"BNB",address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",balance:"",price:"",loading:!1}}},components:{Tokens:s.a},watch:{"currentNetwork.ChainID":{immediate:!0,handler(){var e=this.currentNetwork["Token"],t=e[0],e=e[1]||e[0];this.item1={...this.item1,...t},this.item2={...this.item2,...e},this.gWei=5*this.currentNetwork.GWEI,this.gWeiList=[5*this.currentNetwork.GWEI,7*this.currentNetwork.GWEI,10*this.currentNetwork.GWEI,15*this.currentNetwork.GWEI,20*this.currentNetwork.GWEI]}}},directives:{bit:{updated(e){e.value=e.value?Object(h.c)(e.value,5):""}}},computed:{...Object(n.c)(["currentNetwork","networkList","currentDex"]),hasLoading(){return!!this.tableList.find(e=>e.loading)}},methods:{...Object(n.b)(["setCurrentDex","setConnectDialog"]),showAddress(e){return"0x..."+e.slice(-4)},async imputationHandler(){this.imputationLoading=!0;const c=this.sendAddress.split("\n");let n,i=this.getAddress.split("\n"),l=!0;if(this.toOne)42!=this.getAddressOne.length&&(Object(m.a)({type:"error",title:"温馨提醒",message:"接收方账号错误，请检查"}),l=!1);else for(let e=0;e<i.length;e++){const c=i[e];if(42!=c.length){Object(m.a)({type:"error",title:"温馨提醒",message:`第${e}行账号错误，请检查`}),l=!1;break}}if(l){const r=[],d=[];for(let o=0;o<c.length;o++){const l=c[o];let e,t,s,a;try{e=window.wallet.getPrivateKeyProvider(l),a=window.wallet.initContract(this.item1.address,b,e),n=n||await a.decimals(),this.item1.address==this.currentNetwork.MainCoin.address?d.push(e.getBalance()):d.push(a.balanceOf(e.address))}catch(e){t=-1,s=e.data?e.data.message||e.message:e.reason||e.message}r.push({provider:e,getAddress:this.toOne?this.getAddressOne:i[o],balance:0,status:t,message:s,contract:a,decimals:n,loading:!1})}(await Promise.allSettled(d)).forEach((e,t)=>{"fulfilled"===e.status?(r[t].balance=Object(h.c)(p.b.formatUnits(e.value.toString(),n),6),r[t].status=0):(r[t].balance="",r[t].status=-1,r[t].message="余额查询失败")}),this.tableList=r,this.imputationLoading=!1,this.isBack=!0}},async imputationConfitm(){this.tableList.forEach(async(e,t)=>{0==(e=Object(g.toRaw)(e)).status&&(this.tableList[t].loading=!0,(this.item1.address==this.currentNetwork.MainCoin.address?e.provider.sendTransaction({from:e.provider.address,to:e.getAddress,value:p.b.parseUnits(this.price.toString(),18)}):e.contract.transfer(e.getAddress,p.b.parseUnits(this.price.toString(),e.decimals),{gasPrice:p.b.parseUnits(this.gWei.toString(),9),gasLimit:2e5})).then(e=>{e.wait().then(()=>{this.tableList[t].status=1,this.tableList[t].message="发送成功",this.tableList[t].loading=!1}).catch(e=>{this.tableList[t].status=0,this.tableList[t].message="发送失败",this.tableList[t].loading=!1})}).catch(e=>{this.tableList[t].status=0,this.tableList[t].message="发送失败",this.tableList[t].loading=!1}))})},tokenUpdate({name:e,symbol:t}){this.item1.name=e,this.item1.symbol=t},async tokenChange(e){this.item1=e},copyHandler(e){Object(c.a)(e),Object(m.a)({type:i("swap.success"),title:i("swap.success"),message:i("swap.copySuccess")})},toggleGwei(e){this.gWei=e},openTokensDialog(e){this.type=e,this.$refs.tokens.open()},loginFn(){this.setConnectDialog(!0)}}},t("7cab"),n=t("b3f2"),t=t.n(n)()(s,[["render",function(e,t,s,a,o,c){const n=Object(g.resolveComponent)("ArrowDown"),i=Object(g.resolveComponent)("el-icon"),l=Object(g.resolveComponent)("CopyDocument"),r=Object(g.resolveComponent)("el-switch"),d=Object(g.resolveComponent)("el-button"),b=Object(g.resolveComponent)("Loading"),m=Object(g.resolveComponent)("el-tag"),p=Object(g.resolveComponent)("Back"),h=Object(g.resolveComponent)("Tokens"),O=Object(g.resolveDirective)("lazy");return Object(g.openBlock)(),Object(g.createElementBlock)(g.Fragment,null,[Object(g.createElementVNode)("div",u,[Object(g.createElementVNode)("div",{class:Object(g.normalizeClass)(["wrapper-box",{back:o.isBack}])},[Object(g.createElementVNode)("div",j,[Object(g.createElementVNode)("div",k,[Object(g.createElementVNode)("div",w,[Object(g.createElementVNode)("div",f,[Object(g.createElementVNode)("div",{class:"flex-row-start align-center",onClick:t[0]||(t[0]=e=>c.openTokensDialog("item1"))},[Object(g.withDirectives)(Object(g.createElementVNode)("img",v,null,512),[[O,o.getLogo(o.item1.address)]]),Object(g.createElementVNode)("div",N,Object(g.toDisplayString)(o.item1.symbol),1),Object(g.createVNode)(i,{class:"ML-5"},{default:Object(g.withCtx)(()=>[Object(g.createVNode)(n)]),_:1})]),Object(g.createVNode)(i,{class:"ML-5",onClick:t[1]||(t[1]=e=>c.copyHandler(o.item1.address))},{default:Object(g.withCtx)(()=>[Object(g.createVNode)(l)]),_:1})]),Object(g.createElementVNode)("div",V,[Object(g.createTextVNode)(" 开启多对单"),Object(g.createVNode)(r,{modelValue:o.toOne,"onUpdate:modelValue":t[2]||(t[2]=e=>o.toOne=e),class:"ML-10"},null,8,["modelValue"])])])]),Object(g.withDirectives)(Object(g.createElementVNode)("textarea",{class:"imputation-textarea","onUpdate:modelValue":t[3]||(t[3]=e=>o.sendAddress=e),placeholder:"请输入发送方私钥，一行一个"},null,512),[[g.vModelText,o.sendAddress]]),x,o.toOne?Object(g.withDirectives)((Object(g.openBlock)(),Object(g.createElementBlock)("input",{key:1,type:"text",placeholder:"请输入接收方钱包地址","onUpdate:modelValue":t[5]||(t[5]=e=>o.getAddressOne=e),class:"imputation-input"},null,512)),[[g.vModelText,o.getAddressOne]]):Object(g.withDirectives)((Object(g.openBlock)(),Object(g.createElementBlock)("textarea",{key:0,class:"imputation-textarea","onUpdate:modelValue":t[4]||(t[4]=e=>o.getAddress=e),placeholder:"请输入接收方钱包地址，一行一个"},null,512)),[[g.vModelText,o.getAddress]]),Object(g.createVNode)(d,{class:"swap-btn MT-10",disabled:!o.sendAddress||!o.getAddress&&!o.getAddressOne,loading:o.imputationLoading,onClick:c.imputationHandler},{default:Object(g.withCtx)(()=>[Object(g.createTextVNode)("查询")]),_:1},8,["disabled","loading","onClick"])]),o.isBack?(Object(g.openBlock)(),Object(g.createElementBlock)("div",C,[Object(g.createElementVNode)("div",y,[Object(g.createElementVNode)("table",E,[Object(g.createElementVNode)("thead",null,[Object(g.createElementVNode)("tr",null,[T,B,Object(g.createElementVNode)("th",null,Object(g.toDisplayString)(o.item1.symbol)+"余额",1),_])]),Object(g.createElementVNode)("tbody",null,[(Object(g.openBlock)(!0),Object(g.createElementBlock)(g.Fragment,null,Object(g.renderList)(o.tableList,(e,t)=>(Object(g.openBlock)(),Object(g.createElementBlock)("tr",{key:t},[Object(g.createElementVNode)("td",null,Object(g.toDisplayString)(e.provider?c.showAddress(e.provider.address):"--"),1),Object(g.createElementVNode)("td",null,Object(g.toDisplayString)(e.getAddress?c.showAddress(e.getAddress):"--"),1),Object(g.createElementVNode)("td",null,Object(g.toDisplayString)(e.balance||"--"),1),Object(g.createElementVNode)("td",null,[e.loading?(Object(g.openBlock)(),Object(g.createBlock)(i,{key:0,class:"is-loading"},{default:Object(g.withCtx)(()=>[Object(g.createVNode)(b)]),_:1})):(Object(g.openBlock)(),Object(g.createElementBlock)(g.Fragment,{key:1},[Object(g.createTextVNode)(Object(g.toDisplayString)(e.message),1)],64))])]))),128))])])]),Object(g.createElementVNode)("div",L,[D,Object(g.createElementVNode)("div",I,[Object(g.withDirectives)(Object(g.createElementVNode)("input",{class:"text-right flex-1","onUpdate:modelValue":t[6]||(t[6]=e=>o.price=e),placeholder:"0.00"},null,512),[[g.vModelText,o.price]])])]),Object(g.createElementVNode)("div",S,[Object(g.createElementVNode)("div",A,[M,Object(g.createElementVNode)("div",U,[(Object(g.openBlock)(!0),Object(g.createElementBlock)(g.Fragment,null,Object(g.renderList)(o.gWeiList,t=>(Object(g.openBlock)(),Object(g.createBlock)(m,{class:"swap-slippage__select-tag",type:"success",effect:o.gWei==t?"dark":"light",onClick:e=>c.toggleGwei(t),key:t},{default:Object(g.withCtx)(()=>[Object(g.createTextVNode)(Object(g.toDisplayString)(t),1)]),_:2},1032,["effect","onClick"]))),128)),Object(g.withDirectives)(Object(g.createElementVNode)("input",{type:"number",class:"swap-slippage__select-input",placeholder:"5","onUpdate:modelValue":t[7]||(t[7]=e=>o.gWei=e)},null,512),[[g.vModelText,o.gWei,void 0,{number:!0}]])])])]),Object(g.createElementVNode)("div",W,[c.hasLoading?Object(g.createCommentVNode)("",!0):(Object(g.openBlock)(),Object(g.createBlock)(i,{key:0,size:40,class:"pointer",onClick:t[8]||(t[8]=e=>o.isBack=!1)},{default:Object(g.withCtx)(()=>[Object(g.createVNode)(p)]),_:1})),Object(g.createVNode)(d,{class:"flex-1 swap-btn ML-20",loading:c.hasLoading,disabled:!o.price,onClick:c.imputationConfitm},{default:Object(g.withCtx)(()=>[Object(g.createTextVNode)("确认")]),_:1},8,["loading","disabled","onClick"])])])):Object(g.createCommentVNode)("",!0)],2)]),Object(g.createVNode)(h,{ref:"tokens",onChange:c.tokenChange,onUpdate:c.tokenUpdate},null,8,["onChange","onUpdate"])],64)}],["__scopeId","data-v-4f28c44e"]]);e.a=t},"7cab":function(e,t,s){"use strict";s("0e96")},"7f2a":function(e,t,s){"use strict";s("febf")},c64b:function(e,t,s){"use strict";var b=s("b0c4");const m={class:"flex-column-start tokens-content"},p={class:"flex-row-start align-center"},h={class:"flex-h__1 tokens-list"},O={key:0,class:"tokens-list__import flex-row-start align-center PL-30 PR-30 PB-30 PT-30"},g={class:"flex-row-start flex-1 align-center"},u={class:"tokens-list__item-icon MR-10"},j={class:"tokens-list__import-name MR-10"},k={class:"tokens-list__import-desc"},w=["onClick"],f={class:"tokens-list__item-icon MR-10"},v={class:"flex-1"},N={class:"token-list__item-title"},V={class:"token-list__item-desc"},x={class:"token-list__item-price"};s("24b8");var a=s("b706"),o=s("90fe"),c=s("82d8"),c={name:"Tokens",data(){return{utils:a.b,getBit:o.c,getLogo:o.d,dialogVisible:!1,activeAddress:[],searchTxt:"",getTokens:[],importTokens:{},tokens:[],type:""}},computed:{...Object(c.c)(["currentNetwork"])},async mounted(){var{outputCurrency:e,inputCurrency:t}=this.$route.query;e&&42==e.length&&(this.type="item2",await this.getCurrencyInfo(e),this.importHandler()),t&&42==t.length&&(this.type="item1",await this.getCurrencyInfo(t),this.importHandler()),this.type=""},watch:{"currentNetwork.ChainID":{immediate:!0,handler(){var e=localStorage.getItem(this.currentNetwork.ChainID+"tokens");this.tokens=e?JSON.parse(e):this.currentNetwork.Token,this.getTokens=Object(b.toRaw)(this.tokens),this.getBalance()}},searchTxt(e){this.searchTxtChange(e)}},methods:{searchTxtChange(s){s||(this.getTokens=Object(b.toRaw)(this.tokens));var e=this.tokens.filter(e=>{var{name:e,address:t}=e;return!(!e.toLocaleLowerCase().includes(s.toLocaleLowerCase())&&!t.toLocaleLowerCase().includes(s.toLocaleLowerCase()))});this.importTokens={},this.getTokens=Object(b.toRaw)(e),e.length<=0&&42===s.length&&this.getCurrencyInfo(s)},fastImport(s,e=!0){s=s||this.searchTxt;const t=this.tokens.find(e=>e.address===s);if(t)this.selectHandler(t);else{this.importTokens={name:s.slice(0,6),symbol:s.slice(0,6),address:s,isAdd:!0},this.importHandler(e);const t=window.wallet.initContract(s),a=[t.name(),t.symbol()];Promise.all(a).then(([e,t])=>{this.updateTokenInfo(s,e,t)})}},updateTokenInfo(t,e,s){var a=this.tokens.findIndex(e=>e.address===t),a=(0<=a&&(this.tokens[a].name=e,this.tokens[a].symbol=s),this.getTokens.findIndex(e=>e.address===t));0<=a&&(this.getTokens[a].name=e,this.getTokens[a].symbol=s),this.$emit("update",{address:t,name:e,symbol:s}),localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))},removeTokens(e){const t=this.getTokens[e],s=this.tokens.findIndex(e=>t.address==e.address);this.tokens.splice(s,1),this.searchTxtChange(this.searchTxt),localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))},async getCurrencyInfo(a){var e=window.wallet.initContract(a),e=[e.name(),e.symbol(),e.decimals()];try{await Promise.all(e).then(([e,t,s])=>{this.importTokens={name:e,symbol:t,decimals:s,address:a,isAdd:!0}})}catch(e){Object(o.a)(e)}},async getBalance(){if(window.wallet.accounts[0]){let s=[];for(let e=0;e<this.getTokens.length;e++){var a=this.getTokens[e];let t;if(a.address===this.currentNetwork.MainCoin.address)t=window.wallet.provider.getBalance();else{const e=window.wallet.initContract(a.address);t=e.balanceOf(window.wallet.accounts[0])}s.push(t)}Promise.allSettled(s).then(e=>{e.forEach((e,t)=>{var{status:e,value:s}=e;this.getTokens[t].balance="fulfilled"===e?s:""})})}else for(let e=0;e<this.getTokens.length;e++)this.getTokens[e].balance=""},importHandler(e=!0){!this.tokens.find(e=>e.address===this.importTokens.address)&&e&&(this.tokens.push(this.importTokens),this.searchTxt="",localStorage.setItem(this.currentNetwork.ChainID+"tokens",JSON.stringify(this.tokens))),this.selectHandler(this.importTokens)},open(e){this.activeAddress=e,this.dialogVisible=!0,this.importTokens={},this.getBalance()},selectHandler(e){this.$emit("change",e,this.type),this.dialogVisible=!1,this.importTokens={}}}},n=(s("7f2a"),s("b3f2")),s=s.n(n)()(c,[["render",function(e,t,s,a,o,c){const n=Object(b.resolveComponent)("el-button"),i=Object(b.resolveComponent)("Close"),l=Object(b.resolveComponent)("el-icon"),r=Object(b.resolveComponent)("el-dialog"),d=Object(b.resolveDirective)("lazy");return Object(b.openBlock)(),Object(b.createBlock)(r,{modelValue:o.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>o.dialogVisible=e),title:e.$t("swap.selectToken"),width:"420px","custom-class":"tokens"},{default:Object(b.withCtx)(()=>[Object(b.createElementVNode)("div",m,[Object(b.createElementVNode)("div",p,[Object(b.withDirectives)(Object(b.createElementVNode)("input",{type:"text",class:"tokens-input flex-1","onUpdate:modelValue":t[0]||(t[0]=e=>o.searchTxt=e),placeholder:"Search name or paste address"},null,512),[[b.vModelText,o.searchTxt,void 0,{trim:!0}]]),Object(b.createVNode)(n,{class:"MR-20",onClick:t[1]||(t[1]=e=>c.fastImport()),disabled:!o.searchTxt||42!=o.searchTxt.length&&!o.importTokens.name},{default:Object(b.withCtx)(()=>[Object(b.createTextVNode)(Object(b.toDisplayString)(e.t("swap.fastImport")),1)]),_:1},8,["disabled"])]),Object(b.createElementVNode)("div",h,[o.importTokens.name?(Object(b.openBlock)(),Object(b.createElementBlock)("div",O,[Object(b.createElementVNode)("div",g,[Object(b.withDirectives)(Object(b.createElementVNode)("img",u,null,512),[[d,o.getLogo(o.importTokens.address)]]),Object(b.createElementVNode)("div",j,Object(b.toDisplayString)(o.importTokens.name),1),Object(b.createElementVNode)("div",k,Object(b.toDisplayString)(o.importTokens.symbol),1)]),Object(b.createVNode)(n,{class:"tokens-list__import-btn",onClick:c.importHandler},{default:Object(b.withCtx)(()=>[Object(b.createTextVNode)(Object(b.toDisplayString)(e.t("swap.import")),1)]),_:1},8,["onClick"])])):(Object(b.openBlock)(!0),Object(b.createElementBlock)(b.Fragment,{key:1},Object(b.renderList)(o.getTokens,(t,s)=>(Object(b.openBlock)(),Object(b.createElementBlock)("div",{class:"tokens-list__item pointer flex-row-start align-center pointer",key:t.address,onClick:e=>c.selectHandler(t)},[Object(b.withDirectives)(Object(b.createElementVNode)("img",f,null,512),[[d,o.getLogo(t.address)]]),Object(b.createElementVNode)("div",v,[Object(b.createElementVNode)("div",N,Object(b.toDisplayString)(t.name),1),Object(b.createElementVNode)("div",V,Object(b.toDisplayString)(t.symbol),1)]),Object(b.createElementVNode)("div",x,Object(b.toDisplayString)(t.balance?o.getBit(o.utils.formatUnits(t.balance,t.decimals||18),5):""),1),t.isAdd?(Object(b.openBlock)(),Object(b.createBlock)(l,{key:0,size:30,color:"#fff",class:"ML-10",onClick:Object(b.withModifiers)(e=>c.removeTokens(s),["stop"])},{default:Object(b.withCtx)(()=>[Object(b.createVNode)(i)]),_:2},1032,["onClick"])):Object(b.createCommentVNode)("",!0)],8,w))),128))])])]),_:1},8,["modelValue","title"])}]]);t.a=s},febf:function(e,t,s){}}]);