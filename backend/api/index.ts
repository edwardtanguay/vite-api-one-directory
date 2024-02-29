import * as config from '../../src/shared/config'; 
import { app } from './server';

app.listen(config.getApiPort(), () => {
	console.log(`http://localhost:${config.getApiPort()}`);
})