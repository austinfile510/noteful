import React from 'react';
import STORE from './dummy-store';
import { Route } from 'react-router-dom';
import FolderList from './FolderList';
import NoteList from './NoteList';
import Note from './Note';
import './App.css';

export default class App extends React.Component {
  state = {
    notes: STORE.notes,
    folders: STORE.folders,
  };
  render() {
    return (
      <div>
        <header>
          <h1>Noteful</h1>
        </header>
        <main>
          <aside >
          <Route exact path="/" render={routerProps => <FolderList folders = {this.state.folders} />} />
          <Route path="/folder/:folderId" render={routerProps => <FolderList folders = {this.state.folders} />} />
          </aside>
          <section>
          <Route exact path="/" render={routerProps => <NoteList notes = {this.state.notes} />} />
          <Route exact path="/folder/:folderId" render={routerProps => <NoteList notes = {this.state.notes.filter(item => item.folderId == routerProps.match.params.folderId)} />} />
          <Route path="/note/:noteId" render={routerProps => <Note 
          notes={this.state.notes.find(item => item.id == routerProps.match.params.noteId)} />} />
          </section>
        </main>
      </div>
    );
  }
}
