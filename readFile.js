var CachedFs = require('cachedfs');
var fs = new CachedFs();

async function readFile(filepath){
    var result ='';
    try{
        result = await new Promise(function(resolve,reject){
            fs.readFile(basedir + filepath, 'utf-8', function(e,c){
                if(e){
                    reject(e);
                }
                resolve(c);
            });
        });
            
        result = result.trim();
    }
    catch(ex){
        console.log('readfile '+ filepath + ' : ' + ex)
    }
    return result;
}

module.exports = readFile;