// Author @Manas

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Alert({ alert, rmAlert }) {
  setTimeout(() => {
    rmAlert({
      show: false,
      message: "",
      success: false,
    });
  }, 3500);
  return (
    <div className="px-1 mb-3">
      <div
        className={
          !alert.success
            ? " bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            : "bg-green-100  border-green-500 text-green-700 p-4"
        }
        role="alert"
      >
        {" "}
        {/*If Success Green Use Green Items Otherwise Red Items*/}
        <div className="w-full flex flex-row items-center justify-between">
          <div>
            <p className="font-bold">{alert.success ? "Success" : "Error"}</p>
            <p>{alert.message}</p>
          </div>
          <button
            onClick={() =>
              rmAlert({
                show: false,
                message: "",
                success: false,
              })
            }
            className="pl-3"
          >
            {" "}
            {/*Close Button*/}
            <FontAwesomeIcon icon="window-close" className="text-2xl " />
          </button>
        </div>
      </div>
    </div>
  );
}
