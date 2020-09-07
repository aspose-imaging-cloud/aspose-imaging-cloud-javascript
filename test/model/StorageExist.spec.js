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
    instance = new AsposeimagingCloudApiReference.StorageExist();
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

  describe('StorageExist', function() {
    it('should create an instance of StorageExist', function() {
      // uncomment below and update the code to test StorageExist
      //var instance = new AsposeimagingCloudApiReference.StorageExist();
      //expect(instance).to.be.a(AsposeimagingCloudApiReference.StorageExist);
    });

    it('should have the property exists (base name: "Exists")', function() {
      // uncomment below and update the code to test the property exists
      //var instance = new AsposeimagingCloudApiReference.StorageExist();
      //expect(instance).to.be();
    });

  });

}));
