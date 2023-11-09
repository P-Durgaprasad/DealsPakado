"use strict";(self.webpackChunkdealsfinderindia=self.webpackChunkdealsfinderindia||[]).push([[180],{4759:function(e,a,i){i.r(a),i.d(a,{default:function(){return x}});var n=i(5671),s=i(3144),r=i(136),t=i(516),c=i(2791),l=i(1655),d=(i(6350),i(599)),o=i(9439),h=(i(7818),i(9124)),u=i.p+"static/media/BabyDress.1f68c4edaab63333b768.png",m=i.p+"static/media/diapers.0e55550a62c509385774.png",f=i(184),p=function(e){var a=e.selectedSubCategory,i=e.onSubCategoryChange,n=e.onPriceChange,s=(0,c.useState)(0),r=(0,o.Z)(s,2),t=r[0],l=r[1],d=(0,c.useState)(2e5),p=(0,o.Z)(d,2),x=p[0],g=p[1];return(0,f.jsxs)("div",{className:"product-filter",children:[(0,f.jsxs)("div",{className:"brand-section",children:[(0,f.jsxs)("div",{className:"filter-option ".concat(""===a?"selected":""),onClick:function(){return i("")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:h,alt:"All Appliance's"})}),(0,f.jsx)("div",{className:"filter-text ".concat(""===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"All Items"})})]}),(0,f.jsxs)("div",{className:"filter-option ".concat("BabyDress"===a?"selected":""),onClick:function(){return i("BabyDress")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:u,alt:"all"})}),(0,f.jsx)("div",{className:"filter-text ".concat("BabyDress"===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"Clothing"})})]}),(0,f.jsxs)("div",{className:"filter-option ".concat("diapers"===a?"selected":""),onClick:function(){return i("diapers")},children:[(0,f.jsx)("div",{className:"brand-image",children:(0,f.jsx)("img",{className:"filter-image",src:m,alt:"all"})}),(0,f.jsx)("div",{className:"filter-text ".concat("diapers"===a?"selected-text":""),children:(0,f.jsx)("span",{className:"option",children:"Diapers and Changing"})})]})]}),(0,f.jsxs)("div",{className:"filter-section-price",children:[(0,f.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,f.jsxs)("div",{className:"price-filter",children:[(0,f.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:function(e){return l(e.target.value)},min:0}),(0,f.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:function(e){return g(e.target.value)},max:2e5}),(0,f.jsx)("button",{className:"Apply-button",onClick:function(){n({minPrice:t,maxPrice:x})},children:"Apply"})]}),(0,f.jsx)("a",{href:"/babyitems",className:"clear-filter",children:"Clear filter"})]})]})},x=function(e){(0,r.Z)(i,e);var a=(0,t.Z)(i);function i(e){var s;return(0,n.Z)(this,i),(s=a.call(this,e)).fetchProducts=function(){var e=s.state,a=e.selectedSubCategory,i=e.minPrice,n=e.maxPrice,r="".concat(d.Z,"/api/product/byCategory?category=Baby"),t=[];a&&t.push("subcategory=".concat(a)),i>=0&&t.push("minPrice=".concat(i)),n<=2e5&&t.push("maxPrice=".concat(n)),t.length>0&&(r+="&".concat(t.join("&"))),fetch(r).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){s.setState({products:e,error:null})})).catch((function(e){console.error("Error fetching products:",e),s.setState({error:e})}))},s.handleSubCategoryChange=function(e){s.setState({selectedSubCategory:e},(function(){s.fetchProducts()}))},s.handleApplyPriceFilter=function(e){var a=e.minPrice,i=e.maxPrice;s.setState({minPrice:a,maxPrice:i},(function(){s.fetchProducts()}))},s.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null},s}return(0,s.Z)(i,[{key:"componentDidMount",value:function(){this.fetchProducts()}},{key:"render",value:function(){var e=this.state,a=e.selectedSubCategory,i=e.products,n=e.error;return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{selectedSubCategory:a,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),n?(0,f.jsxs)("p",{children:["Error fetching products: ",n.message]}):(0,f.jsx)(l.Z,{products:i})]})}}]),i}(c.Component)},1655:function(e,a,i){var n=i(9439),s=i(2791),r=(i(6350),i(1858)),t=i(184);a.Z=function(e){var a=e.products,i=(0,s.useState)(1),c=(0,n.Z)(i,2),l=c[0],d=c[1],o=50*l,h=o-50,u=a.slice(h,o),m=function(e){for(var a=Math.floor(e),i=e-a>=.5,n=[],s=1;s<=5;s++)s<=a||i&&s===Math.ceil(e)?n.push((0,t.jsx)("span",{className:"star",children:"\u2605"},s)):n.push((0,t.jsx)("span",{className:"star",children:"\u2606"},s));return n};return(0,t.jsxs)("div",{className:"deals-container-main",children:[(0,t.jsx)("div",{className:"deals-container",children:0===a.length?(0,t.jsx)("div",{className:"no-deals-container",children:(0,t.jsx)("p",{className:"no-deals-div",children:"Currently No Deals Are available"})}):u.map((function(e){return(0,t.jsx)("div",{className:"main-deal-card",children:(0,t.jsxs)("div",{className:"deal-card",children:[(0,t.jsx)("a",{href:e.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsxs)("div",{className:"deal-body-div",children:[(0,t.jsx)("div",{className:"deal-image-div",children:(0,t.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})}),(0,t.jsx)("div",{className:"deal-title-div",children:(0,t.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,t.jsxs)("div",{className:"deal-down-div",children:[(0,t.jsxs)("div",{className:"brand-name-rating",children:[(0,t.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,t.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,t.jsxs)("div",{className:"deals-stars",children:[(0,t.jsx)("div",{className:"deal-rating-number",children:(0,t.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,t.jsx)("div",{className:"rating",children:m(e.rating)})]}):(0,t.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,t.jsxs)("div",{className:"deal-info",children:[(0,t.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,t.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,t.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]})}),(0,t.jsxs)("div",{className:"shopnow",children:[(0,t.jsx)("div",{className:"show-now-link",children:(0,t.jsx)("a",{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,t.jsx)("div",{className:"whatsapp-share",children:(0,t.jsx)(r.Z,{url:e.affiliateLink,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice})})]})]},e.itemId)},e.itemId)}))}),(0,t.jsxs)("div",{className:"pagination-container",children:[(0,t.jsx)("button",{onClick:function(){l>1&&d(l-1)},className:"pagination-button arrow-button",disabled:1===l,children:"\u2039"}),Array.from({length:Math.ceil(a.length/50)},(function(e,a){return(0,t.jsx)("button",{onClick:function(){return d(a+1),void window.scrollTo(0,0)},className:"pagination-button ".concat(l===a+1?"active":""),children:a+1},a+1)})),(0,t.jsx)("button",{onClick:function(){l<Math.ceil(a.length/50)&&d(l+1)},className:"pagination-button arrow-button",disabled:l===Math.ceil(a.length/50),children:"\u203a"})]})]})}},7818:function(){},9124:function(e,a,i){e.exports=i.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=180.6f19d03e.chunk.js.map