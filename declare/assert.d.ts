/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */




/** module Or Internal Object */
/**
	* @brief 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
	* @detail 引用方法：,```JavaScript,var assert = require('assert');,```,或者通过 test 模块引用：,```JavaScript,var test = require('test');,var assert = test.assert;,```,或者通过 test.setup 配置：,```JavaScript,require("test").setup();,```
	*/
declare module "assert" {
	
	
	
	/**
		* 
		* @brief 测试数值为真，为假则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function Function(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为真，为假则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function ok(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为假，为真则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notOk(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值等于预期值，不相等则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function equal(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不等于预期值，相等则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值严格等于预期值，不相等则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function strictEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不严格等于预期值，相等则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notStrictEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值深度等于预期值，不相等则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function deepEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不深度等于预期值，相等则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notDeepEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值近似等于预期值，否则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param delta 近似的小数精度
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function closeTo(actual: any, expected: any, delta: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不近似等于预期值，否则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param delta 近似的小数精度
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notCloseTo(actual: any, expected: any, delta: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值小于预期值，大于或等于则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function lessThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不小于预期值，小于则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notLessThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值大于预期值，小于或等于则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function greaterThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不大于预期值，大于则断言失败
		* @param actual 要测试的数值
		* @param expected 预期的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notGreaterThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试变量存在，为假则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function exist(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试变量不存在，为真则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notExist(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为布尔值真，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isTrue(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为布尔值真，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotTrue(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为布尔值假，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isFalse(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为布尔值假，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotFalse(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为 Null，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNull(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为 Null，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotNull(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为 undefined，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isUndefined(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为 undefined，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isDefined(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为函数，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isFunction(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为函数，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotFunction(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为对象，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isObject(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为对象，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotObject(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为数组，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isArray(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为数组，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotArray(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为字符串，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isString(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为字符串，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotString(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为数字，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNumber(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为数字，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotNumber(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为布尔，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isBoolean(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为布尔，否则断言失败
		* @param actual 要测试的数值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function isNotBoolean(actual: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值为给定类型，否则断言失败
		* @param actual 要测试的数值
		* @param type 指定的类型
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function typeOf(actual: any, type: string, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试数值不为给定类型，否则断言失败
		* @param actual 要测试的数值
		* @param type 指定的类型
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notTypeOf(actual: any, type: string, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试对象中包含指定属性，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function property(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试对象中不包含指定属性，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notProperty(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 深度测试对象中包含指定属性，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性，以“.”分割
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function deepProperty(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 深度测试对象中不包含指定属性，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性，以“.”分割
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function notDeepProperty(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试对象中指定属性的值为给定值，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性
		* @param value 给定的值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function propertyVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试对象中指定属性的值不为给定值，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性
		* @param value 给定的值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function propertyNotVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 深度测试对象中指定属性的值为给定值，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性，以“.”分割
		* @param value 给定的值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function deepPropertyVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 深度测试对象中指定属性的值不为给定值，否则断言失败
		* @param object 要测试的对象
		* @param prop 要测试的属性，以“.”分割
		* @param value 给定的值
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function deepPropertyNotVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试给定的代码会抛出错误，未抛出则断言失败
		* @param block 指定测试的代码，以函数形式给出
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function throws(block: Function, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 测试给定的代码不会抛出错误，抛出则断言失败
		* @param block 指定测试的代码，以函数形式给出
		* @param msg 断言失败时的提示信息
		* 
		* 
		* 
		*/
	export function doesNotThrow(block: Function, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 如果参数为真，则抛出
		* @param object 参数
		* 
		* 
		* 
		*/
	export function ifError(object?: any/** = v8::Undefined(isolate)*/): void;

}

/** } /** endof `module Or Internal Object` */


