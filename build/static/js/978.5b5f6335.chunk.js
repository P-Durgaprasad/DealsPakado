"use strict";(self.webpackChunkdealpakado=self.webpackChunkdealpakado||[]).push([[978],{7233:(e,a,s)=>{s.d(a,{Z:()=>n});var i=s(9867),r=(s(4956),s(2556)),l=s(2834);const n=e=>{let{products:a}=e;const[s,n]=(0,i.useState)(1),t=50*s,c=t-50,d=a.slice(c,t),o=e=>{const a=Math.floor(e),s=e-a>=.5,i=[];for(let r=1;r<=5;r++)r<=a||s&&r===Math.ceil(e)?i.push((0,l.jsx)("span",{className:"star",children:"\u2605"},r)):i.push((0,l.jsx)("span",{className:"star",children:"\u2606"},r));return i};return(0,l.jsxs)("div",{className:"deals-container-main",children:[(0,l.jsx)("div",{className:"deals-container",children:0===a.length?(0,l.jsx)("div",{className:"no-deals-container",children:(0,l.jsx)("p",{className:"no-deals-div",children:"Currently, No Deals Are available"})}):d.map((e=>(0,l.jsx)("div",{className:"main-deal-card",children:(0,l.jsxs)("div",{className:"deal-card",children:[(0,l.jsx)("a",{href:e.affiliateLink,className:"brandUrl",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsxs)("div",{className:"deal-body-div",children:[(0,l.jsx)("div",{className:"deal-image-div",children:(0,l.jsx)("img",{src:e.imageUrl,alt:e.title,className:"deal-image"})}),(0,l.jsx)("div",{className:"deal-title-div",children:(0,l.jsx)("h1",{className:"deal-title",children:e.itemTitle})}),(0,l.jsxs)("div",{className:"deal-down-div",children:[(0,l.jsxs)("div",{className:"brand-name-rating",children:[(0,l.jsx)("div",{className:"brandName-info",children:e.affiliateSite}),(0,l.jsx)("div",{className:"deal-rating",children:e.rating>0?(0,l.jsxs)("div",{className:"deals-stars",children:[(0,l.jsx)("div",{className:"deal-rating-number",children:(0,l.jsx)("span",{children:parseFloat(e.rating).toFixed(1)})}),(0,l.jsx)("div",{className:"rating",children:o(e.rating)})]}):(0,l.jsx)("div",{className:"no-reviews",children:"No Reviews"})})]}),(0,l.jsxs)("div",{className:"deal-info",children:[(0,l.jsxs)("div",{className:"regular-price",children:["Rs.",e.originalMRP.toLocaleString(),"/-"]}),(0,l.jsxs)("div",{className:"deal-price",children:["Rs.",e.offerPrice.toLocaleString(),"/-"]}),(0,l.jsxs)("span",{className:"offer-label",children:[Math.round((e.originalMRP-e.offerPrice)/e.originalMRP*100),"% Off"]})]})]})]})}),(0,l.jsxs)("div",{className:"shopnow",children:[(0,l.jsx)("div",{className:"show-now-link",children:(0,l.jsx)("a",{href:e.affiliateLink,className:"shop-now-button",target:"_blank",rel:"noopener noreferrer",children:"Shop Now"})}),(0,l.jsx)("div",{className:"whatsapp-share",children:(0,l.jsx)(r.Z,{url:e.affiliateLink,title:e.itemTitle,imageUrl:e.imageUrl,price:e.offerPrice})})]})]},e.itemId)},e.itemId)))}),(0,l.jsxs)("div",{className:"pagination-container",children:[(0,l.jsx)("button",{onClick:()=>{s>1&&n(s-1)},className:"pagination-button arrow-button",disabled:1===s,children:"\u2039"}),Array.from({length:Math.ceil(a.length/50)},((e,a)=>(0,l.jsx)("button",{onClick:()=>(n(a+1),void window.scrollTo(0,0)),className:"pagination-button ".concat(s===a+1?"active":""),children:a+1},a+1))),(0,l.jsx)("button",{onClick:()=>{s<Math.ceil(a.length/50)&&n(s+1)},className:"pagination-button arrow-button",disabled:s===Math.ceil(a.length/50),children:"\u203a"})]})]})}},978:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var i=s(9867),r=s(7233),l=(s(4956),s(5330)),n=s(2834);class t extends i.Component{constructor(){super(),this.fetchProducts=()=>{let e="".concat(l.Z,"/api/product/Under99");fetch(e).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.setState({products:e,error:null})})).catch((e=>{this.setState({})}))},this.state={products:[],error:null}}componentDidMount(){this.fetchProducts()}render(){const{products:e,error:a}=this.state;return(0,n.jsx)("div",{children:a?(0,n.jsx)("p",{children:"Server Down! please Try Again"}):(0,n.jsx)(r.Z,{products:e})})}}const c=t}}]);
//# sourceMappingURL=978.5b5f6335.chunk.js.map