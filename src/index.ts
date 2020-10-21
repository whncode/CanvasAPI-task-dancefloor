import { FakeApi } from "./api/FakeApi";
import { Dancefloor } from "./views/Dancefloor";
import { Renderer } from "./views/Renderer";
console.log('app loaded');
//create renderer
const renderer = new Renderer(800, 800);

const fakeApi = new FakeApi();


//initiation config
fakeApi.getConfig().then((danceFloorConfig) => {
	const dancefloor = new Dancefloor(renderer, danceFloorConfig);
});



