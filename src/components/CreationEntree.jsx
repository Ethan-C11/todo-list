import React from "react";
import { useState } from "react";

function CreationEntree({ pushElementInArray }) {
  let [nom, setNom] = useState("");
  let [date, setDate] = useState(new Date().toLocaleDateString("fr-FR"));

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeNom = (e) => {
    setNom(e.target.value);
  };

  const handleClick = () => {
    const div = document.getElementById("modal-creation");
    div.showModal();
  };

  const handleCancel = () => {
    document.getElementById("modal-creation").close();
    setDate(new Date().toLocaleDateString("fr-FR"));
    setNom("");
  };

  const handleAdd = () => {
    if (nom === undefined || nom === "") {
      alert("Veuillez renseigner un nom pour votre tâche");
      return;
    }
    if (date === undefined || date === "") {
      alert("Veuillez renseigner une date pour votre tâche");
      return;
    }
    const nouvelleTache = { id: "0", nom: nom, date: date, fini: false };
    pushElementInArray(nouvelleTache);
    document.getElementById("modal-creation").close();
    setDate(new Date().toLocaleDateString("fr-FR"));
    setNom("");
  };

  //<div className="bg-[#96969620] relative">
  return (
    <>
      <button
        className="bg-blue-400 p-2 px-6 rounded-lg border h-12 w-auto hover:bg-blue-300"
        onClick={handleClick}
      >
        Ajouter une nouvelle tâche
      </button>
      <dialog
        id="modal-creation"
        className="bg-slate-100 rounded-lg border border-slate-300 py-4 px-6 w-96"
      >
        <span className="flex justify-between pb-5">
          Nom
          <input
            type="text"
            className=" border border-slate-300 rounded-md"
            placeholder="Tâche a effectuer"
            value={nom}
            onChange={(e) => handleChangeNom(e)}
          />
        </span>
        <span className="flex justify-between pb-5">
          Date
          <input
            type="text"
            className=" border border-slate-300 rounded-md"
            placeholder="dd/MM/yyyy"
            value={date}
            onChange={(e) => handleChangeDate(e)}
          />
        </span>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 p-2 px-6 rounded-lg border w-32"
            onClick={handleCancel}
          >
            Annuler
          </button>
          <button
            className="bg-blue-400 p-2 px-6 rounded-lg border w-32"
            onClick={handleAdd}
          >
            Ajouter
          </button>
        </div>
      </dialog>
    </>
  );
}

export default CreationEntree;
