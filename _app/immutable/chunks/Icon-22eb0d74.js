import{S as _,i as g,s as m,K as r,L as f,m as c,h,n as s,b as d,C as w,B as u}from"./index-45e0c1c1.js";import{I as B}from"./params-255e2385.js";const v=n=>[B.GitHub].includes(n)?"0 0 16 16":"0 0 24 24";function I(n){let e,o,a;return{c(){e=r("svg"),o=r("path"),this.h()},l(i){e=f(i,"svg",{viewBox:!0,fill:!0,height:!0,width:!0,class:!0});var t=c(e);o=f(t,"path",{d:!0}),c(o).forEach(h),t.forEach(h),this.h()},h(){s(o,"d",n[2]),s(e,"viewBox",a=v(n[2])),s(e,"fill",n[1]),s(e,"height",n[0]),s(e,"width",n[0]),s(e,"class","svelte-13r55oh")},m(i,t){d(i,e,t),w(e,o)},p(i,[t]){t&4&&s(o,"d",i[2]),t&4&&a!==(a=v(i[2]))&&s(e,"viewBox",a),t&2&&s(e,"fill",i[1]),t&1&&s(e,"height",i[0]),t&1&&s(e,"width",i[0])},i:u,o:u,d(i){i&&h(e)}}}function z(n,e,o){let{size:a="30px"}=e,{color:i="#fff"}=e,{icon:t}=e;return n.$$set=l=>{"size"in l&&o(0,a=l.size),"color"in l&&o(1,i=l.color),"icon"in l&&o(2,t=l.icon)},[a,i,t]}class E extends _{constructor(e){super(),g(this,e,z,I,m,{size:0,color:1,icon:2})}}export{E as I};