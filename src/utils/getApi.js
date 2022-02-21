const API = "../json/videos.json";

const ApiWeb = async (idMusic) =>{
    const urlApi = API ;
    try {
        const data = await fetch(urlApi);
        const responseData = await data.json();
        console.log(responseData);
        return responseData.musica[idMusic];
    } catch (error) {
        console.log("fetch data error", error);
    }
}

// export default ApiWeb;

