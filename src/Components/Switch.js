import React from "react";
export default function Switch() {
  return (
    <Switch>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Default switch checkbox input
        </label>
      </div>
     
    </Switch>
  );
}
