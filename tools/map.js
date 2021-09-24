const fs = require('fs');
const glob = require('glob');
const path = require('path');

let output = {}
function buildMapImageIndex(){
    let files = glob.sync('./map/**/*.png')
    for(let file of files){
        let filename = path.basename(file,'.png')
        let result = filename.match(/map_(\d+)_(\d+)/)
        let mapid = result[1]
        let mapitem = result[2]
        
        if(!output[mapid]) output[mapid] = []
        output[mapid].push(~~mapitem)
    }

    fs.writeFileSync('./data/maptree.json',JSON.stringify(output))
}

buildMapImageIndex()