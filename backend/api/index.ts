import * as config from '../../src/shared/config'; 
import { app } from './server';

app.listen(config.getBackendPort(), () => {
	console.log(`http://localhost:${config.getBackendPort()}`);
})