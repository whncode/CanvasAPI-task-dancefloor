export class Renderer {
	public context;
	private _canvasElement : HTMLCanvasElement;
	constructor (
		public width: number,
		public height: number
	) {
		this._canvasElement = document.createElement("canvas");
		this.context = this._canvasElement.getContext('2d');
		this.resize();
		document.body.append(this._canvasElement);
	}

	public resize() {
		this._canvasElement.width = this.width;
		this._canvasElement.height = this.height;
	}
}
