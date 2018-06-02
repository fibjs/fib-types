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
	* @brief 控制台访问对象
	* @detail 全局对象。可用于提示信息，警告和错误记录。通过启动配置文件，可将日志定位到不同的设备，以便于跟踪。日志支持格式化输出，例如：,```JavaScript,console.log("%d + %d = %d", 100, 200, 100 + 200);,```,可以使用的格式化参数如下：,- %s - 字符串,- %d - 数字，包括整数和数字,- %j - 以 JSON 格式输出对象,- %% - 输出字符 '%' 本身
	*/
declare module "console" {
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const FATAL = 0;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const ALERT = 1;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const CRIT = 2;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const ERROR = 3;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const WARN = 4;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const NOTICE = 5;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const INFO = 6;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const DEBUG = 7;
	
	/**
		* 
		* @brief loglevel 仅用于输出，信息输出后不换行，file 和 syslog 不保存此级别信息
		* 
		* 
		*/
	export const PRINT = 9;
	
	/**
		* 
		* @brief loglevel 级别常量
		* 
		* 
		*/
	export const NOTSET = 10;
	
	
	
	/**
		* 
		* @brief 添加 console 输出系统，支持的设备为 console, syslog, event，最多可以添加 10 个输出
		* 
		* 通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。
		* 
		* type 为配置，为设备名称字符串：
		* 
		* ```JavaScript
		* console.add("console");
		* ```
		* 
		* syslog 仅在 posix 平台有效：
		* ```JavaScript
		* console.add("syslog");
		* ```
		* 
		* event 仅在 windows 平台有效：
		* ```JavaScript
		* console.add("event");
		* ```
		* 
		* @param type 输出设备
		* 
		* 
		* 
		*/
	export function add(type: string): void;

	/**
		* 
		* @brief 初始化到缺省设置，只在 console 输出信息
		* 
		* 
		*/
	export function reset(): void;

	/**
		* 
		* @brief 记录普通日志信息，与 info 等同
		* 
		* 记录一般等级的日志信息。通常用于输出非错误性提示信息。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function log(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 记录调试日志信息
		* 
		* 记录调试日志信息。通常用于输出调试信息。不重要。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function debug(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 记录普通日志信息，与 log 等同
		* 
		* 记录一般等级的日志信息。通常用于输出非错误性提示信息。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function info(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 记录警告日志信息
		* 
		* 记录警告日志信息。通常用于输出提示性调试信息。一般重要。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function notice(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 记录警告日志信息
		* 
		* 记录警告日志信息。通常用于输出警告性调试信息。重要。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function warn(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 记录错误日志信息
		* 
		* 记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function error(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 记录关键错误日志信息
		* 
		* 记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function crit(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 记录警报错误日志信息
		* 
		* 记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function alert(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 用 JSON 格式输出对象
		* @param obj 给定要显示的对象
		* 
		* 
		* 
		*/
	export function dir(obj: any): void;

	/**
		* 
		* @brief 启动一个计时器
		* 
		* @param label 标题，缺省为空字符串。
		* 
		* 
		* 
		*/
	export function time(label?: string/** = "time"*/): void;

	/**
		* 
		* @brief 统计指定计时器的数值
		* 
		* @param label 标题，缺省为空字符串。
		* 
		* 
		* 
		*/
	export function timeEnd(label?: string/** = "time"*/): void;

	/**
		* 
		* @brief 输出当前调用堆栈
		* 
		* 通过日志输出当前调用堆栈。
		* @param label 标题，缺省为空字符串。
		* 
		* 
		* 
		*/
	export function trace(label?: string/** = "trace"*/): void;

	/**
		* 
		* @brief 断言测试，如果测试值为假，则报错
		* @param value 测试的数值
		* @param msg 报错信息
		* 
		* 
		* 
		*/
	export function assert(value: any, msg?: string/** = ""*/): void;

