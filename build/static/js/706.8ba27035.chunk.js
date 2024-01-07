/*! For license information please see 706.8ba27035.chunk.js.LICENSE.txt */
(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[706],{196:(e,a,s)=>{"use strict";s.d(a,{Z:()=>t});const t="http://124.123.110.127:8082"},6909:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>g});var t=s(7313),i=(s(4480),s(9124));const c=s.p+"static/media/ComputerAccessories.90020c871bc1c65b689d.png",n=s.p+"static/media/Desktop.e8772a239b5476e293e4.png",r=s.p+"static/media/GamingLaptop.8e2e687f702e802df3f7.png",l=s.p+"static/media/Laptop.bcc98dd10e2c0ce6d142.png",o=s.p+"static/media/camera.c1373e314107e08e2d01.png",d=s.p+"static/media/headphones.d400cf5d4e09718c7fb8.png",m=s.p+"static/media/smartwatchs.4499b3180fcfb4f53286.png";var p=s(6417);const h=e=>{let{selectedSubCategory:a,onSubCategoryChange:s,onPriceChange:h}=e;const[x,f]=(0,t.useState)(0),[u,g]=(0,t.useState)(2e5);return(0,p.jsxs)("div",{className:"product-filter",children:[(0,p.jsxs)("div",{className:"brand-section",children:[(0,p.jsxs)("div",{className:"filter-option ".concat(""===a?"selected":""),onClick:()=>s(""),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:i,alt:"all"})}),(0,p.jsx)("div",{className:"filter-text ".concat(""===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"All Electronics"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Laptops"===a?"selected":""),onClick:()=>s("Laptops"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:l,alt:"Laptops"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Laptops"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Laptops"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("GamingLaptop"===a?"selected":""),onClick:()=>s("GamingLaptop"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:r,alt:"Gaming Laptops"})}),(0,p.jsx)("div",{className:"filter-text ".concat("GamingLaptop"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Gaming Laptops"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Desktops"===a?"selected":""),onClick:()=>s("Desktops"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:n,alt:"Desktops"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Desktops"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Desktops"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("ComputerAccessories"===a?"selected":""),onClick:()=>s("ComputerAccessories"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:c,alt:"Accessories"})}),(0,p.jsx)("div",{className:"filter-text ".concat("ComputerAccessories"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Accessories"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Headphones"===a?"selected":""),onClick:()=>s("Headphones"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:d,alt:"Headphones"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Headphones"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Headphones"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Smartwatch"===a?"selected":""),onClick:()=>s("Smartwatch"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:m,alt:"Smart Watches"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Smartwatch"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Smart Watches"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Camera"===a?"selected":""),onClick:()=>s("Camera"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:o,alt:"Cameras"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Camera"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Cameras"})})]})]}),(0,p.jsxs)("div",{className:"filter-section-price",children:[(0,p.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,p.jsxs)("div",{className:"price-filter",children:[(0,p.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>f(e.target.value),min:0}),(0,p.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>g(e.target.value),max:2e5}),(0,p.jsx)("button",{className:"Apply-button",onClick:()=>{h({minPrice:x,maxPrice:u})},children:"Apply"})]}),(0,p.jsx)("a",{href:"/electronics",className:"clear-filter",children:"Clear filter"})]})]})};var x=s(5645),f=s(196);class u extends t.Component{constructor(){super(...arguments),this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],isLoading:!0},this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:a,maxPrice:s}=this.state;let t="".concat(f.Z,"/api/product/byCategory?category=Electronics");const i=[];e&&i.push("subcategory=".concat(e)),a>=0&&i.push("minPrice=".concat(a)),s<=2e5&&i.push("maxPrice=".concat(s)),i.length>0&&(t+="&".concat(i.join("&"))),this.setState({isLoading:!0}),fetch(t).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,isLoading:!1,error:null})})).catch((e=>{this.setState({error:e,isLoading:!1})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},this.fetchProducts)},this.handleApplyPriceFilter=e=>{let{minPrice:a,maxPrice:s}=e;this.setState({minPrice:a,maxPrice:s},this.fetchProducts)}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:a,isLoading:s}=this.state;return(0,p.jsxs)("div",{className:"container-fluid",children:[(0,p.jsx)(h,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),s?(0,p.jsx)("p",{children:"Loading..."}):(0,p.jsx)(x.Z,{products:a})]})}}const g=u},5645:(e,a,s)=>{"use strict";s.d(a,{Z:()=>d});var t=s(7313);s(863);const i=s.p+"static/media/whatsapp.f55f566d520d5d9d10fa.png";var c=s(6417);const n=e=>{let{affurl:a,affsite:s,title:t,imageUrl:n,price:r,MRP:l}=e;const o="\n  \ud83c\udf89 **Exciting News!** \ud83c\udf1f Brace yourselves! The enchanting ".concat(t," is now up for grabs at an unbelievable price of Rs.").concat(r," on ").concat(s,"! \ud83d\ude80 Save a whopping Rs.").concat(l-r," - that's a steal! \ud83d\udcb0 Original MRP: Rs.").concat(l,"! \ud83c\udf81\n  \n  \ud83d\udd25 **Hurry Up!** \u23f3 Limited stock available. Seize this golden opportunity before it slips away!\n  \n  \ud83d\udc40 Dive into bliss with this fantastic deal! \ud83c\udf08 Check it out here: ").concat(n,'"\n  \n  \ud83d\uded2 **Grab Yours Now on DealsPakado!** Click here ').concat(a," for more details. \ud83d\udecd\ufe0f\n  \n  \u2728 Explore more jaw-dropping deals at DealsPakado.com! \ud83c\udf1f Your exclusive Offer Price is waiting! \ud83d\udca5 Don't miss out - shop smart! \ud83c\udf1f");return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("button",{type:"button",onClick:()=>{const e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"whatsapp://send?text=".concat(encodeURIComponent(o)):"https://web.whatsapp.com/send?text=".concat(encodeURIComponent(o));window.open(e)},className:"btn-share",children:[(0,c.jsx)("img",{src:i,alt:"Share",className:"btn-share-image"}),(0,c.jsx)("p",{className:"btn-share-text",children:" Share"})]})})};var r=s(3849),l=s(1616),o=s(9751);s(4100);const d=e=>{let{products:a}=e;const[s,i]=(0,t.useState)(1),d=10,m=s*d,p=m-d,h=a.slice(p,m),x=e=>{i(e),window.scrollTo(0,0)},f=e=>{const a=Math.floor(e),s=e-a>=.5,t=[];for(let i=1;i<=5;i++)i<=a||s&&i===Math.ceil(e)?t.push((0,c.jsx)("span",{className:"star",children:"\u2605"},i)):t.push((0,c.jsx)("span",{className:"star",children:"\u2606"},i));return t};return(0,c.jsxs)("div",{className:"deals-container-main",children:[(0,c.jsx)("div",{className:"deals-container",children:(0,c.jsx)(r.Z,{xs:1,sm:2,md:3,lg:4,xl:5,xxl:6,xxxl:8,style:{width:"100%"},className:"row-container",children:0===a.length?(0,c.jsx)("div",{className:"no-deals-container",children:(0,c.jsx)("p",{className:"no-deals-div",children:"Currently, No Deals Are available"})}):h.map((e=>(0,c.jsx)(l.Z,{xs:12,sm:6,md:4,lg:4,xl:3,xxl:2,xxxl:2,style:{margin:"5px 0"},children:(0,c.jsx)(o.Z,{className:"main-deal-card",children:(0,c.jsxs)(o.Z.Body,{children:[(0,c.jsxs)("div",{className:"deal-body-div",children:[(0,c.jsx)(o.Z.Link,{href:e.affiliateLink,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("div",{className:"deal-image-div",children:(0,c.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})})}),(0,c.jsx)("div",{className:"deal-title-div",children:(0,c.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,c.jsxs)("div",{className:"deal-down-div",children:[(0,c.jsxs)("div",{className:"brand-name-rating",children:[(0,c.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,c.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,c.jsxs)("div",{className:"deals-stars",children:[(0,c.jsx)("div",{className:"deal-rating-number",children:(0,c.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,c.jsx)("div",{className:"rating",children:f(e.rating)})]}):(0,c.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,c.jsxs)("div",{className:"deal-info",children:[(0,c.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,c.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,c.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]}),(0,c.jsxs)("div",{className:"shopnow",children:[(0,c.jsx)(o.Z.Link,{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"}),(0,c.jsx)("div",{className:"whatsapp-share",children:(0,c.jsx)(n,{affurl:e.affiliateLink,affsite:e.affiliateSite,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice,MRP:e.originalMRP})})]})]})},e.itemId)},e.itemId)))})}),(0,c.jsx)("div",{className:"pagination-container",children:(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{className:"pagination",children:[(0,c.jsx)("li",{className:"page-item ".concat(1===s?"disabled":""),children:(0,c.jsx)("button",{type:"button",className:"pagination-button page-link",onClick:()=>{s>1&&i(s-1)},tabIndex:"-1",disabled:1===s,children:"\u2039"})}),(()=>{const e=Math.ceil(a.length/d),t=[];if(e>3){t.push((0,c.jsx)("li",{className:"page-item ".concat(1===s?"active":""),children:(0,c.jsx)("button",{className:"pagination-button page-link",onClick:()=>x(1),children:"1"})},1)),s>3&&t.push((0,c.jsx)("li",{className:"page-item disabled",children:(0,c.jsx)("span",{className:"page-link",children:"..."})},"ellipsis1"));for(let a=Math.max(s-1,2);a<=Math.min(s+1,e-1);a++)t.push((0,c.jsx)("li",{className:"page-item ".concat(s===a?"active":""),children:(0,c.jsx)("button",{className:"pagination-button page-link",onClick:()=>x(a),children:a})},a));s<e-1&&t.push((0,c.jsx)("li",{className:"page-item disabled",children:(0,c.jsx)("span",{className:"page-link",children:"..."})},"ellipsis2")),t.push((0,c.jsx)("li",{className:"page-item ".concat(s===e?"active":""),children:(0,c.jsx)("button",{className:"pagination-button page-link",onClick:()=>x(e),children:e})},e))}else for(let a=1;a<=e;a++)t.push((0,c.jsx)("li",{className:"page-item ".concat(s===a?"active":""),children:(0,c.jsx)("button",{className:"pagination-button page-link",onClick:()=>x(a),children:a})},a));return t})(),(0,c.jsx)("li",{className:"page-item ".concat(s===Math.ceil(a.length/d)?"disabled":""),children:(0,c.jsx)("button",{type:"button",className:"pagination-button page-link",onClick:()=>{s<Math.ceil(a.length/d)&&i(s+1)},disabled:s===Math.ceil(a.length/d),children:"\u203a"})})]})})})]})}},6123:(e,a)=>{var s;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var c=typeof s;if("string"===c||"number"===c)e.push(s);else if(Array.isArray(s)){if(s.length){var n=i.apply(null,s);n&&e.push(n)}}else if("object"===c){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var r in s)t.call(s,r)&&s[r]&&e.push(r)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(a,[]))||(e.exports=s)}()},9751:(e,a,s)=>{"use strict";s.d(a,{Z:()=>A});var t=s(6123),i=s.n(t),c=s(7313),n=s(8524),r=s(6417);const l=c.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:c="div",...l}=e;return t=(0,n.vE)(t,"card-body"),(0,r.jsx)(c,{ref:a,className:i()(s,t),...l})}));l.displayName="CardBody";const o=l,d=c.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:c="div",...l}=e;return t=(0,n.vE)(t,"card-footer"),(0,r.jsx)(c,{ref:a,className:i()(s,t),...l})}));d.displayName="CardFooter";const m=d,p=c.createContext(null);p.displayName="CardHeaderContext";const h=p,x=c.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:l="div",...o}=e;const d=(0,n.vE)(s,"card-header"),m=(0,c.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,r.jsx)(h.Provider,{value:m,children:(0,r.jsx)(l,{ref:a,...o,className:i()(t,d)})})}));x.displayName="CardHeader";const f=x,u=c.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,variant:c,as:l="img",...o}=e;const d=(0,n.vE)(s,"card-img");return(0,r.jsx)(l,{ref:a,className:i()(c?"".concat(d,"-").concat(c):d,t),...o})}));u.displayName="CardImg";const g=u,N=c.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:c="div",...l}=e;return t=(0,n.vE)(t,"card-img-overlay"),(0,r.jsx)(c,{ref:a,className:i()(s,t),...l})}));N.displayName="CardImgOverlay";const j=N,v=c.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:c="a",...l}=e;return t=(0,n.vE)(t,"card-link"),(0,r.jsx)(c,{ref:a,className:i()(s,t),...l})}));v.displayName="CardLink";const b=v,C=e=>c.forwardRef(((a,s)=>(0,r.jsx)("div",{...a,ref:s,className:i()(a.className,e)}))),y=C("h6"),k=c.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:c=y,...l}=e;return t=(0,n.vE)(t,"card-subtitle"),(0,r.jsx)(c,{ref:a,className:i()(s,t),...l})}));k.displayName="CardSubtitle";const P=k,w=c.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:c="p",...l}=e;return t=(0,n.vE)(t,"card-text"),(0,r.jsx)(c,{ref:a,className:i()(s,t),...l})}));w.displayName="CardText";const S=w,R=C("h5"),L=c.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:c=R,...l}=e;return t=(0,n.vE)(t,"card-title"),(0,r.jsx)(c,{ref:a,className:i()(s,t),...l})}));L.displayName="CardTitle";const M=L,E=c.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,bg:c,text:l,border:d,body:m=!1,children:p,as:h="div",...x}=e;const f=(0,n.vE)(s,"card");return(0,r.jsx)(h,{ref:a,...x,className:i()(t,f,c&&"bg-".concat(c),l&&"text-".concat(l),d&&"border-".concat(d)),children:m?(0,r.jsx)(o,{children:p}):p})}));E.displayName="Card";const A=Object.assign(E,{Img:g,Title:M,Subtitle:P,Body:o,Link:b,Text:S,Header:f,Footer:m,ImgOverlay:j})},1616:(e,a,s)=>{"use strict";s.d(a,{Z:()=>o});var t=s(6123),i=s.n(t),c=s(7313),n=s(8524),r=s(6417);const l=c.forwardRef(((e,a)=>{const[{className:s,...t},{as:c="div",bsPrefix:l,spans:o}]=function(e){let{as:a,bsPrefix:s,className:t,...c}=e;s=(0,n.vE)(s,"col");const r=(0,n.pi)(),l=(0,n.zG)(),o=[],d=[];return r.forEach((e=>{const a=c[e];let t,i,n;delete c[e],"object"===typeof a&&null!=a?({span:t,offset:i,order:n}=a):t=a;const r=e!==l?"-".concat(e):"";t&&o.push(!0===t?"".concat(s).concat(r):"".concat(s).concat(r,"-").concat(t)),null!=n&&d.push("order".concat(r,"-").concat(n)),null!=i&&d.push("offset".concat(r,"-").concat(i))})),[{...c,className:i()(t,...o,...d)},{as:a,bsPrefix:s,spans:o}]}(e);return(0,r.jsx)(c,{...t,ref:a,className:i()(s,!o.length&&l)})}));l.displayName="Col";const o=l},3849:(e,a,s)=>{"use strict";s.d(a,{Z:()=>o});var t=s(6123),i=s.n(t),c=s(7313),n=s(8524),r=s(6417);const l=c.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:c="div",...l}=e;const o=(0,n.vE)(s,"row"),d=(0,n.pi)(),m=(0,n.zG)(),p="".concat(o,"-cols"),h=[];return d.forEach((e=>{const a=l[e];let s;delete l[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const t=e!==m?"-".concat(e):"";null!=s&&h.push("".concat(p).concat(t,"-").concat(s))})),(0,r.jsx)(c,{ref:a,...l,className:i()(t,o,...h)})}));l.displayName="Row";const o=l},8524:(e,a,s)=>{"use strict";s.d(a,{pi:()=>d,vE:()=>o,zG:()=>m});var t=s(7313);s(6417);const i=["xxl","xl","lg","md","sm","xs"],c="xs",n=t.createContext({prefixes:{},breakpoints:i,minBreakpoint:c}),{Consumer:r,Provider:l}=n;function o(e,a){const{prefixes:s}=(0,t.useContext)(n);return e||s[a]||a}function d(){const{breakpoints:e}=(0,t.useContext)(n);return e}function m(){const{minBreakpoint:e}=(0,t.useContext)(n);return e}},4100:()=>{},863:()=>{},4480:()=>{},9124:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/5110770.5f5a5e65650a1509cae9.png"}}]);