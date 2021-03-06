import { DanceFloorConfig } from "../types/DanceFloorConfig";
import { Square } from "./Square";
import { Renderer } from "./Renderer";


/**
 * class that manage dancefloor
 */
export class Dancefloor {
	private _squares : Array<Square> = [];
	public squareSize: number;
	constructor(
		private  _renderer: Renderer,
		private _danceFloorConfig : DanceFloorConfig
	) {
		this.generate();
		//init click ability
		this.draw();
		this._renderer.addClickListener((x, y) => {
			this.changeSquareColor(x, y);
		})
	}

	public generate() {
		this._squares = [];

		//generate squares for columns and rows
		for(let column = 0; column < this._danceFloorConfig.columns; column++) {
			for(let row = 0; row < this._danceFloorConfig.rows; row++) {
				this._squares.push(
					new Square(this._renderer,
						this,
						column,
						row
						)
				)
			}
		}
	}

	public update(rows: number, columns: number) {
		this._danceFloorConfig.columns = columns;
		this._danceFloorConfig.rows = rows;
		this.generate();
		this.draw();
	}

	public changeSquareColor(x: number, y: number) {
		const square = this._getSquare(x, y);
		if(!square) {
			throw new Error("You clicked not on square");
		}
		square.changeColor();
	}

	public draw(){
		this.updateSquareSize();
		this._renderer.clear();
		this._squares.forEach((square) => {
			square.draw();
		})
	}

	public updateSquareSize() {
		const rectWidth = this._renderer.height / this._danceFloorConfig.rows;
		const rectHeight = this._renderer.width / this._danceFloorConfig.columns;
		this.squareSize = Math.floor(Math.min(rectWidth, rectHeight));

		console.log(`renderer height: ${this._renderer.height}, rows: ${this._danceFloorConfig.rows}`);
		console.log(`rectWidth: ${rectWidth}, rectHeight: ${rectHeight}, squareSize: ${this.squareSize}`);

	}

	private _getSquare(x: number, y: number) {
		return this._squares.find((square) =>
			return ((x >= square.x) && (x <= square.x + this.squareSize))
				&& ((y >= square.y) && (y <= square.y + this.squareSize))
		});
	}
}