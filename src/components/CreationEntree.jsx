import React from "react";
import { useState } from "react";

function CreationEntree({ pushElementInArray }) {
  let [nom, setNom] = useState("");
  let [date, setDate] = useState(new Date().toLocaleDateString("fr-FR"));

  const handleChangeDate = (e) => {
    setDate(e.target.value); //gestion du changement de la date
  };

  const handleChangeNom = (e) => {
    setNom(e.target.value); //gestion du changement du nom de la tache
  };

  const handleClick = () => {
    const div = document.getElementById("modal-creation");
    div.showModal(); // affichage de la modal de création de tache
  };

  const handleCancel = () => {
    document.getElementById("modal-creation").close();
    setDate(new Date().toLocaleDateString("fr-FR"));
    setNom(""); // gestion de l'annulation de création de tache
  };

  const handleAdd = () => { // gestion de la création de tache
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

  return (
    <>
      <button
        className="bg-blue-600 text-white p-2 px-6 rounded-lg border h-12 w-auto m-auto border-gray-600 hover:bg-blue-500"
        onClick={handleClick}
      >
        Ajouter une nouvelle tâche
      </button>
      <dialog
        id="modal-creation"
        className="bg-slate-100 rounded-lg border border-slate-300 py-4 px-6 w-96"
      >
        <h1 className="flex justify-center font-bold pb-3">Ajouter une tâche</h1>
        <span className="flex justify-between pb-5">
          Nom
          <input
            type="text"
            className=" border border-slate-300 rounded-md"
            placeholder="Tâche a effectuer"
            value={nom}
            onChange={(e) => handleChangeNom(e)}
            maxLength={52}
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
            className="bg-gray-300 p-2 px-6 rounded-lg border w-32 hover:bg-gray-200"
            onClick={handleCancel}
          >
            Annuler
          </button>
          <button
            className="bg-blue-600 p-2 px-6 rounded-lg border w-32 text-white hover:bg-blue-400"
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
