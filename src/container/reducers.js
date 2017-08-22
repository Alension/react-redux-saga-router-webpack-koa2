export default function reducers(state = {article:{isFetching:false}}, action) {
    console.log('action',action.payload);
    switch (action.type) {
        case 'fetchData':
            return Object.assign({},state,{
                article:{
                    isFetching:true
                }
            });break;
        case 'fetchDataSuccess':
            return Object.assign({},state,{
                article:{
                    isFetching:false,
                    data:action.payload
                }
            });break;
        default:
            return state
    }
}