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
	* @brief timers 模块
	* @detail 
	*/
declare module "timers" {
	
	
	
	/**
		* 
		* @brief 在指定的时间后调用函数
		* @param callback 指定回调函数
		* @param timeout 指定延时的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		* @param args 额外的参数，传入到指定的 callback 内，可选。
		* @return 返回定时器对象
		* 
		* 
		* 
		*/
	export function setTimeout(callback: Function, timeout: number, ...args: any[]): Timer;

	/**
		* 
		* @brief 清除指定的定时器
		* @param t 指定要清除的定时器
		* 
		* 
		* 
		*/
	export function clearTimeout(t: any): void;

	/**
		* 
		* @brief 每间隔指定的时间后调用函数
		* @param callback 指定回调函数
		* @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		* @param args 额外的参数，传入到指定的 callback 内，可选。
		* @return 返回定时器对象
		* 
		* 
		* 
		*/
	export function setInterval(callback: Function, timeout: number, ...args: any[]): Timer;

	/**
		* 
		* @brief 清除指定的定时器
		* @param t 指定要清除的定时器
		* 
		* 
		* 
		*/
	export function clearInterval(t: any): void;

	/**
		* 
		* @brief 每间隔指定的时间后调用函数，这是个高精度定时器，会主动打断正在运行的 JavaScript 脚本执行定时器
		* 由于 setHrInterval 的定时器会中断正在运行的代码执行回调，因此不要在回调函数内修改可能影响其它模块的数据，或者在回调中调用任何标记为 async 的 api 函数，否则将会产生不可预知的结果。例如：
		* ```JavaScript
		* var timers = require('timers');
		* 
		* var cnt = 0;
		* timers.setHrInterval(() => {
		* cnt++;
		* }, 100);
		* 
		* while (cnt < 10);
		* 
		* console.error("===============================> done");
		* ```
		* 这段代码中，第 8 行的循环并不会因为 cnt 的改变而结束，因为 JavaScript 在优化代码时会认定在这个循环过程中 cnt 不会被改变。
		* @param callback 指定回调函数
		* @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		* @param args 额外的参数，传入到指定的 callback 内，可选。
		* @return 返回定时器对象
		* 
		* 
		* 
		*/
	export function setHrInterval(callback: Function, timeout: number, ...args: any[]): Timer;

	/**
		* 
		* @brief 清除指定的定时器
		* @param t 指定要清除的定时器
		* 
		* 
		* 
		*/
	export function clearHrInterval(t: any): void;

	/**
		* 
		* @brief 下一个空闲时间立即执行回调函数
		* @param callback 指定回调函数
		* @param args 额外的参数，传入到指定的 callback 内，可选。
		* @return 返回定时器对象
		* 
		* 
		* 
		*/
	export function setImmediate(callback: Function, ...args: any[]): Timer;

	/**
		* 
		* @brief 清除指定的定时器
		* @param t 指定要清除的定时器
		* 
		* 
		* 
		*/
	export function clearImmediate(t: any): void;

}

/** } /** endof `module Or Internal Object` */


