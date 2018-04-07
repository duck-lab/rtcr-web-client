import { h, Component } from 'preact';
import Channel from './channel'
import { PropTypes } from 'preact-compat';
// import style from './style';

export default class List extends Component {
	render({ channels, setChannel }) {
		return (
      <ul>{
        channels.map(channel => {
          return <Channel channel={channel} setChannel={setChannel} />
        })
      }</ul>
      
		);
	}
}

List.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
}
