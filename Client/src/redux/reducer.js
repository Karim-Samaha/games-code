import actionType from "./actionType";
const INITIALSTATE = {
    productsData: [],
    headerModule: false,
    sidebarModule: false,
    loading: true,
    searchValue: "",
    searchData: [],
    trendingProducts: false,
    software: false,
    xbox: false,
    ps: false,
    spicificProduct: [],
    cart: [],

}
const reducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        // For Fetching Data
        case actionType.PRODUCTSDATA:
            return { ...state, productsData: action.payload.data }
            break;
        // Header Moudle
        case actionType.OPENHEADERMOUDLE:
            return { ...state, headerModule: !state.headerModule }
            break;

        //Show More Products
        case actionType.SHOWMORETRENDING:
            if (action.payload.event === "more" && action.payload.ctg === "trending") {
                return { ...state, trendingProducts: true }
            } else if (action.payload.event === "less" && action.payload.ctg === "trending") {
                return { ...state, trendingProducts: false }
            }
            else if (action.payload.event === "more" && action.payload.ctg === "software") {
                return { ...state, software: true }
            } else if (action.payload.event === "less" && action.payload.ctg === "software") {
                return { ...state, software: false }
            } else if (action.payload.event === "more" && action.payload.ctg === "xbox") {
                return { ...state, xbox: true }
            } else if (action.payload.event === "less" && action.payload.ctg === "xbox") {
                return { ...state, xbox: false }
            } else if (action.payload.event === "more" && action.payload.ctg === "ps") {
                return { ...state, ps: true }
            } else if (action.payload.event === "less" && action.payload.ctg === "ps") {
                return { ...state, ps: false }
            }
            break;


        //Single Product
        case actionType.SINGLEPRODUCT:
            return { ...state, spicificProduct: action.payload.data }
            break;
        // Handling Cart
        case actionType.SETCART:
            if (state.cart.includes(state.spicificProduct[0])) {
                return state
            } else {
                return { ...state, cart: [...state.cart, state.spicificProduct[0]] }
            }
            break;
        // Remove From Cart
        case actionType.REMOVEFOMCART:
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) }
            break;
        //Handle Cart Quantity
        case actionType.SETQNTY:
            return {
                ...state, cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, qty: action.payload.value }
                    } else { return item }
                })
            }
            break;
        //Handle Loading 
        case actionType.LOADING:
            return { ...state, loading: action.payload.status == "true" ? true : false }
            break;
        //Handle Sidebar
        case actionType.OPENSIDEBAR:
            return { ...state, sidebarModule: !state.sidebarModule }
            break;
        //Handle Searchbar
        case actionType.SEARCHVALUE:
            return {
                ...state, searchValue: action.payload.text,
                searchData: action.payload.data.filter((item) => item.name.toLocaleLowerCase().includes(action.payload.text.toLocaleLowerCase()))
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer