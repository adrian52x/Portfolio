import{S,i as x,s as A,a as b,k as g,w as C,R as B,h as i,c as k,l as w,m as y,x as E,n as P,b as f,y as D,f as h,t as d,z as R,q as O,r as Y,B as T}from"../../../chunks/index-45e0c1c1.js";import{M as j,C as z}from"../../../chunks/MainTitle-2201a238.js";import{P as V,R as F}from"../../../chunks/params-5508276d.js";import{u as q}from"../../../chunks/helpers-390da873.js";function G(o){let e;return{c(){e=O(o[1])},l(s){e=Y(s,o[1])},m(s,l){f(s,e,l)},p:T,d(s){s&&i(e)}}}function H(o){let e,s;return e=new z({props:{label:"Ooops! no CV at the moment. You should input your cv link in $lib/Params.ts"}}),{c(){C(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,a){D(e,l,a),s=!0},p:T,i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){d(e.$$.fragment,l),s=!1},d(l){R(e,l)}}}function J(o){let e,s,l;return s=new z({props:{label:"Download",size:"1.25em"}}),{c(){e=g("a"),C(s.$$.fragment),this.h()},l(a){e=w(a,"A",{href:!0,class:!0});var n=y(e);E(s.$$.fragment,n),n.forEach(i),this.h()},h(){P(e,"href",o[0]),P(e,"class","svelte-wl30ce")},m(a,n){f(a,e,n),D(s,e,null),l=!0},p:T,i(a){l||(h(s.$$.fragment,a),l=!0)},o(a){d(s.$$.fragment,a),l=!1},d(a){a&&i(e),R(s)}}}function K(o){let e,s,l,a,n,$,c,m,u,_;document.title=e=q(o[1],V),n=new j({props:{$$slots:{default:[G]},$$scope:{ctx:o}}});const I=[J,H],v=[];function M(t,r){return t[0]?0:1}return m=M(o),u=v[m]=I[m](o),{c(){s=b(),l=g("div"),a=b(),C(n.$$.fragment),$=b(),c=g("div"),u.c(),this.h()},l(t){B("svelte-s4huv4",document.head).forEach(i),s=k(t),l=w(t,"DIV",{}),y(l).forEach(i),a=k(t),E(n.$$.fragment,t),$=k(t),c=w(t,"DIV",{class:!0});var p=y(c);u.l(p),p.forEach(i),this.h()},h(){P(c,"class","resume svelte-wl30ce")},m(t,r){f(t,s,r),f(t,l,r),f(t,a,r),D(n,t,r),f(t,$,r),f(t,c,r),v[m].m(c,null),_=!0},p(t,[r]){(!_||r&2)&&e!==(e=q(t[1],V))&&(document.title=e);const p={};r&4&&(p.$$scope={dirty:r,ctx:t}),n.$set(p),u.p(t,r)},i(t){_||(h(n.$$.fragment,t),h(u),_=!0)},o(t){d(n.$$.fragment,t),d(u),_=!1},d(t){t&&i(s),t&&i(l),t&&i(a),R(n,t),t&&i($),t&&i(c),v[m].d()}}}function L(o){const{cv:e,title:s}=F;return[e,s]}class X extends S{constructor(e){super(),x(this,e,L,K,A,{})}}export{X as default};
