const stateDefault=10
const demoRedux=(state=stateDefault,action)=>{
    switch(action.type){
        case 'TĂNG_SỐ':{
            state+=action.payload
            return state
        }
        case 'GIẢM_SỐ':{
            state+=action.payload
            return state
        }
        default:
            return state
}
}