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



/// <reference path="net.d.ts" />

/** module Or Internal Object */
/**
	* @brief 网络套接口对象
	* @detail Socket 属于 net 模块，创建方法,```JavaScript,var s = new net.Socket();,```
	*/
declare class Socket extends Stream {
	
	/**
		* 
		* @brief Socket 构造函数，创建一个新的 Socket 对象
		* @param family 指定地址集，缺省为 AF_INET，ipv4
		* @param type 指定协议族，缺省为 SOCK_STREAM，tcp
		* 
		* 
		* 
		*/
	constructor(family?: number/** = undefined*/, type?: number/** = undefined*/);

	/**
		* 
		* @brief 建立一个 tcp 连接
		* @param host 指定对方地址或主机名
		* @param port 指定对方端口
		* 
		* 
		* @async
		*/
	connect(host: string, port: number): void;

	/**
		* 
		* @brief 将当前 Socket 绑定至本地所有地址的指定端口
		* @param port 指定绑定的端口
		* @param allowIPv4 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统
		* 
		* 
		* 
		*/
	bind(port: number, allowIPv4?: boolean/** = true*/): void;

	/**
		* 
		* @brief 开始监听连接请求
		* @param backlog 指定请求队列长度，超出的请求将被拒绝，缺省为 120
		* 
		* 
		* 
		*/
	listen(backlog?: number/** = 120*/): void;

	/**
		* 
		* @brief 等待并接受一个连接
		* @return 返回接收到得连接对象
		* 
		* 
		* @async
		*/
	accept(): Socket;

	/**
		* 
		* @brief 从连接读取指定大小的数据，不同于 read 方法，recv 并不保证读完要求的数据，而是在读取到数据后立即返回
		* @param bytes 指定要读取的数据量，缺省读取任意尺寸的数据
		* @return 返回从连接读取的数据
		* 
		* 
		* @async
		*/
	recv(bytes?: number/** = -1*/): Buffer;

	/**
		* 
		* @brief 读取一个 UDP 包
		* recvfrom 返回结果中包含以下内容：
		* - data: 接收到的二进制数据块
		* - address: 发送方的地址
		* - port: 发送方的端口
		* @param bytes 指定要读取的数据量，缺省读取任意尺寸的数据
		* @return 返回从连接读取的数据包
		* 
		* 
		* @async
		*/
	recvfrom(bytes?: number/** = -1*/): any;

	/**
		* 
		* @brief 将给定的数据写入连接，此方法等效于 write 方法
		* @param data 给定要写入的数据
		* 
		* 
		* @async
		*/
	send(data: Buffer): void;

	/**
		* 
		* @brief 向给定 ip:port 发送一个 UDP 包
		* @param data 给定要写入的数据
		* @param host 指定目标 ip 或主机名
		* @param port 指定目标端口
		* 
		* 
		* @async
		*/
	sendto(data: Buffer, host: string, port: number): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


