const initState = {
    items: [],
    isLoaded:false
};

const setPizzas = (state = initState, action)=>{
    switch (action.type) {
        case 'SET_PIZZAS':
            return{
                ...state,
                items: action.payload
            };
        default:
            return state
    }
};
export default setPizzas;