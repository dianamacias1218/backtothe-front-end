import React from "react";
import { useQuery } from "@apollo/client";

import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";

import { QUERY_NOTES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_NOTES);
  const notes = data?.notes || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          id="note"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <NoteForm />
        </div>
        <div className="col-12 p-4 col-md-8 mb-3" id="note">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteList notes={notes} title="Note(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
