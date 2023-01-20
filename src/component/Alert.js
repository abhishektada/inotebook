import React from "react";

export default function Alert(props) {
  const capitalize = (text) => {
    if (text === "danger") {
      text = "error";
    }
    let word = text.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "45px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`}
          role="alert"
          style={{ fontSize: "25px", padding: "3px" }}
        >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
}
