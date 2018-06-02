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
	* @brief tty 模块
	* @detail 使用方法：,```JavaScript,const tty = require('tty');,```
	*/
declare module "tty" {
	
	
	
	/**
		* 
		* @brief 查询是否是命令交互窗口
		* @param fd 文件描述符
		* @return 如果文件描述符同一个终端窗口关联则返回 true ，否则返回 false
		* 
		* 
		* 
		*/
	export function isatty(fd: number): boolean;

}

/** } /** endof `module Or Internal Object` */


