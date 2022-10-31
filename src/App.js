import React, { useState } from "react";
import {Directory} from './Directory.js';
import {PetProfile} from './PetProfile.js';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  const chooseUser= (user)=>{
    setCurrentUser(user);
  };
  const returnToDirectory = ()=>{
    setCurrentUser(null);
  }
  let body;
  if(currentUser !== null ){
    body = <PetProfile  user={currentUser} chooseUser={chooseUser} />
  }else{
    body = <Directory chooseUser={chooseUser} />
  }
  
  return (
    <div>
      <h1>PetBook</h1>

      <div>
        <h3>
          {currentUser &&<button onClick={returnToDirectory}> return to directory</button>}
        </h3>
      </div>

      {body}
    </div>
  );
}

export default App;
