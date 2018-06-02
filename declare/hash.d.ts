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
	* @brief 信息摘要计算模块，可用于计算信息摘要和摘要签名
	* @detail 
	*/
declare module "hash" {
	
	/**
		* 
		* @brief MD2 信息摘要算法标识常量
		* 
		* 
		*/
	export const MD2 = 1;
	
	/**
		* 
		* @brief MD4 信息摘要算法标识常量
		* 
		* 
		*/
	export const MD4 = 2;
	
	/**
		* 
		* @brief MD5 信息摘要算法标识常量
		* 
		* 
		*/
	export const MD5 = 3;
	
	/**
		* 
		* @brief SHA1 信息摘要算法标识常量
		* 
		* 
		*/
	export const SHA1 = 4;
	
	/**
		* 
		* @brief SHA224 信息摘要算法标识常量
		* 
		* 
		*/
	export const SHA224 = 5;
	
	/**
		* 
		* @brief SHA256 信息摘要算法标识常量
		* 
		* 
		*/
	export const SHA256 = 6;
	
	/**
		* 
		* @brief SHA384 信息摘要算法标识常量
		* 
		* 
		*/
	export const SHA384 = 7;
	
	/**
		* 
		* @brief SHA512 信息摘要算法标识常量
		* 
		* 
		*/
	export const SHA512 = 8;
	
	/**
		* 
		* @brief RIPEMD160 信息摘要算法标识常量
		* 
		* 
		*/
	export const RIPEMD160 = 9;
	
	
	
	/**
		* 
		* @brief 根据指定的算法标识创建一个信息摘要运算对象
		* @param algo 指定摘要运算算法
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function digest(algo: number, data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 MD2 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function md2(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 MD4 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function md4(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 MD5 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function md5(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA1 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function sha1(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA224 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function sha224(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA256 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function sha256(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA384 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function sha384(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA512 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function sha512(data: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 RIPEMD160 信息摘要运算对象
		* @param data 创建同时更新的二进制数据
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function ripemd160(data: Buffer): Digest;

	/**
		* 
		* @brief 根据指定的算法标识创建一个信息摘要签名运算对象
		* @param algo 指定摘要运算算法
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac(algo: number, key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 MD2 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_md2(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 MD4 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_md4(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 MD5 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_md5(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA1 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_sha1(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA224 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_sha224(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA256 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_sha256(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA384 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_sha384(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 SHA512 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_sha512(key: Buffer): Digest;

	/**
		* 
		* @brief 创建一个 RIPEMD160 信息摘要签名运算对象
		* @param key 二进制签名密钥
		* @return 返回构造的信息摘要对象
		* 
		* 
		* 
		*/
	export function hmac_ripemd160(key: Buffer): Digest;

}

/** } /** endof `module Or Internal Object` */


