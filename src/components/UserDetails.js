import React from "react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
const UserDetails = () => {
  const [data, setData] = useState({});
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));
  console.log(searchParams.getAll("name"));
  const Reset = () => {
    setSearchParams({ name: "Jeetesh", age: "23" });
  };

  useEffect(() => {
    // window.alert("useEffect  Called");
    async function fetchData() {
      const response = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
      );
      const get = await response.json();
      setData(get[0]);
      console.log(get);
    }
    fetchData();
  }, []);
  return (
    <>
      <h4>{data.id}</h4>
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.salary}</h4>
      <img src="{data.imageUrl}" alt="Nothing"></img>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default UserDetails;
