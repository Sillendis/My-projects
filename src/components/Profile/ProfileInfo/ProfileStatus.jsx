import s from "./ProfileInfo.module.css";
import React, { useState, useEffect } from "react";

function ProfileStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    if (props.status !== status) {
      setStatus(props.status);
    }
  }, [props.status]);

  const handleDoubleClick = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleBlur = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            value={status}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={handleDoubleClick}>
            {props.status || "No status"}
          </span>
        </div>
      )}
    </div>
  );
}

export default ProfileStatus;
