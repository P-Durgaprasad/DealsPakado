"use strict";(self.webpackChunkdealspakado=self.webpackChunkdealspakado||[]).push([[302],{1057:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(7313),c=(t(4480),t(9124));const i=t.p+"static/media/MensSports.0e12a564dad83e74f03a.png",r=t.p+"static/media/WomenSports.4b8f8fa5b8f5910563bd.png";var n=t(5465),l=t(6417);const o=e=>{let{selectedSubCategory:s,onSubCategoryChange:t,onPriceChange:o}=e;const[d,p]=(0,a.useState)(0),[m,h]=(0,a.useState)(2e5);return(0,l.jsxs)("div",{className:"product-filter",children:[(0,l.jsxs)("div",{className:"brand-section",children:[(0,l.jsxs)("div",{className:"filter-option ".concat(""===s?"selected":""),onClick:()=>t(""),children:[(0,l.jsx)("div",{className:"brand-image",children:(0,l.jsx)("img",{className:"filter-image",src:c,alt:"all"})}),(0,l.jsx)("div",{className:"filter-text ".concat(""===s?"selected-text":""),children:(0,l.jsx)("span",{className:"option",children:"All Sports"})})]}),(0,l.jsxs)("div",{className:"filter-option ".concat("MensSportswear"===s?"selected":""),onClick:()=>t("MensSportswear"),children:[(0,l.jsx)("div",{className:"brand-image",children:(0,l.jsx)("img",{className:"filter-image",src:i,alt:"Mens Sportswear"})}),(0,l.jsx)("div",{className:"filter-text ".concat("MensSportswear"===s?"selected-text":""),children:(0,l.jsx)("span",{className:"option",children:"Mens Sportswear"})})]}),(0,l.jsxs)("div",{className:"filter-option ".concat("WomensSportswear"===s?"selected":""),onClick:()=>t("WomensSportswear"),children:[(0,l.jsx)("div",{className:"brand-image",children:(0,l.jsx)("img",{className:"filter-image",src:r,alt:"Womens Sportswear"})}),(0,l.jsx)("div",{className:"filter-text ".concat("WomensSportswear"===s?"selected-text":""),children:(0,l.jsx)("span",{className:"option",children:"Womens Sportswear"})})]}),(0,l.jsxs)("div",{className:"filter-option ".concat("Game"===s?"selected":""),onClick:()=>t("Game"),children:[(0,l.jsx)("div",{className:"brand-image",children:(0,l.jsx)("img",{className:"filter-image",src:n,alt:"Game Accessories"})}),(0,l.jsx)("div",{className:"filter-text ".concat("Game"===s?"selected-text":""),children:(0,l.jsx)("span",{className:"option",children:"Game Accessories"})})]})]}),(0,l.jsxs)("div",{className:"filter-section-price",children:[(0,l.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,l.jsxs)("div",{className:"price-filter",children:[(0,l.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:e=>p(e.target.value),min:0}),(0,l.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:e=>h(e.target.value),max:2e5}),(0,l.jsx)("button",{className:"Apply-button",onClick:()=>{o({minPrice:d,maxPrice:m})},children:"Apply"})]}),(0,l.jsx)("a",{href:"/sports",className:"clear-filter",children:"Clear filter"})]})]})};var d=t(7578),p=(t(863),t(196));class m extends a.Component{constructor(e){super(e),this.fetchProducts=()=>{const{selectedSubCategory:e,minPrice:s,maxPrice:t}=this.state;let a="".concat(p.Z,"/api/product/byCategory?category=Sports");const c=[];e&&c.push("subcategory=".concat(e)),s>=0&&c.push("minPrice=".concat(s)),t<=2e5&&c.push("maxPrice=".concat(t)),c.length>0&&(a+="&".concat(c.join("&"))),fetch(a).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,isLoading:!1,error:null})})).catch((()=>{this.setState({isLoading:!1})}))},this.handleSubCategoryChange=e=>{this.setState({selectedSubCategory:e,isLoading:!0},(()=>{this.fetchProducts()}))},this.handleApplyPriceFilter=e=>{let{minPrice:s,maxPrice:t}=e;this.setState({minPrice:s,maxPrice:t,isLoading:!0},(()=>{this.fetchProducts()}))},this.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],isLoading:!0}}componentDidMount(){this.fetchProducts()}render(){const{selectedSubCategory:e,products:s,isLoading:t,error:a}=this.state;return(0,l.jsxs)("div",{className:"container-fluid ",children:[(0,l.jsx)(o,{selectedSubCategory:e,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),t?(0,l.jsx)("p",{children:"Loading..."}):a?(0,l.jsxs)("p",{children:["Error fetching products: ",a.message]}):(0,l.jsx)(d.Z,{products:s})]})}}const h=m},4480:()=>{},9124:(e,s,t)=>{e.exports=t.p+"static/media/5110770.5f5a5e65650a1509cae9.png"},5465:(e,s,t)=>{e.exports=t.p+"static/media/Sports.66fb4983d73331350575.png"}}]);