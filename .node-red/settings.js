var fs     = require('fs');
var bcrypt = require('bcryptjs');
var path   = require("path");
var when   = require("when");

var settings = module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,

    nodesExcludes:[ '66-mongodb.js','75-exec.js','35-arduino.js','36-rpi-gpio.js','25-serial.js','28-tail.js','50-file.js','31-tcpin.js','32-udp.js','23-watch.js' ],
    autInstallModules: true,

    debugMaxLength: 1000,

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },

    editorTheme: {
        page: {
            title: "PXL-Tech Air Quality",
            favicon: __dirname + "/assets/img/pxl.png"
        },

        header: {
            title: "PXL-Tech Air Quality",
            image: __dirname + "/assets/img/pxl.png",
            url: "https://www.pxl.be"
        },

        login: {
            image: __dirname + "/assets/img/pxl_256x256.png"
        },

        projects: {
            // To enable the Projects feature, set this value to true
            enabled: false
        }
    },

    functionGlobalContext: { },

    storageModule: require("./mongostorage"),

    httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE"
    },

    credentialSecret: false
}

if (process.env.NODE_RED_USERNAME && process.env.NODE_RED_PASSWORD) {
    settings.adminAuth = {
        type: "credentials",
        users: function(username) {
            if (process.env.NODE_RED_USERNAME == username) {
                return when.resolve({username:username,permissions:"*"});
            } else {
                return when.resolve(null);
            }
        },
        authenticate: function(username, password) {
            if (process.env.NODE_RED_USERNAME == username &&
                process.env.NODE_RED_PASSWORD == password) {
                return when.resolve({username:username,permissions:"*"});
            } else {
                return when.resolve(null);
            }
        }
    }
}

settings.mongoAppname = 'nodered';
settings.mongoUrl = process.env.MONGODB_URI;
