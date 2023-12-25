"use strict";(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[171],{4796:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var t=a(2791),c=(a(7818),a(9124));const i=a.p+"static/media/rice.2d2cd4fab33ae3f89be6.png",l=a.p+"static/media/snacks.070b23768078bcb83320.png",n=a.p+"static/media/HouseHolds.9d3f87c400f6a2b58eef.png",r=a.p+"static/media/Body.9e29b81bb02b9db504ed.png";var o=a(184);const d=e=>{let{selectedSubCategory:s,onSubCategoryChange:a,onPriceChange:d}=e;const[h,m]=(0,t.useState)(0),[p,x]=(0,t.useState)(2e5);return(0,o.jsxs)("div",{className:"product-filter",children:[(0,o.jsxs)("div",{className:"brand-section",children:[(0,o.jsxs)("div",{className:"filter-option ".concat(""===s?"selected":""),onClick:()=>a(""),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:c,alt:"all"})}),(0,o.jsx)("div",{className:"filter-text ".concat(""===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"All Groceries"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("food"===s?"selected":""),onClick:()=>a("food"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:i,alt:"Food"})}),(0,o.jsx)("div",{className:"filter-text ".concat("food"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Rice, Atta, Dal"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("snacks"===s?"selected":""),onClick:()=>a("snacks"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:l,alt:"snacks"})}),(0,o.jsx)("div",{className:"filter-text ".concat("snacks"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Snacks"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("HouseHolds"===s?"selected":""),onClick:()=>a("HouseHolds"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:n,alt:"HouseHolds"})}),(0,o.jsx)("div",{className:"filter-text ".concat("HouseHolds"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Household's"})})]}),(0,o.jsxs)("div",{className:"filter-option ".concat("Bodycare"===s?"selected":""),onClick:()=>a("Bodycare"),children:[(0,o.jsx)("div",{className:"brand-image",children:(0,o.jsx)("img",{className:"filter-image",src:r,alt:"BodyCare"})}),(0,o.jsx)("div",{className:"filter-text ".concat("Bodycare"===s?"selected-text":""),children:(0,o.jsx)("span",{className:"option",children:"Personal Care"})})]})]}),(0,o.jsxs)("div",{className:"filter-section-price",children:[(0,o.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,o.jsxs)("div",{className:"price-filter",children:[(0,o.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>m(e.target.value),min:0}),(0,o.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>x(e.target.value),max:2e5}),(0,o.jsx)("button",{className:"Apply-button",onClick:()=>{d({minPrice:h,maxPrice:p})},children:"Apply"})]}),(0,o.jsx)("a",{href:"/grocery",className:"clear-filter",children:"Clear filter"})]})]})};var h=a(4607),m=(a(6350),a(599));class p extends t.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:s,maxPrice:a}=this.state;let t="".concat(m.Z,"/api/product/byCategory?category=Grocery");const c=[];e&&c.push("subcategory=".concat(e)),s>=0&&c.push("minPrice=".concat(s)),a<=2e5&&c.push("maxPrice=".concat(a)),c.length>0&&(t+="&".concat(c.join("&"))),fetch(t).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,isLoading:!1})})).catch((()=>{this.setState({isLoading:!1})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e},this.fetchProducts)},this.handleApplyPriceFilter=e=>{let{minPrice:s,maxPrice:a}=e;this.setState({minPrice:s,maxPrice:a},this.fetchProducts)},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],isLoading:!0}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:s,isLoading:a}=this.state;return(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)(d,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),a?(0,o.jsx)("p",{children:"Loading..."}):(0,o.jsx)(h.Z,{products:s})]})}}const x=p},7818:()=>{},9124:(e,s,a)=>{e.exports=a.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=171.23b22d6c.chunk.js.map