# AsposeimagingCloudApiReference.ImagingApi

All URIs are relative to *https://api-qa.aspose.cloud/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSearchImage**](ImagingApi.md#addSearchImage) | **POST** /imaging/ai/imageSearch/{searchContextId}/image | Add image and images features to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
[**appendTiff**](ImagingApi.md#appendTiff) | **POST** /imaging/tiff/{name}/appendTiff | Appends existing TIFF image to another existing TIFF image (i.e. merges TIFF images).
[**compareImages**](ImagingApi.md#compareImages) | **POST** /imaging/ai/imageSearch/{searchContextId}/compare | Compare two images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
[**convertImage**](ImagingApi.md#convertImage) | **GET** /imaging/{name}/convert | Convert existing image to another format.
[**convertTiffToFax**](ImagingApi.md#convertTiffToFax) | **GET** /imaging/tiff/{name}/toFax | Update parameters of existing TIFF image accordingly to fax parameters.
[**copyFile**](ImagingApi.md#copyFile) | **PUT** /imaging/storage/file/copy/{srcPath} | Copy file
[**copyFolder**](ImagingApi.md#copyFolder) | **PUT** /imaging/storage/folder/copy/{srcPath} | Copy folder
[**createConvertedImage**](ImagingApi.md#createConvertedImage) | **POST** /imaging/convert | Convert existing image to another format. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.             
[**createCroppedImage**](ImagingApi.md#createCroppedImage) | **POST** /imaging/crop | Crop an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createDeskewedImage**](ImagingApi.md#createDeskewedImage) | **POST** /imaging/deskew | Deskew an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createFaxTiff**](ImagingApi.md#createFaxTiff) | **POST** /imaging/tiff/toFax | Update parameters of TIFF image accordingly to fax parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createFolder**](ImagingApi.md#createFolder) | **PUT** /imaging/storage/folder/{path} | Create the folder
[**createGrayscaledImage**](ImagingApi.md#createGrayscaledImage) | **POST** /imaging/grayscale | Grayscales an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createImageFeatures**](ImagingApi.md#createImageFeatures) | **POST** /imaging/ai/imageSearch/{searchContextId}/features | Extract images features and add them to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
[**createImageFrame**](ImagingApi.md#createImageFrame) | **POST** /imaging/frames/{frameId} | Get separate frame from existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createImageFrameRange**](ImagingApi.md#createImageFrameRange) | **POST** /imaging/frames/range | Get frames range from existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createImageSearch**](ImagingApi.md#createImageSearch) | **POST** /imaging/ai/imageSearch/create | Create new search context.
[**createImageTag**](ImagingApi.md#createImageTag) | **POST** /imaging/ai/imageSearch/{searchContextId}/addTag | Add tag and reference image to search context. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedBmp**](ImagingApi.md#createModifiedBmp) | **POST** /imaging/bmp | Update parameters of BMP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedEmf**](ImagingApi.md#createModifiedEmf) | **POST** /imaging/emf | Process existing EMF imaging using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedGif**](ImagingApi.md#createModifiedGif) | **POST** /imaging/gif | Update parameters of GIF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedJpeg**](ImagingApi.md#createModifiedJpeg) | **POST** /imaging/jpg | Update parameters of JPEG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedJpeg2000**](ImagingApi.md#createModifiedJpeg2000) | **POST** /imaging/jpg2000 | Update parameters of JPEG2000 image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedPsd**](ImagingApi.md#createModifiedPsd) | **POST** /imaging/psd | Update parameters of PSD image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedSvg**](ImagingApi.md#createModifiedSvg) | **POST** /imaging/svg | Update parameters of SVG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedTiff**](ImagingApi.md#createModifiedTiff) | **POST** /imaging/tiff | Update parameters of TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedWebP**](ImagingApi.md#createModifiedWebP) | **POST** /imaging/webp | Update parameters of WEBP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createModifiedWmf**](ImagingApi.md#createModifiedWmf) | **POST** /imaging/wmf | Process existing WMF image using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createObjectBounds**](ImagingApi.md#createObjectBounds) | **POST** /imaging/ai/objectdetection/bounds | Detects objects bounds. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createResizedImage**](ImagingApi.md#createResizedImage) | **POST** /imaging/resize | Resize an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createRotateFlippedImage**](ImagingApi.md#createRotateFlippedImage) | **POST** /imaging/rotateflip | Rotate and/or flip an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createUpdatedImage**](ImagingApi.md#createUpdatedImage) | **POST** /imaging/updateImage | Perform scaling, cropping and flipping of an image in a single request. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**createVisualObjectBounds**](ImagingApi.md#createVisualObjectBounds) | **POST** /imaging/ai/objectdetection/visualbounds | Detects objects bounds and draw them on the original image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream
[**createWebSiteImageFeatures**](ImagingApi.md#createWebSiteImageFeatures) | **POST** /imaging/ai/imageSearch/{searchContextId}/features/web | Extract images features from web page and add them to search context
[**cropImage**](ImagingApi.md#cropImage) | **GET** /imaging/{name}/crop | Crop an existing image.
[**deleteFile**](ImagingApi.md#deleteFile) | **DELETE** /imaging/storage/file/{path} | Delete file
[**deleteFolder**](ImagingApi.md#deleteFolder) | **DELETE** /imaging/storage/folder/{path} | Delete folder
[**deleteImageFeatures**](ImagingApi.md#deleteImageFeatures) | **DELETE** /imaging/ai/imageSearch/{searchContextId}/features | Deletes image features from search context.
[**deleteImageSearch**](ImagingApi.md#deleteImageSearch) | **DELETE** /imaging/ai/imageSearch/{searchContextId} | Deletes the search context.
[**deleteSearchImage**](ImagingApi.md#deleteSearchImage) | **DELETE** /imaging/ai/imageSearch/{searchContextId}/image | Delete image and images features from search context
[**deskewImage**](ImagingApi.md#deskewImage) | **GET** /imaging/{name}/deskew | Deskew an existing image.
[**downloadFile**](ImagingApi.md#downloadFile) | **GET** /imaging/storage/file/{path} | Download file
[**extractImageFeatures**](ImagingApi.md#extractImageFeatures) | **GET** /imaging/ai/imageSearch/{searchContextId}/image2features | Extract features from image without adding to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
[**extractImageFrameProperties**](ImagingApi.md#extractImageFrameProperties) | **POST** /imaging/frames/{frameId}/properties | Get separate frame properties of existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**extractImageProperties**](ImagingApi.md#extractImageProperties) | **POST** /imaging/properties | Get properties of an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
[**filterEffectImage**](ImagingApi.md#filterEffectImage) | **PUT** /imaging/{name}/filterEffect | Apply filtering effects to an existing image.
[**findImageDuplicates**](ImagingApi.md#findImageDuplicates) | **GET** /imaging/ai/imageSearch/{searchContextId}/findDuplicates | Find images duplicates.
[**findImagesByTags**](ImagingApi.md#findImagesByTags) | **POST** /imaging/ai/imageSearch/{searchContextId}/findByTags | Find images by tags. Tags JSON string is passed as zero-indexed multipart/form-data content or as raw body stream.
[**findSimilarImages**](ImagingApi.md#findSimilarImages) | **GET** /imaging/ai/imageSearch/{searchContextId}/findSimilar | Find similar images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
[**getAvailableLabels**](ImagingApi.md#getAvailableLabels) | **GET** /imaging/ai/objectdetection/availablelabels/{method} | Gets available labels for selected object detection method.
[**getDiscUsage**](ImagingApi.md#getDiscUsage) | **GET** /imaging/storage/disc | Get disc usage
[**getFileVersions**](ImagingApi.md#getFileVersions) | **GET** /imaging/storage/version/{path} | Get file versions
[**getFilesList**](ImagingApi.md#getFilesList) | **GET** /imaging/storage/folder/{path} | Get all files and folders within a folder
[**getImageFeatures**](ImagingApi.md#getImageFeatures) | **GET** /imaging/ai/imageSearch/{searchContextId}/features | Gets image features from search context.
[**getImageFrame**](ImagingApi.md#getImageFrame) | **GET** /imaging/{name}/frames/{frameId} | Get separate frame from existing image.
[**getImageFrameProperties**](ImagingApi.md#getImageFrameProperties) | **GET** /imaging/{name}/frames/{frameId}/properties | Get separate frame properties of existing image.
[**getImageFrameRange**](ImagingApi.md#getImageFrameRange) | **GET** /imaging/{name}/frames/range | Get frames range from existing image.
[**getImageProperties**](ImagingApi.md#getImageProperties) | **GET** /imaging/{name}/properties | Get properties of an image.
[**getImageSearchStatus**](ImagingApi.md#getImageSearchStatus) | **GET** /imaging/ai/imageSearch/{searchContextId}/status | Gets the search context status.
[**getObjectBounds**](ImagingApi.md#getObjectBounds) | **GET** /imaging/ai/objectdetection/{name}/bounds | Detects objects&#39; bounds
[**getSearchImage**](ImagingApi.md#getSearchImage) | **GET** /imaging/ai/imageSearch/{searchContextId}/image | Get image from search context
[**getVisualObjectBounds**](ImagingApi.md#getVisualObjectBounds) | **GET** /imaging/ai/objectdetection/{name}/visualbounds | Detects objects bounds and draw them on the original image
[**grayscaleImage**](ImagingApi.md#grayscaleImage) | **GET** /imaging/{name}/grayscale | Grayscale an existing image.
[**modifyBmp**](ImagingApi.md#modifyBmp) | **GET** /imaging/{name}/bmp | Update parameters of existing BMP image.
[**modifyEmf**](ImagingApi.md#modifyEmf) | **GET** /imaging/{name}/emf | Process existing EMF imaging using given parameters.
[**modifyGif**](ImagingApi.md#modifyGif) | **GET** /imaging/{name}/gif | Update parameters of existing GIF image.
[**modifyJpeg**](ImagingApi.md#modifyJpeg) | **GET** /imaging/{name}/jpg | Update parameters of existing JPEG image.
[**modifyJpeg2000**](ImagingApi.md#modifyJpeg2000) | **GET** /imaging/{name}/jpg2000 | Update parameters of existing JPEG2000 image.
[**modifyPsd**](ImagingApi.md#modifyPsd) | **GET** /imaging/{name}/psd | Update parameters of existing PSD image.
[**modifySvg**](ImagingApi.md#modifySvg) | **GET** /imaging/{name}/svg | Update parameters of existing SVG image.
[**modifyTiff**](ImagingApi.md#modifyTiff) | **GET** /imaging/{name}/tiff | Update parameters of existing TIFF image.
[**modifyWebP**](ImagingApi.md#modifyWebP) | **GET** /imaging/{name}/webp | Update parameters of existing WEBP image.
[**modifyWmf**](ImagingApi.md#modifyWmf) | **GET** /imaging/{name}/wmf | Process existing WMF image using given parameters.
[**moveFile**](ImagingApi.md#moveFile) | **PUT** /imaging/storage/file/move/{srcPath} | Move file
[**moveFolder**](ImagingApi.md#moveFolder) | **PUT** /imaging/storage/folder/move/{srcPath} | Move folder
[**objectExists**](ImagingApi.md#objectExists) | **GET** /imaging/storage/exist/{path} | Check if file or folder exists
[**resizeImage**](ImagingApi.md#resizeImage) | **GET** /imaging/{name}/resize | Resize an existing image.
[**rotateFlipImage**](ImagingApi.md#rotateFlipImage) | **GET** /imaging/{name}/rotateflip | Rotate and/or flip an existing image.
[**storageExists**](ImagingApi.md#storageExists) | **GET** /imaging/storage/{storageName}/exist | Check if storage exists
[**updateImage**](ImagingApi.md#updateImage) | **GET** /imaging/{name}/updateImage | Perform scaling, cropping and flipping of an existing image in a single request.
[**updateImageFeatures**](ImagingApi.md#updateImageFeatures) | **PUT** /imaging/ai/imageSearch/{searchContextId}/features | Update images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
[**updateSearchImage**](ImagingApi.md#updateSearchImage) | **PUT** /imaging/ai/imageSearch/{searchContextId}/image | Update image and images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
[**uploadFile**](ImagingApi.md#uploadFile) | **PUT** /imaging/storage/file/{path} | Upload file


<a name="addSearchImage"></a>
# **addSearchImage**
> addSearchImage(searchContextId, imageId, opts)

Add image and images features to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | Search context identifier.

var imageId = "imageId_example"; // String | Image identifier.

var opts = { 
  'imageData': "/path/to/file.txt", // File | Input image
  'folder': "folder_example", // String | Folder.
  'storage': "storage_example" // String | Storage
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addSearchImage(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| Search context identifier. | 
 **imageId** | **String**| Image identifier. | 
 **imageData** | **File**| Input image | [optional] 
 **folder** | **String**| Folder. | [optional] 
 **storage** | **String**| Storage | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="appendTiff"></a>
# **appendTiff**
> appendTiff(name, appendFile, opts)

Appends existing TIFF image to another existing TIFF image (i.e. merges TIFF images).

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Original image file name.

var appendFile = "appendFile_example"; // String | Image file name to be appended to original one.

var opts = { 
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'folder': "folder_example" // String | Folder with images to process.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.appendTiff(name, appendFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Original image file name. | 
 **appendFile** | **String**| Image file name to be appended to original one. | 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **folder** | **String**| Folder with images to process. | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="compareImages"></a>
# **compareImages**
> SearchResultsSet compareImages(searchContextId, imageId1, opts)

Compare two images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var imageId1 = "imageId1_example"; // String | The first image Id in storage.

var opts = { 
  'imageData': "/path/to/file.txt", // File | Input image
  'imageId2': "imageId2_example", // String | The second image Id in storage or null (if image loading in request).
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.compareImages(searchContextId, imageId1, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **imageId1** | **String**| The first image Id in storage. | 
 **imageData** | **File**| Input image | [optional] 
 **imageId2** | **String**| The second image Id in storage or null (if image loading in request). | [optional] 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**SearchResultsSet**](SearchResultsSet.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertImage"></a>
# **convertImage**
> File convertImage(name, format, opts)

Convert existing image to another format.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var format = "format_example"; // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.

var opts = { 
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertImage(name, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="convertTiffToFax"></a>
# **convertTiffToFax**
> File convertTiffToFax(name, opts)

Update parameters of existing TIFF image accordingly to fax parameters.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var opts = { 
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'folder': "folder_example" // String | Folder with image to process.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertTiffToFax(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **folder** | **String**| Folder with image to process. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyFile"></a>
# **copyFile**
> copyFile(srcPath, destPath, opts)

Copy file

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var srcPath = "srcPath_example"; // String | Source file path e.g. '/folder/file.ext'

var destPath = "destPath_example"; // String | Destination file path

var opts = { 
  'srcStorageName': "srcStorageName_example", // String | Source storage name
  'destStorageName': "destStorageName_example", // String | Destination storage name
  'versionId': "versionId_example" // String | File version ID to copy
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.copyFile(srcPath, destPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **String**| Source file path e.g. &#39;/folder/file.ext&#39; | 
 **destPath** | **String**| Destination file path | 
 **srcStorageName** | **String**| Source storage name | [optional] 
 **destStorageName** | **String**| Destination storage name | [optional] 
 **versionId** | **String**| File version ID to copy | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyFolder"></a>
# **copyFolder**
> copyFolder(srcPath, destPath, opts)

Copy folder

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var srcPath = "srcPath_example"; // String | Source folder path e.g. '/src'

var destPath = "destPath_example"; // String | Destination folder path e.g. '/dst'

var opts = { 
  'srcStorageName': "srcStorageName_example", // String | Source storage name
  'destStorageName': "destStorageName_example" // String | Destination storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.copyFolder(srcPath, destPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **String**| Source folder path e.g. &#39;/src&#39; | 
 **destPath** | **String**| Destination folder path e.g. &#39;/dst&#39; | 
 **srcStorageName** | **String**| Source storage name | [optional] 
 **destStorageName** | **String**| Destination storage name | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createConvertedImage"></a>
# **createConvertedImage**
> File createConvertedImage(imageData, format, opts)

Convert existing image to another format. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.             

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var format = "format_example"; // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.

var opts = { 
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createConvertedImage(imageData, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createCroppedImage"></a>
# **createCroppedImage**
> File createCroppedImage(imageData, x, y, width, height, opts)

Crop an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var x = 56; // Number | X position of start point for cropping rectangle.

var y = 56; // Number | Y position of start point for cropping rectangle.

var width = 56; // Number | Width of cropping rectangle.

var height = 56; // Number | Height of cropping rectangle.

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCroppedImage(imageData, x, y, width, height, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **x** | **Number**| X position of start point for cropping rectangle. | 
 **y** | **Number**| Y position of start point for cropping rectangle. | 
 **width** | **Number**| Width of cropping rectangle. | 
 **height** | **Number**| Height of cropping rectangle. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createDeskewedImage"></a>
# **createDeskewedImage**
> File createDeskewedImage(imageData, resizeProportionally, opts)

Deskew an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var resizeProportionally = true; // Boolean | Resize proportionally

var opts = { 
  'bkColor': "bkColor_example", // String | Background color
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image)
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDeskewedImage(imageData, resizeProportionally, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **resizeProportionally** | **Boolean**| Resize proportionally | 
 **bkColor** | **String**| Background color | [optional] 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image) | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createFaxTiff"></a>
# **createFaxTiff**
> File createFaxTiff(imageData, opts)

Update parameters of TIFF image accordingly to fax parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFaxTiff(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createFolder"></a>
# **createFolder**
> createFolder(path, opts)

Create the folder

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | Folder path to create e.g. 'folder_1/folder_2/'

var opts = { 
  'storageName': "storageName_example" // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createFolder(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path to create e.g. &#39;folder_1/folder_2/&#39; | 
 **storageName** | **String**| Storage name | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGrayscaledImage"></a>
# **createGrayscaledImage**
> File createGrayscaledImage(imageData, opts)

Grayscales an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image)
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createGrayscaledImage(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image) | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageFeatures"></a>
# **createImageFeatures**
> createImageFeatures(searchContextId, opts)

Extract images features and add them to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var opts = { 
  'imageData': "/path/to/file.txt", // File | Input image
  'imageId': "imageId_example", // String | The image identifier.
  'imagesFolder': "imagesFolder_example", // String | Images source - a folder
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createImageFeatures(searchContextId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **imageData** | **File**| Input image | [optional] 
 **imageId** | **String**| The image identifier. | [optional] 
 **imagesFolder** | **String**| Images source - a folder | [optional] 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageFrame"></a>
# **createImageFrame**
> File createImageFrame(imageData, frameId, opts)

Get separate frame from existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var frameId = 56; // Number | Number of a frame.

var opts = { 
  'newWidth': 56, // Number | New width.
  'newHeight': 56, // Number | New height.
  'x': 56, // Number | X position of start point for cropping rectangle.
  'y': 56, // Number | Y position of start point for cropping rectangle.
  'rectWidth': 56, // Number | Width of cropping rectangle.
  'rectHeight': 56, // Number | Height of cropping rectangle.
  'rotateFlipMethod': "rotateFlipMethod_example", // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
  'saveOtherFrames': false, // Boolean | If result will include all other frames or just a specified frame.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImageFrame(imageData, frameId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **frameId** | **Number**| Number of a frame. | 
 **newWidth** | **Number**| New width. | [optional] 
 **newHeight** | **Number**| New height. | [optional] 
 **x** | **Number**| X position of start point for cropping rectangle. | [optional] 
 **y** | **Number**| Y position of start point for cropping rectangle. | [optional] 
 **rectWidth** | **Number**| Width of cropping rectangle. | [optional] 
 **rectHeight** | **Number**| Height of cropping rectangle. | [optional] 
 **rotateFlipMethod** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | [optional] 
 **saveOtherFrames** | **Boolean**| If result will include all other frames or just a specified frame. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageFrameRange"></a>
# **createImageFrameRange**
> File createImageFrameRange(imageData, startFrameId, endFrameId, opts)

Get frames range from existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var startFrameId = 56; // Number | Index of the first frame in range.

var endFrameId = 56; // Number | Index of the last frame in range.

var opts = { 
  'newWidth': 56, // Number | New width.
  'newHeight': 56, // Number | New height.
  'x': 56, // Number | X position of start point for cropping rectangle.
  'y': 56, // Number | Y position of start point for cropping rectangle.
  'rectWidth': 56, // Number | Width of cropping rectangle.
  'rectHeight': 56, // Number | Height of cropping rectangle.
  'rotateFlipMethod': "rotateFlipMethod_example", // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
  'saveOtherFrames': false, // Boolean | If result will include all other frames or just a specified frame.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImageFrameRange(imageData, startFrameId, endFrameId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **startFrameId** | **Number**| Index of the first frame in range. | 
 **endFrameId** | **Number**| Index of the last frame in range. | 
 **newWidth** | **Number**| New width. | [optional] 
 **newHeight** | **Number**| New height. | [optional] 
 **x** | **Number**| X position of start point for cropping rectangle. | [optional] 
 **y** | **Number**| Y position of start point for cropping rectangle. | [optional] 
 **rectWidth** | **Number**| Width of cropping rectangle. | [optional] 
 **rectHeight** | **Number**| Height of cropping rectangle. | [optional] 
 **rotateFlipMethod** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | [optional] 
 **saveOtherFrames** | **Boolean**| If result will include all other frames or just a specified frame. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageSearch"></a>
# **createImageSearch**
> SearchContextStatus createImageSearch(opts)

Create new search context.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var opts = { 
  'detector': "akaze", // String | The image features detector.
  'matchingAlgorithm': "randomBinaryTree", // String | The matching algorithm.
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImageSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detector** | **String**| The image features detector. | [optional] [default to akaze]
 **matchingAlgorithm** | **String**| The matching algorithm. | [optional] [default to randomBinaryTree]
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**SearchContextStatus**](SearchContextStatus.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createImageTag"></a>
# **createImageTag**
> createImageTag(imageData, searchContextId, tagName, opts)

Add tag and reference image to search context. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var tagName = "tagName_example"; // String | The tag.

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createImageTag(imageData, searchContextId, tagName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **searchContextId** | **String**| The search context identifier. | 
 **tagName** | **String**| The tag. | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedBmp"></a>
# **createModifiedBmp**
> File createModifiedBmp(imageData, bitsPerPixel, horizontalResolution, verticalResolution, opts)

Update parameters of BMP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var bitsPerPixel = 56; // Number | Color depth.

var horizontalResolution = 56; // Number | New horizontal resolution.

var verticalResolution = 56; // Number | New vertical resolution.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedBmp(imageData, bitsPerPixel, horizontalResolution, verticalResolution, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **bitsPerPixel** | **Number**| Color depth. | 
 **horizontalResolution** | **Number**| New horizontal resolution. | 
 **verticalResolution** | **Number**| New vertical resolution. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedEmf"></a>
# **createModifiedEmf**
> File createModifiedEmf(imageData, bkColor, pageWidth, pageHeight, borderX, borderY, opts)

Process existing EMF imaging using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var bkColor = "bkColor_example"; // String | Color of the background.

var pageWidth = 56; // Number | Width of the page.

var pageHeight = 56; // Number | Height of the page.

var borderX = 56; // Number | Border width.

var borderY = 56; // Number | Border height.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'format': "png" // String | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedEmf(imageData, bkColor, pageWidth, pageHeight, borderX, borderY, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **bkColor** | **String**| Color of the background. | 
 **pageWidth** | **Number**| Width of the page. | 
 **pageHeight** | **Number**| Height of the page. | 
 **borderX** | **Number**| Border width. | 
 **borderY** | **Number**| Border height. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **format** | **String**| Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] [default to png]

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedGif"></a>
# **createModifiedGif**
> File createModifiedGif(imageData, opts)

Update parameters of GIF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'backgroundColorIndex': 32, // Number | Index of the background color.
  'colorResolution': 3, // Number | Color resolution.
  'hasTrailer': true, // Boolean | Specifies if image has trailer.
  'interlaced': true, // Boolean | Specifies if image is interlaced.
  'isPaletteSorted': false, // Boolean | Specifies if palette is sorted.
  'pixelAspectRatio': 3, // Number | Pixel aspect ratio.
  'fromScratch': true, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedGif(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **backgroundColorIndex** | **Number**| Index of the background color. | [optional] [default to 32]
 **colorResolution** | **Number**| Color resolution. | [optional] [default to 3]
 **hasTrailer** | **Boolean**| Specifies if image has trailer. | [optional] [default to true]
 **interlaced** | **Boolean**| Specifies if image is interlaced. | [optional] [default to true]
 **isPaletteSorted** | **Boolean**| Specifies if palette is sorted. | [optional] [default to false]
 **pixelAspectRatio** | **Number**| Pixel aspect ratio. | [optional] [default to 3]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to true]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedJpeg"></a>
# **createModifiedJpeg**
> File createModifiedJpeg(imageData, opts)

Update parameters of JPEG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'quality': 75, // Number | Quality of an image from 0 to 100. Default is 75.
  'compressionType': "baseline", // String | Compression type: baseline (default), progressive, lossless or jpegls.
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedJpeg(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **quality** | **Number**| Quality of an image from 0 to 100. Default is 75. | [optional] [default to 75]
 **compressionType** | **String**| Compression type: baseline (default), progressive, lossless or jpegls. | [optional] [default to baseline]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedJpeg2000"></a>
# **createModifiedJpeg2000**
> File createModifiedJpeg2000(imageData, comment, opts)

Update parameters of JPEG2000 image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var comment = "comment_example"; // String | The comment (can be either single or comma-separated).

var opts = { 
  'codec': "j2k", // String | The codec (j2k or jp2).
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedJpeg2000(imageData, comment, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **comment** | **String**| The comment (can be either single or comma-separated). | 
 **codec** | **String**| The codec (j2k or jp2). | [optional] [default to j2k]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedPsd"></a>
# **createModifiedPsd**
> File createModifiedPsd(imageData, opts)

Update parameters of PSD image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'channelsCount': 4, // Number | Count of color channels.
  'compressionMethod': "rle", // String | Compression method (for now, raw and RLE are supported).
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedPsd(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **channelsCount** | **Number**| Count of color channels. | [optional] [default to 4]
 **compressionMethod** | **String**| Compression method (for now, raw and RLE are supported). | [optional] [default to rle]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedSvg"></a>
# **createModifiedSvg**
> File createModifiedSvg(imageData, opts)

Update parameters of SVG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'colorType': "Rgb", // String | Color type for SVG image. Only RGB is supported for now.
  'textAsShapes': false, // Boolean | Whether text must be converted as shapes. true if all text is turned into SVG shapes in the convertion; otherwise, false
  'scaleX': 0.0, // Number | Scale X.
  'scaleY': 0.0, // Number | Scale Y.
  'pageWidth': 56, // Number | Width of the page.
  'pageHeight': 56, // Number | Height of the page.
  'borderX': 56, // Number | Border width. Only 0 is supported for now.
  'borderY': 56, // Number | Border height. Only 0 is supported for now.
  'bkColor': "white", // String | Background color (Default is white).
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'format': "png" // String | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedSvg(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **colorType** | **String**| Color type for SVG image. Only RGB is supported for now. | [optional] [default to Rgb]
 **textAsShapes** | **Boolean**| Whether text must be converted as shapes. true if all text is turned into SVG shapes in the convertion; otherwise, false | [optional] [default to false]
 **scaleX** | **Number**| Scale X. | [optional] [default to 0.0]
 **scaleY** | **Number**| Scale Y. | [optional] [default to 0.0]
 **pageWidth** | **Number**| Width of the page. | [optional] 
 **pageHeight** | **Number**| Height of the page. | [optional] 
 **borderX** | **Number**| Border width. Only 0 is supported for now. | [optional] 
 **borderY** | **Number**| Border height. Only 0 is supported for now. | [optional] 
 **bkColor** | **String**| Background color (Default is white). | [optional] [default to white]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **format** | **String**| Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] [default to png]

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedTiff"></a>
# **createModifiedTiff**
> File createModifiedTiff(imageData, bitDepth, opts)

Update parameters of TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var bitDepth = 56; // Number | Bit depth.

var opts = { 
  'compression': "compression_example", // String | Compression (none is default). Please, refer to https://apireference.aspose.com/net/imaging/aspose.imaging.fileformats.tiff.enums/tiffcompressions for all possible values.
  'resolutionUnit': "resolutionUnit_example", // String | New resolution unit (none - the default one, inch or centimeter).
  'horizontalResolution': 0.0, // Number | New horizontal resolution.
  'verticalResolution': 0.0, // Number | New vertical resolution.
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedTiff(imageData, bitDepth, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **bitDepth** | **Number**| Bit depth. | 
 **compression** | **String**| Compression (none is default). Please, refer to https://apireference.aspose.com/net/imaging/aspose.imaging.fileformats.tiff.enums/tiffcompressions for all possible values. | [optional] 
 **resolutionUnit** | **String**| New resolution unit (none - the default one, inch or centimeter). | [optional] 
 **horizontalResolution** | **Number**| New horizontal resolution. | [optional] [default to 0.0]
 **verticalResolution** | **Number**| New vertical resolution. | [optional] [default to 0.0]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedWebP"></a>
# **createModifiedWebP**
> File createModifiedWebP(imageData, lossLess, quality, animLoopCount, animBackgroundColor, opts)

Update parameters of WEBP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var lossLess = true; // Boolean | If WEBP should be in lossless format.

var quality = 56; // Number | Quality (0-100).

var animLoopCount = 56; // Number | The animation loop count.

var animBackgroundColor = "animBackgroundColor_example"; // String | Color of the animation background.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedWebP(imageData, lossLess, quality, animLoopCount, animBackgroundColor, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **lossLess** | **Boolean**| If WEBP should be in lossless format. | 
 **quality** | **Number**| Quality (0-100). | 
 **animLoopCount** | **Number**| The animation loop count. | 
 **animBackgroundColor** | **String**| Color of the animation background. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedWmf"></a>
# **createModifiedWmf**
> File createModifiedWmf(imageData, bkColor, pageWidth, pageHeight, borderX, borderY, opts)

Process existing WMF image using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var bkColor = "bkColor_example"; // String | Color of the background.

var pageWidth = 56; // Number | Width of the page.

var pageHeight = 56; // Number | Height of the page.

var borderX = 56; // Number | Border width.

var borderY = 56; // Number | Border height.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'format': "png" // String | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModifiedWmf(imageData, bkColor, pageWidth, pageHeight, borderX, borderY, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **bkColor** | **String**| Color of the background. | 
 **pageWidth** | **Number**| Width of the page. | 
 **pageHeight** | **Number**| Height of the page. | 
 **borderX** | **Number**| Border width. | 
 **borderY** | **Number**| Border height. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **format** | **String**| Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] [default to png]

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createObjectBounds"></a>
# **createObjectBounds**
> DetectedObjectList createObjectBounds(imageData, opts)

Detects objects bounds. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'method': "ssd", // String | Object detection method
  'threshold': 50, // Number | Object detection probability threshold in percents
  'includeLabel': false, // Boolean | Draw detected objects labels
  'includeScore': false, // Boolean | Draw detected objects scores
  'allowedLabels': "", // String | Comma-separated list of allowed labels
  'blockedLabels': "", // String | Comma-separated list of blocked labels
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image)
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createObjectBounds(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **method** | **String**| Object detection method | [optional] [default to ssd]
 **threshold** | **Number**| Object detection probability threshold in percents | [optional] [default to 50]
 **includeLabel** | **Boolean**| Draw detected objects labels | [optional] [default to false]
 **includeScore** | **Boolean**| Draw detected objects scores | [optional] [default to false]
 **allowedLabels** | **String**| Comma-separated list of allowed labels | [optional] [default to ]
 **blockedLabels** | **String**| Comma-separated list of blocked labels | [optional] [default to ]
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image) | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

[**DetectedObjectList**](DetectedObjectList.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createResizedImage"></a>
# **createResizedImage**
> File createResizedImage(imageData, newWidth, newHeight, opts)

Resize an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var newWidth = 56; // Number | New width.

var newHeight = 56; // Number | New height.

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createResizedImage(imageData, newWidth, newHeight, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **newWidth** | **Number**| New width. | 
 **newHeight** | **Number**| New height. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createRotateFlippedImage"></a>
# **createRotateFlippedImage**
> File createRotateFlippedImage(imageData, method, opts)

Rotate and/or flip an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var method = "method_example"; // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY).

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRotateFlippedImage(imageData, method, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **method** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createUpdatedImage"></a>
# **createUpdatedImage**
> File createUpdatedImage(imageData, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, opts)

Perform scaling, cropping and flipping of an image in a single request. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var newWidth = 56; // Number | New width of the scaled image.

var newHeight = 56; // Number | New height of the scaled image.

var x = 56; // Number | X position of start point for cropping rectangle.

var y = 56; // Number | Y position of start point for cropping rectangle.

var rectWidth = 56; // Number | Width of cropping rectangle.

var rectHeight = 56; // Number | Height of cropping rectangle.

var rotateFlipMethod = "rotateFlipMethod_example"; // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image).
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUpdatedImage(imageData, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **newWidth** | **Number**| New width of the scaled image. | 
 **newHeight** | **Number**| New height of the scaled image. | 
 **x** | **Number**| X position of start point for cropping rectangle. | 
 **y** | **Number**| Y position of start point for cropping rectangle. | 
 **rectWidth** | **Number**| Width of cropping rectangle. | 
 **rectHeight** | **Number**| Height of cropping rectangle. | 
 **rotateFlipMethod** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image). | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createVisualObjectBounds"></a>
# **createVisualObjectBounds**
> File createVisualObjectBounds(imageData, opts)

Detects objects bounds and draw them on the original image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var opts = { 
  'method': "ssd", // String | Object detection method
  'threshold': 50, // Number | Object detection probability threshold in percents
  'includeLabel': false, // Boolean | Draw detected objects classes
  'includeScore': false, // Boolean | Draw detected objects scores
  'allowedLabels': "", // String | Comma-separated list of allowed labels
  'blockedLabels': "", // String | Comma-separated list of blocked labels
  'color': "color_example", // String | Bounds, labels, and scores text color
  'outPath': "outPath_example", // String | Path to updated file (if this is empty, response contains streamed image)
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVisualObjectBounds(imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **method** | **String**| Object detection method | [optional] [default to ssd]
 **threshold** | **Number**| Object detection probability threshold in percents | [optional] [default to 50]
 **includeLabel** | **Boolean**| Draw detected objects classes | [optional] [default to false]
 **includeScore** | **Boolean**| Draw detected objects scores | [optional] [default to false]
 **allowedLabels** | **String**| Comma-separated list of allowed labels | [optional] [default to ]
 **blockedLabels** | **String**| Comma-separated list of blocked labels | [optional] [default to ]
 **color** | **String**| Bounds, labels, and scores text color | [optional] 
 **outPath** | **String**| Path to updated file (if this is empty, response contains streamed image) | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createWebSiteImageFeatures"></a>
# **createWebSiteImageFeatures**
> createWebSiteImageFeatures(searchContextId, imagesSource, opts)

Extract images features from web page and add them to search context

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var imagesSource = "imagesSource_example"; // String | Images source - a web page

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createWebSiteImageFeatures(searchContextId, imagesSource, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **imagesSource** | **String**| Images source - a web page | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cropImage"></a>
# **cropImage**
> File cropImage(name, x, y, width, height, opts)

Crop an existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of an image.

var x = 56; // Number | X position of start point for cropping rectangle.

var y = 56; // Number | Y position of start point for cropping rectangle.

var width = 56; // Number | Width of cropping rectangle

var height = 56; // Number | Height of cropping rectangle.

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cropImage(name, x, y, width, height, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of an image. | 
 **x** | **Number**| X position of start point for cropping rectangle. | 
 **y** | **Number**| Y position of start point for cropping rectangle. | 
 **width** | **Number**| Width of cropping rectangle | 
 **height** | **Number**| Height of cropping rectangle. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFile"></a>
# **deleteFile**
> deleteFile(path, opts)

Delete file

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | File path e.g. '/folder/file.ext'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'versionId': "versionId_example" // String | File version ID to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFile(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| File path e.g. &#39;/folder/file.ext&#39; | 
 **storageName** | **String**| Storage name | [optional] 
 **versionId** | **String**| File version ID to delete | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
# **deleteFolder**
> deleteFolder(path, opts)

Delete folder

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | Folder path e.g. '/folder'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'recursive': false // Boolean | Enable to delete folders, subfolders and files
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFolder(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path e.g. &#39;/folder&#39; | 
 **storageName** | **String**| Storage name | [optional] 
 **recursive** | **Boolean**| Enable to delete folders, subfolders and files | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImageFeatures"></a>
# **deleteImageFeatures**
> deleteImageFeatures(searchContextId, imageId, opts)

Deletes image features from search context.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var imageId = "imageId_example"; // String | The image identifier.

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteImageFeatures(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **imageId** | **String**| The image identifier. | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImageSearch"></a>
# **deleteImageSearch**
> deleteImageSearch(searchContextId, opts)

Deletes the search context.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteImageSearch(searchContextId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSearchImage"></a>
# **deleteSearchImage**
> deleteSearchImage(searchContextId, imageId, opts)

Delete image and images features from search context

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | Search context identifier.

var imageId = "imageId_example"; // String | Image identifier.

var opts = { 
  'folder': "folder_example", // String | Folder.
  'storage': "storage_example" // String | Storage
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSearchImage(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| Search context identifier. | 
 **imageId** | **String**| Image identifier. | 
 **folder** | **String**| Folder. | [optional] 
 **storage** | **String**| Storage | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deskewImage"></a>
# **deskewImage**
> File deskewImage(name, resizeProportionally, opts)

Deskew an existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Image file name.

var resizeProportionally = true; // Boolean | Resize proportionally

var opts = { 
  'bkColor': "bkColor_example", // String | Background color
  'folder': "folder_example", // String | Folder
  'storage': "storage_example" // String | Storage
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deskewImage(name, resizeProportionally, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image file name. | 
 **resizeProportionally** | **Boolean**| Resize proportionally | 
 **bkColor** | **String**| Background color | [optional] 
 **folder** | **String**| Folder | [optional] 
 **storage** | **String**| Storage | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadFile"></a>
# **downloadFile**
> File downloadFile(path, opts)

Download file

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | File path e.g. '/folder/file.ext'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'versionId': "versionId_example" // String | File version ID to download
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadFile(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| File path e.g. &#39;/folder/file.ext&#39; | 
 **storageName** | **String**| Storage name | [optional] 
 **versionId** | **String**| File version ID to download | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="extractImageFeatures"></a>
# **extractImageFeatures**
> ImageFeatures extractImageFeatures(searchContextId, imageId, opts)

Extract features from image without adding to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var imageId = "imageId_example"; // String | The image identifier.

var opts = { 
  'imageData': "/path/to/file.txt", // File | Input image
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.extractImageFeatures(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **imageId** | **String**| The image identifier. | 
 **imageData** | **File**| Input image | [optional] 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**ImageFeatures**](ImageFeatures.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="extractImageFrameProperties"></a>
# **extractImageFrameProperties**
> ImagingResponse extractImageFrameProperties(imageData, frameId)

Get separate frame properties of existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image

var frameId = 56; // Number | Number of a frame.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.extractImageFrameProperties(imageData, frameId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 
 **frameId** | **Number**| Number of a frame. | 

### Return type

[**ImagingResponse**](ImagingResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="extractImageProperties"></a>
# **extractImageProperties**
> ImagingResponse extractImageProperties(imageData)

Get properties of an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var imageData = "/path/to/file.txt"; // File | Input image


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.extractImageProperties(imageData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageData** | **File**| Input image | 

### Return type

[**ImagingResponse**](ImagingResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="filterEffectImage"></a>
# **filterEffectImage**
> File filterEffectImage(name, filterType, filterProperties, opts)

Apply filtering effects to an existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of an image.

var filterType = "filterType_example"; // String | Filter type (BigRectangular, SmallRectangular, Median, GaussWiener, MotionWiener, GaussianBlur, Sharpen, BilateralSmoothing).

var filterProperties = new AsposeimagingCloudApiReference.FilterPropertiesBase(); // FilterPropertiesBase | Filter properties.

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterEffectImage(name, filterType, filterProperties, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of an image. | 
 **filterType** | **String**| Filter type (BigRectangular, SmallRectangular, Median, GaussWiener, MotionWiener, GaussianBlur, Sharpen, BilateralSmoothing). | 
 **filterProperties** | [**FilterPropertiesBase**](FilterPropertiesBase.md)| Filter properties. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json

<a name="findImageDuplicates"></a>
# **findImageDuplicates**
> ImageDuplicatesSet findImageDuplicates(searchContextId, similarityThreshold, opts)

Find images duplicates.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var similarityThreshold = 1.2; // Number | The similarity threshold.

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findImageDuplicates(searchContextId, similarityThreshold, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **similarityThreshold** | **Number**| The similarity threshold. | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**ImageDuplicatesSet**](ImageDuplicatesSet.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findImagesByTags"></a>
# **findImagesByTags**
> SearchResultsSet findImagesByTags(tags, searchContextId, similarityThreshold, maxCount, opts)

Find images by tags. Tags JSON string is passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var tags = "tags_example"; // String | Tags array for searching

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var similarityThreshold = 1.2; // Number | The similarity threshold.

var maxCount = 56; // Number | The maximum count.

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findImagesByTags(tags, searchContextId, similarityThreshold, maxCount, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | **String**| Tags array for searching | 
 **searchContextId** | **String**| The search context identifier. | 
 **similarityThreshold** | **Number**| The similarity threshold. | 
 **maxCount** | **Number**| The maximum count. | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**SearchResultsSet**](SearchResultsSet.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="findSimilarImages"></a>
# **findSimilarImages**
> SearchResultsSet findSimilarImages(searchContextId, similarityThreshold, maxCount, opts)

Find similar images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var similarityThreshold = 1.2; // Number | The similarity threshold.

var maxCount = 56; // Number | The maximum count.

var opts = { 
  'imageData': "/path/to/file.txt", // File | Input image
  'imageId': "imageId_example", // String | The search image identifier.
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findSimilarImages(searchContextId, similarityThreshold, maxCount, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **similarityThreshold** | **Number**| The similarity threshold. | 
 **maxCount** | **Number**| The maximum count. | 
 **imageData** | **File**| Input image | [optional] 
 **imageId** | **String**| The search image identifier. | [optional] 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**SearchResultsSet**](SearchResultsSet.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getAvailableLabels"></a>
# **getAvailableLabels**
> AvailableLabelsList getAvailableLabels(method)

Gets available labels for selected object detection method.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var method = "method_example"; // String | Object detection method


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvailableLabels(method, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **method** | **String**| Object detection method | 

### Return type

[**AvailableLabelsList**](AvailableLabelsList.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiscUsage"></a>
# **getDiscUsage**
> DiscUsage getDiscUsage(opts)

Get disc usage

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var opts = { 
  'storageName': "storageName_example" // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscUsage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageName** | **String**| Storage name | [optional] 

### Return type

[**DiscUsage**](DiscUsage.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileVersions"></a>
# **getFileVersions**
> FileVersions getFileVersions(path, opts)

Get file versions

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | File path e.g. '/file.ext'

var opts = { 
  'storageName': "storageName_example" // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFileVersions(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| File path e.g. &#39;/file.ext&#39; | 
 **storageName** | **String**| Storage name | [optional] 

### Return type

[**FileVersions**](FileVersions.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFilesList"></a>
# **getFilesList**
> FilesList getFilesList(path, opts)

Get all files and folders within a folder

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | Folder path e.g. '/folder'

var opts = { 
  'storageName': "storageName_example" // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFilesList(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path e.g. &#39;/folder&#39; | 
 **storageName** | **String**| Storage name | [optional] 

### Return type

[**FilesList**](FilesList.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageFeatures"></a>
# **getImageFeatures**
> ImageFeatures getImageFeatures(searchContextId, imageId, opts)

Gets image features from search context.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var imageId = "imageId_example"; // String | The image identifier.

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageFeatures(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **imageId** | **String**| The image identifier. | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**ImageFeatures**](ImageFeatures.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageFrame"></a>
# **getImageFrame**
> File getImageFrame(name, frameId, opts)

Get separate frame from existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var frameId = 56; // Number | Number of a frame.

var opts = { 
  'newWidth': 56, // Number | New width.
  'newHeight': 56, // Number | New height.
  'x': 56, // Number | X position of start point for cropping rectangle.
  'y': 56, // Number | Y position of start point for cropping rectangle.
  'rectWidth': 56, // Number | Width of cropping rectangle.
  'rectHeight': 56, // Number | Height of cropping rectangle.
  'rotateFlipMethod': "rotateFlipMethod_example", // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
  'saveOtherFrames': false, // Boolean | If result will include all other frames or just a specified frame.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageFrame(name, frameId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **frameId** | **Number**| Number of a frame. | 
 **newWidth** | **Number**| New width. | [optional] 
 **newHeight** | **Number**| New height. | [optional] 
 **x** | **Number**| X position of start point for cropping rectangle. | [optional] 
 **y** | **Number**| Y position of start point for cropping rectangle. | [optional] 
 **rectWidth** | **Number**| Width of cropping rectangle. | [optional] 
 **rectHeight** | **Number**| Height of cropping rectangle. | [optional] 
 **rotateFlipMethod** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | [optional] 
 **saveOtherFrames** | **Boolean**| If result will include all other frames or just a specified frame. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageFrameProperties"></a>
# **getImageFrameProperties**
> ImagingResponse getImageFrameProperties(name, frameId, opts)

Get separate frame properties of existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename with image.

var frameId = 56; // Number | Number of a frame.

var opts = { 
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageFrameProperties(name, frameId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename with image. | 
 **frameId** | **Number**| Number of a frame. | 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

[**ImagingResponse**](ImagingResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageFrameRange"></a>
# **getImageFrameRange**
> File getImageFrameRange(name, startFrameId, endFrameId, opts)

Get frames range from existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var startFrameId = 56; // Number | Index of the first frame in range.

var endFrameId = 56; // Number | Index of the last frame in range.

var opts = { 
  'newWidth': 56, // Number | New width.
  'newHeight': 56, // Number | New height.
  'x': 56, // Number | X position of start point for cropping rectangle.
  'y': 56, // Number | Y position of start point for cropping rectangle.
  'rectWidth': 56, // Number | Width of cropping rectangle.
  'rectHeight': 56, // Number | Height of cropping rectangle.
  'rotateFlipMethod': "rotateFlipMethod_example", // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.
  'saveOtherFrames': false, // Boolean | If result will include all other frames or just a specified frame.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageFrameRange(name, startFrameId, endFrameId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **startFrameId** | **Number**| Index of the first frame in range. | 
 **endFrameId** | **Number**| Index of the last frame in range. | 
 **newWidth** | **Number**| New width. | [optional] 
 **newHeight** | **Number**| New height. | [optional] 
 **x** | **Number**| X position of start point for cropping rectangle. | [optional] 
 **y** | **Number**| Y position of start point for cropping rectangle. | [optional] 
 **rectWidth** | **Number**| Width of cropping rectangle. | [optional] 
 **rectHeight** | **Number**| Height of cropping rectangle. | [optional] 
 **rotateFlipMethod** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | [optional] 
 **saveOtherFrames** | **Boolean**| If result will include all other frames or just a specified frame. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageProperties"></a>
# **getImageProperties**
> ImagingResponse getImageProperties(name, opts)

Get properties of an image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of an image.

var opts = { 
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageProperties(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of an image. | 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

[**ImagingResponse**](ImagingResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageSearchStatus"></a>
# **getImageSearchStatus**
> SearchContextStatus getImageSearchStatus(searchContextId, opts)

Gets the search context status.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var opts = { 
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImageSearchStatus(searchContextId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

[**SearchContextStatus**](SearchContextStatus.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getObjectBounds"></a>
# **getObjectBounds**
> DetectedObjectList getObjectBounds(name, opts)

Detects objects&#39; bounds

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Image file name.

var opts = { 
  'method': "ssd", // String | Object detection method
  'threshold': 50, // Number | Object detection probability threshold in percents
  'includeLabel': false, // Boolean | Return detected objects labels
  'includeScore': false, // Boolean | Return detected objects score
  'allowedLabels': "", // String | Comma-separated list of allowed labels
  'blockedLabels': "", // String | Comma-separated list of blocked labels
  'folder': "folder_example", // String | Folder
  'storage': "storage_example" // String | Storage
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getObjectBounds(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image file name. | 
 **method** | **String**| Object detection method | [optional] [default to ssd]
 **threshold** | **Number**| Object detection probability threshold in percents | [optional] [default to 50]
 **includeLabel** | **Boolean**| Return detected objects labels | [optional] [default to false]
 **includeScore** | **Boolean**| Return detected objects score | [optional] [default to false]
 **allowedLabels** | **String**| Comma-separated list of allowed labels | [optional] [default to ]
 **blockedLabels** | **String**| Comma-separated list of blocked labels | [optional] [default to ]
 **folder** | **String**| Folder | [optional] 
 **storage** | **String**| Storage | [optional] 

### Return type

[**DetectedObjectList**](DetectedObjectList.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSearchImage"></a>
# **getSearchImage**
> File getSearchImage(searchContextId, imageId, opts)

Get image from search context

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | Search context identifier.

var imageId = "imageId_example"; // String | Image identifier.

var opts = { 
  'folder': "folder_example", // String | Folder.
  'storage': "storage_example" // String | Storage
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSearchImage(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| Search context identifier. | 
 **imageId** | **String**| Image identifier. | 
 **folder** | **String**| Folder. | [optional] 
 **storage** | **String**| Storage | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVisualObjectBounds"></a>
# **getVisualObjectBounds**
> File getVisualObjectBounds(name, opts)

Detects objects bounds and draw them on the original image

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | The image features detector.

var opts = { 
  'method': "ssd", // String | Object detection method
  'threshold': 50, // Number | Object detection probability threshold in percents
  'includeLabel': false, // Boolean | Draw detected objects labels
  'includeScore': false, // Boolean | Draw detected objects scores
  'allowedLabels': "", // String | Comma-separated list of allowed labels
  'blockedLabels': "", // String | Comma-separated list of blocked labels
  'color': "color_example", // String | Bounds, labels, and scores text color
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVisualObjectBounds(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The image features detector. | 
 **method** | **String**| Object detection method | [optional] [default to ssd]
 **threshold** | **Number**| Object detection probability threshold in percents | [optional] [default to 50]
 **includeLabel** | **Boolean**| Draw detected objects labels | [optional] [default to false]
 **includeScore** | **Boolean**| Draw detected objects scores | [optional] [default to false]
 **allowedLabels** | **String**| Comma-separated list of allowed labels | [optional] [default to ]
 **blockedLabels** | **String**| Comma-separated list of blocked labels | [optional] [default to ]
 **color** | **String**| Bounds, labels, and scores text color | [optional] 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grayscaleImage"></a>
# **grayscaleImage**
> File grayscaleImage(name, opts)

Grayscale an existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Image file name.

var opts = { 
  'folder': "folder_example", // String | Folder
  'storage': "storage_example" // String | Storage
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.grayscaleImage(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image file name. | 
 **folder** | **String**| Folder | [optional] 
 **storage** | **String**| Storage | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyBmp"></a>
# **modifyBmp**
> File modifyBmp(name, bitsPerPixel, horizontalResolution, verticalResolution, opts)

Update parameters of existing BMP image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var bitsPerPixel = 56; // Number | Color depth.

var horizontalResolution = 56; // Number | New horizontal resolution.

var verticalResolution = 56; // Number | New vertical resolution.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyBmp(name, bitsPerPixel, horizontalResolution, verticalResolution, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **bitsPerPixel** | **Number**| Color depth. | 
 **horizontalResolution** | **Number**| New horizontal resolution. | 
 **verticalResolution** | **Number**| New vertical resolution. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyEmf"></a>
# **modifyEmf**
> File modifyEmf(name, bkColor, pageWidth, pageHeight, borderX, borderY, opts)

Process existing EMF imaging using given parameters.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var bkColor = "bkColor_example"; // String | Color of the background.

var pageWidth = 56; // Number | Width of the page.

var pageHeight = 56; // Number | Height of the page.

var borderX = 56; // Number | Border width.

var borderY = 56; // Number | Border height.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'format': "png" // String | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyEmf(name, bkColor, pageWidth, pageHeight, borderX, borderY, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **bkColor** | **String**| Color of the background. | 
 **pageWidth** | **Number**| Width of the page. | 
 **pageHeight** | **Number**| Height of the page. | 
 **borderX** | **Number**| Border width. | 
 **borderY** | **Number**| Border height. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **format** | **String**| Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] [default to png]

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyGif"></a>
# **modifyGif**
> File modifyGif(name, opts)

Update parameters of existing GIF image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var opts = { 
  'backgroundColorIndex': 32, // Number | Index of the background color.
  'colorResolution': 3, // Number | Color resolution.
  'hasTrailer': true, // Boolean | Specifies if image has trailer.
  'interlaced': true, // Boolean | Specifies if image is interlaced.
  'isPaletteSorted': false, // Boolean | Specifies if palette is sorted.
  'pixelAspectRatio': 3, // Number | Pixel aspect ratio.
  'fromScratch': true, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyGif(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **backgroundColorIndex** | **Number**| Index of the background color. | [optional] [default to 32]
 **colorResolution** | **Number**| Color resolution. | [optional] [default to 3]
 **hasTrailer** | **Boolean**| Specifies if image has trailer. | [optional] [default to true]
 **interlaced** | **Boolean**| Specifies if image is interlaced. | [optional] [default to true]
 **isPaletteSorted** | **Boolean**| Specifies if palette is sorted. | [optional] [default to false]
 **pixelAspectRatio** | **Number**| Pixel aspect ratio. | [optional] [default to 3]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to true]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyJpeg"></a>
# **modifyJpeg**
> File modifyJpeg(name, opts)

Update parameters of existing JPEG image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var opts = { 
  'quality': 75, // Number | Quality of an image from 0 to 100. Default is 75.
  'compressionType': "baseline", // String | Compression type: baseline (default), progressive, lossless or jpegls.
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyJpeg(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **quality** | **Number**| Quality of an image from 0 to 100. Default is 75. | [optional] [default to 75]
 **compressionType** | **String**| Compression type: baseline (default), progressive, lossless or jpegls. | [optional] [default to baseline]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyJpeg2000"></a>
# **modifyJpeg2000**
> File modifyJpeg2000(name, comment, opts)

Update parameters of existing JPEG2000 image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var comment = "comment_example"; // String | The comment (can be either single or comma-separated).

var opts = { 
  'codec': "j2k", // String | The codec (j2k or jp2).
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyJpeg2000(name, comment, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **comment** | **String**| The comment (can be either single or comma-separated). | 
 **codec** | **String**| The codec (j2k or jp2). | [optional] [default to j2k]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyPsd"></a>
# **modifyPsd**
> File modifyPsd(name, opts)

Update parameters of existing PSD image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var opts = { 
  'channelsCount': 4, // Number | Count of color channels.
  'compressionMethod': "rle", // String | Compression method (for now, raw and RLE are supported).
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyPsd(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **channelsCount** | **Number**| Count of color channels. | [optional] [default to 4]
 **compressionMethod** | **String**| Compression method (for now, raw and RLE are supported). | [optional] [default to rle]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifySvg"></a>
# **modifySvg**
> File modifySvg(name, opts)

Update parameters of existing SVG image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var opts = { 
  'colorType': "Rgb", // String | Color type for SVG image. Only RGB is supported for now.
  'textAsShapes': false, // Boolean | Whether text must be converted as shapes. true if all text is turned into SVG shapes in the convertion; otherwise, false
  'scaleX': 0.0, // Number | Scale X.
  'scaleY': 0.0, // Number | Scale Y.
  'pageWidth': 56, // Number | Width of the page.
  'pageHeight': 56, // Number | Height of the page.
  'borderX': 56, // Number | Border width. Only 0 is supported for now.
  'borderY': 56, // Number | Border height. Only 0 is supported for now.
  'bkColor': "white", // String | Background color (Default is white).
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'format': "svg" // String | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifySvg(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **colorType** | **String**| Color type for SVG image. Only RGB is supported for now. | [optional] [default to Rgb]
 **textAsShapes** | **Boolean**| Whether text must be converted as shapes. true if all text is turned into SVG shapes in the convertion; otherwise, false | [optional] [default to false]
 **scaleX** | **Number**| Scale X. | [optional] [default to 0.0]
 **scaleY** | **Number**| Scale Y. | [optional] [default to 0.0]
 **pageWidth** | **Number**| Width of the page. | [optional] 
 **pageHeight** | **Number**| Height of the page. | [optional] 
 **borderX** | **Number**| Border width. Only 0 is supported for now. | [optional] 
 **borderY** | **Number**| Border height. Only 0 is supported for now. | [optional] 
 **bkColor** | **String**| Background color (Default is white). | [optional] [default to white]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **format** | **String**| Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] [default to svg]

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyTiff"></a>
# **modifyTiff**
> File modifyTiff(name, bitDepth, opts)

Update parameters of existing TIFF image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var bitDepth = 56; // Number | Bit depth.

var opts = { 
  'compression': "compression_example", // String | Compression (none is default). Please, refer to https://apireference.aspose.com/net/imaging/aspose.imaging.fileformats.tiff.enums/tiffcompressions for all possible values.
  'resolutionUnit': "resolutionUnit_example", // String | New resolution unit (none - the default one, inch or centimeter).
  'horizontalResolution': 0.0, // Number | New horizontal resolution.
  'verticalResolution': 0.0, // Number | New vertical resolution.
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyTiff(name, bitDepth, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **bitDepth** | **Number**| Bit depth. | 
 **compression** | **String**| Compression (none is default). Please, refer to https://apireference.aspose.com/net/imaging/aspose.imaging.fileformats.tiff.enums/tiffcompressions for all possible values. | [optional] 
 **resolutionUnit** | **String**| New resolution unit (none - the default one, inch or centimeter). | [optional] 
 **horizontalResolution** | **Number**| New horizontal resolution. | [optional] [default to 0.0]
 **verticalResolution** | **Number**| New vertical resolution. | [optional] [default to 0.0]
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyWebP"></a>
# **modifyWebP**
> File modifyWebP(name, lossLess, quality, animLoopCount, animBackgroundColor, opts)

Update parameters of existing WEBP image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var lossLess = true; // Boolean | If WEBP should be in lossless format.

var quality = 56; // Number | Quality (0-100).

var animLoopCount = 56; // Number | The animation loop count.

var animBackgroundColor = "animBackgroundColor_example"; // String | Color of the animation background.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyWebP(name, lossLess, quality, animLoopCount, animBackgroundColor, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **lossLess** | **Boolean**| If WEBP should be in lossless format. | 
 **quality** | **Number**| Quality (0-100). | 
 **animLoopCount** | **Number**| The animation loop count. | 
 **animBackgroundColor** | **String**| Color of the animation background. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyWmf"></a>
# **modifyWmf**
> File modifyWmf(name, bkColor, pageWidth, pageHeight, borderX, borderY, opts)

Process existing WMF image using given parameters.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of image.

var bkColor = "bkColor_example"; // String | Color of the background.

var pageWidth = 56; // Number | Width of the page.

var pageHeight = 56; // Number | Height of the page.

var borderX = 56; // Number | Border width.

var borderY = 56; // Number | Border height.

var opts = { 
  'fromScratch': false, // Boolean | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example", // String | Your Aspose Cloud Storage name.
  'format': "png" // String | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modifyWmf(name, bkColor, pageWidth, pageHeight, borderX, borderY, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of image. | 
 **bkColor** | **String**| Color of the background. | 
 **pageWidth** | **Number**| Width of the page. | 
 **pageHeight** | **Number**| Height of the page. | 
 **borderX** | **Number**| Border width. | 
 **borderY** | **Number**| Border height. | 
 **fromScratch** | **Boolean**| Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional] [default to false]
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 
 **format** | **String**| Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] [default to png]

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveFile"></a>
# **moveFile**
> moveFile(srcPath, destPath, opts)

Move file

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var srcPath = "srcPath_example"; // String | Source file path e.g. '/src.ext'

var destPath = "destPath_example"; // String | Destination file path e.g. '/dest.ext'

var opts = { 
  'srcStorageName': "srcStorageName_example", // String | Source storage name
  'destStorageName': "destStorageName_example", // String | Destination storage name
  'versionId': "versionId_example" // String | File version ID to move
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.moveFile(srcPath, destPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **String**| Source file path e.g. &#39;/src.ext&#39; | 
 **destPath** | **String**| Destination file path e.g. &#39;/dest.ext&#39; | 
 **srcStorageName** | **String**| Source storage name | [optional] 
 **destStorageName** | **String**| Destination storage name | [optional] 
 **versionId** | **String**| File version ID to move | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveFolder"></a>
# **moveFolder**
> moveFolder(srcPath, destPath, opts)

Move folder

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var srcPath = "srcPath_example"; // String | Folder path to move e.g. '/folder'

var destPath = "destPath_example"; // String | Destination folder path to move to e.g '/dst'

var opts = { 
  'srcStorageName': "srcStorageName_example", // String | Source storage name
  'destStorageName': "destStorageName_example" // String | Destination storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.moveFolder(srcPath, destPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **String**| Folder path to move e.g. &#39;/folder&#39; | 
 **destPath** | **String**| Destination folder path to move to e.g &#39;/dst&#39; | 
 **srcStorageName** | **String**| Source storage name | [optional] 
 **destStorageName** | **String**| Destination storage name | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectExists"></a>
# **objectExists**
> ObjectExist objectExists(path, opts)

Check if file or folder exists

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | File or folder path e.g. '/file.ext' or '/folder'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'versionId': "versionId_example" // String | File version ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.objectExists(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| File or folder path e.g. &#39;/file.ext&#39; or &#39;/folder&#39; | 
 **storageName** | **String**| Storage name | [optional] 
 **versionId** | **String**| File version ID | [optional] 

### Return type

[**ObjectExist**](ObjectExist.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resizeImage"></a>
# **resizeImage**
> File resizeImage(name, newWidth, newHeight, opts)

Resize an existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of an image.

var newWidth = 56; // Number | New width.

var newHeight = 56; // Number | New height.

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resizeImage(name, newWidth, newHeight, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of an image. | 
 **newWidth** | **Number**| New width. | 
 **newHeight** | **Number**| New height. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rotateFlipImage"></a>
# **rotateFlipImage**
> File rotateFlipImage(name, method, opts)

Rotate and/or flip an existing image.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of an image.

var method = "method_example"; // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY).

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rotateFlipImage(name, method, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of an image. | 
 **method** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="storageExists"></a>
# **storageExists**
> StorageExist storageExists(storageName)

Check if storage exists

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var storageName = "storageName_example"; // String | Storage name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storageExists(storageName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageName** | **String**| Storage name | 

### Return type

[**StorageExist**](StorageExist.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateImage"></a>
# **updateImage**
> File updateImage(name, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, opts)

Perform scaling, cropping and flipping of an existing image in a single request.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var name = "name_example"; // String | Filename of an image.

var newWidth = 56; // Number | New width of the scaled image.

var newHeight = 56; // Number | New height of the scaled image.

var x = 56; // Number | X position of start point for cropping rectangle.

var y = 56; // Number | Y position of start point for cropping rectangle.

var rectWidth = 56; // Number | Width of cropping rectangle.

var rectHeight = 56; // Number | Height of cropping rectangle.

var rotateFlipMethod = "rotateFlipMethod_example"; // String | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone.

var opts = { 
  'format': "format_example", // String | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases.
  'folder': "folder_example", // String | Folder with image to process.
  'storage': "storage_example" // String | Your Aspose Cloud Storage name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateImage(name, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename of an image. | 
 **newWidth** | **Number**| New width of the scaled image. | 
 **newHeight** | **Number**| New height of the scaled image. | 
 **x** | **Number**| X position of start point for cropping rectangle. | 
 **y** | **Number**| Y position of start point for cropping rectangle. | 
 **rectWidth** | **Number**| Width of cropping rectangle. | 
 **rectHeight** | **Number**| Height of cropping rectangle. | 
 **rotateFlipMethod** | **String**| RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | 
 **format** | **String**| Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional] 
 **folder** | **String**| Folder with image to process. | [optional] 
 **storage** | **String**| Your Aspose Cloud Storage name. | [optional] 

### Return type

**File**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateImageFeatures"></a>
# **updateImageFeatures**
> updateImageFeatures(searchContextId, imageId, opts)

Update images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | The search context identifier.

var imageId = "imageId_example"; // String | The image identifier.

var opts = { 
  'imageData': "/path/to/file.txt", // File | Input image
  'folder': "folder_example", // String | The folder.
  'storage': "storage_example" // String | The storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateImageFeatures(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| The search context identifier. | 
 **imageId** | **String**| The image identifier. | 
 **imageData** | **File**| Input image | [optional] 
 **folder** | **String**| The folder. | [optional] 
 **storage** | **String**| The storage. | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateSearchImage"></a>
# **updateSearchImage**
> updateSearchImage(searchContextId, imageId, opts)

Update image and images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var searchContextId = "searchContextId_example"; // String | Search context identifier.

var imageId = "imageId_example"; // String | Image identifier.

var opts = { 
  'imageData': "/path/to/file.txt", // File | Input image
  'folder': "folder_example", // String | Folder.
  'storage': "storage_example" // String | Storage
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSearchImage(searchContextId, imageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchContextId** | **String**| Search context identifier. | 
 **imageId** | **String**| Image identifier. | 
 **imageData** | **File**| Input image | [optional] 
 **folder** | **String**| Folder. | [optional] 
 **storage** | **String**| Storage | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadFile"></a>
# **uploadFile**
> FilesUploadResult uploadFile(path, file, opts)

Upload file

### Example
```javascript
var AsposeimagingCloudApiReference = require('asposeimaging_cloud_api_reference');
var defaultClient = AsposeimagingCloudApiReference.ApiClient.instance;

// Configure OAuth2 access token for authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AsposeimagingCloudApiReference.ImagingApi();

var path = "path_example"; // String | Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             

var file = "/path/to/file.txt"; // File | File to upload

var opts = { 
  'storageName': "storageName_example" // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFile(path, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.              | 
 **file** | **File**| File to upload | 
 **storageName** | **String**| Storage name | [optional] 

### Return type

[**FilesUploadResult**](FilesUploadResult.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

