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
    root.AsposeimagingCloudApiReference.OdgPage = factory(root.AsposeimagingCloudApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OdgPage model module.
   * @module model/OdgPage
   * @version 3.0
   */

  /**
   * Constructs a new <code>OdgPage</code>.
   * ODG page info
   * @alias module:model/OdgPage
   * @class
   * @param width {Number} Gets or sets the width.
   * @param height {Number} Gets or sets the height.
   */
  var exports = function(width, height) {
    var _this = this;

    _this['Width'] = width;
    _this['Height'] = height;
  };

  /**
   * Constructs a <code>OdgPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OdgPage} obj Optional instance to populate.
   * @return {module:model/OdgPage} The populated <code>OdgPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Gets or sets the width.
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * Gets or sets the height.
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;



  return exports;
}));

