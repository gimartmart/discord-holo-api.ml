const {get} = require('axios');
module.exports = (key) => new Promise((resolve, reject) => {

    if (!key) {
        console.log(`No keywords provided\nList of endpoint \n`);
        return get(`http://discord-holo-api.ml:8080/api`).then((res) => {
            resolve(res.data.endpoint)
        });
    }

    if(key === "endpoint"){
        return get(`http://discord-holo-api.ml:8080/api`).then((res) => {
            resolve(res.data.endpoint)
        });
    }
    return get(`http://discord-holo-api.ml:8080/api/${key}`).then((res) => {
        resolve(res.data.url);
    }).catch(error => {
        if (error.response.status === 404) {
            console.log(`Availabled endpoint \n`);
            return get(`http://discord-holo-api.ml:8080/api/`).then((res) => {
                reject(res.data.endpoint)
            });
        } else {
            throw reject(`Internal error: ${error.toString()} with error code ${error.response.status}`);
        }
    })
});
