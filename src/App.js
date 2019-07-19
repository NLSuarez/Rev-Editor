import React, { Component } from "react";
/*** Toast UI Editor Components***/
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import 'highlight.js/styles/github.css';
import 'tui-editor/dist/tui-editor-extColorSyntax.min.js';
import 'tui-color-picker/dist/tui-color-picker.min.css';
import Editor from 'tui-editor';


import "./App.scss";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    const placeholderText = `# This is the markdown placeholder
    `
    
    this.state = {
      markdown: placeholderText,
    };
  }

  handleTyping = markdown => {
    console.log(markdown);
    this.setState(
      Object.assign({}, this.state, {
        markdown: markdown,
      })
    );
  };

  render() {
    return (
      <div className="container">
        <PostEditorArea
          text={this.state.markdown}
          handleTyping={this.handleTyping}
        />
      </div>
    );
  }
}

class PostEditorArea extends Component {

  componentDidMount() {
    let editor = new Editor({
      el: this.editor,
      initialEditType: 'markdown',
      previewStyle: 'tab',
      height: '300px',
      events: {
        change: this.handleTyping,
      },
      exts: ['colorSyntax'],
      initialValue: this.props.text,
    });
    this.setState({
      editor: editor
    });
  }

  handleTyping = event => {
    this.props.handleTyping(this.editor.getMarkdown);
  };

  render() {
    return (
      <div className="row text-center">
        <div className="writingArea" ref={el => this.editor = el}>
        </div>
      </div>
    );
  }
}


