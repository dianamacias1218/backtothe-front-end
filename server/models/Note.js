const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const noteSchema = new Schema({
  noteText: {
    type: String,
    required: 'Write a note.',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Note = model('Note', noteSchema);

module.exports = Note;