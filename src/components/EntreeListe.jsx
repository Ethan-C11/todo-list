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

  const delFromArray = () => {
    EntreeProps.delElementInArray(id);
  };

  if (id % 2 == 0) {
    bgColor = "bg-white";
  } else {
    bgColor = "bg-gray-100";
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
      <div
        id={id}
        className={"flex px-20 py-2 border w-full gap-10 " + bgColor}
      >
        <input
          type="checkbox"
          checked={fini}
          onChange={(e) => handleChange(e)}
        />

        <div className="flex gap-10 w-full">
          <span className={"text-left w-full " + miseEnPageFini}>{nom}</span>
          <span className={"text-right " + miseEnPageFini}>{date}</span>
        </div>

        <div className="flex right-10">
          <button
            className="flex text-red-700 underline"
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
