import{S as oe,i as ie,s as ce,k as E,w as L,a as q,l as T,m as D,x as O,h as $,c as A,n as w,b as Y,C as v,y as H,M as C,f as P,t as N,z as U,D as ue,N as de,o as me,q as B,r as F,O as X,F as x,u as he,P as R,Q as ge,R as _e,d as ve,T as pe,B as ye,g as ke}from"../../chunks/index-ec90233b.js";import{I as ee,A as we,P as te,H as $e}from"../../chunks/params-03c186fc.js";import{I as Q}from"../../chunks/Icon-1fb94c50.js";import{u as se,a as be}from"../../chunks/helpers-155f75b4.js";import{C as ze}from"../../chunks/CardLogo-20d530c1.js";function le(s,e,t){const a=s.slice();return a[16]=e[t],a}function ne(s){let e,t,a,c,l,r,f=s[16].name+"",n,p;return{c(){e=E("div"),t=E("img"),l=q(),r=E("span"),n=B(f),p=q(),this.h()},l(h){e=T(h,"DIV",{class:!0});var m=D(e);t=T(m,"IMG",{class:!0,src:!0,alt:!0}),l=A(m),r=T(m,"SPAN",{class:!0});var k=D(r);n=F(k,f),k.forEach($),p=A(m),m.forEach($),this.h()},h(){w(t,"class","carrousel-item-img svelte-3vng2z"),X(t.src,a=s[16].logo)||w(t,"src",a),w(t,"alt",c=s[16].name),x(t,"carrousel-item-img-inverted",s[16].inverted),w(r,"class","carrousel-item-label svelte-3vng2z"),w(e,"class","carrousel-item svelte-3vng2z")},m(h,m){Y(h,e,m),v(e,t),v(e,l),v(e,r),v(r,n),v(e,p)},p(h,m){m&1&&!X(t.src,a=h[16].logo)&&w(t,"src",a),m&1&&c!==(c=h[16].name)&&w(t,"alt",c),m&1&&x(t,"carrousel-item-img-inverted",h[16].inverted),m&1&&f!==(f=h[16].name+"")&&he(n,f)},d(h){h&&$(e)}}}function Ie(s){let e,t,a,c,l,r,f,n,p,h,m;a=new Q({props:{icon:ee.LeftArrow,size:"20px"}});let k=s[0],d=[];for(let o=0;o<k.length;o+=1)d[o]=ne(le(s,k,o));return n=new Q({props:{icon:ee.RightArrow,size:"20px"}}),{c(){e=E("div"),t=E("div"),L(a.$$.fragment),c=q(),l=E("div");for(let o=0;o<d.length;o+=1)d[o].c();r=q(),f=E("div"),L(n.$$.fragment),this.h()},l(o){e=T(o,"DIV",{class:!0});var b=D(e);t=T(b,"DIV",{class:!0});var g=D(t);O(a.$$.fragment,g),g.forEach($),c=A(b),l=T(b,"DIV",{class:!0});var z=D(l);for(let i=0;i<d.length;i+=1)d[i].l(z);z.forEach($),r=A(b),f=T(b,"DIV",{class:!0});var V=D(f);O(n.$$.fragment,V),V.forEach($),b.forEach($),this.h()},h(){w(t,"class","carrousel-btn svelte-3vng2z"),w(l,"class","carrousel-content svelte-3vng2z"),w(f,"class","carrousel-btn svelte-3vng2z"),w(e,"class","carrousel svelte-3vng2z")},m(o,b){Y(o,e,b),v(e,t),H(a,t,null),v(e,c),v(e,l);for(let g=0;g<d.length;g+=1)d[g].m(l,null);s[11](l),v(e,r),v(e,f),H(n,f,null),p=!0,h||(m=[C(t,"click",s[2]),C(t,"keyup",s[8]),C(t,"keydown",s[9]),C(t,"keypress",s[10]),C(f,"click",s[3]),C(f,"keyup",s[5]),C(f,"keydown",s[6]),C(f,"keypress",s[7])],h=!0)},p(o,[b]){if(b&1){k=o[0];let g;for(g=0;g<k.length;g+=1){const z=le(o,k,g);d[g]?d[g].p(z,b):(d[g]=ne(z),d[g].c(),d[g].m(l,null))}for(;g<d.length;g+=1)d[g].d(1);d.length=k.length}},i(o){p||(P(a.$$.fragment,o),P(n.$$.fragment,o),p=!0)},o(o){N(a.$$.fragment,o),N(n.$$.fragment,o),p=!1},d(o){o&&$(e),U(a),ue(d,o),s[11](null),U(n),h=!1,de(m)}}}const Ee=2e3;function Te(s,e,t){let{items:a=[]}=e,c,l,r=0,f=!0;const n=i=>{i?r<a.length-1?t(4,r=r+1):(t(4,r=r-1),f=!1):r>0?t(4,r=r-1):(t(4,r=r+1),f=!0)},p=i=>{clearTimeout(l),l=setTimeout(()=>{n(i),p(f)},Ee)},h=()=>{clearTimeout(l),f=!1,n(!1),p(f)},m=()=>{clearTimeout(l),f=!0,n(!0),p(f)};me(()=>{p(!0)});function k(i){R.call(this,s,i)}function d(i){R.call(this,s,i)}function o(i){R.call(this,s,i)}function b(i){R.call(this,s,i)}function g(i){R.call(this,s,i)}function z(i){R.call(this,s,i)}function V(i){ge[i?"unshift":"push"](()=>{c=i,t(1,c)})}return s.$$set=i=>{"items"in i&&t(0,a=i.items)},s.$$.update=()=>{s.$$.dirty&18&&c&&c.scroll({left:r*150,behavior:"smooth"})},[a,c,h,m,r,k,d,o,b,g,z,V]}class De extends oe{constructor(e){super(),ie(this,e,Te,Ie,ce,{items:0})}}const{document:K}=pe;function ae(s,e,t){const a=s.slice();return a[7]=e[t],a}function re(s){let e,t,a,c;return t=new Q({props:{icon:s[7].icon}}),{c(){e=E("a"),L(t.$$.fragment),a=q(),this.h()},l(l){e=T(l,"A",{class:!0,href:!0,target:!0,rel:!0});var r=D(e);O(t.$$.fragment,r),a=A(r),r.forEach($),this.h()},h(){w(e,"class","home-social-item svelte-86zq0l"),w(e,"href",s[7].to),w(e,"target","_blank"),w(e,"rel","noreferrer")},m(l,r){Y(l,e,r),H(t,e,null),v(e,a),c=!0},p:ye,i(l){c||(P(t.$$.fragment,l),c=!0)},o(l){N(t.$$.fragment,l),c=!1},d(l){l&&$(e),U(t)}}}function qe(s){let e,t,a,c,l,r,f,n,p,h=s[1].toUpperCase()+"",m,k,d,o,b,g,z,V,i,j;K.title=e=se(s[4],te),r=new ze({props:{alt:"logo",src:we.AE3,size:50,radius:"0"}});let G=s[5],y=[];for(let u=0;u<G.length;u+=1)y[u]=re(ae(s,G,u));const fe=u=>N(y[u],1,1,()=>{y[u]=null});return i=new De({props:{items:s[3]}}),{c(){t=q(),a=E("div"),c=E("div"),l=E("h1"),L(r.$$.fragment),f=q(),n=B(s[2]),p=q(),m=B(h),k=B(","),d=q(),o=E("p"),b=B(s[0]),g=q(),z=E("div");for(let u=0;u<y.length;u+=1)y[u].c();V=q(),L(i.$$.fragment),this.h()},l(u){_e("svelte-s4huv4",K.head).forEach($),t=A(u),a=T(u,"DIV",{class:!0});var _=D(a);c=T(_,"DIV",{class:!0});var S=D(c);l=T(S,"H1",{class:!0});var M=D(l);O(r.$$.fragment,M),f=A(M),n=F(M,s[2]),p=A(M),m=F(M,h),k=F(M,","),M.forEach($),d=A(S),o=T(S,"P",{class:!0});var J=D(o);b=F(J,s[0]),J.forEach($),g=A(S),z=T(S,"DIV",{class:!0});var W=D(z);for(let Z=0;Z<y.length;Z+=1)y[Z].l(W);W.forEach($),S.forEach($),V=A(_),O(i.$$.fragment,_),_.forEach($),this.h()},h(){w(l,"class","home-title svelte-86zq0l"),w(o,"class","home-subtitle svelte-86zq0l"),w(z,"class","home-social svelte-86zq0l"),w(c,"class","home-section svelte-86zq0l"),w(a,"class","home svelte-86zq0l")},m(u,I){Y(u,t,I),Y(u,a,I),v(a,c),v(c,l),H(r,l,null),v(l,f),v(l,n),v(l,p),v(l,m),v(l,k),v(c,d),v(c,o),v(o,b),v(c,g),v(c,z);for(let _=0;_<y.length;_+=1)y[_].m(z,null);v(a,V),H(i,a,null),j=!0},p(u,[I]){if((!j||I&16)&&e!==(e=se(u[4],te))&&(K.title=e),I&32){G=u[5];let _;for(_=0;_<G.length;_+=1){const S=ae(u,G,_);y[_]?(y[_].p(S,I),P(y[_],1)):(y[_]=re(S),y[_].c(),P(y[_],1),y[_].m(z,null))}for(ke(),_=G.length;_<y.length;_+=1)fe(_);ve()}},i(u){if(!j){P(r.$$.fragment,u);for(let I=0;I<G.length;I+=1)P(y[I]);P(i.$$.fragment,u),j=!0}},o(u){N(r.$$.fragment,u),y=y.filter(Boolean);for(let I=0;I<y.length;I+=1)N(y[I]);N(i.$$.fragment,u),j=!1},d(u){u&&$(t),u&&$(a),U(r),ue(y,u),U(i)}}}function Ae(s){(function(){var n=window.analytics=window.analytics||[];if(!n.initialize)if(n.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{n.invoked=!0,n.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],n.factory=function(m){return function(){if(window.analytics.initialized)return window.analytics[m].apply(window.analytics,arguments);var k=Array.prototype.slice.call(arguments);return k.unshift(m),n.push(k),n}};for(var p=0;p<n.methods.length;p++){var h=n.methods[p];n[h]=n.factory(h)}n.load=function(m,k){var d=document.createElement("script");d.type="text/javascript",d.async=!0,d.src="https://cdn.segment.com/analytics.js/v1/"+m+"/analytics.min.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(d,o),n._loadOptions=k},n._writeKey="YGhdZxwrYx0IG6Upf4gxzmGnFegnTcf6",n.SNIPPET_VERSION="4.16.1",n.load("YGhdZxwrYx0IG6Upf4gxzmGnFegnTcf6"),n.page()}})();const{description:e,lastName:t,links:a,name:c,skills:l,title:r}=$e,f=Object.keys(a).map(n=>{const p=a[n],h=be(n);return{to:p,title:h.title,icon:h.icon}});return[e,t,c,l,r,f]}class Me extends oe{constructor(e){super(),ie(this,e,Ae,qe,ce,{})}}export{Me as default};