import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import EntreeListe from "./components/EntreeListe";
import CreationEntree from "./components/CreationEntree";

function App() {
  const [ArrayTodo, setArrayTodo] = useState(
    JSON.parse(localStorage.getItem("TodoList"))
  );

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(ArrayTodo));
  }, [ArrayTodo]);

  const pushElementInArray = (element) => {
    try {
      element.id = ArrayTodo[ArrayTodo.length - 1].id + 1;
    } catch {
      element.id = 0;
    }
    setArrayTodo([...ArrayTodo, element]);
  };

  const delElementInArray = (elementId) => {
    const isIdEqual = (element) => element.id === elementId;
    const indexToDelete = ArrayTodo.findIndex(isIdEqual);
    const ArrayTemp = [...ArrayTodo];
    ArrayTemp.splice(indexToDelete, 1);
    setArrayTodo(ArrayTemp);
  };

  const changeStatus = (elementId) => {
    const isIdEqual = (element) => element.id === elementId;
    const indexToFind = ArrayTodo.findIndex(isIdEqual);
    const ArrayTemp = [...ArrayTodo];
    ArrayTemp[indexToFind].fini = !ArrayTemp[indexToFind].fini;
    setArrayTodo(ArrayTemp);
  };

  return (
    <>
      <h1 className="flex justify-center text-3xl py-6 font-bold">
        To-Do List
      </h1>
      <div className="flex px-20 pb-6 ">
        <CreationEntree pushElementInArray={pushElementInArray} />
      </div>

      <div className="">
        {ArrayTodo.map((entree) => (
          <EntreeListe
            key={entree.id}
            id={entree.id}
            nom={entree.nom}
            date={entree.date}
            fini={entree.fini}
            delElementInArray={delElementInArray}
            changeStatus={changeStatus}
          />
        ))}
      </div>
    </>
  );
}

export default App;
