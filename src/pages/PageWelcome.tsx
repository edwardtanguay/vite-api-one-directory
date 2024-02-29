/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import * as config from "../shared/config";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	const handleAddFlashcard = () => {
		(async () => {
			const headers = {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			};
			const flashcard = {
				category: "german",
				front: "the dog",
				back: "der Hund",
			};
			try {
				const response = await axios.post(
					`${config.getJsonServerUrl()}/flashcards`,
					flashcard,
					{ headers }
				);

				if (response.status === 201) {
					alert("ok");
				} else {
					console.log(`ERROR: ${response.status}`);
				}
			} catch (e: any) {
				console.log(`ERROR: ${e.message}`);
			}
		})();
	};

	return (
		<>
			<p>
				Site is running in <b>{appData.siteEnvironment}</b> mode.
			</p>
			<h2 className="text-xl mt-3">
				Flashcards{" "}
				<button
					className="text-sm bg-slate-300 py-0 px-1 rounded"
					onClick={handleAddFlashcard}
				>
					Add
				</button>
			</h2>
			<ul className="list-disc ml-7">
				{appData.flashcards.map((flashcard) => {
					return (
						<li key={flashcard.id}>
							{flashcard.front} - {flashcard.back}
						</li>
					);
				})}
			</ul>
		</>
	);
};
