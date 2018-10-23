import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
	state = {
		players: [
			{
				id: 1,
				name: 'Guil',
				score: 0
			},
			{
				id: 2,
				name: 'Treasure',
				score: 0
			},
			{
				id: 3,
				name: 'Ashley',
				score: 0
			},
			{
				id: 4,
				name: 'James',
				score: 0
			}
		]
	};

	handleScoreChange = (index, delta) => {
		this.setState(prevState => ({
			score: (prevState.players[index].score += delta)
		}));
	};

	handleRemovePlayer = id => {
		this.setState(prevState => {
			return {
				players: prevState.players.filter(p => p.id !== id)
			};
		});
	};

	render() {
		return (
			<div className="scoreboard">
				<Header title="Scoreboard" players={this.state.players} />

				{/* Players list */}
				{this.state.players.map(({ name, score, id }, index) => (
					<Player
						name={name}
						score={score}
						id={id}
						key={id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}

export default App;
