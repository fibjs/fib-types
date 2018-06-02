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
	* @brief zlib 压缩解压模块
	* @detail 使用方法：,```JavaScript,var zlib = require('zlib');,```
	*/
declare module "zlib" {
	
	/**
		* 
		* @brief deflate 压缩级别，设定不压缩
		* 
		* 
		*/
	export const NO_COMPRESSION = 0;
	
	/**
		* 
		* @brief deflate 压缩级别，设定最快压缩
		* 
		* 
		*/
	export const BEST_SPEED = 1;
	
	/**
		* 
		* @brief deflate 压缩级别，设定最高压缩
		* 
		* 
		*/
	export const BEST_COMPRESSION = 9;
	
	/**
		* 
		* @brief deflate 压缩级别，设定缺省设置
		* 
		* 
		*/
	export const DEFAULT_COMPRESSION = -1;
	
	
	
	/**
		* 
		* @brief 创建一个 deflate 流对象
		* @param to 用于存储处理结果的流
		* @return 返回封装过的流对象
		* 
		* 
		*/
	export function createDeflate(to: Stream): Stream;

	/**
		* 
		* @brief 创建一个 deflateRaw 流对象
		* @param to 用于存储处理结果的流
		* @return 返回封装过的流对象
		* 
		* 
		*/
	export function createDeflateRaw(to: Stream): Stream;

	/**
		* 
		* @brief 创建一个 gunzip 流对象
		* @param to 用于存储处理结果的流
		* @return 返回封装过的流对象
		* 
		* 
		*/
	export function createGunzip(to: Stream): Stream;

	/**
		* 
		* @brief 创建一个 gzip 流对象
		* @param to 用于存储处理结果的流
		* @return 返回封装过的流对象
		* 
		* 
		*/
	export function createGzip(to: Stream): Stream;

	/**
		* 
		* @brief 创建一个 inflate 流对象
		* @param to 用于存储处理结果的流
		* @return 返回封装过的流对象
		* 
		* 
		*/
	export function createInflate(to: Stream): Stream;

	/**
		* 
		* @brief 创建一个 inflateRaw 流对象
		* @param to 用于存储处理结果的流
		* @return 返回封装过的流对象
		* 
		* 
		*/
	export function createInflateRaw(to: Stream): Stream;

	/**
		* 
		* @brief 使用 deflate 算法压缩数据(zlib格式)
		* @param data 给定要压缩的数据
		* @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		* @return 返回压缩后的二进制数据
		* 
		* 
		* @async
		*/
	export function deflate(data: Buffer, level?: number/** = undefined*/): Buffer;

	/**
		* 
		* @brief 使用 deflate 算法压缩数据到流对象中(zlib格式)
		* @param data 给定要压缩的数据
		* @param stm 指定存储压缩数据的流
		* @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		* 
		* 
		* @async
		*/
	export function deflateTo(data: Buffer, stm: Stream, level?: number/** = undefined*/): void;

	/**
		* 
		* @brief 解压缩 deflate 算法压缩的数据(zlib格式)
		* @param data 给定压缩后的数据
		* @return 返回解压缩后的二进制数据
		* 
		* 
		* @async
		*/
	export function inflate(data: Buffer): Buffer;

	/**
		* 
		* @brief 解压缩 deflate 算法压缩的数据到流对象中(zlib格式)
		* @param data 给定要解压缩的数据
		* @param stm 指定存储解压缩数据的流
		* 
		* 
		* @async
		*/
	export function inflateTo(data: Buffer, stm: Stream): void;

	/**
		* 
		* @brief 使用 gzip 算法压缩数据
		* @param data 给定要压缩的数据
		* @return 返回压缩后的二进制数据
		* 
		* 
		* @async
		*/
	export function gzip(data: Buffer): Buffer;

	/**
		* 
		* @brief 使用 gzip 算法压缩数据到流对象中
		* @param data 给定要压缩的数据
		* @param stm 指定存储压缩数据的流
		* 
		* 
		* @async
		*/
	export function gzipTo(data: Buffer, stm: Stream): void;

	/**
		* 
		* @brief 解压缩 gzip 算法压缩的数据
		* @param data 给定压缩后的数据
		* @return 返回解压缩后的二进制数据
		* 
		* 
		* @async
		*/
	export function gunzip(data: Buffer): Buffer;

	/**
		* 
		* @brief 解压缩 gzip 算法压缩的数据到流对象中
		* @param data 给定要解压缩的数据
		* @param stm 指定存储解压缩数据的流
		* 
		* 
		* @async
		*/
	export function gunzipTo(data: Buffer, stm: Stream): void;

	/**
		* 
		* @brief 使用 deflate 算法压缩数据(deflateRaw)
		* @param data 给定要压缩的数据
		* @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		* @return 返回压缩后的二进制数据
		* 
		* 
		* @async
		*/
	export function deflateRaw(data: Buffer, level?: number/** = undefined*/): Buffer;

	/**
		* 
		* @brief 使用 deflate 算法压缩数据到流对象中(deflateRaw)
		* @param data 给定要压缩的数据
		* @param stm 指定存储压缩数据的流
		* @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
		* 
		* 
		* @async
		*/
	export function deflateRawTo(data: Buffer, stm: Stream, level?: number/** = undefined*/): void;

	/**
		* 
		* @brief 解压缩 deflate 算法压缩的数据(inflateRaw)
		* @param data 给定压缩后的数据
		* @return 返回解压缩后的二进制数据
		* 
		* 
		* @async
		*/
	export function inflateRaw(data: Buffer): Buffer;

	/**
		* 
		* @brief 解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)
		* @param data 给定要解压缩的数据
		* @param stm 指定存储解压缩数据的流
		* 
		* 
		* @async
		*/
	export function inflateRawTo(data: Buffer, stm: Stream): void;

}

/** } /** endof `module Or Internal Object` */


