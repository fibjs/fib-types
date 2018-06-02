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
	* @brief dgram 模块提供了 UDP 数据包 socket 的实现
	* @detail 基础模块，引用方式：,```JavaScript,var dgram = require('dgram');,```
	*/
declare module "dgram" {
	
	
	
	/**
		* 
		* @brief 创建一个 dgram.Socket 对象
		* 
		* opts 允许的选项是:
		* ```JavaScript
		* {
		* "type": "udp4" | "udp6",   // 必填
		* "reuseAddr": true | false, //若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
		* "recvBufferSize": ###,     // 设置 SO_RCVBUF 套接字值
		* "sendBufferSize": ###      //设置 SO_RCVBUF 套接字值
		* }
		* ```
		* @param opts
		* @return 返回创建的 Socket 对象
		* 
		* 
		* 
		*/
	export function createSocket(opts: Object): DgramSocket;

}

/** } /** endof `module Or Internal Object` */


