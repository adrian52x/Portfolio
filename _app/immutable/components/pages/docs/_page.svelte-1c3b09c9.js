import{S as X,i as Z,s as x,a as E,k as b,w as V,q as R,R as ee,h as i,c as C,l as v,m as g,x as M,r as Y,n as c,b as f,y as O,C as A,f as _,t as p,z as P,B as z}from"../../../chunks/index-ec90233b.js";import{C as B}from"../../../chunks/Chip-92dfc914.js";import{M as te}from"../../../chunks/MainTitle-0914bcc1.js";import{P as G,D as re}from"../../../chunks/params-03c186fc.js";import{u as H,g as le}from"../../../chunks/helpers-155f75b4.js";function ae(n){let e;return{c(){e=R(n[1])},l(l){e=Y(l,n[1])},m(l,t){f(l,e,t)},p:z,d(l){l&&i(e)}}}function se(n){let e,l;return e=new B({props:{label:"Ooops! no CV at the moment."}}),{c(){V(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p:z,i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function ne(n){let e,l,t;return l=new B({props:{label:"CV",size:"1.5em"}}),{c(){e=b("a"),V(l.$$.fragment),this.h()},l(a){e=v(a,"A",{href:!0,target:!0,rel:!0,class:!0});var s=g(e);M(l.$$.fragment,s),s.forEach(i),this.h()},h(){c(e,"href",n[0]),c(e,"target","_blank"),c(e,"rel","noreferrer"),c(e,"class","svelte-1weiry6")},m(a,s){f(a,e,s),O(l,e,null),t=!0},p:z,i(a){t||(_(l.$$.fragment,a),t=!0)},o(a){p(l.$$.fragment,a),t=!1},d(a){a&&i(e),P(l)}}}function oe(n){let e,l;return e=new B({props:{label:"Ooops! no Diploma at the moment."}}),{c(){V(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p:z,i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function ie(n){let e,l,t;return l=new B({props:{label:"Diploma",size:"1.5em"}}),{c(){e=b("a"),V(l.$$.fragment),this.h()},l(a){e=v(a,"A",{href:!0,target:!0,rel:!0,class:!0});var s=g(e);M(l.$$.fragment,s),s.forEach(i),this.h()},h(){c(e,"href",n[2]),c(e,"target","_blank"),c(e,"rel","noreferrer"),c(e,"class","svelte-1weiry6")},m(a,s){f(a,e,s),O(l,e,null),t=!0},p:z,i(a){t||(_(l.$$.fragment,a),t=!0)},o(a){p(l.$$.fragment,a),t=!1},d(a){a&&i(e),P(l)}}}function fe(n){let e,l,t,a,s,I,m,L,k,S,T,u,y,$,U,w,d,D;document.title=e=H(n[1],G),s=new te({props:{$$slots:{default:[ae]},$$scope:{ctx:n}}});const J=[ne,se],F=[];function K(r,o){return r[0]?0:1}y=K(n),$=F[y]=J[y](n);const Q=[ie,oe],N=[];function W(r,o){return r[2]?0:1}return w=W(n),d=N[w]=Q[w](n),{c(){l=E(),t=b("div"),a=E(),V(s.$$.fragment),I=E(),m=b("div"),L=R("Last time updated : "),k=b("b"),S=R(n[3]),T=E(),u=b("div"),$.c(),U=E(),d.c(),this.h()},l(r){ee("svelte-s4huv4",document.head).forEach(i),l=C(r),t=v(r,"DIV",{}),g(t).forEach(i),a=C(r),M(s.$$.fragment,r),I=C(r),m=v(r,"DIV",{class:!0});var h=g(m);L=Y(h,"Last time updated : "),k=v(h,"B",{});var j=g(k);S=Y(j,n[3]),j.forEach(i),h.forEach(i),T=C(r),u=v(r,"DIV",{class:!0});var q=g(u);$.l(q),U=C(q),d.l(q),q.forEach(i),this.h()},h(){c(m,"class","docs svelte-1weiry6"),c(u,"class","docs svelte-1weiry6")},m(r,o){f(r,l,o),f(r,t,o),f(r,a,o),O(s,r,o),f(r,I,o),f(r,m,o),A(m,L),A(m,k),A(k,S),f(r,T,o),f(r,u,o),F[y].m(u,null),A(u,U),N[w].m(u,null),D=!0},p(r,[o]){(!D||o&2)&&e!==(e=H(r[1],G))&&(document.title=e);const h={};o&32&&(h.$$scope={dirty:o,ctx:r}),s.$set(h),$.p(r,o),d.p(r,o)},i(r){D||(_(s.$$.fragment,r),_($),_(d),D=!0)},o(r){p(s.$$.fragment,r),p($),p(d),D=!1},d(r){r&&i(l),r&&i(t),r&&i(a),P(s,r),r&&i(I),r&&i(m),r&&i(T),r&&i(u),F[y].d(),N[w].d()}}}function ce(n){const{cv:e,title:l,diploma:t,docsUpdatedOn:a}=re,s=`${a.getDate()} ${le(a.getMonth())} ${a.getFullYear()}`;return[e,l,t,s]}class de extends X{constructor(e){super(),Z(this,e,ce,fe,x,{})}}export{de as default};