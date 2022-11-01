import React, { useEffect, useState } from "react";
import { PetList } from "./PetList";
import { FAKE_USER_DATA as users } from "./userData";
import  './style.css';
export function PetProfile({user, chooseUser}){
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        //get user data
        /*
        setUserData(()=>{
            return users[user];
        })
        */

       setTimeout(()=>{
        setUserData(()=>{
            return users[user];
        });
        
       }, 2000);
        
    }, [user]);
    
    const loading = userData === null;
    return(
        <div>
            <div className="pet-detail-img">
                <img src={loading? "":userData.profilePictureUrl} alt="profile picture"></img>
            </div>
            <div className="pet-detail-text">
                <h2>{loading? "loading...": userData.name}</h2>
                <h2>@{user} </h2>
                <h3>{loading? "loading...": userData.bio}</h3>
            </div>
   
            
            <h2>My friends</h2>
            <PetList chooseUser={chooseUser} list={loading?[]: userData.friends} />
        </div>
    )
}
