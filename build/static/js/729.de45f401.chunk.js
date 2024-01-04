"use strict";(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[729],{1205:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(7313),c=(s(4480),s(9124));const i=s.p+"static/media/homeoffice.97209170f5e3ad12b435.png",r=s.p+"static/media/kitchen.f092c6f64dbdd16f4601.png",n=s.p+"static/media/bedroom.6df0010a68d58872b64f.png",l=s.p+"static/media/bathroom.ee5a1786600a31eaeda4.png",o=s.p+"static/media/outdoor.653267c23e7eb47b090e.png";var d=s(6417);const m=e=>{let{selectedSubCategory:t,onSubCategoryChange:s,onPriceChange:m}=e;const[h,p]=(0,a.useState)(0),[x,u]=(0,a.useState)(2e5);return(0,d.jsxs)("div",{className:"product-filter",children:[(0,d.jsxs)("div",{className:"brand-section",children:[(0,d.jsxs)("div",{className:"filter-option ".concat(""===t?"selected":""),onClick:()=>s(""),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:c,alt:"all"})}),(0,d.jsx)("div",{className:"filter-text",children:(0,d.jsx)("span",{className:"option ".concat(""===t?"selected-text":""),children:"All Furniture's"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("HomeOffice"===t?"selected":""),onClick:()=>s("HomeOffice"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:i,alt:"Home & Office"})}),(0,d.jsx)("div",{className:"filter-text ".concat("HomeOffice"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Home & Office"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Kitchen"===t?"selected":""),onClick:()=>s("Kitchen"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:r,alt:"Kitchen"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Kitchen"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Kitchen"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Bedroom"===t?"selected":""),onClick:()=>s("Bedroom"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:n,alt:"Bedroom"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Bedroom"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Bedroom"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Bathroom"===t?"selected":""),onClick:()=>s("Bathroom"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:l,alt:"Bathroom"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Bathroom"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Bathroom"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Outdoor"===t?"selected":""),onClick:()=>s("Outdoor"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:o,alt:"Outdoor"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Outdoor"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Living Room"})})]})]}),(0,d.jsxs)("div",{className:"filter-section-price",children:[(0,d.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,d.jsxs)("div",{className:"price-filter",children:[(0,d.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>p(e.target.value),min:0}),(0,d.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>u(e.target.value),max:2e5}),(0,d.jsx)("button",{className:"Apply-button",onClick:()=>{m({minPrice:h,maxPrice:x})},children:"Apply"})]}),(0,d.jsx)("a",{href:"/furniture",className:"clear-filter",children:"Clear filter"})]})]})};var h=s(7578),p=(s(863),s(196));class x extends a.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:t,maxPrice:s}=this.state;let a="".concat(p.Z,"/api/product/byCategory?category=HomeFurniture");const c=[];e&&c.push("subcategory=".concat(e)),t>=0&&c.push("minPrice=".concat(t)),s<=2e5&&c.push("maxPrice=".concat(s)),c.length>0&&(a+="&".concat(c.join("&"))),fetch(a).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,isLoading:!1})})).catch((()=>{this.setState({isLoading:!1})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},this.fetchProducts)},this.handleApplyPriceFilter=e=>{let{minPrice:t,maxPrice:s}=e;this.setState({minPrice:t,maxPrice:s},this.fetchProducts)},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],isLoading:!0}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:t,isLoading:s}=this.state;return(0,d.jsxs)("div",{className:"container-fluid",children:[(0,d.jsx)(m,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),s?(0,d.jsx)("p",{children:"Loading..."}):(0,d.jsx)(h.Z,{products:t})]})}}const u=x},4480:()=>{},9124:(e,t,s)=>{e.exports=s.p+"static/media/5110770.5f5a5e65650a1509cae9.png"}}]);