/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />




/** module Or Internal Object */
/**
	* @brief ssl 服务器对象，可方便创建一个标准多纤程 ssl 服务器
	* @detail SslServer 对象是将 TcpServer 和 SslHandler 组合封装的对象，方便快速搭建服务器，逻辑上相当于：,```JavaScript,var svr = new net.SslServer(addr, port, new ssl.Handler(crt, key, function(req){,   ...,}));,```,,创建方法：,```JavaScript,var ssl = require("ssl");,var svr = new http.Server(crt, key, function(req){,    ...,});,```
	*/
/// <reference path="TcpServer.d.ts" />
declare class SslServer_Classbase extends TcpServer_Classbase {
	
	/**
		* 
		* @brief SslServer 构造函数，在所有本机地址侦听
		* 
		* certs 格式为：
		* ```JavaScript
		* [
		* {
		* crt: [X509Cert object],
		* key: [PKey object]
		* },
		* {
		* crt: [X509Cert object],
		* key: [PKey object]
		* }
		* ]
		* ```
		* @param certs 服务器证书列表
		* @param port 指定 ssl 服务器侦听端口
		* @param listener 指定 ssl 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
		* 
		* 
		* 
		*/
	constructor(certs: any[], port: number, listener: Handler_Classbase);

	/**
		* 
		* @brief SslServer 构造函数
		* 
		* certs 格式为：
		* ```JavaScript
		* [
		* {
		* crt: [X509Cert object],
		* key: [PKey object]
		* },
		* {
		* crt: [X509Cert object],
		* key: [PKey object]
		* }
		* ]
		* ```
		* @param certs 服务器证书列表
		* @param addr 指定 ssl 服务器侦听地址，为 "" 则在本机所有地址侦听
		* @param port 指定 ssl 服务器侦听端口
		* @param listener 指定 ssl 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
		* 
		* 
		* 
		*/
	constructor(certs: any[], addr: string, port: number, listener: Handler_Classbase);

	/**
		* 
		* @brief SslServer 构造函数，在所有本机地址侦听
		* @param crt X509Cert 证书，用于客户端验证服务器
		* @param key PKey 私钥，用于与客户端会话
		* @param port 指定 ssl 服务器侦听端口
		* @param listener 指定 ssl 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
		* 
		* 
		* 
		*/
	constructor(crt: X509Cert_Classbase, key: PKey_Classbase, port: number, listener: Handler_Classbase);

	/**
		* 
		* @brief SslServer 构造函数
		* @param crt X509Cert 证书，用于客户端验证服务器
		* @param key PKey 私钥，用于与客户端会话
		* @param addr 指定 ssl 服务器侦听地址，为 "" 则在本机所有地址侦听
		* @param port 指定 ssl 服务器侦听端口
		* @param listener 指定 ssl 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
		* 
		* 
		* 
		*/
	constructor(crt: X509Cert_Classbase, key: PKey_Classbase, addr: string, port: number, listener: Handler_Classbase);

} /** endof class */

/** } /** endof `module Or Internal Object` */


