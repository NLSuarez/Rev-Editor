import React, { Component } from "react";
import BBCode from '@bbob/react/es/Component';
import reactPreset from '@bbob/preset-react/es';
import "./App.scss";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    /*const placeholderText = `# Revaliir Prototype
![Revaliir Welcome Banner](https://revaliir.net/media/uploads/2018/06/01/welcomenew1y.png)

>Be Daring
>[Home](https://revaliir.net/)
## For the eventual conversion from bbcode to BBCode
We originally used _bbcode_ styles like this to format our user's posts:
\`\`\`
[b][u]This is a bolded and underlined title[/b][/u]
\`\`\`

Now we will use **BBCode** styles like so:
\`\`\`
__**This is a bolded and underlined title**__
\`\`\`
###### They will run in fear...
Provided the devs don't run first considering we need to:
1. Implement all the buttons for this.
2. Protect against \`\`\`XSS\`\`\` attacks.
3. Implement backwards compatibility for bbcode so old posts still display correctly.
`;*/
    const placeholderText = `
    [h1]Revaliir Prototype[/h1]
    [img]https://revaliir.net/media/uploads/2018/06/01/welcomenew1y.png[/img]
    [url=https://revaliir.net/]Home[/url]
    `

    this.state = {
      BBCode: placeholderText,
      generatedHTML: this.createHTML(placeholderText),
      pastSelections: {}, //Only populate if a person has used the buttons to add in something.//
    };
  }

  /* createHTML = BBCode => {
    //let createdHTML = marked(BBCode);
    let createdHTML = BBCode;
    return { __html: createdHTML };
  }; */

  handleTyping = BBCode => {
    let createdHTML = this.createHTML(BBCode);
    this.setState(
      Object.assign({}, this.state, {
        BBCode: BBCode,
        generatedHTML: createdHTML
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
        <Preview text={this.state.generatedHTML} />
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
    return (
      
      <BBCode plugins={[reactPreset()]}>
        {/*<div
          id="preview"
          className="previewArea row text-center"
          dangerouslySetInnerHTML={this.props.text}
        />*/}
        {this.props.text}
      </BBCode>
    );
  }
}
