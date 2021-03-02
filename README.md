# Origin – WordPress Theme Boilerplate

## Install Origin

Open terminal:

`cd path/to/wp-content/themes`

`git clone git@github.com:marcjenkins/origin.git my-theme`

`cd my-theme`

`npm install`

Next you'll need to configure paths:

`cp .env-sample .env`

Open `.env` and update the paths accordingly.

To build the project use:

`npm run prod`

For browserSync, use:

`npm run watch`