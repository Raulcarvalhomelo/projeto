import { terminal } from "terminal-kit";
import carregarPessoa from "./function/carregar-pessoa";
import sortearAzarado from "./function/sortear-azarado";
import term from "./ui/terminal";

const pessoas = carregarPessoa("src/data/dados.csv");
const azarado = sortearAzarado(pessoas).toString();

term.clear();
term.cyan('SORTEANDO O FDP É:\n')
setTimeout(()=>{term.brightGreen('- '+ azarado),terminal('\n\n--PARABENS ARROMBADO, LEVOU O MEU DINHEIRO!--')},2000) 
console.log('');


