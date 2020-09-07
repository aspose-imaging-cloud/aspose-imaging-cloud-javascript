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
    define(['ApiClient', 'model/JfifData', 'model/JpegExifData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JfifData'), require('./JpegExifData'));
  } else {
    // Browser globals (root is window)
    if (!root.AsposeimagingCloudApiReference) {
      root.AsposeimagingCloudApiReference = {};
    }
    root.AsposeimagingCloudApiReference.JpegProperties = factory(root.AsposeimagingCloudApiReference.ApiClient, root.AsposeimagingCloudApiReference.JfifData, root.AsposeimagingCloudApiReference.JpegExifData);
  }
}(this, function(ApiClient, JfifData, JpegExifData) {
  'use strict';




  /**
   * The JpegProperties model module.
   * @module model/JpegProperties
   * @version 3.0
   */

  /**
   * Constructs a new <code>JpegProperties</code>.
   * Represents information about image in JPEG format.
   * @alias module:model/JpegProperties
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>JpegProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JpegProperties} obj Optional instance to populate.
   * @return {module:model/JpegProperties} The populated <code>JpegProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Comment')) {
        obj['Comment'] = ApiClient.convertToType(data['Comment'], 'String');
      }
      if (data.hasOwnProperty('JpegExifData')) {
        obj['JpegExifData'] = JpegExifData.constructFromObject(data['JpegExifData']);
      }
      if (data.hasOwnProperty('JpegJfifData')) {
        obj['JpegJfifData'] = JfifData.constructFromObject(data['JpegJfifData']);
      }
    }
    return obj;
  }

  /**
   * Gets or sets the comment.
   * @member {String} Comment
   */
  exports.prototype['Comment'] = undefined;
  /**
   * Gets or sets the JPEG EXIF data.
   * @member {module:model/JpegExifData} JpegExifData
   */
  exports.prototype['JpegExifData'] = undefined;
  /**
   * Gets or sets the JPEG JFIF data.
   * @member {module:model/JfifData} JpegJfifData
   */
  exports.prototype['JpegJfifData'] = undefined;



  return exports;
}));


