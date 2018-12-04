import React, { Component } from "react";
import marked from "marked";
import "./App.scss";

marked.setOptions({
  breaks: true,
  sanitize: true
});

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    const placeholderText = `# Revaliir Prototype
![Revaliir Welcome Banner](https://revaliir.net/media/uploads/2018/06/01/welcomenew1y.png)

>Be Daring
>[Home](https://revaliir.net/)
## For the eventual conversion from bbcode to Markdown
We originally used _bbcode_ styles like this to format our user's posts:
\`\`\`
[b][u]This is a bolded and underlined title[/b][/u]
\`\`\`

Now we will use **markdown** styles like so:
\`\`\`
__**This is a bolded and underlined title**__
\`\`\`
###### They will run in fear...
Provided the devs don't run first considering we need to:
1. Implement all the buttons for this.
2. Protect against \`\`\`XSS\`\`\` attacks.
3. Implement backwards compatibility for bbcode so old posts still display correctly.
`;

    this.state = {
      markdown: placeholderText,
      generatedHTML: this.createHTML(placeholderText)
    };
  }

  createHTML = markdown => {
    let createdHTML = marked(markdown);
    return { __html: createdHTML };
  };

  handleTyping = markdown => {
    let createdHTML = this.createHTML(markdown);
    this.setState(
      Object.assign({}, this.state, {
        markdown: markdown,
        generatedHTML: createdHTML
      })
    );
  };

  render() {
    return (
      <div className="container">
        <MarkdownEditor
          text={this.state.markdown}
          handleTyping={this.handleTyping}
        />
        <Preview text={this.state.generatedHTML} />
      </div>
    );
  }
}

class MarkdownEditor extends Component {
  render() {
    return (
        <div className="row text-center">
          <TextboxToolbar />
          <Textbox
            text={this.props.text}
            handleTyping={this.props.handleTyping}
          />
        </div>
    );
  }
}

class TextboxToolbar extends Component {
  render() {
    return (
      <div>
        <h1>Here will be the toolbar</h1>
      </div>
    );
  }
}

class Textbox extends Component {
  handleTyping = event => {
    this.props.handleTyping(event.target.value);
  };

  render() {
    return (
      <div className="writingArea">
        <textarea
          id="editor"
          rows="5"
          cols="100"
          value={this.props.text}
          onChange={this.handleTyping}
        />
      </div>
    );
  }
}

//Preview area for the resultant html that has been sanitized from the markdown (This will eventually be hidden)
class Preview extends Component {
  render() {
    return (
      <div
        id="preview"
        className="previewArea row text-center"
        dangerouslySetInnerHTML={this.props.text}
      />
    );
  }
}
