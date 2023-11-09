"use strict";(self.webpackChunkdealsfinderindia=self.webpackChunkdealsfinderindia||[]).push([[690],{1655:function(e,a,i){var n=i(9439),t=i(2791),s=(i(6350),i(1858)),c=i(184);a.Z=function(e){var a=e.products,i=(0,t.useState)(1),r=(0,n.Z)(i,2),l=r[0],o=r[1],d=50*l,m=d-50,h=a.slice(m,d),u=function(e){for(var a=Math.floor(e),i=e-a>=.5,n=[],t=1;t<=5;t++)t<=a||i&&t===Math.ceil(e)?n.push((0,c.jsx)("span",{className:"star",children:"\u2605"},t)):n.push((0,c.jsx)("span",{className:"star",children:"\u2606"},t));return n};return(0,c.jsxs)("div",{className:"deals-container-main",children:[(0,c.jsx)("div",{className:"deals-container",children:0===a.length?(0,c.jsx)("div",{className:"no-deals-container",children:(0,c.jsx)("p",{className:"no-deals-div",children:"Currently No Deals Are available"})}):h.map((function(e){return(0,c.jsx)("div",{className:"main-deal-card",children:(0,c.jsxs)("div",{className:"deal-card",children:[(0,c.jsx)("a",{href:e.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsxs)("div",{className:"deal-body-div",children:[(0,c.jsx)("div",{className:"deal-image-div",children:(0,c.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})}),(0,c.jsx)("div",{className:"deal-title-div",children:(0,c.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,c.jsxs)("div",{className:"deal-down-div",children:[(0,c.jsxs)("div",{className:"brand-name-rating",children:[(0,c.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,c.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,c.jsxs)("div",{className:"deals-stars",children:[(0,c.jsx)("div",{className:"deal-rating-number",children:(0,c.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,c.jsx)("div",{className:"rating",children:u(e.rating)})]}):(0,c.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,c.jsxs)("div",{className:"deal-info",children:[(0,c.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,c.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,c.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]})}),(0,c.jsxs)("div",{className:"shopnow",children:[(0,c.jsx)("div",{className:"show-now-link",children:(0,c.jsx)("a",{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,c.jsx)("div",{className:"whatsapp-share",children:(0,c.jsx)(s.Z,{url:e.affiliateLink,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice})})]})]},e.itemId)},e.itemId)}))}),(0,c.jsxs)("div",{className:"pagination-container",children:[(0,c.jsx)("button",{onClick:function(){l>1&&o(l-1)},className:"pagination-button arrow-button",disabled:1===l,children:"\u2039"}),Array.from({length:Math.ceil(a.length/50)},(function(e,a){return(0,c.jsx)("button",{onClick:function(){return o(a+1),void window.scrollTo(0,0)},className:"pagination-button ".concat(l===a+1?"active":""),children:a+1},a+1)})),(0,c.jsx)("button",{onClick:function(){l<Math.ceil(a.length/50)&&o(l+1)},className:"pagination-button arrow-button",disabled:l===Math.ceil(a.length/50),children:"\u203a"})]})]})}},5246:function(e,a,i){i.r(a),i.d(a,{default:function(){return N}});var n=i(5671),t=i(3144),s=i(136),c=i(516),r=i(2791),l=i(9439),o=(i(7818),i(9124)),d=i.p+"static/media/homeoffice.8656288da08938c93fb7.png",m=i.p+"static/media/kitchen.62c67a5ace59a868ee3b.png",h=i.p+"static/media/bedroom.bc0ca60dba381fb070a3.png",u=i.p+"static/media/bathroom.2d1a86059d79c07ceea9.png",f=i.p+"static/media/outdoor.1c00d20a0925f65512bd.png",x=i(184),p=function(e){var a=e.selectedSubCategory,i=e.onSubCategoryChange,n=e.onPriceChange,t=(0,r.useState)(0),s=(0,l.Z)(t,2),c=s[0],p=s[1],g=(0,r.useState)(2e5),j=(0,l.Z)(g,2),N=j[0],v=j[1];return(0,x.jsxs)("div",{className:"product-filter",children:[(0,x.jsxs)("div",{className:"brand-section",children:[(0,x.jsxs)("div",{className:"filter-option ".concat(""===a?"selected":""),onClick:function(){return i("")},children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:o,alt:"all"})}),(0,x.jsx)("div",{className:"filter-text",children:(0,x.jsx)("span",{className:"option ".concat(""===a?"selected-text":""),children:"All Furniture's"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("HomeOffice"===a?"selected":""),onClick:function(){return i("HomeOffice")},children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:d,alt:"Home & Office"})}),(0,x.jsx)("div",{className:"filter-text ".concat("HomeOffice"===a?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Home & Office"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Kitchen"===a?"selected":""),onClick:function(){return i("Kitchen")},children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:m,alt:"Kitchen"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Kitchen"===a?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Kitchen"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Bedroom"===a?"selected":""),onClick:function(){return i("Bedroom")},children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:h,alt:"Bedroom"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Bedroom"===a?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Bedroom"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Bathroom"===a?"selected":""),onClick:function(){return i("Bathroom")},children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:u,alt:"Bathroom"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Bathroom"===a?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Bathroom"})})]}),(0,x.jsxs)("div",{className:"filter-option ".concat("Outdoor"===a?"selected":""),onClick:function(){return i("Outdoor")},children:[(0,x.jsx)("div",{className:"brand-image",children:(0,x.jsx)("img",{className:"filter-image",src:f,alt:"Outdoor"})}),(0,x.jsx)("div",{className:"filter-text ".concat("Outdoor"===a?"selected-text":""),children:(0,x.jsx)("span",{className:"option",children:"Living Room"})})]})]}),(0,x.jsxs)("div",{className:"filter-section-price",children:[(0,x.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,x.jsxs)("div",{className:"price-filter",children:[(0,x.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:function(e){return p(e.target.value)},min:0}),(0,x.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:function(e){return v(e.target.value)},max:2e5}),(0,x.jsx)("button",{className:"Apply-button",onClick:function(){n({minPrice:c,maxPrice:N})},children:"Apply"})]}),(0,x.jsx)("a",{href:"/furniture",className:"clear-filter",children:"Clear filter"})]})]})},g=i(1655),j=(i(6350),i(599)),N=function(e){(0,s.Z)(i,e);var a=(0,c.Z)(i);function i(e){var t;return(0,n.Z)(this,i),(t=a.call(this,e)).fetchProducts=function(){var e=t.state,a=e.selectedSubCategory,i=e.minPrice,n=e.maxPrice,s="".concat(j.Z,"/api/product/byCategory?category=HomeFurniture"),c=[];a&&c.push("subcategory=".concat(a)),i>=0&&c.push("minPrice=".concat(i)),n<=2e5&&c.push("maxPrice=".concat(n)),c.length>0&&(s+="&".concat(c.join("&"))),fetch(s).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){t.setState({products:e,error:null})})).catch((function(e){console.error("Error fetching products:",e),t.setState({error:e})}))},t.handleSubCategoryChange=function(e){t.setState({selectedSubCategory:e},(function(){t.fetchProducts()}))},t.handleApplyPriceFilter=function(e){var a=e.minPrice,i=e.maxPrice;t.setState({minPrice:a,maxPrice:i},(function(){t.fetchProducts()}))},t.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null},t}return(0,t.Z)(i,[{key:"componentDidMount",value:function(){this.fetchProducts()}},{key:"render",value:function(){var e=this.state,a=e.selectedSubCategory,i=e.products,n=e.error;return(0,x.jsxs)("div",{children:[(0,x.jsx)(p,{selectedSubCategory:a,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),n?(0,x.jsxs)("p",{children:["Error fetching products: ",n.message]}):(0,x.jsx)(g.Z,{products:i})]})}}]),i}(r.Component)},7818:function(){},9124:function(e,a,i){e.exports=i.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=690.1188e415.chunk.js.map