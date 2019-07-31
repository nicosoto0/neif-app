import { FB_LOGGED_IN, FB_LOGGED_OUT } from "../types";

export default function user(state= {}, action={}) {
    switch(action.type){
        case FB_LOGGED_IN:
            return action.user;
        case FB_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}