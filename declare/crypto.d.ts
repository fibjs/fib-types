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
	* @brief 加密算法模块
	* @detail 使用方法：,```JavaScript,var crypto = require('crypto');,```
	*/
declare module "crypto" {
	
	/**
		* 
		* @brief 指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
		* 
		* 
		*/
	export const AES = 1;
	
	/**
		* 
		* @brief 指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM
		* 
		* 
		*/
	export const CAMELLIA = 2;
	
	/**
		* 
		* @brief 指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC
		* 
		* 
		*/
	export const DES = 3;
	
	/**
		* 
		* @brief 指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC
		* 
		* 
		*/
	export const DES_EDE = 4;
	
	/**
		* 
		* @brief 指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC
		* 
		* 
		*/
	export const DES_EDE3 = 5;
	
	/**
		* 
		* @brief 指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR
		* 
		* 
		*/
	export const BLOWFISH = 6;
	
	/**
		* 
		* @brief 指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key
		* 
		* 
		*/
	export const ARC4 = 7;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 ECB
		* 
		* 
		*/
	export const ECB = 1;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 CBC
		* 
		* 
		*/
	export const CBC = 2;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 CFB64
		* 
		* 
		*/
	export const CFB64 = 3;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 CFB128
		* 
		* 
		*/
	export const CFB128 = 4;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 OFB
		* 
		* 
		*/
	export const OFB = 5;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 CTR
		* 
		* 
		*/
	export const CTR = 6;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 GCM
		* 
		* 
		*/
	export const GCM = 7;
	
	/**
		* 
		* @brief 指定流密码模式
		* 
		* 
		*/
	export const STREAM = 8;
	
	/**
		* 
		* @brief 指定分组密码工作模式支持 CCM
		* 
		* 
		*/
	export const CCM = 9;
	
	/**
		* 
		* @brief 指定填充模式为 PKCS7
		* 
		* 
		*/
	export const PKCS7 = 0;
	
	/**
		* 
		* @brief 指定填充模式为 ONE_AND_ZEROS
		* 
		* 
		*/
	export const ONE_AND_ZEROS = 1;
	
	/**
		* 
		* @brief 指定填充模式为 ZEROS_AND_LEN
		* 
		* 
		*/
	export const ZEROS_AND_LEN = 2;
	
	/**
		* 
		* @brief 指定填充模式为 ZEROS
		* 
		* 
		*/
	export const ZEROS = 3;
	
	/**
		* 
		* @brief 指定填充模式为 NOPADDING
		* 
		* 
		*/
	export const NOPADDING = 4;
	
	
	
	/**
		* 
		* @brief 根据给定的算法名称创建一个信息摘要对象
		* @param algo 指定信息摘要对象的算法
		* @return 返回信息摘要对象
		* 
		* 
		* 
		*/
	export function createHash(algo: string): Digest;

	/**
		* 
		* @brief 根据给定的算法名称创建一个 hmac 信息摘要对象
		* @param algo 指定信息摘要对象的算法
		* @param key 二进制签名密钥
		* @return 返回信息摘要对象
		* 
		* 
		* 
		*/
	export function createHmac(algo: string, key: Buffer): Digest;

	/**
		* 
		* @brief 加载一个 PEM/DER 格式的密钥文件
		* @param filename 密钥文件名
		* @param password 解密密码
		* @return 返回包含密钥的对象
		* 
		* 
		* 
		*/
	export function loadPKey(filename: string, password?: string/** = ""*/): PKey;

	/**
		* 
		* @brief 加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
		* 
		* loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
		* @param filename 证书文件名
		* @return 返回包含证书的对象
		* 
		* 
		* 
		*/
	export function loadCert(filename: string): X509Cert;

	/**
		* 
		* @brief 加载一个 PEM/DER 格式的撤销证书，可多次调用
		* @param filename 撤销证书文件名
		* @return 返回包含撤销证书的对象
		* 
		* 
		* 
		*/
	export function loadCrl(filename: string): X509Crl;

	/**
		* 
		* @brief 加载一个 PEM/DER 格式的证书请求，可多次调用
		* @param filename 证书请求文件名
		* @return 返回包含请求证书的对象
		* 
		* 
		* 
		*/
	export function loadReq(filename: string): X509Req;

	/**
		* 
		* @brief 生成指定尺寸的随机数，使用 havege 生成器
		* @param size 指定生成的随机数尺寸
		* @return 返回生成的随机数
		* 
		* 
		* @async
		*/
	export function randomBytes(size: number): Buffer;

	/**
		* 
		* @brief 生成指定尺寸的低强度随机数，使用快速的算法
		* @param size 指定生成的随机数尺寸
		* @return 返回生成的随机数
		* 
		* 
		* @async
		*/
	export function simpleRandomBytes(size: number): Buffer;

	/**
		* 
		* @brief 生成指定尺寸的伪随机数，使用 entropy 生成器
		* @param size 指定生成的随机数尺寸
		* @return 返回生成的随机数
		* 
		* 
		* @async
		*/
	export function pseudoRandomBytes(size: number): Buffer;

	/**
		* 
		* @brief 生成给定数据的可视化字符图像
		* @param data 指定要展示的数据
		* @param title 指定字符图像的标题，多字节字符会导致宽度错误
		* @param size 字符图像尺寸
		* @return 返回生成的可视化字符串图像
		* 
		* 
		* 
		*/
	export function randomArt(data: Buffer, title: string, size?: number/** = 8*/): string;

	/**
		* 
		* @brief 依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
		* @param password 指定使用的密码
		* @param salt 指定 hmac 使用的 salt
		* @param iterations 指定迭代次数
		* @param size 指定钥匙尺寸
		* @param algo 指定要使用的 hash 算法，详见 hash 模块
		* @return 返回生成的二进制钥匙
		* 
		* 
		* @async
		*/
	export function pbkdf1(password: Buffer, salt: Buffer, iterations: number, size: number, algo: number): Buffer;

	/**
		* 
		* @brief 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
		* @param password 指定使用的密码
		* @param salt 指定 hmac 使用的 salt
		* @param iterations 指定迭代次数
		* @param size 指定钥匙尺寸
		* @param algo 指定要使用的 hash 算法，详见 hash 模块
		* @return 返回生成的二进制钥匙
		* 
		* 
		* @async
		*/
	export function pbkdf2(password: Buffer, salt: Buffer, iterations: number, size: number, algo: number): Buffer;

}

/** } /** endof `module Or Internal Object` */


