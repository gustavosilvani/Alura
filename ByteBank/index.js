import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Gustavo", 10000, 118854522);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Viny", 5000, 8855854541);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Bruna", 785844584, "987");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "987");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);