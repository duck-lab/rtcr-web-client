import { h, Component } from 'preact';
import linkState from 'linkstate';
import { PropTypes } from 'preact-compat';

import style from './style';

export default class NewForm extends Component {
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addChannel(this.state.newChannelName);
		this.state.newChannelName = ''
	}
	render({}, { newChannelName }) {
		return (
			<form class={style.newform} onSubmit={this.onSubmit}>
				<input type="text" value={newChannelName} onInput={linkState(this, 'newChannelName')} />
			</form>
		);
	}
}

NewForm.propTypes = {
  addChannel: PropTypes.func.isRequired
}
