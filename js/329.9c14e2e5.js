"use strict";(self["webpackChunkcgd103_g2"]=self["webpackChunkcgd103_g2"]||[]).push([[329],{3329:function(t,e,l){l.r(e),l.d(e,{default:function(){return K}});var i=l(3396),n=l(7139);const o=t=>((0,i.dD)("data-v-44e264ba"),t=t(),(0,i.Cn)(),t),d={key:1,class:"productContainer"},r={class:"prod-wrap"},c=o((()=>(0,i._)("h2",null,"我是假設的商品區",-1))),s={class:"items"},u=["src","alt"],a={class:"count"},_=["onClick"],p=["onClick"],v={class:"cart"},g={class:"cart-wrap"},m=o((()=>(0,i._)("h2",null,"購物車",-1))),h=o((()=>(0,i._)("ul",{class:"cart-title"},[(0,i._)("div",null,"產品"),(0,i._)("div",null,"名稱"),(0,i._)("div",null,"顏色"),(0,i._)("div",null,"尺寸"),(0,i._)("div",null,"數量"),(0,i._)("div",null,"單價"),(0,i._)("div",null,"總價")],-1))),w={key:0,class:"order-list"},z={class:"item-left"},C=["src","alt"],f={class:"item-right"},k={class:"item-des"},b={class:"item-p"},S={class:"count"},D=["onClick"],I=["onClick"],x=["onClick"],y={class:"detail"},$={class:"nextbtn"},A=o((()=>(0,i._)("button",null,"繼續逛逛",-1))),N=o((()=>(0,i._)("button",null,"去付款",-1))),B={key:1,class:"none-list"},L=o((()=>(0,i._)("li",null,"目前尚無商品",-1))),H=o((()=>(0,i._)("button",null,"去逛逛",-1)));function P(t,e,l,o,P,W){const Y=(0,i.up)("router-link");return P.load?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("loading...")],64)):((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",r,[c,(0,i._)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(P.product,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"item",key:t.id},[(0,i._)("p",null,(0,n.zw)(t.id),1),(0,i._)("img",{src:t.image,alt:t.title},null,8,u),(0,i._)("p",null,(0,n.zw)(t.title),1),(0,i._)("p",null,(0,n.zw)(t.color),1),(0,i._)("p",null,(0,n.zw)(t.size),1),(0,i._)("p",null,(0,n.zw)(t.price)+"元",1),(0,i._)("div",a,[(0,i._)("button",{onClick:l=>W.reduceCount(e,t)},"-",8,_),(0,i._)("button",{onClick:l=>W.addCount(e,t)},"+",8,p)])])))),128))])]),(0,i._)("div",v,[(0,i._)("div",g,[m,h,P.order.length>0?((0,i.wg)(),(0,i.iD)("ul",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(P.order,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"item",key:e.id},[(0,i._)("div",z,[(0,i._)("img",{src:e.image,alt:e.title},null,8,C)]),(0,i._)("div",f,[(0,i._)("div",k,[(0,i._)("div",null,(0,n.zw)(e.title),1),(0,i._)("div",null,(0,n.zw)(e.color),1),(0,i._)("div",null,(0,n.zw)(e.size),1)]),(0,i._)("div",b,[(0,i._)("div",S,[(0,i._)("button",{onClick:l=>W.reduceCount(t.index,e)},"-",8,D),(0,i._)("span",null,(0,n.zw)(e.count),1),(0,i._)("button",{onClick:l=>W.addCount(t.index,e)},"+",8,I)]),(0,i._)("div",null,"$"+(0,n.zw)(e.price)+"元",1),(0,i._)("div",null,"$"+(0,n.zw)(e.price*e.count)+"元",1),(0,i._)("div",null,[(0,i._)("button",{onClick:l=>W.dele(t.index,e)},"x",8,x)])])])])))),128)),(0,i._)("div",y,[(0,i._)("div",null,"共 "+(0,n.zw)(P.order.length)+" 種商品",1),(0,i._)("div",null,(0,n.zw)(P.vip_level[0].level_name)+" 會員等級折扣: -$"+(0,n.zw)(parseInt(W.total*(1-P.vip_level[0].discount))),1),(0,i._)("div",null,"總計: $"+(0,n.zw)(parseInt(W.total*P.vip_level[0].discount))+"元",1)]),(0,i._)("div",$,[(0,i.Wm)(Y,{to:"/ProductList"},{default:(0,i.w5)((()=>[A])),_:1}),(0,i.Wm)(Y,{to:"/Checkout"},{default:(0,i.w5)((()=>[N])),_:1})])])):((0,i.wg)(),(0,i.iD)("ul",B,[L,(0,i.Wm)(Y,{to:"/ProductList"},{default:(0,i.w5)((()=>[H])),_:1})]))])])]))}l(7658);var W={name:"Cart",components:{},data(){return{load:!1,source:[],count:[],order:[],min:0,max:0,memLevel:"BASIC",discount:.05,product:[{id:1,image:"https://nb.scene7.com/is/image/NB/m990gl5_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=472&hei=472",title:"Newbalance鞋",color:"灰色",size:"23cm",price:7990},{id:2,image:"https://pics.pzcdn.tw/pazzo/ProductBasics/f06d3568-2bd1-4b9c-9f9e-aef3dcceed16.jpg",title:"帆布袋",color:"米色",size:"F",price:590}],vip_level:[{level_id:1,product_item:3,level_name:"BASIC",discount:.95,price:899},{level_id:2,product_item:3,level_name:"STANDARD",discount:.9,price:1899},{level_id:3,product_item:4,level_name:"ULTRA",discount:.8,price:3999}]}},created(){this.getStorage()},computed:{total(t,e){if(this.product.length>0){let t=0;for(const e in this.order)t+=this.order[e]["count"]*this.order[e]["price"];return console.log(t),parseInt(t)}return 0}},methods:{addCount(t,e){console.log(e),this.count[t]+=1;const l=this.order.findIndex((t=>t.id===e.id));l>=0?this.order[l]["count"]+=1:this.order.push({id:e.id,title:e.title,image:e.image,color:e.color,size:e.size,price:e.price,count:1}),this.setStorage()},reduceCount(t,e){if(console.log(e),this.count[t]<=0)return;this.count[t]-=1;const l=this.order.findIndex((t=>t.id===e.id));l<0||(this.order[l]["count"]>1?this.order[l]["count"]-=1:(this.order.splice(l,1),alert("確定要刪除此產品嗎?")),this.setStorage())},getStorage(){let t=localStorage.getItem("order");t=JSON.parse(t),this.order=t||[]},setStorage(){const t=JSON.stringify(this.order);localStorage.setItem("order",t)},dele(t,e){const l=this.order.findIndex((t=>t.id===e.id));l<0||(this.order.splice(l,1),alert("確定要刪除此產品嗎?"),this.setStorage())}}},Y=l(89);const J=(0,Y.Z)(W,[["render",P],["__scopeId","data-v-44e264ba"]]);var K=J}}]);
//# sourceMappingURL=329.9c14e2e5.js.map