// Hooks
import { createContext, useState, useEffect } from "react";
// Data
import { adminUser } from "../data/products";


export const UserContext = createContext()

export const UserProvider = ({children}) =>{

    const [user, setUser] = useState(getUser);
    const [error, setError] = useState('');
    const [details, setDetails] = useState({name:'', email:'', password:''});
    const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn);


// Save Signed-in state in Local Storage after refresh
    function getIsLoggedIn() {
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
        if(!storedIsLoggedIn) return false
        return JSON.parse(storedIsLoggedIn);
    }
    

    useEffect(() => {
        const json = JSON.stringify(isLoggedIn);
        localStorage.setItem("isLoggedIn", json);
        }, [isLoggedIn]);



// Save User Data in Local Storage
    function getUser() {
        const storedDetails = localStorage.getItem("user");
        if(!storedDetails) return {name:'', email:''}
        return JSON.parse(storedDetails);
        
        }

    useEffect(() => {
        const json = JSON.stringify(user);
        localStorage.setItem("user", json);
        }, [user]);
    

// Login
    const Login = (details) =>{
        if(details.email == adminUser.email && details.password === adminUser.password){
            setUser({
                name: details.name,
                email: details.email
            });
        }else {
            setError('Details do not match!');
         }
    }
    
//Logout
    const Logout = () =>{
        setUser({
            name:'',
            email: ''
        });
        localStorage.clear()
        setIsLoggedIn(false)
    }


    const exportData={user, setUser, error, setError,Login, Logout,details, setDetails,isLoggedIn, setIsLoggedIn}


    return (
        <UserContext.Provider value = {exportData} >
           {children}
        </UserContext.Provider>
      )
  }