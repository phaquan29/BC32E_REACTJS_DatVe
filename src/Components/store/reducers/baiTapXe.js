const stateDefault='./image/products/black-car.jpg'
export const baiTapXe=(state=stateDefault,action)=>{
    switch(action.type){
        case 'CHANGE_COLOR':{
            state=`./image/products/${action.payload}-car.jpg`
            return state
        }
        default:
            return state
    }
}