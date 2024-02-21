"use client";

/**
 * This sucks: we should use a state and not manipulate dom
 * this is pure shit, and this instructor sucks, and i blocked him on youtube
 */

import React from "react";

export default function ModalPage() {
  return (
    <div className="text-center">
      <button
        className="btn btn-success text-white text-xl px-4"
        onClick={() =>
          (document.getElementById("my_modal_1") as any).showModal()
        }
      >
        Open modal
      </button>
      <dialog id="my_modal_1" className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">
          Press ESC key to click the button below to close.
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
