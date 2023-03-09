import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      notes {
        _id
        noteText
        noteAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_NOTES = gql`
  query getNotes {
    notes {
      _id
      noteText
      noteAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_NOTE = gql`
  query getSingleNote($noteId: ID!) {
    note(noteId: $noteId) {
      _id
      noteText
      noteAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      notes {
        _id
        noteText
        noteAuthor
        createdAt
      }
    }
  }
`;
