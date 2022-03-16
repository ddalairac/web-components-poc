import{e,n as t,s as r,$ as n}from"./query-assigned-elements-9ae5f7c9.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=function(e,t,r,n){var s,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(a=(o<3?s(a):o>3?s(t,r,a):s(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends r{constructor(){super(...arguments),this._num=0,this._arr=[0]}set num(e){console.log("num",e,this._num);const t=this._num;this._num=e,this.requestUpdate("num",t)}get num(){return this._num}set arr(e){console.log("set arr",e,this._arr);const t=this._arr;this._arr=e,this.requestUpdate("arr",t)}get arr(){return this._arr||["no defined"]}renderList(){const e=[];for(const t of this.arr)e.push(n`<li>${t}</li>`);return console.log(e),e}render(){return n`<h1>Array Prop!</h1><p>Arr: ${this.arr}</p><p>Num: ${this.num}</p><ul>${this.renderList()}</ul><slot>ç</slot>`}};s([e({type:Number}),o("design:type",Number),o("design:paramtypes",[Number])],a.prototype,"num",null),s([e({type:Array}),o("design:type",Array),o("design:paramtypes",[Array])],a.prototype,"arr",null),a=s([t("my-element-obj")],a);export{a as MyElementObj};