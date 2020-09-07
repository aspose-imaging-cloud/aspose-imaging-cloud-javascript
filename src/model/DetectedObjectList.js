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
    define(['ApiClient', 'model/DetectedObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetectedObject'));
  } else {
    // Browser globals (root is window)
    if (!root.AsposeimagingCloudApiReference) {
      root.AsposeimagingCloudApiReference = {};
    }
    root.AsposeimagingCloudApiReference.DetectedObjectList = factory(root.AsposeimagingCloudApiReference.ApiClient, root.AsposeimagingCloudApiReference.DetectedObject);
  }
}(this, function(ApiClient, DetectedObject) {
  'use strict';




  /**
   * The DetectedObjectList model module.
   * @module model/DetectedObjectList
   * @version 3.0
   */

  /**
   * Constructs a new <code>DetectedObjectList</code>.
   * Wrapper for detected objects array
   * @alias module:model/DetectedObjectList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DetectedObjectList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetectedObjectList} obj Optional instance to populate.
   * @return {module:model/DetectedObjectList} The populated <code>DetectedObjectList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('detectedObjects')) {
        obj['detectedObjects'] = ApiClient.convertToType(data['detectedObjects'], [DetectedObject]);
      }
    }
    return obj;
  }

  /**
   * detected objects
   * @member {Array.<module:model/DetectedObject>} detectedObjects
   */
  exports.prototype['detectedObjects'] = undefined;



  return exports;
}));


