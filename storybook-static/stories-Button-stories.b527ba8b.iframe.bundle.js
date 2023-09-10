/*! For license information please see stories-Button-stories.b527ba8b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfirst=self.webpackChunkfirst||[]).push([[256],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/stories/Button.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Green:function(){return Green},Large:function(){return Large},LargeLabel:function(){return LargeLabel},Red:function(){return Red},Small:function(){return Small},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function Button(_ref){var label=_ref.label,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"red":_ref$backgroundColor,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,handleClick=_ref.handleClick,scale=1;"sm"===size&&(scale=.75),"md"===size&&(scale=1.5),"lg"===size&&(scale=2);var style={backgroundColor:backgroundColor,padding:"".concat(.5*scale,"rem ").concat(1*scale,"rem"),border:"none"};return(0,jsx_runtime.jsx)("button",{onClick:handleClick,style:style,children:label})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"'red'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!1},handleClick:{description:"",type:{name:"func"},required:!1}}};var _Red$parameters,_Red$parameters2,_Red$parameters2$docs,_Green$parameters,_Green$parameters2,_Green$parameters2$do,_Small$parameters,_Small$parameters2,_Small$parameters2$do,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_LargeLabel$parameter,_LargeLabel$parameter2,_LargeLabel$parameter3,components_Button=Button,Button_stories={title:"Components/Button",component:components_Button,argTypes:{handleClick:{action:"sad"}}},Template=function Template(args){return(0,jsx_runtime.jsx)(components_Button,(0,objectSpread2.Z)({},args))},Red=Template.bind({});Red.args={backgroundColor:"red",label:"Press me",size:"md"};var Green=Template.bind({});Green.args={backgroundColor:"green",label:"Press me",size:"md"};var Small=Template.bind({});Small.args={backgroundColor:"red",label:"Press me",size:"sm"};var Large=Template.bind({});Large.args={backgroundColor:"red",label:"Press me",size:"lg"};var LargeLabel=Template.bind({});LargeLabel.args={backgroundColor:"red",label:"Press me This is a large label",size:"lg"},Red.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Red.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Red$parameters=Red.parameters)||void 0===_Red$parameters?void 0:_Red$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Button {...args} />"},null===(_Red$parameters2=Red.parameters)||void 0===_Red$parameters2||null===(_Red$parameters2$docs=_Red$parameters2.docs)||void 0===_Red$parameters2$docs?void 0:_Red$parameters2$docs.source)})}),Green.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Green.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Green$parameters=Green.parameters)||void 0===_Green$parameters?void 0:_Green$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Button {...args} />"},null===(_Green$parameters2=Green.parameters)||void 0===_Green$parameters2||null===(_Green$parameters2$do=_Green$parameters2.docs)||void 0===_Green$parameters2$do?void 0:_Green$parameters2$do.source)})}),Small.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Small.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Button {...args} />"},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2$do=_Small$parameters2.docs)||void 0===_Small$parameters2$do?void 0:_Small$parameters2$do.source)})}),Large.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Large.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Button {...args} />"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),LargeLabel.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},LargeLabel.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_LargeLabel$parameter=LargeLabel.parameters)||void 0===_LargeLabel$parameter?void 0:_LargeLabel$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Button {...args} />"},null===(_LargeLabel$parameter2=LargeLabel.parameters)||void 0===_LargeLabel$parameter2||null===(_LargeLabel$parameter3=_LargeLabel$parameter2.docs)||void 0===_LargeLabel$parameter3?void 0:_LargeLabel$parameter3.source)})});var __namedExportsOrder=["Red","Green","Small","Large","LargeLabel"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);