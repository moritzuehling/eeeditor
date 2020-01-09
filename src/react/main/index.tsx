import './style.scss';
import * as React from 'react';
import { view } from 'react-easy-state';
import { state } from '../../state';
import { boundMethod } from 'autobind-decorator';


@view
export class Main extends React.Component {
  @boundMethod
  setText(ev: React.ChangeEvent<HTMLTextAreaElement>) {
    if (ev.target.value.indexOf('e') != -1 || ev.target.value.indexOf('E') !== -1) {
      return;
    }

    state.text = ev.target.value;
  }

  render() {
    return (
      <div className='main'>
        <textarea value={state.text} onChange={this.setText} />
      </div>
    );
  }
}