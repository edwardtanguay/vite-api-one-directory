import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { appData } = useContext(AppContext);

	return (
		<>
			<p>
				Site is running in <b>{appData.siteEnvironment}</b> mode.
			</p>
		</>
	);
};
