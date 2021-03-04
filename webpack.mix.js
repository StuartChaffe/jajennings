let mix = require('laravel-mix');
require('@ayctor/laravel-mix-svg-sprite');

mix
    .sass('src/sass/styles.scss', 'dist/')
    .options({
        processCssUrls: false
    })
    .sourceMaps()
    .sass('src/sass/editor-style.scss', 'dist/')
    .options({
        processCssUrls: false
    })
    .svgSprite('src/icons/*.svg', 'sprite.svg')
    .copy('svg/sprite.svg', 'icons/sprite.php')
    .js('src/js/*.js', 'dist/')
    .browserSync({
        proxy: process.env.MIX_PROXY,
        host: process.env.MIX_HOST,
        open: 'external',
        port: process.env.MIX_PORT,
        injectChanges: true,
        // https: {
        //     key: process.env.MIX_HTTPS_KEY,
        //     cert: process.env.MIX_HTTPS_CERT
        // },
        files: [
          'dist/styles.css',
          'dist/main.js',
          '*.php',
          '*/*.php'
        ]
    });
    
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.scss/,
                loader: 'import-glob-loader'
            }
        ]
    }
});