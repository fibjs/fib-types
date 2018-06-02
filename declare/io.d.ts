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
	* @brief 输入输出处理模块
	* @detail 使用方法：,```JavaScript,var io = require('io');,```
	*/
declare module "io" {
	
	
	
	/**
		* 
		* @brief 复制流数据到目标流中
		* @param from 源流对象
		* @param to 目标流对象
		* @param bytes 复制的字节数
		* @return 返回复制的字节数
		* 
		* 
		* @async
		*/
	export function copyStream(from: Stream, to: Stream, bytes?: number/** = -1*/): number;

	/**
		* 
		* @brief 双向复制流数据，直到流中无数据，或者流被关闭
		* @param stm1 流对象一
		* @param stm2 流对象二
		* 
		* 
		* @async
		*/
	export function bridge(stm1: Stream, stm2: Stream): void;

}

/** } /** endof `module Or Internal Object` */


