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
    define(['ApiClient', 'model/ConvolutionFilterProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConvolutionFilterProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.AsposeimagingCloudApiReference) {
      root.AsposeimagingCloudApiReference = {};
    }
    root.AsposeimagingCloudApiReference.GaussianBlurFilterProperties = factory(root.AsposeimagingCloudApiReference.ApiClient, root.AsposeimagingCloudApiReference.ConvolutionFilterProperties);
  }
}(this, function(ApiClient, ConvolutionFilterProperties) {
  'use strict';




  /**
   * The GaussianBlurFilterProperties model module.
   * @module model/GaussianBlurFilterProperties
   * @version 3.0
   */

  /**
   * Constructs a new <code>GaussianBlurFilterProperties</code>.
   * The Gaussian blur
   * @alias module:model/GaussianBlurFilterProperties
   * @class
   * @extends module:model/ConvolutionFilterProperties
   * @param discriminator {String} 
   * @param factor {Number} Gets or sets the factor.
   * @param bias {Number} Gets or sets the bias.
   * @param radius {Number} Gets or sets the radius.
   * @param sigma {Number} Gets or sets the sigma.
   */
  var exports = function(discriminator, factor, bias, radius, sigma) {
    var _this = this;
    ConvolutionFilterProperties.call(_this, discriminator, factor, bias);
    _this['Radius'] = radius;
    _this['Sigma'] = sigma;
  };

  /**
   * Constructs a <code>GaussianBlurFilterProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GaussianBlurFilterProperties} obj Optional instance to populate.
   * @return {module:model/GaussianBlurFilterProperties} The populated <code>GaussianBlurFilterProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ConvolutionFilterProperties.constructFromObject(data, obj);
      if (data.hasOwnProperty('Radius')) {
        obj['Radius'] = ApiClient.convertToType(data['Radius'], 'Number');
      }
      if (data.hasOwnProperty('Sigma')) {
        obj['Sigma'] = ApiClient.convertToType(data['Sigma'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ConvolutionFilterProperties.prototype);
  exports.prototype.constructor = exports;

  /**
   * Gets or sets the radius.
   * @member {Number} Radius
   */
  exports.prototype['Radius'] = undefined;
  /**
   * Gets or sets the sigma.
   * @member {Number} Sigma
   */
  exports.prototype['Sigma'] = undefined;



  return exports;
}));


