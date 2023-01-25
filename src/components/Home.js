
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    // window.alert("useEffect  Called");
    async function fetchData() {
      const response = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const get = await response.json();
      setData(get);
      console.log(get);
    }
    fetchData();
  }, [state]);

  console.log("Function Body");
  return (
    <div>
      <button onClick={() => setState(state + 1)}>ClickMe {state}</button>
      {data.map((element, index) => {
        return (
          <Link to={`/app/${element.id}`}><div key={index} className="data">
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div></Link>
        );
      })}
      
    </div>
  )
}

export default Home
