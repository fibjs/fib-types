/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */




/// <reference path="base32.d.ts" />

/// <reference path="base64.d.ts" />

/// <reference path="base64vlq.d.ts" />

/// <reference path="hex.d.ts" />

/// <reference path="iconv.d.ts" />

/// <reference path="json.d.ts" />

/// <reference path="bson.d.ts" />

/** module Or Internal Object */
/**
	* @brief 编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,```
	*/
declare module "encoding" {
	
	
	
	/**
		* 
		* @brief 将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本
		* @param str 要编码的字符串
		* @param json 是否生成json兼容字符串
		* @return 返回编码的字符串
		* 
		* 
		* 
		*/
	export function jsstr(str: string, json?: boolean/** = false*/): string;

	/**
		* 
		* @brief url 字符串安全编码
		* @param url 要编码的 url
		* @return 返回编码的字符串
		* 
		* 
		* 
		*/
	export function encodeURI(url: string): string;

	/**
		* 
		* @brief url 部件字符串安全编码
		* @param url 要编码的 url
		* @return 返回编码的字符串
		* 
		* 
		* 
		*/
	export function encodeURIComponent(url: string): string;

	/**
		* 
		* @brief url 安全字符串解码
		* @param url 要解码的 url
		* @return 返回解码的字符串
		* 
		* 
		* 
		*/
	export function decodeURI(url: string): string;

}

/** } /** endof `module Or Internal Object` */


