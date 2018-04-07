import { h, Component } from 'preact';
import List from './list'
import NewForm from './new-form'
import { PropTypes } from 'preact-compat';

export default class Channels extends Component {
	render(props) {
		return (
      <div>
        <List {...this.props} />
        <NewForm {...this.props} />
      </div>
		);
	}
}

Channels.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired
}