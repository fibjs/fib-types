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
	* @brief 网络访问模块
	* @detail 基础模块。可用于创建和操作网络资源，引用方式：,```JavaScript,var net = require('net');,```
	*/
declare module "net" {
	
	/**
		* 
		* @brief 地址集常量，指定 ipv4
		* 
		* 
		*/
	export const AF_INET = 2;
	
	/**
		* 
		* @brief 地址集常量，指定 ipv6
		* 
		* 
		*/
	export const AF_INET6 = 10;
	
	/**
		* 
		* @brief 协议族常量，指定 tcp
		* 
		* 
		*/
	export const SOCK_STREAM = 1;
	
	/**
		* 
		* @brief 协议族常量，指定 udp
		* 
		* 
		*/
	export const SOCK_DGRAM = 2;
	
	
	
	/**
		* 
		* @brief 查询当前运行环境网络信息
		* @return 返回网卡信息
		* 
		* 
		* 
		*/
	export function info(): Object;

	/**
		* 
		* @brief 查询给定的主机名的地址
		* @param name 指定主机名
		* @param family 指定查询返回类型，缺省为 AF_INET
		* @return 返回查询的 ip 字符串
		* 
		* 
		* @async
		*/
	export function resolve(name: string, family?: number/** = undefined*/): string;

	/**
		* 
		* @brief 快速查询的主机地址，等效与 resolve(name)
		* @param name 指定主机名
		* @return 返回查询的 ip 字符串
		* 
		* 
		* @async
		*/
	export function ip(name: string): string;

	/**
		* 
		* @brief 快速查询的主机 ipv6 地址，等效与 resolve(name, net.AF_INET6)
		* @param name 指定主机名
		* @return 返回查询的 ipv6 字符串
		* 
		* 
		* @async
		*/
	export function ipv6(name: string): string;

	/**
		* 
		* @brief 创建一个 Socket 或 SslSocket 对象并建立连接
		* @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
		* @param timeout 指定超时时间，单位是毫秒，默认为0
		* @return 返回连接成功的 Socket 或者 SslSocket 对象
		* 
		* 
		* @async
		*/
	export function connect(url: string, timeout?: number/** = 0*/): Stream;

	/**
		* 
		* @brief 创建一个 Smtp 对象并建立连接，参见 Smtp
		* @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
		* @param timeout 指定超时时间，单位是毫秒，默认为0
		* @return 返回连接成功的 Smtp 对象
		* 
		* 
		* @async
		*/
	export function openSmtp(url: string, timeout?: number/** = 0*/): Smtp;

	/**
		* 
		* @brief 查询当前系统异步网络引擎
		* @return 返回网络引擎名称
		* 
		* 
		* 
		*/
	export function backend(): string;

	/**
		* 
		* @brief 检测输入是否是 IP 地址
		* @param ip 指定要检测的字符串
		* @return 非合法的 IP 地址，返回 0, 如果是 IPv4 则返回 4，如果是 IPv6 则返回 6
		* 
		* 
		* 
		*/
	export function isIP(ip?: string/** = ""*/): number;

	/**
		* 
		* @brief 检测输入是否是 IPv4 地址
		* @param ip 指定要检测的字符串
		* @return 如果是 IPv4 则返回 true.否则返回 false
		* 
		* 
		* 
		*/
	export function isIPv4(ip?: string/** = ""*/): boolean;

	/**
		* 
		* @brief 检测输入是否是 IPv6 地址
		* @param ip 指定要检测的字符串
		* @return 如果是 IPv6 则返回 true.否则返回 false
		* 
		* 
		* 
		*/
	export function isIPv6(ip?: string/** = ""*/): boolean;

}

/** } /** endof `module Or Internal Object` */


