// Web Service
const port = 3000;
const localWebServiceURI = `http://localhost:${port}`;

module.exports.ALLOWED_ORIGINS = [localWebServiceURI];

module.exports.ABOUT = "Clustered Express Service";

module.exports.PORT = port;
