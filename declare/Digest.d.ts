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
	* @brief 信息摘要对象
	* @detail 
	*/

declare class Digest_Classbase extends _object_Classbase {
	
	/**
		* 
		* @brief 更新二进制摘要信息
		* @param data 二进制数据块
		* @return 返回信息摘要对象本身
		* 
		* 
		* 
		*/
	update(data: Buffer_Classbase): Digest_Classbase;

	/**
		* 
		* @brief 计算并返回摘要
		* @param data 二进制数据块，此数据块将在计算前更新进摘要
		* @return 返回摘要的二进制数据
		* 
		* 
		* 
		*/
	digest(data: Buffer_Classbase): Buffer_Classbase;

	/**
		* 
		* @brief 计算并返回摘要
		* @return 返回摘要的二进制数据
		* 
		* 
		* 
		*/
	digest(): Buffer_Classbase;

} /** endof class */

/** } /** endof `module Or Internal Object` */


