var toBuffer = require('data-uri-to-buffer')

function parseDataUri (dataUri) {

  return {
    mimeType: parseMimeType(dataUri),
    data: toBuffer(dataUri)
  }
}

function parseMimeType(uri) {
  return uri.substring(5, uri.indexOf(';'))
}

module.exports = parseDataUri