# most-used-color

> Find the most used pixel color in an image.


## Install

```
$ npm install --save most-used-color
```


## Usage

```js
var mostUsedColor = require('most-used-color')

mostUsedColor('./puppy.png').then(color => {

	console.log(color)

})
```


## API

### mostUsedColor(input)

#### input

Type: `string`

Path to image.

## License

MIT © [Chris Vandenberg](https://github.com/MrChristofferson) [Oskenso Kashi](https://github.com/Oskenso)
