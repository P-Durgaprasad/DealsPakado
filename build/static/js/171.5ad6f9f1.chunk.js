"use strict";(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[171],{4796:(e,s,c)=>{c.r(s),c.d(s,{default:()=>x});var t=c(2791),a=(c(7818),c(9124));const i=c.p+"static/media/rice.2d2cd4fab33ae3f89be6.png",l=c.p+"static/media/snacks.070b23768078bcb83320.png",r=c.p+"static/media/HouseHolds.9d3f87c400f6a2b58eef.png",n=c.p+"static/media/Body.9e29b81bb02b9db504ed.png";var o=c(184);const d=e=>{let{selectedSubCategory:s,onSubCategoryChange:c,onPriceChange:d}=e;const[h,m]=(0,t.useState)(0),[p,x]=(0,t.useState)(2e5);return(0,o.jsxs)("div",{className:"product-filter",children:[(0,o.jsx)("div",{className:"col-sm-12 col-lg-9 col-md-9",children:(0,o.jsxs)("div",{className:"brand-section",children:[(0,o.jsxs)("div",{className:"filter-option ".concat(""===s?"selected":""),onClick:()=>c(""),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:a,alt:"all"})}),(0,o.jsx)("div",{className:"filter-text ".concat(""===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"All Groceries"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("food"===s?"selected":""),onClick:()=>c("food"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:i,alt:"Food"})}),(0,o.jsx)("div",{className:"filter-text ".concat("food"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Rice, Atta, Dal"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("snacks"===s?"selected":""),onClick:()=>c("snacks"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:l,alt:"snacks"})}),(0,o.jsx)("div",{className:"filter-text ".concat("snacks"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Snacks"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("HouseHolds"===s?"selected":""),onClick:()=>c("HouseHolds"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:r,alt:"HouseHolds"})}),(0,o.jsx)("div",{className:"filter-text ".concat("HouseHolds"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Household's"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("Bodycare"===s?"selected":""),onClick:()=>c("Bodycare"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:n,alt:"BodyCare"})}),(0,o.jsx)("div",{className:"filter-text ".concat("Bodycare"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Personal Care"})})]})]})}),(0,o.jsx)("div",{className:"col-sm-12 col-lg-3 col-md-3",children:(0,o.jsxs)("div",{className:"filter-section-price",children:[(0,o.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,o.jsxs)("div",{className:"price-filter",children:[(0,o.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>m(e.target.value),min:0}),(0,o.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>x(e.target.value),max:2e5}),(0,o.jsx)("button",{className:"Apply-button",onClick:()=>{d({minPrice:h,maxPrice:p})},children:"Apply"})]}),(0,o.jsx)("a",{href:"/grocery",className:"clear-filter",children:"Clear filter"})]})})]})};var h=c(7665),m=(c(6350),c(599));class p extends t.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:s,maxPrice:c}=this.state;let t="".concat(m.Z,"/api/product/byCategory?category=Grocery");const a=[];e&&a.push("subcategory=".concat(e)),s>=0&&a.push("minPrice=".concat(s)),c<=2e5&&a.push("maxPrice=".concat(c)),a.length>0&&(t+="&".concat(a.join("&"))),fetch(t).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,error:null})})).catch((e=>{this.setState({})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},(()=>{this.fetchProducts()}))},this.handleApplyPriceFilter=e=>{let{minPrice:s,maxPrice:c}=e;this.setState({minPrice:s,maxPrice:c},(()=>{this.fetchProducts()}))},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:s,error:c}=this.state;return(0,o.jsxs)("div",{className:"container-fluid ",children:[(0,o.jsx)(d,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),c?(0,o.jsxs)("p",{children:["Error fetching products: ",c.message]}):(0,o.jsx)(h.Z,{products:s})]})}}const x=p},7818:()=>{},9124:(e,s,c)=>{e.exports=c.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=171.5ad6f9f1.chunk.js.map