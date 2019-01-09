import React, { Component } from "react";
import reactRender from "@bbob/react/es/render";
import revPreset from "./revPreset.js";
import "./App.scss";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    const placeholderText = `[b]This is a test to try and [i]break[/i] this [b][/b][b]parser[/b][/b]
    [size=16][size=14]If this works, the [size=26]parser[/size] is likely[/size] very robust.[/size]
    [][/]
    [color=red]R[color=green]G[color=blue]B[/color][/color][/color]
    `

    this.state = {
      BBCode: placeholderText,
      PreviewText: placeholderText,
      pastSelections: {}, //Only populate if a person has used the buttons to add in something.//
    };
  }

  handleTyping = BBCode => {
    this.setState(
      Object.assign({}, this.state, {
        BBCode: BBCode,
        PreviewText: BBCode
      })
    );
  };

  render() {
    return (
      <div className="container">
        <BBCodeEditor
          text={this.state.BBCode}
          handleTyping={this.handleTyping}
        />
        <Preview text={this.state.PreviewText} />
      </div>
    );
  }
}

class BBCodeEditor extends Component {
  
  constructor(props) {
    super(props);
    this.textBox = React.createRef();
  }

  handleTyping = event => {
    this.props.handleTyping(event.target.value);
  };

  handleToolbarClick = event => {
    this.handleTagAddition(event.target.value);
  }

  handleTagAddition = tag => {
    let startSelection = this.textBox.current.selectionStart;
    let endSelection = this.textBox.current.selectionEnd;
    let allText = this.props.text;
    let selection = allText.substring(startSelection, endSelection);
    let newText = "";
    switch(tag){
      //Note figure out how to undo these after they are added.
      //Idea: Keep a state history of changes made via the buttons and undo them based upon metadata
      case "B":
        newText = allText.substring(0, startSelection) + "[b]" + selection + "[/b]" + allText.substring(endSelection, allText.length);
        break;
      case "I":
        newText = allText.substring(0, startSelection) + "[i]" + selection + "[/i]" + allText.substring(endSelection, allText.length);
        break;
      case "U":
        newText = allText.substring(0, startSelection) + "[u]" + selection + "[/u]" + allText.substring(endSelection, allText.length);
        break;
      case "S":
        newText = allText.substring(0, startSelection) + "[s]" + selection + "[/s]" + allText.substring(endSelection, allText.length);
        break;
      case "SIZE":
        newText = allText.substring(0, startSelection) + "[size=8]" + selection + "[/size]" + allText.substring(endSelection, allText.length);
        break;
      default:
        break;
    }
    this.props.handleTyping(newText);    
  }

  render() {
    return (
      <div className="row text-center">
        <div>
          <h1>Here will be the toolbar</h1>
          <button onClick={this.handleToolbarClick} value="B">B</button>
        </div>
        <div className="writingArea">
          <textarea
            id="editor"
            ref={this.textBox}
            rows="5"
            cols="100"
            value={this.props.text}
            onChange={this.handleTyping}
          />
        </div>
      </div>
    );
  }
}

//Preview area for the resultant html that has been sanitized from the BBCode (This will eventually be hidden)
class Preview extends Component {
  render() {
    const parsedBBCode = reactRender(this.props.text, revPreset());
    return (
      <div
      id="preview"
      className="previewArea row text-center"
      >
      {parsedBBCode}
      </div>
    );
  }
}
