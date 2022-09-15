import { createContext, useState, useEffect } from "react"
import { adminUser } from "../data/products";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{

    const [user, setUser] = useState({name:'', email:''});
    const [error, setError] = useState('');
    const [details, setDetails] = useState({name:'', email:'', password:''});
    const [isLoggedIn, setIsLoggedIn] = useState(false)



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
    
    const Logout = () =>{
        setUser({
            name:'',
            email: ''
        });
        // localStorage.clear()
        setIsLoggedIn(false)
    }


      console.log('LOG',isLoggedIn);
      console.log('User',user);
    const exportData={user, setUser, error, setError,Login, Logout,details, setDetails,isLoggedIn, setIsLoggedIn }


     // Save Sign state in Local Storage after refresh
    //  useEffect(() => {
    //     const json = localStorage.getItem("isLoggedIn");
    //     const loadedIsLoggedIn = JSON.parse(json);
    //     if (loadedIsLoggedIn) {
    //         setIsLoggedIn(prev =>loadedIsLoggedIn);
    //     }
    //     }, []);
    
    
    //     useEffect(() => {
    //         const json = JSON.stringify(isLoggedIn);
    //        localStorage.setItem("isLoggedIn", json);
    //       }, [isLoggedIn]);

// Save User Data in Local Storage
    //  useEffect(() => {
    //     const json = localStorage.getItem("user");
    //     const loadedUser = JSON.parse(json);
    //     if (loadedUser) {
    //         setUser(prev => ({...prev,...loadedUser}));
    //         console.log('aa',user);
    //     }
    //     }, []);
    
    
        // useEffect(() => {
        //     const json = JSON.stringify(user);
        //    localStorage.setItem("user", json);
        //    console.log('aa2',user);

        //   }, [user]);




    return (
        <UserContext.Provider value = {exportData} >
           {children}
        </UserContext.Provider>
      )
  }