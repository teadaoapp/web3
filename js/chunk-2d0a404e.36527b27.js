(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a404e"],{"053f":function(e,t,a){"use strict";a.r(t);var c=a("3eb2");const n={class:"tool"},o=Object(c["createTextVNode"])("测试");function d(e,t,a,d,i,s){const l=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createVNode"])(l,{onClick:s.test,loading:i.loading},{default:Object(c["withCtx"])(()=>[o]),_:1},8,["onClick","loading"])])}var i=a("b6f8"),s=a("e5da"),l=a("90fe"),r=a("4d90"),b={data(){return{loading:!1}},mounted(){},methods:{async test(){this.loading=!0;try{const e=window.wallet.getPrivateKeyProvider("3fd373bfa7d9a872b38da691901a25a4503e32e284c37e997f9436a2cd01c420"),t=window.wallet.initContract("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",i,e),a=await t.decimals(),c=await t.transfer("0x6522a28e1071C26aA5694f5b28BF06a6a2bbcb8c",s["b"].parseUnits("0.1",a));c.wait(),Object(r["a"])({type:"success",title:"交易成功",message:"交易成功"})}catch(e){Object(l["a"])(e)}this.loading=!1}}},w=a("6dd4"),f=a.n(w);const u=f()(b,[["render",d]]);t["default"]=u}}]);
//# sourceMappingURL=chunk-2d0a404e.36527b27.js.map