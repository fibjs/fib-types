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
	* @brief bson 编码与解码模块
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,var bson = encoding.bson;,```,或者,```JavaScript,var bson = require('bson');,```
	*/
declare module "bson" {
	
	
	
	/**
		* 
		* @brief 以 bson 格式编码变量
		* @param data 要编码的变量
		* @return 返回编码的二进制数据
		* 
		* 
		* 
		*/
	export function encode(data: Object): Buffer;

	/**
		* 
		* @brief 以 bson 方式解码字符串为一个变量
		* @param data 要解码的二进制数据
		* @return 返回解码的变量
		* 
		* 
		* 
		*/
	export function decode(data: Buffer): Object;

}

/** } /** endof `module Or Internal Object` */


