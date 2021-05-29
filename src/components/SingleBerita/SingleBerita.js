import React from "react";
import { Editor } from 'react-draft-wysiwyg';

import './SingleBerita.scss';

const SingleBerita = props => {
  return (
    <section className="SingleBerita">
      <div className="Container">
        <h1 className="Title">{props.berita.title}</h1>
        <Editor
          editorState={props.editor}
          toolbarStyle={{ display: 'none' }}
          editorStyle={{ pointerEvents: 'none' }} />
      </div>
    </section>
  );
}

export default SingleBerita;