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
	* @brief 数据库访问模块
	* @detail 基础模块。可用于创建和操作数据库资源，引用方式：,```JavaScript,var db = require('db');,```
	*/
declare module "db" {
	
	
	
	/**
		* 
		* @brief 打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎
		* @param connString 数据库描述，如：mysql://user:pass\@host/db
		* @return 返回数据库连接对象
		* 
		* 
		* @async
		*/
	export function open(connString: string): object;

	/**
		* 
		* @brief 打开一个 mysql 数据库
		* @param connString 数据库描述，如：mysql://user:pass\@host/db
		* @return 返回数据库连接对象
		* 
		* 
		* @async
		*/
	export function openMySQL(connString: string): MySQL;

	/**
		* 
		* @brief 打开一个 mysql 数据库
		* @param connString 数据库描述，如：mssql://user:pass\@host/db
		* @return 返回数据库连接对象
		* 
		* 
		* @async
		*/
	export function openMSSQL(connString: string): MSSQL;

	/**
		* 
		* @brief 打开一个 sqlite 数据库
		* @param connString 数据库描述，如：sqlite:test.db 或者 test.db
		* @return 返回数据库连接对象
		* 
		* 
		* @async
		*/
	export function openSQLite(connString: string): SQLite;

	/**
		* 
		* @brief 打开一个 mongodb 数据库
		* @param connString 数据库描述
		* @return 返回数据库连接对象
		* 
		* 
		* @async
		*/
	export function openMongoDB(connString: string): MongoDB;

	/**
		* 
		* @brief 打开一个 leveldb 数据库
		* @param connString 数据库描述，如：level:test.db 或者 test.db
		* @return 返回数据库对象
		* 
		* 
		* @async
		*/
	export function openLevelDB(connString: string): LevelDB;

	/**
		* 
		* @brief 打开一个 Redis 数据库
		* @param connString 数据库描述，如：redis://server:port 或者 "server"
		* @return 返回数据库连接对象
		* 
		* 
		* @async
		*/
	export function openRedis(connString: string): Redis;

	/**
		* 
		* @brief 格式化一个 sql 命令，并返回格式化结果
		* 
		* @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
		* @param args 可选参数列表
		* @return 返回格式化之后的 sql 命令
		* 
		* 
		* 
		*/
	export function format(sql: string, ...args: any[]): string;

	/**
		* 
		* @brief 格式化一个 mysql 命令，并返回格式化结果
		* 
		* @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
		* @param args 可选参数列表
		* @return 返回格式化之后的 sql 命令
		* 
		* 
		* 
		*/
	export function formatMySQL(sql: string, ...args: any[]): string;

	/**
		* 
		* @brief 格式化一个 mssql 命令，并返回格式化结果
		* 
		* @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
		* @param args 可选参数列表
		* @return 返回格式化之后的 sql 命令
		* 
		* 
		* 
		*/
	export function formatMSSQL(sql: string, ...args: any[]): string;

	/**
		* 
		* @brief 将字符串编码为 SQL 安全编码字符串
		* @param str 要编码的字符串
		* @param mysql 指定 mysql 编码，缺省为 false
		* @return 返回编码后的字符串
		* 
		* 
		* 
		*/
	export function escape(str: string, mysql?: boolean/** = false*/): string;

}

/** } /** endof `module Or Internal Object` */


