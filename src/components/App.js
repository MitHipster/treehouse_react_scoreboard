import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

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

	prevPlayerId = 4;

	handleScoreChange = (index, delta) => {
		this.setState(prevState => ({
			score: (prevState.players[index].score += delta)
		}));
	};

	getHighScore = () => {
		const scores = this.state.players.map(player => player.score);
		return Math.max(...scores);
	};

	handleAddPlayer = name => {
		this.setState(prevState => {
			return {
				players: [
					...prevState.players,
					{
						name,
						score: 0,
						id: (this.prevPlayerId += 1)
					}
				]
			};
		});
	};

	handleRemovePlayer = id => {
		this.setState(prevState => {
			return {
				players: prevState.players.filter(p => p.id !== id)
			};
		});
	};

	render() {
		const highScore = this.getHighScore();
		return (
			<div className="scoreboard">
				<Header players={this.state.players} />

				{/* Players list */}
				{this.state.players.map(({ name, score, id }, index) => (
					<Player
						name={name}
						score={score}
						id={id}
						key={id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						isHighScore={highScore === score}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
				<AddPlayerForm addPlayer={this.handleAddPlayer} />
			</div>
		);
	}
}

export default App;
