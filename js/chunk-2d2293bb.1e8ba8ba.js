(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2293bb"],{dd27:function(r,n,t){var i;!function(){"use strict";var e,M=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,k=Math.ceil,G=Math.floor,F="[BigNumber Error] ",q=F+"Number primitive has more than 15 significant digits: ",j=1e14,$=14,z=9007199254740991,H=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],V=1e7,W=1e9;function J(e){var r=0|e;return 0<e||e===r?r:r-1}function X(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=$-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function Y(e,r){var n,t,i=e.c,o=r.c,s=e.s,u=r.s,e=e.e,r=r.e;if(!s||!u)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-u:s;if(s!=u)return s;if(n=s<0,t=e==r,!i||!o)return t?0:!i^n?1:-1;if(!t)return r<e^n?1:-1;for(u=(e=i.length)<(r=o.length)?e:r,s=0;s<u;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return e==r?0:r<e^n?1:-1}function Z(e,r,n,t){if(e<r||n<e||e!==G(e))throw Error(F+(t||"Argument")+("number"==typeof e?e<r||n<e?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function K(e){var r=e.c.length-1;return J(e.e/$)==r&&e.c[r]%2!=0}function Q(e,r){return(1<e.length?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function ee(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}(e=function C(e){var d,a,h,s,u,f,l,c,m,r,p,n=D.prototype={constructor:D,toString:null,valueOf:null},g=new D(1),v=20,N=4,w=-7,O=21,b=-1e7,y=1e7,E=!1,i=1,A=0,S={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},R="0123456789abcdefghijklmnopqrstuvwxyz",_=!0;function D(e,r){var n,t,i,o,s,u,f,l,c=this;if(!(c instanceof D))return new D(e,r);if(null==r){if(e&&!0===e._isBigNumber)return c.s=e.s,void(!e.c||e.e>y?c.c=c.e=null:e.e<b?c.c=[c.e=0]:(c.e=e.e,c.c=e.c.slice()));if((u="number"==typeof e)&&0*e==0){if(c.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,s=e;10<=s;s/=10,o++);return void(y<o?c.c=c.e=null:(c.e=o,c.c=[e]))}l=String(e)}else{if(!M.test(l=String(e)))return h(c,l,u);c.s=45==l.charCodeAt(0)?(l=l.slice(1),-1):1}0<(s=(l=-1<(o=l.indexOf("."))?l.replace(".",""):l).search(/e/i))?(o<0&&(o=s),o+=+l.slice(s+1),l=l.substring(0,s)):o<0&&(o=l.length)}else{if(Z(r,2,R.length,"Base"),10==r&&_)return B(c=new D(e),v+c.e+1,N);if(l=String(e),u="number"==typeof e){if(0*e!=0)return h(c,l,u,r);if(c.s=1/e<0?(l=l.slice(1),-1):1,D.DEBUG&&15<l.replace(/^0\.0*|\./,"").length)throw Error(q+e)}else c.s=45===l.charCodeAt(0)?(l=l.slice(1),-1):1;for(n=R.slice(0,r),o=s=0,f=l.length;s<f;s++)if(n.indexOf(t=l.charAt(s))<0){if("."==t){if(o<s){o=f;continue}}else if(!i&&(l==l.toUpperCase()&&(l=l.toLowerCase())||l==l.toLowerCase()&&(l=l.toUpperCase()))){i=!0,s=-1,o=0;continue}return h(c,String(e),u,r)}u=!1,-1<(o=(l=a(l,r,10,c.s)).indexOf("."))?l=l.replace(".",""):o=l.length}for(s=0;48===l.charCodeAt(s);s++);for(f=l.length;48===l.charCodeAt(--f););if(l=l.slice(s,++f)){if(f-=s,u&&D.DEBUG&&15<f&&(z<e||e!==G(e)))throw Error(q+c.s*e);if((o=o-s-1)>y)c.c=c.e=null;else if(o<b)c.c=[c.e=0];else{if(c.e=o,c.c=[],s=(o+1)%$,o<0&&(s+=$),s<f){for(s&&c.c.push(+l.slice(0,s)),f-=$;s<f;)c.c.push(+l.slice(s,s+=$));s=$-(l=l.slice(s)).length}else s-=f;for(;s--;l+="0");c.c.push(+l)}}else c.c=[c.e=0]}function t(e,r,n,t){var i,o,s,u;if(null==n?n=N:Z(n,0,8),!e.c)return e.toString();if(i=e.c[0],o=e.e,null==r)u=X(e.c),u=1==t||2==t&&(o<=w||O<=o)?Q(u,o):ee(u,o,"0");else if(n=(e=B(new D(e),r,n)).e,s=(u=X(e.c)).length,1==t||2==t&&(r<=n||n<=w)){for(;s<r;u+="0",s++);u=Q(u,n)}else if(r-=o,u=ee(u,n,"0"),s<n+1){if(0<--r)for(u+=".";r--;u+="0");}else if(0<(r+=n-s))for(n+1==s&&(u+=".");r--;u+="0");return e.s<0&&i?"-"+u:u}function o(e,r){for(var n,t=1,i=new D(e[0]);t<e.length;t++){if(!(n=new D(e[t])).s){i=n;break}r.call(i,n)&&(i=n)}return i}function P(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];10<=i;i/=10,t++);return(n=t+n*$-1)>y?e.c=e.e=null:n<b?e.c=[e.e=0]:(e.e=n,e.c=r),e}function B(e,r,n,t){var i,o,s,u,f,l,c,a=e.c,h=H;if(a){e:{for(i=1,u=a[0];10<=u;u/=10,i++);if((o=r-i)<0)o+=$,s=r,c=(f=a[l=0])/h[i-s-1]%10|0;else if((l=k((o+1)/$))>=a.length){if(!t)break e;for(;a.length<=l;a.push(0));f=c=0,s=(o%=$)-$+(i=1)}else{for(f=u=a[l],i=1;10<=u;u/=10,i++);c=(s=(o%=$)-$+i)<0?0:f/h[i-s-1]%10|0}if(t=t||r<0||null!=a[l+1]||(s<0?f:f%h[i-s-1]),t=n<4?(c||t)&&(0==n||n==(e.s<0?3:2)):5<c||5==c&&(4==n||t||6==n&&(0<o?0<s?f/h[i-s]:0:a[l-1])%10&1||n==(e.s<0?8:7)),r<1||!a[0])return a.length=0,t?(r-=e.e+1,a[0]=h[($-r%$)%$],e.e=-r||0):a[0]=e.e=0,e;if(0==o?(a.length=l,u=1,l--):(a.length=l+1,u=h[$-o],a[l]=0<s?G(f/h[i-s]%h[s])*u:0),t)for(;;){if(0==l){for(o=1,s=a[0];10<=s;s/=10,o++);for(s=a[0]+=u,u=1;10<=s;s/=10,u++);o!=u&&(e.e++,a[0]==j)&&(a[0]=1);break}if(a[l]+=u,a[l]!=j)break;a[l--]=0,u=1}for(o=a.length;0===a[--o];a.pop());}e.e>y?e.c=e.e=null:e.e<b&&(e.c=[e.e=0])}return e}function L(e){var r,n=e.e;return null===n?e.toString():(r=X(e.c),r=n<=w||O<=n?Q(r,n):ee(r,n,"0"),e.s<0?"-"+r:r)}return D.clone=C,D.ROUND_UP=0,D.ROUND_DOWN=1,D.ROUND_CEIL=2,D.ROUND_FLOOR=3,D.ROUND_HALF_UP=4,D.ROUND_HALF_DOWN=5,D.ROUND_HALF_EVEN=6,D.ROUND_HALF_CEIL=7,D.ROUND_HALF_FLOOR=8,D.EUCLID=9,D.config=D.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(F+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(Z(n=e[r],0,W,r),v=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(Z(n=e[r],0,8,r),N=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(Z(n[0],-W,0,r),Z(n[1],0,W,r),w=n[0],O=n[1]):(Z(n,-W,W,r),w=-(O=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)Z(n[0],-W,-1,r),Z(n[1],1,W,r),b=n[0],y=n[1];else{if(Z(n,-W,W,r),!n)throw Error(F+r+" cannot be zero: "+n);b=-(y=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(F+r+" not true or false: "+n);if(n&&("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes))throw E=!n,Error(F+"crypto unavailable");E=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(Z(n=e[r],0,9,r),i=n),e.hasOwnProperty(r="POW_PRECISION")&&(Z(n=e[r],0,W,r),A=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(F+r+" not an object: "+n);S=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(F+r+" invalid: "+n);_="0123456789"==n.slice(0,10),R=n}}return{DECIMAL_PLACES:v,ROUNDING_MODE:N,EXPONENTIAL_AT:[w,O],RANGE:[b,y],CRYPTO:E,MODULO_MODE:i,POW_PRECISION:A,FORMAT:S,ALPHABET:R}},D.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!D.DEBUG)return!0;var r,n,t=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===o||-1===o)&&-W<=i&&i<=W&&i===G(i))if(0===t[0]){if(0===i&&1===t.length)return!0}else if((r=(i+1)%$)<1&&(r+=$),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||j<=n||n!==G(n))break e;if(0!==n)return!0}}else if(null===t&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(F+"Invalid BigNumber: "+e)},D.maximum=D.max=function(){return o(arguments,n.lt)},D.minimum=D.min=function(){return o(arguments,n.gt)},D.random=(r=9007199254740992,p=Math.random()*r&2097151?function(){return G(Math.random()*r)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,n,t,i,o,s=0,u=[],f=new D(g);if(null==e?e=v:Z(e,0,W),i=k(e/$),E)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(i*=2));s<i;)9e15<=(o=131072*r[s]+(r[s+1]>>>11))?(n=crypto.getRandomValues(new Uint32Array(2)),r[s]=n[0],r[s+1]=n[1]):(u.push(o%1e14),s+=2);s=i/2}else{if(!crypto.randomBytes)throw E=!1,Error(F+"crypto unavailable");for(r=crypto.randomBytes(i*=7);s<i;)9e15<=(o=281474976710656*(31&r[s])+1099511627776*r[s+1]+4294967296*r[s+2]+16777216*r[s+3]+(r[s+4]<<16)+(r[s+5]<<8)+r[s+6])?crypto.randomBytes(7).copy(r,s):(u.push(o%1e14),s+=7);s=i/7}if(!E)for(;s<i;)(o=p())<9e15&&(u[s++]=o%1e14);for(i=u[--s],e%=$,i&&e&&(u[s]=G(i/(o=H[$-e]))*o);0===u[s];u.pop(),s--);if(s<0)u=[t=0];else{for(t=-1;0===u[0];u.splice(0,1),t-=$);for(s=1,o=u[0];10<=o;o/=10,s++);s<$&&(t-=$-s)}return f.e=t,f.c=u,f}),D.sum=function(){for(var e=1,r=arguments,n=new D(r[0]);e<r.length;)n=n.plus(r[e++]);return n},m="0123456789",a=function(e,r,n,t,i){var o,s,u,f,l,c,a,h,p=e.indexOf("."),g=v,w=N;for(0<=p&&(f=A,A=0,e=e.replace(".",""),c=(h=new D(r)).pow(e.length-p),A=f,h.c=T(ee(X(c.c),c.e,"0"),10,n,m),h.e=h.c.length),u=f=(a=T(e,r,n,i?(o=R,m):(o=m,R))).length;0==a[--f];a.pop());if(!a[0])return o.charAt(0);if(p<0?--u:(c.c=a,c.e=u,c.s=t,a=(c=d(c,h,g,w,n)).c,l=c.r,u=c.e),p=a[s=u+g+1],f=n/2,l=l||s<0||null!=a[s+1],l=w<4?(null!=p||l)&&(0==w||w==(c.s<0?3:2)):f<p||p==f&&(4==w||l||6==w&&1&a[s-1]||w==(c.s<0?8:7)),s<1||!a[0])e=l?ee(o.charAt(1),-g,o.charAt(0)):o.charAt(0);else{if(a.length=s,l)for(--n;++a[--s]>n;)a[s]=0,s||(++u,a=[1].concat(a));for(f=a.length;!a[--f];);for(p=0,e="";p<=f;e+=o.charAt(a[p++]));e=ee(e,u,o.charAt(0))}return e},d=function(e,r,n,t,i){var o,s,u,f,l,c,a,h,p,g,w,d,m,v,N,O,b,y=e.s==r.s?1:-1,E=e.c,A=r.c;if(!(E&&E[0]&&A&&A[0]))return new D(e.s&&r.s&&(E?!A||E[0]!=A[0]:A)?E&&0==E[0]||!A?0*y:y/0:NaN);for(p=(h=new D(y)).c=[],y=n+(s=e.e-r.e)+1,i||(i=j,s=J(e.e/$)-J(r.e/$),y=y/$|0),u=0;A[u]==(E[u]||0);u++);if(A[u]>(E[u]||0)&&s--,y<0)p.push(1),f=!0;else{for(v=E.length,O=A.length,y+=2,1<(l=G(i/(A[u=0]+1)))&&(A=x(A,l,i),E=x(E,l,i),O=A.length,v=E.length),m=O,w=(g=E.slice(0,O)).length;w<O;g[w++]=0);b=A.slice(),b=[0].concat(b),N=A[0],A[1]>=i/2&&N++;do{if(l=0,(o=U(A,g,O,w))<0){if(d=g[0],O!=w&&(d=d*i+(g[1]||0)),1<(l=G(d/N)))for(a=(c=x(A,l=i<=l?i-1:l,i)).length,w=g.length;1==U(c,g,a,w);)l--,I(c,O<a?b:A,a,i),a=c.length,o=1;else 0==l&&(o=l=1),a=(c=A.slice()).length;if(I(g,c=a<w?[0].concat(c):c,w,i),w=g.length,-1==o)for(;U(A,g,O,w)<1;)l++,I(g,O<w?b:A,w,i),w=g.length}else 0===o&&(l++,g=[0])}while(p[u++]=l,g[0]?g[w++]=E[m]||0:(g=[E[m]],w=1),(m++<v||null!=g[0])&&y--);f=null!=g[0],p[0]||p.splice(0,1)}if(i==j){for(u=1,y=p[0];10<=y;y/=10,u++);B(h,n+(h.e=u+s*$-1)+1,t,f)}else h.e=s,h.r=+f;return h},s=/^(-?)0([xbo])(?=\w[\w.]*$)/i,u=/^([^.]+)\.$/,f=/^\.([^.]+)$/,l=/^-?(Infinity|NaN)$/,c=/^\s*\+(?=[\w.])|^\s+|\s+$/g,h=function(e,r,n,t){var i,o=n?r:r.replace(c,"");if(l.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!n&&(o=o.replace(s,function(e,r,n){return i="x"==(n=n.toLowerCase())?16:"b"==n?2:8,t&&t!=i?e:r}),t&&(i=t,o=o.replace(u,"$1").replace(f,"0.$1")),r!=o))return new D(o,i);if(D.DEBUG)throw Error(F+"Not a"+(t?" base "+t:"")+" number: "+r);e.s=null}e.c=e.e=null},n.absoluteValue=n.abs=function(){var e=new D(this);return e.s<0&&(e.s=1),e},n.comparedTo=function(e,r){return Y(this,new D(e,r))},n.decimalPlaces=n.dp=function(e,r){var n,t;if(null!=e)return Z(e,0,W),null==r?r=N:Z(r,0,8),B(new D(this),e+this.e+1,r);if(!(e=this.c))return null;if(n=((t=e.length-1)-J(this.e/$))*$,t=e[t])for(;t%10==0;t/=10,n--);return n=n<0?0:n},n.dividedBy=n.div=function(e,r){return d(this,new D(e,r),v,N)},n.dividedToIntegerBy=n.idiv=function(e,r){return d(this,new D(e,r),0,1)},n.exponentiatedBy=n.pow=function(e,r){var n,t,i,o,s,u,f,l,c=this;if((e=new D(e)).c&&!e.isInteger())throw Error(F+"Exponent not an integer: "+L(e));if(null!=r&&(r=new D(r)),s=14<e.e,!c.c||!c.c[0]||1==c.c[0]&&!c.e&&1==c.c.length||!e.c||!e.c[0])return l=new D(Math.pow(+L(c),s?2-K(e):+L(e))),r?l.mod(r):l;if(u=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new D(NaN);(t=!u&&c.isInteger()&&r.isInteger())&&(c=c.mod(r))}else{if(9<e.e&&(0<c.e||c.e<-1||(0==c.e?1<c.c[0]||s&&24e7<=c.c[1]:c.c[0]<8e13||s&&c.c[0]<=9999975e7)))return o=c.s<0&&K(e)?-0:0,-1<c.e&&(o=1/o),new D(u?1/o:o);A&&(o=k(A/$+2))}for(f=s?(n=new D(.5),u&&(e.s=1),K(e)):(i=Math.abs(+L(e)))%2,l=new D(g);;){if(f){if(!(l=l.times(c)).c)break;o?l.c.length>o&&(l.c.length=o):t&&(l=l.mod(r))}if(i){if(0===(i=G(i/2)))break;f=i%2}else if(B(e=e.times(n),e.e+1,1),14<e.e)f=K(e);else{if(0==(i=+L(e)))break;f=i%2}c=c.times(c),o?c.c&&c.c.length>o&&(c.c.length=o):t&&(c=c.mod(r))}return t?l:(u&&(l=g.div(l)),r?l.mod(r):o?B(l,A,N,void 0):l)},n.integerValue=function(e){var r=new D(this);return null==e?e=N:Z(e,0,8),B(r,r.e+1,e)},n.isEqualTo=n.eq=function(e,r){return 0===Y(this,new D(e,r))},n.isFinite=function(){return!!this.c},n.isGreaterThan=n.gt=function(e,r){return 0<Y(this,new D(e,r))},n.isGreaterThanOrEqualTo=n.gte=function(e,r){return 1===(r=Y(this,new D(e,r)))||0===r},n.isInteger=function(){return!!this.c&&J(this.e/$)>this.c.length-2},n.isLessThan=n.lt=function(e,r){return Y(this,new D(e,r))<0},n.isLessThanOrEqualTo=n.lte=function(e,r){return-1===(r=Y(this,new D(e,r)))||0===r},n.isNaN=function(){return!this.s},n.isNegative=function(){return this.s<0},n.isPositive=function(){return 0<this.s},n.isZero=function(){return!!this.c&&0==this.c[0]},n.minus=function(e,r){var n,t,i,o,s=this,u=s.s;if(r=(e=new D(e,r)).s,!u||!r)return new D(NaN);if(u!=r)return e.s=-r,s.plus(e);var f=s.e/$,l=e.e/$,c=s.c,a=e.c;if(!f||!l){if(!c||!a)return c?(e.s=-r,e):new D(a?s:NaN);if(!c[0]||!a[0])return a[0]?(e.s=-r,e):new D(c[0]?s:3==N?-0:0)}if(f=J(f),l=J(l),c=c.slice(),u=f-l){for((i=(o=u<0)?(u=-u,c):(l=f,a)).reverse(),r=u;r--;i.push(0));i.reverse()}else for(t=(o=(u=c.length)<(r=a.length))?u:r,u=r=0;r<t;r++)if(c[r]!=a[r]){o=c[r]<a[r];break}if(o&&(i=c,c=a,a=i,e.s=-e.s),0<(r=(t=a.length)-(n=c.length)))for(;r--;c[n++]=0);for(r=j-1;u<t;){if(c[--t]<a[t]){for(n=t;n&&!c[--n];c[n]=r);--c[n],c[t]+=j}c[t]-=a[t]}for(;0==c[0];c.splice(0,1),--l);return c[0]?P(e,c,l):(e.s=3==N?-1:1,e.c=[e.e=0],e)},n.modulo=n.mod=function(e,r){var n,t=this;return e=new D(e,r),!t.c||!e.s||e.c&&!e.c[0]?new D(NaN):!e.c||t.c&&!t.c[0]?new D(t):(9==i?(r=e.s,e.s=1,n=d(t,e,0,3),e.s=r,n.s*=r):n=d(t,e,0,i),(e=t.minus(n.times(e))).c[0]||1!=i||(e.s=t.s),e)},n.multipliedBy=n.times=function(e,r){var n,t,i,o,s,u,f,l,c,a,h,p=this,g=p.c,w=(e=new D(e,r)).c;if(!(g&&w&&g[0]&&w[0]))return!p.s||!e.s||g&&!g[0]&&!w||w&&!w[0]&&!g?e.c=e.e=e.s=null:(e.s*=p.s,g&&w?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=J(p.e/$)+J(e.e/$),e.s*=p.s,(u=g.length)<(p=w.length)&&(h=g,g=w,w=h,t=u,u=p,p=t),t=u+p,h=[];t--;h.push(0));for(t=p;0<=--t;){for(c=w[t]%1e7,a=w[t]/1e7|(n=0),i=t+(o=u);t<i;)n=((f=c*(f=g[--o]%1e7)+(s=a*f+(l=g[o]/1e7|0)*c)%1e7*1e7+h[i]+n)/1e14|0)+(s/1e7|0)+a*l,h[i--]=f%1e14;h[i]=n}return n?++r:h.splice(0,1),P(e,h,r)},n.negated=function(){var e=new D(this);return e.s=-e.s||null,e},n.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new D(e,r)).s,!i||!r)return new D(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/$,s=e.e/$,u=t.c,f=e.c;if(!o||!s){if(!u||!f)return new D(i/0);if(!u[0]||!f[0])return f[0]?e:new D(u[0]?t:0*i)}if(o=J(o),s=J(s),u=u.slice(),i=o-s){for((n=0<i?(s=o,f):(i=-i,u)).reverse();i--;n.push(0));n.reverse()}for((i=u.length)-(r=f.length)<0&&(n=f,f=u,u=n,r=i),i=0;r;)i=(u[--r]=u[r]+f[r]+i)/j|0,u[r]=j===u[r]?0:u[r]%j;return i&&(u=[i].concat(u),++s),P(e,u,s)},n.precision=n.sd=function(e,r){var n,t;if(null!=e&&e!==!!e)return Z(e,1,W),null==r?r=N:Z(r,0,8),B(new D(this),e,r);if(!(r=this.c))return null;if(n=(t=r.length-1)*$+1,t=r[t]){for(;t%10==0;t/=10,n--);for(t=r[0];10<=t;t/=10,n++);}return n=e&&this.e+1>n?this.e+1:n},n.shiftedBy=function(e){return Z(e,-z,z),this.times("1e"+e)},n.squareRoot=n.sqrt=function(){var e,r,n,t,i,o=this,s=o.c,u=o.s,f=o.e,l=v+4,c=new D("0.5");if(1!==u||!s||!s[0])return new D(!u||u<0&&(!s||s[0])?NaN:s?o:1/0);if((n=0==(u=Math.sqrt(+L(o)))||u==1/0?(((r=X(s)).length+f)%2==0&&(r+="0"),u=Math.sqrt(+r),f=J((f+1)/2)-(f<0||f%2),new D(r=u==1/0?"5e"+f:(r=u.toExponential()).slice(0,r.indexOf("e")+1)+f)):new D(u+"")).c[0])for((u=(f=n.e)+l)<3&&(u=0);;)if(i=n,n=c.times(i.plus(d(o,i,l,1))),X(i.c).slice(0,u)===(r=X(n.c)).slice(0,u)){if(n.e<f&&--u,"9999"!=(r=r.slice(u-3,u+1))&&(t||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(B(n,n.e+v+2,1),e=!n.times(n).eq(o));break}if(!t&&(B(i,i.e+v+2,0),i.times(i).eq(o))){n=i;break}l+=4,u+=4,t=1}return B(n,n.e+v+1,N,e)},n.toExponential=function(e,r){return null!=e&&(Z(e,0,W),e++),t(this,e,r,1)},n.toFixed=function(e,r){return null!=e&&(Z(e,0,W),e=e+this.e+1),t(this,e,r)},n.toFormat=function(e,r,n){if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=S;else if("object"!=typeof n)throw Error(F+"Argument not an object: "+n);if(e=this.toFixed(e,r),this.c){var t,r=e.split("."),i=+n.groupSize,o=+n.secondaryGroupSize,s=n.groupSeparator||"",u=r[0],r=r[1],f=this.s<0,l=f?u.slice(1):u,c=l.length;if(o&&(t=i,i=o,c-=o=t),0<i&&0<c){for(u=l.substr(0,t=c%i||i);t<c;t+=i)u+=s+l.substr(t,i);0<o&&(u+=s+l.slice(t)),f&&(u="-"+u)}e=r?u+(n.decimalSeparator||"")+((o=+n.fractionGroupSize)?r.replace(new RegExp("\\d{"+o+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):r):u}return(n.prefix||"")+e+(n.suffix||"")},n.toFraction=function(e){var r,n,t,i,o,s,u,f,l,c,a=this,h=a.c;if(null!=e&&(!(u=new D(e)).isInteger()&&(u.c||1!==u.s)||u.lt(g)))throw Error(F+"Argument "+(u.isInteger()?"out of range: ":"not an integer: ")+L(u));if(!h)return new D(a);for(r=new D(g),l=n=new D(g),t=f=new D(g),h=X(h),o=r.e=h.length-a.e-1,r.c[0]=H[(s=o%$)<0?$+s:s],e=!e||0<u.comparedTo(r)?0<o?r:l:u,s=y,y=1/0,u=new D(h),f.c[0]=0;c=d(u,r,0,1),1!=(i=n.plus(c.times(t))).comparedTo(e);)n=t,t=i,l=f.plus(c.times(i=l)),f=i,r=u.minus(c.times(i=r)),u=i;return i=d(e.minus(n),t,0,1),f=f.plus(i.times(l)),n=n.plus(i.times(t)),f.s=l.s=a.s,h=d(l,t,o*=2,N).minus(a).abs().comparedTo(d(f,n,o,N).minus(a).abs())<1?[l,t]:[f,n],y=s,h},n.toNumber=function(){return+L(this)},n.toPrecision=function(e,r){return null!=e&&Z(e,1,W),t(this,e,r,2)},n.toString=function(e){var r,n=this,t=n.s,i=n.e;return null===i?t?(r="Infinity",t<0&&(r="-"+r)):r="NaN":(r=null==e?i<=w||O<=i?Q(X(n.c),i):ee(X(n.c),i,"0"):10===e&&_?ee(X((n=B(new D(n),v+i+1,N)).c),n.e,"0"):(Z(e,2,R.length,"Base"),a(ee(X(n.c),i,"0"),10,e,t,!0)),t<0&&n.c[0]&&(r="-"+r)),r},n.valueOf=n.toJSON=function(){return L(this)},n._isBigNumber=!0,null!=e&&D.set(e),D;function x(e,r,n){var t,i,o,s=0,u=e.length,f=r%V,l=r/V|0;for(e=e.slice();u--;)s=((i=f*(o=e[u]%V)+(t=l*o+(o=e[u]/V|0)*f)%V*V+s)/n|0)+(t/V|0)+l*o,e[u]=i%n;return e=s?[s].concat(e):e}function U(e,r,n,t){var i,o;if(n!=t)o=t<n?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function I(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&1<e.length;e.splice(0,1));}function T(e,r,n,t){for(var i,o,s=[0],u=0,f=e.length;u<f;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(u++)),i=0;i<s.length;i++)n-1<s[i]&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}}()).default=e.BigNumber=e,void 0!==(i=function(){return e}.call(n,t,n,r))&&(r.exports=i)}()}}]);