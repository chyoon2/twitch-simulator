import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from './streams/StreamEdit';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamEdit';
import StreamDelete from './streams/StreamEdit';
import StreamShow from './streams/StreamEdit';

const App = () => {
  return (
  <div>
    <BrowserRouter>
    <div>
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/streams/show" exact component={StreamShow} />

    </div>
    </ BrowserRouter>
  </div>
};

export default App;
