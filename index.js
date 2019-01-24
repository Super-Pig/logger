const log4js = require('log4js');

log4js.configure({
    appenders: {
        stdout: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: ['stdout'],
            level: 'INFO'
        }
    },
    pm2: true
});

module.exports = log4js.getLogger();