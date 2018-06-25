function sendFile() {

	var formData = new FormData(document.getElementById("form_archivo"));
	formData.append("nombreDato", "value");// si queremos agregar un nuevo dato
	$.ajax({
		url:"poner url aqui",
		contentType: false,
		dataType: "html",
		data: formData,
		processData: false,
		cache: false,
		type: 'POST',
		success: function (result) {
			//todo esta correcto
		}, 
		error: function (message) {
			//algo paso y no se cargo la imagen
		}

	});

	//se pone false para que el formulario no se envie
	return false;
}
