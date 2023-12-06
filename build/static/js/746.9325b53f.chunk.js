"use strict";(self.webpackChunkdealpakado=self.webpackChunkdealpakado||[]).push([[746],{6611:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var i=a(9867),c=a(7233),t=(a(4956),a(6564),a(9124));const l=a.p+"static/media/MensFashion.f4dcdb35637920c8e66b.png",n=a.p+"static/media/WomenFashion3.1d7935067445644e3585.png",r=a.p+"static/media/KidsFashion1.6eaab2d54bf8a32ffd70.png",d=a.p+"static/media/MensAccessories.90d00a1ca7ed8e5bb03e.png",o=a.p+"static/media/WomensA.548a87f598dc47a3193e.png";var m=a(2834);const h=e=>{let{selectedSubCategory:s,onSubCategoryChange:a,onPriceChange:c}=e;const[h,x]=(0,i.useState)(0),[p,g]=(0,i.useState)(2e5);return(0,m.jsxs)("div",{className:"product-filter",children:[(0,m.jsxs)("div",{className:"brand-section",children:[(0,m.jsxs)("div",{className:"filter-option ".concat(""===s?"selected":""),onClick:()=>a(""),children:[(0,m.jsx)("div",{className:"brand-image",children:(0,m.jsx)("img",{className:"filter-image",src:t,alt:"all"})}),(0,m.jsx)("div",{className:"filter-text ".concat(""===s?"selected-text":""),children:(0,m.jsx)("span",{className:"option",children:"All Fashion's"})})]}),(0,m.jsxs)("div",{className:"filter-option ".concat("Mens"===s?"selected":""),onClick:()=>a("Mens"),children:[(0,m.jsx)("div",{className:"brand-image",children:(0,m.jsx)("img",{className:"filter-image",src:l,alt:"all"})}),(0,m.jsx)("div",{className:"filter-text ".concat("Mens"===s?"selected-text":""),children:(0,m.jsx)("span",{className:"option",children:"Men's"})})]}),(0,m.jsxs)("div",{className:"filter-option ".concat("Womens"===s?"selected":""),onClick:()=>a("Womens"),children:[(0,m.jsx)("div",{className:"brand-image",children:(0,m.jsx)("img",{className:"filter-image",src:n,alt:"all"})}),(0,m.jsx)("div",{className:"filter-text ".concat("Womens"===s?"selected-text":""),children:(0,m.jsx)("span",{className:"option",children:"Women's"})})]}),(0,m.jsxs)("div",{className:"filter-option ".concat("Kids"===s?"selected":""),onClick:()=>a("Kids"),children:[(0,m.jsx)("div",{className:"brand-image",children:(0,m.jsx)("img",{className:"filter-image",src:r,alt:"Kids"})}),(0,m.jsx)("div",{className:"filter-text ".concat("Kids"===s?"selected-text":""),children:(0,m.jsx)("span",{className:"option",children:"Kid's"})})]}),(0,m.jsxs)("div",{className:"filter-option ".concat("Mens_accessories"===s?"selected":""),onClick:()=>a("Mens_accessories"),children:[(0,m.jsx)("div",{className:"brand-image",children:(0,m.jsx)("img",{className:"filter-image",src:d,alt:"Mens_accessories"})}),(0,m.jsx)("div",{className:"filter-text ".concat("Mens_accessories"===s?"selected-text":""),children:(0,m.jsx)("span",{className:"option",children:"Men's Accessories"})})]}),(0,m.jsxs)("div",{className:"filter-option ".concat("Womens_accessories"===s?"selected":""),onClick:()=>a("Womens_accessories"),children:[(0,m.jsx)("div",{className:"brand-image",children:(0,m.jsx)("img",{className:"filter-image",src:o,alt:"Womens_accessories"})}),(0,m.jsx)("div",{className:"filter-text ".concat("Womens_accessories"===s?"selected-text":""),children:(0,m.jsx)("span",{className:"option",children:"Women's Accessories"})})]})]}),(0,m.jsxs)("div",{className:"filter-section-price",children:[(0,m.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,m.jsxs)("div",{className:"price-filter",children:[(0,m.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>x(e.target.value),min:0}),(0,m.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>g(e.target.value),max:2e5}),(0,m.jsx)("button",{className:"Apply-button",onClick:()=>{c({minPrice:h,maxPrice:p})},children:"Apply"})]}),(0,m.jsx)("a",{href:"/fashion",className:"clear-filter",children:"Clear filter"})]})]})};var x=a(5330);class p extends i.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:s,maxPrice:a}=this.state;let i="".concat(x.Z,"/api/product/byCategory?category=fashion");const c=[];e&&c.push("subcategory=".concat(e)),s>=0&&c.push("minPrice=".concat(s)),a<=2e5&&c.push("maxPrice=".concat(a)),c.length>0&&(i+="&".concat(c.join("&"))),fetch(i).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,error:null})})).catch((e=>{this.setState({})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},(()=>{this.fetchProducts()}))},this.handleApplyPriceFilter=e=>{let{minPrice:s,maxPrice:a}=e;this.setState({minPrice:s,maxPrice:a},(()=>{this.fetchProducts()}))},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:s,error:a}=this.state;return(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),a?(0,m.jsxs)("p",{children:["Error fetching products: ",a.message]}):(0,m.jsx)(c.Z,{products:s})]})}}const g=p},7233:(e,s,a)=>{a.d(s,{Z:()=>l});var i=a(9867),c=(a(4956),a(2556)),t=a(2834);const l=e=>{let{products:s}=e;const[a,l]=(0,i.useState)(1),n=50*a,r=n-50,d=s.slice(r,n),o=e=>{const s=Math.floor(e),a=e-s>=.5,i=[];for(let c=1;c<=5;c++)c<=s||a&&c===Math.ceil(e)?i.push((0,t.jsx)("span",{className:"star",children:"\u2605"},c)):i.push((0,t.jsx)("span",{className:"star",children:"\u2606"},c));return i};return(0,t.jsxs)("div",{className:"deals-container-main",children:[(0,t.jsx)("div",{className:"deals-container",children:0===s.length?(0,t.jsx)("div",{className:"no-deals-container",children:(0,t.jsx)("p",{className:"no-deals-div",children:"Currently, No Deals Are available"})}):d.map((e=>(0,t.jsx)("div",{className:"main-deal-card",children:(0,t.jsxs)("div",{className:"deal-card",children:[(0,t.jsx)("a",{href:e.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsxs)("div",{className:"deal-body-div",children:[(0,t.jsx)("div",{className:"deal-image-div",children:(0,t.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})}),(0,t.jsx)("div",{className:"deal-title-div",children:(0,t.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,t.jsxs)("div",{className:"deal-down-div",children:[(0,t.jsxs)("div",{className:"brand-name-rating",children:[(0,t.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,t.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,t.jsxs)("div",{className:"deals-stars",children:[(0,t.jsx)("div",{className:"deal-rating-number",children:(0,t.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,t.jsx)("div",{className:"rating",children:o(e.rating)})]}):(0,t.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,t.jsxs)("div",{className:"deal-info",children:[(0,t.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,t.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,t.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]})}),(0,t.jsxs)("div",{className:"shopnow",children:[(0,t.jsx)("div",{className:"show-now-link",children:(0,t.jsx)("a",{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,t.jsx)("div",{className:"whatsapp-share",children:(0,t.jsx)(c.Z,{url:e.affiliateLink,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice})})]})]},e.itemId)},e.itemId)))}),(0,t.jsxs)("div",{className:"pagination-container",children:[(0,t.jsx)("button",{onClick:()=>{a>1&&l(a-1)},className:"pagination-button arrow-button",disabled:1===a,children:"\u2039"}),Array.from({length:Math.ceil(s.length/50)},((e,s)=>(0,t.jsx)("button",{onClick:()=>(l(s+1),void window.scrollTo(0,0)),className:"pagination-button ".concat(a===s+1?"active":""),children:s+1},s+1))),(0,t.jsx)("button",{onClick:()=>{a<Math.ceil(s.length/50)&&l(a+1)},className:"pagination-button arrow-button",disabled:a===Math.ceil(s.length/50),children:"\u203a"})]})]})}},6564:()=>{},9124:(e,s,a)=>{e.exports=a.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=746.9325b53f.chunk.js.map