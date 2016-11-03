const fs = require('fs')
const co = require('co')
const overpass = require('./overpass')
const wikimapia = require('./wikimapia')

const createGeoJSON = input => co(function* () {
  const overpassFeatures = input.filter(item => (
    item.type === 'overpass-query'
  )).map(overpass)
  const wikimapiaFeatures = input.filter(item => (
    item.type === 'wikimapia-id'
  )).map(item => wikimapia(item.id))

  const features = yield [...overpassFeatures, ...wikimapiaFeatures]
  return {
    type: 'FeatureCollection',
    features,
  }
})

const writeOutput = output => new Promise((resolve, reject) => {
  fs.writeFile('output.geojson', JSON.stringify(output, null, 2), err => {
    if (err) reject(err)
    resolve()
  })
})

const start = filename => {
  const input = JSON.parse(fs.readFileSync(filename, {encoding: 'utf-8'}))
  createGeoJSON(input)
  .then(writeOutput)
  .catch(console.error)
}

start(process.argv[2])
