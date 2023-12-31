import React from "react";
import { useState, useEffect } from "react";
import EntreeListe from "./EntreeListe";
import CreationEntree from "./CreationEntree";
import Searchbar from "./Searchbar";

function TodoList() {
  if (localStorage.getItem("TodoList") === null) {
    localStorage.setItem(
      "TodoList",
      JSON.stringify([
        { id: 0, nom: "Exemple de tâche", date: "dd/MM/yyyy", fini: false },
      ])
    );
  }

  const [ArrayTodo, setArrayTodo] = useState(
    JSON.parse(localStorage.getItem("TodoList"))
  );
  const [ArrayFilter, setArrayFilter] = useState(ArrayTodo);
  const [SearchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(ArrayTodo));
    handleSearch(SearchFilter);
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

  const editInArray = (tache) => {
    const id = tache.id;
    const isIdEqual = (element) => element.id === id;
    const indexToEdit = ArrayTodo.findIndex(isIdEqual);
    const ArrayTemp = [...ArrayTodo];
    ArrayTemp[indexToEdit] = tache;
    setArrayTodo(ArrayTemp);
  };

  const handleSearch = (value) => {
    setSearchFilter(value);
    if (value === null || value === undefined || value === "") {
      setArrayFilter(ArrayTodo);
    } else {
      const RechercheArray = ArrayTodo.filter((taches) =>
        taches.nom.toLowerCase().includes(value.toLowerCase())
      );
      setArrayFilter(RechercheArray);
    }
  };

  let returnList = <div></div>;

  if (ArrayFilter.length === 0) {
    returnList = <div className="text-white font-medium text-center text-3xl p-5"> Aucune tâche n'a été trouvée </div>;
  } else {
    returnList = (
      <div className="">
        {ArrayFilter.map((entree, index) => (
          <EntreeListe
            key={entree.id}
            id={entree.id}
            index={index}
            nom={entree.nom}
            date={entree.date}
            fini={entree.fini}
            delElementInArray={delElementInArray}
            changeStatus={changeStatus}
            editInArray={editInArray}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <h1 className="flex justify-center text-3xl py-6 font-bold text-white">
        To-Do List
      </h1>
      <div className="flex px-20 pb-6 ">
        <CreationEntree pushElementInArray={pushElementInArray} />
      </div>
      <div>
        <Searchbar handleSearch={handleSearch} />
      </div>

      {returnList}
    </>
  );
}

export default TodoList;
