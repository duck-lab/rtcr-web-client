import { h, Component } from 'preact';
import List from './list'
import NewForm from './new-form'
import { PropTypes } from 'preact-compat';

import style from './style';

export default class Channels extends Component {
	render(props) {
		return (
      <div class={style.channels}>
        <div class={style.listGroup}>
          <h2>Channels</h2>
          <List {...this.props} />
        </div>
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