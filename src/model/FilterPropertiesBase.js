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
    root.AsposeimagingCloudApiReference.FilterPropertiesBase = factory(root.AsposeimagingCloudApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FilterPropertiesBase model module.
   * @module model/FilterPropertiesBase
   * @version 3.0
   */

  /**
   * Constructs a new <code>FilterPropertiesBase</code>.
   * Filter Options Base, abstract class
   * @alias module:model/FilterPropertiesBase
   * @class
   * @param discriminator {String} 
   */
  var exports = function(discriminator) {
    var _this = this;

    _this['discriminator'] = discriminator;
  };

  /**
   * Constructs a <code>FilterPropertiesBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilterPropertiesBase} obj Optional instance to populate.
   * @return {module:model/FilterPropertiesBase} The populated <code>FilterPropertiesBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('discriminator')) {
        obj['discriminator'] = ApiClient.convertToType(data['discriminator'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} discriminator
   */
  exports.prototype['discriminator'] = undefined;



  return exports;
}));


