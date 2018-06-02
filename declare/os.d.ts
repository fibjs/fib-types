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
	* @brief 操作系统与文件系统处理模块
	* @detail 使用方法：,```JavaScript,var os = require('os');,```
	*/
declare module "os" {
	
	
	
	/**
		* 
		* @brief 查询当前运行环境主机名
		* @return 返回主机名
		* 
		* 
		* 
		*/
	export function hostname(): string;

	/**
		* 
		* @brief 查询当前 CPU 的字节顺序
		* @return 返回字节顺序
		* 
		* 
		* 
		*/
	export function endianness(): string;

	/**
		* 
		* @brief 查询当前运行环境操作系统名称
		* @return 返回系统名称
		* 
		* 
		* 
		*/
	export function type(): string;

	/**
		* 
		* @brief 查询当前运行环境操作系统版本
		* @return 返回版本信息
		* 
		* 
		* 
		*/
	export function release(): string;

	/**
		* 
		* @brief 查询当前用户目录
		* @return 返回目录字符串
		* 
		* 
		* 
		*/
	export function homedir(): string;

	/**
		* 
		* @brief 查询当前 cpu 环境
		* @return 返回 cpu 类型，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'
		* 
		* 
		* 
		*/
	export function arch(): string;

	/**
		* 
		* @brief 查询运行环境运行时间，以秒为单位
		* @return 返回表示时间的数值
		* 
		* 
		* 
		*/
	export function uptime(): number;

	/**
		* 
		* @brief 查询运行环境 1分钟，5分钟，15分钟平均负载
		* @return 返回包含三个负载数据的数组
		* 
		* 
		* 
		*/
	export function loadavg(): any[];

	/**
		* 
		* @brief 查询运行环境总内存，以字节为单位
		* @return 返回内存数据
		* 
		* 
		* 
		*/
	export function totalmem(): number;

	/**
		* 
		* @brief 查询运行环境可用内存，以字节为单位
		* @return 返回内存数据
		* 
		* 
		* 
		*/
	export function freemem(): number;

	/**
		* 
		* @brief 查询当前运行环境 cpu 个数和参数
		* @return 返回包含 cpu 参数的数组，每一项对应一个 cpu
		* 
		* 
		* 
		*/
	export function cpus(): any[];

	/**
		* 
		* @brief 查询当前运行环境 cpu 个数
		* @return 返回 cpu 个数
		* 
		* 
		* 
		*/
	export function cpuNumbers(): number;

	/**
		* 
		* @brief 查询当前运行环境临时文件目录
		* @return 返回临时文件目录
		* 
		* 
		* 
		*/
	export function tmpdir(): string;

	/**
		* 
		* @brief 返回当前有效执行用户信息
		* @param options 用于解释结果字符串的字符编码
		* @return 当前有效执行用户信息
		* 
		* 
		* 
		*/
	export function userInfo(options?: Object/** = v8::Object::New(isolate)*/): Object;

	/**
		* 
		* @brief 查询当前运行环境网络信息
		* @return 返回网卡信息
		* 
		* 
		* 
		*/
	export function networkInterfaces(): Object;

	/**
		* 
		* @brief 查询当前主机的打印机信息
		* @return 返回打印机信息
		* 
		* 
		* 
		*/
	export function printerInfo(): any[];

	/**
		* 
		* @brief 创建一个打印机输出对象
		* @param name 打印机名称
		* @return 返回打印机输出对象
		* 
		* 
		* @async
		*/
	export function openPrinter(name: string): BufferedStream;

	/**
		* 
		* @brief 查询当前平台名称
		* @return 返回平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'
		* 
		* 
		* 
		*/
	export function platform(): string;

	/**
		* 
		* @brief 解析时间字符串或查询运行环境当前时间
		* @param tmString 时间字符串，缺省则查询当前时间
		* @return 返回 javascript Date 对象
		* 
		* 
		* 
		*/
	export function time(tmString?: string/** = ""*/): Date;

	/**
		* 
		* @brief 时间计算函数，根据 part 指定计算时间
		* @param d 指定用于计算 Date 对象
		* @param num 指定运算的数值
		* @param part 指定运算的时间部位，接收值为："year", "month", "day", "hour", "minute", "second"
		* @return 返回 javascript Date 对象
		* 
		* 
		* 
		*/
	export function dateAdd(d: Date, num: number, part: string): Date;

	/**
		* 
		* @brief 查询当前进程内存使用报告
		* 
		* 内存报告生成类似以下结果：
		* ```JavaScript
		* {
		* "rss": 8622080,
		* "heapTotal": 4083456,
		* "heapUsed": 1621800,
		* "nativeObjects": 122
		* }
		* ```
		* 其中：
		* - rss 返回进程当前占用物理内存大小
		* - heapTotal 返回 v8 引擎堆内存大小
		* - heapUsed 返回 v8 引擎正在使用堆内存大小
		* - nativeObjects 返回当前有效内置对象数
		* @return 返回包含内存报告
		* 
		* 
		* 
		*/
	export function memoryUsage(): Object;

}

/** } /** endof `module Or Internal Object` */


