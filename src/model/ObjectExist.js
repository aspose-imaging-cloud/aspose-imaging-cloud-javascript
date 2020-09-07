/**
 * Aspose.Imaging Cloud API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AsposeimagingCloudApiReference) {
      root.AsposeimagingCloudApiReference = {};
    }
    root.AsposeimagingCloudApiReference.ObjectExist = factory(root.AsposeimagingCloudApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ObjectExist model module.
   * @module model/ObjectExist
   * @version 3.0
   */

  /**
   * Constructs a new <code>ObjectExist</code>.
   * Object exists
   * @alias module:model/ObjectExist
   * @class
   * @param exists {Boolean} Indicates that the file or folder exists.
   * @param isFolder {Boolean} True if it is a folder, false if it is a file.
   */
  var exports = function(exists, isFolder) {
    var _this = this;

    _this['Exists'] = exists;
    _this['IsFolder'] = isFolder;
  };

  /**
   * Constructs a <code>ObjectExist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectExist} obj Optional instance to populate.
   * @return {module:model/ObjectExist} The populated <code>ObjectExist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Exists')) {
        obj['Exists'] = ApiClient.convertToType(data['Exists'], 'Boolean');
      }
      if (data.hasOwnProperty('IsFolder')) {
        obj['IsFolder'] = ApiClient.convertToType(data['IsFolder'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Indicates that the file or folder exists.
   * @member {Boolean} Exists
   */
  exports.prototype['Exists'] = undefined;
  /**
   * True if it is a folder, false if it is a file.
   * @member {Boolean} IsFolder
   */
  exports.prototype['IsFolder'] = undefined;



  return exports;
}));


