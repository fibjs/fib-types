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
	* @brief http 响应消息对象
	* @detail 
	*/
declare class HttpResponse extends HttpMessage {
	
	/**
		* 
		* @brief HttpResponse 构造函数，创建一个新的 HttpResponse 对象
		* 
		* 
		*/
	constructor();

	/**
		* 
		* @brief 设置响应消息的返回状态，返回消息，并添加响应头
		* @param statusCode 指定响应消息的返回状态
		* @param statusMessage 指定响应消息的返回消息
		* @param headers 指定响应消息添加的响应头
		* 
		* 
		* 
		*/
	writeHead(statusCode: number, statusMessage: string, headers?: Object/** = v8::Object::New(isolate)*/): void;

	/**
		* 
		* @brief 向 cookies 添加一个 HttpCookie 对象
		* @param cookie 指定要添加的 HttpCookie 对象
		* 
		* 
		* 
		*/
	addCookie(cookie: HttpCookie): void;

	/**
		* 
		* @brief 发送重定向到客户端
		* @param url 重定向的地址
		* 
		* 
		* 
		*/
	redirect(url: string): void;

	/**
		* 
		* @brief 仅发送格式化 http 头到给定的流对象
		* @param stm 指定接收格式化消息的流对象
		* 
		* 
		* @async
		*/
	sendHeader(stm: Stream): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


