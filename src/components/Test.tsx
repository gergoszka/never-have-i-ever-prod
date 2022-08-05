import { ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Test = (): ReactElement => {
	const sentences = [
		"ettem halat",
		"törtem el valamimet",
		"repültem",
		"maszturbáltam X helyen, ahol Hunor már igen",
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
				{index + 1}. Én még soha nem
				<span className="sentence-variable"> {sentences[index]}.</span>
			</div>
			<div className="btn-group">
				<button className="btn-prev" onClick={() => onClick(false)}>
					Previous
				</button>
				<button className="btn-random">Random</button>
				<button className="btn-next" onClick={() => onClick(true)}>
					Next
				</button>
			</div>
		</div>
	);
};
