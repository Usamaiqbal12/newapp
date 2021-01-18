
export const initialState={
    datasetList:[],
    user:[]
}
    
const reducer = (state,action)=>{
    switch (action.type) {
        case 'ADDDATASET':
            return {
                ...state,
                datasetList:[action.data],
            };
        case 'ADDUSER':
            return {
                ...state,
                user:[action.data]
            }
        default:
            return state;
    }
};
export default reducer;