import React from "react";
import { Editor } from 'react-draft-wysiwyg';

import './SingleBerita.scss';

const SingleBerita = props => {
  return (
    <section className="SingleBerita">
      <div className="SingleBerita_Container">
        <h1 className="Title">{props.berita.title}</h1>
        <Editor
          editorState={props.editor}
          wrapperStyle={{maxWidth: '900px'}}
          toolbarHidden={true}
          readOnly={true} />
      </div>
    </section>
  );
}

export default SingleBerita;