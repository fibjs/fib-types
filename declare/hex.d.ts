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
	* @brief hex 编码与解码模块
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,var hex = encoding.hex;,```,或者,```JavaScript,var hex = require('hex');,```
	*/
declare module "hex" {
	
	
	
	/**
		* 
		* @brief 以 hex 方式编码数据
		* @param data 要编码的数据
		* @return 返回编码的字符串
		* 
		* 
		* 
		*/
	export function encode(data: Buffer): string;

	/**
		* 
		* @brief 以 hex 方式解码字符串为二进制数据
		* @param data 要解码的字符串
		* @return 返回解码的二进制数据
		* 
		* 
		* 
		*/
	export function decode(data: string): Buffer;

}

/** } /** endof `module Or Internal Object` */


