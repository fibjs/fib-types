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
	* @brief xml 处理模块
	* @detail 
	*/
declare module "xml" {
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlElement 对象
		* 
		* 
		* 
		*/
	export const ELEMENT_NODE = 1;
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlAttr 对象
		* 
		* 
		* 
		*/
	export const ATTRIBUTE_NODE = 2;
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlText 对象
		* 
		* 
		* 
		*/
	export const TEXT_NODE = 3;
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlCDATASection 对象
		* 
		* 
		* 
		*/
	export const CDATA_SECTION_NODE = 4;
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlProcessingInstruction 对象
		* 
		* 
		* 
		*/
	export const PROCESSING_INSTRUCTION_NODE = 7;
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlComment 对象
		* 
		* 
		* 
		*/
	export const COMMENT_NODE = 8;
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlDocument 对象
		* 
		* 
		* 
		*/
	export const DOCUMENT_NODE = 9;
	
	/**
		* 
		* @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlDocumentType 对象
		* 
		* 
		* 
		*/
	export const DOCUMENT_TYPE_NODE = 10;
	
	
	
	/**
		* 
		* @brief 解析 xml/html 文本，并创建 XmlDocument 对象，不支持多语种
		* @param source 指定需要解析的 xml/html 文本
		* @param type 指定文本类型，缺省为 text/xml，也可指定为 text/html
		* @return 返回创建的 XmlDocument 对象
		* 
		* 
		* 
		*/
	export function parse(source: string, type?: string/** = "text/xml"*/): XmlDocument;

	/**
		* 
		* @brief 序列化 XmlNode 为字符串
		* @param node 指定需要序列化的 XmlNode
		* @return 返回序列化的字符串
		* 
		* 
		* 
		*/
	export function serialize(node: XmlNode): string;

}

/** } /** endof `module Or Internal Object` */


