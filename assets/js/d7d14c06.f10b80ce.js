"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8211],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72636:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Connecting to a local MySQL DB"},c=void 0,s={unversionedId:"how-tos/connecting-to-a-local-mysql-db",id:"how-tos/connecting-to-a-local-mysql-db",isDocsHomePage:!1,title:"Connecting to a local MySQL DB",description:"FxA has several databases, for example fxa, fxa_profile and pushbox. Sometimes changes need to be made to a database, or it is helpful to read local data for development.",source:"@site/docs/how-tos/connecting-to-a-local-mysql-db.md",sourceDirName:"how-tos",slug:"/how-tos/connecting-to-a-local-mysql-db",permalink:"/ecosystem-platform/how-tos/connecting-to-a-local-mysql-db",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/main/website/docs/how-tos/connecting-to-a-local-mysql-db.md",tags:[],version:"current",frontMatter:{title:"Connecting to a local MySQL DB"},sidebar:"docs",previous:{title:"Managing Yarn Dependencies",permalink:"/ecosystem-platform/how-tos/managing-yarn-dependencies"},next:{title:"Using a Custom Profile with Firefox",permalink:"/ecosystem-platform/how-tos/using-a-custom-profile-with-firefox"}},p=[],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FxA has several databases, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fxa_profile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pushbox"),". Sometimes changes need to be made to a database, or it is helpful to read local data for development."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FxA running locally"),(0,a.kt)("li",{parentName:"ul"},"Docker"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/en/mysql.html"},"mysql CLI"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If using the ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql-client")," option below, this can be installed via Homebrew with ",(0,a.kt)("inlineCode",{parentName:"li"},"brew install mysql-client"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps")),(0,a.kt)("p",null,"Execute an interactive shell on the MySQL DB container and start the MySQL shell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn mysql\n")),(0,a.kt)("p",null,"OR"),(0,a.kt)("p",null,"Start the MySQL shell through the MySQL client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mysql -uroot --host=127.0.0.1 --port=3306\n")),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql-client")," installation directory, e.g. at ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/opt/mysql-client/bin/mysql"),"."))}u.isMDXComponent=!0}}]);