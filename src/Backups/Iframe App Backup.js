import React, { Component } from "react";
import $ from 'jquery';
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
    };
  }

  handleTyping = BBCode => {
    this.setState(
      Object.assign({}, this.state, {
        BBCode: BBCode,
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
      </div>
    );
  }
}

class BBCodeEditor extends Component {

  componentDidMount () {
    $(document).ready(function() {
      console.log($('#editorWindow').contents().find('#editor').contents());
    });
    
  }
  handleTyping = event => {
    //Collect text from inside the iframe
    this.props.handleTyping(event.target.value);
  };

  render() {
    return (
      <div className="row text-center">
        <div className="writingArea">
          <iframe 
          id="editorWindow"
          title="Editor" 
          width="100%" 
          height="500px"
          marginHeight="35px"
          ref={(f) => { this.editorWindow = f;}}
          onChange={this.handleTyping}
          srcDoc='<head>
          <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

          <script src="/wysibb/jquery.wysibb.min.js"></script>
          <link rel="stylesheet" href="/wysibb/theme/default/wbbtheme.css" />

          <script>
          $(document).ready(function() {
            /*var wbbOpt = {
              buttons: ""
            }*/
            $("#editor").wysibb();
          });
          </script>
          </head>

          <body>
          <textarea id="editor" 
          rows="25"
          cols="100"
          ></textarea>
          </body>'>
            
          </iframe>
        </div>
      </div>
    );
  }
}


