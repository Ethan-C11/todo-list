import React from "react";

function ModalSupp(Props) {
  let id = Props.id;
  let nom = Props.nom;

  const handleSupp = () => {
    Props.delFromArray();
    const dialog = document.getElementById("modal-supp-" + id);
    dialog.close();
  };

  const handleCancel = () => {
    const dialog = document.getElementById("modal-supp-" + id);
    dialog.close();
  };

  return (
    <dialog
      id={"modal-supp-" + id}
      className="bg-slate-100 rounded-md border border-slate-300 p-5"
    >
      <h1 className="font-bold">Suppression de l'entrée</h1>
      <p>Voulez-vous vraiment supprimer l'entrée : "{nom}" ?</p>
      <div className="flex justify-end pt-5 gap-3">
        <button
          id="n"
          className="bg-gray-400 p-2 px-6 rounded-lg border w-32"
          onClick={handleCancel}
        >
          Non
        </button>
        <button
          id="y"
          className="bg-red-400 p-2 px-6 rounded-lg border w-32"
          onClick={(e) => handleSupp(e)}
        >
          Oui
        </button>
      </div>
    </dialog>
  );
}

export default ModalSupp;
