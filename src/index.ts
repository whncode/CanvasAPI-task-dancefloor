import { FakeApi } from "./api/FakeApi";
import { Dancefloor } from "./views/Dancefloor";
import { Renderer } from "./views/Renderer";
console.log('app loaded');


const fakeApi = new FakeApi();

let dancefloor : Dancefloor;
//initiation config

const initFn = () => {
	//create renderer

	const targetForCanvas = document.getElementById("canvasTarget");
	const renderer = new Renderer(targetForCanvas.clientWidth, targetForCanvas.clientHeight, targetForCanvas);

	fakeApi.getRandomConfig().then((danceFloorConfig) => {
		console.log('dancefloor config: ', danceFloorConfig);
		dancefloor = new Dancefloor(renderer, danceFloorConfig);
	});

	const configForm = document.getElementById("configForm");

	// @TODO it's shitty solution, looks like in '99, react will be very helpful...
	configForm.addEventListener("submit", (event) => {
		const formData = new FormData(document.querySelector('form'));
		dancefloor.update(formData.get("rows"), formData.get("columns"));
		event.preventDefault();
		return false;
	});

	// handle window resize
	window.addEventListener("resize", () => {
		renderer.width = targetForCanvas.clientWidth;
		renderer.height = targetForCanvas.clientHeight;
		renderer.resize();
		dancefloor.redraw();
	})
};

//handle form

window.addEventListener("load", initFn);


