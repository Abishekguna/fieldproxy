const mainState = {
    tableData: [],
    str: "str",
  };
  
  const Reducer = (state = mainState, action) => {
    switch (action.type) {
      case "store":
        return { ...state, tableData: action.payload };
      case "table":
        return { ...state, tableData: action.payload };
      case "delete":
        return { ...state, tableData: action.payload };
  
      default:
        return state;
    }
  };
  
  export default Reducer;