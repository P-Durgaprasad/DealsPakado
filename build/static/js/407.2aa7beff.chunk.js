"use strict";(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[407],{6404:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var t=a(2791),c=(a(7818),a(9124));const i=a.p+"static/media/ComputerAccessories.16c03e6fe4f4b4fb9eb1.png",l=a.p+"static/media/Desktop.71fe25fe25223c7aec21.png",r=a.p+"static/media/GamingLaptop.6cef62aa82cbff0f68a4.png",n=a.p+"static/media/Laptop.43725e97fbe801b745e3.png",o=a.p+"static/media/camera.6c8d598b957cbdeaf2a6.png",d=a.p+"static/media/headphones.6796ef69d1ac663b600b.png",m=a.p+"static/media/smartwatchs.96f6174dfdf0dbceb561.png";var p=a(184);const h=e=>{let{selectedSubCategory:s,onSubCategoryChange:a,onPriceChange:h}=e;const[x,g]=(0,t.useState)(0),[f,j]=(0,t.useState)(2e5);return(0,p.jsxs)("div",{className:"product-filter",children:[(0,p.jsx)("div",{className:"col-sm-12 col-lg-9 col-md-9",children:(0,p.jsxs)("div",{className:"brand-section",children:[(0,p.jsxs)("div",{className:"filter-option ".concat(""===s?"selected":""),onClick:()=>a(""),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:c,alt:"all"})}),(0,p.jsx)("div",{className:"filter-text ".concat(""===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"All Electronics"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Laptops"===s?"selected":""),onClick:()=>a("Laptops"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:n,alt:"Laptops"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Laptops"===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Laptops"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("GamingLaptop"===s?"selected":""),onClick:()=>a("GamingLaptop"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:r,alt:"Gaming Laptops"})}),(0,p.jsx)("div",{className:"filter-text ".concat("GamingLaptop"===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Gaming Laptops"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Desktops"===s?"selected":""),onClick:()=>a("Desktops"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:l,alt:"Desktops"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Desktops"===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Desktops"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("ComputerAccessories"===s?"selected":""),onClick:()=>a("ComputerAccessories"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:i,alt:"Accessories"})}),(0,p.jsx)("div",{className:"filter-text ".concat("ComputerAccessories"===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Accessories"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Headphones"===s?"selected":""),onClick:()=>a("Headphones"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:d,alt:"Headphones"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Headphones"===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Headphones"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Smartwatch"===s?"selected":""),onClick:()=>a("Smartwatch"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:m,alt:"Smart Watches"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Smartwatch"===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Smart Watches"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Camera"===s?"selected":""),onClick:()=>a("Camera"),children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:o,alt:"Cameras"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Camera"===s?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Cameras"})})]})]})}),(0,p.jsx)("div",{className:"col-sm-12 col-lg-3 col-md-3",children:(0,p.jsxs)("div",{className:"filter-section-price",children:[(0,p.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,p.jsxs)("div",{className:"price-filter",children:[(0,p.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>g(e.target.value),min:0}),(0,p.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>j(e.target.value),max:2e5}),(0,p.jsx)("button",{className:"Apply-button",onClick:()=>{h({minPrice:x,maxPrice:f})},children:"Apply"})]}),(0,p.jsx)("a",{href:"/electronics",className:"clear-filter",children:"Clear filter"})]})})]})};var x=a(7665),g=(a(6350),a(599));class f extends t.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:s,maxPrice:a}=this.state;let t="".concat(g.Z,"/api/product/byCategory?category=Electronics");const c=[];e&&c.push("subcategory=".concat(e)),s>=0&&c.push("minPrice=".concat(s)),a<=2e5&&c.push("maxPrice=".concat(a)),c.length>0&&(t+="&".concat(c.join("&"))),fetch(t).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,error:null})})).catch((e=>{this.setState({})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},(()=>{this.fetchProducts()}))},this.handleApplyPriceFilter=e=>{let{minPrice:s,maxPrice:a}=e;this.setState({minPrice:s,maxPrice:a},(()=>{this.fetchProducts()}))},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:s,error:a}=this.state;return(0,p.jsxs)("div",{className:"container-fluid ",children:[(0,p.jsx)(h,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),a?(0,p.jsx)("p",{className:"no-deals-div",children:"Currently No Deals Are available"}):(0,p.jsx)(x.Z,{products:s})]})}}const j=f},7818:()=>{},9124:(e,s,a)=>{e.exports=a.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=407.2aa7beff.chunk.js.map