import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_NOTE } from "../utils/queries";

const SingleNote = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { noteId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_NOTE, {
    // pass URL parameter
    variables: { noteId: noteId },
  });

  const note = data?.note || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header text-light p-2 m-0">
        {note.noteAuthor} <br />
        <span style={{ fontSize: "1rem" }}>
          had this note on {note.createdAt}
        </span>
      </h3>
      <div className="py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {note.noteText}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleNote;
