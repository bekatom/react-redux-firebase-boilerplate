import apisauce from 'apisauce';
import config from '../Config/AppConfig';


const databaseURL = config.databaseURL;


const create = (baseURL = databaseURL) => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
        },
    });

    const authentication = (user, password) => {
        // from reacr native
        // CookieManager.getAll((err, res) => {
        //     console.tron.display({
        //         name: 'CookieManager',
        //         value: { err, res },
        //     });
        // });
        // set intenretCredentails
        api.post('_session', { name: user, password });
    };

    // tron api logs
    if (__DEV__ && console.tron) {
        api.addMonitor(console.tron.apisauce);
    }

    return {
        authentication,
    };
};

export default {
    create,
};

