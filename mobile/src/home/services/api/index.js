import axios from "axios";

async function Controller(URL, OPTION){
	const api = axios.create({
		baseURL: URL;
	})
	switch(OPTION){
		case 'poweroff':
			await api.post('/poweroff');
		case: 'logout':
			await api.post('/logout');
	}
}

export default Controller;
