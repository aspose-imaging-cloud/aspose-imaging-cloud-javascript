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
