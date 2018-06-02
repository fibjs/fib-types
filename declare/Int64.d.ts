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
	* @brief 64位整数对象
	* @detail 创建方法：,```JavaScript,var n = new Int64(123);,```
	*/
declare class Int64 extends _object {
	
	/**
		* 
		* @brief Int64 构造函数
		* @param num 初始化的值
		* 
		* 
		* 
		*/
	constructor(num?: number/** = 0*/);

	/**
		* 
		* @brief 将 Int64 内的数值与给定数值比较大小
		* @param num 指定比较的数值
		* @return 返回 1 表示 Int64 内的数值比指定数值更大，0 表示相等，-1 表示更小
		* 
		* 
		* 
		*/
	compare(num: Int64): number;

	/**
		* 
		* @brief 将 Int64 内的数值左移相应的位数，此操作不影响 Int64 原有数值
		* @param bits 指定移动的位数
		* @return 返回包含移位以后数值的对象
		* 
		* 
		* 
		*/
	shiftLeft(bits: number): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值右移相应的位数，此操作不影响 Int64 原有数值
		* @param bits 指定移动的位数
		* @return 返回包含移位以后数值的对象
		* 
		* 
		* 
		*/
	shiftRight(bits: number): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值与给定的数值进行按位 and 操作，此操作不影响 Int64 原有数值
		* @param num 指定运算的数值
		* @return 返回包含预算以后数值的对象
		* 
		* 
		* 
		*/
	and(num: Int64): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值与给定的数值进行按位 or 操作，此操作不影响 Int64 原有数值
		* @param num 指定运算的数值
		* @return 返回包含预算以后数值的对象
		* 
		* 
		* 
		*/
	or(num: Int64): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值与给定的数值进行按位 xor 操作，此操作不影响 Int64 原有数值
		* @param num 指定运算的数值
		* @return 返回包含预算以后数值的对象
		* 
		* 
		* 
		*/
	xor(num: Int64): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值与给定的数值进行加操作，此操作不影响 Int64 原有数值
		* @param num 指定运算的数值
		* @return 返回包含预算以后数值的对象
		* 
		* 
		* 
		*/
	add(num: Int64): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值与给定的数值进行减操作，此操作不影响 Int64 原有数值
		* @param num 指定运算的数值
		* @return 返回包含预算以后数值的对象
		* 
		* 
		* 
		*/
	sub(num: Int64): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值与给定的数值进行乘操作，此操作不影响 Int64 原有数值
		* @param num 指定运算的数值
		* @return 返回包含预算以后数值的对象
		* 
		* 
		* 
		*/
	multi(num: Int64): Int64;

	/**
		* 
		* @brief 将 Int64 内的数值与给定的数值进行除操作，此操作不影响 Int64 原有数值
		* @param num 指定运算的数值
		* @return 返回包含预算以后数值的对象
		* 
		* 
		* 
		*/
	div(num: Int64): Int64;

	/**
		* 
		* @brief 比较当前对象与给定的对象是否相等
		* @param expected 制定比较的目标对象
		* @return 返回对象比较的结果
		* 
		* 
		* 
		*/
	equals(expected: object): boolean;

	/**
		* 
		* @brief 转换成数字类型
		* @return 返回转换后的数字
		* 
		* 
		* 
		*/
	toNumber(): number;

	/**
		* 
		* @brief 转换成字符串类型
		* @param base 字符串进制数，可以接受 2-16, 32, 64，默认为 10
		* @return 返回转换后的字符串
		* 
		* 
		* 
		*/
	toString(base?: number/** = 10*/): string;

} /** endof class */

/** } /** endof `module Or Internal Object` */


