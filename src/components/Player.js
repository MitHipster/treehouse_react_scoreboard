import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Stats from './Stats';

class Player extends PureComponent {
	render() {
		const { name, id, score, index, removePlayer, changeScore } = this.props;
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}>
						✖
					</button>
					{name}
				</span>

				<Counter score={score} index={index} changeScore={changeScore} />
			</div>
		);
	}
}

Stats.propTypes = {
	players: PropTypes.arrayOf(
		PropTypes.shape({
			score: PropTypes.number
		})
	)
};

export default Player;
