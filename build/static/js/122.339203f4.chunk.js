"use strict";(self.webpackChunkdealsfinderindia=self.webpackChunkdealsfinderindia||[]).push([[122],{3675:function(e,a,i){i.r(a),i.d(a,{default:function(){return N}});var s=i(5671),n=i(9466),r=i(136),t=i(516),c=i(2791),l=i(9439),o=(i(7818),i(9124)),d=i.p+"static/media/TV.8d6a6fd79e35f2c72619.png",h=i.p+"static/media/refrigerator1.3005be5e4b38822e9ca7.png",m=i.p+"static/media/AC.c3fc49b4458fa808d596.png",f=i.p+"static/media/Washing.e534d34aa79617acdf61.png",u=i.p+"static/media/Micro.2ffcc03680eff448b788.png",x=i.p+"static/media/Water.84b552af31de86210c6e.png",p=i(184),g=function(e){var a=e.selectedSubCategory,i=e.onSubCategoryChange,s=e.onPriceChange,n=(0,c.useState)(0),r=(0,l.Z)(n,2),t=r[0],g=r[1],v=(0,c.useState)(2e5),j=(0,l.Z)(v,2),N=j[0],b=j[1];return(0,p.jsxs)("div",{className:"product-filter",children:[(0,p.jsxs)("div",{className:"brand-section",children:[(0,p.jsxs)("div",{className:"filter-option ".concat(""===a?"selected":""),onClick:function(){return i("")},children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:o,alt:"All Appliance's"})}),(0,p.jsx)("div",{className:"filter-text ".concat(""===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"All Appliance's"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Refrigerators"===a?"selected":""),onClick:function(){return i("Refrigerators")},children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:h,alt:"Refrigerator's"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Refrigerators"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Refrigerator's"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("WashingMachines"===a?"selected":""),onClick:function(){return i("WashingMachines")},children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:f,alt:"Refrigerator's"})}),(0,p.jsx)("div",{className:"filter-text ".concat("WashingMachines"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"Washing Machine's"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("Televisions"===a?"selected":""),onClick:function(){return i("Televisions")},children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:d,alt:"Televisions's"})}),(0,p.jsx)("div",{className:"filter-text ".concat("Televisions"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"TV's"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("AirConditioners"===a?"selected":""),onClick:function(){return i("AirConditioners")},children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:m,alt:"AirConditioner's"})}),(0,p.jsx)("div",{className:"filter-text ".concat("AirConditioners"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"AC's"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("WaterPurifiers"===a?"selected":""),onClick:function(){return i("WaterPurifiers")},children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:x,alt:"AirConditioner's"})}),(0,p.jsx)("div",{className:"filter-text ".concat("WaterPurifiers"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"WaterPurifier's"})})]}),(0,p.jsxs)("div",{className:"filter-option ".concat("MicrowaveOvens"===a?"selected":""),onClick:function(){return i("MicrowaveOvens")},children:[(0,p.jsx)("div",{className:"brand-image",children:(0,p.jsx)("img",{className:"filter-image",src:u,alt:"MicrowaveOven's"})}),(0,p.jsx)("div",{className:"filter-text ".concat("MicrowaveOvens"===a?"selected-text":""),children:(0,p.jsx)("span",{className:"option",children:"MicrowaveOven's"})})]})]}),(0,p.jsxs)("div",{className:"filter-section-price",children:[(0,p.jsx)("label",{id:"price-label",children:"Set Price Range:"}),(0,p.jsxs)("div",{className:"price-filter",children:[(0,p.jsx)("input",{type:"number",id:"minValue",placeholder:"Min price",onChange:function(e){return g(e.target.value)},min:0}),(0,p.jsx)("input",{type:"number",id:"maxValue",placeholder:"Max price",onChange:function(e){return b(e.target.value)},max:2e5}),(0,p.jsx)("button",{className:"Apply-button",onClick:function(){s({minPrice:t,maxPrice:N})},children:"Apply"})]}),(0,p.jsx)("a",{href:"/appliances",className:"clear-filter",children:"Clear filter"})]})]})},v=i(1655),j=(i(6350),i(599)),N=function(e){(0,r.Z)(i,e);var a=(0,t.Z)(i);function i(e){var n;return(0,s.Z)(this,i),(n=a.call(this,e)).fetchProducts=function(){var e=n.state,a=e.selectedSubCategory,i=e.minPrice,s=e.maxPrice,r="".concat(j.Z,"/api/product/byCategory?category=Appliances"),t=[];a&&t.push("subcategory=".concat(a)),i>=0&&t.push("minPrice=".concat(i)),""!==s&&t.push("maxPrice=".concat(s)),t.length>0&&(r+="&".concat(t.join("&"))),fetch(r).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){n.setState({products:e,error:null})})).catch((function(e){console.error("Error fetching products:",e),n.setState({error:e})}))},n.handleSubCategoryChange=function(e){n.setState({selectedSubCategory:e},(function(){n.fetchProducts()}))},n.handleApplyPriceFilter=function(e){var a=e.minPrice,i=e.maxPrice;n.setState({minPrice:a,maxPrice:i},(function(){n.fetchProducts()}))},n.state={selectedSubCategory:"",minPrice:0,maxPrice:2e5,products:[],error:null},n}return(0,n.Z)(i,[{key:"componentDidMount",value:function(){this.fetchProducts()}},{key:"render",value:function(){var e=this.state,a=e.selectedSubCategory,i=e.products,s=e.error;return(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{selectedSubCategory:a,onPriceChange:this.handleApplyPriceFilter,onSubCategoryChange:this.handleSubCategoryChange}),s?(0,p.jsxs)("p",{children:["Error fetching products: ",s.message]}):(0,p.jsx)(v.Z,{products:i})]})}}]),i}(c.Component)},1655:function(e,a,i){var s=i(9439),n=i(2791),r=(i(6350),i(1858)),t=i(184);a.Z=function(e){var a=e.products,i=(0,n.useState)(1),c=(0,s.Z)(i,2),l=c[0],o=c[1],d=50*l,h=d-50,m=a.slice(h,d),f=function(e){for(var a=Math.floor(e),i=e-a>=.5,s=[],n=1;n<=5;n++)n<=a||i&&n===Math.ceil(e)?s.push((0,t.jsx)("span",{className:"star",children:"\u2605"},n)):s.push((0,t.jsx)("span",{className:"star",children:"\u2606"},n));return s};return(0,t.jsxs)("div",{className:"deals-container-main",children:[(0,t.jsx)("div",{className:"deals-container",children:0===a.length?(0,t.jsx)("div",{className:"no-deals-container",children:(0,t.jsx)("p",{className:"no-deals-div",children:"Currently No Deals Are available"})}):m.map((function(e){return(0,t.jsx)("div",{className:"main-deal-card",children:(0,t.jsxs)("div",{className:"deal-card",children:[(0,t.jsx)("a",{href:e.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsxs)("div",{className:"deal-body-div",children:[(0,t.jsx)("div",{className:"deal-image-div",children:(0,t.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})}),(0,t.jsx)("div",{className:"deal-title-div",children:(0,t.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,t.jsxs)("div",{className:"deal-down-div",children:[(0,t.jsxs)("div",{className:"brand-name-rating",children:[(0,t.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,t.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,t.jsxs)("div",{className:"deals-stars",children:[(0,t.jsx)("div",{className:"deal-rating-number",children:(0,t.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,t.jsx)("div",{className:"rating",children:f(e.rating)})]}):(0,t.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,t.jsxs)("div",{className:"deal-info",children:[(0,t.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,t.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,t.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]})}),(0,t.jsxs)("div",{className:"shopnow",children:[(0,t.jsx)("div",{className:"show-now-link",children:(0,t.jsx)("a",{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,t.jsx)("div",{className:"whatsapp-share",children:(0,t.jsx)(r.Z,{url:e.affiliateLink,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice})})]})]},e.itemId)})}))}),(0,t.jsxs)("div",{className:"pagination",children:[(0,t.jsx)("button",{onClick:function(){l>1&&o(l-1)},className:"pagination-button arrow-button",disabled:1===l,children:"\u2039"}),Array.from({length:Math.ceil(a.length/50)},(function(e,a){return(0,t.jsx)("button",{onClick:function(){return o(a+1),void window.scrollTo(0,0)},className:"pagination-button ".concat(l===a+1?"active":""),children:a+1},a+1)})),(0,t.jsx)("button",{onClick:function(){l<Math.ceil(a.length/50)&&o(l+1)},className:"pagination-button arrow-button",disabled:l===Math.ceil(a.length/50),children:"\u203a"})]})]})}},7818:function(){},9124:function(e,a,i){e.exports=i.p+"static/media/5110770.2fbe1466fe353ef256d2.png"}}]);
//# sourceMappingURL=122.339203f4.chunk.js.map