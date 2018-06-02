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
	* @brief 消息处理器接口
	* @detail 
	*/
declare class Handler extends _object {
	
	/**
		* 
		* @brief 构造一个消息处理器链处理对象
		* @param hdlrs 处理器数组
		* 
		* 
		* 
		*/
	constructor(hdlrs: any[]);

	/**
		* 
		* @brief 处理一个消息或对象
		* @param v 指定处理的消息或对象
		* @return 返回下一步的处理器
		* 
		* 
		* @async
		*/
	invoke(v: object): Handler;

} /** endof class */

/** } /** endof `module Or Internal Object` */


