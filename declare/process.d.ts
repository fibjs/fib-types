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
	* @brief 进程处理模块，用以管理当前进程的资源
	* @detail 引用方法：,```JavaScript,var process = require('process');,```,,## 进程事件,process 模块对象是 EventEmitter 的实例，可以通过注册事件监听器响应进程级别的事件。,,### beforeExit 事件,**当 fibjs 的任务已经为空，并且没有额外的工作被添加进来，事件 `beforeExit` 会被触发**,```JavaScript,process.on('beforeExit', exitCode => {});,```,正常情况下，如果没有额外的工作被添加到任务队列，fibjs 进程会结束。但是如果 `beforeExit` 事件绑定的监听器的回调函数中，启动了一个新的任务，比如开启一个 fiber，那么 fibjs 进程会继续运行。,,process.exitCode 作为唯一的参数值传递给 `beforeExit` 事件监听器的回调函数。如果进程由于显式的原因而将要终止，例如直接调用 process.exit 或抛出未捕获的异常，`beforeExit`事件不会被触发。,,### exit 事件,**当 fibjs 退出时，事件 `exit` 会被触发，一旦所有与 `exit` 事件绑定的监听器执行完成，进程会终止**,```JavaScript,process.on('exit', exitCode => {});,```,`exit` 事件监听器的回调函数，只有一个入参，这个参数的值可以是 process.exitCode 的属性值，或者是调用 process.exit 方法时传入的 `exitCode` 值。,,### Signal 事件,**当 fibjs 进程接收到一个信号时，会触发信号事件，目前支持的信号有 SIGINT 和 SIGTERM。每个事件名称，以信号名称的大写表示 (比如事件'SIGINT' 对应信号 SIGINT)。**,,信号事件不同于其它进程事件，信号事件是抢占的，当信号发生时，无论当前在 io 操作，还是 JavaScript 运算，都会尽快触发相应事件。比如你可以用下面的代码，中断当前应用，并输出运行状态：,```JavaScript,var coroutine = require('coroutine');,,process.on('SIGINT', () => {,   coroutine.fibers.forEach(f => console.error("Fiber %d:\n%s", f.id, f.stack));,   process.exit();,});,```,信号名称及其意义如下：,* SIGINT：在终端运行时，可以被所有平台支持，通常可以通过 CTRL+C 触发。,* SIGTERM：当进程被 kill 时触发此信号。Windows 下不支持。
	*/
declare module "process" {
	
	
	
	/**
		* 
		* @brief 改变当前的 umask，Windows 不支持此方法
		* @param mask 指定新的掩码
		* @return 返回之前的 mask
		* 
		* 
		* 
		*/
	export function umask(mask: number): number;

	/**
		* 
		* @brief 返回系统高精度时间，此时间与当前时间无关，仅用于高精度计时
		* @param diff 用于比较的初始时间
		* @return 返回计时时间，格式为 [seconds, nanoseconds]
		* 
		* 
		* 
		*/
	export function hrtime(diff?: any[]/** = v8::Array::New(isolate)*/): any[];

	/**
		* 
		* @brief 退出当前进程，并返回 exitCode 作为进程结果
		* 
		* 
		*/
	export function exit(): void;

	/**
		* 
		* @brief 返回操作系统当前工作路径
		* @return 返回当前系统路径
		* 
		* 
		* 
		*/
	export function cwd(): string;

	/**
		* 
		* @brief 修改操作系统当前工作路径
		* @param directory 指定设定的新路径
		* 
		* 
		* 
		*/
	export function chdir(directory: string): void;

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
		* @brief 查询当前进程内存使用报告
		* 
		* 内存报告生成类似以下结果：
		* ```JavaScript
		* {
		* "rss": 8622080,
		* "heapTotal": 4083456,
		* "heapUsed": 1621800
		* }
		* ```
		* 其中：
		* - rss 返回进程当前占用物理内存大小
		* - heapTotal 返回 v8 引擎堆内存大小
		* - heapUsed 返回 v8 引擎正在使用堆内存大小
		* @return 返回包含内存报告
		* 
		* 
		* 
		*/
	export function memoryUsage(): Object;

	/**
		* 
		* @brief 启动一个纤程
		* @param func 制定纤程执行的函数
		* @param args 可变参数序列，此序列会在纤程内传递给函数
		* 
		* 
		* 
		*/
	export function nextTick(func: Function, ...args: any[]): void;

	/**
		* 
		* @brief 运行指定的命令行，接管进程输入输出流，并返回进程对象
		* 
		* opts 支持的选项如下：
		* ```JavaScript
		* {
		* "timeout": 100, // 单位为 ms
		* "envs": [] // 进程环境变量
		* }
		* ```
		* @param command 指定运行的命令行
		* @param args 指定运行的参数列表
		* @param opts 指定运行的选项
		* @return 返回包含运行结果的进程对象
		* 
		* 
		* 
		*/
	export function open(command: string, args: any[], opts?: Object/** = v8::Object::New(isolate)*/): SubProcess;

	/**
		* 
		* @brief 运行指定的命令行，并返回进程对象
		* 
		* opts 支持的选项如下：
		* ```JavaScript
		* {
		* "timeout": 100, // 单位为 ms
		* "envs": [] // 进程环境变量
		* }
		* ```
		* @param command 指定运行的命令行
		* @param args 指定运行的参数列表
		* @param opts 指定运行的选项
		* @return 返回包含运行结果的进程对象
		* 
		* 
		* 
		*/
	export function start(command: string, args: any[], opts?: Object/** = v8::Object::New(isolate)*/): SubProcess;

	/**
		* 
		* @brief 运行指定的命令行，并返回进程的结束代码
		* 
		* opts 支持的选项如下：
		* ```JavaScript
		* {
		* "timeout": 100, // 单位为 ms
		* "envs": [] // 进程环境变量
		* }
		* ```
		* @param command 指定运行的命令行
		* @param args 指定运行的参数列表
		* @param opts 指定运行的选项
		* @return 返回命令的运行结果
		* 
		* 
		* 
		*/
	export function run(command: string, args: any[], opts?: Object/** = v8::Object::New(isolate)*/): number;

}

/** } /** endof `module Or Internal Object` */


