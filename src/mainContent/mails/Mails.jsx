import React from "react";
import "./mails.css";
import { CgFlagAlt } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import {HiUserCircle} from 'react-icons/hi'
const Mails = ({
  activeFolder,
  folderName,
  handleFlagged,
  handleActiveMail,
  handleDelete,
}) => {
  return (
    <div className="mail__section">
      <h2>{folderName}</h2>
      <ul className="mails">
        {activeFolder.map((item, key) => (
          <li
            className={`mailElement ${item.unread}`}
            key={key}
            id={item.mId}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a href="#" onClick={() => handleActiveMail(item)} >
              <div className="mId">
                
                <strong style={{display:"flex", alignItems:'center' }}><HiUserCircle style={{width:'1.5rem', height:'auto'}}/>{item.mId}</strong>
                {!item.folder.includes("deleted items") ? (
                  <div className="btn">
                    <button onClick={() => handleDelete(item.mId)}>
                      <MdDelete />
                    </button>{" "}
                    <button onClick={() => handleFlagged(item.mId)}>
                      <CgFlagAlt />
                    </button>
                  </div>
                ) : (
                  <div className="btn">
                    <button onClick={() => handleDelete(item.mId)} disabled>
                      deleted
                    </button>
                  </div>
                )}
              </div>
              <div style={{ maxHeight: "50px", overflow: "hidden" }}>
                <strong>{item.subject}:</strong>
                <div className="mailContentPreview">{item.content}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mails;
