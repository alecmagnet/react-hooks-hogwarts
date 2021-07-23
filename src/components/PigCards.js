import PigCard from "./PigCard"
import React, { useState } from 'react'

function PigCards( {pigs} ) {
	const [selectedCategory, setSelectedCategory] = useState("All")

	function handleFilterChange(e) {
		console.log(e)
		setSelectedCategory(e.target.value)
	}

	let pigsToDisplay = []

	if (selectedCategory === "All") {
		pigsToDisplay = pigs
	} else if (selectedCategory ==='true') {
		let booleanSelectedCategory = !!selectedCategory
		pigsToDisplay = pigs.filter((pig) => {
			return (pig.greased === booleanSelectedCategory)
		})
		console.log(pigsToDisplay)
	} else {
		let falsePig = false
		pigsToDisplay = pigs.filter((pig) => {
			return (pig.greased === falsePig)
		})
	}

	return (
		<div>
			<div>		
				{<select onChange={handleFilterChange}>
					<option value="All">Show only greased or ungreased...</option>
					<option value={true}>Greased</option>
					<option value={false}>Ungreased</option>
				</select>}
			</div>
			<div>
				{pigsToDisplay.map((eachPig) => {
					return (
						<>
							<PigCard id={eachPig.name} name={eachPig.name} image={eachPig.image} specialty={eachPig.specialty} weight={eachPig.weight} greased={eachPig.greased} medal={eachPig["highest medal achieved"]}/>
						</>
					)
				})}
			</div>			
		</div>
	)
}

export default PigCards