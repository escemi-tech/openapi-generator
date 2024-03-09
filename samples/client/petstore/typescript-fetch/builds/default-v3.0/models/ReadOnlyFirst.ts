/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReadOnlyFirst
 */
export interface ReadOnlyFirst {
    /**
     * 
     * @type {string}
     * @memberof ReadOnlyFirst
     */
    readonly bar?: string;
    /**
     * 
     * @type {string}
     * @memberof ReadOnlyFirst
     */
    baz?: string;
}

/**
 * Check if a given object implements the ReadOnlyFirst interface.
 */
export function instanceOfReadOnlyFirst(value: object): boolean {
    return true;
}

export function ReadOnlyFirstFromJSON(json: any): ReadOnlyFirst {
    return ReadOnlyFirstFromJSONTyped(json, false);
}

export function ReadOnlyFirstFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadOnlyFirst {
    if (json == null) {
        return json;
    }
    return {
        
        'bar': json['bar'] == null ? undefined : json['bar'],
        'baz': json['baz'] == null ? undefined : json['baz'],
    };
}

export function ReadOnlyFirstToJSON(value?: ReadOnlyFirst | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'baz': value['baz'],
    };
}

