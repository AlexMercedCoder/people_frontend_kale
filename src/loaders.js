import {baseUrl} from './base_url';
import { redirect } from 'react-router-dom';

const authCheck = () => {
    const loggedIn = localStorage.getItem('loggedIn')
    if(!loggedIn){
        return false
    }
    return true
}

export const peopleLoader = async () => {

    if (!authCheck()){
        return redirect('/login')
    }

    // make a call to backend index route
    const response = await fetch(`${baseUrl}/people`, {
        credentials: 'include'
    })
    // convert the response in a js object
    const people = await response.json()
    // return the people
    return people
}

export const personLoader = async ({params}) => {

    if (!authCheck()){
        return redirect('/login')
    }

    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/people/${id}`,{
        credentials: 'include'
    })
    // convert the response into a js object
    const person = await response.json()
    // return the person
    return person
}

export const mainLoader = async () => {
    if(authCheck()){
        return redirect("/dashboard")
    }
    return {}
}