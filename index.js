'use strict'

var getter = require('pixel-getter')

module.exports = (input, opts) => {
	if (typeof input !== 'string') throw new TypeError(`Expected a string, got ${typeof input}`)

	return new Promise((resolve, reject) => {

		  getter.get(`${input}`, (err, pixels) => {

		    if (err) console.log(err)

				var colors = new Array()

				for (var i = 0; i < pixels.length; i++) {
						var p = pixels[i]
						if (!colors[p.r]) colors[p.r] = new Array()
						if (!colors[p.r][p.g]) colors[p.r][p.g] = new Array()
						if (!colors[p.r][p.g][p.b]) {
								var color = `${p.r}, ${p.g}, ${p.b}`
								colors[p.r][p.g][p.b] = {color: color, count: 0}
						}
						colors[p.r][p.g][p.b].count++
				}

				var max
				var maxVal = 0
				for (var r in colors) {
						for (var g in colors[r]) {
								for (var b in colors[r][g]) {
										if (maxVal < colors[r][g][b].count) {
												maxVal = colors[r][g][b].count
												max = colors[r][g][b]
										}
								}
						}
				}

				resolve(max.color)

		  })

	})

}
