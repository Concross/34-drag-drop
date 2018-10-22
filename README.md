# React TODO App!
===

## App Component
* The App component manages the frontend routes with a navbar
* the `/` route displays the `Landing` component
* the `/dashboard` displays the `Dashboard` component

## Landing Component
* The Landing component displays a brief description of the notes app

## Dashboard Component 
* The Dashboard component manages the entire **application state**
* The state contains a notes array
* It has a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added has the following data
    * `id`: contains the result of `uuid.v1()`
    * `editing`: false by default
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* It has a bound `removeNote(note)` method that removes a note from `state.notes`

## NoteForm Component
* `onComplete` the NoteForm adds a note to the application state

## NoteList Component 
* displays an unordered list of NoteItem components

## NoteItem
* displays the notes content and title
* displays a delete button
  * `onClick` removes the note from the application state
