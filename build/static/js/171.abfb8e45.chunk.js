"use strict";(self.webpackChunkdealsfinderindia=self.webpackChunkdealsfinderindia||[]).push([[171],{1655:function(e,a,s){var i=s(9439),n=s(2791),c=(s(6350),s(1858)),t=s(184);a.Z=function(e){var a=e.products,s=(0,n.useState)(1),r=(0,i.Z)(s,2),l=r[0],o=r[1],d=50*l,h=d-50,m=a.slice(h,d),u=function(e){for(var a=Math.floor(e),s=e-a>=.5,i=[],n=1;n<=5;n++)n<=a||s&&n===Math.ceil(e)?i.push((0,t.jsx)("span",{className:"star",children:"\u2605"},n)):i.push((0,t.jsx)("span",{className:"star",children:"\u2606"},n));return i};return(0,t.jsxs)("div",{className:"deals-container-main",children:[(0,t.jsx)("div",{className:"deals-container",children:0===a.length?(0,t.jsx)("div",{className:"no-deals-container",children:(0,t.jsx)("p",{className:"no-deals-div",children:"Currently No Deals Are available"})}):m.map((function(e){return(0,t.jsx)("div",{className:"main-deal-card",children:(0,t.jsxs)("div",{className:"deal-card",children:[(0,t.jsx)("a",{href:e.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsxs)("div",{className:"deal-body-div",children:[(0,t.jsx)("div",{className:"deal-image-div",children:(0,t.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})}),(0,t.jsx)("div",{className:"deal-title-div",children:(0,t.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,t.jsxs)("div",{className:"deal-down-div",children:[(0,t.jsxs)("div",{className:"brand-name-rating",children:[(0,t.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,t.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,t.jsxs)("div",{className:"deals-stars",children:[(0,t.jsx)("div",{className:"deal-rating-number",children:(0,t.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,t.jsx)("div",{className:"rating",children:u(e.rating)})]}):(0,t.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,t.jsxs)("div",{className:"deal-info",children:[(0,t.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,t.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,t.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]})}),(0,t.jsxs)("div",{className:"shopnow",children:[(0,t.jsx)("div",{className:"show-now-link",children:(0,t.jsx)("a",{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,t.jsx)("div",{className:"whatsapp-share",children:(0,t.jsx)(c.Z,{url:e.affiliateLink,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice})})]})]},e.itemId)},e.itemId)}))}),(0,t.jsxs)("div",{className:"pagination-container",children:[(0,t.jsx)("button",{onClick:function(){l>1&&o(l-1)},className:"pagination-button arrow-button",disabled:1===l,children:"\u2039"}),Array.from({length:Math.ceil(a.length/50)},(function(e,a){return(0,t.jsx)("button",{onClick:function(){return o(a+1),void window.scrollTo(0,0)},className:"pagination-button ".concat(l===a+1?"active":""),children:a+1},a+1)})),(0,t.jsx)("button",{onClick:function(){l<Math.ceil(a.length/50)&&o(l+1)},className:"pagination-button arrow-button",disabled:l===Math.ceil(a.length/50),children:"\u203a"})]})]})}},4796:function(e,a,s){s.r(a),s.d(a,{default:function(){return j}});var i=s(5671),n=s(3144),c=s(136),t=s(516),r=s(2791),l=s(9439),o=(s(7818),s(9124)),d=s.p+"static/media/rice.2d2cd4fab33ae3f89be6.png",h=s.p+"static/media/snacks.070b23768078bcb83320.png",m=s.p+"static/media/HouseHolds.9d3f87c400f6a2b58eef.png",u=s.p+"static/media/Body.9e29b81bb02b9db504ed.png",f=s(184),x=function(e){var a=e.selectedSubCategory,s=e.onSubCategoryChange,i=e.onPriceChange,n=(0,r.useState)(0),c=(0,l.Z)(n,2),t=c[0],x=c[1],p=(0,r.useState)(2e5),g=(0,l.Z)(p,2),j=g[0],N=g[1];return(0,f.jsxs)("div",{className:"product-filter",children:[(0,f.jsxs)("div",{className:"brand-section",children:[(0,f.jsxs)("div",{className:"filter-option ".concat(""===a?"selected":""),onClick:function(){return s("")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:o,alt:"all"})}),(0,f.jsx)("div",{className:"filter-text ".concat(""===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"All Groceries"})})]}),(0,f.jsxs)("div",{className:"filter-option ".concat("food"===a?"selected":""),onClick:function(){return s("food")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:d,alt:"Food"})}),(0,f.jsx)("div",{className:"filter-text ".concat("food"===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"Rice, Atta, Dal"})})]}),(0,f.jsxs)("div",{className:"filter-option ".concat("snacks"===a?"selected":""),onClick:function(){return s("snacks")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:h,alt:"snacks"})}),(0,f.jsx)("div",{className:"filter-text ".concat("snacks"===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"Snacks"})})]}),(0,f.jsxs)("div",{className:"filter-option ".concat("HouseHolds"===a?"selected":""),onClick:function(){return s("HouseHolds")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:m,alt:"HouseHolds"})}),(0,f.jsx)("div",{className:"filter-text ".concat("HouseHolds"===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"Household's"})})]}),(0,f.jsxs)("div",{className:"filter-option ".concat("Bodycare"===a?"selected":""),onClick:function(){return s("Bodycare")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:u,alt:"BodyCare"})}),(0,f.jsx)("div",{className:"filter-text ".concat("Bodycare"===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"Personal Care"})})]})]}),(0,f.jsxs)("div",{className:"filter-section-price",children:[(0,f.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,f.jsxs)("div",{className:"price-filter",children:[(0,f.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:function(e){return x(e.target.value)},min:0}),(0,f.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:function(e){return N(e.target.value)},max:2e5}),(0,f.jsx)("button",{className:"Apply-button",onClick:function(){i({minPrice:t,maxPrice:j})},children:"Apply"})]}),(0,f.jsx)("a",{href:"/grocery",className:"clear-filter",children:"Clear filter"})]})]})},p=s(1655),g=(s(6350),s(599)),j=function(e){(0,c.Z)(s,e);var a=(0,t.Z)(s);function s(e){var n;return(0,i.Z)(this,s),(n=a.call(this,e)).fetchProducts=function(){var e=n.state,a=e.selectedSubCategory,s=e.minPrice,i=e.maxPrice,c="".concat(g.Z,"/api/product/byCategory?category=Grocery"),t=[];a&&t.push("subcategory=".concat(a)),s>=0&&t.push("minPrice=".concat(s)),i<=2e5&&t.push("maxPrice=".concat(i)),t.length>0&&(c+="&".concat(t.join("&"))),fetch(c).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){n.setState({products:e,error:null})})).catch((function(e){console.error("Error fetching products:",e),n.setState({error:e})}))},n.handleSubCategoryChange=function(e){n.setState({selectedSubCategory:e},(function(){n.fetchProducts()}))},n.handleApplyPriceFilter=function(e){var a=e.minPrice,s=e.maxPrice;n.setState({minPrice:a,maxPrice:s},(function(){n.fetchProducts()}))},n.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null},n}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){this.fetchProducts()}},{key:"render",value:function(){var e=this.state,a=e.selectedSubCategory,s=e.products,i=e.error;return(0,f.jsxs)("div",{children:[(0,f.jsx)(x,{selectedSubCategory:a,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),i?(0,f.jsxs)("p",{children:["Error fetching products: ",i.message]}):(0,f.jsx)(p.Z,{products:s})]})}}]),s}(r.Component)},7818:function(){},9124:function(e,a,s){e.exports=s.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=171.abfb8e45.chunk.js.map