import myAxios from "axios";

const instance = myAxios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default instance;
