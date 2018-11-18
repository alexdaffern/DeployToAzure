const apiURL = {
    server:'http://localhost:300'

};

if(process.env.NODE_ENV==='prdoduction') {
    apiURL.server='https://daffern.azurewebsites.net';
}

module.exports = apiURL;