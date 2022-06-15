"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[4528],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Using Sentry.io for Local Development"},l=void 0,p={unversionedId:"how-tos/using-sentry-locally",id:"how-tos/using-sentry-locally",title:"Using Sentry.io for Local Development",description:"FxA uses sentry.io to monitor errors and performance in production / staging. FxA developers can also use sentry.io during local development. Here are a few scenarios where enabling sentry locally might be helpful:",source:"@site/docs/how-tos/using-sentry-locally.md",sourceDirName:"how-tos",slug:"/how-tos/using-sentry-locally",permalink:"/ecosystem-platform/how-tos/using-sentry-locally",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/how-tos/using-sentry-locally.md",tags:[],version:"current",frontMatter:{title:"Using Sentry.io for Local Development"},sidebar:"docs",previous:{title:"Working with Metrics",permalink:"/ecosystem-platform/how-tos/working-with-metrics"},next:{title:"Planning and Development",permalink:"/ecosystem-platform/reference/team-processes/development-process"}},c={},m=[],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FxA uses ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.io"},"sentry.io")," to monitor errors and performance in production / staging. FxA developers can also use ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.io"},"sentry.io")," during local development. Here are a few scenarios where enabling sentry locally might be helpful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Validating that an error reproduced locally aligns with an error reported in staging or production."),(0,o.kt)("li",{parentName:"ul"},"Auditing performance / errors after exploratory testing, functional testing, or a load test."),(0,o.kt)("li",{parentName:"ul"},"Gaining a better understanding of calls made by a certain workflow or endpoint. ")),(0,o.kt)("p",null,"To enable sentry for local development, simply set these environment variables in your root-level ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file (that you may need to create) to their respective DSN settings. When these variables are defined, sentry will be activated. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SENTRY_ENV=local"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-admin-panel/keys/"},"SENTRY_DSN_ADMIN_PANEL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-auth/keys/"},"SENTRY_DSN_AUTH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-content/"},"SENTRY_DSN_CONTENT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-customs/"},"SENTRY_DSN_CUSTOMS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-event-broker/keys/"},"SENTRY_DSN_EVENT_BROKER")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-graphql-api/keys/"},"SENTRY_DSN_GRAPHQL_API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-payments/keys/"},"SENTRY_DSN_PAYMENTS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-profile/keys/"},"SENTRY_DSN_PROFILE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-support-panel/"},"SENTRY_DSN_SUPPPORT_PANEL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sentry.io/settings/mozilla/projects/fxa-browserid-verify/keys/"},"SENTRY_DSN_BROWSERID"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Each variable name links to the sentry.io page containing the DSN value you need to set. Asking a fellow engineer for a copy-and-paste of the environment variables and their values might be the fastest route though... "))),(0,o.kt)("p",null,"Once the local environment is configured, stop and start the FxA stack and proceed with exploratory testing. Then go to ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.io"},"sentry.io"),", log in with SSO, and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sentry.io/product/sentry-basics/environments/"},"filter to the local environment"),". Performance stats and errors from your system will be visible."),(0,o.kt)("p",null,"Keep in mind that developers share the local environment in sentry, so it\u2019s best practice to leave these DSN environment variables undefined when sentry is not activley being used. Doing so will reduce noise in the sentry 'local' environment and make the developer experience better for those who are actively using sentry."),(0,o.kt)("p",null,"To easily enable / disable sentry for local development, defining the SENTRY",(0,o.kt)("em",{parentName:"p"},"DSN"),"* environment variables in the .env file in the root of FXA is a good approach. This file is git ignored, so the settings won\u2019t accidentally get leaked, and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv-cli"},"dotenv-cli")," utility makes managing this trivial. Here\u2019s a quick example of temporarily running the FxA stack with sentry enabled via the .env file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# If you don\u2019t already have dotenv installed, install it.\nyarn global add dotenv-cli\n\n# Double check that the .env file has the proper SENTRY_DSN_* values configured.\ncat .env\n\n# Make sure dev stack has been stopped. PM2 pulls in env state on start, not restart.\nyarn stop\n\n# Start the stack with the .env file applied.\ndotenv -- yarn start \n")))}f.isMDXComponent=!0}}]);