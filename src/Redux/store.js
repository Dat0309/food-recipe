const { combineReducers, createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");
const {
  categoriesReducer,
  categoriesDetailReducer,
} = require("./Reducers/categoriesReducers");
const {
  foodCategoriesReducer,
  foodCategoriesDetailReducer,
} = require("./Reducers/foodCategoriesReducers");
const {
  foodListReducer,
  foodListByCategoryIdReducer,
  foodDetailsReducer,
} = require("./Reducers/foodReducers");
const {
  menuesReducer,
  menuesDetailReducer,
} = require("./Reducers/menuReducers");
const {
  recipeListReducer,
  recipeListByCategoriesReducer,
  recipeDetailReducer,
  recipeCreateReviewReducer,
  recipeCreateReducer,
} = require("./Reducers/recipeReducers");
const {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateProfileReducer,
} = require("./Reducers/userReducers");

const reducer = combineReducers({
  recipeList: recipeListReducer,
  recipeListByCategories: recipeListByCategoriesReducer,
  recipeDetail: recipeDetailReducer,
  recipeReviewCreate: recipeCreateReviewReducer,
  recipeCreate: recipeCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  foodList: foodListReducer,
  foodListByCategories: foodListByCategoryIdReducer,
  foodDetail: foodDetailsReducer,
  categoriesList: categoriesReducer,
  categoriesDetail: categoriesDetailReducer,
  foodCategoriesList: foodCategoriesReducer,
  foodCategoriesDetail: foodCategoriesDetailReducer,
  menuesList: menuesReducer,
  menuesDetail: menuesDetailReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
