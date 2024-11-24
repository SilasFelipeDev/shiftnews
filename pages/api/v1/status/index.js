function status(request, response) {
  response.status(200).json({ chave: "eu sou acima da média" });
}

export default status;
