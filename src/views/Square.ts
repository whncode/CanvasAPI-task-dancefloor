import { randomColor } from "../utils/Utils";
import { Renderer } from "./Renderer";

export class Square {
	constructor(
		private _renderer : Renderer,
		public x : number,
		public y : number,
		public size: number,
		public color: string = randomColor()
	) {
		this.draw();
	}

	public draw() {
		this._renderer.context.fillStyle = this.color;
		this._renderer.context.fillRect(this.x, this.y, this.size, this.size);
	}

	public changeColor() {
		this.color = randomColor();
		this.draw();
	}
}
