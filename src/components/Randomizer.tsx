export const Randomizer = (): JSX.Element => {
	const personVerbs = [
		"kakiltam",
		"repültem",
		"láttam",
		"szexeltem",
		"álmodoztam",
		"körülmetéltem",
		"lőttem",
	];

	const objectVerbs = [
		"lőttem",
		"emeltem",
		"szoptam",
		"torkoztam",
		"ütöttem",
		"csináltam",
		"álmodoztam",
		"néztem",
		"gondoltam",
		"ettem",
		"törtem el",
		"ittam",
		"néztem",
		"tanultam",
	];

	const person = [
		"Orbán Viktor",
		"Csete Sanyi",
		"Azahriah",
		"Kristóf",
		"Gergő",
		"Bíró Dani",
		"Bencsik Dani",
		"Mesi",
		"Réka",
		"Hunor",
		"Ábel",
		"Csekő",
		"Csilla",
	];
	const object = ["kecske", "Neptun", "Asztal", "Kőbányai", "Marihuána"];

	const getRandomElement = (array: string[]) => {
		const randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	};

	return (
		<div className="test-container ">
			<div className="sentence">
				Én még soha nem
				<span className="sentence-variable">
					{` ${getRandomElement(personVerbs)} ${getRandomElement(
						person
					)}-t.`}
				</span>
			</div>
		</div>
	);
};
