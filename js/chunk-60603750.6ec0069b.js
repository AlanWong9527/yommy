(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60603750"],{"8a98":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEZUlEQVRYR+2WXWgcVRTH/2dmt1BJbDFKChENmKr4hdrS1uiDYPyIKGofpKgVoqJibE2yc+/NJg9pH5KdO7PZhNQ+KH5h1UIfrKhQ2yhUkGpLrEVULFZJ0YDFDxqUItndOXLCpISY7Ecq5KUDw87cPfec3zn3fAxhiS9aYvs4D1B1BAYHB28qFovNANYCuD0+woMAxlzXPZRKpb6q5lirArDWbiMiBeCCBYycYebQGLOtUoiKAcIw/IiZ7xbFzLydiMaSyeSX8p7P59cw81oi6pN3ItqvlLqnEoiKAKy1jxLRWwC+dRznYc/zvptPeTabvSaKoj0ArmXmx4wxb5eDKAsQhuF6Zv5CFGmty8qLXBAEHEdig1LqcCmIsgqtta8Q0ZMAntFavyzKcrlcQ7FYHImi6FYiKgI44rru1lQq9XMM8DSAl5j5VWPMU+cEEATBNxJSAE1a6x9jAwcA3DlH8ajW+q74/ysAnJAj01pft2iA/v7++mQy+SsRTSilLo2V3wfgA0k0IuoCsDyKoowAEdFGpdRekQvD8Bdmbsjn86t6e3tPLQRR8gjCMLyFmQ8BOKy13iBKrLUpIsoSUaiU0rGxIWbuAGC01kEMKnmznoialVKfLwogk8k0ua77A4A/tdZ1sbFNzLwbwG6t9SOxsXcBPASgTWv9Rrz2B4CLisXi6nQ6Lccx71UyAr7vr3Ac57TsTCQSq7u6uk5ks9mLoyj6DMBVAM5I2csxADjuOM5tnuf9nsvlmgqFgoAjiqKV3d3dk4sCiD3ZD0CSa6vWeoes+b7fSkQjRNQUKx5n5heMMe/He7YAGAFwQGs93bwWDWCt3UxEbwKYcBynxfO870VZLpdbLuElokJdXd1PbW1t/8h6Npu9OoqijwE0MPPjxphd5wQQeyQK7wCwV2u9sZTCIAhm8uETrXVLKVn5r2wjijN/HREJRC0zv2iMkRD/57LW7iCi5wH8xcwtxpgj/wtAnP1tzPxarPCdZcuWdXV0dEzX9/DwcP3U1FQOwHRVENETSqnXyxmvOAIzioIg6AHQH79PMvN0JIhIknNFvN6rtR6oxHhVAJlMpjGdTo9bax+Mx+6Nc4wckzFtjHlPylBKthKIcp1Qms4mAA8QkbTfLZ7nnRwaGlpZKBT64u4nERhOJBLbOzs7Twuo67o7Adwr3TKKolFjzGhVZSgeyLRj5tZZG2UQjRHRh0op+TbAwMDAJfLb09PzW5ysUrKtzLyGiK6ctfcgMz9rjDk+F2TeCFhrdxLRcwCk5vcx875SXsznne/7zY7j3A9AbpmmZ1v3bPl5AXzfv95xnK9nCY4DOEZE41EUnQQwLs/JZFLW5ZOskZkbATQ6jnN5/HwzgMtmdBDRvB8nC+ZAGIY3MPNmuYmovpKEmivDzKeIaJfcSqnZDp0VLduI+vr6LqypqVkno5WZZbyukpJjZim7mdKbJCIZOFKaE8z8KTMfra2tPdre3v53KfiyAIvxvJo95wGWPAL/An3g1TC2Bw2OAAAAAElFTkSuQmCC"},b0c0:function(t,a,i){var s=i("83ab"),e=i("9bf2").f,o=Function.prototype,c=o.toString,l=/^\s*function ([^ (]*)/,r="name";s&&!(r in o)&&e(o,r,{configurable:!0,get:function(){try{return c.call(this).match(l)[1]}catch(t){return""}}})},c84b:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detail"},[s("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.goBack}}),s("div",[s("div",{staticClass:"detail-img-box"},[s("van-swipe",{attrs:{"indicator-color":"#c43b31"}},t._l(t.ProductDetailData.pics,(function(a,i){return s("van-swipe-item",{key:i},[s("img",{staticClass:"auto-img",attrs:{src:a.pics_mid},on:{click:t.showImg}})])})),1)],1)]),t.isShow?s("van-overlay",{attrs:{show:t.show},on:{click:t.showImg}},[s("div",{attrs:{"class-name":""}},[s("van-swipe",{staticClass:"mask-swipe-box",attrs:{"indicator-color":"#c43b31"}},t._l(t.ProductDetailData.pics,(function(t,a){return s("van-swipe-item",{key:a},[s("img",{staticClass:"auto-img",attrs:{src:t.pics_mid}})])})),1)],1)]):t._e(),s("div",{staticClass:"detail-price-box clearfix"},[s("div",{staticClass:"left-box fl"},[s("div",{staticClass:"product-price fl"},[t._v("￥"+t._s(t.ProductDetailData.goods_price))]),s("div",{staticClass:"product-price-fake fl"},[t._v("￥"+t._s(t.ProductDetailData.fakePrice))]),s("div",{staticClass:"product-discount fl"},[t._v(t._s(t.ProductDetailData.discount)+"折")])]),t._m(0)]),s("div",{staticClass:"detail-name-box tow-text"},[t._v(" "+t._s(t.ProductDetailData.goods_name)+" ")]),t._m(1),s("div",{staticClass:"detail-product-parameter clearfix",on:{click:t.showEject}},[s("div",{staticClass:"parameter-text fl"},[t._v("商品参数")]),s("div",{staticClass:"goods-title fl"},[t._v("主体参数、类别参数等")]),t._m(2)]),s("div",{staticClass:"distribution-box"},[s("div",{staticClass:"distribution-title clearfix"},[s("div",{staticClass:"fl distribution-text"},[t._v("配送至")]),s("div",{staticClass:"fl distribution-area",on:{click:t.showAear}},[t.isShowAearDta?t._e():s("div",[t._v("选择地址 ＞")]),t.isShowAearDta?s("div",[t._v(t._s(t.selectListData))]):t._e()]),s("div",{staticClass:"fl distribution-icon",on:{click:t.showAear}},[s("img",{staticClass:"auto-img",attrs:{src:i("8a98"),alt:""}})])]),s("div",{staticClass:"distribution-bottom"},[t._v("现在付款，最快"+t._s(t.getDate)+"送达")])]),s("van-popup",{style:{height:"50%"},attrs:{position:"bottom"},model:{value:t.isShowAear,callback:function(a){t.isShowAear=a},expression:"isShowAear"}},[s("van-area",{ref:"myArea",attrs:{"area-list":t.areaList,"columns-num":3,title:"选择地区"},on:{change:t.onChange,confirm:t.onConfirm,cancel:t.onCancel}})],1),t._m(3),t._m(4),s("van-popup",{style:{height:"70%"},attrs:{position:"bottom",round:"",fixed:""},model:{value:t.isEject,callback:function(a){t.isEject=a},expression:"isEject"}},[s("div",{staticClass:"eject-box"},[s("div",{staticClass:"eject-title"},[t._v("商品参数")]),t._l(t.ProductDetailData.attrs,(function(a,i){return s("div",{key:i,staticClass:"eject-content"},[s("div",{staticClass:"eject-content-title-box clearfix"},[s("div",{staticClass:"eject-content-title fl"},[t._v(t._s(a.attr_name))]),s("div",{staticClass:"eject-content-text fl tow-text"},[t._v(" "+t._s(a.attr_value)+" ")])])])})),s("div",{staticClass:"eject-bottom",on:{click:t.showEject}},[t._v("知道了")])],2)]),s("van-goods-action",[s("van-goods-action-icon",{attrs:{icon:"shopping-cart",text:"购物车",color:t.isAddShopcart?"#c43b31":"#777",badge:t.isAddShopcart?t.count:"",id:"iconBox"},on:{click:t.goLive}}),s("van-goods-action-icon",{attrs:{icon:"like",text:"收藏",color:t.isLike?"#c43b31":"#777"},on:{click:t.like}}),s("div",{staticClass:"custom"},[s("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],ref:"ball",staticClass:"ball"})]),s("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车",color:"#777"},on:{click:t.addShopcart}})],1),s("van-goods-action-button",{attrs:{color:"#c43b31",type:"danger",text:"立即购买"},on:{click:t.buyNow}})],1)],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"fr reight-box"},[i("img",{staticClass:"auto-img",attrs:{src:"https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/12/01/133/4fcb6d13f523d17b91ca4d5d560e3ce7_207x54_90.png",alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"detail-quality-goods clearfix"},[i("div",{staticClass:"goods-img fl"},[i("img",{staticClass:"auto-img",attrs:{src:"https://h2a.appsimg.com/b.appsimg.com/upload/momin/2019/12/23/16/1577086532213.png!85.webp",alt:""}})]),i("div",{staticClass:"goods-title fl"},[t._v("100%正品 · 专业鉴定 · 正品险")]),i("div",{staticClass:"goods-arrow fl"},[t._v("＞")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"parameter-arrow fl"},[i("img",{staticClass:"auto-img",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAGCAYAAADUtS5UAAAAAXNSR0IArs4c6QAAAPpJREFUKBW9krEKwkAMhi9pBSeh4OgmunZx8A26udUH8En6JD6A3dx8AwUXV8XNTaHoIIL2zvwtwXJ09uCaP1+SptcLOedovlj02XZ6Rpbl92O1XN6IyMH3V5qmQdCNJhIfISb1p/JV7PM8L/1c+FmWhcfzZeYcT+ET2e14OFiHVdMyjOQV4IZFC4O84uEvNJXPi93vs2JhSNv5ufDR1DqTSE0VlrpEmGE9abOojWlcT6o+bBvTuJ5UfVgwboJ/asad+g3bmObgTlWrbWMaw52qVgvGGCQbfAr5XyU2NJgm+RaDJJNwIAqe2NA18zNrH4PEZDZk+I4NDfYFOghtioWPVukAAAAASUVORK5CYII=",alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"freight-box clearfix"},[i("div",{staticClass:"fl freight-title"},[t._v("运费")]),i("div",{staticClass:"fl freight-text"},[t._v(" 新会员专享首单满38元免邮（限詠槑自营商品，部分商品不可用） ")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"detail-sale clearfix"},[i("div",{staticClass:"sale-warpper fl"},[i("div",{staticClass:"sale-title-box fl"},[i("div",{staticClass:"sale-radius fl"},[i("div",{staticClass:"sale-true"},[t._v("✔")])]),i("div",{staticClass:"fl sale-name"},[t._v("詠槑发货及售后")])]),i("div",{staticClass:"sale-title-box fl"},[i("div",{staticClass:"sale-radius fl"},[i("div",{staticClass:"sale-true"},[t._v("✔")])]),i("div",{staticClass:"fl sale-name"},[t._v("顺丰配送")])]),i("div",{staticClass:"sale-title-box fl"},[i("div",{staticClass:"sale-radius fl"},[i("div",{staticClass:"sale-true"},[t._v("✔")])]),i("div",{staticClass:"fl sale-name"},[t._v("7天无理由退换")])]),i("div",{staticClass:"sale-title-box fl"},[i("div",{staticClass:"sale-radius fl"},[i("div",{staticClass:"sale-true"},[t._v("✔")])]),i("div",{staticClass:"fl sale-name"},[t._v("退货无忧")])]),i("div",{staticClass:"sale-title-box fl"},[i("div",{staticClass:"sale-radius fl"},[i("div",{staticClass:"sale-true"},[t._v("✔")])]),i("div",{staticClass:"fl sale-name"},[t._v("7天可换")])])]),i("div",{staticClass:"sale-arrow fl"},[i("img",{staticClass:"auto-img",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAGCAYAAADUtS5UAAAAAXNSR0IArs4c6QAAAPpJREFUKBW9krEKwkAMhi9pBSeh4OgmunZx8A26udUH8En6JD6A3dx8AwUXV8XNTaHoIIL2zvwtwXJ09uCaP1+SptcLOedovlj02XZ6Rpbl92O1XN6IyMH3V5qmQdCNJhIfISb1p/JV7PM8L/1c+FmWhcfzZeYcT+ET2e14OFiHVdMyjOQV4IZFC4O84uEvNJXPi93vs2JhSNv5ufDR1DqTSE0VlrpEmGE9abOojWlcT6o+bBvTuJ5UfVgwboJ/asad+g3bmObgTlWrbWMaw52qVgvGGCQbfAr5XyU2NJgm+RaDJJNwIAqe2NA18zNrH4PEZDZk+I4NDfYFOghtioWPVukAAAAASUVORK5CYII=",alt:""}})])])}],o=(i("99af"),i("b0c0"),i("eadb"),i("33eb")),c={name:"Detail",data:function(){return{goods_id:"",show:!0,isShow:!1,isEject:!1,ProductDetailData:[],isLike:!1,count:0,isAddShopcart:!1,isShowAear:!1,areaList:o["a"],carmodel:"",selectListData:"",isShowAearDta:!1,flag:!1}},created:function(){this.goods_id=this.$route.params.goods_id,this.getProductDetailData()},methods:{goBack:function(){this.$router.go(-1)},getProductDetailData:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail",params:{goods_id:this.goods_id}}).then((function(a){if(t.$toast.clear(),t.ProductDetailData=a.data.message,t.ProductDetailData.fakePrice=a.data.message.goods_price*Math.ceil(9*Math.random()),t.ProductDetailData.discount="".concat(Math.ceil(9*Math.random()),".").concat(Math.ceil(9*Math.random())),0==t.ProductDetailData.goods_price&&(t.ProductDetailData.goods_price=1888),0==t.ProductDetailData.fakePrice&&(t.ProductDetailData.fakePrice=2*t.ProductDetailData.goods_price),t.ProductDetailData.pics.length<=0){var i={pics_mid:"http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_800x800.jpg"};t.ProductDetailData.pics.push(i)}})).catch((function(a){t.$toast.clear()}))},showImg:function(){this.isShow?this.isShow=!1:this.isShow=!0},showEject:function(){this.isEject=!this.isEject},addShopcart:function(){var t=localStorage.getItem("token");if(!t)return this.$toast("请登陆"),void this.$router.push({name:"Login"});this.$toast("加入购物车成功"),this.isAddShopcart=!0,this.count++;var a=this.count;this.flag=!this.flag,localStorage.setItem("myCount",a)},buyNow:function(){if(!this.isShowAearDta)return this.$toast("请选择配送地址");this.$router.push({name:"Live"}),this.$toast("购买成功")},like:function(){var t=localStorage.getItem("token");if(!t)return this.$toast("请登陆"),void this.$router.push({name:"Login"});this.isLike?(this.$toast("取消收藏"),this.isLike=!1):(this.$toast("收藏成功"),this.isLike=!0)},goLive:function(){if(!this.isAddShopcart)return this.$toast("购物车里什么也木有...");this.$router.push({name:"Live",params:{goods_id:this.ProductDetailData.goods_id}})},showAear:function(){this.isShowAear=!0},onChange:function(t,a,i){for(var s=t.getValues(),e="",o=0;o<s.length;o++)e=e+(0==o?"":"/")+s[o].name;this.carmodel=e},onConfirm:function(t){this.selectListData=t[0].name+","+t[1].name+","+t[2].name,this.isShowAear=!1,this.isShowAearDta=!0},onCancel:function(){this.$refs.myArea.reset()},beforeEnter:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t.style.transform="translate(".concat(a,",").concat(i,")")},enter:function(t,a){t.offsetWidth,t.style.transform="translate(".concat(-90,"px, ").concat(-20,"px)"),t.style.transition="all .5s",a()},afterEnter:function(t){this.flag=!this.flag}},computed:{getDate:function(){var t=new Date;return"".concat(t.getMonth()+1,"月").concat(t.getDate()+3,"日")}}},l=c,r=i("2877"),n=Object(r["a"])(l,s,e,!1,null,"557b22d4",null);a["default"]=n.exports},eadb:function(t,a,i){}}]);
//# sourceMappingURL=chunk-60603750.6ec0069b.js.map