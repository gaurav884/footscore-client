(this["webpackJsonpreact-footballl"]=this["webpackJsonpreact-footballl"]||[]).push([[0],{110:function(e,t,s){},128:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(23),n=s.n(a),i=(s(55),s(56),s(57),s(58),s(59),s(60),s(61),s(62),s(63),s(64),s(65),s(66),s(45)),l=s(15),r=(s(76),s(4)),o=s(8),j=s(46),d=s(3),u=s(7),b=s.n(u),h=s(10),O=s(17),m=s(1),g=function(){var e=Object(o.g)(),t=Object(c.useState)([]),s=Object(d.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(0),r=Object(d.a)(i,2),j=r[0],u=r[1],g=a.length;function x(){u(j===g-1?0:j+1)}function p(){u(0===j?g-1:j-1)}function f(){return(f=Object(h.a)(b.a.mark((function t(){var s,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/news/skjdfbskjbfksjfbds32wjebrkwi3");case 3:return s=t.sent,t.next=6,s.json();case 6:c=t.sent,n(c.data),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),e.go(0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){if(window.innerWidth>900){var e=setInterval((function(){return x()}),5e3);return function(){return clearInterval(e)}}}),[j]),Object(c.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),0===a.length?Object(m.jsx)("div",{className:"loading-screen",children:Object(m.jsx)(O.RotateLoader,{color:"white",loading:!0})}):Object(m.jsx)(m.Fragment,{children:a.map((function(e,t){return Object(m.jsxs)("div",{className:t===j?"slide-active":"slide",children:[Object(m.jsx)(l.d,{className:"leftSlider",onClick:p}),Object(m.jsx)(l.e,{className:"rightSlider",onClick:x}),t===j&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:e.image,alt:e.slug}),Object(m.jsxs)("div",{className:"image-content",children:[Object(m.jsx)("h3",{className:"image-title",children:e.title}),Object(m.jsxs)("p",{className:"image-description",children:[" ",e.description]}),Object(m.jsx)("a",{className:"more-link",href:e.url,target:"_blank",children:" Read More....."})]})]})]},e.id)}))})},x=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1];function n(){a(!s)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:s?"nav-links-container nav-mobi":"nav-links-container",children:Object(m.jsxs)("ul",{className:"nav-links",children:[Object(m.jsx)(r.b,{onClick:n,className:"nav-link",to:"/",children:Object(m.jsx)("li",{children:"Home"})}),Object(m.jsx)(r.b,{onClick:n,className:"nav-link",to:"/highlights",children:Object(m.jsx)("li",{children:"Highlights"})}),Object(m.jsx)(r.b,{onClick:n,className:"nav-link",to:"/leagues",children:Object(m.jsx)("li",{children:"Leagues"})}),Object(m.jsx)(r.b,{onClick:n,className:"nav-link",to:"/stats",children:Object(m.jsx)("li",{children:"Stats"})})]})}),Object(m.jsxs)("div",{className:"toggle-button",onClick:n,children:[Object(m.jsx)("span",{className:"toggle-bars"}),Object(m.jsx)("span",{className:"toggle-bars"}),Object(m.jsx)("span",{className:"toggle-bars"})]})]})},p=function(){return Object(m.jsx)("a",{className:"brand-link",href:"/",children:Object(m.jsxs)("div",{className:"brand",children:[Object(m.jsx)("div",{className:"brand-name",children:Object(m.jsx)("h1",{children:" FootScore "})}),Object(m.jsx)("div",{className:"brand-logo",children:Object(m.jsx)("img",{src:"./logo-brand.png",className:"logo",alt:"brand-image"})})]})})},f=s(48),v=s(49),N=function(){return Object(m.jsxs)("div",{className:"icon-container",children:[Object(m.jsx)("a",{className:"social-icons-link",href:"https://www.facebook.com/profile.php?id=100035651117027",target:"_blank",children:Object(m.jsx)(f.a,{className:"social-icons"})}),Object(m.jsx)("a",{className:"social-icons-link",href:"https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|528180820730|e|instagram%20%27|&placement=&creative=528180820730&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D123868089099%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9297884%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwp_GJBhBmEiwALWBQk_K1_QP10wL_oQ2igqOh431LEj24sra1WIH-_zmkmUhRN65APD4atRoCfHwQAvD_BwE",target:"_blank",children:Object(m.jsx)(l.c,{className:"social-icons"})}),Object(m.jsx)("a",{className:"social-icons-link",href:"https://twitter.com/Gaurav28692722",target:"_blank",children:Object(m.jsx)(v.a,{className:"social-icons"})})]})},k=function(){return Object(m.jsx)("nav",{children:Object(m.jsxs)("div",{className:"nav-container",id:"navbar-id",children:[Object(m.jsx)(p,{}),Object(m.jsx)(x,{}),Object(m.jsx)(N,{})]})})},y=function(){var e=(new Date).getFullYear();return Object(m.jsx)("div",{className:"footer-outer",children:Object(m.jsxs)("div",{className:"footer-container",children:[Object(m.jsxs)("div",{className:"footer-container-1",children:[Object(m.jsxs)("div",{className:"address-container",children:[Object(m.jsx)("p",{className:"footer-headings",children:"Address"}),Object(m.jsx)("p",{className:"address",children:"House no. 209 ward 4"})]}),Object(m.jsxs)("div",{className:"social-container",children:[Object(m.jsx)("p",{className:"footer-headings",children:"Social Media "}),Object(m.jsxs)("ul",{className:"footer-social-links",children:[Object(m.jsx)("a",{href:"https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|528180820730|e|instagram%20%27|&placement=&creative=528180820730&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D123868089099%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9297884%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwp_GJBhBmEiwALWBQk_K1_QP10wL_oQ2igqOh431LEj24sra1WIH-_zmkmUhRN65APD4atRoCfHwQAvD_BwE",target:"_blank",children:Object(m.jsx)("li",{className:"footer-social-links",children:"Instagram"})}),Object(m.jsx)("a",{href:"https://twitter.com/Gaurav28692722",target:"_blank",children:Object(m.jsx)("li",{className:"footer-social-links",children:"Twitter"})}),Object(m.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100035651117027",target:"_blank",children:Object(m.jsx)("li",{className:"footer-social-links",children:"Facebook"})})]})]}),Object(m.jsxs)("div",{className:"contact-container",children:[Object(m.jsx)("p",{className:"footer-headings",children:"Contact"}),Object(m.jsx)("p",{className:"contact-info",children:"Email ID: tgaurav053@gmail.com"}),Object(m.jsx)("p",{className:"contact-info",children:"Mobile : 78786037884"})]})]}),Object(m.jsx)("div",{className:"footer-container-2",children:Object(m.jsxs)("p",{children:["\xa9 Copyright FootScore ",e," "]})})]})})},w=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"features-container",children:[Object(m.jsx)(r.b,{to:"/highlights",children:Object(m.jsxs)("div",{className:"highlights-card feature-card",children:[Object(m.jsx)("h2",{children:"Highlights"}),Object(m.jsx)("div",{className:"highlights-card-imagecontainer",children:Object(m.jsx)("img",{src:"./highlights-card.jpg",alt:"highlights-card"})}),Object(m.jsx)("p",{children:"Get all the recent highlights from the world's top 5 leagues"})]})}),Object(m.jsx)(r.b,{to:"/leagues",children:Object(m.jsxs)("div",{className:"leagues-card feature-card",children:[Object(m.jsx)("h2",{children:"Leagues"}),Object(m.jsx)("div",{className:"leagues-card-imagecontainer ",children:Object(m.jsx)("img",{src:"./leagues-card.jpg",alt:"leagues-card"})}),Object(m.jsx)("p",{children:"Get all the information about the league's standings and top scorer etc."})]})}),Object(m.jsx)(r.b,{to:"/stats",children:Object(m.jsxs)("div",{className:"player-card feature-card",children:[Object(m.jsx)("h2",{children:"Players & Teams"}),Object(m.jsx)("div",{className:"leagues-card-image-container",children:Object(m.jsx)("img",{src:"./player-card.jpg",alt:"player-card"})}),Object(m.jsx)("p",{children:"Get your player's bio and stats of the season"})]})})]})})},S=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"caraousel-outer-container",children:Object(m.jsx)(g,{})}),Object(m.jsxs)("div",{className:"widget-container",children:[Object(m.jsx)("h1",{className:"widget-heading",children:"LiveScores / Fixtures"}),Object(m.jsx)("div",{className:s?"score-widget-wrapper load-more":"score-widget-wrapper",children:Object(m.jsx)("iframe",Object(j.a)({className:"score-widget",src:"https://www.scorebat.com/embed/livescore/"},"className","_scorebatEmbeddedPlayer_"))}),Object(m.jsx)(l.b,{className:s?"extending-button-up":"extending-button-down",onClick:function(){a(!s)}})]}),Object(m.jsx)(w,{}),Object(m.jsx)(y,{})]})},D=function(e){var t=Object(o.g)(),s=Object(c.useState)([]),a=Object(d.a)(s,2),n=a[0],i=a[1];Object(c.useEffect)((function(){l()}),[]),Object(c.useEffect)((function(){l()}),[]);var l=function(){var s=Object(h.a)(b.a.mark((function s(){var c,a;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch("https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=".concat(e.leagueId),{method:"GET",headers:{"x-rapidapi-host":"api-football-beta.p.rapidapi.com","x-rapidapi-key":"a299d229bamsh6420a099566ec81p147e9ejsn4d9a39597510"}});case 3:return c=s.sent,s.next=6,c.json();case 6:a=s.sent,i(a.response.slice(0,10)),s.next=14;break;case 10:s.prev=10,s.t0=s.catch(0),console.log(s.t0),t.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf");case 14:case"end":return s.stop()}}),s,null,[[0,10]])})));return function(){return s.apply(this,arguments)}}();return void 0==n?Object(m.jsx)(m.Fragment,{}):Object(m.jsx)(m.Fragment,{children:n.map((function(e,t){return Object(m.jsx)("div",{className:"top-scorer-container",children:Object(m.jsxs)("div",{className:"top-scorer-card-container",children:[Object(m.jsx)("div",{className:"scorer-position",children:Object(m.jsxs)("h2",{children:[t+1,"."]})}),Object(m.jsx)("div",{className:"player-image-container",children:Object(m.jsx)("img",{className:"player-image",src:e.player.photo})}),Object(m.jsxs)("div",{className:"player-info",children:[Object(m.jsxs)("h3",{children:[" ",e.player.name]}),Object(m.jsxs)("p",{children:["Team : ",e.statistics[0].team.name]}),Object(m.jsxs)("p",{children:["Goals : ",e.statistics[0].goals.total]})]})]})},t)}))})},R=function(e){var t=Object(o.g)(),s=Object(c.useState)([]),a=Object(d.a)(s,2),n=a[0],i=a[1],l=Object(c.useState)([]),r=Object(d.a)(l,2),j=r[0],u=r[1];function g(){return(g=Object(h.a)(b.a.mark((function s(){var c,a;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch("/standingTable/skjdfh384yt89hiroshfg0d8hg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:"".concat(e.LeagueID)})});case 3:return c=s.sent,s.next=6,c.json();case 6:a=s.sent,u(JSON.parse(a)),i(JSON.parse(a).standings[0]),s.next=15;break;case 11:s.prev=11,s.t0=s.catch(0),console.log(s.t0),t.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf");case 15:case"end":return s.stop()}}),s,null,[[0,11]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){g.apply(this,arguments)}(),window.scrollTo(0,0)}),[]),0===n.length?Object(m.jsx)("div",{className:"loading-screen",children:Object(m.jsx)(O.RotateLoader,{color:"white",loading:!0})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"league-info-container",children:[Object(m.jsxs)("div",{className:"league-container-1",children:[Object(m.jsxs)("div",{className:"league-name",children:[Object(m.jsx)("img",{className:"league-logo",src:j.logo,alt:j.name}),Object(m.jsxs)("h2",{className:"league-name-heading",children:[j.name," Standings"]})]}),Object(m.jsx)("div",{className:"standings-container",children:Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{className:"standings-row",children:[Object(m.jsx)("th",{className:"standings-cell",children:"Pos"}),Object(m.jsx)("th",{className:"standings-cell",children:"Club"}),Object(m.jsx)("th",{className:"standings-cell",children:"P"}),Object(m.jsx)("th",{className:"standings-cell",children:"W"}),Object(m.jsx)("th",{className:"standings-cell",children:"L"}),Object(m.jsx)("th",{className:"standings-cell",children:"D"}),Object(m.jsx)("th",{className:"standings-cell",children:"Pts"})]}),n.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("tr",{className:"standings-row",children:[Object(m.jsx)("td",{className:"standings-cell",children:e.rank}),Object(m.jsxs)("td",{className:"standings-club-cell",children:[Object(m.jsx)("img",{className:"team-logo",src:e.team.logo,alt:e.team.name}),Object(m.jsx)("p",{className:"team-name",children:e.team.name})]}),Object(m.jsx)("td",{className:"standings-cell",children:e.all.played}),Object(m.jsx)("td",{className:"standings-cell",children:e.all.win}),Object(m.jsx)("td",{className:"standings-cell",children:e.all.lose}),Object(m.jsx)("td",{className:"standings-cell",children:e.all.draw}),Object(m.jsx)("td",{className:"standings-cell",children:e.points})]})})}))]})})]}),Object(m.jsxs)("div",{className:"league-container-2",children:[Object(m.jsxs)("div",{className:"league-name",children:[Object(m.jsx)("img",{className:"league-logo",src:j.logo,alt:j.name}),Object(m.jsx)("h2",{className:"league-name-heading",children:"TopScorers"})]}),Object(m.jsx)(D,{leagueId:e.LeagueID})]})]})})},C=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(R,{LeagueID:39})})},_=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(R,{LeagueID:135})})},F=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(R,{LeagueID:78})})},L=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(R,{LeagueID:140})})},P=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(R,{LeagueID:61})})},E=function(){var e=Object(c.useState)("league-links"),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)("league-links"),i=Object(d.a)(n,2),l=i[0],j=i[1],u=Object(c.useState)("league-links"),b=Object(d.a)(u,2),h=b[0],O=b[1],g=Object(c.useState)("league-links"),x=Object(d.a)(g,2),p=x[0],f=x[1],v=Object(c.useState)("league-links"),N=Object(d.a)(v,2),k=N[0],y=N[1];function w(e){var t=e.target.id;"pl"===t&&(a("league-links selected"),j("league-links"),f("league-links"),y("league-links"),O("league-links")),"sa"===t&&(j("league-links selected"),f("league-links"),y("league-links"),a("league-links"),O("league-links")),"l"===t&&(O("league-links selected"),j("league-links"),f("league-links"),a("league-links"),y("league-links")),"ll"===t&&(y("league-links selected"),j("league-links"),f("league-links"),a("league-links"),O("league-links")),"bu"===t&&(f("league-links selected"),j("league-links"),y("league-links"),a("league-links"),O("league-links"))}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsxs)("div",{className:"links-container",children:[Object(m.jsx)(r.b,{id:"pl",onClick:w,className:s,to:"/leagues",children:"Premier League"}),Object(m.jsx)(r.b,{id:"l",onClick:w,className:h,to:"/leagues/ligue-1",children:"Ligue 1"}),Object(m.jsx)(r.b,{id:"sa",onClick:w,className:l,to:"/leagues/serie-a",children:"Serie A"}),Object(m.jsx)(r.b,{id:"ll",onClick:w,className:k,to:"/leagues/laliga",children:"LaLiga"}),Object(m.jsx)(r.b,{id:"bu",onClick:w,className:p,to:"/leagues/bundesliga",children:"Bundesliga"})]}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{path:"/leagues",exact:!0,component:C}),Object(m.jsx)(o.b,{path:"/leagues/ligue-1",component:P}),Object(m.jsx)(o.b,{path:"/leagues/serie-a",exact:!0,component:_}),Object(m.jsx)(o.b,{path:"/leagues/laliga",exact:!0,component:L}),Object(m.jsx)(o.b,{path:"/leagues/bundesliga",exact:!0,component:F})]})]})})},T=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)(E,{}),Object(m.jsx)(y,{})]})},I=(s(110),function(e){for(var t=e.productPerPage,s=e.currentPage,c=e.totalProducts,a=e.paginate,n=[],i=1;i<=Math.ceil(c/t);i++)n.push(i);return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{className:"pagination",children:[Object(m.jsx)("button",{onClick:function(){s>1&&a(s-1)},children:"Prev"}),n.map((function(e){return Object(m.jsx)("li",{className:s===e?"page-item page-active":"page-item",onClick:function(){return a(e)},children:Object(m.jsx)("span",{className:"page-link",children:e})},e)})),Object(m.jsx)("button",{onClick:function(){s<n.length&&a(s+1)},children:"Next"})]})})}),J=function(e){var t=Object(c.useState)(),s=Object(d.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(),l=Object(d.a)(i,2),o=l[0],j=l[1],u=Object(c.useState)(12),b=Object(d.a)(u,2),h=b[0],g=(b[1],Object(c.useState)(1)),x=Object(d.a)(g,2),p=x[0],f=x[1],v=Object(c.useState)(),N=Object(d.a)(v,2),k=N[0],y=N[1],w=p*h,S=w+h;return Object(c.useEffect)((function(){a&&(a.sort((function(e,t){return e.competition.id-t.competition.id})),y(e.videoData.length),f(1))}),[a]),Object(c.useEffect)((function(){e.videoData&&n(e.videoData)}),[e.videoData]),Object(c.useEffect)((function(){if(a){var e=a.filter((function(e,t){return t>=w&&t<S}));j(e)}}),[p,a]),0===e.videoData.length?Object(m.jsx)("div",{className:"loading-screen",children:Object(m.jsx)(O.RotateLoader,{color:"white",loading:!0})}):Object(m.jsxs)(m.Fragment,{children:[o&&o.map((function(t){var s=t.date.slice(0,10);return Object(m.jsxs)("div",{className:"vid-container",children:[Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)(r.b,{to:"#",className:"image-container-link",onClick:function(){e.ModalOn(t.videos[0].embed)},children:Object(m.jsx)("img",{className:"thumbnail",src:t.thumbnail,alt:t.title})})}),Object(m.jsx)(r.b,{to:"#",className:"content-container-link",onClick:function(){e.ModalOn(t.videos[0].embed)},children:Object(m.jsxs)("div",{className:"content-container",children:[Object(m.jsxs)("h3",{className:"match",children:[" ",t.title," "]}),Object(m.jsxs)("p",{className:"league",children:[" ",t.competition.name," "]}),Object(m.jsxs)("p",{className:"time",children:[" ",s," "]})]})})]},t.title)})),Object(m.jsx)(I,{productPerPage:h,currentPage:p,totalProducts:k,paginate:function(e){f(e),window.scrollTo(0,0)}})]})},G=s(50),M=s.n(G),A=s(18),B=function(e){return e.isModal?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"modal-container",children:Object(m.jsxs)("div",{className:"iframe-container",children:[Object(m.jsx)("div",{className:"cancel-button",children:Object(m.jsx)("button",{onClick:e.ModalOff,children:Object(m.jsx)(A.b,{className:"cancel-icon"})})}),Object(m.jsx)(M.a,{onOutsideClick:e.ModalOff,children:Object(m.jsx)("div",{className:"iframe-wrapper",children:Object(m.jsx)("iframe",{width:"560",height:"315",src:e.ModalVideoLink,allow:"fullscreen;"})})})]})})}):null},H=function(){var e=Object(o.g)(),t=Object(c.useState)([]),s=Object(d.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(!1),l=Object(d.a)(i,2),r=l[0],j=l[1],u=Object(c.useState)(""),O=Object(d.a)(u,2),g=O[0],x=O[1];Object(c.useEffect)((function(){window.scrollTo(0,0),p()}),[]);var p=function(){var t=Object(h.a)(b.a.mark((function t(){var s,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/highlights/jkdsfbdsfgbhe945ytioenbgi834");case 3:return s=t.sent,t.next=6,s.json();case 6:c=t.sent,n(c),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),e.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)(B,{isModal:r,ModalVideoLink:g,ModalOff:function(){j(!1)}}),Object(m.jsx)(J,{videoData:a,ModalOn:function(e){e=e.match(/(https?:\/\/[^ ]*)/)[1],j(!0),x(e)}},a.title),Object(m.jsx)(y,{})]})},Q=function(e){return e.result&&0===Object.keys(e.result).length&&e.result.constructor===Object?Object(m.jsx)(m.Fragment,{}):void 0===e.result?Object(m.jsx)("div",{className:"result-container",children:Object(m.jsx)("p",{className:"not-found-error",children:"No results were returned. Please refine your search."})}):Object(m.jsxs)("div",{className:"result-container",children:[Object(m.jsxs)("div",{className:"result-header",children:[Object(m.jsx)("div",{className:"result-header-image-container playerPhoto",children:Object(m.jsx)("img",{className:"playerPhoto",src:e.result.player.photo})}),Object(m.jsxs)("div",{className:"result-header-teaminfo-container",children:[Object(m.jsxs)("p",{children:["Name : ",e.result.player.name]}),Object(m.jsxs)("p",{children:["Nationality : ",e.result.player.nationality]}),Object(m.jsxs)("p",{children:["Club : ",e.result.statistics[0].team.name]}),Object(m.jsxs)("p",{children:["Age : ",e.result.player.age]}),Object(m.jsxs)("p",{children:["Height : ",e.result.player.height]}),Object(m.jsxs)("p",{children:["Position : ",e.result.statistics[0].games.position]})]})]}),Object(m.jsxs)("div",{className:"result-body",children:[Object(m.jsxs)("p",{className:"result-body-heading",children:["Season ",e.result.statistics[0].league.season,"/",e.result.statistics[0].league.season+1," Statistics "]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Rating : ",e.result.statistics[0].games.rating.substring(0,3)]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Games Played : ",e.result.statistics[0].games.appearences]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Goals Scored : ",e.result.statistics[0].goals.total]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Pass Accuracy : ",e.result.statistics[0].passes.accuracy]})]})]})},W=function(){var e=Object(o.g)(),t=Object(c.useState)([]),s=Object(d.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)({}),l=Object(d.a)(i,2),r=l[0],j=l[1],u=Object(c.useRef)(),O=Object(c.useRef)(),g=Object(c.useRef)();function x(){return(x=Object(h.a)(b.a.mark((function t(s){var c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=O.current.value,t.next=4,fetch("/teamsRoute/update-teams",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:"".concat(c)})});case 4:return a=t.sent,t.next=7,a.json();case 7:i=t.sent,n(JSON.parse(i)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function p(){return(p=Object(h.a)(b.a.mark((function t(){var s,c,a,n,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=u.current.value,c=O.current.value,a=g.current.value,t.next=6,fetch("/teamsRoute/find-player",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({teamid:s,leagueid:c,name:a})});case 6:return n=t.sent,t.next=9,n.json();case 9:i=t.sent,JSON.parse(i).error?j(void 0):j(JSON.parse(i)),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0),e.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf");case 17:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"form-container",children:Object(m.jsxs)("form",{className:"player-form",children:[Object(m.jsxs)("div",{className:"league-selector-div",children:[Object(m.jsx)("span",{children:"Select the league : "}),Object(m.jsxs)("select",{ref:O,onChange:function(e){return x.apply(this,arguments)},name:"league",className:"drop-downs",children:[Object(m.jsx)("option",{value:"null",children:"-----Select-----"}),Object(m.jsx)("option",{value:"39",children:"Premiere League"}),Object(m.jsx)("option",{value:"61",children:"Ligue 1"}),Object(m.jsx)("option",{value:"78",children:"Bundesliga"}),Object(m.jsx)("option",{value:"140",children:"Laliga"}),Object(m.jsx)("option",{value:"135",children:"Serie A"})]})]}),Object(m.jsxs)("div",{className:"team-selector-div",children:[Object(m.jsx)("span",{children:"Select the Team : "}),Object(m.jsx)("select",{ref:u,name:"team",className:"drop-downs",children:a.map((function(e){return Object(m.jsx)("option",{value:e.team.id,children:e.team.name},e.team.id)}))})]}),Object(m.jsxs)("div",{className:"player-name-div",children:[Object(m.jsx)("span",{children:"Enter the name of Player: "}),Object(m.jsx)("input",{ref:g,type:"text",className:"player-name-input"})]}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),function(){p.apply(this,arguments)}()},className:"player-form-submit",children:"Search"})]})}),Object(m.jsx)(Q,{result:r})]})},K=function(e){return e.result&&0===Object.keys(e.result).length&&e.result.constructor===Object?Object(m.jsx)(m.Fragment,{}):Object(m.jsxs)("div",{className:"result-container",children:[Object(m.jsxs)("div",{className:"result-header",children:[Object(m.jsx)("div",{className:"result-header-image-container",children:Object(m.jsx)("img",{src:e.result.team.logo})}),Object(m.jsxs)("div",{className:"result-header-teaminfo-container",children:[Object(m.jsxs)("p",{children:["Name : ",e.result.team.name]}),Object(m.jsxs)("p",{children:["League : ",e.result.league.name]}),Object(m.jsxs)("p",{children:["Country : ",e.result.league.country]})]})]}),Object(m.jsxs)("div",{className:"result-body",children:[Object(m.jsxs)("p",{className:"result-body-heading",children:["Season ",e.result.league.season,"/",e.result.league.season+1," Statistics "]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Formation : ",e.result.lineups[0].formation]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Last 5 Matches : ",e.result.form.slice(e.result.form.length-5,e.result.form.length)]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Goals Scored : ",e.result.goals.for.total.total]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Total Games Played : ",e.result.fixtures.played.total]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Total Wins : ",e.result.fixtures.wins.total]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Total Losses : ",e.result.fixtures.loses.total]}),Object(m.jsxs)("p",{className:"result-body-stats",children:["Total Draws : ",e.result.fixtures.draws.total]})]})]})},q=function(){var e=Object(o.g)(),t=Object(c.useState)([]),s=Object(d.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)({}),l=Object(d.a)(i,2),r=l[0],j=l[1],u=Object(c.useRef)(),O=Object(c.useRef)();function g(){return(g=Object(h.a)(b.a.mark((function t(s){var c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=O.current.value,t.next=4,fetch("/teamsRoute/update-teams",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:"".concat(c)})});case 4:return a=t.sent,t.next=7,a.json();case 7:i=t.sent,n(JSON.parse(i)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function x(){return(x=Object(h.a)(b.a.mark((function t(){var s,c,a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=u.current.value,c=O.current.value,t.next=5,fetch("/teamsRoute/find-team",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({teamid:s,leagueid:c})});case 5:return a=t.sent,t.next=8,a.json();case 8:n=t.sent,j(JSON.parse(n)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"form-container",children:Object(m.jsxs)("form",{className:"player-form",children:[Object(m.jsxs)("div",{className:"league-selector-div",children:[Object(m.jsx)("span",{children:"Select the league : "}),Object(m.jsxs)("select",{ref:O,onChange:function(e){return g.apply(this,arguments)},name:"league",className:"drop-downs",children:[Object(m.jsx)("option",{value:"null",children:"-----Select-----"}),Object(m.jsx)("option",{value:"39",children:"Premiere League"}),Object(m.jsx)("option",{value:"61",children:"Ligue 1"}),Object(m.jsx)("option",{value:"78",children:"Bundesliga"}),Object(m.jsx)("option",{value:"140",children:"Laliga"}),Object(m.jsx)("option",{value:"135",children:"Serie A"})]})]}),Object(m.jsxs)("div",{className:"team-selector-div",children:[Object(m.jsx)("span",{children:"Select the Team : "}),Object(m.jsx)("select",{ref:u,name:"team",className:"drop-downs",children:a.map((function(e){return Object(m.jsx)("option",{value:e.team.id,children:e.team.name},e.team.id)}))})]}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),function(){x.apply(this,arguments)}()},className:"player-form-submit",children:"Search"})]})}),Object(m.jsx)(K,{result:r})]})},z=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(d.a)(n,2),l=i[0],r=i[1],o=Object(c.useState)(""),j=Object(d.a)(o,2),u=j[0],b=j[1],h=Object(c.useState)(""),O=Object(d.a)(h,2),g=O[0],x=O[1];return Object(m.jsxs)("div",{className:"filter-container",children:[Object(m.jsxs)("div",{className:"player-team-radio filter-container-elements ",children:[Object(m.jsx)("button",{onClick:function(){a(!0),r(!1),b("selected"),x("")},className:u,children:"Team"}),Object(m.jsx)("button",{onClick:function(){a(!1),r(!0),b(""),x("selected")},className:g,children:"Player"})]}),s?Object(m.jsx)(q,{}):null,l?Object(m.jsx)(W,{}):null]})},U=function(){return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)(z,{}),Object(m.jsx)(y,{})]})},V=(s(44),function(){var e=Object(o.g)();return Object(m.jsx)("div",{className:"FOF-page",children:Object(m.jsxs)("div",{className:"FOF-container",children:[Object(m.jsx)("h1",{children:"404"}),Object(m.jsx)("div",{className:"error-svg-container",children:Object(m.jsx)(A.a,{})}),Object(m.jsx)("h3",{children:"Page not found "}),Object(m.jsx)("button",{onClick:function(){e.goBack()},children:"Go Back"})]})})}),Y=function(){var e=Object(o.g)();return Object(m.jsx)("div",{className:"FOF-page",children:Object(m.jsxs)("div",{className:"FOF-container",children:[Object(m.jsx)("h1",{children:"500"}),Object(m.jsx)("div",{className:"error-svg-container",children:Object(m.jsx)(A.a,{})}),Object(m.jsx)("h3",{children:"Server Error"}),Object(m.jsx)("button",{onClick:function(){e.push("/")},children:"Go Home"})]})})};var X=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{path:"/highlights",exact:!0,component:H}),Object(m.jsx)(o.b,{path:"/leagues",exact:!0,component:T}),Object(m.jsx)(o.b,{path:"/",exact:!0,component:S}),Object(m.jsx)(o.b,{path:"/stats",exact:!0,component:U}),Object(m.jsx)(o.b,{path:"/ERROR404/doifgjdf3sdfsdf3ojgiodhgiodhgf",exact:!0,component:V}),Object(m.jsx)(o.b,{path:"/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf",exact:!0,component:Y}),Object(m.jsx)(o.b,{path:"*",render:function(){return Object(m.jsx)(o.a,{to:"/ERROR404/doifgjdf3sdfsdf3ojgiodhgiodhgf"})}})]}),Object(m.jsx)("div",{className:"back-to-top",children:Object(m.jsx)(i.Link,{activeClass:"active",to:"navbar-id",spy:!0,smooth:!0,offset:-70,duration:800,children:Object(m.jsx)(l.a,{})})})]})})};n.a.render(Object(m.jsx)(X,{}),document.getElementById("root"))},44:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){}},[[128,1,2]]]);
//# sourceMappingURL=main.d8683cff.chunk.js.map