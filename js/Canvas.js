export default class Canvas {
	constructor() {
		this.canvas = null;
		this.ctx = null;
		this.dimensions = null;
	}

	init() {
		this.canvas = document.querySelector('canvas');
		this.dimensions = this.canvas.getBoundingClientRect();
		this.ctx = this.canvas.getContext('2d');
	}

	get getCanvas() {
		return this;
	}
}
