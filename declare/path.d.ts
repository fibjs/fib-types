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
	* @brief 文件路径处理模块
	* @detail 引用方法：,```JavaScript,var path = require('path');,```
	*/
declare module "path" {
	
	
	
	/**
		* 
		* @brief 标准化路径，处理路径中父目录等信息
		* 
		* @param path 给定的未处理的路径
		* @return 返回经过处理的路径
		* 
		* 
		* 
		*/
	export function normalize(path: string): string;

	/**
		* 
		* @brief 查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名
		* 
		* @param path 给定查询的路径
		* @param ext 指定扩展名，若文件名中有符合条件的扩展名，将自动取消
		* @return 返回文件名称
		* 
		* 
		* 
		*/
	export function basename(path: string, ext?: string/** = ""*/): string;

	/**
		* 
		* @brief 查询路径中的文件扩展名
		* 
		* @param path 给定查询的路径
		* @return 返回得到的扩展名
		* 
		* 
		* 
		*/
	export function extname(path: string): string;

	/**
		* 
		* @brief 查询路径中的目录路径
		* 
		* @param path 给定查询的路径
		* @return 返回得到的目录的路径
		* 
		* 
		* 
		*/
	export function dirname(path: string): string;

	/**
		* 
		* @brief 转换给定路径为全路径
		* 
		* @param path 给定转换的路径
		* @return 返回转换的全路径
		* 
		* 
		* 
		*/
	export function fullpath(path: string): string;

	/**
		* 
		* @brief 识别给定的路径是否是绝对路径
		* 
		* @param path 给定需要识别的路径
		* @return 是绝对路径则返回 true
		* 
		* 
		* 
		*/
	export function isAbsolute(path: string): boolean;

	/**
		* 
		* @brief 合并一系列路径成为一个单一路径
		* 
		* @param ps 一个或多个相关的路径
		* @return 返回得到的新路径
		* 
		* 
		* 
		*/
	export function join(...ps: any[]): string;

	/**
		* 
		* @brief 合并一系列路径成为一个绝对路径
		* 
		* @param ps 一个或多个相关的路径
		* @return 返回得到的新路径
		* 
		* 
		* 
		*/
	export function resolve(...ps: any[]): string;

	/**
		* 
		* @brief 转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。
		* see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
		* @param path 给定的路径。
		* @return 返回得到的新路径
		* 
		* 
		* 
		*/
	export function toNamespacedPath(path?: any/** = v8::Undefined(isolate)*/): any;

}

/** } /** endof `module Or Internal Object` */


