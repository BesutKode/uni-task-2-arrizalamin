/* global describe it */
const assert = require('assert')
const GJV = require('geojson-validation')
const fs = require('fs')

const readFile = filename => (
  new Promise((resolve, reject) => {
    fs.readFile('output.geojson', (err, data) => {
      if (err) reject(err)
      resolve(data.toString('utf-8'))
    })
  })
)

describe('GeoJSON validation', () => {
  it('generate valid geojson', () => {
    return readFile('output.geojson').then(data => {
      assert(GJV.valid(JSON.parse(data)), 'GeoJSON is not valid')
    }).catch(err => {
      assert(!err, 'Cannot read output.json')
    })
  })
})
