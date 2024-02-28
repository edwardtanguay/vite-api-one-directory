import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>
				Site is running in <b>{appData.siteEnvironment}</b> mode.
			</p>
			<h2 className="text-xl mt-3">Flashcards</h2>
			<ul className="list-disc ml-7">
				{appData.flashcards.map((flashcard) => {
					return <li key={flashcard.id}>{flashcard.front} - {flashcard.back}</li>;
				})}
			</ul>
		</>
	);
};
