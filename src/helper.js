"use strict";

var Path    = require('path')
,   _       = require('underscore')
;

module.exports = {
    parsePath: function (path) {
        var extname = Path.extname(path);

        return {
            'dirname':  Path.dirname(path),
            'basename': Path.basename(path, extname),
            'extname':  extname
        };
    },

    buildName: function (dirs, filename) {
        return Path.join(dirs, filename);
    },

    filterOptions: function (params) {
        var omit_array = [
            'Body',
            'bucket',
            'charset',
            'ContentType',
            'etag_hash'
            'Key',
            'keyTransform',
            'metadataMap',
            'mimeTypeLookup',
            'nameTransform',
            'uploadNewFilesOnly',
            'verbose'
        ];

        return _.omit(params, omit_array);
    },

    isMetadataMapFn: function (metadataMap) {
        return _.isFunction(metadataMap);
    }
};