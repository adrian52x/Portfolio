import{S as D,i as w,s as A,k as h,l as v,m as d,h as f,n as _,b,C as p,f as m,g as B,d as C,t as $,D as H,E as J,w as S,a as I,q as M,x as V,c as E,r as P,F as x,y as q,z,G as F,H as G,I as L,J as R}from"../../chunks/index-45e0c1c1.js";import{I as K}from"../../chunks/Icon-22eb0d74.js";import{N as g,I as y}from"../../chunks/params-255e2385.js";import{p as O}from"../../chunks/stores-6dd3ef7b.js";import{j as Q}from"../../chunks/singletons-1853b892.js";function j(c,t,l){const o=c.slice();return o[3]=t[l],o}function k(c){let t,l,o,r,s=c[3].title+"",i,e,a;return l=new K({props:{icon:c[3].icon,size:"20px"}}),{c(){t=h("a"),S(l.$$.fragment),o=I(),r=h("span"),i=M(s),e=I(),this.h()},l(n){t=v(n,"A",{href:!0,class:!0});var u=d(t);V(l.$$.fragment,u),o=E(u),r=v(u,"SPAN",{class:!0});var N=d(r);i=P(N,s),N.forEach(f),e=E(u),u.forEach(f),this.h()},h(){_(r,"class","nav-menu-item-label svelte-12x85n5"),_(t,"href",`${Q}${c[3].to}`),_(t,"class","nav-menu-item svelte-12x85n5"),x(t,"nav-menu-item-active",c[0]===c[3].to)},m(n,u){b(n,t,u),q(l,t,null),p(t,o),p(t,r),p(r,i),p(t,e),a=!0},p(n,u){(!a||u&3)&&x(t,"nav-menu-item-active",n[0]===n[3].to)},i(n){a||(m(l.$$.fragment,n),a=!0)},o(n){$(l.$$.fragment,n),a=!1},d(n){n&&f(t),z(l)}}}function T(c){let t,l,o,r=c[1],s=[];for(let e=0;e<r.length;e+=1)s[e]=k(j(c,r,e));const i=e=>$(s[e],1,1,()=>{s[e]=null});return{c(){t=h("div"),l=h("nav");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=v(e,"DIV",{class:!0});var a=d(t);l=v(a,"NAV",{class:!0});var n=d(l);for(let u=0;u<s.length;u+=1)s[u].l(n);n.forEach(f),a.forEach(f),this.h()},h(){_(l,"class","container svelte-12x85n5"),_(t,"class","nav-menu svelte-12x85n5")},m(e,a){b(e,t,a),p(t,l);for(let n=0;n<s.length;n+=1)s[n].m(l,null);o=!0},p(e,[a]){if(a&3){r=e[1];let n;for(n=0;n<r.length;n+=1){const u=j(e,r,n);s[n]?(s[n].p(u,a),m(s[n],1)):(s[n]=k(u),s[n].c(),m(s[n],1),s[n].m(l,null))}for(B(),n=r.length;n<s.length;n+=1)i(n);C()}},i(e){if(!o){for(let a=0;a<r.length;a+=1)m(s[a]);o=!0}},o(e){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)$(s[a]);o=!1},d(e){e&&f(t),H(s,e)}}}function U(c,t,l){let o;J(c,O,i=>l(2,o=i));let r="/";const s=[{title:g.home,to:"/",icon:y.Home},{title:g.personal,to:"/projects",icon:y.Projects},{title:g.career,to:"/experience",icon:y.Job},{title:g.docs,to:"/docs",icon:y.Docs}];return c.$$.update=()=>{c.$$.dirty&4&&o&&l(0,r=o.url.pathname)},[r,s,o]}class W extends D{constructor(t){super(),w(this,t,U,T,A,{})}}function X(c){let t,l,o,r;t=new W({});const s=c[2].default,i=F(s,c,c[1],null);return{c(){S(t.$$.fragment),l=I(),o=h("div"),i&&i.c(),this.h()},l(e){V(t.$$.fragment,e),l=E(e),o=v(e,"DIV",{class:!0});var a=d(o);i&&i.l(a),a.forEach(f),this.h()},h(){_(o,"class","content container svelte-rj4n6f")},m(e,a){q(t,e,a),b(e,l,a),b(e,o,a),i&&i.m(o,null),r=!0},p(e,[a]){i&&i.p&&(!r||a&2)&&G(i,s,e,e[1],r?R(s,e[1],a,null):L(e[1]),null)},i(e){r||(m(t.$$.fragment,e),m(i,e),r=!0)},o(e){$(t.$$.fragment,e),$(i,e),r=!1},d(e){z(t,e),e&&f(l),e&&f(o),i&&i.d(e)}}}function Y(c,t,l){let{$$slots:o={},$$scope:r}=t;const s=!0;return c.$$set=i=>{"$$scope"in i&&l(1,r=i.$$scope)},[s,r,o]}class ae extends D{constructor(t){super(),w(this,t,Y,X,A,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{ae as default};