const request = require('request')

const key = '8F7B5281-C532D421-0AA68391-6844DCA3-4530C7D4-BA54FA80-E0813252-453E10EB'

const toArray = obj => [obj.x, obj.y]

module.exports = id => {
  const option = {
    qs: {
      key,
      id,
      function: 'place.getbyid',
      language: 'en',
      format: 'json',
    }
  }
  return new Promise((resolve, reject) => {
    request('http://api.wikimapia.org', option, (err, res, body) => {
      if (err) reject(err)
      const result = JSON.parse(body)
      resolve({
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            ...result.polygon.map(toArray),
            toArray(result.polygon[0]),
          ]]
        },
        properties: {
          name: result.title
        }
      })
    })
  })
}

