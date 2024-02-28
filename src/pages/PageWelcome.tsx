import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	const handleAddFlashcard = () => {
		alert('adding');
	}

	return (
		<>
			<p>
				Site is running in <b>{appData.siteEnvironment}</b> mode.
			</p>
			<h2 className="text-xl mt-3">Flashcards <button className="text-sm bg-slate-300 py-0 px-1 rounded" onClick={handleAddFlashcard}>Add</button></h2>
			<ul className="list-disc ml-7">
				{appData.flashcards.map((flashcard) => {
					return <li key={flashcard.id}>{flashcard.front} - {flashcard.back}</li>;
				})}
			</ul>
		</>
	);
};
