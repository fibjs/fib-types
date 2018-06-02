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
	* @brief 消息队列模块
	* @detail 
	*/
declare module "mq" {
	
	
	
	/**
		* 
		* @brief 创建一个空处理器对象，次处理对象不做任何处理直接返回
		* @return 返回空处理函数
		* 
		* 
		* 
		*/
	export function nullHandler(): Handler;

	/**
		* 
		* @brief 使用给定的处理器处理一个消息或对象
		* 
		* 不同于处理器的 invoke 方法，此方法将循环调用每个处理器的返回处理器，直到处理器返回 null 为止。
		* @param hdlr 指定使用的处理器
		* @param v 指定要处理的消息或对象
		* 
		* 
		* @async
		*/
	export function invoke(hdlr: Handler, v: object): void;

}

/** } /** endof `module Or Internal Object` */


