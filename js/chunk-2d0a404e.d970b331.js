(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a404e"],{"053f":function(e,t,a){"use strict";a.r(t);var c=a("33a9");const n={class:"tool"};function o(e,t){const a=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createVNode"])(a,{onClick:e.test,loading:e.loading},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("测试")]),_:1},8,["onClick","loading"])])}var i=a("b6f8"),d=a("1630"),s=a("90fe"),l=a("8e44"),r={data(){return{loading:!1}},mounted(){},methods:{async test(){this.loading=!0;try{const e=window.wallet.getPrivateKeyProvider("3fd373bfa7d9a872b38da691901a25a4503e32e284c37e997f9436a2cd01c420"),t=window.wallet.initContract("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",i,e),a=await t.decimals(),c=await t.transfer("0x6522a28e1071C26aA5694f5b28BF06a6a2bbcb8c",d["b"].parseUnits("0.1",a));c.wait(),Object(l["a"])({type:"success",title:"交易成功",message:"交易成功"})}catch(e){Object(s["a"])(e)}this.loading=!1}}};r.render=o;t["default"]=r}}]);
//# sourceMappingURL=chunk-2d0a404e.d970b331.js.map