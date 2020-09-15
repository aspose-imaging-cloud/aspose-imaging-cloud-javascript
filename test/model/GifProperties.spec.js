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
    instance = new AsposeimagingCloudApiReference.GifProperties();
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

  describe('GifProperties', function() {
    it('should create an instance of GifProperties', function() {
      // uncomment below and update the code to test GifProperties
      //var instance = new AsposeimagingCloudApiReference.GifProperties();
      //expect(instance).to.be.a(AsposeimagingCloudApiReference.GifProperties);
    });

    it('should have the property backgroundColor (base name: "BackgroundColor")', function() {
      // uncomment below and update the code to test the property backgroundColor
      //var instance = new AsposeimagingCloudApiReference.GifProperties();
      //expect(instance).to.be();
    });

    it('should have the property hasBackgroundColor (base name: "HasBackgroundColor")', function() {
      // uncomment below and update the code to test the property hasBackgroundColor
      //var instance = new AsposeimagingCloudApiReference.GifProperties();
      //expect(instance).to.be();
    });

    it('should have the property hasTrailer (base name: "HasTrailer")', function() {
      // uncomment below and update the code to test the property hasTrailer
      //var instance = new AsposeimagingCloudApiReference.GifProperties();
      //expect(instance).to.be();
    });

    it('should have the property pixelAspectRatio (base name: "PixelAspectRatio")', function() {
      // uncomment below and update the code to test the property pixelAspectRatio
      //var instance = new AsposeimagingCloudApiReference.GifProperties();
      //expect(instance).to.be();
    });

  });

}));