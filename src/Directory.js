import React from "react";
import { PetList } from "./PetList.js";
export function Directory({chooseUser}){

    return(
        <div>
            <h2>User directory</h2>
            <PetList chooseUser={chooseUser} list={['cat', 'dog', 'komodo']}></PetList>

        </div>
    )
}