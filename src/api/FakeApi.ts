import { DanceFloorConfig } from "../types/DanceFloorConfig";
import { randomNumber } from "../utils/Utils";

//fake api timeout in ms
const FAKE_API_TIMEOUT = 500;


export class FakeApi {
	constructor (
	) {

	}

	getRandomConfig() : Promise<DanceFloorConfig> {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve({
				columns: randomNumber(2,10),
				rows: randomNumber(2, 10)
			})
		, 500);
	})


	}
}
