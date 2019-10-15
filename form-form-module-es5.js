function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form-form-module"],{/***/"./node_modules/@angular/forms/fesm2015/forms.js":/*!*******************************************************!*\
  !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
  \*******************************************************/ /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */ /***/function node_modulesAngularFormsFesm2015FormsJs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_d",function(){return ɵInternalFormsSharedModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275InternalFormsSharedModule",function(){return ɵInternalFormsSharedModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_c",function(){return REACTIVE_DRIVEN_DIRECTIVES});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_a",function(){return SHARED_FORM_DIRECTIVES});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_b",function(){return TEMPLATE_DRIVEN_DIRECTIVES});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_e",function(){return CHECKBOX_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_f",function(){return DEFAULT_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_g",function(){return AbstractControlStatus});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_h",function(){return ngControlStatusHost});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_i",function(){return formDirectiveProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_j",function(){return NG_FORM_SELECTOR_WARNING});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_k",function(){return formControlBinding});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_l",function(){return modelGroupProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_z",function(){return ɵNgNoValidate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275NgNoValidate",function(){return ɵNgNoValidate});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_m",function(){return NUMBER_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_n",function(){return RADIO_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_o",function(){return RadioControlRegistry});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_p",function(){return RANGE_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_q",function(){return NG_MODEL_WITH_FORM_CONTROL_WARNING});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_r",function(){return formControlBinding$1});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_s",function(){return controlNameBinding});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_t",function(){return formDirectiveProvider$1});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_v",function(){return formArrayNameProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_u",function(){return formGroupNameProvider});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_w",function(){return SELECT_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_y",function(){return ɵNgSelectMultipleOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275NgSelectMultipleOption",function(){return ɵNgSelectMultipleOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_x",function(){return SELECT_MULTIPLE_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bb",function(){return CHECKBOX_REQUIRED_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bc",function(){return EMAIL_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_be",function(){return MAX_LENGTH_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bd",function(){return MIN_LENGTH_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_bf",function(){return PATTERN_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"\u0275angular_packages_forms_forms_ba",function(){return REQUIRED_VALIDATOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AbstractControlDirective",function(){return AbstractControlDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AbstractFormGroupDirective",function(){return AbstractFormGroupDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CheckboxControlValueAccessor",function(){return CheckboxControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ControlContainer",function(){return ControlContainer});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NG_VALUE_ACCESSOR",function(){return NG_VALUE_ACCESSOR});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"COMPOSITION_BUFFER_MODE",function(){return COMPOSITION_BUFFER_MODE});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DefaultValueAccessor",function(){return DefaultValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgControl",function(){return NgControl});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgControlStatus",function(){return NgControlStatus});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgControlStatusGroup",function(){return NgControlStatusGroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgForm",function(){return NgForm});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgFormSelectorWarning",function(){return NgFormSelectorWarning});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgModel",function(){return NgModel});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgModelGroup",function(){return NgModelGroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NumberValueAccessor",function(){return NumberValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RadioControlValueAccessor",function(){return RadioControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RangeValueAccessor",function(){return RangeValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormControlDirective",function(){return FormControlDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormControlName",function(){return FormControlName});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormGroupDirective",function(){return FormGroupDirective});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormArrayName",function(){return FormArrayName});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormGroupName",function(){return FormGroupName});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NgSelectOption",function(){return NgSelectOption});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SelectControlValueAccessor",function(){return SelectControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SelectMultipleControlValueAccessor",function(){return SelectMultipleControlValueAccessor});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CheckboxRequiredValidator",function(){return CheckboxRequiredValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"EmailValidator",function(){return EmailValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MaxLengthValidator",function(){return MaxLengthValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MinLengthValidator",function(){return MinLengthValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PatternValidator",function(){return PatternValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"RequiredValidator",function(){return RequiredValidator});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormBuilder",function(){return FormBuilder});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"AbstractControl",function(){return AbstractControl});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormArray",function(){return FormArray});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormControl",function(){return FormControl});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormGroup",function(){return FormGroup});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NG_ASYNC_VALIDATORS",function(){return NG_ASYNC_VALIDATORS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NG_VALIDATORS",function(){return NG_VALIDATORS});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Validators",function(){return Validators});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"VERSION",function(){return VERSION});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormsModule",function(){return FormsModule});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ReactiveFormsModule",function(){return ReactiveFormsModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");/* harmony import */var rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! rxjs */"./node_modules/rxjs/_esm2015/index.js");/* harmony import */var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");/**
 * @license Angular v8.2.8
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * Defines an interface that acts as a bridge between the Angular forms API and a
 * native element in the DOM.
 *
 * Implement this interface to create a custom form control directive
 * that integrates with Angular forms.
 *
 * @see DefaultValueAccessor
 *
 * \@publicApi
 * @record
 */function ControlValueAccessor(){}if(false){}/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * \@publicApi
 * @type {?}
 */var NG_VALUE_ACCESSOR=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgValueAccessor");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var CHECKBOX_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return CheckboxControlValueAccessor}),multi:true};/**
 * \@description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * \@usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var CheckboxControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function CheckboxControlValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * Sets the "checked" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto=CheckboxControlValueAccessor.prototype;_proto.writeValue=function writeValue(value){this._renderer.setProperty(this._elementRef.nativeElement,"checked",value)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)};return CheckboxControlValueAccessor}();CheckboxControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",host:{"(change)":"onChange($event.target.checked)","(blur)":"onTouched()"},providers:[CHECKBOX_VALUE_ACCESSOR]}]}];/** @nocollapse */CheckboxControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var DEFAULT_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return DefaultValueAccessor}),multi:true};/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */function _isAndroid(){/** @type {?} */var userAgent=Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["\u0275getDOM"])()?Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["\u0275getDOM"])().getUserAgent():"";return /android (\d+)/.test(userAgent.toLowerCase())}/**
 * \@description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * \@publicApi
 * @type {?}
 */var COMPOSITION_BUFFER_MODE=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("CompositionEventMode");/**
 * \@description
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var DefaultValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */function DefaultValueAccessor(_renderer,_elementRef,_compositionMode){this._renderer=_renderer;this._elementRef=_elementRef;this._compositionMode=_compositionMode;/**
         * \@description
         * The registered callback function called when an input event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){};/**
         * Whether the user is creating a composition string (IME events).
         */this._composing=false;if(this._compositionMode==null){this._compositionMode=!_isAndroid()}}/**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto2=DefaultValueAccessor.prototype;_proto2.writeValue=function writeValue(value){/** @type {?} */var normalizedValue=value==null?"":value;this._renderer.setProperty(this._elementRef.nativeElement,"value",normalizedValue)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto2.registerOnChange=function registerOnChange(fn){this.onChange=fn}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto2.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto2.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto2._handleInput=function _handleInput(value){if(!this._compositionMode||this._compositionMode&&!this._composing){this.onChange(value)}}/**
     * \@internal
     * @return {?}
     */;_proto2._compositionStart=function _compositionStart(){this._composing=true}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto2._compositionEnd=function _compositionEnd(value){this._composing=false;this._compositionMode&&this.onChange(value)};return DefaultValueAccessor}();DefaultValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",// TODO: vsavkin replace the above selector with the one below it once
// https://github.com/angular/angular/issues/3011 is implemented
// selector: '[ngModel],[formControl],[formControlName]',
host:{"(input)":"$any(this)._handleInput($event.target.value)","(blur)":"onTouched()","(compositionstart)":"$any(this)._compositionStart()","(compositionend)":"$any(this)._compositionEnd($event.target.value)"},providers:[DEFAULT_VALUE_ACCESSOR]}]}];/** @nocollapse */DefaultValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:Boolean,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[COMPOSITION_BUFFER_MODE]}]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * \@description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * \@publicApi
 * @abstract
 */var AbstractControlDirective=/*#__PURE__*/function(){function AbstractControlDirective(){}var _proto3=AbstractControlDirective.prototype;/**
     * \@description
     * Resets the control with the provided value if the control is present.
     * @param {?=} value
     * @return {?}
     */_proto3.reset=function reset(value){if(value===void 0){value=undefined}if(this.control)this.control.reset(value)}/**
     * \@description
     * Reports whether the control with the given path has the error specified.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */;_proto3.hasError=function hasError(errorCode,path){return this.control?this.control.hasError(errorCode,path):false}/**
     * \@description
     * Reports error data for the control with the given path.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} error data for that particular error. If the control or error is not present,
     * null is returned.
     */;_proto3.getError=function getError(errorCode,path){return this.control?this.control.getError(errorCode,path):null};_createClass(AbstractControlDirective,[{key:"value",/**
     * \@description
     * Reports the value of the control if it is present, otherwise null.
     * @return {?}
     */get:function get(){return this.control?this.control.value:null}/**
     * \@description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"valid",get:function get(){return this.control?this.control.valid:null}/**
     * \@description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"invalid",get:function get(){return this.control?this.control.invalid:null}/**
     * \@description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     * @return {?}
     */},{key:"pending",get:function get(){return this.control?this.control.pending:null}/**
     * \@description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     * @return {?}
     */},{key:"disabled",get:function get(){return this.control?this.control.disabled:null}/**
     * \@description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     * @return {?}
     */},{key:"enabled",get:function get(){return this.control?this.control.enabled:null}/**
     * \@description
     * Reports the control's validation errors. If the control is not present, null is returned.
     * @return {?}
     */},{key:"errors",get:function get(){return this.control?this.control.errors:null}/**
     * \@description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */},{key:"pristine",get:function get(){return this.control?this.control.pristine:null}/**
     * \@description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */},{key:"dirty",get:function get(){return this.control?this.control.dirty:null}/**
     * \@description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */},{key:"touched",get:function get(){return this.control?this.control.touched:null}/**
     * \@description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"status",get:function get(){return this.control?this.control.status:null}/**
     * \@description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */},{key:"untouched",get:function get(){return this.control?this.control.untouched:null}/**
     * \@description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     * @return {?}
     */},{key:"statusChanges",get:function get(){return this.control?this.control.statusChanges:null}/**
     * \@description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     * @return {?}
     */},{key:"valueChanges",get:function get(){return this.control?this.control.valueChanges:null}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */},{key:"path",get:function get(){return null}}]);return AbstractControlDirective}();if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * \@publicApi
 * @abstract
 */var ControlContainer=/*#__PURE__*/function(_AbstractControlDirec){_inheritsLoose(ControlContainer,_AbstractControlDirec);function ControlContainer(){return _AbstractControlDirec.apply(this,arguments)||this}_createClass(ControlContainer,[{key:"formDirective",/**
     * \@description
     * The top-level form directive for the control.
     * @return {?}
     */get:function get(){return null}/**
     * \@description
     * The path to this group.
     * @return {?}
     */},{key:"path",get:function get(){return null}}]);return ControlContainer}(AbstractControlDirective);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @return {?}
 */function unimplemented(){throw new Error("unimplemented")}/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */var NgControl=/*#__PURE__*/function(_AbstractControlDirec2){_inheritsLoose(NgControl,_AbstractControlDirec2);function NgControl(){var _this;_this=_AbstractControlDirec2.apply(this,arguments)||this;/**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */_this._parent=null;/**
         * \@description
         * The name for the control
         */_this.name=null;/**
         * \@description
         * The value accessor for the control
         */_this.valueAccessor=null;/**
         * \@description
         * The uncomposed array of synchronous validators for the control
         *
         * \@internal
         */_this._rawValidators=[];/**
         * \@description
         * The uncomposed array of async validators for the control
         *
         * \@internal
         */_this._rawAsyncValidators=[];return _this}/**
     * \@description
     * The registered synchronous validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */_createClass(NgControl,[{key:"validator",get:function get(){return(/** @type {?} */unimplemented())}/**
     * \@description
     * The registered async validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return(/** @type {?} */unimplemented())}}]);return NgControl}(AbstractControlDirective);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var AbstractControlStatus=/*#__PURE__*/function(){/**
     * @param {?} cd
     */function AbstractControlStatus(cd){this._cd=cd}/**
     * @return {?}
     */_createClass(AbstractControlStatus,[{key:"ngClassUntouched",get:function get(){return this._cd.control?this._cd.control.untouched:false}/**
     * @return {?}
     */},{key:"ngClassTouched",get:function get(){return this._cd.control?this._cd.control.touched:false}/**
     * @return {?}
     */},{key:"ngClassPristine",get:function get(){return this._cd.control?this._cd.control.pristine:false}/**
     * @return {?}
     */},{key:"ngClassDirty",get:function get(){return this._cd.control?this._cd.control.dirty:false}/**
     * @return {?}
     */},{key:"ngClassValid",get:function get(){return this._cd.control?this._cd.control.valid:false}/**
     * @return {?}
     */},{key:"ngClassInvalid",get:function get(){return this._cd.control?this._cd.control.invalid:false}/**
     * @return {?}
     */},{key:"ngClassPending",get:function get(){return this._cd.control?this._cd.control.pending:false}}]);return AbstractControlStatus}();if(false){}/** @type {?} */var ngControlStatusHost={"[class.ng-untouched]":"ngClassUntouched","[class.ng-touched]":"ngClassTouched","[class.ng-pristine]":"ngClassPristine","[class.ng-dirty]":"ngClassDirty","[class.ng-valid]":"ngClassValid","[class.ng-invalid]":"ngClassInvalid","[class.ng-pending]":"ngClassPending"};/**
 * \@description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * \@usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NgControlStatus=/*#__PURE__*/function(_AbstractControlStatu){_inheritsLoose(NgControlStatus,_AbstractControlStatu);/**
     * @param {?} cd
     */function NgControlStatus(cd){return _AbstractControlStatu.call(this,cd)||this}return NgControlStatus}(AbstractControlStatus);NgControlStatus.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formControlName],[ngModel],[formControl]",host:ngControlStatusHost}]}];/** @nocollapse */NgControlStatus.ctorParameters=function(){return[{type:NgControl,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]}]}]};/**
 * \@description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @see `NgControlStatus`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NgControlStatusGroup=/*#__PURE__*/function(_AbstractControlStatu2){_inheritsLoose(NgControlStatusGroup,_AbstractControlStatu2);/**
     * @param {?} cd
     */function NgControlStatusGroup(cd){return _AbstractControlStatu2.call(this,cd)||this}return NgControlStatusGroup}(AbstractControlStatus);NgControlStatusGroup.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",host:ngControlStatusHost}]}];/** @nocollapse */NgControlStatusGroup.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]}]}]};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} value
 * @return {?}
 */function isEmptyInputValue(value){// we don't check for string here so it also works with arrays
return value==null||value.length===0}/**
 * \@description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * \@usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * \@Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @type {?}
 */var NG_VALIDATORS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgValidators");/**
 * \@description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * \@publicApi
 * @type {?}
 */var NG_ASYNC_VALIDATORS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgAsyncValidators");/** @type {?} */var EMAIL_REGEXP=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;/**
 * \@description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * \@publicApi
 */var Validators=/*#__PURE__*/function(){function Validators(){}/**
     * \@description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * \@usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} min
     * @return {?} A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */Validators.min=function min(_min){return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)||isEmptyInputValue(_min)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var value=parseFloat(control.value);// Controls with NaN values after parsing should be treated as not having a
// minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
return!isNaN(value)&&value<_min?{"min":{"min":_min,"actual":control.value}}:null})}/**
     * \@description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * \@usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} max
     * @return {?} A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */;Validators.max=function max(_max){return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)||isEmptyInputValue(_max)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var value=parseFloat(control.value);// Controls with NaN values after parsing should be treated as not having a
// maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
return!isNaN(value)&&value>_max?{"max":{"max":_max,"actual":control.value}}:null})}/**
     * \@description
     * Validator that requires the control have a non-empty value.
     *
     * \@usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */;Validators.required=function required(control){return isEmptyInputValue(control.value)?{"required":true}:null}/**
     * \@description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * \@usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     */;Validators.requiredTrue=function requiredTrue(control){return control.value===true?null:{"required":true}}/**
     * \@description
     * Validator that requires the control's value pass an email validation test.
     *
     * \@usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad\@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?} An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */;Validators.email=function email(control){if(isEmptyInputValue(control.value)){return null;// don't validate empty values to allow optional controls
}return EMAIL_REGEXP.test(control.value)?null:{"email":true}}/**
     * \@description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} minLength
     * @return {?} A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     *
     */;Validators.minLength=function minLength(_minLength){return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var length=control.value?control.value.length:0;return length<_minLength?{"minlength":{"requiredLength":_minLength,"actualLength":length}}:null})}/**
     * \@description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} maxLength
     * @return {?} A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     */;Validators.maxLength=function maxLength(_maxLength){return(/**
         * @param {?} control
         * @return {?}
         */function(control){/** @type {?} */var length=control.value?control.value.length:0;return length>_maxLength?{"maxlength":{"requiredLength":_maxLength,"actualLength":length}}:null})}/**
     * \@description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @return {?} A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     */;Validators.pattern=function pattern(_pattern){if(!_pattern)return Validators.nullValidator;/** @type {?} */var regex;/** @type {?} */var regexStr;if(typeof _pattern==="string"){regexStr="";if(_pattern.charAt(0)!=="^")regexStr+="^";regexStr+=_pattern;if(_pattern.charAt(_pattern.length-1)!=="$")regexStr+="$";regex=new RegExp(regexStr)}else{regexStr=_pattern.toString();regex=_pattern}return(/**
         * @param {?} control
         * @return {?}
         */function(control){if(isEmptyInputValue(control.value)){return null;// don't validate empty values to allow optional controls
}/** @type {?} */var value=control.value;return regex.test(value)?null:{"pattern":{"requiredPattern":regexStr,"actualValue":value}}})}/**
     * \@description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} control
     * @return {?}
     */;Validators.nullValidator=function nullValidator(control){return null}/**
     * @param {?} validators
     * @return {?}
     */;Validators.compose=function compose(validators){if(!validators)return null;/** @type {?} */var presentValidators=/** @type {?} */validators.filter(isPresent);if(presentValidators.length==0)return null;return(/**
         * @param {?} control
         * @return {?}
         */function(control){return _mergeErrors(_executeValidators(control,presentValidators))})}/**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @see `updateValueAndValidity()`
     *
     * @param {?} validators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     */;Validators.composeAsync=function composeAsync(validators){if(!validators)return null;/** @type {?} */var presentValidators=/** @type {?} */validators.filter(isPresent);if(presentValidators.length==0)return null;return(/**
         * @param {?} control
         * @return {?}
         */function(control){/** @type {?} */var observables=_executeAsyncValidators(control,presentValidators).map(toObservable);return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors))})};return Validators}();/**
 * @param {?} o
 * @return {?}
 */function isPresent(o){return o!=null}/**
 * @param {?} r
 * @return {?}
 */function toObservable(r){/** @type {?} */var obs=Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275isPromise"])(r)?Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r):r;if(!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275isObservable"])(obs)){throw new Error("Expected validator to return Promise or Observable.")}return obs}/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */function _executeValidators(control,validators){return validators.map(/**
     * @param {?} v
     * @return {?}
     */function(v){return v(control)})}/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */function _executeAsyncValidators(control,validators){return validators.map(/**
     * @param {?} v
     * @return {?}
     */function(v){return v(control)})}/**
 * @param {?} arrayOfErrors
 * @return {?}
 */function _mergeErrors(arrayOfErrors){/** @type {?} */var res=arrayOfErrors.reduce(/**
     * @param {?} res
     * @param {?} errors
     * @return {?}
     */function(res,errors){return errors!=null?Object.assign({},/** @type {?} */res,errors):/** @type {?} */res},{});return Object.keys(res).length===0?null:res}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /**
 * @param {?} validator
 * @return {?}
 */function normalizeValidator(validator){if(/** @type {?} */validator.validate){return(/**
         * @param {?} c
         * @return {?}
         */function(c){return(/** @type {?} */validator.validate(c))})}else{return(/** @type {?} */validator)}}/**
 * @param {?} validator
 * @return {?}
 */function normalizeAsyncValidator(validator){if(/** @type {?} */validator.validate){return(/**
         * @param {?} c
         * @return {?}
         */function(c){return(/** @type {?} */validator.validate(c))})}else{return(/** @type {?} */validator)}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var NUMBER_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NumberValueAccessor}),multi:true};/**
 * \@description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * \@usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NumberValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function NumberValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto4=NumberValueAccessor.prototype;_proto4.writeValue=function writeValue(value){// The value needs to be normalized for IE9, otherwise it is set to 'null' when null
/** @type {?} */var normalizedValue=value==null?"":value;this._renderer.setProperty(this._elementRef.nativeElement,"value",normalizedValue)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto4.registerOnChange=function registerOnChange(fn){this.onChange=/**
         * @param {?} value
         * @return {?}
         */function(value){fn(value==""?null:parseFloat(value))}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto4.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto4.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)};return NumberValueAccessor}();NumberValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",host:{"(change)":"onChange($event.target.value)","(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[NUMBER_VALUE_ACCESSOR]}]}];/** @nocollapse */NumberValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var RADIO_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return RadioControlValueAccessor}),multi:true};/**
 * \@description
 * Class used by Angular to track radio buttons. For internal use only.
 */var RadioControlRegistry=/*#__PURE__*/function(){function RadioControlRegistry(){this._accessors=[]}/**
     * \@description
     * Adds a control to the internal registry. For internal use only.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */var _proto5=RadioControlRegistry.prototype;_proto5.add=function add(control,accessor){this._accessors.push([control,accessor])}/**
     * \@description
     * Removes a control from the internal registry. For internal use only.
     * @param {?} accessor
     * @return {?}
     */;_proto5.remove=function remove(accessor){for(var i=this._accessors.length-1;i>=0;--i){if(this._accessors[i][1]===accessor){this._accessors.splice(i,1);return}}}/**
     * \@description
     * Selects a radio button. For internal use only.
     * @param {?} accessor
     * @return {?}
     */;_proto5.select=function select(accessor){var _this2=this;this._accessors.forEach(/**
         * @param {?} c
         * @return {?}
         */function(c){if(_this2._isSameGroup(c,accessor)&&c[1]!==accessor){c[1].fireUncheck(accessor.value)}})}/**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */;_proto5._isSameGroup=function _isSameGroup(controlPair,accessor){if(!controlPair[0].control)return false;return controlPair[0]._parent===accessor._control._parent&&controlPair[1].name===accessor.name};return RadioControlRegistry}();RadioControlRegistry.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];if(false){}/**
 * \@description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var RadioControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */function RadioControlValueAccessor(_renderer,_elementRef,_registry,_injector){this._renderer=_renderer;this._elementRef=_elementRef;this._registry=_registry;this._injector=_injector;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @return {?}
         */function(){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * \@description
     * A lifecycle method called when the directive is initialized. For internal use only.
     * @return {?}
     */var _proto6=RadioControlValueAccessor.prototype;_proto6.ngOnInit=function ngOnInit(){this._control=this._injector.get(NgControl);this._checkName();this._registry.add(this._control,this)}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto6.ngOnDestroy=function ngOnDestroy(){this._registry.remove(this)}/**
     * \@description
     * Sets the "checked" property value on the radio input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */;_proto6.writeValue=function writeValue(value){this._state=value===this.value;this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto6.registerOnChange=function registerOnChange(fn){var _this3=this;this._fn=fn;this.onChange=/**
         * @return {?}
         */function(){fn(_this3.value);_this3._registry.select(_this3)}}/**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param {?} value
     * @return {?}
     */;_proto6.fireUncheck=function fireUncheck(value){this.writeValue(value)}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto6.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto6.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * @private
     * @return {?}
     */;_proto6._checkName=function _checkName(){if(this.name&&this.formControlName&&this.name!==this.formControlName){this._throwNameError()}if(!this.name&&this.formControlName)this.name=this.formControlName}/**
     * @private
     * @return {?}
     */;_proto6._throwNameError=function _throwNameError(){throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ")};return RadioControlValueAccessor}();RadioControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",host:{"(change)":"onChange()","(blur)":"onTouched()"},providers:[RADIO_VALUE_ACCESSOR]}]}];/** @nocollapse */RadioControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:RadioControlRegistry},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]}]};RadioControlValueAccessor.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],formControlName:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var RANGE_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return RangeValueAccessor}),multi:true};/**
 * \@description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * \@usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var RangeValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function RangeValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){}}/**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */var _proto7=RangeValueAccessor.prototype;_proto7.writeValue=function writeValue(value){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(value))}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto7.registerOnChange=function registerOnChange(fn){this.onChange=/**
         * @param {?} value
         * @return {?}
         */function(value){fn(value==""?null:parseFloat(value))}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto7.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the range input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto7.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)};return RangeValueAccessor}();RangeValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",host:{"(change)":"onChange($event.target.value)","(input)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[RANGE_VALUE_ACCESSOR]}]}];/** @nocollapse */RangeValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ /** @type {?} */var FormErrorExamples={formControlName:"\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",formGroupName:"\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",formArrayName:"\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",ngModelGroup:"\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",ngModelWithFormGroup:"\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "};/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var ReactiveErrors=/*#__PURE__*/function(){function ReactiveErrors(){}/**
     * @return {?}
     */ReactiveErrors.controlParentException=function controlParentException(){throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+FormErrorExamples.formControlName)}/**
     * @return {?}
     */;ReactiveErrors.ngModelGroupException=function ngModelGroupException(){throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        "+FormErrorExamples.formGroupName+"\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        "+FormErrorExamples.ngModelGroup)}/**
     * @return {?}
     */;ReactiveErrors.missingFormException=function missingFormException(){throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       "+FormErrorExamples.formControlName)}/**
     * @return {?}
     */;ReactiveErrors.groupParentException=function groupParentException(){throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+FormErrorExamples.formGroupName)}/**
     * @return {?}
     */;ReactiveErrors.arrayParentException=function arrayParentException(){throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        "+FormErrorExamples.formArrayName)}/**
     * @return {?}
     */;ReactiveErrors.disabledAttrWarning=function disabledAttrWarning(){console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")}/**
     * @param {?} directiveName
     * @return {?}
     */;ReactiveErrors.ngModelWarning=function ngModelWarning(directiveName){console.warn("\n    It looks like you're using ngModel on the same form field as "+directiveName+". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/"+(directiveName==="formControl"?"FormControlDirective":"FormControlName")+"#use-with-ngmodel\n    ")};return ReactiveErrors}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var SELECT_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return SelectControlValueAccessor}),multi:true};/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */function _buildValueString(id,value){if(id==null)return""+value;if(value&&typeof value==="object")value="Object";return(id+": "+value).slice(0,50)}/**
 * @param {?} valueString
 * @return {?}
 */function _extractId(valueString){return valueString.split(":")[0]}/**
 * \@description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var SelectControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function SelectControlValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@internal
         */this._optionMap=new Map;/**
         * \@internal
         */this._idCounter=0;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){};this._compareWith=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275looseIdentical"]}/**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */var _proto8=SelectControlValueAccessor.prototype;/**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param {?} value The checked value
     * @return {?}
     */_proto8.writeValue=function writeValue(value){this.value=value;/** @type {?} */var id=this._getOptionId(value);if(id==null){this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1)}/** @type {?} */var valueString=_buildValueString(id,value);this._renderer.setProperty(this._elementRef.nativeElement,"value",valueString)}/**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto8.registerOnChange=function registerOnChange(fn){var _this4=this;this.onChange=/**
         * @param {?} valueString
         * @return {?}
         */function(valueString){_this4.value=_this4._getOptionValue(valueString);fn(_this4.value)}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto8.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto8.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * \@internal
     * @return {?}
     */;_proto8._registerOption=function _registerOption(){return(this._idCounter++).toString()}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto8._getOptionId=function _getOptionId(value){for(var _i=0,_Array$from=Array.from(this._optionMap.keys());_i<_Array$from.length;_i++){var id=_Array$from[_i];if(this._compareWith(this._optionMap.get(id),value))return id}return null}/**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */;_proto8._getOptionValue=function _getOptionValue(valueString){/** @type {?} */var id=_extractId(valueString);return this._optionMap.has(id)?this._optionMap.get(id):valueString};_createClass(SelectControlValueAccessor,[{key:"compareWith",set:function set(fn){if(typeof fn!=="function"){throw new Error("compareWith must be a function, but received "+JSON.stringify(fn))}this._compareWith=fn}}]);return SelectControlValueAccessor}();SelectControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",host:{"(change)":"onChange($event.target.value)","(blur)":"onTouched()"},providers:[SELECT_VALUE_ACCESSOR]}]}];/** @nocollapse */SelectControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};SelectControlValueAccessor.propDecorators={compareWith:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var NgSelectOption=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */function NgSelectOption(_element,_renderer,_select){this._element=_element;this._renderer=_renderer;this._select=_select;if(this._select)this.id=this._select._registerOption()}/**
     * \@description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     * @param {?} value
     * @return {?}
     */var _proto9=NgSelectOption.prototype;/**
     * \@internal
     * @param {?} value
     * @return {?}
     */_proto9._setElementValue=function _setElementValue(value){this._renderer.setProperty(this._element.nativeElement,"value",value)}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto9.ngOnDestroy=function ngOnDestroy(){if(this._select){this._select._optionMap.delete(this.id);this._select.writeValue(this._select.value)}};_createClass(NgSelectOption,[{key:"ngValue",set:function set(value){if(this._select==null)return;this._select._optionMap.set(this.id,value);this._setElementValue(_buildValueString(this.id,value));this._select.writeValue(this._select.value)}/**
     * \@description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     * @param {?} value
     * @return {?}
     */},{key:"value",set:function set(value){this._setElementValue(value);if(this._select)this._select.writeValue(this._select.value)}}]);return NgSelectOption}();NgSelectOption.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"option"}]}];/** @nocollapse */NgSelectOption.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:SelectControlValueAccessor,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]}]};NgSelectOption.propDecorators={ngValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngValue"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["value"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var SELECT_MULTIPLE_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return SelectMultipleControlValueAccessor}),multi:true};/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */function _buildValueString$1(id,value){if(id==null)return""+value;if(typeof value==="string")value="'"+value+"'";if(value&&typeof value==="object")value="Object";return(id+": "+value).slice(0,50)}/**
 * @param {?} valueString
 * @return {?}
 */function _extractId$1(valueString){return valueString.split(":")[0]}/**
 * Mock interface for HTML Options
 * @record
 */function HTMLOption(){}if(false){}/**
 * Mock interface for HTMLCollection
 * @abstract
 */var HTMLCollection=function HTMLCollection(){};if(false){}/**
 * \@description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * \@usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var SelectMultipleControlValueAccessor=/*#__PURE__*/function(){/**
     * @param {?} _renderer
     * @param {?} _elementRef
     */function SelectMultipleControlValueAccessor(_renderer,_elementRef){this._renderer=_renderer;this._elementRef=_elementRef;/**
         * \@internal
         */this._optionMap=new Map;/**
         * \@internal
         */this._idCounter=0;/**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){};/**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */this.onTouched=/**
         * @return {?}
         */function(){};this._compareWith=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275looseIdentical"]}/**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */var _proto10=SelectMultipleControlValueAccessor.prototype;/**
     * \@description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param {?} value The value
     * @return {?}
     */_proto10.writeValue=function writeValue(value){var _this5=this;this.value=value;/** @type {?} */var optionSelectedStateSetter;if(Array.isArray(value)){// convert values to ids
/** @type {?} */var ids=value.map(/**
             * @param {?} v
             * @return {?}
             */function(v){return _this5._getOptionId(v)});optionSelectedStateSetter=/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */function optionSelectedStateSetter(opt,o){opt._setSelected(ids.indexOf(o.toString())>-1)}}else{optionSelectedStateSetter=/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */function optionSelectedStateSetter(opt,o){opt._setSelected(false)}}this._optionMap.forEach(optionSelectedStateSetter)}/**
     * \@description
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto10.registerOnChange=function registerOnChange(fn){var _this6=this;this.onChange=/**
         * @param {?} _
         * @return {?}
         */function(_){/** @type {?} */var selected=[];if(_.hasOwnProperty("selectedOptions")){/** @type {?} */var options=_.selectedOptions;for(var i=0;i<options.length;i++){/** @type {?} */var opt=options.item(i);/** @type {?} */var val=_this6._getOptionValue(opt.value);selected.push(val)}}// Degrade on IE
else{/** @type {?} */var _options=/** @type {?} */_.options;for(var _i2=0;_i2<_options.length;_i2++){/** @type {?} */var _opt=_options.item(_i2);if(_opt.selected){/** @type {?} */var _val=_this6._getOptionValue(_opt.value);selected.push(_val)}}}_this6.value=selected;fn(selected)}}/**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto10.registerOnTouched=function registerOnTouched(fn){this.onTouched=fn}/**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */;_proto10.setDisabledState=function setDisabledState(isDisabled){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",isDisabled)}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto10._registerOption=function _registerOption(value){/** @type {?} */var id=(this._idCounter++).toString();this._optionMap.set(id,value);return id}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto10._getOptionId=function _getOptionId(value){for(var _i3=0,_Array$from2=Array.from(this._optionMap.keys());_i3<_Array$from2.length;_i3++){var id=_Array$from2[_i3];if(this._compareWith(/** @type {?} */this._optionMap.get(id)._value,value))return id}return null}/**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */;_proto10._getOptionValue=function _getOptionValue(valueString){/** @type {?} */var id=_extractId$1(valueString);return this._optionMap.has(id)?/** @type {?} */this._optionMap.get(id)._value:valueString};_createClass(SelectMultipleControlValueAccessor,[{key:"compareWith",set:function set(fn){if(typeof fn!=="function"){throw new Error("compareWith must be a function, but received "+JSON.stringify(fn))}this._compareWith=fn}}]);return SelectMultipleControlValueAccessor}();SelectMultipleControlValueAccessor.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",host:{"(change)":"onChange($event.target)","(blur)":"onTouched()"},providers:[SELECT_MULTIPLE_VALUE_ACCESSOR]}]}];/** @nocollapse */SelectMultipleControlValueAccessor.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]}]};SelectMultipleControlValueAccessor.propDecorators={compareWith:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var ɵNgSelectMultipleOption=/*#__PURE__*/function(){/**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */function ɵNgSelectMultipleOption(_element,_renderer,_select){this._element=_element;this._renderer=_renderer;this._select=_select;if(this._select){this.id=this._select._registerOption(this)}}/**
     * \@description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     * @param {?} value
     * @return {?}
     */var _proto11=ɵNgSelectMultipleOption.prototype;/**
     * \@internal
     * @param {?} value
     * @return {?}
     */_proto11._setElementValue=function _setElementValue(value){this._renderer.setProperty(this._element.nativeElement,"value",value)}/**
     * \@internal
     * @param {?} selected
     * @return {?}
     */;_proto11._setSelected=function _setSelected(selected){this._renderer.setProperty(this._element.nativeElement,"selected",selected)}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto11.ngOnDestroy=function ngOnDestroy(){if(this._select){this._select._optionMap.delete(this.id);this._select.writeValue(this._select.value)}};_createClass(ɵNgSelectMultipleOption,[{key:"ngValue",set:function set(value){if(this._select==null)return;this._value=value;this._setElementValue(_buildValueString$1(this.id,value));this._select.writeValue(this._select.value)}/**
     * \@description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     * @param {?} value
     * @return {?}
     */},{key:"value",set:function set(value){if(this._select){this._value=value;this._setElementValue(_buildValueString$1(this.id,value));this._select.writeValue(this._select.value)}else{this._setElementValue(value)}}}]);return ɵNgSelectMultipleOption}();ɵNgSelectMultipleOption.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"option"}]}];/** @nocollapse */ɵNgSelectMultipleOption.ctorParameters=function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]},{type:SelectMultipleControlValueAccessor,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]}]};ɵNgSelectMultipleOption.propDecorators={ngValue:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngValue"]}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["value"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */function controlPath(name,parent){return[].concat(/** @type {?} */parent.path,[name])}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpControl(control,dir){if(!control)_throwError(dir,"Cannot find control with");if(!dir.valueAccessor)_throwError(dir,"No value accessor for form control with");control.validator=Validators.compose([/** @type {?} */control.validator,dir.validator]);control.asyncValidator=Validators.composeAsync([/** @type {?} */control.asyncValidator,dir.asyncValidator]);/** @type {?} */dir.valueAccessor.writeValue(control.value);setUpViewChangePipeline(control,dir);setUpModelChangePipeline(control,dir);setUpBlurPipeline(control,dir);if(/** @type {?} */dir.valueAccessor.setDisabledState){control.registerOnDisabledChange(/**
         * @param {?} isDisabled
         * @return {?}
         */function(isDisabled){/** @type {?} */ /** @type {?} */dir.valueAccessor.setDisabledState(isDisabled)})}// re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
