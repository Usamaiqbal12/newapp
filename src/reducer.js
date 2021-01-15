
export const initialState={
    datasetList:[]
}
    
const reducer = (state,action)=>{
    switch (action.type) {
        case 'ADDDATASET':
            return {
                ...state,
                datasetList:[action.data],
            };
        default:
            return state;
    }
};
export default reducer;