const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.listen(port, hostname, () => {
    new ProvaTesteComponent();
});

class ProvaTesteComponent {
	listLivros = [];

	constructor() { 
		this.initLivros();
		this.criarUmNovoLivro("Arquitetura Limpa", "Tecnologia");
		this.criarUmNovoLivro("Harry Potter e a Câmara Secreta", "Fantasia");
		this.criarUmNovoLivro("WildCards", "Esportes");
		this.criarUmNovoLivro("O Trono do Sol", "Fantasia");
		console.log(this.listarLivrosFantasia());
	}

	initLivros() {
		this.listLivros.push({ id: 0, nome: 'Código Limpo', genero: "Tecnologia" });
		this.listLivros.push({ id: 1, nome: 'Senhor do Anéis', genero: "Fantasia" });
		this.listLivros.push({ id: 2, nome: 'WildCards', genero: "Fantasia" });
		this.listLivros.push({ id: 3, nome: 'Harry Potter e o Prisioneiro de Azkaban', genero: "Fantasia" });
		this.listLivros.push({ id: 4, nome: 'Javascript de alto desempenho', genero: "Tecnologia" });
		this.listLivros.push({ id: 5, nome: 'O poder da ação', genero: "Administração" });
	}

	criarUmNovoLivro(nome, genero) {
		if (this.buscarLivro(nome, genero) === -1) {
			const novoLivro = {
				id: this.listLivros.length,
				nome: nome,
				genero: genero
			}; 

			this.listLivros.push(novoLivro);
		} else {
			console.log("Já existe um livro cadastrado com o mesmo nome e gênero.");
		}
        /**
			 * Monte a mensagem de erro avisando que já existe um Livro cadastrado sobre o nome e genero passados
			 */
		}
	}

	buscarLivro(nome, genero) {
		let indiceLivro = -1;
		for (let index = 0; index < this.listLivros.length; index++) {
			const livro = this.listLivros[index];
			if (livro.nome === nome && livro.genero === genero) {
				indiceLivro = index;
				break;
			}
		}
		return indiceLivro;
        /**
             * Implemente a validação onde retorne o Indice do Livro caso encontre um com mesmo nome e genero
             */
	}

	listarLivrosFantasia() {
		const livrosFantasia = this.listLivros
			.filter(livro => livro.genero === "Fantasia")
			.map(livro => livro.nome);
		return livrosFantasia.join(", ");
	}
    	/**
		 * Retorne uma String contendo o nome de todos os Livros que são de fantasia.
		 */
}

module.exports = ProvaTesteComponent;