dir._rawValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(/** @type {?} */validator.registerOnValidatorChange)/** @type {?} */ /** @type {?} */validator.registerOnValidatorChange(/**
             * @return {?}
             */function(){return control.updateValueAndValidity()})});dir._rawAsyncValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(/** @type {?} */validator.registerOnValidatorChange)/** @type {?} */ /** @type {?} */validator.registerOnValidatorChange(/**
             * @return {?}
             */function(){return control.updateValueAndValidity()})})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function cleanUpControl(control,dir){/** @type {?} */dir.valueAccessor.registerOnChange(/**
     * @return {?}
     */function(){return _noControlError(dir)});/** @type {?} */dir.valueAccessor.registerOnTouched(/**
     * @return {?}
     */function(){return _noControlError(dir)});dir._rawValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(validator.registerOnValidatorChange){validator.registerOnValidatorChange(null)}});dir._rawAsyncValidators.forEach(/**
     * @param {?} validator
     * @return {?}
     */function(validator){if(validator.registerOnValidatorChange){validator.registerOnValidatorChange(null)}});if(control)control._clearChangeFns()}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpViewChangePipeline(control,dir){/** @type {?} */dir.valueAccessor.registerOnChange(/**
     * @param {?} newValue
     * @return {?}
     */function(newValue){control._pendingValue=newValue;control._pendingChange=true;control._pendingDirty=true;if(control.updateOn==="change")updateControl(control,dir)})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpBlurPipeline(control,dir){/** @type {?} */dir.valueAccessor.registerOnTouched(/**
     * @return {?}
     */function(){control._pendingTouched=true;if(control.updateOn==="blur"&&control._pendingChange)updateControl(control,dir);if(control.updateOn!=="submit")control.markAsTouched()})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function updateControl(control,dir){if(control._pendingDirty)control.markAsDirty();control.setValue(control._pendingValue,{emitModelToViewChange:false});dir.viewToModelUpdate(control._pendingValue);control._pendingChange=false}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpModelChangePipeline(control,dir){control.registerOnChange(/**
     * @param {?} newValue
     * @param {?} emitModelEvent
     * @return {?}
     */function(newValue,emitModelEvent){// control -> view
/** @type {?} */dir.valueAccessor.writeValue(newValue);// control -> ngModel
if(emitModelEvent)dir.viewToModelUpdate(newValue)})}/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */function setUpFormContainer(control,dir){if(control==null)_throwError(dir,"Cannot find control with");control.validator=Validators.compose([control.validator,dir.validator]);control.asyncValidator=Validators.composeAsync([control.asyncValidator,dir.asyncValidator])}/**
 * @param {?} dir
 * @return {?}
 */function _noControlError(dir){return _throwError(dir,"There is no FormControl instance attached to form control element with")}/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */function _throwError(dir,message){/** @type {?} */var messageEnd;if(/** @type {?} */dir.path.length>1){messageEnd="path: '"+/** @type {?} */dir.path.join(" -> ")+"'"}else if(/** @type {?} */dir.path[0]){messageEnd="name: '"+dir.path+"'"}else{messageEnd="unspecified name attribute"}throw new Error(message+" "+messageEnd)}/**
 * @param {?} validators
 * @return {?}
 */function composeValidators(validators){return validators!=null?Validators.compose(validators.map(normalizeValidator)):null}/**
 * @param {?} validators
 * @return {?}
 */function composeAsyncValidators(validators){return validators!=null?Validators.composeAsync(validators.map(normalizeAsyncValidator)):null}/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */function isPropertyUpdated(changes,viewModel){if(!changes.hasOwnProperty("model"))return false;/** @type {?} */var change=changes["model"];if(change.isFirstChange())return true;return!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275looseIdentical"])(viewModel,change.currentValue)}/** @type {?} */var BUILTIN_ACCESSORS=[CheckboxControlValueAccessor,RangeValueAccessor,NumberValueAccessor,SelectControlValueAccessor,SelectMultipleControlValueAccessor,RadioControlValueAccessor];/**
 * @param {?} valueAccessor
 * @return {?}
 */function isBuiltInAccessor(valueAccessor){return BUILTIN_ACCESSORS.some(/**
     * @param {?} a
     * @return {?}
     */function(a){return valueAccessor.constructor===a})}/**
 * @param {?} form
 * @param {?} directives
 * @return {?}
 */function syncPendingControls(form,directives){form._syncPendingControls();directives.forEach(/**
     * @param {?} dir
     * @return {?}
     */function(dir){/** @type {?} */var control=/** @type {?} */dir.control;if(control.updateOn==="submit"&&control._pendingChange){dir.viewToModelUpdate(control._pendingValue);control._pendingChange=false}})}// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */function selectValueAccessor(dir,valueAccessors){if(!valueAccessors)return null;if(!Array.isArray(valueAccessors))_throwError(dir,"Value accessor was not provided as an array for form control with");/** @type {?} */var defaultAccessor=undefined;/** @type {?} */var builtinAccessor=undefined;/** @type {?} */var customAccessor=undefined;valueAccessors.forEach(/**
     * @param {?} v
     * @return {?}
     */function(v){if(v.constructor===DefaultValueAccessor){defaultAccessor=v}else if(isBuiltInAccessor(v)){if(builtinAccessor)_throwError(dir,"More than one built-in value accessor matches form control with");builtinAccessor=v}else{if(customAccessor)_throwError(dir,"More than one custom value accessor matches form control with");customAccessor=v}});if(customAccessor)return customAccessor;if(builtinAccessor)return builtinAccessor;if(defaultAccessor)return defaultAccessor;_throwError(dir,"No valid value accessor for form control with");return null}/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */function removeDir(list,el){/** @type {?} */var index=list.indexOf(el);if(index>-1)list.splice(index,1)}// TODO(kara): remove after deprecation period
/**
 * @param {?} name
 * @param {?} type
 * @param {?} instance
 * @param {?} warningConfig
 * @return {?}
 */function _ngModelWarning(name,type,instance,warningConfig){if(!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()||warningConfig==="never")return;if((warningConfig===null||warningConfig==="once")&&!type._ngModelWarningSentOnce||warningConfig==="always"&&!instance._ngModelWarningSent){ReactiveErrors.ngModelWarning(name);type._ngModelWarningSentOnce=true;instance._ngModelWarningSent=true}}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */var VALID="VALID";/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */var INVALID="INVALID";/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */var PENDING="PENDING";/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */var DISABLED="DISABLED";/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */function _find(control,path,delimiter){if(path==null)return null;if(!(path instanceof Array)){path=/** @type {?} */path.split(delimiter)}if(path instanceof Array&&path.length===0)return null;return(/** @type {?} */path.reduce(/**
     * @param {?} v
     * @param {?} name
     * @return {?}
     */function(v,name){if(v instanceof FormGroup){return v.controls.hasOwnProperty(/** @type {?} */name)?v.controls[name]:null}if(v instanceof FormArray){return v.at(/** @type {?} */name)||null}return null},control))}/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */function coerceToValidator(validatorOrOpts){/** @type {?} */var validator=/** @type {?} */isOptionsObj(validatorOrOpts)?/** @type {?} */validatorOrOpts.validators:validatorOrOpts;return Array.isArray(validator)?composeValidators(validator):validator||null}/**
 * @param {?=} asyncValidator
 * @param {?=} validatorOrOpts
 * @return {?}
 */function coerceToAsyncValidator(asyncValidator,validatorOrOpts){/** @type {?} */var origAsyncValidator=/** @type {?} */isOptionsObj(validatorOrOpts)?/** @type {?} */validatorOrOpts.asyncValidators:asyncValidator;return Array.isArray(origAsyncValidator)?composeAsyncValidators(origAsyncValidator):origAsyncValidator||null}/**
 * Interface for options provided to an `AbstractControl`.
 *
 * \@publicApi
 * @record
 */function AbstractControlOptions(){}if(false){}/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */function isOptionsObj(validatorOrOpts){return validatorOrOpts!=null&&!Array.isArray(validatorOrOpts)&&typeof validatorOrOpts==="object"}/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * \@publicApi
 * @abstract
 */var AbstractControl=/*#__PURE__*/function(){/**
     * Initialize the AbstractControl instance.
     *
     * @param {?} validator The function that determines the synchronous validity of this control.
     * @param {?} asyncValidator The function that determines the asynchronous validity of this
     * control.
     */function AbstractControl(validator,asyncValidator){this.validator=validator;this.asyncValidator=asyncValidator;/**
         * \@internal
         */this._onCollectionChange=/**
         * @return {?}
         */function(){};/**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */this.pristine=true;/**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */this.touched=false;/**
         * \@internal
         */this._onDisabledChange=[]}/**
     * The parent control.
     * @return {?}
     */var _proto12=AbstractControl.prototype;/**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */_proto12.setValidators=function setValidators(newValidator){this.validator=coerceToValidator(newValidator)}/**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */;_proto12.setAsyncValidators=function setAsyncValidators(newValidator){this.asyncValidator=coerceToAsyncValidator(newValidator)}/**
     * Empties out the sync validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */;_proto12.clearValidators=function clearValidators(){this.validator=null}/**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */;_proto12.clearAsyncValidators=function clearAsyncValidators(){this.asyncValidator=null}/**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */;_proto12.markAsTouched=function markAsTouched(opts){if(opts===void 0){opts={}}/** @type {?} */this.touched=true;if(this._parent&&!opts.onlySelf){this._parent.markAsTouched(opts)}}/**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     * @return {?}
     */;_proto12.markAllAsTouched=function markAllAsTouched(){this.markAsTouched({onlySelf:true});this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.markAllAsTouched()})}/**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */;_proto12.markAsUntouched=function markAsUntouched(opts){if(opts===void 0){opts={}}/** @type {?} */this.touched=false;this._pendingTouched=false;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.markAsUntouched({onlySelf:true})});if(this._parent&&!opts.onlySelf){this._parent._updateTouched(opts)}}/**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */;_proto12.markAsDirty=function markAsDirty(opts){if(opts===void 0){opts={}}/** @type {?} */this.pristine=false;if(this._parent&&!opts.onlySelf){this._parent.markAsDirty(opts)}}/**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
     *
     * @param {?=} opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * @return {?}
     */;_proto12.markAsPristine=function markAsPristine(opts){if(opts===void 0){opts={}}/** @type {?} */this.pristine=true;this._pendingDirty=false;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.markAsPristine({onlySelf:true})});if(this._parent&&!opts.onlySelf){this._parent._updatePristine(opts)}}/**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     * @return {?}
     */;_proto12.markAsPending=function markAsPending(opts){if(opts===void 0){opts={}}/** @type {?} */this.status=PENDING;if(opts.emitEvent!==false){/** @type {?} */this.statusChanges.emit(this.status)}if(this._parent&&!opts.onlySelf){this._parent.markAsPending(opts)}}/**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     * @return {?}
     */;_proto12.disable=function disable(opts){if(opts===void 0){opts={}}// If parent has been marked artificially dirty we don't want to re-calculate the
// parent's dirtiness based on the children.
/** @type {?} */var skipPristineCheck=this._parentMarkedDirty(opts.onlySelf);/** @type {?} */this.status=DISABLED;/** @type {?} */this.errors=null;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.disable(Object.assign({},opts,{onlySelf:true}))});this._updateValue();if(opts.emitEvent!==false){/** @type {?} */this.valueChanges.emit(this.value);/** @type {?} */this.statusChanges.emit(this.status)}this._updateAncestors(Object.assign({},opts,{skipPristineCheck:skipPristineCheck}));this._onDisabledChange.forEach(/**
         * @param {?} changeFn
         * @return {?}
         */function(changeFn){return changeFn(true)})}/**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     * @return {?}
     */;_proto12.enable=function enable(opts){if(opts===void 0){opts={}}// If parent has been marked artificially dirty we don't want to re-calculate the
// parent's dirtiness based on the children.
/** @type {?} */var skipPristineCheck=this._parentMarkedDirty(opts.onlySelf);/** @type {?} */this.status=VALID;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.enable(Object.assign({},opts,{onlySelf:true}))});this.updateValueAndValidity({onlySelf:true,emitEvent:opts.emitEvent});this._updateAncestors(Object.assign({},opts,{skipPristineCheck:skipPristineCheck}));this._onDisabledChange.forEach(/**
         * @param {?} changeFn
         * @return {?}
         */function(changeFn){return changeFn(false)})}/**
     * @private
     * @param {?} opts
     * @return {?}
     */;_proto12._updateAncestors=function _updateAncestors(opts){if(this._parent&&!opts.onlySelf){this._parent.updateValueAndValidity(opts);if(!opts.skipPristineCheck){this._parent._updatePristine()}this._parent._updateTouched()}}/**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */;_proto12.setParent=function setParent(parent){this._parent=parent}/**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param {?=} opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     * @return {?}
     */;_proto12.updateValueAndValidity=function updateValueAndValidity(opts){if(opts===void 0){opts={}}this._setInitialStatus();this._updateValue();if(this.enabled){this._cancelExistingSubscription();/** @type {?} */this.errors=this._runValidator();/** @type {?} */this.status=this._calculateStatus();if(this.status===VALID||this.status===PENDING){this._runAsyncValidator(opts.emitEvent)}}if(opts.emitEvent!==false){/** @type {?} */this.valueChanges.emit(this.value);/** @type {?} */this.statusChanges.emit(this.status)}if(this._parent&&!opts.onlySelf){this._parent.updateValueAndValidity(opts)}}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto12._updateTreeValidity=function _updateTreeValidity(opts){if(opts===void 0){opts={emitEvent:true}}this._forEachChild(/**
         * @param {?} ctrl
         * @return {?}
         */function(ctrl){return ctrl._updateTreeValidity(opts)});this.updateValueAndValidity({onlySelf:true,emitEvent:opts.emitEvent})}/**
     * @private
     * @return {?}
     */;_proto12._setInitialStatus=function _setInitialStatus(){/** @type {?} */this.status=this._allControlsDisabled()?DISABLED:VALID}/**
     * @private
     * @return {?}
     */;_proto12._runValidator=function _runValidator(){return this.validator?this.validator(this):null}/**
     * @private
     * @param {?=} emitEvent
     * @return {?}
     */;_proto12._runAsyncValidator=function _runAsyncValidator(emitEvent){var _this7=this;if(this.asyncValidator){/** @type {?} */this.status=PENDING;/** @type {?} */var obs=toObservable(this.asyncValidator(this));this._asyncValidationSubscription=obs.subscribe(/**
                 * @param {?} errors
                 * @return {?}
                 */function(errors){return _this7.setErrors(errors,{emitEvent:emitEvent})})}}/**
     * @private
     * @return {?}
     */;_proto12._cancelExistingSubscription=function _cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe()}}/**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */;_proto12.setErrors=function setErrors(errors,opts){if(opts===void 0){opts={}}/** @type {?} */this.errors=errors;this._updateControlsErrors(opts.emitEvent!==false)}/**
     * Retrieves a child control given the control's name or path.
     *
     * \@usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */;_proto12.get=function get(path){return _find(this,path,".")}/**
     * \@description
     * Reports error data for the control with the given path.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} error data for that particular error. If the control or error is not present,
     * null is returned.
     */;_proto12.getError=function getError(errorCode,path){/** @type {?} */var control=path?this.get(path):this;return control&&control.errors?control.errors[errorCode]:null}/**
     * \@description
     * Reports whether the control with the given path has the error specified.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */;_proto12.hasError=function hasError(errorCode,path){return!!this.getError(errorCode,path)}/**
     * Retrieves the top-level ancestor of this control.
     * @return {?}
     */;/**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */_proto12._updateControlsErrors=function _updateControlsErrors(emitEvent){/** @type {?} */this.status=this._calculateStatus();if(emitEvent){/** @type {?} */this.statusChanges.emit(this.status)}if(this._parent){this._parent._updateControlsErrors(emitEvent)}}/**
     * \@internal
     * @return {?}
     */;_proto12._initObservables=function _initObservables(){/** @type {?} */this.valueChanges=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/** @type {?} */this.statusChanges=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]}/**
     * @private
     * @return {?}
     */;_proto12._calculateStatus=function _calculateStatus(){if(this._allControlsDisabled())return DISABLED;if(this.errors)return INVALID;if(this._anyControlsHaveStatus(PENDING))return PENDING;if(this._anyControlsHaveStatus(INVALID))return INVALID;return VALID}/**
     * \@internal
     * @param {?} status
     * @return {?}
     */;_proto12._anyControlsHaveStatus=function _anyControlsHaveStatus(status){return this._anyControls(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.status===status})}/**
     * \@internal
     * @return {?}
     */;_proto12._anyControlsDirty=function _anyControlsDirty(){return this._anyControls(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.dirty})}/**
     * \@internal
     * @return {?}
     */;_proto12._anyControlsTouched=function _anyControlsTouched(){return this._anyControls(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.touched})}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto12._updatePristine=function _updatePristine(opts){if(opts===void 0){opts={}}/** @type {?} */this.pristine=!this._anyControlsDirty();if(this._parent&&!opts.onlySelf){this._parent._updatePristine(opts)}}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto12._updateTouched=function _updateTouched(opts){if(opts===void 0){opts={}}/** @type {?} */this.touched=this._anyControlsTouched();if(this._parent&&!opts.onlySelf){this._parent._updateTouched(opts)}}/**
     * \@internal
     * @param {?} formState
     * @return {?}
     */;_proto12._isBoxedValue=function _isBoxedValue(formState){return typeof formState==="object"&&formState!==null&&Object.keys(formState).length===2&&"value"in formState&&"disabled"in formState}/**
     * \@internal
     * @param {?} fn
     * @return {?}
     */;_proto12._registerOnCollectionChange=function _registerOnCollectionChange(fn){this._onCollectionChange=fn}/**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */;_proto12._setUpdateStrategy=function _setUpdateStrategy(opts){if(isOptionsObj(opts)&&/** @type {?} */opts.updateOn!=null){this._updateOn=/** @type {?} */ /** @type {?} */opts.updateOn}}/**
     * Check to see if parent has been marked artificially dirty.
     *
     * \@internal
     * @private
     * @param {?=} onlySelf
     * @return {?}
     */;_proto12._parentMarkedDirty=function _parentMarkedDirty(onlySelf){/** @type {?} */var parentDirty=this._parent&&this._parent.dirty;return!onlySelf&&parentDirty&&!this._parent._anyControlsDirty()};_createClass(AbstractControl,[{key:"parent",get:function get(){return this._parent}/**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has passed all of its validation tests,
     * false otherwise.
     */},{key:"valid",get:function get(){return this.status===VALID}/**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control has failed one or more of its validation checks,
     * false otherwise.
     */},{key:"invalid",get:function get(){return this.status===INVALID}/**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control is in the process of conducting a validation check,
     * false otherwise.
     */},{key:"pending",get:function get(){return this.status==PENDING}/**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control is disabled, false otherwise.
     */},{key:"disabled",get:function get(){return this.status===DISABLED}/**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     */},{key:"enabled",get:function get(){return this.status!==DISABLED}/**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */},{key:"dirty",get:function get(){return!this.pristine}/**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     * @return {?}
     */},{key:"untouched",get:function get(){return!this.touched}/**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     * @return {?}
     */},{key:"updateOn",get:function get(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}},{key:"root",get:function get(){/** @type {?} */var x=this;while(x._parent){x=x._parent}return x}}]);return AbstractControl}();if(false){}/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * \@publicApi
 */var FormControl=/*#__PURE__*/function(_AbstractControl){_inheritsLoose(FormControl,_AbstractControl);/**
     * Creates a new `FormControl` instance.
     *
     * @param {?=} formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */function FormControl(formState,validatorOrOpts,asyncValidator){var _this8;if(formState===void 0){formState=null}_this8=_AbstractControl.call(this,coerceToValidator(validatorOrOpts),coerceToAsyncValidator(asyncValidator,validatorOrOpts))||this;/**
         * \@internal
         */_this8._onChange=[];_this8._applyFormState(formState);_this8._setUpdateStrategy(validatorOrOpts);_this8.updateValueAndValidity({onlySelf:true,emitEvent:false});_this8._initObservables();return _this8}/**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     * @return {?}
     */var _proto13=FormControl.prototype;_proto13.setValue=function setValue(value,options){var _this9=this;if(options===void 0){options={}}/** @type {?} */this.value=this._pendingValue=value;if(this._onChange.length&&options.emitModelToViewChange!==false){this._onChange.forEach(/**
             * @param {?} changeFn
             * @return {?}
             */function(changeFn){return changeFn(_this9.value,options.emitViewToModelChange!==false)})}this.updateValueAndValidity(options)}/**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */;_proto13.patchValue=function patchValue(value,options){if(options===void 0){options={}}this.setValue(value,options)}/**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */;_proto13.reset=function reset(formState,options){if(formState===void 0){formState=null}if(options===void 0){options={}}this._applyFormState(formState);this.markAsPristine(options);this.markAsUntouched(options);this.setValue(this.value,options);this._pendingChange=false}/**
     * \@internal
     * @return {?}
     */;_proto13._updateValue=function _updateValue(){}/**
     * \@internal
     * @param {?} condition
     * @return {?}
     */;_proto13._anyControls=function _anyControls(condition){return false}/**
     * \@internal
     * @return {?}
     */;_proto13._allControlsDisabled=function _allControlsDisabled(){return this.disabled}/**
     * Register a listener for change events.
     *
     * @param {?} fn The method that is called when the value changes
     * @return {?}
     */;_proto13.registerOnChange=function registerOnChange(fn){this._onChange.push(fn)}/**
     * \@internal
     * @return {?}
     */;_proto13._clearChangeFns=function _clearChangeFns(){this._onChange=[];this._onDisabledChange=[];this._onCollectionChange=/**
         * @return {?}
         */function(){}}/**
     * Register a listener for disabled events.
     *
     * @param {?} fn The method that is called when the disabled status changes.
     * @return {?}
     */;_proto13.registerOnDisabledChange=function registerOnDisabledChange(fn){this._onDisabledChange.push(fn)}/**
     * \@internal
     * @param {?} cb
     * @return {?}
     */;_proto13._forEachChild=function _forEachChild(cb){}/**
     * \@internal
     * @return {?}
     */;_proto13._syncPendingControls=function _syncPendingControls(){if(this.updateOn==="submit"){if(this._pendingDirty)this.markAsDirty();if(this._pendingTouched)this.markAsTouched();if(this._pendingChange){this.setValue(this._pendingValue,{onlySelf:true,emitModelToViewChange:false});return true}}return false}/**
     * @private
     * @param {?} formState
     * @return {?}
     */;_proto13._applyFormState=function _applyFormState(formState){if(this._isBoxedValue(formState)){/** @type {?} */this.value=this._pendingValue=formState.value;formState.disabled?this.disable({onlySelf:true,emitEvent:false}):this.enable({onlySelf:true,emitEvent:false})}else{/** @type {?} */this.value=this._pendingValue=formState}};return FormControl}(AbstractControl);if(false){}/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * \@usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * \@publicApi
 */var FormGroup=/*#__PURE__*/function(_AbstractControl2){_inheritsLoose(FormGroup,_AbstractControl2);/**
     * Creates a new `FormGroup` instance.
     *
     * @param {?} controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */function FormGroup(controls,validatorOrOpts,asyncValidator){var _this10;_this10=_AbstractControl2.call(this,coerceToValidator(validatorOrOpts),coerceToAsyncValidator(asyncValidator,validatorOrOpts))||this;_this10.controls=controls;_this10._initObservables();_this10._setUpdateStrategy(validatorOrOpts);_this10._setUpControls();_this10.updateValueAndValidity({onlySelf:true,emitEvent:false});return _this10}/**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */var _proto14=FormGroup.prototype;_proto14.registerControl=function registerControl(name,control){if(this.controls[name])return this.controls[name];this.controls[name]=control;control.setParent(this);control._registerOnCollectionChange(this._onCollectionChange);return control}/**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */;_proto14.addControl=function addControl(name,control){this.registerControl(name,control);this.updateValueAndValidity();this._onCollectionChange()}/**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */;_proto14.removeControl=function removeControl(name){if(this.controls[name])this.controls[name]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});delete this.controls[name];this.updateValueAndValidity();this._onCollectionChange()}/**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */;_proto14.setControl=function setControl(name,control){if(this.controls[name])this.controls[name]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});delete this.controls[name];if(control)this.registerControl(name,control);this.updateValueAndValidity();this._onCollectionChange()}/**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {\@link AbstractControl#get get} instead.
     *
     * @param {?} controlName The control name to check for existence in the collection
     *
     * @return {?} false for disabled controls, true otherwise.
     */;_proto14.contains=function contains(controlName){return this.controls.hasOwnProperty(controlName)&&this.controls[controlName].enabled}/**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * \@usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param {?} value The new value for the control that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * @return {?}
     */;_proto14.setValue=function setValue(value,options){var _this11=this;if(options===void 0){options={}}this._checkAllValuesPresent(value);Object.keys(value).forEach(/**
         * @param {?} name
         * @return {?}
         */function(name){_this11._throwIfControlMissing(name);_this11.controls[name].setValue(value[name],{onlySelf:true,emitEvent:options.emitEvent})});this.updateValueAndValidity(options)}/**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * \@usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param {?} value The object that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */;_proto14.patchValue=function patchValue(value,options){var _this12=this;if(options===void 0){options={}}Object.keys(value).forEach(/**
         * @param {?} name
         * @return {?}
         */function(name){if(_this12.controls[name]){_this12.controls[name].patchValue(value[name],{onlySelf:true,emitEvent:options.emitEvent})}});this.updateValueAndValidity(options)}/**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */;_proto14.reset=function reset(value,options){if(value===void 0){value={}}if(options===void 0){options={}}this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){control.reset(value[name],{onlySelf:true,emitEvent:options.emitEvent})});this._updatePristine(options);this._updateTouched(options);this.updateValueAndValidity(options)}/**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     * @return {?}
     */;_proto14.getRawValue=function getRawValue(){return this._reduceChildren({},/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(acc,control,name){acc[name]=control instanceof FormControl?control.value:/** @type {?} */control.getRawValue();return acc})}/**
     * \@internal
     * @return {?}
     */;_proto14._syncPendingControls=function _syncPendingControls(){/** @type {?} */var subtreeUpdated=this._reduceChildren(false,/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */function(updated,child){return child._syncPendingControls()?true:updated});if(subtreeUpdated)this.updateValueAndValidity({onlySelf:true});return subtreeUpdated}/**
     * \@internal
     * @param {?} name
     * @return {?}
     */;_proto14._throwIfControlMissing=function _throwIfControlMissing(name){if(!Object.keys(this.controls).length){throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ")}if(!this.controls[name]){throw new Error("Cannot find form control with name: "+name+".")}}/**
     * \@internal
     * @param {?} cb
     * @return {?}
     */;_proto14._forEachChild=function _forEachChild(cb){var _this13=this;Object.keys(this.controls).forEach(/**
         * @param {?} k
         * @return {?}
         */function(k){return cb(_this13.controls[k],k)})}/**
     * \@internal
     * @return {?}
     */;_proto14._setUpControls=function _setUpControls(){var _this14=this;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){control.setParent(_this14);control._registerOnCollectionChange(_this14._onCollectionChange)})}/**
     * \@internal
     * @return {?}
     */;_proto14._updateValue=function _updateValue(){/** @type {?} */this.value=this._reduceValue()}/**
     * \@internal
     * @param {?} condition
     * @return {?}
     */;_proto14._anyControls=function _anyControls(condition){var _this15=this;/** @type {?} */var res=false;this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){res=res||_this15.contains(name)&&condition(control)});return res}/**
     * \@internal
     * @return {?}
     */;_proto14._reduceValue=function _reduceValue(){var _this16=this;return this._reduceChildren({},/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(acc,control,name){if(control.enabled||_this16.disabled){acc[name]=control.value}return acc})}/**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */;_proto14._reduceChildren=function _reduceChildren(initValue,fn){/** @type {?} */var res=initValue;this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){res=fn(res,control,name)});return res}/**
     * \@internal
     * @return {?}
     */;_proto14._allControlsDisabled=function _allControlsDisabled(){for(var _i4=0,_Object$keys=Object.keys(this.controls);_i4<_Object$keys.length;_i4++){var controlName=_Object$keys[_i4];if(this.controls[controlName].enabled){return false}}return Object.keys(this.controls).length>0||this.disabled}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto14._checkAllValuesPresent=function _checkAllValuesPresent(value){this._forEachChild(/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */function(control,name){if(value[name]===undefined){throw new Error("Must supply a value for form control with name: '"+name+"'.")}})};return FormGroup}(AbstractControl);if(false){}/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * \@usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * \@publicApi
 */var FormArray=/*#__PURE__*/function(_AbstractControl3){_inheritsLoose(FormArray,_AbstractControl3);/**
     * Creates a new `FormArray` instance.
     *
     * @param {?} controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */function FormArray(controls,validatorOrOpts,asyncValidator){var _this17;_this17=_AbstractControl3.call(this,coerceToValidator(validatorOrOpts),coerceToAsyncValidator(asyncValidator,validatorOrOpts))||this;_this17.controls=controls;_this17._initObservables();_this17._setUpdateStrategy(validatorOrOpts);_this17._setUpControls();_this17.updateValueAndValidity({onlySelf:true,emitEvent:false});return _this17}/**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */var _proto15=FormArray.prototype;_proto15.at=function at(index){return this.controls[index]}/**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */;_proto15.push=function push(control){this.controls.push(control);this._registerControl(control);this.updateValueAndValidity();this._onCollectionChange()}/**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to insert the control
     * @param {?} control Form control to be inserted
     * @return {?}
     */;_proto15.insert=function insert(index,control){this.controls.splice(index,0,control);this._registerControl(control);this.updateValueAndValidity()}/**
     * Remove the control at the given `index` in the array.
     *
     * @param {?} index Index in the array to remove the control
     * @return {?}
     */;_proto15.removeAt=function removeAt(index){if(this.controls[index])this.controls[index]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});this.controls.splice(index,1);this.updateValueAndValidity()}/**
     * Replace an existing control.
     *
     * @param {?} index Index in the array to replace the control
     * @param {?} control The `AbstractControl` control to replace the existing control
     * @return {?}
     */;_proto15.setControl=function setControl(index,control){if(this.controls[index])this.controls[index]._registerOnCollectionChange(/**
             * @return {?}
             */function(){});this.controls.splice(index,1);if(control){this.controls.splice(index,0,control);this._registerControl(control)}this.updateValueAndValidity();this._onCollectionChange()}/**
     * Length of the control array.
     * @return {?}
     */;/**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * \@usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param {?} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */_proto15.setValue=function setValue(value,options){var _this18=this;if(options===void 0){options={}}this._checkAllValuesPresent(value);value.forEach(/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */function(newValue,index){_this18._throwIfControlMissing(index);_this18.at(index).setValue(newValue,{onlySelf:true,emitEvent:options.emitEvent})});this.updateValueAndValidity(options)}/**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * \@usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param {?} value Array of latest values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */;_proto15.patchValue=function patchValue(value,options){var _this19=this;if(options===void 0){options={}}value.forEach(/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */function(newValue,index){if(_this19.at(index)){_this19.at(index).patchValue(newValue,{onlySelf:true,emitEvent:options.emitEvent})}});this.updateValueAndValidity(options)}/**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * \@usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param {?=} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */;_proto15.reset=function reset(value,options){if(value===void 0){value=[]}if(options===void 0){options={}}this._forEachChild(/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */function(control,index){control.reset(value[index],{onlySelf:true,emitEvent:options.emitEvent})});this._updatePristine(options);this._updateTouched(options);this.updateValueAndValidity(options)}/**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     * @return {?}
     */;_proto15.getRawValue=function getRawValue(){return this.controls.map(/**
         * @param {?} control
         * @return {?}
         */function(control){return control instanceof FormControl?control.value:/** @type {?} */control.getRawValue()})}/**
     * Remove all controls in the `FormArray`.
     *
     * \@usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     * @return {?}
     */;_proto15.clear=function clear(){if(this.controls.length<1)return;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){return control._registerOnCollectionChange(/**
         * @return {?}
         */function(){})});this.controls.splice(0);this.updateValueAndValidity()}/**
     * \@internal
     * @return {?}
     */;_proto15._syncPendingControls=function _syncPendingControls(){/** @type {?} */var subtreeUpdated=this.controls.reduce(/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */function(updated,child){return child._syncPendingControls()?true:updated},false);if(subtreeUpdated)this.updateValueAndValidity({onlySelf:true});return subtreeUpdated}/**
     * \@internal
     * @param {?} index
     * @return {?}
     */;_proto15._throwIfControlMissing=function _throwIfControlMissing(index){if(!this.controls.length){throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ")}if(!this.at(index)){throw new Error("Cannot find form control at index "+index)}}/**
     * \@internal
     * @param {?} cb
     * @return {?}
     */;_proto15._forEachChild=function _forEachChild(cb){this.controls.forEach(/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */function(control,index){cb(control,index)})}/**
     * \@internal
     * @return {?}
     */;_proto15._updateValue=function _updateValue(){var _this20=this;/** @type {?} */this.value=this.controls.filter(/**
             * @param {?} control
             * @return {?}
             */function(control){return control.enabled||_this20.disabled}).map(/**
             * @param {?} control
             * @return {?}
             */function(control){return control.value})}/**
     * \@internal
     * @param {?} condition
     * @return {?}
     */;_proto15._anyControls=function _anyControls(condition){return this.controls.some(/**
         * @param {?} control
         * @return {?}
         */function(control){return control.enabled&&condition(control)})}/**
     * \@internal
     * @return {?}
     */;_proto15._setUpControls=function _setUpControls(){var _this21=this;this._forEachChild(/**
         * @param {?} control
         * @return {?}
         */function(control){return _this21._registerControl(control)})}/**
     * \@internal
     * @param {?} value
     * @return {?}
     */;_proto15._checkAllValuesPresent=function _checkAllValuesPresent(value){this._forEachChild(/**
         * @param {?} control
         * @param {?} i
         * @return {?}
         */function(control,i){if(value[i]===undefined){throw new Error("Must supply a value for form control at index: "+i+".")}})}/**
     * \@internal
     * @return {?}
     */;_proto15._allControlsDisabled=function _allControlsDisabled(){for(var _iterator=this.controls,_isArray=Array.isArray(_iterator),_i5=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i5>=_iterator.length)break;_ref=_iterator[_i5++]}else{_i5=_iterator.next();if(_i5.done)break;_ref=_i5.value}var control=_ref;if(control.enabled)return false}return this.controls.length>0||this.disabled}/**
     * @private
     * @param {?} control
     * @return {?}
     */;_proto15._registerControl=function _registerControl(control){control.setParent(this);control._registerOnCollectionChange(this._onCollectionChange)};_createClass(FormArray,[{key:"length",get:function get(){return this.controls.length}}]);return FormArray}(AbstractControl);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formDirectiveProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NgForm})};var ɵ0=/**
 * @return {?}
 */function ɵ0(){return Promise.resolve(null)};/** @type {?} */var resolvedPromise=ɵ0();/**
 * \@description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * \@usageNotes
 *
 * ### Migrating from deprecated ngForm selector
 *
 * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
 * in Angular v9.
 *
 * This has been deprecated to keep selectors consistent with other core Angular selectors,
 * as element selectors are typically written in kebab-case.
 *
 * Now deprecated:
 * ```html
 * <ngForm #myForm="ngForm">
 * ```
 *
 * After:
 * ```html
 * <ng-form #myForm="ngForm">
 * ```
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * \@ngModule FormsModule
 * \@publicApi
 */var NgForm=/*#__PURE__*/function(_ControlContainer){_inheritsLoose(NgForm,_ControlContainer);/**
     * @param {?} validators
     * @param {?} asyncValidators
     */function NgForm(validators,asyncValidators){var _this22;_this22=_ControlContainer.call(this)||this;/**
         * \@description
         * Returns whether the form submission has been triggered.
         */_this22.submitted=false;_this22._directives=[];/**
         * \@description
         * Event emitter for the "ngSubmit" event
         */_this22.ngSubmit=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];_this22.form=new FormGroup({},composeValidators(validators),composeAsyncValidators(asyncValidators));return _this22}/**
     * \@description
     * Lifecycle method called after the view is initialized. For internal use only.
     * @return {?}
     */var _proto16=NgForm.prototype;_proto16.ngAfterViewInit=function ngAfterViewInit(){this._setUpdateStrategy()}/**
     * \@description
     * The directive instance.
     * @return {?}
     */;/**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */_proto16.addControl=function addControl(dir){var _this23=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this23._findContainer(dir.path);/** @type {?} */dir.control=/** @type {?} */container.registerControl(dir.name,dir.control);setUpControl(dir.control,dir);dir.control.updateValueAndValidity({emitEvent:false});_this23._directives.push(dir)})}/**
     * \@description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */;_proto16.getControl=function getControl(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * \@description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */;_proto16.removeControl=function removeControl(dir){var _this24=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this24._findContainer(dir.path);if(container){container.removeControl(dir.name)}removeDir(_this24._directives,dir)})}/**
     * \@description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */;_proto16.addFormGroup=function addFormGroup(dir){var _this25=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this25._findContainer(dir.path);/** @type {?} */var group=new FormGroup({});setUpFormContainer(group,dir);container.registerControl(dir.name,group);group.updateValueAndValidity({emitEvent:false})})}/**
     * \@description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */;_proto16.removeFormGroup=function removeFormGroup(dir){var _this26=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var container=_this26._findContainer(dir.path);if(container){container.removeControl(dir.name)}})}/**
     * \@description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */;_proto16.getFormGroup=function getFormGroup(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param {?} dir The `NgControl` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */;_proto16.updateModel=function updateModel(dir,value){var _this27=this;resolvedPromise.then(/**
         * @return {?}
         */function(){/** @type {?} */var ctrl=/** @type {?} */_this27.form.get(/** @type {?} */dir.path);ctrl.setValue(value)})}/**
     * \@description
     * Sets the value for this `FormGroup`.
     *
     * @param {?} value The new value
     * @return {?}
     */;_proto16.setValue=function setValue(value){this.control.setValue(value)}/**
     * \@description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */;_proto16.onSubmit=function onSubmit($event){/** @type {?} */this.submitted=true;syncPendingControls(this.form,this._directives);this.ngSubmit.emit($event);return false}/**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */;_proto16.onReset=function onReset(){this.resetForm()}/**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */;_proto16.resetForm=function resetForm(value){if(value===void 0){value=undefined}this.form.reset(value);/** @type {?} */this.submitted=false}/**
     * @private
     * @return {?}
     */;_proto16._setUpdateStrategy=function _setUpdateStrategy(){if(this.options&&this.options.updateOn!=null){this.form._updateOn=this.options.updateOn}}/**
     * \@internal
     * @param {?} path
     * @return {?}
     */;_proto16._findContainer=function _findContainer(path){path.pop();return path.length?/** @type {?} */this.form.get(path):this.form};_createClass(NgForm,[{key:"formDirective",get:function get(){return this}/**
     * \@description
     * The internal `FormGroup` instance.
     * @return {?}
     */},{key:"control",get:function get(){return this.form}/**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     * @return {?}
     */},{key:"path",get:function get(){return[]}/**
     * \@description
     * Returns a map of the controls in this group.
     * @return {?}
     */},{key:"controls",get:function get(){return this.form.controls}}]);return NgForm}(ControlContainer);NgForm.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]",providers:[formDirectiveProvider],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},outputs:["ngSubmit"],exportAs:"ngForm"}]}];/** @nocollapse */NgForm.ctorParameters=function(){return[{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};NgForm.propDecorators={options:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngFormOptions"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */var TemplateDrivenErrors=/*#__PURE__*/function(){function TemplateDrivenErrors(){}/**
     * @return {?}
     */TemplateDrivenErrors.modelParentException=function modelParentException(){throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      "+FormErrorExamples.formControlName+"\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      "+FormErrorExamples.ngModelWithFormGroup)}/**
     * @return {?}
     */;TemplateDrivenErrors.formGroupNameException=function formGroupNameException(){throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      "+FormErrorExamples.formGroupName+"\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      "+FormErrorExamples.ngModelGroup)}/**
     * @return {?}
     */;TemplateDrivenErrors.missingNameException=function missingNameException(){throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">")}/**
     * @return {?}
     */;TemplateDrivenErrors.modelGroupParentException=function modelGroupParentException(){throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      "+FormErrorExamples.formGroupName+"\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      "+FormErrorExamples.ngModelGroup)}/**
     * @return {?}
     */;TemplateDrivenErrors.ngFormWarning=function ngFormWarning(){console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ")};return TemplateDrivenErrors}();/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
 * @type {?}
 */var NG_FORM_SELECTOR_WARNING=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgFormSelectorWarning");/**
 * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
 *
 * @deprecated in Angular v6 and will be removed in Angular v9.
 * \@ngModule FormsModule
 * \@publicApi
 */var NgFormSelectorWarning=/**
     * @param {?} ngFormWarning
     */function NgFormSelectorWarning(ngFormWarning){if((!ngFormWarning||ngFormWarning==="once")&&!NgFormSelectorWarning._ngFormWarning||ngFormWarning==="always"){TemplateDrivenErrors.ngFormWarning();NgFormSelectorWarning._ngFormWarning=true}};/**
 * Static property used to track whether the deprecation warning for this selector has been sent.
 * Used to support warning config of "once".
 *
 * \@internal
 */NgFormSelectorWarning._ngFormWarning=false;NgFormSelectorWarning.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"ngForm"}]}];/** @nocollapse */NgFormSelectorWarning.ctorParameters=function(){return[{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_FORM_SELECTOR_WARNING]}]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * \@publicApi
 */var AbstractFormGroupDirective=/*#__PURE__*/function(_ControlContainer2){_inheritsLoose(AbstractFormGroupDirective,_ControlContainer2);function AbstractFormGroupDirective(){return _ControlContainer2.apply(this,arguments)||this}var _proto17=AbstractFormGroupDirective.prototype;/**
     * \@description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     * @return {?}
     */_proto17.ngOnInit=function ngOnInit(){this._checkParentType();/** @type {?} */this.formDirective.addFormGroup(this)}/**
     * \@description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     * @return {?}
     */;_proto17.ngOnDestroy=function ngOnDestroy(){if(this.formDirective){this.formDirective.removeFormGroup(this)}}/**
     * \@description
     * The `FormGroup` bound to this directive.
     * @return {?}
     */;/**
     * \@internal
     * @return {?}
     */_proto17._checkParentType=function _checkParentType(){};_createClass(AbstractFormGroupDirective,[{key:"control",get:function get(){return(/** @type {?} */this.formDirective.getFormGroup(this))}/**
     * \@description
     * The path to this group from the top-level directive.
     * @return {?}
     */},{key:"path",get:function get(){return controlPath(this.name,this._parent)}/**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?this._parent.formDirective:null}/**
     * \@description
     * The synchronous validators registered with this group.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._validators)}/**
     * \@description
     * The async validators registered with this group.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._asyncValidators)}}]);return AbstractFormGroupDirective}(ControlContainer);if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var modelGroupProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NgModelGroup})};/**
 * \@description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * \@usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * \@ngModule FormsModule
 * \@publicApi
 */var NgModelGroup=/*#__PURE__*/function(_AbstractFormGroupDir){_inheritsLoose(NgModelGroup,_AbstractFormGroupDir);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */function NgModelGroup(parent,validators,asyncValidators){var _this28;_this28=_AbstractFormGroupDir.call(this)||this;_this28._parent=parent;_this28._validators=validators;_this28._asyncValidators=asyncValidators;return _this28}/**
     * \@internal
     * @return {?}
     */var _proto18=NgModelGroup.prototype;_proto18._checkParentType=function _checkParentType(){if(!(this._parent instanceof NgModelGroup)&&!(this._parent instanceof NgForm)){TemplateDrivenErrors.modelGroupParentException()}};return NgModelGroup}(AbstractFormGroupDirective);NgModelGroup.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[ngModelGroup]",providers:[modelGroupProvider],exportAs:"ngModelGroup"}]}];/** @nocollapse */NgModelGroup.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};NgModelGroup.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModelGroup"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formControlBinding={provide:NgControl,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return NgModel})};var ɵ0$1=/**
 * @return {?}
 */function ɵ0$1(){return Promise.resolve(null)};/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 * @type {?}
 */var resolvedPromise$1=ɵ0$1();/**
 * \@description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
 * You then access the control using the directive's `control` property,
 * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
 * See a full list of properties directly available in `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * \@usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel name attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. The name attribute is used
 * within a custom form component, and the name `\@Input` property serves a different purpose.
 *
 * ```html
 * <form>
 *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-person-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * \@ngModule FormsModule
 * \@publicApi
 */var NgModel=/*#__PURE__*/function(_NgControl){_inheritsLoose(NgModel,_NgControl);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */function NgModel(parent,validators,asyncValidators,valueAccessors){var _this29;_this29=_NgControl.call(this)||this;_this29.control=new FormControl;/**
         * \@internal
         */_this29._registered=false;/**
         * \@description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */_this29.update=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];_this29._parent=parent;_this29._rawValidators=validators||[];_this29._rawAsyncValidators=asyncValidators||[];_this29.valueAccessor=selectValueAccessor(_assertThisInitialized(_this29),valueAccessors);return _this29}/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */var _proto19=NgModel.prototype;_proto19.ngOnChanges=function ngOnChanges(changes){this._checkForErrors();if(!this._registered)this._setUpControl();if("isDisabled"in changes){this._updateDisabled(changes)}if(isPropertyUpdated(changes,this.viewModel)){this._updateValue(this.model);this.viewModel=this.model}}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal
     * use only.
     * @return {?}
     */;_proto19.ngOnDestroy=function ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */;/**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value emitted by `ngModelChange`.
     * @return {?}
     */_proto19.viewToModelUpdate=function viewToModelUpdate(newValue){this.viewModel=newValue;this.update.emit(newValue)}/**
     * @private
     * @return {?}
     */;_proto19._setUpControl=function _setUpControl(){this._setUpdateStrategy();this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this);this._registered=true}/**
     * @private
     * @return {?}
     */;_proto19._setUpdateStrategy=function _setUpdateStrategy(){if(this.options&&this.options.updateOn!=null){this.control._updateOn=this.options.updateOn}}/**
     * @private
     * @return {?}
     */;_proto19._isStandalone=function _isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}/**
     * @private
     * @return {?}
     */;_proto19._setUpStandalone=function _setUpStandalone(){setUpControl(this.control,this);this.control.updateValueAndValidity({emitEvent:false})}/**
     * @private
     * @return {?}
     */;_proto19._checkForErrors=function _checkForErrors(){if(!this._isStandalone()){this._checkParentType()}this._checkName()}/**
     * @private
     * @return {?}
     */;_proto19._checkParentType=function _checkParentType(){if(!(this._parent instanceof NgModelGroup)&&this._parent instanceof AbstractFormGroupDirective){TemplateDrivenErrors.formGroupNameException()}else if(!(this._parent instanceof NgModelGroup)&&!(this._parent instanceof NgForm)){TemplateDrivenErrors.modelParentException()}}/**
     * @private
     * @return {?}
     */;_proto19._checkName=function _checkName(){if(this.options&&this.options.name)this.name=this.options.name;if(!this._isStandalone()&&!this.name){TemplateDrivenErrors.missingNameException()}}/**
     * @private
     * @param {?} value
     * @return {?}
     */;_proto19._updateValue=function _updateValue(value){var _this30=this;resolvedPromise$1.then(/**
         * @return {?}
         */function(){_this30.control.setValue(value,{emitViewToModelChange:false})})}/**
     * @private
     * @param {?} changes
     * @return {?}
     */;_proto19._updateDisabled=function _updateDisabled(changes){var _this31=this;/** @type {?} */var disabledValue=changes["isDisabled"].currentValue;/** @type {?} */var isDisabled=disabledValue===""||disabledValue&&disabledValue!=="false";resolvedPromise$1.then(/**
         * @return {?}
         */function(){if(isDisabled&&!_this31.control.disabled){_this31.control.disable()}else if(!isDisabled&&_this31.control.disabled){_this31.control.enable()}})};_createClass(NgModel,[{key:"path",get:function get(){return this._parent?controlPath(this.name,this._parent):[this.name]}/**
     * \@description
     * The top-level directive for this control if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?this._parent.formDirective:null}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._rawValidators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._rawAsyncValidators)}}]);return NgModel}(NgControl);NgModel.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[ngModel]:not([formControlName]):not([formControl])",providers:[formControlBinding],exportAs:"ngModel"}]}];/** @nocollapse */NgModel.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALUE_ACCESSOR]}]}]};NgModel.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["disabled"]}],model:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModel"]}],options:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModelOptions"]}],update:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],args:["ngModelChange"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@publicApi
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 */var ɵNgNoValidate=function ɵNgNoValidate(){};ɵNgNoValidate.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"form:not([ngNoForm]):not([ngNativeValidate])",host:{"novalidate":""}}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 * @type {?}
 */var NG_MODEL_WITH_FORM_CONTROL_WARNING=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("NgModelWithFormControlWarning");/** @type {?} */var formControlBinding$1={provide:NgControl,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormControlDirective})};/**
 * \@description
 * * Syncs a standalone `FormControl` instance to a form control element.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Registering a single form control
 *
 * The following examples shows how to register a standalone control and set its value.
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <input [formControl]="control" [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <input [formControl]="control">
 * ```
 *
 * ```ts
 * this.control.setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormControlDirective=/*#__PURE__*/function(_NgControl2){_inheritsLoose(FormControlDirective,_NgControl2);/**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */function FormControlDirective(validators,asyncValidators,valueAccessors,_ngModelWarningConfig){var _this32;_this32=_NgControl2.call(this)||this;_this32._ngModelWarningConfig=_ngModelWarningConfig;/**
         * @deprecated as of v6
         */_this32.update=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * \@internal
         */_this32._ngModelWarningSent=false;_this32._rawValidators=validators||[];_this32._rawAsyncValidators=asyncValidators||[];_this32.valueAccessor=selectValueAccessor(_assertThisInitialized(_this32),valueAccessors);return _this32}/**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */var _proto20=FormControlDirective.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto20.ngOnChanges=function ngOnChanges(changes){if(this._isControlChanged(changes)){setUpControl(this.form,this);if(this.control.disabled&&/** @type {?} */this.valueAccessor.setDisabledState){/** @type {?} */ /** @type {?} */this.valueAccessor.setDisabledState(true)}this.form.updateValueAndValidity({emitEvent:false})}if(isPropertyUpdated(changes,this.viewModel)){_ngModelWarning("formControl",FormControlDirective,this,this._ngModelWarningConfig);this.form.setValue(this.model);this.viewModel=this.model}}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */;/**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value for the view model.
     * @return {?}
     */_proto20.viewToModelUpdate=function viewToModelUpdate(newValue){this.viewModel=newValue;this.update.emit(newValue)}/**
     * @private
     * @param {?} changes
     * @return {?}
     */;_proto20._isControlChanged=function _isControlChanged(changes){return changes.hasOwnProperty("form")};_createClass(FormControlDirective,[{key:"isDisabled",set:function set(isDisabled){ReactiveErrors.disabledAttrWarning()}},{key:"path",get:function get(){return[]}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._rawValidators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._rawAsyncValidators)}/**
     * \@description
     * The `FormControl` bound to this directive.
     * @return {?}
     */},{key:"control",get:function get(){return this.form}}]);return FormControlDirective}(NgControl);/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * \@internal
 */FormControlDirective._ngModelWarningSentOnce=false;FormControlDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formControl]",providers:[formControlBinding$1],exportAs:"ngForm"}]}];/** @nocollapse */FormControlDirective.ctorParameters=function(){return[{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALUE_ACCESSOR]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_MODEL_WITH_FORM_CONTROL_WARNING]}]}]};FormControlDirective.propDecorators={form:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formControl"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["disabled"]}],model:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModel"]}],update:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],args:["ngModelChange"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formDirectiveProvider$1={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormGroupDirective})};/**
 * \@description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormGroupDirective=/*#__PURE__*/function(_ControlContainer3){_inheritsLoose(FormGroupDirective,_ControlContainer3);/**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */function FormGroupDirective(_validators,_asyncValidators){var _this33;_this33=_ControlContainer3.call(this)||this;_this33._validators=_validators;_this33._asyncValidators=_asyncValidators;/**
         * \@description
         * Reports whether the form submission has been triggered.
         */_this33.submitted=false;/**
         * \@description
         * Tracks the list of added `FormControlName` instances
         */_this33.directives=[];/**
         * \@description
         * Tracks the `FormGroup` bound to this directive.
         */_this33.form=/** @type {?} */null;/**
         * \@description
         * Emits an event when the form submission has been triggered.
         */_this33.ngSubmit=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];return _this33}/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */var _proto21=FormGroupDirective.prototype;_proto21.ngOnChanges=function ngOnChanges(changes){this._checkFormPresent();if(changes.hasOwnProperty("form")){this._updateValidators();this._updateDomValue();this._updateRegistrations()}}/**
     * \@description
     * Returns this directive's instance.
     * @return {?}
     */;/**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */_proto21.addControl=function addControl(dir){/** @type {?} */var ctrl=this.form.get(dir.path);setUpControl(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false});this.directives.push(dir);return ctrl}/**
     * \@description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */;_proto21.getControl=function getControl(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * \@description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */;_proto21.removeControl=function removeControl(dir){removeDir(this.directives,dir)}/**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */;_proto21.addFormGroup=function addFormGroup(dir){/** @type {?} */var ctrl=this.form.get(dir.path);setUpFormContainer(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false})}/**
     * No-op method to remove the form group.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */;_proto21.removeFormGroup=function removeFormGroup(dir){}/**
     * \@description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */;_proto21.getFormGroup=function getFormGroup(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */;_proto21.addFormArray=function addFormArray(dir){/** @type {?} */var ctrl=this.form.get(dir.path);setUpFormContainer(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false})}/**
     * No-op method to remove the form array.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */;_proto21.removeFormArray=function removeFormArray(dir){}/**
     * \@description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */;_proto21.getFormArray=function getFormArray(dir){return(/** @type {?} */this.form.get(dir.path))}/**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */;_proto21.updateModel=function updateModel(dir,value){/** @type {?} */var ctrl=/** @type {?} */this.form.get(dir.path);ctrl.setValue(value)}/**
     * \@description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */;_proto21.onSubmit=function onSubmit($event){/** @type {?} */this.submitted=true;syncPendingControls(this.form,this.directives);this.ngSubmit.emit($event);return false}/**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */;_proto21.onReset=function onReset(){this.resetForm()}/**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */;_proto21.resetForm=function resetForm(value){if(value===void 0){value=undefined}this.form.reset(value);/** @type {?} */this.submitted=false}/**
     * \@internal
     * @return {?}
     */;_proto21._updateDomValue=function _updateDomValue(){var _this34=this;this.directives.forEach(/**
         * @param {?} dir
         * @return {?}
         */function(dir){/** @type {?} */var newCtrl=_this34.form.get(dir.path);if(dir.control!==newCtrl){cleanUpControl(dir.control,dir);if(newCtrl)setUpControl(newCtrl,dir);/** @type {?} */dir.control=newCtrl}});this.form._updateTreeValidity({emitEvent:false})}/**
     * @private
     * @return {?}
     */;_proto21._updateRegistrations=function _updateRegistrations(){var _this35=this;this.form._registerOnCollectionChange(/**
         * @return {?}
         */function(){return _this35._updateDomValue()});if(this._oldForm)this._oldForm._registerOnCollectionChange(/**
             * @return {?}
             */function(){});this._oldForm=this.form}/**
     * @private
     * @return {?}
     */;_proto21._updateValidators=function _updateValidators(){/** @type {?} */var sync=composeValidators(this._validators);this.form.validator=Validators.compose([/** @type {?} */this.form.validator,/** @type {?} */sync]);/** @type {?} */var async=composeAsyncValidators(this._asyncValidators);this.form.asyncValidator=Validators.composeAsync([/** @type {?} */this.form.asyncValidator,/** @type {?} */async])}/**
     * @private
     * @return {?}
     */;_proto21._checkFormPresent=function _checkFormPresent(){if(!this.form){ReactiveErrors.missingFormException()}};_createClass(FormGroupDirective,[{key:"formDirective",get:function get(){return this}/**
     * \@description
     * Returns the `FormGroup` bound to this directive.
     * @return {?}
     */},{key:"control",get:function get(){return this.form}/**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     * @return {?}
     */},{key:"path",get:function get(){return[]}}]);return FormGroupDirective}(ControlContainer);FormGroupDirective.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formGroup]",providers:[formDirectiveProvider$1],host:{"(submit)":"onSubmit($event)","(reset)":"onReset()"},exportAs:"ngForm"}]}];/** @nocollapse */FormGroupDirective.ctorParameters=function(){return[{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};FormGroupDirective.propDecorators={form:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formGroup"]}],ngSubmit:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var formGroupNameProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormGroupName})};/**
 * \@description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * \@usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {\@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {\@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormGroupName=/*#__PURE__*/function(_AbstractFormGroupDir2){_inheritsLoose(FormGroupName,_AbstractFormGroupDir2);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */function FormGroupName(parent,validators,asyncValidators){var _this36;_this36=_AbstractFormGroupDir2.call(this)||this;_this36._parent=parent;_this36._validators=validators;_this36._asyncValidators=asyncValidators;return _this36}/**
     * \@internal
     * @return {?}
     */var _proto22=FormGroupName.prototype;_proto22._checkParentType=function _checkParentType(){if(_hasInvalidParent(this._parent)){ReactiveErrors.groupParentException()}};return FormGroupName}(AbstractFormGroupDirective);FormGroupName.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formGroupName]",providers:[formGroupNameProvider]}]}];/** @nocollapse */FormGroupName.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};FormGroupName.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formGroupName"]}]};if(false){}/** @type {?} */var formArrayNameProvider={provide:ControlContainer,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormArrayName})};/**
 * \@description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormArrayName=/*#__PURE__*/function(_ControlContainer4){_inheritsLoose(FormArrayName,_ControlContainer4);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */function FormArrayName(parent,validators,asyncValidators){var _this37;_this37=_ControlContainer4.call(this)||this;_this37._parent=parent;_this37._validators=validators;_this37._asyncValidators=asyncValidators;return _this37}/**
     * \@description
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     *
     * @throws If the directive does not have a valid parent.
     * @return {?}
     */var _proto23=FormArrayName.prototype;_proto23.ngOnInit=function ngOnInit(){this._checkParentType();/** @type {?} */this.formDirective.addFormArray(this)}/**
     * \@description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto23.ngOnDestroy=function ngOnDestroy(){if(this.formDirective){this.formDirective.removeFormArray(this)}}/**
     * \@description
     * The `FormArray` bound to this directive.
     * @return {?}
     */;/**
     * @private
     * @return {?}
     */_proto23._checkParentType=function _checkParentType(){if(_hasInvalidParent(this._parent)){ReactiveErrors.arrayParentException()}};_createClass(FormArrayName,[{key:"control",get:function get(){return(/** @type {?} */this.formDirective.getFormArray(this))}/**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?/** @type {?} */this._parent.formDirective:null}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */},{key:"path",get:function get(){return controlPath(this.name,this._parent)}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._validators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return composeAsyncValidators(this._asyncValidators)}}]);return FormArrayName}(ControlContainer);FormArrayName.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formArrayName]",providers:[formArrayNameProvider]}]}];/** @nocollapse */FormArrayName.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]}]};FormArrayName.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formArrayName"]}]};if(false){}/**
 * @param {?} parent
 * @return {?}
 */function _hasInvalidParent(parent){return!(parent instanceof FormGroupName)&&!(parent instanceof FormGroupDirective)&&!(parent instanceof FormArrayName)}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var controlNameBinding={provide:NgControl,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return FormControlName})};/**
 * \@description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * \@usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first" [(ngModel)]="value">
 * </form>
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first">
 * </form>
 * ```
 *
 * ```ts
 * this.form.get('first').setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var FormControlName=/*#__PURE__*/function(_NgControl3){_inheritsLoose(FormControlName,_NgControl3);/**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */function FormControlName(parent,validators,asyncValidators,valueAccessors,_ngModelWarningConfig){var _this38;_this38=_NgControl3.call(this)||this;_this38._ngModelWarningConfig=_ngModelWarningConfig;_this38._added=false;/**
         * @deprecated as of v6
         */_this38.update=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];/**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * \@internal
         */_this38._ngModelWarningSent=false;_this38._parent=parent;_this38._rawValidators=validators||[];_this38._rawAsyncValidators=asyncValidators||[];_this38.valueAccessor=selectValueAccessor(_assertThisInitialized(_this38),valueAccessors);return _this38}/**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */var _proto24=FormControlName.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto24.ngOnChanges=function ngOnChanges(changes){if(!this._added)this._setUpControl();if(isPropertyUpdated(changes,this.viewModel)){_ngModelWarning("formControlName",FormControlName,this,this._ngModelWarningConfig);this.viewModel=this.model;this.formDirective.updateModel(this,this.model)}}/**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */;_proto24.ngOnDestroy=function ngOnDestroy(){if(this.formDirective){this.formDirective.removeControl(this)}}/**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value for the view model.
     * @return {?}
     */;_proto24.viewToModelUpdate=function viewToModelUpdate(newValue){this.viewModel=newValue;this.update.emit(newValue)}/**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */;/**
     * @private
     * @return {?}
     */_proto24._checkParentType=function _checkParentType(){if(!(this._parent instanceof FormGroupName)&&this._parent instanceof AbstractFormGroupDirective){ReactiveErrors.ngModelGroupException()}else if(!(this._parent instanceof FormGroupName)&&!(this._parent instanceof FormGroupDirective)&&!(this._parent instanceof FormArrayName)){ReactiveErrors.controlParentException()}}/**
     * @private
     * @return {?}
     */;_proto24._setUpControl=function _setUpControl(){this._checkParentType();/** @type {?} */this.control=this.formDirective.addControl(this);if(this.control.disabled&&/** @type {?} */this.valueAccessor.setDisabledState){/** @type {?} */ /** @type {?} */this.valueAccessor.setDisabledState(true)}this._added=true};_createClass(FormControlName,[{key:"isDisabled",set:function set(isDisabled){ReactiveErrors.disabledAttrWarning()}},{key:"path",get:function get(){return controlPath(this.name,/** @type {?} */this._parent)}/**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */},{key:"formDirective",get:function get(){return this._parent?this._parent.formDirective:null}/**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */},{key:"validator",get:function get(){return composeValidators(this._rawValidators)}/**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */},{key:"asyncValidator",get:function get(){return(/** @type {?} */composeAsyncValidators(this._rawAsyncValidators))}}]);return FormControlName}(NgControl);/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * \@internal
 */FormControlName._ngModelWarningSentOnce=false;FormControlName.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[formControlName]",providers:[controlNameBinding]}]}];/** @nocollapse */FormControlName.ctorParameters=function(){return[{type:ControlContainer,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_VALUE_ACCESSOR]}]},{type:undefined,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],args:[NG_MODEL_WITH_FORM_CONTROL_WARNING]}]}]};FormControlName.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["formControlName"]}],isDisabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["disabled"]}],model:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],args:["ngModel"]}],update:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],args:["ngModelChange"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@description
 * An interface implemented by classes that perform synchronous validation.
 *
 * \@usageNotes
 *
 * ### Provide a custom validator
 *
 * The following example implements the `Validator` interface to create a
 * validator directive with a custom error key.
 *
 * ```typescript
 * \@Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors|null {
 *     return {'custom': true};
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */function Validator(){}if(false){}/**
 * \@description
 * An interface implemented by classes that perform asynchronous validation.
 *
 * \@usageNotes
 *
 * ### Provide a custom async validator directive
 *
 * The following example implements the `AsyncValidator` interface to create an
 * async validator directive with a custom error key.
 *
 * ```typescript
 * import { of as observableOf } from 'rxjs';
 *
 * \@Directive({
 *   selector: '[customAsyncValidator]',
 *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
 * true}]
 * })
 * class CustomAsyncValidatorDirective implements AsyncValidator {
 *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
 *     return observableOf({'custom': true});
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */function AsyncValidator(){}if(false){}/**
 * \@description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var REQUIRED_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return RequiredValidator}),multi:true};/**
 * \@description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var CHECKBOX_REQUIRED_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return CheckboxRequiredValidator}),multi:true};/**
 * \@description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 * \@publicApi
 */var RequiredValidator=/*#__PURE__*/function(){function RequiredValidator(){}var _proto25=RequiredValidator.prototype;/**
     * \@description
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */_proto25.validate=function validate(control){return this.required?Validators.required(control):null}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto25.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn};_createClass(RequiredValidator,[{key:"required",/**
     * \@description
     * Tracks changes to the required attribute bound to this directive.
     * @return {?}
     */get:function get(){return this._required}/**
     * @param {?} value
     * @return {?}
     */,set:function set(value){this._required=value!=null&&value!==false&&""+value!=="false";if(this._onChange)this._onChange()}}]);return RequiredValidator}();RequiredValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",providers:[REQUIRED_VALIDATOR],host:{"[attr.required]":"required ? \"\" : null"}}]}];RequiredValidator.propDecorators={required:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@publicApi
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 */var CheckboxRequiredValidator=/*#__PURE__*/function(_RequiredValidator){_inheritsLoose(CheckboxRequiredValidator,_RequiredValidator);function CheckboxRequiredValidator(){return _RequiredValidator.apply(this,arguments)||this}var _proto26=CheckboxRequiredValidator.prototype;/**
     * \@description
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */_proto26.validate=function validate(control){return this.required?Validators.requiredTrue(control):null};return CheckboxRequiredValidator}(RequiredValidator);CheckboxRequiredValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",providers:[CHECKBOX_REQUIRED_VALIDATOR],host:{"[attr.required]":"required ? \"\" : null"}}]}];/**
 * \@description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var EMAIL_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return EmailValidator}),multi:true};/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@publicApi
 * \@ngModule FormsModule
 * \@ngModule ReactiveFormsModule
 */var EmailValidator=/*#__PURE__*/function(){function EmailValidator(){}var _proto27=EmailValidator.prototype;/**
     * \@description
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */_proto27.validate=function validate(control){return this._enabled?Validators.email(control):null}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto27.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn};_createClass(EmailValidator,[{key:"email",/**
     * \@description
     * Tracks changes to the email attribute bound to this directive.
     * @param {?} value
     * @return {?}
     */set:function set(value){this._enabled=value===""||value===true||value==="true";if(this._onChange)this._onChange()}}]);return EmailValidator}();EmailValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[email][formControlName],[email][formControl],[email][ngModel]",providers:[EMAIL_VALIDATOR]}]}];EmailValidator.propDecorators={email:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * A function that receives a control and synchronously returns a map of
 * validation errors if present, otherwise null.
 *
 * \@publicApi
 * @record
 */function ValidatorFn(){}/**
 * \@description
 * A function that receives a control and returns a Promise or observable
 * that emits validation errors if present, otherwise null.
 *
 * \@publicApi
 * @record
 */function AsyncValidatorFn(){}/**
 * \@description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var MIN_LENGTH_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return MinLengthValidator}),multi:true};/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var MinLengthValidator=/*#__PURE__*/function(){function MinLengthValidator(){}var _proto28=MinLengthValidator.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto28.ngOnChanges=function ngOnChanges(changes){if("minlength"in changes){this._createValidator();if(this._onChange)this._onChange()}}/**
     * \@description
     * Method that validates whether the value meets a minimum length
     * requirement. Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */;_proto28.validate=function validate(control){return this.minlength==null?null:this._validator(control)}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto28.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn}/**
     * @private
     * @return {?}
     */;_proto28._createValidator=function _createValidator(){this._validator=Validators.minLength(parseInt(this.minlength,10))};return MinLengthValidator}();MinLengthValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",providers:[MIN_LENGTH_VALIDATOR],host:{"[attr.minlength]":"minlength ? minlength : null"}}]}];MinLengthValidator.propDecorators={minlength:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var MAX_LENGTH_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return MaxLengthValidator}),multi:true};/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var MaxLengthValidator=/*#__PURE__*/function(){function MaxLengthValidator(){}var _proto29=MaxLengthValidator.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto29.ngOnChanges=function ngOnChanges(changes){if("maxlength"in changes){this._createValidator();if(this._onChange)this._onChange()}}/**
     * \@description
     * Method that validates whether the value exceeds
     * the maximum length requirement.
     * @param {?} control
     * @return {?}
     */;_proto29.validate=function validate(control){return this.maxlength!=null?this._validator(control):null}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto29.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn}/**
     * @private
     * @return {?}
     */;_proto29._createValidator=function _createValidator(){this._validator=Validators.maxLength(parseInt(this.maxlength,10))};return MaxLengthValidator}();MaxLengthValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",providers:[MAX_LENGTH_VALIDATOR],host:{"[attr.maxlength]":"maxlength ? maxlength : null"}}]}];MaxLengthValidator.propDecorators={maxlength:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * \@description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */var PATTERN_VALIDATOR={provide:NG_VALIDATORS,useExisting:Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(/**
     * @return {?}
     */function(){return PatternValidator}),multi:true};/**
 * \@description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * \@usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */var PatternValidator=/*#__PURE__*/function(){function PatternValidator(){}var _proto30=PatternValidator.prototype;/**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */_proto30.ngOnChanges=function ngOnChanges(changes){if("pattern"in changes){this._createValidator();if(this._onChange)this._onChange()}}/**
     * \@description
     * Method that validates whether the value matches the
     * the pattern requirement.
     * @param {?} control
     * @return {?}
     */;_proto30.validate=function validate(control){return this._validator(control)}/**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */;_proto30.registerOnValidatorChange=function registerOnValidatorChange(fn){this._onChange=fn}/**
     * @private
     * @return {?}
     */;_proto30._createValidator=function _createValidator(){this._validator=Validators.pattern(this.pattern)};return PatternValidator}();PatternValidator.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],args:[{selector:"[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",providers:[PATTERN_VALIDATOR],host:{"[attr.pattern]":"pattern ? pattern : null"}}]}];PatternValidator.propDecorators={pattern:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]}]};if(false){}/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /** @type {?} */var SHARED_FORM_DIRECTIVES=[ɵNgNoValidate,NgSelectOption,ɵNgSelectMultipleOption,DefaultValueAccessor,NumberValueAccessor,RangeValueAccessor,CheckboxControlValueAccessor,SelectControlValueAccessor,SelectMultipleControlValueAccessor,RadioControlValueAccessor,NgControlStatus,NgControlStatusGroup,RequiredValidator,MinLengthValidator,MaxLengthValidator,PatternValidator,CheckboxRequiredValidator,EmailValidator];/** @type {?} */var TEMPLATE_DRIVEN_DIRECTIVES=[NgModel,NgModelGroup,NgForm,NgFormSelectorWarning];/** @type {?} */var REACTIVE_DRIVEN_DIRECTIVES=[FormControlDirective,FormGroupDirective,FormControlName,FormGroupName,FormArrayName];/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */var ɵInternalFormsSharedModule=function ɵInternalFormsSharedModule(){};ɵInternalFormsSharedModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:SHARED_FORM_DIRECTIVES,exports:SHARED_FORM_DIRECTIVES}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @param {?} options
 * @return {?}
 */function isAbstractControlOptions(options){return(/** @type {?} */options.asyncValidators!==undefined||/** @type {?} */options.validators!==undefined||/** @type {?} */options.updateOn!==undefined)}/**
 * \@description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * \@publicApi
 */var FormBuilder=/*#__PURE__*/function(){function FormBuilder(){}var _proto31=FormBuilder.prototype;/**
     * \@description
     * Construct a new `FormGroup` instance.
     *
     * @param {?} controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     * @return {?}
     */_proto31.group=function group(controlsConfig,options){if(options===void 0){options=null}/** @type {?} */var controls=this._reduceControls(controlsConfig);/** @type {?} */var validators=null;/** @type {?} */var asyncValidators=null;/** @type {?} */var updateOn=undefined;if(options!=null){if(isAbstractControlOptions(options)){// `options` are `AbstractControlOptions`
validators=options.validators!=null?options.validators:null;asyncValidators=options.asyncValidators!=null?options.asyncValidators:null;updateOn=options.updateOn!=null?options.updateOn:undefined}else{// `options` are legacy form group options
validators=options["validator"]!=null?options["validator"]:null;asyncValidators=options["asyncValidator"]!=null?options["asyncValidator"]:null}}return new FormGroup(controls,{asyncValidators:asyncValidators,updateOn:updateOn,validators:validators})}/**
     * \@description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * \@usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     * @param {?} formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @return {?}
     */;_proto31.control=function control(formState,validatorOrOpts,asyncValidator){return new FormControl(formState,validatorOrOpts,asyncValidator)}/**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param {?} controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator
     * functions.
     * @return {?}
     */;_proto31.array=function array(controlsConfig,validatorOrOpts,asyncValidator){var _this39=this;/** @type {?} */var controls=controlsConfig.map(/**
         * @param {?} c
         * @return {?}
         */function(c){return _this39._createControl(c)});return new FormArray(controls,validatorOrOpts,asyncValidator)}/**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */;_proto31._reduceControls=function _reduceControls(controlsConfig){var _this40=this;/** @type {?} */var controls={};Object.keys(controlsConfig).forEach(/**
         * @param {?} controlName
         * @return {?}
         */function(controlName){controls[controlName]=_this40._createControl(controlsConfig[controlName])});return controls}/**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */;_proto31._createControl=function _createControl(controlConfig){if(controlConfig instanceof FormControl||controlConfig instanceof FormGroup||controlConfig instanceof FormArray){return controlConfig}else if(Array.isArray(controlConfig)){/** @type {?} */var value=controlConfig[0];/** @type {?} */var validator=controlConfig.length>1?controlConfig[1]:null;/** @type {?} */var asyncValidator=controlConfig.length>2?controlConfig[2]:null;return this.control(value,validator,asyncValidator)}else{return this.control(controlConfig)}};return FormBuilder}();FormBuilder.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * \@publicApi
 * @type {?}
 */var VERSION=new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]("8.2.8");/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Guide](/guide/forms)
 *
 * \@publicApi
 */var FormsModule=/*#__PURE__*/function(){function FormsModule(){}/**
     * \@description
     * Provides options for configuring the template-driven forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
     * `ngForm` selector is used.
     * @return {?}
     */FormsModule.withConfig=function withConfig(opts){return{ngModule:FormsModule,providers:[{provide:NG_FORM_SELECTOR_WARNING,useValue:opts.warnOnDeprecatedNgFormSelector}]}};return FormsModule}();FormsModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:TEMPLATE_DRIVEN_DIRECTIVES,providers:[RadioControlRegistry],exports:[ɵInternalFormsSharedModule,TEMPLATE_DRIVEN_DIRECTIVES]}]}];/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/reactive-forms)
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * \@publicApi
 */var ReactiveFormsModule=/*#__PURE__*/function(){function ReactiveFormsModule(){}/**
     * \@description
     * Provides options for configuring the reactive forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     * @return {?}
     */ReactiveFormsModule.withConfig=function withConfig(opts){return{ngModule:ReactiveFormsModule,providers:[{provide:NG_MODEL_WITH_FORM_CONTROL_WARNING,useValue:opts.warnOnNgModelWithFormControl}]}};return ReactiveFormsModule}();ReactiveFormsModule.decorators=[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],args:[{declarations:[REACTIVE_DRIVEN_DIRECTIVES],providers:[FormBuilder,RadioControlRegistry],exports:[ɵInternalFormsSharedModule,REACTIVE_DRIVEN_DIRECTIVES]}]}];/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */ /**
 * Generated bundle index. Do not edit.
 */ //# sourceMappingURL=forms.js.map
