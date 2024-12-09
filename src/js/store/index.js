import  { legacy_createStore as creatStore } from "redux";
import rootReduccer from "../Reducers/counterReduccer";


const store = creatStore(rootReduccer)

export  default  store;