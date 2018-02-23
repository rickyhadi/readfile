var CachedFs = require('cachedfs');
var fs = new CachedFs();

async function readFile(filepath){
    var rootdir = env.rootdir || __dirname;
    var result ='';
    try{
        result = await new Promise(function(resolve,reject){
            fs.readFile(rootdir + filepath, 'utf-8', function(e,c){
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