import './style.css'
import { State } from './state'

const state = new State();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
	<div class="chart"><canvas class="connectors"></canvas>
	<div class="tools"><button class="openFile">Open</button><button class="saveFile">Save</button></div>
	</div>
`;

document
	.querySelector<HTMLButtonElement>(".openFile")
	?.addEventListener("click", state.openFile);
document.querySelector<HTMLButtonElement>('.saveFile')?.addEventListener('click', state.saveFile);
