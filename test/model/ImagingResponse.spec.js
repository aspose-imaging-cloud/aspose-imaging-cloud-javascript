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
    instance = new AsposeimagingCloudApiReference.ImagingResponse();
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

  describe('ImagingResponse', function() {
    it('should create an instance of ImagingResponse', function() {
      // uncomment below and update the code to test ImagingResponse
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be.a(AsposeimagingCloudApiReference.ImagingResponse);
    });

    it('should have the property height (base name: "Height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "Width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property bitsPerPixel (base name: "BitsPerPixel")', function() {
      // uncomment below and update the code to test the property bitsPerPixel
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property bmpProperties (base name: "BmpProperties")', function() {
      // uncomment below and update the code to test the property bmpProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property gifProperties (base name: "GifProperties")', function() {
      // uncomment below and update the code to test the property gifProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property jpegProperties (base name: "JpegProperties")', function() {
      // uncomment below and update the code to test the property jpegProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property pngProperties (base name: "PngProperties")', function() {
      // uncomment below and update the code to test the property pngProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property tiffProperties (base name: "TiffProperties")', function() {
      // uncomment below and update the code to test the property tiffProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property psdProperties (base name: "PsdProperties")', function() {
      // uncomment below and update the code to test the property psdProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property djvuProperties (base name: "DjvuProperties")', function() {
      // uncomment below and update the code to test the property djvuProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property webPProperties (base name: "WebPProperties")', function() {
      // uncomment below and update the code to test the property webPProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property jpeg2000Properties (base name: "Jpeg2000Properties")', function() {
      // uncomment below and update the code to test the property jpeg2000Properties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property dicomProperties (base name: "DicomProperties")', function() {
      // uncomment below and update the code to test the property dicomProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property dngProperties (base name: "DngProperties")', function() {
      // uncomment below and update the code to test the property dngProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property odgProperties (base name: "OdgProperties")', function() {
      // uncomment below and update the code to test the property odgProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property svgProperties (base name: "SvgProperties")', function() {
      // uncomment below and update the code to test the property svgProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property epsProperties (base name: "EpsProperties")', function() {
      // uncomment below and update the code to test the property epsProperties
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property horizontalResolution (base name: "HorizontalResolution")', function() {
      // uncomment below and update the code to test the property horizontalResolution
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property verticalResolution (base name: "VerticalResolution")', function() {
      // uncomment below and update the code to test the property verticalResolution
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

    it('should have the property isCached (base name: "IsCached")', function() {
      // uncomment below and update the code to test the property isCached
      //var instance = new AsposeimagingCloudApiReference.ImagingResponse();
      //expect(instance).to.be();
    });

  });

}));