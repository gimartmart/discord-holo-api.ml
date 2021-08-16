/**
 * @author zechaos
 * @param key
 * @returns {Promise<unknown>}
 */

const chalk = require('chalk');
const {get} = require('axios');
module.exports = (key) => new Promise((resolve, reject) => {

    if (!key) {
        console.log(`${chalk.blue('[discord-holo-api.ml]')} ${chalk.red('[Error]')} No keywords provided\nList of endpoint \n`);
        return get(`http://discord-holo-api.ml/api`).then((res) => {
            resolve(res.data.endpoint)
        });
    }

    if(key === "endpoint"){
        return get(`http://discord-holo-api.ml/api`).then((res) => {
            resolve(res.data.endpoint)
        });
    }
    return get(`http://discord-holo-api.ml/api/${key}`).then((res) => {
        resolve(res.data.url);
    }).catch(error => {
        if (error.response.status === 404) {
            console.log(`${chalk.blue('[discord-holo-api.ml]')} ${chalk.red('[Error] No endpoint find')} \n\nAvailabled endpoint \n`);
            return get(`http://discord-holo-api.ml/api/`).then((res) => {
                reject(res.data.endpoint)
            });
        } else {
            throw reject(`${chalk.blue('[discord-holo-api.ml]')} ${chalk.red('[Error]')} Internal error: ${error.toString()} with error code ${error.response.status}`);
        }
    })
});