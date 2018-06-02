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
	* @brief http客户端对象
	* @detail http客户端对象模拟浏览器环境缓存cookie，并在访问url的时候携带对应的cookie，不同的http客户端对象是相互隔离的，提供http的request、get、post等方法。,用法如下：,,```JavaScript,var http = require('http');,var httpClient = new http.Client();,httpClient.request('GET', 'http://fibjs.org');,```
	*/
declare class HttpClient extends _object {
	
	/**
		* 
		* @brief HttpClient 构造函数，创建一个新的HttpClient对象
		* 
		* 
		*/
	constructor();

	/**
		* 
		* @brief 发送 http 请求到指定的流对象，并返回结果
		* @param conn 指定处理请求的流对象
		* @param req 要发送的 HttpRequest 对象
		* @return 返回服务器响应
		* 
		* 
		* @async
		*/
	request(conn: Stream, req: HttpRequest): HttpResponse;

	/**
		* 
		* @brief 用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)
		* opts 包含请求的附加选项，支持的内容如下：
		* ```JavaScript
		* {
		* "query": {},
		* "body": SeekedStream | Buffer | String | {},
		* "json": {},
		* "headers": {}
		* }
		* ```
		* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		* @param url 指定 url，必须是包含主机的完整 url
		* @param opts 指定附加信息
		* @return 返回服务器响应
		* 
		* 
		* @async
		*/
	get(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

	/**
		* 
		* @brief 用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)
		* opts 包含请求的附加选项，支持的内容如下：
		* ```JavaScript
		* {
		* "query": {},
		* "body": SeekedStream | Buffer | String | {},
		* "json": {},
		* "headers": {}
		* }
		* ```
		* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		* @param url 指定 url，必须是包含主机的完整 url
		* @param opts 指定附加信息
		* @return 返回服务器响应
		* 
		* 
		* @async
		*/
	post(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

	/**
		* 
		* @brief 用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)
		* opts 包含请求的附加选项，支持的内容如下：
		* ```JavaScript
		* {
		* "query": {},
		* "body": SeekedStream | Buffer | String | {},
		* "json": {},
		* "headers": {}
		* }
		* ```
		* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		* @param url 指定 url，必须是包含主机的完整 url
		* @param opts 指定附加信息
		* @return 返回服务器响应
		* 
		* 
		* @async
		*/
	del(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

	/**
		* 
		* @brief 用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)
		* opts 包含请求的附加选项，支持的内容如下：
		* ```JavaScript
		* {
		* "query": {},
		* "body": SeekedStream | Buffer | String | {},
		* "json": {},
		* "headers": {}
		* }
		* ```
		* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		* @param url 指定 url，必须是包含主机的完整 url
		* @param opts 指定附加信息
		* @return 返回服务器响应
		* 
		* 
		* @async
		*/
	put(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

	/**
		* 
		* @brief 用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)
		* opts 包含请求的附加选项，支持的内容如下：
		* ```JavaScript
		* {
		* "query": {},
		* "body": SeekedStream | Buffer | String | {},
		* "json": {},
		* "headers": {}
		* }
		* ```
		* 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		* @param url 指定 url，必须是包含主机的完整 url
		* @param opts 指定附加信息
		* @return 返回服务器响应
		* 
		* 
		* @async
		*/
	patch(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

} /** endof class */

/** } /** endof `module Or Internal Object` */


