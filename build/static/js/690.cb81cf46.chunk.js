"use strict";(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[690],{5246:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var c=s(2791),a=(s(7818),s(9124));const i=s.p+"static/media/homeoffice.8656288da08938c93fb7.png",r=s.p+"static/media/kitchen.62c67a5ace59a868ee3b.png",l=s.p+"static/media/bedroom.bc0ca60dba381fb070a3.png",n=s.p+"static/media/bathroom.2d1a86059d79c07ceea9.png",o=s.p+"static/media/outdoor.1c00d20a0925f65512bd.png";var d=s(184);const m=e=>{let{selectedSubCategory:t,onSubCategoryChange:s,onPriceChange:m}=e;const[h,p]=(0,c.useState)(0),[x,u]=(0,c.useState)(2e5);return(0,d.jsxs)("div",{className:"product-filter",children:[(0,d.jsx)("div",{className:"col-sm-12 col-lg-9 col-md-9",children:(0,d.jsxs)("div",{className:"brand-section",children:[(0,d.jsxs)("div",{className:"filter-option ".concat(""===t?"selected":""),onClick:()=>s(""),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:a,alt:"all"})}),(0,d.jsx)("div",{className:"filter-text",children:(0,d.jsx)("span",{className:"option ".concat(""===t?"selected-text":""),children:"All Furniture's"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("HomeOffice"===t?"selected":""),onClick:()=>s("HomeOffice"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:i,alt:"Home & Office"})}),(0,d.jsx)("div",{className:"filter-text ".concat("HomeOffice"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Home & Office"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Kitchen"===t?"selected":""),onClick:()=>s("Kitchen"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:r,alt:"Kitchen"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Kitchen"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Kitchen"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Bedroom"===t?"selected":""),onClick:()=>s("Bedroom"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:l,alt:"Bedroom"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Bedroom"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Bedroom"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Bathroom"===t?"selected":""),onClick:()=>s("Bathroom"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:n,alt:"Bathroom"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Bathroom"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Bathroom"})})]}),(0,d.jsxs)("div",{className:"filter-option ".concat("Outdoor"===t?"selected":""),onClick:()=>s("Outdoor"),children:[(0,d.jsx)("div",{className:"brand-image",children:(0,d.jsx)("img",{className:"filter-image",src:o,alt:"Outdoor"})}),(0,d.jsx)("div",{className:"filter-text ".concat("Outdoor"===t?"selected-text":""),children:(0,d.jsx)("span",{className:"option",children:"Living Room"})})]})]})}),(0,d.jsx)("div",{className:"col-sm-12 col-lg-3 col-md-3",children:(0,d.jsxs)("div",{className:"filter-section-price",children:[(0,d.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,d.jsxs)("div",{className:"price-filter",children:[(0,d.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>p(e.target.value),min:0}),(0,d.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>u(e.target.value),max:2e5}),(0,d.jsx)("button",{className:"Apply-button",onClick:()=>{m({minPrice:h,maxPrice:x})},children:"Apply"})]}),(0,d.jsx)("a",{href:"/furniture",className:"clear-filter",children:"Clear filter"})]})})]})};var h=s(7665),p=(s(6350),s(599));class x extends c.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:t,maxPrice:s}=this.state;let c="".concat(p.Z,"/api/product/byCategory?category=HomeFurniture");const a=[];e&&a.push("subcategory=".concat(e)),t>=0&&a.push("minPrice=".concat(t)),s<=2e5&&a.push("maxPrice=".concat(s)),a.length>0&&(c+="&".concat(a.join("&"))),fetch(c).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,error:null})})).catch((e=>{this.setState({})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},(()=>{this.fetchProducts()}))},this.handleApplyPriceFilter=e=>{let{minPrice:t,maxPrice:s}=e;this.setState({minPrice:t,maxPrice:s},(()=>{this.fetchProducts()}))},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:t,error:s}=this.state;return(0,d.jsxs)("div",{className:"container-fluid ",children:[(0,d.jsx)(m,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),s?(0,d.jsxs)("p",{children:["Error fetching products: ",s.message]}):(0,d.jsx)(h.Z,{products:t})]})}}const u=x},7818:()=>{},9124:(e,t,s)=>{e.exports=s.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=690.cb81cf46.chunk.js.map