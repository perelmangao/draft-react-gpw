import{Editor, EditorState} from 'draft-js';
import * as React from 'react';

export default class ReactMde extends React.Component<any, any> {
  public onChange: any;
  constructor(props:any) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState:any) => this.setState({editorState})
  }
  public render() {
    return(
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    )
  }
}