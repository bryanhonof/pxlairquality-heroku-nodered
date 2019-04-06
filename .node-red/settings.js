var fs     = require('fs');
var bcrypt = require('bcryptjs');
var path   = require("path");
var when   = require("when");

var NODE_RED_USERNAME = process.env.NODE_RED_USERNAME;
var NODE_RED_PASSWORD = process.env.NODE_RED_PASSWORD = bcrypt.hashSync(process.env.NODE_RED_PASSWORD, 8); 

var settings = module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,

    nodesExcludes:[ '66-mongodb.js','75-exec.js','35-arduino.js','36-rpi-gpio.js','25-serial.js','28-tail.js','50-file.js','31-tcpin.js','32-udp.js','23-watch.js' ],
    autInstallModules: true,

    debugMaxLength: 1000,

    adminAuth: {
        type: "credentials",
        users: [{
            username: NODE_RED_USERNAME,
            password: NODE_RED_PASSWORD,
            permissions: "*"
        }]
    },

    functionGlobalContext: { },

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

    storageModule: require("./mongostorage"),

    httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE"
    },

    credentialSecret: false
}

settings.mongoAppname = 'nodered';
settings.mongoUrl = process.env.MONGODB_URI;
