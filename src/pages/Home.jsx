import React, { useEffect, useState } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

const Home = () => {
  const [inputData, setInputData] = useState("");

  const [result, setResult] = useState([]);

  const db = getDatabase();

  const handleSubmit = function (e) {
    e.preventDefault();
    set(push(ref(db, "notesCollection/")), {
      data: inputData,
    });
  };

  // CRUD Operation
  // C => Create
  // R => Read
  // U => Update
  // D => Delete

  useEffect(() => {
    const userNotes = ref(db, "notesCollection/");
    onValue(userNotes, (snapshot) => {
      let convertArray = [];
      snapshot.forEach((item) => {
        // console.log(item.val());
        convertArray.push(item.val());
      });

      // console.log(data);
      setResult(convertArray);
    });
  }, []);

  // console.log(result);

  return (
    <>
      <form>
        <input
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          className="bg-black text-white"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      {result.map((item, i) => (
        <h1 key={i}>{item.data}</h1>
      ))}
    </>
  );
};

export default Home;