	/**
		* 
		* @brief 向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出
		* @param fmt 格式化字符串
		* @param args 可选参数列表
		* 
		* 
		* 
		*/
	export function print(fmt: string, ...args: any[]): void;

	/**
		* 
		* @brief 移动控制台光标到指定位置
		* @param row 指定新光标的行坐标
		* @param column 指定新光标的列坐标
		* 
		* 
		* 
		*/
	export function moveTo(row: number, column: number): void;

	/**
		* 
		* @brief 隐藏控制台光标
		* 
		* 
		*/
	export function hideCursor(): void;

	/**
		* 
		* @brief 显示控制台光标
		* 
		* 
		*/
	export function showCursor(): void;

	/**
		* 
		* @brief 清除控制台
		* 
		* 
		*/
	export function clear(): void;

	/**
		* 
		* @brief 按下一个按键
		* 
		* 参数 key 可以使用字符串传入功能键：
		* - 功能键：f1 - f12
		* - 方向键：up, down,left, right, home, end, pageup, pagedown
		* - 编辑键：backspace, delete, insert, enter, tab, escape, space
		* - 控制键：control, alt, shift, command
		* @param key 指定按键，单字符直接传入，功能键传入名称
		* @param modifier 指定控制键，可以为：control, alt, shift, command
		* 
		* 
		* 
		*/
	export function keyDown(key: string, modifier?: string/** = ""*/): void;

	/**
		* 
		* @brief 松开一个按键
		* 
		* 参数 key 可以使用字符串传入功能键：
		* - 功能键：f1 - f12
		* - 方向键：up, down,left, right, home, end, pageup, pagedown
		* - 编辑键：backspace, delete, insert, enter, tab, escape, space
		* - 控制键：control, alt, shift, command
		* @param key 指定按键，单字符直接传入，功能键传入名称
		* @param modifier 指定控制键，可以为：control, alt, shift, command
		* 
		* 
		* 
		*/
	export function keyUp(key: string, modifier?: string/** = ""*/): void;

	/**
		* 
		* @brief 点击并松开一个按键
		* 
		* 参数 key 可以使用字符串传入功能键：
		* - 功能键：f1 - f12
		* - 方向键：up, down,left, right, home, end, pageup, pagedown
		* - 编辑键：backspace, delete, insert, enter, tab, escape, space
		* - 控制键：control, alt, shift, command
		* @param key 指定按键，单字符直接传入，功能键传入名称
		* @param modifier 指定控制键，可以为：control, alt, shift, command
		* 
		* 
		* 
		*/
	export function keyTap(key: string, modifier?: string/** = ""*/): void;

	/**
		* 
		* @brief 输入一个字符串
		* @param text 指定输入的字符串
		* 
		* 
		* 
		*/
	export function typeString(text: string): void;

	/**
		* 
		* @brief 移动鼠标到指定的位置
		* @param x 指定 x 坐标
		* @param y 指定 y 坐标
		* 
		* 
		* 
		*/
	export function moveMouse(x: number, y: number): void;

	/**
		* 
		* @brief 按下一个鼠标键
		* @param button 指定鼠标键名称，允许值为: left, right, moddle
		* 
		* 
		* 
		*/
	export function mouseUp(button: string): void;

	/**
		* 
		* @brief 放开一个鼠标键
		* @param button 指定鼠标键名称，允许值为: left, right, moddle
		* 
		* 
		* 
		*/
	export function mouseDown(button: string): void;

	/**
		* 
		* @brief 点击一个鼠标键
		* @param button 指定鼠标键名称，允许值为: left, right, moddle
		* @param dbclick 指定是否双击，缺省为 false
		* 
		* 
		* 
		*/
	export function clickMouse(button: string, dbclick?: boolean/** = false*/): void;

	/**
		* 
		* @brief 从控制台读取用户输入
		* @param msg 提示信息
		* @return 返回用户输入的信息
		* 
		* 
		* @async
		*/
	export function readLine(msg?: string/** = ""*/): string;

}

/** } /** endof `module Or Internal Object` */


