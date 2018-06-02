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
	* @brief json 编码与解码模块
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,var json = encoding.json;,```,或者,```JavaScript,var json = require('json');,```
	*/
declare module "json" {
	
	
	
	/**
		* 
		* @brief 以 json 格式编码变量
		* @param data 要编码的变量
		* @return 返回编码的字符串
		* 
		* 
		* 
		*/
	export function encode(data: any): string;

	/**
		* 
		* @brief 以 json 方式解码字符串为一个变量
		* @param data 要解码的字符串
		* @return 返回解码的变量
		* 
		* 
		* 
		*/
	export function decode(data: string): any;

}

/** } /** endof `module Or Internal Object` */


