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
    instance = new AsposeimagingCloudApiReference.ExifData();
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

  describe('ExifData', function() {
    it('should create an instance of ExifData', function() {
      // uncomment below and update the code to test ExifData
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be.a(AsposeimagingCloudApiReference.ExifData);
    });

    it('should have the property apertureValue (base name: "ApertureValue")', function() {
      // uncomment below and update the code to test the property apertureValue
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property bodySerialNumber (base name: "BodySerialNumber")', function() {
      // uncomment below and update the code to test the property bodySerialNumber
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property brightnessValue (base name: "BrightnessValue")', function() {
      // uncomment below and update the code to test the property brightnessValue
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property cFAPattern (base name: "CFAPattern")', function() {
      // uncomment below and update the code to test the property cFAPattern
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property cameraOwnerName (base name: "CameraOwnerName")', function() {
      // uncomment below and update the code to test the property cameraOwnerName
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property colorSpace (base name: "ColorSpace")', function() {
      // uncomment below and update the code to test the property colorSpace
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property componentsConfiguration (base name: "ComponentsConfiguration")', function() {
      // uncomment below and update the code to test the property componentsConfiguration
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property compressedBitsPerPixel (base name: "CompressedBitsPerPixel")', function() {
      // uncomment below and update the code to test the property compressedBitsPerPixel
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property contrast (base name: "Contrast")', function() {
      // uncomment below and update the code to test the property contrast
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property customRendered (base name: "CustomRendered")', function() {
      // uncomment below and update the code to test the property customRendered
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeDigitized (base name: "DateTimeDigitized")', function() {
      // uncomment below and update the code to test the property dateTimeDigitized
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeOriginal (base name: "DateTimeOriginal")', function() {
      // uncomment below and update the code to test the property dateTimeOriginal
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property deviceSettingDescription (base name: "DeviceSettingDescription")', function() {
      // uncomment below and update the code to test the property deviceSettingDescription
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property digitalZoomRatio (base name: "DigitalZoomRatio")', function() {
      // uncomment below and update the code to test the property digitalZoomRatio
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property exifVersion (base name: "ExifVersion")', function() {
      // uncomment below and update the code to test the property exifVersion
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property exposureBiasValue (base name: "ExposureBiasValue")', function() {
      // uncomment below and update the code to test the property exposureBiasValue
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property exposureIndex (base name: "ExposureIndex")', function() {
      // uncomment below and update the code to test the property exposureIndex
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property exposureMode (base name: "ExposureMode")', function() {
      // uncomment below and update the code to test the property exposureMode
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property exposureProgram (base name: "ExposureProgram")', function() {
      // uncomment below and update the code to test the property exposureProgram
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property exposureTime (base name: "ExposureTime")', function() {
      // uncomment below and update the code to test the property exposureTime
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property fNumber (base name: "FNumber")', function() {
      // uncomment below and update the code to test the property fNumber
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property fileSource (base name: "FileSource")', function() {
      // uncomment below and update the code to test the property fileSource
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property flash (base name: "Flash")', function() {
      // uncomment below and update the code to test the property flash
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property flashEnergy (base name: "FlashEnergy")', function() {
      // uncomment below and update the code to test the property flashEnergy
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property flashpixVersion (base name: "FlashpixVersion")', function() {
      // uncomment below and update the code to test the property flashpixVersion
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property focalLength (base name: "FocalLength")', function() {
      // uncomment below and update the code to test the property focalLength
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property focalLengthIn35MmFilm (base name: "FocalLengthIn35MmFilm")', function() {
      // uncomment below and update the code to test the property focalLengthIn35MmFilm
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property focalPlaneResolutionUnit (base name: "FocalPlaneResolutionUnit")', function() {
      // uncomment below and update the code to test the property focalPlaneResolutionUnit
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property focalPlaneXResolution (base name: "FocalPlaneXResolution")', function() {
      // uncomment below and update the code to test the property focalPlaneXResolution
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property focalPlaneYResolution (base name: "FocalPlaneYResolution")', function() {
      // uncomment below and update the code to test the property focalPlaneYResolution
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSAltitude (base name: "GPSAltitude")', function() {
      // uncomment below and update the code to test the property gPSAltitude
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSAltitudeRef (base name: "GPSAltitudeRef")', function() {
      // uncomment below and update the code to test the property gPSAltitudeRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSAreaInformation (base name: "GPSAreaInformation")', function() {
      // uncomment below and update the code to test the property gPSAreaInformation
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property GPSDOP (base name: "GPSDOP")', function() {
      // uncomment below and update the code to test the property GPSDOP
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestBearing (base name: "GPSDestBearing")', function() {
      // uncomment below and update the code to test the property gPSDestBearing
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestBearingRef (base name: "GPSDestBearingRef")', function() {
      // uncomment below and update the code to test the property gPSDestBearingRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestDistance (base name: "GPSDestDistance")', function() {
      // uncomment below and update the code to test the property gPSDestDistance
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestDistanceRef (base name: "GPSDestDistanceRef")', function() {
      // uncomment below and update the code to test the property gPSDestDistanceRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestLatitude (base name: "GPSDestLatitude")', function() {
      // uncomment below and update the code to test the property gPSDestLatitude
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestLatitudeRef (base name: "GPSDestLatitudeRef")', function() {
      // uncomment below and update the code to test the property gPSDestLatitudeRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestLongitude (base name: "GPSDestLongitude")', function() {
      // uncomment below and update the code to test the property gPSDestLongitude
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDestLongitudeRef (base name: "GPSDestLongitudeRef")', function() {
      // uncomment below and update the code to test the property gPSDestLongitudeRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDifferential (base name: "GPSDifferential")', function() {
      // uncomment below and update the code to test the property gPSDifferential
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSImgDirection (base name: "GPSImgDirection")', function() {
      // uncomment below and update the code to test the property gPSImgDirection
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSImgDirectionRef (base name: "GPSImgDirectionRef")', function() {
      // uncomment below and update the code to test the property gPSImgDirectionRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSDateStamp (base name: "GPSDateStamp")', function() {
      // uncomment below and update the code to test the property gPSDateStamp
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSLatitude (base name: "GPSLatitude")', function() {
      // uncomment below and update the code to test the property gPSLatitude
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSLatitudeRef (base name: "GPSLatitudeRef")', function() {
      // uncomment below and update the code to test the property gPSLatitudeRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSLongitude (base name: "GPSLongitude")', function() {
      // uncomment below and update the code to test the property gPSLongitude
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSLongitudeRef (base name: "GPSLongitudeRef")', function() {
      // uncomment below and update the code to test the property gPSLongitudeRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSMapDatum (base name: "GPSMapDatum")', function() {
      // uncomment below and update the code to test the property gPSMapDatum
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSMeasureMode (base name: "GPSMeasureMode")', function() {
      // uncomment below and update the code to test the property gPSMeasureMode
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSProcessingMethod (base name: "GPSProcessingMethod")', function() {
      // uncomment below and update the code to test the property gPSProcessingMethod
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSSatellites (base name: "GPSSatellites")', function() {
      // uncomment below and update the code to test the property gPSSatellites
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSSpeed (base name: "GPSSpeed")', function() {
      // uncomment below and update the code to test the property gPSSpeed
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSSpeedRef (base name: "GPSSpeedRef")', function() {
      // uncomment below and update the code to test the property gPSSpeedRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSStatus (base name: "GPSStatus")', function() {
      // uncomment below and update the code to test the property gPSStatus
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSTimestamp (base name: "GPSTimestamp")', function() {
      // uncomment below and update the code to test the property gPSTimestamp
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSTrack (base name: "GPSTrack")', function() {
      // uncomment below and update the code to test the property gPSTrack
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSTrackRef (base name: "GPSTrackRef")', function() {
      // uncomment below and update the code to test the property gPSTrackRef
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gPSVersionID (base name: "GPSVersionID")', function() {
      // uncomment below and update the code to test the property gPSVersionID
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gainControl (base name: "GainControl")', function() {
      // uncomment below and update the code to test the property gainControl
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property gamma (base name: "Gamma")', function() {
      // uncomment below and update the code to test the property gamma
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property iSOSpeed (base name: "ISOSpeed")', function() {
      // uncomment below and update the code to test the property iSOSpeed
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property iSOSpeedLatitudeYYY (base name: "ISOSpeedLatitudeYYY")', function() {
      // uncomment below and update the code to test the property iSOSpeedLatitudeYYY
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property iSOSpeedLatitudeZZZ (base name: "ISOSpeedLatitudeZZZ")', function() {
      // uncomment below and update the code to test the property iSOSpeedLatitudeZZZ
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property photographicSensitivity (base name: "PhotographicSensitivity")', function() {
      // uncomment below and update the code to test the property photographicSensitivity
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property imageUniqueID (base name: "ImageUniqueID")', function() {
      // uncomment below and update the code to test the property imageUniqueID
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property lensMake (base name: "LensMake")', function() {
      // uncomment below and update the code to test the property lensMake
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property lensModel (base name: "LensModel")', function() {
      // uncomment below and update the code to test the property lensModel
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property lensSerialNumber (base name: "LensSerialNumber")', function() {
      // uncomment below and update the code to test the property lensSerialNumber
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property lensSpecification (base name: "LensSpecification")', function() {
      // uncomment below and update the code to test the property lensSpecification
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property lightSource (base name: "LightSource")', function() {
      // uncomment below and update the code to test the property lightSource
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property makerNoteRawData (base name: "MakerNoteRawData")', function() {
      // uncomment below and update the code to test the property makerNoteRawData
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property maxApertureValue (base name: "MaxApertureValue")', function() {
      // uncomment below and update the code to test the property maxApertureValue
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property meteringMode (base name: "MeteringMode")', function() {
      // uncomment below and update the code to test the property meteringMode
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property OECF (base name: "OECF")', function() {
      // uncomment below and update the code to test the property OECF
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property pixelXDimension (base name: "PixelXDimension")', function() {
      // uncomment below and update the code to test the property pixelXDimension
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property pixelYDimension (base name: "PixelYDimension")', function() {
      // uncomment below and update the code to test the property pixelYDimension
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property recommendedExposureIndex (base name: "RecommendedExposureIndex")', function() {
      // uncomment below and update the code to test the property recommendedExposureIndex
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property relatedSoundFile (base name: "RelatedSoundFile")', function() {
      // uncomment below and update the code to test the property relatedSoundFile
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property saturation (base name: "Saturation")', function() {
      // uncomment below and update the code to test the property saturation
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property sceneCaptureType (base name: "SceneCaptureType")', function() {
      // uncomment below and update the code to test the property sceneCaptureType
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property sceneType (base name: "SceneType")', function() {
      // uncomment below and update the code to test the property sceneType
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property sensingMethod (base name: "SensingMethod")', function() {
      // uncomment below and update the code to test the property sensingMethod
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property sensitivityType (base name: "SensitivityType")', function() {
      // uncomment below and update the code to test the property sensitivityType
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property sharpness (base name: "Sharpness")', function() {
      // uncomment below and update the code to test the property sharpness
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property shutterSpeedValue (base name: "ShutterSpeedValue")', function() {
      // uncomment below and update the code to test the property shutterSpeedValue
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property spatialFrequencyResponse (base name: "SpatialFrequencyResponse")', function() {
      // uncomment below and update the code to test the property spatialFrequencyResponse
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property spectralSensitivity (base name: "SpectralSensitivity")', function() {
      // uncomment below and update the code to test the property spectralSensitivity
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property standardOutputSensitivity (base name: "StandardOutputSensitivity")', function() {
      // uncomment below and update the code to test the property standardOutputSensitivity
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property subjectArea (base name: "SubjectArea")', function() {
      // uncomment below and update the code to test the property subjectArea
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property subjectDistance (base name: "SubjectDistance")', function() {
      // uncomment below and update the code to test the property subjectDistance
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property subjectDistanceRange (base name: "SubjectDistanceRange")', function() {
      // uncomment below and update the code to test the property subjectDistanceRange
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property subjectLocation (base name: "SubjectLocation")', function() {
      // uncomment below and update the code to test the property subjectLocation
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property subsecTime (base name: "SubsecTime")', function() {
      // uncomment below and update the code to test the property subsecTime
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property subsecTimeDigitized (base name: "SubsecTimeDigitized")', function() {
      // uncomment below and update the code to test the property subsecTimeDigitized
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property subsecTimeOriginal (base name: "SubsecTimeOriginal")', function() {
      // uncomment below and update the code to test the property subsecTimeOriginal
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property userComment (base name: "UserComment")', function() {
      // uncomment below and update the code to test the property userComment
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property whiteBalance (base name: "WhiteBalance")', function() {
      // uncomment below and update the code to test the property whiteBalance
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

    it('should have the property whitePoint (base name: "WhitePoint")', function() {
      // uncomment below and update the code to test the property whitePoint
      //var instance = new AsposeimagingCloudApiReference.ExifData();
      //expect(instance).to.be();
    });

  });

}));
