module.exports = function(config) {


    config.setBrowserSyncConfig({
        https: {
            key: '../localhost.key',
            cert: '../localhost.cert'
        },
        browser: "firefox",
        open: "local"
    })

    config.addPassthroughCopy("src/js");
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };

};