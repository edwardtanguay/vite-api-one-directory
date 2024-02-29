import * as config from "./config";
export const getJsonServerPort = () => {
	return 4205;
};

export const getApiPort = () => {
	return 4206;
};

export const getFrontendPort = () => {
	return 4207;
};

export const getJsonServerUrl = () => {
	return "http://localhost:" + config.getJsonServerPort();
};
