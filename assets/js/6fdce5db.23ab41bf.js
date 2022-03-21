"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6842],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=s,f=m["".concat(o,".").concat(p)]||m[p]||h[p]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Functional Tests"},o=void 0,c={unversionedId:"reference/functional-testing",id:"reference/functional-testing",title:"Functional Tests",description:"Current as of March 11th, 2021",source:"@site/docs/reference/functional-testing.md",sourceDirName:"reference",slug:"/reference/functional-testing",permalink:"/ecosystem-platform/reference/functional-testing",editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/functional-testing.md",tags:[],version:"current",frontMatter:{title:"Functional Tests"},sidebar:"docs",previous:{title:"Tests in CircleCI",permalink:"/ecosystem-platform/reference/tests-in-circleci"},next:{title:"Automation Test Plan",permalink:"/ecosystem-platform/reference/automation-testplan"}},u=[{value:"Why are there so many test suites that seem to do the same thing?",id:"why-are-there-so-many-test-suites-that-seem-to-do-the-same-thing",children:[],level:2},{value:"How do I?",id:"how-do-i",children:[{value:"Run a single test",id:"run-a-single-test",children:[],level:3},{value:"Add a new test file",id:"add-a-new-test-file",children:[{value:"Create the test file",id:"create-the-test-file",children:[],level:4},{value:"Add the file to the list",id:"add-the-file-to-the-list",children:[],level:4},{value:"Fill in the test file",id:"fill-in-the-test-file",children:[],level:4}],level:3},{value:"Make use of common selectors",id:"make-use-of-common-selectors",children:[],level:3},{value:"Example test suite",id:"example-test-suite",children:[],level:3},{value:"Check if an element exists",id:"check-if-an-element-exists",children:[],level:3},{value:"Check if an element is visible",id:"check-if-an-element-is-visible",children:[],level:3},{value:"Type into an element",id:"type-into-an-element",children:[],level:3},{value:"Check an element&#39;s value",id:"check-an-elements-value",children:[],level:3},{value:"Click on an element",id:"click-on-an-element",children:[],level:3},{value:"Create a unique email",id:"create-a-unique-email",children:[],level:3},{value:"Create a user",id:"create-a-user",children:[],level:3},{value:"Submit a form",id:"submit-a-form",children:[],level:3},{value:"Test A/B tests",id:"test-ab-tests",children:[],level:3},{value:"Simulate interaction with the browser, e.g., WebChannels",id:"simulate-interaction-with-the-browser-eg-webchannels",children:[],level:3},{value:"Emulate a specific user-agent",id:"emulate-a-specific-user-agent",children:[],level:3},{value:"Add a new helper",id:"add-a-new-helper",children:[],level:3}],level:2},{value:"Why do my tests fail?",id:"why-do-my-tests-fail",children:[{value:"Assuming an action has completed, a.k.a., timing issues",id:"assuming-an-action-has-completed-aka-timing-issues",children:[],level:3},{value:"Cross test contamination",id:"cross-test-contamination",children:[],level:3},{value:"An element is not visible or is fading in",id:"an-element-is-not-visible-or-is-fading-in",children:[],level:3},{value:"An element is obviously there and visible but Selenium says it cannot be found",id:"an-element-is-obviously-there-and-visible-but-selenium-says-it-cannot-be-found",children:[],level:3},{value:"staleElementReference",id:"staleelementreference",children:[],level:3},{value:"timeout",id:"timeout",children:[],level:3}],level:2}],h={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Current as of ",(0,i.kt)("inlineCode",{parentName:"p"},"March 11th, 2021")),(0,i.kt)("p",null,"End to end testing of the entire FxA ecosystem is provided by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional"},"comprehensive suite of Selenium tests")," in the fxa-content-server package. Tests can be run by going to the content-server package directory and typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run test-functional\n")),(0,i.kt)("p",null,"The full set of functional tests is run on ",(0,i.kt)("a",{parentName:"p",href:"./fxa-tests-circleci"},"CircleCI")," on every checkin and every time a pull request is merged to main.\nThis full set consist of a smoke test suite(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_smoke"},"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_smoke"),") which runs the high priority test cases first and upon success the full suite of regression tests(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_regression"},"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_regression"),") are run. If there is a failure in the smoke test suite, the regression suite won't be run until the failures have been fixed.\nThere is also a notification system in place for when these failures occur to alert the FxA team via Slack messaging."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://theintern.io/"},"The Intern")," library is used to run the tests, which itself is a wrapper around the ",(0,i.kt)("a",{parentName:"p",href:"https://theintern.io/docs.html#Leadfoot/2/api/Command"},"Leadfoot")," WebDriver library."),(0,i.kt)("p",null,"The functional tests can seem impenetrable, don't worry, they'll become second nature after a while. They continually save our bacon, and every new feature should have corresponding functional tests."),(0,i.kt)("h2",{id:"why-are-there-so-many-test-suites-that-seem-to-do-the-same-thing"},"Why are there so many test suites that seem to do the same thing?"),(0,i.kt)("p",null,"A close look at the tests makes it look like there are a lot of tests that do\nthe same thing, and you are right. Sometimes this is intentional, sometimes it's not."),(0,i.kt)("p",null,'Many tests are intentionally duplicated across each of the different integration types\nto ensure the end to end flow for that integration works as expected. For example,\nthere are "sign in" tests for each of:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fx_desktop_v3 (Firefox Desktop Sync)"),(0,i.kt)("li",{parentName:"ul"},"fx_fennec_v1 (Firefox for Android Sync)"),(0,i.kt)("li",{parentName:"ul"},"fx_ios_v1 (Firefox for iOS Sync)"),(0,i.kt)("li",{parentName:"ul"},"oauth (OAuth RPs)")),(0,i.kt)("p",null,'In each of these, the behaviors and screen to screen transitions can be subtly different. For example, Sync based integrations should show a "connect another device" screen when\nthe user finishes signing in, but most OAuth integrations redirect back to the RP.'),(0,i.kt)("p",null,"If two tests are obviously testing the same thing or one is a subset of another,\nit's OK (and encouraged) to remove duplicates."),(0,i.kt)("h2",{id:"how-do-i"},"How do I?"),(0,i.kt)("h3",{id:"run-a-single-test"},"Run a single test"),(0,i.kt)("p",null,"A single test can be run using intern's ",(0,i.kt)("inlineCode",{parentName:"p"},"grep")," flag. You'll need to find the name of the test you want to run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run test-functional -- --grep="<name of test here>"\n')),(0,i.kt)("h3",{id:"add-a-new-test-file"},"Add a new test file"),(0,i.kt)("h4",{id:"create-the-test-file"},"Create the test file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ touch tests/functional/<name_of_file>.js\n")),(0,i.kt)("h4",{id:"add-the-file-to-the-list"},"Add the file to the list"),(0,i.kt)("p",null,"Edit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/tests/functional.js"},"tests/functional.js")," and add the name of the file\nto the list."),(0,i.kt)("h4",{id:"fill-in-the-test-file"},"Fill in the test file"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#example-test-suite"},"Example test suite"),"."),(0,i.kt)("h3",{id:"make-use-of-common-selectors"},"Make use of common selectors"),(0,i.kt)("p",null,"As seen in ",(0,i.kt)("a",{parentName:"p",href:"#example-test-suite"},"Example test suite")," Selenium tests interact with the\nDOM and require element selectors to be able to perform actions like typing or testing\nwhether an element exists. Instead of embedding selectors within the tests, use selectors\nfrom the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/tests/functional/lib/selectors.js"},"selectors.js")," file. Selectors are namespaced\nby their screen name. If a selector or screen namespace is not available, feel free to add it."),(0,i.kt)("p",null,"Adding selectors to selectors.js makes it much easier to update tests if an element's selector changes. Instead of search/replace on the selector everywhere, update it in selectors.js and leave the tests be."),(0,i.kt)("h3",{id:"example-test-suite"},"Example test suite"),(0,i.kt)("p",null,"Below is a simplified annotated example of a test suite that checks the privacy policy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// intern is a global variable and does not need to be imported\nconst { registerSuite } = intern.getInterface('object');\nconst FunctionalHelpers = require('./lib/helpers');\nconst selectors = require('./lib/selectors');\n\nconst ENTER_EMAIL_URL = intern._config.fxaContentRoot;\nconst PP_URL = intern._config.fxaContentRoot + 'legal/privacy';\n\nconst {\n  // name of helpers to import. There are helpers\n  clearBrowserState,\n  createEmail,\n  openPage,\n  type,\n} = FunctionalHelpers;\n\nregisterSuite('privacy policy', {\n  beforeEach: function() {\n    // this.remote provides a reference to the remote browser\n    // `clearBrowserState` avoids cross test contamination\n    return this.remote.then(clearBrowserState({ force: true }));\n  },\n\n  tests: {\n    'test the privacy policy works': function() {\n      return this.remote\n\n        // open the ENTER_EMAIL_URL page and wait for the\n        // element defined by the ENTER_EMAIL.HEADER selector\n        .then(\n          openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER)\n        )\n\n        // type the email created by `createEmail` into the\n        // element defined by the ENTER_EMAIL.EMAIL selector\n        .then(type(selectors.ENTER_EMAIL.EMAIL, createEmail()))\n\n        // click on the ENTER_EMAIL.SUBMIT element, wait for the\n        // SIGNUP_PASSWORD.HEADER element.\n        .then(\n          click(\n            selectors.ENTER_EMAIL.SUBMIT,\n            selectors.SIGNUP_PASSWORD.HEADER\n          )\n        )\n\n        .then(\n          // click on the SIGNUP_PASSWORD.PRIVACY_POLICY element,\n          // wait for the PRIVACY_POLICY.HEADER element.\n          click(\n            selectors.SIGNUP_PASSWORD.PRIVACY_POLICY,\n            selectors.PRIVACY_POLICY.HEADER\n          )\n        )\n        .then(\n          // click on the back link (PRIVACY_POLICY.LINK_BACK),\n          // ensure we go back to SIGNUP_PASSWORD.HEADER\n          click(\n            selectors.PRIVACY_POLICY.LINK_BACK,\n            selectors.SIGNUP_PASSWORD.HEADER\n          )\n        );\n    },\n  },\n});\n")),(0,i.kt)("p",null,"Very few low level ",(0,i.kt)("a",{parentName:"p",href:"https://theintern.io/docs.html#Leadfoot/2/api/Command"},"Leadfood commands")," are used directly, instead we prefer to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/tests/functional/lib/helpers.js"},"higher level helpers"),". Leadfoot commands are often ",(0,i.kt)("em",{parentName:"p"},"too")," low level and end up requiring a lot\nof code to do simple actions. Our high level helpers usually require less code and\noften provide extra functionality, e.g., ensuring an element is visible before attempting\nto type into it."),(0,i.kt)("h3",{id:"check-if-an-element-exists"},"Check if an element exists"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L194:L202"},"testElementExists")," helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},".then(testElementExists(selectors.SETTINGS.HEADER))\n")),(0,i.kt)("p",null,"Note, this only tests that an element exists, however, the element ",(0,i.kt)("em",{parentName:"p"},"may be hidden"),". For visibility, see ",(0,i.kt)("a",{parentName:"p",href:"#check-if-an-element-is-visible"},"Check if an element is visible"),"."),(0,i.kt)("h3",{id:"check-if-an-element-is-visible"},"Check if an element is visible"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L125-L192"},"visibleByQSA")," helper."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},".then(visibleByQSA(selectors.SETTINGS.HEADER))\n")),(0,i.kt)("h3",{id:"type-into-an-element"},"Type into an element"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L301-L356"},"type")," helper method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},".then(type(selectors.ENTER_EMAIL.EMAIL, 'testuser@testuser.com'))\n")),(0,i.kt)("h3",{id:"check-an-elements-value"},"Check an element's value"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L2107:L2122"},"testElementValueEquals")," helper method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},".then(\n  testElementValueEquals(\n    selectors.ENTER_EMAIL.EMAIL, 'testuser@testuser.com'\n  )\n)\n")),(0,i.kt)("h3",{id:"click-on-an-element"},"Click on an element"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L204-L276"},"click")," helper method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},".then(\n  click(\n    // click on this element\n    selectors.ENTER_EMAIL.SUBMIT,\n    // wait for this element\n    selectors.SIGN_IN_PASSWORD.HEADER\n  )\n)\n")),(0,i.kt)("h3",{id:"create-a-unique-email"},"Create a unique email"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/lib/helpers.js#L24:L29"},"createEmail")," helper method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const email = createEmail();\n")),(0,i.kt)("h3",{id:"create-a-user"},"Create a user"),(0,i.kt)("p",null,"First, see ",(0,i.kt)("a",{parentName:"p",href:"#create-a-unique-email"},"create a unique email")," to create a unique email. Emails should be unique across all tests and test runs to avoid any cross test contamination.\nThen use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L2180:L2200"},"createUser")," helper method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const email = createEmail();\n...\n// creates a pre-verified user with email `email` and password `PASSWORD123123123`\n// Users are by default unverified.\n.then(createUser(email, 'PASSWORD123123123', { preVerified: true }))\n")),(0,i.kt)("h3",{id:"submit-a-form"},"Submit a form"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#click-on-an-element"},"Click on an element"),"."),(0,i.kt)("h3",{id:"test-ab-tests"},"Test A/B tests"),(0,i.kt)("p",null,"To avoid test failures due to random selections, by default all A/B tests are disabled within functional tests.\nSo that A/B tests can be tested, it is possible to force a single experiment and experiment group using URL query\nparameters."),(0,i.kt)("p",null,"When opening your page, specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"forceExperiment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"forceExperimentGroup")," query parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n.then(openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER, {\n  query: {\n    forceExperiment: 'my-new-experiment-name',\n    forceExperimentGroup: 'treatment'\n  }\n}))\n")),(0,i.kt)("h3",{id:"simulate-interaction-with-the-browser-eg-webchannels"},"Simulate interaction with the browser, e.g., WebChannels"),(0,i.kt)("p",null,"Browser based integrations all require FxA to communicate with the browser. See ",(0,i.kt)("a",{parentName:"p",href:"./fxa-webchannel-protocol"},"WebChannels in Desktop and Fennec")," and ",(0,i.kt)("a",{parentName:"p",href:"./fxa-oauth-webchannel-protocol"},"WebChannels in Fenix")," for background information."),(0,i.kt)("p",null,'For example, every time Firefox Desktop loads, FxA asks Firefox for info\non the user currently signed into Firefox as well as a list of "capabilities"\nthe browser supports. This is done via the ',(0,i.kt)("a",{parentName:"p",href:"./fxa-webchannel-protocol#fxaccounts-fxa_status"},"fxaccounts:fxa_status")," WebChannel message."),(0,i.kt)("p",null,"Within functional tests, we do not want to actually drive the browser, nor depend on potentially unknown states. Instead we intercept messages sent to the browser and\nstub out responses. To ease development, default responses are hooked up for\n",(0,i.kt)("inlineCode",{parentName:"p"},"fxaccounts:fxa_status")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fxaccounts:can_link_account"),"."),(0,i.kt)("p",null,"Responses to these can both be overridden by providing a ",(0,i.kt)("inlineCode",{parentName:"p"},"webChannelResponses")," object\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"openPage"),". An example from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/sync_v3_sign_in.js#L55-L62"},"sync_v3_sign_in.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n.then(\n  openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER, {\n    query,\n    webChannelResponses: {\n      // simulate the user declining whether two Sync accounts\n      // can be joined.\n      'fxaccounts:can_link_account': { ok: false },\n    },\n  })\n)\n...\n")),(0,i.kt)("p",null,"Your test can check whether the expected data was sent in a WebChannel\nmessage to the browser using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L1150-L1189"},"storeWebChannelMessageData")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L1191-L1208"},"getWebChannelMessageData")," helper functions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n.then(storeWebChannelMessageData('fxaccounts:login'))\n.then(\n  fillOutEmailFirstSignIn('testuser@testuser.com', 'PASSWORDCXVZ')\n)\n.then(getWebChannelMessageData('fxaccounts:login'))\n.then(messageData => {\n  assert.equal(messageData.email, 'testuser@testuser.com');\n})\n...\n")),(0,i.kt)("h3",{id:"emulate-a-specific-user-agent"},"Emulate a specific user-agent"),(0,i.kt)("p",null,"By default, all functional tests run with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/a86e324a6a2d72684bcd7a632e22d5ab5aa005cd/packages/fxa-content-server/tests/tools/firefox_profile_creator.js#L6"},"user-agent string")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:40.0) Gecko/20100101 Firefox/40.0 FxATester/1.0")),(0,i.kt)("p",null,"That's right, Firefox 40 - Firefox 40 was the first version that supported WebChannels."),(0,i.kt)("p",null,"If your code relies on parsing the user agent string for a particular version number, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"forceUA")," query parameter\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"openPage")," to specify a UA string override."),(0,i.kt)("p",null,"A list of pre-defined user-agent strings is found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/a86e324a6a2d72684bcd7a632e22d5ab5aa005cd/packages/fxa-content-server/tests/functional/lib/ua-strings.js"},"ua-strings.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const uaStrings = require('./lib/ua-strings');\n\n...\n  openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER, {\n    query: {\n      forceUA: uaStrings['desktop_firefox_71']\n    },\n...\n")),(0,i.kt)("h3",{id:"add-a-new-helper"},"Add a new helper"),(0,i.kt)("p",null,"It's easy! When adding new forms that must be completed in multiple tests,\nusing helper function makes life so much easier and code much more maintainable.\nAdd your helper method to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js"},"helpers.js"),".\nExpose it ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L2504"},"in the interface"),"."),(0,i.kt)("p",null,"There are so many helper functions for DOM manipulation that you'll likely be able\nto make use of those to avoid ",(0,i.kt)("a",{parentName:"p",href:"https://theintern.io/docs.html#Leadfoot/2/api/Command"},"low level Leadfoot commands"),"."),(0,i.kt)("h2",{id:"why-do-my-tests-fail"},"Why do my tests fail?"),(0,i.kt)("h3",{id:"assuming-an-action-has-completed-aka-timing-issues"},"Assuming an action has completed, a.k.a., timing issues"),(0,i.kt)("p",null,"This is far and away the number one reason why functional tests fail. Always remember\nthat Selenium will run tests as fast as they possibly can, it's not like a real user\nsitting in front of a computer where it takes time to type or move the mouse. Also keep\nin mind that testing locally does not incur network latency. Finally, tests run on\nCircleCI are run in virtual machines, backend requests and even the\ntest runner are often an order of magnitude slower than local machines."),(0,i.kt)("p",null,"One of the most common problems is clicking on a submit button and then immediately\nchecking text, an input element value, or an attribute value, of an element on a\nsubsequent screen without actually ensuring the screen is visible. The high level\nhelper functions ",(0,i.kt)("em",{parentName:"p"},"try")," to take this into account, but sometimes fail. The simplest\napproach to this is to ",(0,i.kt)("strong",{parentName:"p"},"wait for some expected DOM mutation to occur"),"\nbefore any further assertions."),(0,i.kt)("p",null,"An example of a problematic test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n.then(click(selectors.ENTER_EMAIL.SUBMIT))\n// We have not ensured the submission was successful by\n// checking for the SIGNUP_PASSWORD's header.\n.then(\n  testElementValueEquals(selectors.SIGNUP_PASSWORD.EMAIL, email)\n)\n")),(0,i.kt)("p",null,"A more robust solution is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n// The 2nd parameter ensures SIGNUP_PASSWORD.HEADER is\n// visible before continuing.\n.then(\n  click(\n    selectors.ENTER_EMAIL.SUBMIT, selectors.SIGNUP_PASSWORD.HEADER\n  )\n)\n.then(\n  testElementValueEquals(selectors.SIGNUP_PASSWORD.EMAIL, email)\n)\n")),(0,i.kt)("p",null,"An alternative way to wait is to use the ",(0,i.kt)("a",{parentName:"p",href:"#check-if-an-element-exists"},"testElementExists")," helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n.then(click(selectors.ENTER_EMAIL.SUBMIT))\n.then(testElementExists(selectors.SIGNUP_PASSWORD.HEADER))\n.then(\n  testElementValueEquals(selectors.SIGNUP_PASSWORD.EMAIL, email)\n)\n")),(0,i.kt)("h3",{id:"cross-test-contamination"},"Cross test contamination"),(0,i.kt)("p",null,"Sometimes tests pass when run in isolation, but fail as soon\nas the whole suite is run. This is usually caused by cross\ntest state contamination. Often times in the test preceding\nthe failing test, a user is signed in and the failing test\nassumes no user is signed in."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach")," method of your suite, always be sure to call ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L465"},"clearBrowserState"),". By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"clearBrowserState")," tries clearing localStorage, but this does not always work if actions from the previous test have not completed. Passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"force: true")," option will ensure browser state is cleared because it redirects away from the page the previous test was on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n  beforeEach: function() {\n    return this.remote.then(clearBrowserState({ force: true }));\n  },\n...\n")),(0,i.kt)("h3",{id:"an-element-is-not-visible-or-is-fading-in"},"An element is not visible or is fading in"),(0,i.kt)("p",null,"One common problem is that Selenium ",(0,i.kt)("em",{parentName:"p"},"sometimes")," refuses to read attribute values\non DOM elements unless they are 100% visible, meaning elements that are in the process\nof being faded in or out sometimes cause errors. This is particularly problematic\non tooltips and status messages that use animations."),(0,i.kt)("p",null,"If this occurs, use the ",(0,i.kt)("a",{parentName:"p",href:"#check-if-an-element-is-visible"},"visibleByQSA")," helper to ensure\nthe element is fully visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n.then(visibleByQSA(selectors.ENTER_EMAIL.ERROR))\n.then(testElementTextEquals(selectors.ENTER_EMAIL.ERROR, 'account no longer exists'))\n")),(0,i.kt)("h3",{id:"an-element-is-obviously-there-and-visible-but-selenium-says-it-cannot-be-found"},"An element is obviously there and visible but Selenium says it cannot be found"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#an-element-is-obviously-there-and-visible-but-selenium-says-it-cannot-be-found"},"An element is not visible or is fading in"),"."),(0,i.kt)("h3",{id:"staleelementreference"},"staleElementReference"),(0,i.kt)("p",null,"This can occur if your selector is not specific enough and an element with the same\nselector is used on two screens."),(0,i.kt)("p",null,"For example, there is an email input field on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/signin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/signup"),"\nscreens. If the email field is referenced on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," screen, and then the same selector\nis used to reference the email element in ",(0,i.kt)("inlineCode",{parentName:"p"},"/signin"),", unless\n",(0,i.kt)("a",{parentName:"p",href:"#assuming-an-action-has-completed-aka-timing-issues"},"guards are put in place to avoid timing issues"),",\nit's possible for the runner to grab a reference to the email field from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," screen because it thinks it's already at the ",(0,i.kt)("inlineCode",{parentName:"p"},"/signin")," screen. There are two possible mitigations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure the screen transition has actually occurred by testing\nfor the header of the expected screen before operating on any of it's DOM elements."),(0,i.kt)("li",{parentName:"ol"},"Use a more specific selector.")),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"#assuming-an-action-has-completed-aka-timing-issues"},"Assuming an action has completed, a.k.a., timing issues"),"."),(0,i.kt)("h3",{id:"timeout"},"timeout"),(0,i.kt)("p",null,"Tests by default have 30 seconds to run. Sometimes a test needs longer. At the top of your test, you can change the timeout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"'long running test': function () {\n  // allow for a full minute\n  this.timeout = 60*1000;\n  return this.remote.then\n    ...\n},\n...\n")))}m.isMDXComponent=!0}}]);