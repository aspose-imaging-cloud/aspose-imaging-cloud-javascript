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
    root.AsposeimagingCloudApiReference.DicomProperties = factory(root.AsposeimagingCloudApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DicomProperties model module.
   * @module model/DicomProperties
   * @version 3.0
   */

  /**
   * Constructs a new <code>DicomProperties</code>.
   * Represents information about image in dicom format.
   * @alias module:model/DicomProperties
   * @class
   * @param planarConfiguration {Number} Gets or sets the planar configuration.
   * @param signedImage {Boolean} Gets or sets a value indicating whether it's a signed image.
   * @param samplesPerPixel {Number} Gets or sets samples per pixel count.
   * @param bitsAllocated {Number} Gets or sets allocated bits count.
   * @param width {Number} Gets or sets the width.
   * @param height {Number} Gets or sets the height.
   * @param windowCentre {Number} Gets or sets the window centre.
   * @param windowWidth {Number} Gets or sets the width of the window.
   * @param pixelRepresentation {Number} Gets or sets data representation of the pixel samples.
   * @param rescaleIntercept {Number} Gets or sets a value of the rescale intercept.
   * @param rescaleSlope {Number} Gets or sets a value of the rescale slope.
   * @param numberOfFrames {Number} Gets or sets the number of frames.
   * @param isLittleEndian {Boolean} Indicates if DICOM image has little endian byte order.
   * @param offset {Number} Gets or sets the offset.
   */
  var exports = function(planarConfiguration, signedImage, samplesPerPixel, bitsAllocated, width, height, windowCentre, windowWidth, pixelRepresentation, rescaleIntercept, rescaleSlope, numberOfFrames, isLittleEndian, offset) {
    var _this = this;

    _this['PlanarConfiguration'] = planarConfiguration;




    _this['SignedImage'] = signedImage;

    _this['SamplesPerPixel'] = samplesPerPixel;
    _this['BitsAllocated'] = bitsAllocated;

    _this['Width'] = width;
    _this['Height'] = height;
    _this['WindowCentre'] = windowCentre;
    _this['WindowWidth'] = windowWidth;
    _this['PixelRepresentation'] = pixelRepresentation;
    _this['RescaleIntercept'] = rescaleIntercept;
    _this['RescaleSlope'] = rescaleSlope;
    _this['NumberOfFrames'] = numberOfFrames;
    _this['IsLittleEndian'] = isLittleEndian;
    _this['Offset'] = offset;
  };

  /**
   * Constructs a <code>DicomProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DicomProperties} obj Optional instance to populate.
   * @return {module:model/DicomProperties} The populated <code>DicomProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PlanarConfiguration')) {
        obj['PlanarConfiguration'] = ApiClient.convertToType(data['PlanarConfiguration'], 'Number');
      }
      if (data.hasOwnProperty('Reds')) {
        obj['Reds'] = ApiClient.convertToType(data['Reds'], 'Blob');
      }
      if (data.hasOwnProperty('Greens')) {
        obj['Greens'] = ApiClient.convertToType(data['Greens'], 'Blob');
      }
      if (data.hasOwnProperty('Blues')) {
        obj['Blues'] = ApiClient.convertToType(data['Blues'], 'Blob');
      }
      if (data.hasOwnProperty('DicomHeaderInfoByBytes')) {
        obj['DicomHeaderInfoByBytes'] = ApiClient.convertToType(data['DicomHeaderInfoByBytes'], 'Blob');
      }
      if (data.hasOwnProperty('SignedImage')) {
        obj['SignedImage'] = ApiClient.convertToType(data['SignedImage'], 'Boolean');
      }
      if (data.hasOwnProperty('DicomInfo')) {
        obj['DicomInfo'] = ApiClient.convertToType(data['DicomInfo'], ['String']);
      }
      if (data.hasOwnProperty('SamplesPerPixel')) {
        obj['SamplesPerPixel'] = ApiClient.convertToType(data['SamplesPerPixel'], 'Number');
      }
      if (data.hasOwnProperty('BitsAllocated')) {
        obj['BitsAllocated'] = ApiClient.convertToType(data['BitsAllocated'], 'Number');
      }
      if (data.hasOwnProperty('PhotoInterpretation')) {
        obj['PhotoInterpretation'] = ApiClient.convertToType(data['PhotoInterpretation'], 'String');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('WindowCentre')) {
        obj['WindowCentre'] = ApiClient.convertToType(data['WindowCentre'], 'Number');
      }
      if (data.hasOwnProperty('WindowWidth')) {
        obj['WindowWidth'] = ApiClient.convertToType(data['WindowWidth'], 'Number');
      }
      if (data.hasOwnProperty('PixelRepresentation')) {
        obj['PixelRepresentation'] = ApiClient.convertToType(data['PixelRepresentation'], 'Number');
      }
      if (data.hasOwnProperty('RescaleIntercept')) {
        obj['RescaleIntercept'] = ApiClient.convertToType(data['RescaleIntercept'], 'Number');
      }
      if (data.hasOwnProperty('RescaleSlope')) {
        obj['RescaleSlope'] = ApiClient.convertToType(data['RescaleSlope'], 'Number');
      }
      if (data.hasOwnProperty('NumberOfFrames')) {
        obj['NumberOfFrames'] = ApiClient.convertToType(data['NumberOfFrames'], 'Number');
      }
      if (data.hasOwnProperty('IsLittleEndian')) {
        obj['IsLittleEndian'] = ApiClient.convertToType(data['IsLittleEndian'], 'Boolean');
      }
      if (data.hasOwnProperty('Offset')) {
        obj['Offset'] = ApiClient.convertToType(data['Offset'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Gets or sets the planar configuration.
   * @member {Number} PlanarConfiguration
   */
  exports.prototype['PlanarConfiguration'] = undefined;
  /**
   * Gets or sets the array of red colors.
   * @member {Blob} Reds
   */
  exports.prototype['Reds'] = undefined;
  /**
   * Gets or sets the array of green colors.
   * @member {Blob} Greens
   */
  exports.prototype['Greens'] = undefined;
  /**
   * Gets or sets the array of blue colors.
   * @member {Blob} Blues
   */
  exports.prototype['Blues'] = undefined;
  /**
   * Gets or sets the header information by bytes.
   * @member {Blob} DicomHeaderInfoByBytes
   */
  exports.prototype['DicomHeaderInfoByBytes'] = undefined;
  /**
   * Gets or sets a value indicating whether it's a signed image.
   * @member {Boolean} SignedImage
   */
  exports.prototype['SignedImage'] = undefined;
  /**
   * Gets or sets the header information of the DICOM file.
   * @member {Array.<String>} DicomInfo
   */
  exports.prototype['DicomInfo'] = undefined;
  /**
   * Gets or sets samples per pixel count.
   * @member {Number} SamplesPerPixel
   */
  exports.prototype['SamplesPerPixel'] = undefined;
  /**
   * Gets or sets allocated bits count.
   * @member {Number} BitsAllocated
   */
  exports.prototype['BitsAllocated'] = undefined;
  /**
   * Gets or sets the photo interpretation.
   * @member {String} PhotoInterpretation
   */
  exports.prototype['PhotoInterpretation'] = undefined;
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
  /**
   * Gets or sets the window centre.
   * @member {Number} WindowCentre
   */
  exports.prototype['WindowCentre'] = undefined;
  /**
   * Gets or sets the width of the window.
   * @member {Number} WindowWidth
   */
  exports.prototype['WindowWidth'] = undefined;
  /**
   * Gets or sets data representation of the pixel samples.
   * @member {Number} PixelRepresentation
   */
  exports.prototype['PixelRepresentation'] = undefined;
  /**
   * Gets or sets a value of the rescale intercept.
   * @member {Number} RescaleIntercept
   */
  exports.prototype['RescaleIntercept'] = undefined;
  /**
   * Gets or sets a value of the rescale slope.
   * @member {Number} RescaleSlope
   */
  exports.prototype['RescaleSlope'] = undefined;
  /**
   * Gets or sets the number of frames.
   * @member {Number} NumberOfFrames
   */
  exports.prototype['NumberOfFrames'] = undefined;
  /**
   * Indicates if DICOM image has little endian byte order.
   * @member {Boolean} IsLittleEndian
   */
  exports.prototype['IsLittleEndian'] = undefined;
  /**
   * Gets or sets the offset.
   * @member {Number} Offset
   */
  exports.prototype['Offset'] = undefined;



  return exports;
}));


