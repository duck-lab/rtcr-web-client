import { h, Component } from 'preact';
import Channel from './channel'
import { PropTypes } from 'preact-compat';

import style from './style';

export default class List extends Component {
	render({ channels, setChannel, activeChannel }) {
		return (
      <ul class={style.list}>{
        channels.map(channel => {
          return <Channel
            channel={channel}
            setChannel={setChannel}
            activeChannel={activeChannel}
          />
        })
      }</ul>
      
		);
	}
}

List.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
}
