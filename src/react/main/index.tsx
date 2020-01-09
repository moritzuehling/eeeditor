import './style.scss';
import * as React from 'react';
import { view } from 'react-easy-state';
import { state } from '../../state';
import { boundMethod } from 'autobind-decorator';


@view
export class Main extends React.Component {
  @boundMethod
  setText(ev: React.ChangeEvent<HTMLTextAreaElement>) {
    state.cursor = ev.target.selectionStart;
    if (ev.target.value.indexOf('e') != -1 || ev.target.value.indexOf('E') != -1) {
      return;
    }
    state.text = ev.target.value;

    const el = ev.target;
    this.setState({}, () => {
      el.selectionEnd = state.cursor;
    });

  }

  render() {
    return (
      <div className='main'>
        <textarea value={state.text} onChange={this.setText} onFocus={(e) => e.target.selectionStart = state.cursor } />
      </div>
    );
  }
}