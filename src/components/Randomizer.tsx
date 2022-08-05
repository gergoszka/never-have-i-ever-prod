import { useState } from "react";

export const Randomizer = (): JSX.Element => {
	const personVerbs = [
		"kakiltam",
		"repültem",
		"láttam",
		"szexeltem",
		"álmodoztam",
		"körülmetéltem",
		"lőttem",
		"basztam",
		"csaltam meg",
		"taperoltam le",
		"szexeltem",
		"helikoptereztem",
		"cigiztem",
		"fenekeltem el",
		"pózoltam",
	];

	const objectVerbs = [
		"helikoptereztem",
		"cigiztem",
		"hallgattam",
		"ettem",
		"szartam",
		"nyaltam",
		"csaptam",
		"hánytam",
		"hugyoztam",
		"szagoltam",
		"karmoltam",
		"szedtem szét",
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
		"adtam",
		"kaptam",
	];

	const people = [
		"Alekosz",
		"Hunor szőrtelen segge",
		"a Mikulás",
		"valamelyikőnk barátnője",
		"az exem",
		"egy hajléktalan",
		" egy random ember egy buliban",
		"kecske",
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
	const objects = [
		"kecske",
		"Neptun",
		"Asztal",
		"Kőbányai",
		"Marihuána",
		"zsebkendő",
		"telefon",
		"melltartó",
		"női bugyi",
		"műpina",
		"műfasz",
		"tenga egg",
		"vér a pinából",
		"koton",
		"szar",
		"cellux",
		"gésagolyók",
		"esemény utáni tabletta",
		"kutyaszar",
		"kutyakaja",
		"romlott kaja",
		"nude",
		"péniszgyűrű",
		"síkosító",
		"zokni",
		"Videa.hu",
		"espresso",
	];

	const getRandomElement = (array: string[]) => {
		const randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	};

	const getRandomSentence = () => {
		const randomArray = Math.floor(Math.random() * 2);
		if (randomArray) {
			return ` ${getRandomElement(personVerbs)} ${getRandomElement(
				people
			)}`;
		} else {
			return ` ${getRandomElement(objectVerbs)} ${getRandomElement(
				objects
			)}`;
		}
	};

	const [randomSentence, setRandomSentence] = useState(getRandomSentence());

	const onClick = () => {
		setRandomSentence(getRandomSentence());
	};

	return (
		<div className="test-container ">
			<div className="sentence">
				Én még soha nem
				<span className="sentence-variable">{randomSentence}</span>
			</div>
			<div className="btn-group"></div>
			<button className="btn-random" onClick={onClick}>
				Random
			</button>
		</div>
	);
};
