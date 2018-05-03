assets = function(assets) {
    if( process.env.SERVER_URL === 'http://localhost' ){
        return (process.env.SERVER_URL + ':' + process.env.HTTP_PORT + '/' + assets);
    }else{
        return (process.env.SERVER_URL + '/' + assets);
    }
};
module.exports = assets;