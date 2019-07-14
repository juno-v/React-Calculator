const entries = (state = [], action) => {
switch (action.type) {
    case 'SET_ENTRIES':
        return action.payload;
    default:
        return state;
}
}
// entries will be on the redux state at:
// state.entriesReducer

export default entries;