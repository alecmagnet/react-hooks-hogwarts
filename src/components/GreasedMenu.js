function GreasedMenu( {greased} ) {
	// console.log(greased)

	const handleFilter = (e) => {
		 
	}

	return (
		<div>
			<select onChange={handleFilter}>
				<option>All</option>
				<option>Greased</option>
				<option>Ungreased</option>
			</select>
		</div>
	)
}

export default GreasedMenu