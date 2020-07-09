const glob = require('glob');
const fs = require('fs');
const stat = {
    icons : 0
}
glob('./icon/**/*',(err,files) => {
    console.log(files.length)
    stat.icons = files.length
    fs.writeFileSync('./data/stat.json',JSON.stringify(stat))
})