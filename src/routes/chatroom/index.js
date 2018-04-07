import { h, Component } from 'preact';
import Channels from './channels'
import style from './style';

export default class Chatroom extends Component {
	state = {
		channels: [{
			id: 0,
			name: 'default'
		}]
	}

	addChannel = (name) => {
		let { channels }= this.state;
		channels.push({
			id: channels.length,
			name
		});
		this.setState({ channels });
		// TODO: Send notify to server
	}
	setChannel = (activeChannel) => {
		this.setState({ activeChannel })
		// TODO: Send notify to server
	}

	render({ }, { channels }) {
		return (
			<div class={style.chatroom}>
				<Channels
					channels={channels}
					addChannel={this.addChannel}
					setChannel={this.setChannel}
				/>
			</div>
		);
	}
}
