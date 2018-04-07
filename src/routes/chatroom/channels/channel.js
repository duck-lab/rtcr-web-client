import { h, Component } from 'preact';
import { PropTypes } from 'preact-compat';
// import style from './style';

export default class Channel extends Component {
	onClick(e) {
		e.preventDefault();
		const { setChannel, channel } = this.props;
		setChannel(channel);
	}
	render({channel, activeChannel}) {
		const active = channel === activeChannel ? 'active' : '';
		return (
			<li class={active}>
				<a onClick={this.onClick.bind(this)}>{channel.name}</a>
			</li>
		);
	}
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired
}
