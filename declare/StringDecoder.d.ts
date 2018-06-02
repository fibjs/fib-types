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
	* @brief 流解码对象
	* @detail 
	*/
declare class StringDecoder extends _object {
	
	/**
		* 
		* @brief 解码器构造函数
		* @param encoding 解码编码. 默认 'utf8'.
		* 
		* 
		* 
		*/
	constructor(encoding?: string/** = "utf8"*/);

	/**
		* 
		* @brief 将内部存留的 buffer 作为字符返回。不完整的 UTF-8 和 UTF-16 字节会尝试补全。
		* @return 解码后的字符串.
		* 
		* 
		* 
		*/
	end(): string;

	/**
		* 
		* @brief 返回一个解码后的字符串, 确保任何非完整的末尾字符被省略此次不返回，并被存储在内部供下一次的 write 或者 end 方法使用。
		* @param  buf 需要解码的 Buffer。
		* @return 解码后的字符串.
		* 
		* 
		* 
		*/
	write(buf: Buffer): string;

	/**
		* 
		* @brief 内部使用。.
		* @param buf 需要解码的 Buffer。
		* @param offset 解码偏移量
		* @return 解码后的字符串.
		* 
		* 
		* 
		*/
	text(buf: Buffer, offset: number): string;

	/**
		* 
		* @brief 内部使用。.
		* @param buf A Buffer containing the bytes to decode.
		* @return 解码后的字符串.
		* 
		* 
		* 
		*/
	fillLast(buf: Buffer): string;

} /** endof class */

/** } /** endof `module Or Internal Object` */


