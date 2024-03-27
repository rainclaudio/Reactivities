import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore  {
    error: ServerError | null = null;
    token: string | null | undefined = localStorage.getItem('jwt');
    appLoaded = false;
 
    constructor(){
        makeAutoObservable(this);

        // this react when the observable is being changed,
        // nothing happens when we SET the token
        // so this is gonna set the token when log in
        // and remove it when is logged out
        reaction(
            // react to the token
            () => this.token,
            // action after reaction
            token => {
                if(token) {
                    localStorage.setItem('jwt',token)
                } else {
                    localStorage.removeItem('jwt')
                }
            }
        )

    } 

    setServerError(error: ServerError){
        this.error = error;
    }

    setToken = (token: string | null) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

}