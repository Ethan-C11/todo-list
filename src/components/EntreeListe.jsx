import React from "react";
import { useState, useEffect } from "react";
import ModalSupp from "./ModalSupp";
import ModalModif from "./ModalModif";

// new Date().toLocaleDateString("fr-FR")

function EntreeListe(EntreeProps) {
  let id = EntreeProps.id;
  let nom = EntreeProps.nom;
  let date = EntreeProps.date;
  let bgColor,
    miseEnPageFini = "";
  const [fini, setFini] = useState(EntreeProps.fini);

  const handleChange = (e) => {
    setFini(!fini);
    EntreeProps.changeStatus(id);
  };

  const handleSupp = (e) => {
    const modal = document.getElementById("modal-supp-" + id);
    modal.showModal();
  };

  const handleModif = () => {
    const modal = document.getElementById("modal-modif-" + id);
    modal.showModal();
  }

  const delFromArray = () => {
    EntreeProps.delElementInArray(id);
  };


  if (EntreeProps.index % 2 == 0) {
    bgColor = "bg-white/[.4] backdrop-blur-lg";
  } else {
    bgColor = "bg-white/[.6] backdrop-blur-lg";
  }

  if (fini === true) miseEnPageFini = "line-through";

  return (
    <>
      <ModalSupp
        key={"ModalSupp-" + id}
        id={id}
        nom={nom}
        delFromArray={delFromArray}
      />
      <ModalModif
      key={"ModalModif-"+id}
      id={id}
      nom={nom}
      date={date}
      fini={fini}
      editInArray={EntreeProps.editInArray}
      />
      <div
        id={id}
        className={"flex px-20 py-2 border border-gray-500 w-full gap-10 " + bgColor}
      >
        <input
          type="checkbox"
          checked={fini}
          onChange={(e) => handleChange(e)}
        />

        <div className="flex gap-10 w-full">
          <span className={"text-left truncate w-full font-medium " + miseEnPageFini}>{nom}</span>
          <span className={"text-right " + miseEnPageFini}>{date}</span>
        </div>

        <div className="flex right-10">
          <button
            className="flex text-white px-3 rounded-md border border-gray-500 bg-blue-500 hover:bg-blue-400"
            onClick={(e) => handleModif(e)}
          >
            Modifier
          </button>
          </div>
        <div className="flex right-10">
          <button
            className="flex text-red-700 underline hover:text-red-500"
            onClick={(e) => handleSupp(e)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </>
  );
}

export default EntreeListe;
