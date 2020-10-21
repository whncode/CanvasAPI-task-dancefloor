import { randomColor } from "../utils/Utils";
import { Dancefloor } from "./Dancefloor";
import { Renderer } from "./Renderer";

/**
 * class for drawing square
 */
export class Square {
	public x : number;
	public y : number;

	private lastSize: number;

	constructor(
		private _renderer : Renderer,
		private _danceFloor: Dancefloor,
		public column: number,
		public row: number,
		public color: string = randomColor()
	) {
		this.draw();
	}

	public draw() {
		this._renderer.context.fillStyle = this.color;
		this.x = this.row * this._danceFloor.squareSize;
		this.y = this.column * this._danceFloor.squareSize;
		console.log(this);
		this._renderer.context.fillRect(this.x, this.y, this._danceFloor.squareSize, this._danceFloor.squareSize);
	}

	public changeColor() {
		this.color = randomColor();
		this.draw();
	}
}
