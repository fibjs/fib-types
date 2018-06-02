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
	* @brief dns 域名查询模块
	* @detail 基础模块，引用方式：,```JavaScript,var dns = require('dns');,```
	*/
declare module "dns" {
	
	
	
	/**
		* 
		* @brief 查询给定的主机名的地址
		* @param name 指定主机名
		* @return 返回查询的 ip 字符串数组
		* 
		* 
		* @async
		*/
	export function resolve(name: string): any[];

	/**
		* 
		* @brief 查询给定的主机名的地址
		* @param name 指定主机名
		* @return 返回查询的 ip 字符串
		* 
		* 
		* @async
		*/
	export function lookup(name: string): string;

}

/** } /** endof `module Or Internal Object` */


