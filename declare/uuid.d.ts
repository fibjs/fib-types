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
	* @brief uuid 唯一 id 模块
	* @detail 基础模块。提供唯一 id 的创建于操作,```JavaScript,var uuid = require('uuid');,```
	*/
declare module "uuid" {
	
	/**
		* 
		* @brief md5 与 sha1 创建 uuid 时指定 name 命名为域名
		* 
		* 
		*/
	export const DNS = 0;
	
	/**
		* 
		* @brief md5 与 sha1 创建 uuid 时指定 name 命名为 url 地址
		* 
		* 
		*/
	export const URL = 1;
	
	/**
		* 
		* @brief md5 与 sha1 创建 uuid 时指定 name 命名为 ISO OID
		* 
		* 
		*/
	export const OID = 2;
	
	/**
		* 
		* @brief md5 与 sha1 创建 uuid 时指定 name 命名为 X.500 DN
		* 
		* 
		*/
	export const X509 = 3;
	
	
	
	/**
		* 
		* @brief 使用时间和主机名创建 uuid
		* @return 返回一个生成的二进制 id
		* 
		* 
		* 
		*/
	export function node(): Buffer;

	/**
		* 
		* @brief 使用特定命名的 md5 创建 uuid
		* @param ns 指定命名空间，可以为 uuid.DNS, uuid.URL, uuid.OID, uuid.X509
		* @param name 指定名称
		* @return 返回一个生成的二进制 id
		* 
		* 
		* 
		*/
	export function md5(ns: number, name: string): Buffer;

	/**
		* 
		* @brief 使用随机数创建 uuid
		* @return 返回一个生成的二进制 id
		* 
		* 
		* 
		*/
	export function random(): Buffer;

	/**
		* 
		* @brief 使用特定命名的 sha1 创建 uuid
		* @param ns 指定命名空间，可以为 uuid.DNS, uuid.URL, uuid.OID, uuid.X509
		* @param name 指定名称
		* @return 返回一个生成的二进制 id
		* 
		* 
		* 
		*/
	export function sha1(ns: number, name: string): Buffer;

	/**
		* 
		* @brief 使用 Snowflake 算法创建 uuid
		* @return 返回一个生成的二进制 id
		* 
		* 
		* 
		*/
	export function snowflake(): Buffer;

}

/** } /** endof `module Or Internal Object` */


