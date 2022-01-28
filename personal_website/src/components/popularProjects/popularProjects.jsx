export default function PopularProjects(){
	return(
		<div className="container-fluid">
			<div className="popular">
				<h4>Projects</h4>
				<div>
					<table className="table">
						<thead >
							<tr>
								<th>Title</th>
								<th>Description</th>
								<th>Language</th> 
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/Social-Media" className="plainLink">Social-Media</a>
								</td>
								<td>
									Facebook clone build in nodejs, react and socket.io
								</td>
								<td>JavaScript</td>
							</tr>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/graphql" className="plainLink">Blog-Backend</a>
								</td>
								<td>
									Blog-backend made with nodejs, graphql and socket.io
								</td>
								<td>JavaScript</td>
							</tr>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/graphqlfrontend" className="plainLink">Blog-Fronted</a>
								</td>
								<td>
									Blog-frontend made with ReactJs and socket.io
								</td>
								<td>JavaScript</td>
							</tr>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/SudokuSolver" className="plainLink">Sudoku Solver</a>
								</td>
								<td>Sudoku game using pygame and using backtracking algorithm to solve the sudoku</td>
								<td>Python</td>
							</tr>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/WeatherApp" className="plainLink">Weather App</a>
								</td>
								<td>Weather app build in flask using the openWeather API</td>
								<td>Python</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="future">
					<h5>Future Ventures (Teach myself in 2022)</h5>
					<ul>
						<li>
							Machine Learning/AI
						</li>
						<li>
							Security
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
	
}