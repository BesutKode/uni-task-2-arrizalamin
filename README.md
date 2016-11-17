# uni-task-2-arrizalamin

[![Build Status](https://travis-ci.com/BesutKode/uni-task-2-arrizalamin.svg?token=Ygsvp2rrkv6prX8pcCeo&branch=master)](https://travis-ci.com/BesutKode/uni-task-2-arrizalamin)

## Data Source
- Pulau Batam: Coordinates obtained from way [41333805](http://www.openstreetmap.org/way/41333805)
  under [Open Data Commons Open Database License (ODbL)](http://opendatacommons.org/licenses/odbl/)
- Waduk Sei Harapan: Coordinates obtained using [Wikimapia API](http://wikimapia.org/8362247/Waduk-Sei-Harapan)
  under license [Creative Commons Attribution-ShareAlike License](http://wikimapia.org/terms_reference.html)
- Waduk Sei Ladi:Coordinates obtained using [Wikimapia API](http://wikimapia.org/6875450/id/Waduk-Sei-Ladi)
  under license [Creative Commons Attribution-ShareAlike License](http://wikimapia.org/terms_reference.html)
- Waduk Baloi: Coordinates obtained using [Wikimapia API](http://wikimapia.org/8055954/Waduk-Baloi)
  under license [Creative Commons Attribution-ShareAlike License](http://wikimapia.org/terms_reference.html)
- Waduk Duriangkang: Coordinates obtained using [Wikimapia API](http://wikimapia.org/7907944/Waduk-Duriangkang-Water-Catchment-Reservoir)
  under license [Creative Commons Attribution-ShareAlike License](http://wikimapia.org/terms_reference.html)
- Waduk Muka Kuning: Coordinates obtained using [Wikimapia API](http://wikimapia.org/8362327/Waduk-Muka-Kuning)
  under license [Creative Commons Attribution-ShareAlike License](http://wikimapia.org/terms_reference.html)
- Danau Sekupang: Coordinates obtained using [Wikimapia API](http://wikimapia.org/25586936/Danau-Sekupang)
  under license [Creative Commons Attribution-ShareAlike License](http://wikimapia.org/terms_reference.html)

## Installation
1. Download [node.js](https://nodejs.org/) minimum version 6
2. Clone this repository
3. Run command `npm install` in terminal to install all dependencies
 
## Usage
To generate geojson run `node index.js [input.json]` in terminal and
`index.js` script will write the output in `output.geojson`

## Test
The test script expect there is `output.geojson` in the current directory

To test the script run `npm test` in the terminal

## Presentation
Run `npm start` on the command line, and open `http://localhost:8000` on the
browser, the presentation requires `output.geojson` using AJAX to visualize
the data
