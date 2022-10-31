import React from "react";

export function PetList({chooseUser, list}){
    const handleClick = (e)=>{
        console.log(e.target.dataset.username);
        chooseUser(e.target.dataset.username);
    }

    return(
        <div>
            <ul>
                {list && list.map((user)=>{
                    return <li>
                        <button data-username={user} onClick={handleClick}>{user}</button>
                        </li>
                })}
            </ul>
        </div>
    )
}


