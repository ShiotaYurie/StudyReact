import React, { useState } from "react";
// import { Link } from "react-router-dom";



 export const Home = () =>{
  useState();
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

    return(
        <>
          <div>
             {/* Link設定 */}             
            {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/todo">Todo</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul> */}
            <p>Homeだよ</p>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
          </div>
        </>
    );

}

