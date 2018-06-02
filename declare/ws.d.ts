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
	* @brief websocket 支持模块
	* @detail 使用方法：,```JavaScript,var ws = require('ws');,```,创建一个服务器：,```JavaScript,var ws = require('ws');,var http = require('http');,,var svr = new http.Server(80, {,    '/ws': ws.upgrade((conn, req) => {,        conn.onmessage = e => console.log(e.data);,    }),});,svr.run();,```,使用 WebSocket 客户端：,```JavaScript,var ws = require('ws');,,var conn = new ws.Socket('ws://127.0.0.1/ws');,conn.ommessage = e => console.log(e.data);,```
	*/
declare module "ws" {
	
	/**
		* 
		* @brief 指定 websocket 消息类型 0，代表一个继续帧
		* 
		* 
		*/
	export const CONTINUE = 0;
	
	/**
		* 
		* @brief 指定 websocket 消息类型 1，代表一个文本帧
		* 
		* 
		*/
	export const TEXT = 1;
	
	/**
		* 
		* @brief 指定 websocket 消息类型 2，代表一个二进制帧
		* 
		* 
		*/
	export const BINARY = 2;
	
	/**
		* 
		* @brief 指定 websocket 消息类型 8，连接关闭
		* 
		* 
		*/
	export const CLOSE = 8;
	
	/**
		* 
		* @brief 指定 websocket 消息类型 9，代表一个 ping 帧
		* 
		* 
		*/
	export const PING = 9;
	
	/**
		* 
		* @brief 指定 websocket 消息类型 10，代表一个 pong 帧
		* 
		* 
		*/
	export const PONG = 10;
	
	/**
		* 
		* @brief 指定 WebSocket 状态，表示正在连接中
		* 
		* 
		*/
	export const CONNECTING = 0;
	
	/**
		* 
		* @brief 指定 WebSocket 状态，表示打开状态
		* 
		* 
		*/
	export const OPEN = 1;
	
	/**
		* 
		* @brief 指定 WebSocket 状态，表示已发送 CLOSE 消息，等待关闭中
		* 
		* 
		*/
	export const CLOSING = 2;
	
	/**
		* 
		* @brief 指定 WebSocket 状态，表示已经关闭
		* 
		* 
		*/
	export const CLOSED = 3;
	
	
	
	/**
		* 
		* @brief 创建一个 websocket 协议处理器，从 http 接收 upgrade 请求并握手，生成 WebSocket 对象
		* accept 函数调用时，将传递两个参数，第一个参数为接收到的 WebSocket 对象，第二个参数为握手时的 HttpRequest 对象。
		* @param accept 连接成功处理函数
		* @return 返回协议处理器，可与 HttpServer, Chain, Routing 等对接
		* 
		* 
		* 
		*/
	export function upgrade(accept: Function): Handler;

}

/** } /** endof `module Or Internal Object` */


