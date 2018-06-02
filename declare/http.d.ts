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
	* @brief 超文本传输协议模块，用以支持 http 协议处理
	* @detail 
	*/
declare module "http" {
	
	
	
	/**
		* 
		* @brief 创建一个 http 静态文件处理器，用以用静态文件响应 http 消息
		* 
		* fileHandler 支持 gzip 预压缩，当请求接受 gzip 编码，且相同路径下 filename.ext.gz 文件存在时，将直接返回此文件，
		* 从而避免重复压缩带来服务器负载。
		* @param root 文件根路径
		* @param mimes 扩展 mime 设置
		* @param autoIndex 是否支持浏览目录文件，缺省为 false，不支持
		* @return 返回一个静态文件处理器用于处理 http 消息
		* 
		* 
		* 
		*/
	export function fileHandler(root: string, mimes?: Object/** = v8::Object::New(isolate)*/, autoIndex?: boolean/** = false*/): Handler;

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
	export function request(conn: Stream, req: HttpRequest): HttpResponse;

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
	export function get(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

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
	export function post(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

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
	export function del(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

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
	export function put(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

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
	export function patch(url: string, opts?: Object/** = v8::Object::New(isolate)*/): HttpResponse;

}

/** } /** endof `module Or Internal Object` */


