"use strict";(self.webpackChunkdealpakado=self.webpackChunkdealpakado||[]).push([[570],{6909:(e,a,s)=>{s.r(a),s.d(a,{default:()=>N});var i=s(7313),t=(s(7321),s(9124));const c=s.p+"static/media/ComputerAccessories.16c03e6fe4f4b4fb9eb1.png",l=s.p+"static/media/Desktop.71fe25fe25223c7aec21.png",r=s.p+"static/media/GamingLaptop.6cef62aa82cbff0f68a4.png",n=s.p+"static/media/Laptop.43725e97fbe801b745e3.png",d=s.p+"static/media/camera.6c8d598b957cbdeaf2a6.png",o=s.p+"static/media/headphones.6796ef69d1ac663b600b.png",m=s.p+"static/media/smartwatchs.96f6174dfdf0dbceb561.png";var h=s(6417);const p=e=>{let{selectedSubCategory:a,onSubCategoryChange:s,onPriceChange:p}=e;const[x,g]=(0,i.useState)(0),[j,N]=(0,i.useState)(2e5);return(0,h.jsxs)("div",{className:"product-filter",children:[(0,h.jsxs)("div",{className:"brand-section",children:[(0,h.jsxs)("div",{className:"filter-option ".concat(""===a?"selected":""),onClick:()=>s(""),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:t,alt:"all"})}),(0,h.jsx)("div",{className:"filter-text ".concat(""===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"All Electronics"})})]}),(0,h.jsxs)("div",{className:"filter-option ".concat("Laptops"===a?"selected":""),onClick:()=>s("Laptops"),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:n,alt:"Laptops"})}),(0,h.jsx)("div",{className:"filter-text ".concat("Laptops"===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"Laptops"})})]}),(0,h.jsxs)("div",{className:"filter-option ".concat("GamingLaptop"===a?"selected":""),onClick:()=>s("GamingLaptop"),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:r,alt:"Gaming Laptops"})}),(0,h.jsx)("div",{className:"filter-text ".concat("GamingLaptop"===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"Gaming Laptops"})})]}),(0,h.jsxs)("div",{className:"filter-option ".concat("Desktops"===a?"selected":""),onClick:()=>s("Desktops"),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:l,alt:"Desktops"})}),(0,h.jsx)("div",{className:"filter-text ".concat("Desktops"===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"Desktops"})})]}),(0,h.jsxs)("div",{className:"filter-option ".concat("ComputerAccessories"===a?"selected":""),onClick:()=>s("ComputerAccessories"),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:c,alt:"Accessories"})}),(0,h.jsx)("div",{className:"filter-text ".concat("ComputerAccessories"===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"Accessories"})})]}),(0,h.jsxs)("div",{className:"filter-option ".concat("Headphones"===a?"selected":""),onClick:()=>s("Headphones"),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:o,alt:"Headphones"})}),(0,h.jsx)("div",{className:"filter-text ".concat("Headphones"===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"Headphones"})})]}),(0,h.jsxs)("div",{className:"filter-option ".concat("Smartwatch"===a?"selected":""),onClick:()=>s("Smartwatch"),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:m,alt:"Smart Watches"})}),(0,h.jsx)("div",{className:"filter-text ".concat("Smartwatch"===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"Smart Watches"})})]}),(0,h.jsxs)("div",{className:"filter-option ".concat("Camera"===a?"selected":""),onClick:()=>s("Camera"),children:[(0,h.jsx)("div",{className:"brand-image",children:(0,h.jsx)("img",{className:"filter-image",src:d,alt:"Cameras"})}),(0,h.jsx)("div",{className:"filter-text ".concat("Camera"===a?"selected-text":""),children:(0,h.jsx)("span",{className:"option",children:"Cameras"})})]})]}),(0,h.jsxs)("div",{className:"filter-section-price",children:[(0,h.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,h.jsxs)("div",{className:"price-filter",children:[(0,h.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>g(e.target.value),min:0}),(0,h.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>N(e.target.value),max:2e5}),(0,h.jsx)("button",{className:"Apply-button",onClick:()=>{p({minPrice:x,maxPrice:j})},children:"Apply"})]}),(0,h.jsx)("a",{href:"/electronics",className:"clear-filter",children:"Clear filter"})]})]})};var x=s(8474),g=(s(2681),s(196));class j extends i.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:a,maxPrice:s}=this.state;let i="".concat(g.Z,"/api/product/byCategory?category=Electronics");const t=[];e&&t.push("subcategory=".concat(e)),a>=0&&t.push("minPrice=".concat(a)),s<=2e5&&t.push("maxPrice=".concat(s)),t.length>0&&(i+="&".concat(t.join("&"))),fetch(i).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,error:null})})).catch((e=>{this.setState({})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},(()=>{this.fetchProducts()}))},this.handleApplyPriceFilter=e=>{let{minPrice:a,maxPrice:s}=e;this.setState({minPrice:a,maxPrice:s},(()=>{this.fetchProducts()}))},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:a,error:s}=this.state;return(0,h.jsxs)("div",{children:[(0,h.jsx)(p,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),s?(0,h.jsx)("p",{className:"no-deals-div",children:"Currently No Deals Are available"}):(0,h.jsx)(x.Z,{products:a})]})}}const N=j},8474:(e,a,s)=>{s.d(a,{Z:()=>l});var i=s(7313),t=(s(2681),s(4883)),c=s(6417);const l=e=>{let{products:a}=e;const[s,l]=(0,i.useState)(1),r=50*s,n=r-50,d=a.slice(n,r),o=e=>{const a=Math.floor(e),s=e-a>=.5,i=[];for(let t=1;t<=5;t++)t<=a||s&&t===Math.ceil(e)?i.push((0,c.jsx)("span",{className:"star",children:"\u2605"},t)):i.push((0,c.jsx)("span",{className:"star",children:"\u2606"},t));return i};return(0,c.jsxs)("div",{className:"deals-container-main",children:[(0,c.jsx)("div",{className:"deals-container",children:0===a.length?(0,c.jsx)("div",{className:"no-deals-container",children:(0,c.jsx)("p",{className:"no-deals-div",children:"Currently, No Deals Are available"})}):d.map((e=>(0,c.jsx)("div",{className:"main-deal-card",children:(0,c.jsxs)("div",{className:"deal-card",children:[(0,c.jsx)("a",{href:e.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsxs)("div",{className:"deal-body-div",children:[(0,c.jsx)("div",{className:"deal-image-div",children:(0,c.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})}),(0,c.jsx)("div",{className:"deal-title-div",children:(0,c.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,c.jsxs)("div",{className:"deal-down-div",children:[(0,c.jsxs)("div",{className:"brand-name-rating",children:[(0,c.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,c.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,c.jsxs)("div",{className:"deals-stars",children:[(0,c.jsx)("div",{className:"deal-rating-number",children:(0,c.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,c.jsx)("div",{className:"rating",children:o(e.rating)})]}):(0,c.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,c.jsxs)("div",{className:"deal-info",children:[(0,c.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,c.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,c.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]})}),(0,c.jsxs)("div",{className:"shopnow",children:[(0,c.jsx)("div",{className:"show-now-link",children:(0,c.jsx)("a",{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,c.jsx)("div",{className:"whatsapp-share",children:(0,c.jsx)(t.Z,{url:e.affiliateLink,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice})})]})]},e.itemId)},e.itemId)))}),(0,c.jsxs)("div",{className:"pagination-container",children:[(0,c.jsx)("button",{onClick:()=>{s>1&&l(s-1)},className:"pagination-button arrow-button",disabled:1===s,children:"\u2039"}),Array.from({length:Math.ceil(a.length/50)},((e,a)=>(0,c.jsx)("button",{onClick:()=>(l(a+1),void window.scrollTo(0,0)),className:"pagination-button ".concat(s===a+1?"active":""),children:a+1},a+1))),(0,c.jsx)("button",{onClick:()=>{s<Math.ceil(a.length/50)&&l(s+1)},className:"pagination-button arrow-button",disabled:s===Math.ceil(a.length/50),children:"\u203a"})]})]})}},7321:()=>{},9124:(e,a,s)=>{e.exports=s.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);