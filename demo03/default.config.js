module.exports = {
    "mode": "development",
    "entry": "./main.js",
    "output": {
        "filename": "bundle.js",
        "path": "/Users/zcyue/Documents/Yonyou/Le/webpack-analysis/demo03/dist",
        "chunkFilename": "[id].bundle.js",
        "webassemblyModuleFilename": "[modulehash].module.wasm",
        "library": "",
        "hotUpdateFunction": "webpackHotUpdate",
        "jsonpFunction": "webpackJsonp",
        "chunkCallbackName": "webpackChunk",
        "globalObject": "window",
        "devtoolNamespace": "",
        "libraryTarget": "var",
        "pathinfo": true,
        "sourceMapFilename": "[file].map[query]",
        "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
        "hotUpdateMainFilename": "[hash].hot-update.json",
        "crossOriginLoading": false,
        "jsonpScriptType": false,
        "chunkLoadTimeout": 120000,
        "hashFunction": "md4",
        "hashDigest": "hex",
        "hashDigestLength": 20,
        "devtoolLineToLine": false,
        "strictModuleExceptionHandling": false
    },
    "context": "/Users/zcyue/Documents/Yonyou/Le/webpack-analysis/demo03",
    "devtool": "eval",
    "cache": true,
    "target": "web",
    "module": {
        "unknownContextRequest": ".",
        "unknownContextRegExp": false,
        "unknownContextRecursive": true,
        "unknownContextCritical": true,
        "exprContextRequest": ".",
        "exprContextRegExp": false,
        "exprContextRecursive": true,
        "exprContextCritical": true,
        "wrappedContextRegExp": {},
        "wrappedContextRecursive": true,
        "wrappedContextCritical": false,
        "strictExportPresence": false,
        "strictThisContextOnImports": false,
        "unsafeCache": true,
        "rules": [],
        "defaultRules": [
            {
                "type": "javascript/auto",
                "resolve": {}
            },
            {
                "test": {},
                "type": "javascript/esm",
                "resolve": {
                    "mainFields": [
                        "browser",
                        "main"
                    ]
                }
            },
            {
                "test": {},
                "type": "json"
            },
            {
                "test": {},
                "type": "webassembly/experimental"
            }
        ]
    },
    "node": {
        "console": false,
        "process": true,
        "global": true,
        "Buffer": true,
        "setImmediate": true,
        "__filename": "mock",
        "__dirname": "mock"
    },
    "performance": false,
    "optimization": {
        "removeAvailableModules": false,
        "removeEmptyChunks": true,
        "mergeDuplicateChunks": true,
        "flagIncludedChunks": false,
        "occurrenceOrder": false,
        "sideEffects": false,
        "providedExports": true,
        "usedExports": false,
        "concatenateModules": false,
        "splitChunks": {
            "hidePathInfo": false,
            "chunks": "async",
            "minSize": 10000,
            "minChunks": 1,
            "maxAsyncRequests": null,
            "automaticNameDelimiter": "~",
            "automaticNameMaxLength": 109,
            "maxInitialRequests": null,
            "name": true,
            "cacheGroups": {
                "default": {
                    "automaticNamePrefix": "",
                    "reuseExistingChunk": true,
                    "minChunks": 2,
                    "priority": -20
                },
                "vendors": {
                    "automaticNamePrefix": "vendors",
                    "test": {},
                    "priority": -10
                }
            }
        },
        "noEmitOnErrors": false,
        "checkWasmTypes": false,
        "mangleWasmImports": false,
        "namedModules": true,
        "hashedModuleIds": false,
        "namedChunks": true,
        "portableRecords": false,
        "minimize": false,
        "minimizer": [
            {}
        ],
        "nodeEnv": "development"
    },
    "resolve": {
        "unsafeCache": true,
        "modules": [
            "node_modules"
        ],
        "extensions": [
            ".wasm",
            ".mjs",
            ".js",
            ".json"
        ],
        "mainFiles": [
            "index"
        ],
        "aliasFields": [
            "browser"
        ],
        "mainFields": [
            "browser",
            "module",
            "main"
        ],
        "cacheWithContext": false
    },
    "resolveLoader": {
        "unsafeCache": true,
        "mainFields": [
            "loader",
            "main"
        ],
        "extensions": [
            ".js",
            ".json"
        ],
        "mainFiles": [
            "index"
        ],
        "cacheWithContext": false
    },
    "infrastructureLogging": {
        "level": "info",
        "debug": false
    }
}