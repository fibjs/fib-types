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
	* @brief 并发控制模块
	* @detail 引用方法：,```JavaScript,var coroutine = require('coroutine');,```
	*/
declare module "coroutine" {
	
	
	
	/**
		* 
		* @brief 启动一个纤程并返回纤程对象
		* @param func 制定纤程执行的函数
		* @param args 可变参数序列，此序列会在纤程内传递给函数
		* @return 返回纤程对象
		* 
		* 
		* 
		*/
	export function start(func: Function, ...args: any[]): Fiber;

	/**
		* 
		* @brief 并行执行一组函数，并等待返回
		* @param funcs 并行执行的函数数组
		* @param fibers 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
		* @return 返回函数执行结果的数组
		* 
		* 
		* 
		*/
	export function parallel(funcs: any[], fibers?: number/** = -1*/): any[];

	/**
		* 
		* @brief 返回当前纤程
		* @return 当前纤程对象
		* 
		* 
		* 
		*/
	export function current(): Fiber;

	/**
		* 
		* @brief 暂停当前纤程指定的时间
		* @param ms 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行
		* 
		* 
		* @async
		*/
	export function sleep(ms?: number/** = 0*/): void;

}

/** } /** endof `module Or Internal Object` */


