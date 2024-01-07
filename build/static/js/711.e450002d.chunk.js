/*! For license information please see 711.e450002d.chunk.js.LICENSE.txt */
(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[711],{196:(e,a,s)=>{"use strict";s.d(a,{Z:()=>t});const t="http://124.123.110.127:8082"},5193:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(7313),n=s(8467),r=(s(863),s(5645)),i=s(196),c=s(6417);const l=function(){const{brandName:e}=(0,n.UO)(),[a,s]=(0,t.useState)([]),[l,o]=(0,t.useState)(!0),d="".concat(i.Z,"/api/product/Deals/website?Website=").concat(e);return(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch(d),a=await e.json();Array.isArray(a)?s(a):s([]),o(!1)}catch(e){console.error("Error fetching data:",e),o(!1)}})()}),[]),l?(0,c.jsx)("p",{children:"Loading..."}):(0,c.jsx)(r.Z,{products:a})}},5645:(e,a,s)=>{"use strict";s.d(a,{Z:()=>d});var t=s(7313);s(863);const n=s.p+"static/media/whatsapp.f55f566d520d5d9d10fa.png";var r=s(6417);const i=e=>{let{affurl:a,affsite:s,title:t,imageUrl:i,price:c,MRP:l}=e;const o="\n  \ud83c\udf89 **Exciting News!** \ud83c\udf1f Brace yourselves! The enchanting ".concat(t," is now up for grabs at an unbelievable price of Rs.").concat(c," on ").concat(s,"! \ud83d\ude80 Save a whopping Rs.").concat(l-c," - that's a steal! \ud83d\udcb0 Original MRP: Rs.").concat(l,"! \ud83c\udf81\n  \n  \ud83d\udd25 **Hurry Up!** \u23f3 Limited stock available. Seize this golden opportunity before it slips away!\n  \n  \ud83d\udc40 Dive into bliss with this fantastic deal! \ud83c\udf08 Check it out here: ").concat(i,'"\n  \n  \ud83d\uded2 **Grab Yours Now on DealsPakado!** Click here ').concat(a," for more details. \ud83d\udecd\ufe0f\n  \n  \u2728 Explore more jaw-dropping deals at DealsPakado.com! \ud83c\udf1f Your exclusive Offer Price is waiting! \ud83d\udca5 Don't miss out - shop smart! \ud83c\udf1f");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("button",{type:"button",onClick:()=>{const e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"whatsapp://send?text=".concat(encodeURIComponent(o)):"https://web.whatsapp.com/send?text=".concat(encodeURIComponent(o));window.open(e)},className:"btn-share",children:[(0,r.jsx)("img",{src:n,alt:"Share",className:"btn-share-image"}),(0,r.jsx)("p",{className:"btn-share-text",children:" Share"})]})})};var c=s(3849),l=s(1616),o=s(9751);s(4100);const d=e=>{let{products:a}=e;const[s,n]=(0,t.useState)(1),d=10,m=s*d,p=m-d,f=a.slice(p,m),h=e=>{n(e),window.scrollTo(0,0)},x=e=>{const a=Math.floor(e),s=e-a>=.5,t=[];for(let n=1;n<=5;n++)n<=a||s&&n===Math.ceil(e)?t.push((0,r.jsx)("span",{className:"star",children:"\u2605"},n)):t.push((0,r.jsx)("span",{className:"star",children:"\u2606"},n));return t};return(0,r.jsxs)("div",{className:"deals-container-main",children:[(0,r.jsx)("div",{className:"deals-container",children:(0,r.jsx)(c.Z,{xs:1,sm:2,md:3,lg:4,xl:5,xxl:6,xxxl:8,style:{width:"100%"},className:"row-container",children:0===a.length?(0,r.jsx)("div",{className:"no-deals-container",children:(0,r.jsx)("p",{className:"no-deals-div",children:"Currently, No Deals Are available"})}):f.map((e=>(0,r.jsx)(l.Z,{xs:12,sm:6,md:4,lg:4,xl:3,xxl:2,xxxl:2,style:{margin:"5px 0"},children:(0,r.jsx)(o.Z,{className:"main-deal-card",children:(0,r.jsxs)(o.Z.Body,{children:[(0,r.jsxs)("div",{className:"deal-body-div",children:[(0,r.jsx)(o.Z.Link,{href:e.affiliateLink,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("div",{className:"deal-image-div",children:(0,r.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})})}),(0,r.jsx)("div",{className:"deal-title-div",children:(0,r.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,r.jsxs)("div",{className:"deal-down-div",children:[(0,r.jsxs)("div",{className:"brand-name-rating",children:[(0,r.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,r.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,r.jsxs)("div",{className:"deals-stars",children:[(0,r.jsx)("div",{className:"deal-rating-number",children:(0,r.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,r.jsx)("div",{className:"rating",children:x(e.rating)})]}):(0,r.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,r.jsxs)("div",{className:"deal-info",children:[(0,r.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,r.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,r.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]}),(0,r.jsxs)("div",{className:"shopnow",children:[(0,r.jsx)(o.Z.Link,{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"}),(0,r.jsx)("div",{className:"whatsapp-share",children:(0,r.jsx)(i,{affurl:e.affiliateLink,affsite:e.affiliateSite,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice,MRP:e.originalMRP})})]})]})},e.itemId)},e.itemId)))})}),(0,r.jsx)("div",{className:"pagination-container",children:(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"pagination",children:[(0,r.jsx)("li",{className:"page-item ".concat(1===s?"disabled":""),children:(0,r.jsx)("button",{type:"button",className:"pagination-button page-link",onClick:()=>{s>1&&n(s-1)},tabIndex:"-1",disabled:1===s,children:"\u2039"})}),(()=>{const e=Math.ceil(a.length/d),t=[];if(e>3){t.push((0,r.jsx)("li",{className:"page-item ".concat(1===s?"active":""),children:(0,r.jsx)("button",{className:"pagination-button page-link",onClick:()=>h(1),children:"1"})},1)),s>3&&t.push((0,r.jsx)("li",{className:"page-item disabled",children:(0,r.jsx)("span",{className:"page-link",children:"..."})},"ellipsis1"));for(let a=Math.max(s-1,2);a<=Math.min(s+1,e-1);a++)t.push((0,r.jsx)("li",{className:"page-item ".concat(s===a?"active":""),children:(0,r.jsx)("button",{className:"pagination-button page-link",onClick:()=>h(a),children:a})},a));s<e-1&&t.push((0,r.jsx)("li",{className:"page-item disabled",children:(0,r.jsx)("span",{className:"page-link",children:"..."})},"ellipsis2")),t.push((0,r.jsx)("li",{className:"page-item ".concat(s===e?"active":""),children:(0,r.jsx)("button",{className:"pagination-button page-link",onClick:()=>h(e),children:e})},e))}else for(let a=1;a<=e;a++)t.push((0,r.jsx)("li",{className:"page-item ".concat(s===a?"active":""),children:(0,r.jsx)("button",{className:"pagination-button page-link",onClick:()=>h(a),children:a})},a));return t})(),(0,r.jsx)("li",{className:"page-item ".concat(s===Math.ceil(a.length/d)?"disabled":""),children:(0,r.jsx)("button",{type:"button",className:"pagination-button page-link",onClick:()=>{s<Math.ceil(a.length/d)&&n(s+1)},disabled:s===Math.ceil(a.length/d),children:"\u203a"})})]})})})]})}},6123:(e,a)=>{var s;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var i=n.apply(null,s);i&&e.push(i)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var c in s)t.call(s,c)&&s[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(a,[]))||(e.exports=s)}()},9751:(e,a,s)=>{"use strict";s.d(a,{Z:()=>L});var t=s(6123),n=s.n(t),r=s(7313),i=s(8524),c=s(6417);const l=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="div",...l}=e;return t=(0,i.vE)(t,"card-body"),(0,c.jsx)(r,{ref:a,className:n()(s,t),...l})}));l.displayName="CardBody";const o=l,d=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="div",...l}=e;return t=(0,i.vE)(t,"card-footer"),(0,c.jsx)(r,{ref:a,className:n()(s,t),...l})}));d.displayName="CardFooter";const m=d,p=r.createContext(null);p.displayName="CardHeaderContext";const f=p,h=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:l="div",...o}=e;const d=(0,i.vE)(s,"card-header"),m=(0,r.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,c.jsx)(f.Provider,{value:m,children:(0,c.jsx)(l,{ref:a,...o,className:n()(t,d)})})}));h.displayName="CardHeader";const x=h,u=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,variant:r,as:l="img",...o}=e;const d=(0,i.vE)(s,"card-img");return(0,c.jsx)(l,{ref:a,className:n()(r?"".concat(d,"-").concat(r):d,t),...o})}));u.displayName="CardImg";const N=u,g=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="div",...l}=e;return t=(0,i.vE)(t,"card-img-overlay"),(0,c.jsx)(r,{ref:a,className:n()(s,t),...l})}));g.displayName="CardImgOverlay";const v=g,b=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="a",...l}=e;return t=(0,i.vE)(t,"card-link"),(0,c.jsx)(r,{ref:a,className:n()(s,t),...l})}));b.displayName="CardLink";const j=b,w=e=>r.forwardRef(((a,s)=>(0,c.jsx)("div",{...a,ref:s,className:n()(a.className,e)}))),y=w("h6"),k=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r=y,...l}=e;return t=(0,i.vE)(t,"card-subtitle"),(0,c.jsx)(r,{ref:a,className:n()(s,t),...l})}));k.displayName="CardSubtitle";const P=k,C=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r="p",...l}=e;return t=(0,i.vE)(t,"card-text"),(0,c.jsx)(r,{ref:a,className:n()(s,t),...l})}));C.displayName="CardText";const R=C,E=w("h5"),S=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:r=E,...l}=e;return t=(0,i.vE)(t,"card-title"),(0,c.jsx)(r,{ref:a,className:n()(s,t),...l})}));S.displayName="CardTitle";const M=S,Z=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,bg:r,text:l,border:d,body:m=!1,children:p,as:f="div",...h}=e;const x=(0,i.vE)(s,"card");return(0,c.jsx)(f,{ref:a,...h,className:n()(t,x,r&&"bg-".concat(r),l&&"text-".concat(l),d&&"border-".concat(d)),children:m?(0,c.jsx)(o,{children:p}):p})}));Z.displayName="Card";const L=Object.assign(Z,{Img:N,Title:M,Subtitle:P,Body:o,Link:j,Text:R,Header:x,Footer:m,ImgOverlay:v})},1616:(e,a,s)=>{"use strict";s.d(a,{Z:()=>o});var t=s(6123),n=s.n(t),r=s(7313),i=s(8524),c=s(6417);const l=r.forwardRef(((e,a)=>{const[{className:s,...t},{as:r="div",bsPrefix:l,spans:o}]=function(e){let{as:a,bsPrefix:s,className:t,...r}=e;s=(0,i.vE)(s,"col");const c=(0,i.pi)(),l=(0,i.zG)(),o=[],d=[];return c.forEach((e=>{const a=r[e];let t,n,i;delete r[e],"object"===typeof a&&null!=a?({span:t,offset:n,order:i}=a):t=a;const c=e!==l?"-".concat(e):"";t&&o.push(!0===t?"".concat(s).concat(c):"".concat(s).concat(c,"-").concat(t)),null!=i&&d.push("order".concat(c,"-").concat(i)),null!=n&&d.push("offset".concat(c,"-").concat(n))})),[{...r,className:n()(t,...o,...d)},{as:a,bsPrefix:s,spans:o}]}(e);return(0,c.jsx)(r,{...t,ref:a,className:n()(s,!o.length&&l)})}));l.displayName="Col";const o=l},3849:(e,a,s)=>{"use strict";s.d(a,{Z:()=>o});var t=s(6123),n=s.n(t),r=s(7313),i=s(8524),c=s(6417);const l=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:r="div",...l}=e;const o=(0,i.vE)(s,"row"),d=(0,i.pi)(),m=(0,i.zG)(),p="".concat(o,"-cols"),f=[];return d.forEach((e=>{const a=l[e];let s;delete l[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const t=e!==m?"-".concat(e):"";null!=s&&f.push("".concat(p).concat(t,"-").concat(s))})),(0,c.jsx)(r,{ref:a,...l,className:n()(t,o,...f)})}));l.displayName="Row";const o=l},8524:(e,a,s)=>{"use strict";s.d(a,{pi:()=>d,vE:()=>o,zG:()=>m});var t=s(7313);s(6417);const n=["xxl","xl","lg","md","sm","xs"],r="xs",i=t.createContext({prefixes:{},breakpoints:n,minBreakpoint:r}),{Consumer:c,Provider:l}=i;function o(e,a){const{prefixes:s}=(0,t.useContext)(i);return e||s[a]||a}function d(){const{breakpoints:e}=(0,t.useContext)(i);return e}function m(){const{minBreakpoint:e}=(0,t.useContext)(i);return e}},4100:()=>{},863:()=>{}}]);