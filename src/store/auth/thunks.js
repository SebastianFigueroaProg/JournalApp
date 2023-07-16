import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, logout, login } from "./"


export const checkingAuthentication = (email, Password) =>{
    return async(dispatch) =>{

        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () =>{
    return async(dispatch) =>{

        dispatch(checkingCredentials());

         const result = await singInWithGoogle()

         if (!result.ok) return dispatch( logout(result.errorMessage) );

         dispatch( login( result ) )

    } 
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

    return async(dispatch) =>{

        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});

        if ( !ok ) return dispatch( logout({errorMessage}) );     
        
        dispatch( login({ uid, displayName, email, photoURL }) );

    }
}

export const starLogintWithEmailPassword = ({email, password}) =>{
    return async( dispatch ) =>{

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({email, password});

        if ( !result.ok ) return dispatch( logout(result) );  

        dispatch( login( result ) );

    }
}

export const startlogout = () =>{
    return async(dispatch)=>{

        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout() );

    }
}