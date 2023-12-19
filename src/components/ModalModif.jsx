import React from 'react'
import { useState } from 'react';

function ModalModif(Props) {

    let [nom, setNom] = useState(Props.nom);
    let [date, setDate] = useState(Props.date);
    let fini = Props.fini
    const id = Props.id
  
    const handleChangeDate = (e) => {
      setDate(e.target.value);
    };
  
    const handleChangeNom = (e) => {
      setNom(e.target.value);
    };
  
    const handleCancel = () => {
      document.getElementById("modal-modif-"+id).close();
      setDate(Props.date);
      setNom(Props.nom);
    };
  
    const handleEdit = () => {
      if (nom === undefined || nom === "") {
        alert("Veuillez renseigner un nom pour votre tâche");
        return;
      }
      if (date === undefined || date === "") {
        alert("Veuillez renseigner une date pour votre tâche");
        return;
      }
      const nouvelleTache = { id: id, nom: nom, date: date, fini: fini };
      Props.editInArray(nouvelleTache);
      document.getElementById("modal-modif-"+id).close();
    };

  return (
<>
     
      <dialog
        id={"modal-modif-"+id}
        className="bg-slate-100 rounded-lg border border-slate-300 py-4 px-6 w-96"
      >
        <h1 className="flex justify-center font-bold pb-3">Modifier la tâche</h1>
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
            onClick={handleEdit}
          >
            Modifier
          </button>
        </div>
      </dialog>
    </>
  )
}

export default ModalModif