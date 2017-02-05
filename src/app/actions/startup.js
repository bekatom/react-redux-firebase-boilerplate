// import FireBaseTools from '../utils/firebase'
import {
  STARTUP,
} from './types'


export default function startupAction() {
    console.log('startupaction')
    return {
        type: STARTUP,
    }
}
