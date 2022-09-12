// Chỉ setup file này một lần
import {combineReducers,createStore} from 'redux'
// c1
// import {demoRedux,baiTapXe} from './reducers'
//c2
import * as reducers from './reducers'
const rootReducers=combineReducers({
    /**
     * 
     * C1:
     * demoRedux,
     * baiTapXe,
     * C2:
     * 
     */
     ...reducers,
    // demoRedux:(state=10,action)=>{
    //     console.log(action)
    //     switch(action.type){
    //         case 'TĂNG_SỐ':{
    //             state+=action.payload
    //             return state
    //         }
    //         case 'GIẢM_SỐ':{
    //             state+=action.payload
    //             return state
    //         }
    //         default:
    //             return state
    //     }
    //     // return state
    // },
    // baiTapXe:(state="./image/products/black-car.jpg",action)=>{
    //     switch(action.type){
    //         case 'CHANGE_COLOR':{
    //             state=`./image/products/${action.payload}-car.jpg`
    //             return state
    //         }
    //     }
    //     return state
    // }
})
export const store=createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())