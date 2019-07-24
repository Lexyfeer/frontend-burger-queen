------- DELETE
const headers = new Headers();
headers.append('content-length', '0');

const init = {
	method: 'DELETE',
	headers
}

fetch('http://localhost:8080/api/v1/employees/5d37ad6b1b71147c7672b069', init)
.then((response) => {
	return response.text(); // or .json() or .blob() ...
})
.then((text) => {
	// text is the response body
})
.catch((e) => {
	// error in e.message
});

------- POST
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('content-length', '100');

const body = `{
  "Email": "te@hotmail.com",
  "Name": "test",
  "Pass": "te",
  "TypeEmployee": "Cocinero"
}`;

const init = {
	method: 'POST',
	headers,
	body
}

fetch('http://localhost:8080/api/v1/employees/', init)
.then((response) => {
	return response.text(); // or .json() or .blob() ...
})
.then((text) => {
	// text is the response body
})
.catch((e) => {
	// error in e.message
});

------- GET
fetch('http://localhost:8080/api/v1/employees/')
.then((response) => {
	return response.text(); // or .json() or .blob() ...
})
.then((text) => {
	// text is the response body
})
.catch((e) => {
	// error in e.message
});

------- PUT
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('content-length', '105');

const body = `{
  "Email": "asdf@hotmail.com",
  "Name": "sdf",
  "Pass": "ssdsfs",
  "TypeEmployee": "Cocinero"
}`;

const init = {
	method: 'PUT',
	headers,
	body
}

fetch('http://localhost:8080/api/v1/employees/5d37b1911b71147c7672b06b', init)
.then((response) => {
	return response.text(); // or .json() or .blob() ...
})
.then((text) => {
	// text is the response body
})
.catch((e) => {
	// error in e.message
});

