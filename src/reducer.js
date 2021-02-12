export const initialState = {
  datasetList: [],
  user: [],
  currentDataset: [],
  attributes:[],
  qod:[]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDDATASET":
      return {
        ...state,
        datasetList: [action.data],
      };
      case "qod":
        return {
          ...state,
          qod: action.data,
        };
      case "GETATTRIBUTES":
      return {
        ...state,
        attributes: action.data,
      };
    case "ADDCURRENTDATASET":
      return {
        ...state,
        currentDataset: [action.data],
      };
    case "ADDUSER":
      return {
        ...state,
        user: [action.data],
      };
    default:
      return state;
  }
};
export default reducer;
