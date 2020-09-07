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
    root.AsposeimagingCloudApiReference.DngProperties = factory(root.AsposeimagingCloudApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DngProperties model module.
   * @module model/DngProperties
   * @version 3.0
   */

  /**
   * Constructs a new <code>DngProperties</code>.
   * Represents information about image in DNG format.
   * @alias module:model/DngProperties
   * @class
   * @param dngVersion {Number} Gets or sets the DNG version.
   * @param isFoveon {Number} Gets or sets the value indicating whether it's a Foveon matrix.
   * @param rawCount {Number} Gets or sets the number of RAW images in file (0 means that the file has not been recognized).
   * @param filters {Number} Gets or sets the bit mask describing the order of color pixels in the matrix.
   * @param colorsCount {Number} Gets or sets the colors count.
   */
  var exports = function(dngVersion, isFoveon, rawCount, filters, colorsCount) {
    var _this = this;

    _this['DngVersion'] = dngVersion;



    _this['IsFoveon'] = isFoveon;

    _this['RawCount'] = rawCount;
    _this['Filters'] = filters;
    _this['ColorsCount'] = colorsCount;


  };

  /**
   * Constructs a <code>DngProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DngProperties} obj Optional instance to populate.
   * @return {module:model/DngProperties} The populated <code>DngProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DngVersion')) {
        obj['DngVersion'] = ApiClient.convertToType(data['DngVersion'], 'Number');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Model')) {
        obj['Model'] = ApiClient.convertToType(data['Model'], 'String');
      }
      if (data.hasOwnProperty('CameraManufacturer')) {
        obj['CameraManufacturer'] = ApiClient.convertToType(data['CameraManufacturer'], 'String');
      }
      if (data.hasOwnProperty('IsFoveon')) {
        obj['IsFoveon'] = ApiClient.convertToType(data['IsFoveon'], 'Number');
      }
      if (data.hasOwnProperty('Software')) {
        obj['Software'] = ApiClient.convertToType(data['Software'], 'String');
      }
      if (data.hasOwnProperty('RawCount')) {
        obj['RawCount'] = ApiClient.convertToType(data['RawCount'], 'Number');
      }
      if (data.hasOwnProperty('Filters')) {
        obj['Filters'] = ApiClient.convertToType(data['Filters'], 'Number');
      }
      if (data.hasOwnProperty('ColorsCount')) {
        obj['ColorsCount'] = ApiClient.convertToType(data['ColorsCount'], 'Number');
      }
      if (data.hasOwnProperty('XmpData')) {
        obj['XmpData'] = ApiClient.convertToType(data['XmpData'], 'String');
      }
      if (data.hasOwnProperty('TranslationCfaDng')) {
        obj['TranslationCfaDng'] = ApiClient.convertToType(data['TranslationCfaDng'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Gets or sets the DNG version.
   * @member {Number} DngVersion
   */
  exports.prototype['DngVersion'] = undefined;
  /**
   * Gets or sets the description of colors (RGBG, RGBE, GMCY or GBTG).
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * Gets or sets the camera model.
   * @member {String} Model
   */
  exports.prototype['Model'] = undefined;
  /**
   * Gets or sets the camera manufacturer.
   * @member {String} CameraManufacturer
   */
  exports.prototype['CameraManufacturer'] = undefined;
  /**
   * Gets or sets the value indicating whether it's a Foveon matrix.
   * @member {Number} IsFoveon
   */
  exports.prototype['IsFoveon'] = undefined;
  /**
   * Gets or sets the software.
   * @member {String} Software
   */
  exports.prototype['Software'] = undefined;
  /**
   * Gets or sets the number of RAW images in file (0 means that the file has not been recognized).
   * @member {Number} RawCount
   */
  exports.prototype['RawCount'] = undefined;
  /**
   * Gets or sets the bit mask describing the order of color pixels in the matrix.
   * @member {Number} Filters
   */
  exports.prototype['Filters'] = undefined;
  /**
   * Gets or sets the colors count.
   * @member {Number} ColorsCount
   */
  exports.prototype['ColorsCount'] = undefined;
  /**
   * Gets or sets the XMP data.
   * @member {String} XmpData
   */
  exports.prototype['XmpData'] = undefined;
  /**
   * Gets or sets the translation array for CFA mosaic of DNG format.
   * @member {Array.<String>} TranslationCfaDng
   */
  exports.prototype['TranslationCfaDng'] = undefined;



  return exports;
}));


