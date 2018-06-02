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
	* @brief 基础消息对象
	* @detail Message 对象兼容于 mq 各个模块，可用于构建自定义消息处理系统，创建方法：,```JavaScript,var mq = require("mq");,var m = new mq.Message();,```
	*/
declare class Message extends _object {
	
	/**
		* 
		* @brief 消息对象构造函数
		* 
		* 
		*/
	constructor();

	/**
		* 
		* @brief 从流内读取指定大小的数据，此方法为 body 相应方法的别名
		* @param bytes 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备
		* @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
		* 
		* 
		* @async
		*/
	read(bytes?: number/** = -1*/): Buffer;

	/**
		* 
		* @brief 从流内读取剩余的全部数据，此方法为 body 相应方法的别名
		* @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
		* 
		* 
		* @async
		*/
	readAll(): Buffer;

	/**
		* 
		* @brief 写入给定的数据，此方法为 body 相应方法的别名
		* @param data 给定要写入的数据
		* 
		* 
		* @async
		*/
	write(data: Buffer): void;

	/**
		* 
		* @brief 以 JSON 编码写入给定的数据
		* @param data 给定要写入的数据
		* @return 此方法不会返回数据
		* 
		* 
		* 
		*/
	json(data: any): any;

	/**
		* 
		* @brief 设置当前消息处理结束，Chain 处理器不再继续后面的事务
		* 
		* 
		*/
	end(): void;

	/**
		* 
		* @brief 查询当前消息是否结束
		* @return 结束则返回 true
		* 
		* 
		* 
		*/
	isEnded(): boolean;

	/**
		* 
		* @brief 清除消息的内容
		* 
		* 
		*/
	clear(): void;

	/**
		* 
		* @brief 发送格式化消息到给定的流对象
		* @param stm 指定接收格式化消息的流对象
		* 
		* 
		* @async
		*/
	sendTo(stm: Stream): void;

	/**
		* 
		* @brief 从给定的缓存流对象中读取格式化消息，并解析填充对象
		* @param stm 指定读取格式化消息的流对象
		* 
		* 
		* @async
		*/
	readFrom(stm: Stream): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


