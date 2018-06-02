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
	* @brief ssl 网络套接口对象
	* @detail SslSocket 属于 ssl 模块，创建方法,```JavaScript,var s = new ssl.Socket();,```
	*/
declare class SslSocket extends Stream {
	
	/**
		* 
		* @brief SslSocket 构造函数，创建一个新的 SslSocket 对象
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
		* 
		* 
		* 
		*/
	constructor(certs?: any[]/** = v8::Array::New(isolate)*/);

	/**
		* 
		* @brief 在给定的连接上连接 ssl 连接，客户端模式
		* @param s 给定的底层连接
		* @param server_name 指定服务器名称，可缺省
		* @return 连接成功返回 0，证书可选验证时，验证不成功则返回非 0，详细错误见 ssl 模块
		* 
		* 
		* @async
		*/
	connect(s: Stream, server_name?: string/** = ""*/): number;

	/**
		* 
		* @brief 在给定的连接上接收一个 ssl 连接，并生成一个新的 SslSocket
		* @param s 给定的底层连接
		* @return 返回新建立的 SslSocket 对象
		* 
		* 
		* @async
		*/
	accept(s: Stream): SslSocket;

} /** endof class */

/** } /** endof `module Or Internal Object` */


