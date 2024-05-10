import React from "react";
import { useState, useEffect, useDeferredValue } from "react";
import axios from "axios";

const GetFromGo = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:8080/encode")
      .then((res) => {
        setUsers([res?.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {users.map((items, key) => {
        return (
          <div key={key}>
            <h1>
              My name is: {items.firstname} {items.lastname}
            </h1>
            <h2>I'm {items.age} years old!</h2>
          </div>
        );
      })}
    </div>
  );
};

export default GetFromGo;
