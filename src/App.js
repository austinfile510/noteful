import React from 'react';
// import STORE from './dummy-store';
import { Route, Link } from 'react-router-dom';
import FolderList from './FolderList';
import NoteList from './NoteList';
import Note from './Note';
import AppContext from './AppContext';
import NoteNav from './NoteNav';
import './App.css';

export default class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    fetch(`http://localhost:9090/folders`)
      .then((res) => res.json())
      .then((responseJson) => {
        this.setState({
          folders: responseJson,
        });
        return fetch(`http://localhost:9090/notes`);
      })
      .then((res) => res.json())
      .then((responseJson) => {
        this.setState({
          notes: responseJson,
        });
      });
  }

  onDelete = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: "DELETE",
    }).then((response) => {
      this.componentDidMount();
    });
  };

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      onDelete: this.onDelete,
    };
    return (
      <div>
      <AppContext.Provider value={contextValue}>
        <header>
          <Link to="/">
          <h1>Noteful</h1>
          </Link>
        </header>
          <main>
            <aside>
              <Route exact path="/" component={FolderList} />
              <Route path="/folder/:folderId" component={FolderList} />
              <Route path="/note/:noteId" component={NoteNav} />
            </aside>

            <section>
              <Route exact path="/" component={NoteList} />
              <Route exact path="/folder/:folderId" component={NoteList} />
              <Route path="/note/:noteId" component={Note} />
            </section>
          </main>
        </AppContext.Provider>
      </div>
    );
  }
}