/***/},/***/"./node_modules/raw-loader/dist/cjs.js!./src/app/form/container/container.component.html":/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/container/container.component.html ***!
  \***********************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsSrcAppFormContainerContainerComponentHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<div class=\"container\">\n    <div class=\"d-flex justify-content-around mt-5\">\n      <!-- Reactive Form -->\n      <div class=\"forms\">\n        <a class=\"btn btn-danger p-4 shadow \" routerLink= 'reactive-form'>Reactive Form</a>\n      </div>\n      <!-- Form Module - NgForms-->\n      <div class=\"add-list\">\n          <a class=\"btn btn-danger p-4 shadow \"  routerLink= 'form-modules'>Ng Module</a>\n        </div>\n\n    </div>\n  </div>\n";/***/},/***/"./node_modules/raw-loader/dist/cjs.js!./src/app/form/forms-module/forms-module.component.html":/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/forms-module/forms-module.component.html ***!
  \*****************************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsSrcAppFormFormsModuleFormsModuleComponentHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<p>forms-module works!</p>\n";/***/},/***/"./node_modules/raw-loader/dist/cjs.js!./src/app/form/reactive-forms/reactive-forms.component.html":/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/reactive-forms/reactive-forms.component.html ***!
  \*********************************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsSrcAppFormReactiveFormsReactiveFormsComponentHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" >\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">First Name</label>\n        <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"firstName\"\n            id=\"firstName\"\n            aria-describedby=\"firstname\"\n            placeholder=\"Firstname\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n            >\n          <div *ngIf=\"( f.firstName.dirty || f.firstName.touched) && submitted && f.firstName.errors \" id=\"firstname\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\"> First Name is Required</div>\n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Last Name</label>\n          <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"lastName\"\n              aria-describedby=\"lastName\"\n              placeholder=\"last Name\"\n              formControlName=\"lastName\"\n              [ngClass]=\"{ 'is-invalid' : submitted && f.lastName.errors}\"\n              >\n              <div *ngIf=\"( f.lastName.dirty || f.lastName.touched) && submitted && f.lastName.errors \" id=\"lastName\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.lastName.errors.required\"> last Name is Required</div>\n                </div>\n        </div>\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input\n          type=\"email\"\n          class=\"form-control\"\n          id=\"exampleInputEmail1\"\n          aria-describedby=\"emailHelp\"\n          placeholder=\"Enter email\"\n          formControlName=\"email\"\n          [ngClass]=\"{ 'is-invalid' : submitted && f.email.errors}\"\n          >\n          <div *ngIf=\"( f.email.dirty || f.email.touched) && submitted && f.email.errors \" id=\"email\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\"> Email is Required</div>\n            </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"exampleInputPassword1\"\n        placeholder=\"Password\"\n        formControlName=\"password\"\n        [ngClass]=\"{ 'is-invalid' : submitted && f.password.errors }\"\n         >\n         <div *ngIf=\"( f.password.dirty || f.password.touched) && submitted && f.password.errors \" id=\"password\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\"> Password is Required</div>\n          </div>\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\"\n      formControlName=\"checkB\"\n      [ngClass]=\"{ 'is-invalid' : submitted && f.checkB.errors }\"\n      >\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <div *ngIf=\"( f.checkB.dirty || f.checkB.touched) && submitted && f.checkB.errors \" id=\"checkB\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.checkB.errors.required\"> checkB is Required</div>\n      </div>\n    <!-- <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registerForm.valid\">Submit</button> -->\n    <button type=\"submit\" class=\"btn btn-primary mx-5\" >Submit</button>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onRest()\" >Reset</button>\n  </form>\n";/***/},/***/"./src/app/form/container/container.component.scss":/*!*********************************************************!*\
  !*** ./src/app/form/container/container.component.scss ***!
  \*********************************************************/ /*! exports provided: default */ /***/function srcAppFormContainerContainerComponentScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */";/***/},/***/"./src/app/form/container/container.component.ts":/*!*******************************************************!*\
  !*** ./src/app/form/container/container.component.ts ***!
  \*******************************************************/ /*! exports provided: ContainerComponent */ /***/function srcAppFormContainerContainerComponentTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ContainerComponent",function(){return ContainerComponent});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");var ContainerComponent=/*#__PURE__*/function(){function ContainerComponent(){}var _proto32=ContainerComponent.prototype;_proto32.ngOnInit=function ngOnInit(){};return ContainerComponent}();ContainerComponent=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({selector:"app-container",template:tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/form/container/container.component.html")).default,styles:[tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container.component.scss */"./src/app/form/container/container.component.scss")).default]})],ContainerComponent);/***/},/***/"./src/app/form/form-routing.module.ts":/*!*********************************************!*\
  !*** ./src/app/form/form-routing.module.ts ***!
  \*********************************************/ /*! exports provided: FormRoutingModule */ /***/function srcAppFormFormRoutingModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormRoutingModule",function(){return FormRoutingModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");/* harmony import */var _reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./reactive-forms/reactive-forms.component */"./src/app/form/reactive-forms/reactive-forms.component.ts");/* harmony import */var _forms_module_forms_module_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./forms-module/forms-module.component */"./src/app/form/forms-module/forms-module.component.ts");/* harmony import */var _container_container_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./container/container.component */"./src/app/form/container/container.component.ts");var routes=[{path:"",component:_container_container_component__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"]},{path:"reactive-form",component:_reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsComponent"]},{path:"form-modules",component:_forms_module_forms_module_component__WEBPACK_IMPORTED_MODULE_4__["FormsModuleComponent"]}];var FormRoutingModule=function FormRoutingModule(){};FormRoutingModule=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({imports:[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],exports:[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]})],FormRoutingModule);/***/},/***/"./src/app/form/form.module.ts":/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/ /*! exports provided: FormModule */ /***/function srcAppFormFormModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormModule",function(){return FormModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _form_routing_module__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./form-routing.module */"./src/app/form/form-routing.module.ts");/* harmony import */var _reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./reactive-forms/reactive-forms.component */"./src/app/form/reactive-forms/reactive-forms.component.ts");/* harmony import */var _forms_module_forms_module_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./forms-module/forms-module.component */"./src/app/form/forms-module/forms-module.component.ts");/* harmony import */var _container_container_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./container/container.component */"./src/app/form/container/container.component.ts");// Reactive Form
