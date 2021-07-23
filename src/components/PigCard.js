import { useState } from "react"

function PigCard( {name, image, specialty, weight, greased, medal, key }) {
	const [pigClicked, setPigClicked] = useState(false) 

	const handleClick = () => {
		setPigClicked(!pigClicked)
	}
	
	function displayInfo() {
		return (
				<ul>
					<li>Speciality: {specialty}</li>
					<li>Weight: {weight}</li>
					<li>Greased: {greased ? "greasy" : "clean"}</li>
					<li className="achievementText" >Highest Medal Achieved: {medal}</li>
				</ul>
		)
	}

	return (
		<div className="pigTile" key={key} onClick={handleClick}>
			<h3>{name}</h3>
			{pigClicked ? displayInfo() : ""}
			<img src={image} alt={`${name}`} />
		</div>
	)
}

export default PigCard