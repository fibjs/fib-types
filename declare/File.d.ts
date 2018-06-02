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
	* @brief 文件操作对象，用于二进制文件读写
	* @detail 文件操作对象用于对二进制文件进行操作，可使用 fs 模块打开和创建文件：,```JavaScript,var f = fs.openFile('test.txt');,```
	*/
declare class File extends SeekableStream {
	
	/**
		* 
		* @brief 查询当前文件的访问权限，Windows 不支持此方法
		* @param mode 指定设定的访问权限
		* 
		* 
		* @async
		*/
	chmod(mode: number): void;

} /** endof class */

/** } /** endof `module Or Internal Object` */


