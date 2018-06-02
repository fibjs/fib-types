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
	* @brief base64 编码与解码模块
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,var base64 = encoding.base64;,```,或者,```JavaScript,var base64 = require('base64');,```
	*/
declare module "base64" {
	
	
	
	/**
		* 
		* @brief 以 base64 方式编码数据
		* @param data 要编码的数据
		* @param url 指定是否使用 url 安全字符编码
		* @return 返回编码的字符串
		* 
		* 
		* 
		*/
	export function encode(data: Buffer, url?: boolean/** = false*/): string;

	/**
		* 
		* @brief 以 base64 方式解码字符串为二进制数据
		* @param data 要解码的字符串
		* @return 返回解码的二进制数据
		* 
		* 
		* 
		*/
	export function decode(data: string): Buffer;

}

/** } /** endof `module Or Internal Object` */


