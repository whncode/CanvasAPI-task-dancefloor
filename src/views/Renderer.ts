const FILL_COLOR = "#FFFFFF";

export class Renderer {
	public context: CanvasRenderingContext2D;
	private _canvasElement : HTMLCanvasElement;
	constructor (
		public width: number,
		public height: number,
		target: Element = document.body
	) {
		this._canvasElement = document.createElement("canvas");
		this.context = this._canvasElement.getContext('2d');
		this.resize();

		target.append(this._canvasElement);

	}

	public resize() {
		this._canvasElement.width = this.width;
		this._canvasElement.height = this.height;
	}

	public clear() {
		this.context.fillStyle = FILL_COLOR;
		this.context.fillRect(0, 0, this.width, this.height);
	}

	public addClickListener(listener: {(x: number, y: number): void}) {
		this._canvasElement.addEventListener("click", (event) => {
			listener(event.offsetX , event.offsetY );
		});

	}
}
