export class State {
	openFile() {
		let input = document.createElement("input");
		input.type = "file";
		input.onchange = (_this) => {
			let files = Array.from(input.files);
			console.log(files);
		};
		input.click();
	}
	saveFile() {
		const content = "it worked!"
		const a = document.createElement("a");
		const file = new Blob([content], { type: "application/json" });

		a.href = URL.createObjectURL(file);
		a.download = "gantt-data.json";
		a.click();

		URL.revokeObjectURL(a.href);
	}
}
