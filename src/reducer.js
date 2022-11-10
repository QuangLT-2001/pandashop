import { combineReducers } from "redux";
import HomeReducer from "./container/Home/reducer";
import ProductReducer from './container/Product/reducer';
import DetailReducer from "./container/Detail/reducer";
import PostReducer from "./container/ListPost/reducer";
import PostDetailReducer from "./container/PostDetail/reducer";
import CartReducer from "./container/Cart/reducer";
import HeaderReducer from "./container/Header/reducer";
import ColorReducer from "./container/ChangeColor/reducer";
import PaymentReducer from "./container/Pay/reducer";
const rootReducer = combineReducers({
    productHome: HomeReducer,
    listProduct: ProductReducer,
    detail: DetailReducer,
    posts: PostReducer,
    postDetailReducer: PostDetailReducer,
    cart: CartReducer,
    header: HeaderReducer,
    colorReducer: ColorReducer,
    payment: PaymentReducer
})
export default rootReducer;