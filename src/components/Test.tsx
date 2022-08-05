import { ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Test = (): ReactElement => {
	const sentences = [
		"nem ettem halat",
		"nem törtem el valamimet",
		"nem repültem",
		"nem maszturbáltam X helyen, ahol Hunor már igen",
		"nem mentem be egyetemi órára ittasan",
		"nem sztriptízeltem",
		"nem vertem ki állatos pornóra",
		"nem füveztem",
		"nem toltam szintetikus drogot",
		"nem csaltak meg velem mást",
		"nem láttam Vr pornót",
		"nem vertem állatos pornóra",
		"nem voltam a peresen",
		"nem vertem ki a baráton barátnőjére",
		"nem csaltam meg a párom",
		"nem fantáziáltam csoportos szexről ",
		"nem voltam a Körös-toroknál",
		"nem torkoztam a Körös-toroknál",
		"nem verekedtem felnőttként",
		"nem vesztem össze durván a barátaimmal",
		"nem éreztem magam magányosnak",
		"nem játszottam csótány pókert",
		"nem sírtam idegen vállán",
		"nem törtem össze más eszmei értékkel bíró tárgyát",
		"nem tanultam pszichológiát",
		"nem írtam tanulmányt/szakdolgozatot",
		"nem tetováltattam",
		"nem hennáztam",
		"nem snüsszöztem",
		'nem ittam Hunor "koktéljaiból"',
		"nem akartam szakítani a párommal",
		"nem jártam más kontinensen",
		"sem verekedtem",
		"sem címereztem",
		"sem aludtam meztelenül",
		"nem lettem rajtakapva maszturbálás közben",
		"sem szartam be 14 éves korom után",
		"sem vonzódtam zegzuálisan tanáromhoz",
		"sem láttam végig a Gyűrűk ura trilógiát",
		"sem akartam tetoválást",
		"sem csókolóztam idegen lánnyal",
		"sem voltam kopasz (5mm alatt számítson kopasznak)",
		"sem szartam Vasaséknal",
		"sem ittam pálinkát",
		"sem pisiltem mellé álló kuksival",
		"sem próbáltam ki könnyűdrogot (fű nem számít, eki már igen)",
		"sem aludtam teljes utcaruházatban",
		'sem kiabáltam, hogy "NEM AZAHRIAH A HIBÁS"',
	];

	const [index, setIndex] = useState(0);
	let [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const sentenceParam = searchParams.get("sentence");
		if (sentenceParam) {
			setIndex(Number(sentenceParam) - 1);
		}
	}, [searchParams]);

	const onClick = (isNext: boolean) => {
		if (isNext) {
			if (index < sentences.length - 1) {
				setIndex(index + 1);
				return;
			}
			setIndex(sentences.length - 1);
		} else {
			if (index > 0) {
				setIndex(index - 1);
				return;
			}
			setIndex(0);
		}
	};

	return (
		<div className="test-container ">
			<div className="sentence">
				{index + 1}. Én még soha
				<span className="sentence-variable"> {sentences[index]}.</span>
			</div>
			<div className="btn-group">
				<button className="btn-prev" onClick={() => onClick(false)}>
					Previous
				</button>
				<button className="btn-next" onClick={() => onClick(true)}>
					Next
				</button>
			</div>
		</div>
	);
};
