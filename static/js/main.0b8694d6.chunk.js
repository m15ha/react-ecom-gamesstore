(this["webpackJsonpreact-ecom-gamesstore"]=this["webpackJsonpreact-ecom-gamesstore"]||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(14),i=a.n(c),s=(a(28),a(11)),o=a(4),l=a(23),d=a(5),m=a(22),u=a(21),j=a.n(u),b=(a(32),a(2)),h=function(e){var t=e.onClick,a=e.type,r=e.children,n=e.size,c=void 0===n?"s":n,i=j()({btn:!0,"btn--secondary":"secondary"===a,"btn--primary":"primary"===a,"btn--small":"s"===c,"btn--medium":"m"===c});return Object(b.jsx)("button",{className:i,onClick:t,children:r})},g=a(12),p=Object(g.b)({name:"cart",initialState:{itemsInCart:[]},reducers:{setItemInCart:function(e,t){e.itemsInCart.push(t.payload)},deleteItemFromCart:function(e,t){e.itemsInCart=e.itemsInCart.filter((function(e){return e.id!==t.payload}))}}}),f=p.actions,O=f.setItemInCart,x=f.deleteItemFromCart,v=p.reducer,w=a(16),y=(a(34),function(e){var t=e.title,a=e.price,r=e.id,n=Object(d.b)();return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsxs)("span",{children:[t," "]}),Object(b.jsxs)("div",{className:"cart-item__price",children:[Object(b.jsxs)("span",{children:[a," CAD."]}),Object(b.jsx)(w.a,{size:15,className:"cart-item__delete-icon",onClick:function(){n(x(r))}})]})]})}),_=function(e){return e.reduce((function(e,t){return e+t.price}),0)},N=(a(35),function(e){var t=e.onClick,a=Object(d.c)((function(e){return e.cart.itemsInCart}));return Object(b.jsxs)("div",{className:"cart-menu",children:[Object(b.jsx)("div",{className:"cart-menu__games-list",children:a.length>0?a.map((function(e){return Object(b.jsx)(y,{image:e.image,price:e.price,title:e.title,id:e.id},e.image)})):"Empty basket"}),a.length>0?Object(b.jsxs)("div",{className:"cart-menu__arrange",children:[Object(b.jsxs)("div",{className:"cart-menu__total-price",children:[Object(b.jsx)("span",{children:"Total:"}),Object(b.jsxs)("span",{children:[_(a)," CAD."]})]}),Object(b.jsx)(h,{type:"primary",size:"m",onClick:t,children:"Place order"})]}):null]})}),C=(a(36),function(e){var t=e.quantity,a=void 0===t?0:t;return a>0?Object(b.jsx)("div",{className:"items-in-cart",children:a}):null}),k=(a(37),function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(d.c)((function(e){return e.cart.itemsInCart})),i=Object(o.f)(),s=_(c),u=Object(r.useCallback)((function(){n(!1),i.push("/order")}),[i]);return Object(b.jsxs)("div",{className:"cart-block",children:[Object(b.jsx)(C,{quantity:c.length}),Object(b.jsx)(m.a,{color:"white",size:25,className:"cart-icon",onClick:function(){return n(!a)}}),s>0?Object(b.jsxs)("span",{className:"total-price",children:[s," CAD."]}):null,a&&Object(b.jsx)(N,{onClick:u})]})}),A=(a(40),function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(s.b,{to:"/",className:"header__store-title",children:"Game Store"})}),Object(b.jsx)("div",{className:"wrapper header__cart-btn-wrapper",children:Object(b.jsx)(k,{})})]})}),I=(a(41),function(e){var t=e.genre,a=void 0===t?"":t;return Object(b.jsx)("span",{className:"game-genre",children:a})}),S=(a(42),function(e){var t=e.game,a=Object(d.b)(),r=Object(d.c)((function(e){return e.cart.itemsInCart})).some((function(e){return e.id===t.id}));return Object(b.jsxs)("div",{className:"game-buy",children:[Object(b.jsxs)("span",{className:"game-buy__price",children:[t.price," CAD."]}),Object(b.jsx)(h,{type:r?"secondary":"primary",onClick:function(e){e.stopPropagation(),a(r?x(t.id):O(t))},children:r?"Remove":"Buy"})]})}),z=(a(43),function(e){var t=e.image,a=void 0===t?"":t;return Object(b.jsx)("div",{className:"game-cover",style:{backgroundImage:"url(".concat(a,")")}})}),B=Object(g.b)({name:"games",initialState:{currentGame:null},reducers:{setCurrentGame:function(e,t){e.currentGame=t.payload}}}),T=B.actions.setCurrentGame,F=B.reducer,G=(a(44),function(e){var t=e.game,a=Object(o.f)(),r=Object(d.b)();return Object(b.jsxs)("div",{className:"game-item",onClick:function(){r(T(t)),a.push("/app/".concat(t.title))},children:[Object(b.jsx)(z,{image:t.image}),Object(b.jsxs)("div",{className:"game-item__details",children:[Object(b.jsx)("span",{className:"game-item__title",children:t.title}),Object(b.jsx)("div",{className:"game-item__genre",children:t.genres.map((function(e){return Object(b.jsx)(I,{genre:e},e)}))}),Object(b.jsx)("div",{className:"game-item__buy",children:Object(b.jsx)(S,{game:t})})]})]})}),D=(a(45),[{image:"/react-ecom-gamesstore/game-covers/forza_5.jpeg",title:"Forza Horizon 5",genres:["Race","Simulator","Open world"],price:54,video:"https://www.youtube.com/embed/FYH9n37B7Yw",id:1,description:"Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars. Begin Your Horizon Adventure today and add to your Wishlist!"},{image:"/react-ecom-gamesstore/game-covers/battlefield_2042.jpg",title:"Battlefield 2042",genres:["Action","Shooter","War"],video:"https://www.youtube.com/embed/ASzOzrB-a9E",price:49,id:2,description:"Battlefield\u2122 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal."},{image:"/react-ecom-gamesstore/game-covers/life_is_strange_true_colors.jpeg",title:"Life is Strange True Colors",genres:["Deep plot","Protagonist"],video:"https://www.youtube.com/embed/b6CkzwVAr0M",price:49,id:3,description:"Life is Strange: True Colors is a narrative adventure featuring Alex Chen, a young woman with an astonishing supernatural power, through which she can experience the strong emotions of others."},{image:"/react-ecom-gamesstore/game-covers/gta_v.jpeg",title:"Grand Theft Auto V",genres:["Open world","Action"],video:"https://www.youtube.com/embed/QkkoHAzjnUs",price:55,id:4,description:"Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second."},{image:"/react-ecom-gamesstore/game-covers/rainbow_siege.jpeg",title:"Tom Clancy's Rainbow Six\xae Siege",video:"https://www.youtube.com/embed/6wlvYh0h63k",genres:["Tactics","Shooter"],price:60,id:5,description:"Face intense close quarters combat, high lethality, tactical decision making, team play and explosive action within every moment. Experience a new era of fierce firefights and expert strategy born from the rich legacy of past Tom Clancy's Rainbow Six games."},{image:"/react-ecom-gamesstore/game-covers/assassins_creed_valhalla.png",title:"Assassin's Creed Valhalla",genres:["Parkour","RPG","Open world"],video:"https://www.youtube.com/embed/ssrNcwxALS4",price:89,id:6,description:"Assassin's Creed Valhalla - Become Eivor, a mighty Viking raider and lead your clan from the harsh shores of Norway to a new home amid the lush farmlands of ninth-century England. Explore a beautiful, mysterious open world where you'll face brutal enemies, raid fortresses, build your clan's new settlement, and forge alliances to win glory and earn a place in Valhalla."}]),E=function(){return Object(b.jsx)("div",{className:"home-page",children:D.map((function(e){return Object(b.jsx)(G,{game:e},e.id)}))})},P=(a(46),function(){var e=Object(d.c)((function(e){return e.games.currentGame}));return e?Object(b.jsxs)("div",{className:"game-page",children:[Object(b.jsx)("h1",{className:"game-page__title",children:e.title}),Object(b.jsxs)("div",{className:"game-page__content",children:[Object(b.jsx)("div",{className:"game-page__left",children:Object(b.jsx)("iframe",{width:"90%",height:"400px",src:e.video,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})}),Object(b.jsxs)("div",{className:"game-page__right",children:[Object(b.jsx)(z,{image:e.image}),Object(b.jsx)("p",{children:e.description}),Object(b.jsx)("p",{className:"secondary-text",children:"Labels for the product:"}),e.genres.map((function(e){return Object(b.jsx)(I,{genre:e},e)})),Object(b.jsx)("div",{className:"game-page__buy-game",children:Object(b.jsx)(S,{game:e})})]})]})]}):null}),L=(a(47),function(e){var t=e.game,a=Object(d.b)();return Object(b.jsxs)("div",{className:"order-item",children:[Object(b.jsx)("div",{className:"order-item__cover",children:Object(b.jsx)(z,{image:t.image})}),Object(b.jsx)("div",{className:"order-item__title",children:Object(b.jsxs)("span",{children:[" ",t.title," "]})}),Object(b.jsxs)("div",{className:"order-item__price",children:[Object(b.jsxs)("span",{children:[t.price," CAD."]}),Object(b.jsx)(w.a,{size:25,className:"cart-item__delete-icon",onClick:function(){a(x(t.id))}})]})]})}),V=(a(48),function(){var e,t,a=Object(d.c)((function(e){return e.cart.itemsInCart}));return a.length<1?Object(b.jsx)("h1",{children:"Your basket is empty!"}):Object(b.jsxs)("div",{className:"order-page",children:[Object(b.jsx)("div",{className:"order-page__left",children:a.map((function(e){return Object(b.jsx)(L,{game:e})}))}),Object(b.jsx)("div",{className:"order-page__right",children:Object(b.jsx)("div",{className:"order-page__total-price",children:Object(b.jsxs)("span",{children:[a.length," ",(e=a.length,t=["item","items","items"],e>100&&(e%=100),e<=20&&e>=10?t[2]:(e>20&&(e%=10),1===e?t[0]:e>1&&e<5?t[1]:t[2]))," in total ",_(a)," CAD."]})})})]})}),Y=Object(g.a)({reducer:{games:F,cart:v}});var H=function(){return Object(b.jsx)(d.a,{store:Y,children:Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(A,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/order",children:Object(b.jsx)(V,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/app/:title",children:Object(b.jsx)(P,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(E,{})})]})]})})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),R()}},[[49,1,2]]]);
//# sourceMappingURL=main.0b8694d6.chunk.js.map