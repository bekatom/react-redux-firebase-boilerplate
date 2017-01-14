import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
       // temperature: require('./TemperatureRedux').reducer,
        // login: require('./LoginRedux').reducer,
        // vtcases: require('../Containers/VTCase/VTCaseRedux').reducer,
        // selectedCase: require('../Containers/VTCase/VTCaseRedux').reducer,
        // person: require('../Containers/Dossier/DossierRedux').reducer,
        // jurors: require('../Containers/Jurors/JurorsRedux').reducer,
        // databaseInitialize: require('../Database/databaseRedux').reducer,
    });

    return configureStore(rootReducer, rootSaga);
};
