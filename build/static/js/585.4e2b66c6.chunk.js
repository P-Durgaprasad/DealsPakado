"use strict";(self.webpackChunkdealpakado=self.webpackChunkdealpakado||[]).push([[585],{8474:(A,e,a)=>{a.d(e,{Z:()=>c});var s=a(7313),i=(a(2681),a(4883)),l=a(6417);const c=A=>{let{products:e}=A;const[a,c]=(0,s.useState)(1),t=50*a,d=t-50,n=e.slice(d,t),r=A=>{const e=Math.floor(A),a=A-e>=.5,s=[];for(let i=1;i<=5;i++)i<=e||a&&i===Math.ceil(A)?s.push((0,l.jsx)("span",{className:"star",children:"\u2605"},i)):s.push((0,l.jsx)("span",{className:"star",children:"\u2606"},i));return s};return(0,l.jsxs)("div",{className:"deals-container-main",children:[(0,l.jsx)("div",{className:"deals-container",children:0===e.length?(0,l.jsx)("div",{className:"no-deals-container",children:(0,l.jsx)("p",{className:"no-deals-div",children:"Currently, No Deals Are available"})}):n.map((A=>(0,l.jsx)("div",{className:"main-deal-card",children:(0,l.jsxs)("div",{className:"deal-card",children:[(0,l.jsx)("a",{href:A.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsxs)("div",{className:"deal-body-div",children:[(0,l.jsx)("div",{className:"deal-image-div",children:(0,l.jsx)("img",{src:A.imageUrl,alt:A.title,className:"deal-image"})}),(0,l.jsx)("div",{className:"deal-title-div",children:(0,l.jsx)("h1",{className:"deal-title",children:A.itemTitle})}),(0,l.jsxs)("div",{className:"deal-down-div",children:[(0,l.jsxs)("div",{className:"brand-name-rating",children:[(0,l.jsx)("div",{className:"brandName-info",children:A.affiliateSite}),(0,l.jsx)("div",{className:"deal-rating",children:A.rating>0?(0,l.jsxs)("div",{className:"deals-stars",children:[(0,l.jsx)("div",{className:"deal-rating-number",children:(0,l.jsx)("span",{children:parseFloat(A.rating).toFixed(1)})}),(0,l.jsx)("div",{className:"rating",children:r(A.rating)})]}):(0,l.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,l.jsxs)("div",{className:"deal-info",children:[(0,l.jsxs)("div",{className:"regular-price",children:["Rs.",A.originalMRP.toLocaleString(),"/-"]}),(0,l.jsxs)("div",{className:"deal-price",children:["Rs.",A.offerPrice.toLocaleString(),"/-"]}),(0,l.jsxs)("span",{className:"offer-label",children:[Math.round((A.originalMRP-A.offerPrice)/A.originalMRP*100),"% Off"]})]})]})]})}),(0,l.jsxs)("div",{className:"shopnow",children:[(0,l.jsx)("div",{className:"show-now-link",children:(0,l.jsx)("a",{href:A.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,l.jsx)("div",{className:"whatsapp-share",children:(0,l.jsx)(i.Z,{url:A.affiliateLink,title:A.itemTitle,imageUrl:A.imageUrl,price:A.offerPrice})})]})]},A.itemId)},A.itemId)))}),(0,l.jsxs)("div",{className:"pagination-container",children:[(0,l.jsx)("button",{onClick:()=>{a>1&&c(a-1)},className:"pagination-button arrow-button",disabled:1===a,children:"\u2039"}),Array.from({length:Math.ceil(e.length/50)},((A,e)=>(0,l.jsx)("button",{onClick:()=>(c(e+1),void window.scrollTo(0,0)),className:"pagination-button ".concat(a===e+1?"active":""),children:e+1},e+1))),(0,l.jsx)("button",{onClick:()=>{a<Math.ceil(e.length/50)&&c(a+1)},className:"pagination-button arrow-button",disabled:a===Math.ceil(e.length/50),children:"\u203a"})]})]})}},8533:(A,e,a)=>{a.r(e),a.d(e,{default:()=>u});var s=a(7313),i=(a(7321),a(9124));const l=a.p+"static/media/Mi.2bddea9f6ac2bb4a8d59.png",c=a.p+"static/media/samsung.53de19150499376f4e38.png",t=a.p+"static/media/Vivo.1fd483df6154240499b7.png",d=a.p+"static/media/Oppo.eca4f5b0cbaeddb945a4.png",n=a.p+"static/media/realme.d691b31c5499a48a8173.png",r=a.p+"static/media/poco.eed2425175da74eaddfe.png",o=a.p+"static/media/oneplus.38fbc0a30954ec9cddec.png",h=a.p+"static/media/moto.19a61d85abb6328a2d84.png",m=a.p+"static/media/nokia.71fabb295e12aaa46662.png";var x=a(6417);const p=A=>{let{selectedBrand:e,onBrandChange:a,onPriceChange:p}=A;const[f,j]=(0,s.useState)(0),[v,u]=(0,s.useState)(2e5);return(0,x.jsxs)("div",{className:"product-filter",children:[(0,x.jsxs)("div",{className:"brand-section",children:[(0,x.jsxs)("div",{className:"filter-option ".concat(""===e?"selected":""),onClick:()=>a(""),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:i,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat(""===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"All Mobile's"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("redmi"===e?"selected":""),onClick:()=>a("redmi"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:l,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("redmi"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"MI"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Samsung"===e?"selected":""),onClick:()=>a("Samsung"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:c,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Samsung"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Samsung"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Vivo"===e?"selected":""),onClick:()=>a("Vivo"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:t,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Vivo"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Vivo"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Oppo"===e?"selected":""),onClick:()=>a("Oppo"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:d,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Oppo"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Oppo"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Realme"===e?"selected":""),onClick:()=>a("Realme"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:n,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Realme"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Realme"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Apple"===e?"selected":""),onClick:()=>a("Apple"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:"data:image/png;base64,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",alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Apple"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Apple"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Poco"===e?"selected":""),onClick:()=>a("Poco"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:r,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Poco"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Poco"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("OnePlus"===e?"selected":""),onClick:()=>a("OnePlus"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:o,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("OnePlus"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"OnePlus"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Motorola"===e?"selected":""),onClick:()=>a("Motorola"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:h,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Motorola"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Motorola"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Nokia"===e?"selected":""),onClick:()=>a("Nokia"),children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:m,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Nokia"===e?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Nokia"})})]})]}),(0,x.jsxs)("div",{className:"filter-section-price",children:[(0,x.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,x.jsxs)("div",{className:"price-filter",children:[(0,x.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:A=>j(A.target.value),min:0}),(0,x.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:A=>u(A.target.value),max:2e5}),(0,x.jsx)("button",{className:"Apply-button",onClick:()=>{p({minPrice:f,maxPrice:v})},children:"Apply"})]}),(0,x.jsx)("a",{href:"/mobiles",className:"clear-filter",children:"Clear filter"})]})]})};var f=a(8474),j=(a(2681),a(196));class v extends s.Component{constructor(A){super(A),this.fetchProducts=()=>{const{selectedBrand:A,minPrice:e,maxPrice:a}=this.state;let s="".concat(j.Z,"/api/product/byCategory?category=Mobiles");const i=[];A&&i.push("brand=".concat(A)),e>=0&&i.push("minPrice=".concat(e)),a<=2e5&&i.push("maxPrice=".concat(a)),i.length>0&&(s+="&".concat(i.join("&"))),fetch(s).then((A=>{if(!A.ok)throw new Error("Network response was not ok");return A.json()})).then((A=>{this.setState({products:A,error:null})})).catch((A=>{this.setState({})}))},this.handleBrandChange=A=>{this.setState({selectedBrand:A},(()=>{this.fetchProducts()}))},this.handleApplyPriceFilter=A=>{let{minPrice:e,maxPrice:a}=A;this.setState({minPrice:e,maxPrice:a},(()=>{this.fetchProducts()}))},this.state={selectedBrand:"",minPrice:0,maxPrice:2e5,products:[],error:null}}componentDidMount(){this.fetchProducts()}render(){const{selectedBrand:A,products:e,error:a}=this.state;return(0,x.jsxs)("div",{children:[(0,x.jsx)(p,{selectedBrand:A,onBrandChange:this.handleBrandChange,onPriceChange:this.handleApplyPriceFilter}),a?(0,x.jsxs)("p",{children:["Error fetching products: ",a.message]}):(0,x.jsx)(f.Z,{products:e})]})}}const u=v},7321:()=>{},9124:(A,e,a)=>{A.exports=a.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);