# static-page-boilerplate

Dead simple boilerplate for front-end static site projects where you want modern tools quickly without fuss. This includes:

- ES6 -> ES5 compilation with Babel
- PostCSS with CSSNext
- NPM script-driven watch task
- Simple directory structure
- And literally nothing else, so you can decide what to pull in.

## Usage

1. Clone this project
2. `npm install`
3. `npm run watch`
4. Navigate to http://localhost:8080/webpack-dev-server/
5. Make edits in `src`. Happy building!

## Notes

The index.html is less than ideal, as it exists in the `build` directory. For your own projects, you will probably want to integrate some sort of templating system for yourself (such as [Pug](https://github.com/pugjs/pug)) and a watch-driven copy task that pushes your compiled templates into `build`. I chose not to include templates because the template system used generally depends on the complexity of the static page, and didn't want to be prescriptive.

## Less fancy

Prefer not to use webpack-dev-server? Update `webpack.conf.js`'s `output.path` property to be `path.resolve(__dirname, 'build/assets')` and delete `publicPath`, then use `npm run watch-plain` instead.

## License

This project has a "Attribution-Free" MIT license, which is something I made up. It basically means that the standard MIT license applies, except that you do not need to include the MIT license for this boilerplate in your own project.
