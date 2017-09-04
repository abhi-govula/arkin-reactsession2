export default function TodosReducer(state = [], action) {
    switch(action.type) {
        case "ADD_TODO": 
            const obj = {name: action.value, completed: false};
            return [...state, obj];
            break;
        case "GET_JOKES": 
            console.log(action.value);
            return [...state, ...action.value];
            break;
        default:
            return state;
            break;
    }
}