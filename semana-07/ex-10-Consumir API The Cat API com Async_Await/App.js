const buscarImagem = async () => {
	//Esta buscando URL da imagem na API
	const urlImagem = await consultaApi();

	//Atribuindo a URL à tag <img>
	const img = document.getElementById("imagem");
	img.setAttribute("src", urlImagem);

	//Adicionou classe para estilizar a tag <img>
	imagem.classList.add("imagem");
};

const consultaApi = async () => {
	try {
		const consultaUrl = `https://api.thecatapi.com/v1/images/search`;
		const response = await fetch(consultaUrl);
		const converteUrl = await response.json();
		const urlImagem = converteUrl[0].url;

		return urlImagem;
	} catch (erro) {
		alert("Erro!");
	}
};
document.getElementById("botao").addEventListener("click", buscarImagem);
