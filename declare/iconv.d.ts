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
	* @brief iconv 编码与解码模块
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,var iconv = encoding.iconv;,```,或者,```JavaScript,var iconv = require('iconv');,```
	*/
declare module "iconv" {
	
	
	
	/**
		* 
		* @brief 用 iconv 将文本转换为二进制数据
		* @param charset 指定字符集
		* @param data 要转换的文本
		* @return 返回解码的二进制数据
		* 
		* 
		* 
		*/
	export function encode(charset: string, data: string): Buffer;

	/**
		* 
		* @brief 用 iconv 将 Buffer 内容转换为文本
		* @param charset 指定字符集
		* @param data 要转换的二进制数据
		* @return 返回编码的字符串
		* 
		* 
		* 
		*/
	export function decode(charset: string, data: Buffer): string;

	/**
		* 
		* @brief 检测字符集是否被支持
		* @param charset 指定字符集
		* @return 返回是否支持该字符集
		* 
		* 
		* 
		*/
	export function isEncoding(charset: string): boolean;

}

/** } /** endof `module Or Internal Object` */


