/**
 * Diem Dev API Specification
 * Diem Dev API is REST API for client applications to interact the Diem blockchain. 
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MoveScriptBytecode } from './MoveScriptBytecode';
import { HttpFile } from '../http/http';

export class Script {
    'code': MoveScriptBytecode;
    'typeArguments': Array<string>;
    'arguments': Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "MoveScriptBytecode",
            "format": ""
        },
        {
            "name": "typeArguments",
            "baseName": "type_arguments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Script.attributeTypeMap;
    }
    
    public constructor() {
    }
}
