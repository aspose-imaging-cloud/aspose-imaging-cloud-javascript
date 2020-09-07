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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AsposeimagingCloudApiReference);
  }
}(this, function(expect, AsposeimagingCloudApiReference) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AsposeimagingCloudApiReference.TiffFrame();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TiffFrame', function() {
    it('should create an instance of TiffFrame', function() {
      // uncomment below and update the code to test TiffFrame
      //var instance = new AsposeimagingCloudApiReference.TiffFrame();
      //expect(instance).to.be.a(AsposeimagingCloudApiReference.TiffFrame);
    });

    it('should have the property frameOptions (base name: "FrameOptions")', function() {
      // uncomment below and update the code to test the property frameOptions
      //var instance = new AsposeimagingCloudApiReference.TiffFrame();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "Height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new AsposeimagingCloudApiReference.TiffFrame();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "Width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new AsposeimagingCloudApiReference.TiffFrame();
      //expect(instance).to.be();
    });

    it('should have the property exifData (base name: "ExifData")', function() {
      // uncomment below and update the code to test the property exifData
      //var instance = new AsposeimagingCloudApiReference.TiffFrame();
      //expect(instance).to.be();
    });

  });

}));
