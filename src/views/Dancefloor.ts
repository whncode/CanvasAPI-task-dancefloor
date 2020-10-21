import { DanceFloorConfig } from "../types/DanceFloorConfig";
import { Square } from "./Square";
import { Renderer } from "./Renderer";

export class Dancefloor {
	private _squares : Set<Square> = new Set();

	constructor(
		private  _renderer: Renderer,
		private _danceFloorConfig : DanceFloorConfig
	) {
		this.draw();
	}

	public draw() {
		const rectWidth = this._renderer.width / this._danceFloorConfig.rows;
		const rectHeight = this._renderer.height / this._danceFloorConfig.columns;

		const squareSize = Math.min(rectWidth, rectHeight);

		//empty set squares, we don't need to dispose anything
		//because it's only reference here
		this._squares.clear();

		for(let column = 0; column < this._danceFloorConfig.columns; column++) {
			for(let row = 0; row < this._danceFloorConfig.columns; row++) {
				this._squares.add(
					new Square(this._renderer,
						squareSize * column,
						squareSize * row,
						squareSize,
						)
				)
			}
		}
	}

}