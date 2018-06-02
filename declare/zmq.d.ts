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
	* @brief zeroMQ 消息队列模块
	* @detail 基础模块。提供 zeroMQ 消息队列支撑。,```JavaScript,var zmq = require('zmq');,```
	*/
declare module "zmq" {
	
	/**
		* 
		* 
		* 
		* 
		*/
	export const PAIR = 0;
	
	/**
		* 
		* @brief 发布类型，所发送的消息将会分发给所有订阅者。
		* 
		* 
		*/
	export const PUB = 1;
	
	/**
		* 
		* @brief 订阅类型，用于接收 PUB 分发的消息。
		* 
		* 
		*/
	export const SUB = 2;
	
	/**
		* 
		* @brief 请求类型，此类型的接口只允许交替进行 send 和 recv 消息，每一个接受的消息都是最后一次发送请求的响应。
		* 
		* 
		*/
	export const REQ = 3;
	
	/**
		* 
		* @brief 响应类型，此类型的接口只允许交替进行 recv 和 send 消息，每一个发送的消息都会作为最后一次接受的请求的回应。
		* 
		* 
		*/
	export const REP = 4;
	
	/**
		* 
		* 
		* 
		* 
		*/
	export const DEALER = 5;
	
	/**
		* 
		* 
		* 
		* 
		*/
	export const ROUTER = 6;
	
	/**
		* 
		* @brief 获取消息类型，上游推送的消息将被公平的分发到此类接口。
		* 
		* 
		*/
	export const PULL = 7;
	
	/**
		* 
		* @brief 推送类型，推送的消息将均衡发送到下游接口。
		* 
		* 
		*/
	export const PUSH = 8;
	
	/**
		* 
		* 
		* 
		* 
		*/
	export const XPUB = 9;
	
	/**
		* 
		* 
		* 
		* 
		*/
	export const XSUB = 10;
	
	
	
}

/** } /** endof `module Or Internal Object` */