var FormModule=function FormModule(){};FormModule=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({declarations:[_reactive_forms_reactive_forms_component__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsComponent"],_forms_module_forms_module_component__WEBPACK_IMPORTED_MODULE_6__["FormsModuleComponent"],_container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"]],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],_form_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormRoutingModule"],_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]})],FormModule);/***/},/***/"./src/app/form/forms-module/forms-module.component.scss":/*!***************************************************************!*\
  !*** ./src/app/form/forms-module/forms-module.component.scss ***!
  \***************************************************************/ /*! exports provided: default */ /***/function srcAppFormFormsModuleFormsModuleComponentScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybXMtbW9kdWxlL2Zvcm1zLW1vZHVsZS5jb21wb25lbnQuc2NzcyJ9 */";/***/},/***/"./src/app/form/forms-module/forms-module.component.ts":/*!*************************************************************!*\
  !*** ./src/app/form/forms-module/forms-module.component.ts ***!
  \*************************************************************/ /*! exports provided: FormsModuleComponent */ /***/function srcAppFormFormsModuleFormsModuleComponentTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormsModuleComponent",function(){return FormsModuleComponent});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");var FormsModuleComponent=/*#__PURE__*/function(){function FormsModuleComponent(){}var _proto33=FormsModuleComponent.prototype;_proto33.ngOnInit=function ngOnInit(){};return FormsModuleComponent}();FormsModuleComponent=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({selector:"app-forms-module",template:tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms-module.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/form/forms-module/forms-module.component.html")).default,styles:[tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms-module.component.scss */"./src/app/form/forms-module/forms-module.component.scss")).default]})],FormsModuleComponent);/***/},/***/"./src/app/form/reactive-forms/reactive-forms.component.scss":/*!*******************************************************************!*\
  !*** ./src/app/form/reactive-forms/reactive-forms.component.scss ***!
  \*******************************************************************/ /*! exports provided: default */ /***/function srcAppFormReactiveFormsReactiveFormsComponentScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vcmVhY3RpdmUtZm9ybXMvcmVhY3RpdmUtZm9ybXMuY29tcG9uZW50LnNjc3MifQ== */";/***/},/***/"./src/app/form/reactive-forms/reactive-forms.component.ts":/*!*****************************************************************!*\
  !*** ./src/app/form/reactive-forms/reactive-forms.component.ts ***!
  \*****************************************************************/ /*! exports provided: ReactiveFormsComponent */ /***/function srcAppFormReactiveFormsReactiveFormsComponentTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ReactiveFormsComponent",function(){return ReactiveFormsComponent});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _validators_phone_validator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../validators/phone-validator */"./src/app/form/validators/phone-validator.ts");var ReactiveFormsComponent=/*#__PURE__*/function(){function ReactiveFormsComponent(fb){this.fb=fb;this.submitted=false;this.registerForm=this.fb.group({firstName:["",_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],lastName:["",_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],email:["",[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],password:["",[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,_validators_phone_validator__WEBPACK_IMPORTED_MODULE_3__["phoneNumberValidator"]]],checkB:["",_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]})}// convenience getter for easy access to form fields
var _proto34=ReactiveFormsComponent.prototype;_proto34.onSubmit=function onSubmit(){this.submitted=true;// stop here if form is invalid
if(this.registerForm.invalid){return}};_proto34.onRest=function onRest(){this.submitted=false;this.registerForm.reset()};_proto34.ngOnInit=function ngOnInit(){};_createClass(ReactiveFormsComponent,[{key:"f",get:function get(){return this.registerForm.controls}}]);return ReactiveFormsComponent}();ReactiveFormsComponent.ctorParameters=function(){return[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]}]};ReactiveFormsComponent=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({selector:"app-reactive-forms",template:tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reactive-forms.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/form/reactive-forms/reactive-forms.component.html")).default,styles:[tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reactive-forms.component.scss */"./src/app/form/reactive-forms/reactive-forms.component.scss")).default]})],ReactiveFormsComponent);/***/},/***/"./src/app/form/validators/phone-validator.ts":/*!****************************************************!*\
  !*** ./src/app/form/validators/phone-validator.ts ***!
  \****************************************************/ /*! exports provided: phoneNumberValidator */ /***/function srcAppFormValidatorsPhoneValidatorTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"phoneNumberValidator",function(){return phoneNumberValidator});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");function phoneNumberValidator(control){var valid=/^\d+$/.test(control.value);return valid?null:{invalidNumber:{valid:false,value:control.value}}}/***/}}]);//# sourceMappingURL=form-form-module-es2015.js.map
//# sourceMappingURL=form-form-module-es5.js.map