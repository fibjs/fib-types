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
	* @brief gui 模块
	* @detail 使用方法：,```JavaScript,var gui = require('gui');,```
	*/
declare module "gui" {
	
	/**
		* 
		* @brief WebView ie 模拟版本，指定 ie7
		* 
		* 
		*/
	export const IE7 = 7000;
	
	/**
		* 
		* @brief WebView ie 模拟版本，指定 ie8
		* 
		* 
		*/
	export const IE8 = 8000;
	
	/**
		* 
		* @brief WebView ie 模拟版本，指定 ie9
		* 
		* 
		*/
	export const IE9 = 9000;
	
	/**
		* 
		* @brief WebView ie 模拟版本，指定 ie10
		* 
		* 
		*/
	export const IE10 = 10000;
	
	/**
		* 
		* @brief WebView ie 模拟版本，指定 ie11
		* 
		* 
		*/
	export const IE11 = 11000;
	
	/**
		* 
		* @brief WebView ie 模拟版本，指定 edge
		* 
		* 
		*/
	export const EDGE = 11001;
	
	
	
	/**
		* 
		* 设置 WebView 内 ie 最高模拟版本，当系统 ie 版本低于此版本时，将模拟系统安装版本
		* @param ver 指定 ie 模拟版本
		* 
		* 
		* 
		*/
	export function setVersion(ver: number): void;

	/**
		* 
		* @brief 打开一个窗口并访问指定网址
		* 
		* 支持以下参数:
		* ```JavaScript
		* {
		* "left": 100, // 窗口左上角 x，缺省系统自动设定
		* "right": 100, // 窗口左上角 y，缺省系统自动设定
		* "width": 100, // 窗口宽度，缺省系统自动设定
		* "height": 100, // 窗口高度，缺省系统自动设定
		* "border": true, // 是否有边框，缺省有边框
		* "caption": true, // 是否有标题栏，缺省有标题栏
		* "resizable": true, // 是否可改变尺寸，缺省可以改变
		* "maximize": false, // 是否最大化显示，缺省不最大化
		* "visible": true, // 是否显示，缺省显示
		* "debug": true // 是否输出 WebView 内的错误和 console 信息，缺省显示
		* }
		* ```
		* 当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中
		* @param url 指定的网址，，可以使用 fs:path 访问本地文件系统
		* @param opt 打开窗口参数
		* @return 返回打开的窗口对象
		* 
		* 
		* 
		*/
	export function open(url: string, opt?: Object/** = v8::Object::New(isolate)*/): WebView;

}

/** } /** endof `module Or Internal Object` */


