/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
	* @brief 定时器处理器对象
	* @detail 
	*/

declare class Timer_Classbase extends _object_Classbase {
	
	/**
		* 
		* @brief 维持 fibjs 进程不退出，在定时器等待期间阻止 fibjs 进程退出
		* @return 返回定时器对象
		* 
		* 
		* 
		*/
	ref(): Timer_Classbase;

	/**
		* 
		* @brief 允许 fibjs 进程退出，在定时器等待期间允许 fibjs 进程退出
		* @return 返回定时器对象
		* 
		* 
		* 
		*/
	unref(): Timer_Classbase;

	/**
		* 
		* @brief 取消当前定时器
		* 
		* 
		*/
	clear(): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


