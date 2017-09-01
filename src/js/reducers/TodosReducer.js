export default function TodosReducer(state = [], action) {
    switch(action.type) {
        case "ADD_TODO": 
            const obj = {name: action.value, completed: false};
            return [...state, obj];
            break;
        default:
            return state;
            break;
    }
}