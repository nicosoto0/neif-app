import { GOT_FB_ACCOUNTS, LOST_FB_ACCOUNTS} from "../types";

export default function accounts(state= {}, action={}) {
    switch(action.type){
        case GOT_FB_ACCOUNTS:
            return state;
        case LOST_FB_ACCOUNTS:
            return state;
        default:
            return state;
    }
}