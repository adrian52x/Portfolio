import{S as b,i as v,s as m,k as p,q as w,l as y,m as g,r as E,h as _,n as h,F as c,b as k,C as H,M as r,u as S,B as d,N as T,o as j,P as u,Q as B,G as F,H as G,I,J,f as N,t as Q}from"./index-45e0c1c1.js";function A(s){let e,i,o,a;return{c(){e=p("p"),i=w(s[0]),this.h()},l(t){e=y(t,"P",{class:!0,"data-size":!0});var l=g(e);i=E(l,s[0]),l.forEach(_),this.h()},h(){h(e,"class","chip svelte-1o1t2cv"),h(e,"data-size",s[3]),c(e,"chip-active",s[1]),c(e,"chip-hoverable",s[2])},m(t,l){k(t,e,l),H(e,i),s[9](e),o||(a=[r(e,"click",s[5]),r(e,"keydown",s[6]),r(e,"keypress",s[7]),r(e,"keyup",s[8])],o=!0)},p(t,[l]){l&1&&S(i,t[0]),l&8&&h(e,"data-size",t[3]),l&2&&c(e,"chip-active",t[1]),l&4&&c(e,"chip-hoverable",t[2])},i:d,o:d,d(t){t&&_(e),s[9](null),o=!1,T(a)}}}function D(s,e,i){let o,{label:a=""}=e,{active:t=!1}=e,{hoverable:l=!0}=e,{size:f="auto"}=e;j(()=>{o.style.setProperty("--size",f)});function z(n){u.call(this,s,n)}function C(n){u.call(this,s,n)}function M(n){u.call(this,s,n)}function P(n){u.call(this,s,n)}function q(n){B[n?"unshift":"push"](()=>{o=n,i(4,o)})}return s.$$set=n=>{"label"in n&&i(0,a=n.label),"active"in n&&i(1,t=n.active),"hoverable"in n&&i(2,l=n.hoverable),"size"in n&&i(3,f=n.size)},[a,t,l,f,o,z,C,M,P,q]}class R extends b{constructor(e){super(),v(this,e,D,A,m,{label:0,active:1,hoverable:2,size:3})}}function K(s){let e,i;const o=s[1].default,a=F(o,s,s[0],null);return{c(){e=p("h1"),a&&a.c(),this.h()},l(t){e=y(t,"H1",{class:!0});var l=g(e);a&&a.l(l),l.forEach(_),this.h()},h(){h(e,"class","svelte-1rdjc7s")},m(t,l){k(t,e,l),a&&a.m(e,null),i=!0},p(t,[l]){a&&a.p&&(!i||l&1)&&G(a,o,t,t[0],i?J(o,t[0],l,null):I(t[0]),null)},i(t){i||(N(a,t),i=!0)},o(t){Q(a,t),i=!1},d(t){t&&_(e),a&&a.d(t)}}}function L(s,e,i){let{$$slots:o={},$$scope:a}=e;return s.$$set=t=>{"$$scope"in t&&i(0,a=t.$$scope)},[a,o]}class U extends b{constructor(e){super(),v(this,e,L,K,m,{})}}export{R as C,U as M};
