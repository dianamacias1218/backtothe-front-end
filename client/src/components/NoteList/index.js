import React from "react";
import { Link } from "react-router-dom";

const NoteList = ({ notes, title, showTitle = true, showUsername = true }) => {
  if (!notes.length) {
    return <h3>No Notes Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {notes &&
        notes.map((note) => (
          <div key={note._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${note.noteAuthor}`}
                >
                  {note.noteAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    had this note on {note.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this note on {note.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{note.noteText}</p>
            </div>
            {/* <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/notes/${note._id}`}
            >
              Join the discussion on this note.
            </Link> */}
          </div>
        ))}
    </div>
  );
};

export default NoteList;
