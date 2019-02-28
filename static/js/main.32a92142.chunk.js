(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),s=a(7),o=a(9),l=a(10),c=a(13),i=a(11),u=a(14),m=a(0),p=a.n(m),d=a(23),h=a.n(d),v=a(58),E=a(57),f=a(59),g=a(15),y=a.n(g),D=(a(8),function(e){return p.a.createElement("div",{className:"ui active dimmer"},p.a.createElement("div",{className:"ui big text loader"},e.message))});D.defaultProps={message:"Loading.."};var b=D,x=function(e){return p.a.createElement("div",{className:"card"},p.a.createElement("h3",null,e.location," in ",e.year),p.a.createElement("ul",{className:"mainData"},p.a.createElement("li",{className:"emission"},"Emissions:  ",p.a.createElement("p",null,e.emissions)),p.a.createElement("li",{className:"population"},"Population:  ",p.a.createElement("p",null," ",e.population)," "),p.a.createElement("li",{className:"relativeData"},"Emissions per person: ",p.a.createElement("p",null," ",e.emissions/e.population)," ")))};x.defaultProps={location:"Finland",year:2014,emissions:47300.633,population:5461512};var w=x,S=function(e){if(!e.results.emDone&!e.results.popDone)return null;var t=[];if(59===e.results.indxChange)for(var a=4,n=0;n<47;n++)t.push(p.a.createElement("li",null,p.a.createElement("h2",null,n+1),p.a.createElement(w,{location:e.results.pop[1][a].country.value,year:e.results.pop[1][a].date,emissions:e.results.emission[1][a].value,population:e.results.pop[1][a].value}))),a+=59;var r=e.results.index;console.log(e.results.pop[1][r].country.value);for(var s=0;s<59;s++)t.push(p.a.createElement("li",null,p.a.createElement(w,{location:e.results.pop[1][r].country.value,year:e.results.pop[1][r].date,emissions:e.results.emission[1][r].value,population:e.results.pop[1][r].value}))),r++;return p.a.createElement("div",null,p.a.createElement("h2",null,"Results"),p.a.createElement("p",{className:"updateInfo"},"Last updated: ",e.results.emission[0].lastupdated),p.a.createElement("ul",null,t))};S.defaultProps={results:[],index:0,indxChange:1};var N=S,C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),console.log(a.state.term),a.props.onSubmit(a.state.term)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement("form",{onSubmit:this.onFormSubmit,className:"locationForm"},p.a.createElement("label",null,p.a.createElement("input",{type:"text",className:"searchBar",placeholder:"Example: Finland, Sweden",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})}})),p.a.createElement("input",{type:"submit",className:"searchButton",value:"Search"}),p.a.createElement("label",null,p.a.createElement("input",{type:"checkbox",className:"capitalSearch",name:"capital",value:"true"}),p.a.createElement("p",{className:"checkText"},"Show per capita")))}}]),t}(p.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={emData:[],population:[{lastupdated:"2019-02-28"},[{country:{id:"1A",value:"Placeholder Country"},date:"9999",value:"9001"}]],popDone:!1,emDone:!1,countries:[],activeSearch:!1,localCity:"",searchIndex:0,today:(new Date).getDay(),time:(new Date).toLocaleTimeString(),lat:null,lng:null,errorMessage:""},a.onSearchSubmit=function(){var e=Object(s.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.state.countries.findIndex(function(e){return t===e});case 2:n=e.sent,console.log("onSearchSubmit found this!: ",n),n>0&&a.setState({activeSearch:!0,searchIndex:n});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getCoords(),this.getEm()}},{key:"getCoords",value:function(){var e=Object(s.a)(r.a.mark(function e(){var t=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.navigator.geolocation.getCurrentPosition(function(e){return t.setState({lat:e.coords.latitude,lng:e.coords.longitude})},function(e){return t.setState({errorMessage:e.message}).then(function(){})});case 2:console.log("Coordinates examined!");case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"getLocation",value:function(){var e=Object(s.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://api.openweathermap.org/data/2.5/forecast",{params:{lat:t,lon:a,units:"metric",appid:"bd792b4f514e82a2468853df8a863379"}});case 2:n=e.sent,this.setState({localCity:n.data.city}),console.log("Location found: ",this.state.localCity);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"getPop",value:function(){var e=Object(s.a)(r.a.mark(function e(){var t,a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL",{params:{format:"json",per_page:3e4}});case 2:for(t=e.sent,console.log("Population fetched!"),this.setState({population:t.data,popDone:!0}),a=[],n=0;n<this.state.emData[1].length;n++)a=a.concat(this.state.emData[1][n].country.value);this.setState({countries:a}),this.getLocation(this.state.lat,this.state.lng);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getEm",value:function(){var e=Object(s.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://api.worldbank.org/v2/country/all/indicator/EN.ATM.CO2E.KT",{params:{format:"json",per_page:3e4}});case 2:t=e.sent,console.log("Emissions fetched!"),this.setState({emData:t.data,emDone:!0}),this.getPop();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderContent",value:function(){var e=this;return!this.state.errorMessage||this.state.lat||this.state.lng?!this.state.errorMessage&&this.state.lat&&this.state.lng?p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"toolbar"},p.a.createElement("div",{className:"co"},p.a.createElement("p",null,"CO",p.a.createElement("sub",null,"2")," Emissions"))),p.a.createElement(v.a,null,p.a.createElement("div",null,p.a.createElement("div",{className:"navBar"},p.a.createElement("ul",{className:"navButtons"},p.a.createElement("li",null,p.a.createElement(E.a,{to:"/"},"Search")),p.a.createElement("li",null,p.a.createElement(E.a,{to:"/local"},"Local CO",p.a.createElement("sub",null,"2"))),p.a.createElement("li",null,p.a.createElement(E.a,{to:"/compare"},"Compare")))),p.a.createElement(f.a,{exact:!0,path:"/",component:function(){return p.a.createElement("div",{className:"content"},p.a.createElement(C,{onSubmit:e.onSearchSubmit}),p.a.createElement("div",{className:"resultArea"},!(e.state.emDone&e.state.popDone)&&p.a.createElement(b,{message:"Fetching data, please wait"}),e.state.activeSearch&&p.a.createElement("div",null,p.a.createElement(N,{results:{index:e.state.searchIndex,pop:e.state.population,emission:e.state.emData,popDone:e.state.popDone,emDone:e.state.emDone}}))))}}),p.a.createElement(f.a,{exact:!0,path:"/local",component:function(){return p.a.createElement("div",{className:"content"},!(e.state.emDone&e.state.popDone)&&p.a.createElement(b,{message:"Fetching data, please wait"}),p.a.createElement("div",{className:"localExcuse"},p.a.createElement("p",null,"You're in ",p.a.createElement("h2",null,e.state.localCity.name,", ",e.state.localCity.country)," "),p.a.createElement("p",null,"Due to the lack of time on my behalf, I didn't have time to figure out how to change OpenWeatherApi's country code to match World Bank's code. Or alternatively use some other method altogether.")))}}),p.a.createElement(f.a,{exact:!0,path:"/compare",component:function(){return p.a.createElement("div",{className:"content"},!(e.state.emDone&e.state.popDone)&&p.a.createElement(b,{message:"Fetching data, please wait"}),e.state.emDone&e.state.popDone&&p.a.createElement("div",null,p.a.createElement("p",{className:"compareText"},"The comparison data is from 2014 on purpose. The last 5 years don't have all of the data so I wanted to put the latest entries that have all of the data."),p.a.createElement("div",{className:"compareResults"},p.a.createElement("div",{className:"firstResults"},p.a.createElement(N,{results:{index:e.state.searchIndex,pop:e.state.population,emission:e.state.emData,popDone:e.state.popDone,emDone:e.state.emDone,indxChange:59}})),p.a.createElement("div",{className:"secondResults"},p.a.createElement(N,{results:{index:e.state.searchIndex,pop:e.state.population,emission:e.state.emData,popDone:e.state.popDone,emDone:e.state.emDone,indxChange:59}})))))}})))):p.a.createElement("div",null,p.a.createElement(b,{message:"Please accept the location request.."})):p.a.createElement("div",null,p.a.createElement(b,{message:this.state.errorMessage}))}},{key:"render",value:function(){return p.a.createElement("div",{className:"app"},this.renderContent())}}]),t}(p.a.Component);h.a.render(p.a.createElement(O,null),document.querySelector("#root"))},8:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.32a92142.chunk.js.map