const queryOverpass = require('query-overpass')

module.exports = item => (
  new Promise((resolve, reject) => {
    queryOverpass(item.query, (err, data) => {
      if (err) reject(err)
      const feature = data.features[0]
      resolve({
        type: 'Feature',
        geometry: feature.geometry,
        properties: feature.properties.tags,
      })
    })
  })
)
