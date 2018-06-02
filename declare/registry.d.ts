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
	* @brief Windows 注册表访问模块
	* @detail 引用方式：,```JavaScript,var registry = require('registry');,var value = registry.get(registry.CLASSES_ROOT, "\node1\node2\value");,```
	*/
declare module "registry" {
	
	/**
		* 
		* @brief 注册表根，存储Windows可识别的文件类型的详细列表，以及相关联的程序
		* 
		* 
		*/
	export const CLASSES_ROOT = 0;
	
	/**
		* 
		* @brief 注册表根，存储当前用户设置的信息
		* 
		* 
		*/
	export const CURRENT_USER = 1;
	
	/**
		* 
		* @brief 注册表根，包括安装在计算机上的硬件和软件的信息
		* 
		* 
		*/
	export const LOCAL_MACHINE = 2;
	
	/**
		* 
		* @brief 注册表根，包含使用计算机的用户的信息
		* 
		* 
		*/
	export const USERS = 3;
	
	/**
		* 
		* @brief 注册表根，这个分支包含计算机当前的硬件配置信息
		* 
		* 
		*/
	export const CURRENT_CONFIG = 5;
	
	/**
		* 
		* @brief 注册表数据类型，字符串
		* 
		* 
		*/
	export const SZ = 1;
	
	/**
		* 
		* @brief 注册表数据类型，扩展字符串
		* 
		* 
		*/
	export const EXPAND_SZ = 2;
	
	/**
		* 
		* @brief 注册表数据类型，32 位数值
		* 
		* 
		*/
	export const DWORD = 4;
	
	/**
		* 
		* @brief 注册表数据类型，64 位数值
		* 
		* 
		*/
	export const QWORD = 11;
	
	
	
	/**
		* 
		* @brief 返回指定键值下的所有子健
		* @param root 指定注册表根
		* @param key 指定键值
		* @return 返回该键值下所有子健
		* 
		* 
		* 
		*/
	export function listSubKey(root: number, key: string): any[];

	/**
		* 
		* @brief 返回指定键值下的所有数据的健
		* @param root 指定注册表根
		* @param key 指定键值
		* @return 返回该键值下所有数据的健
		* 
		* 
		* 
		*/
	export function listValue(root: number, key: string): any[];

	/**
		* 
		* @brief 查询指定键值的数值
		* @param root 指定注册表根
		* @param key 指定键值
		* @return 返回指定键值的数值
		* 
		* 
		* 
		*/
	export function get(root: number, key: string): any;

	/**
		* 
		* @brief 设置指定键值为数字
		* @param root 指定注册表根
		* @param key 指定键值
		* @param value 指定数字
		* @param type 指定类型，允许的类型为 DWORD 和 QWORD，缺省为 DWORD
		* 
		* 
		* 
		*/
	export function set(root: number, key: string, value: number, type?: number/** = undefined*/): void;

	/**
		* 
		* @brief 删除指定键值的数值
		* @param root 指定注册表根
		* @param key 指定键值
		* 
		* 
		* 
		*/
	export function del(root: number, key: string): void;

}

/** } /** endof `module Or Internal Object` */


