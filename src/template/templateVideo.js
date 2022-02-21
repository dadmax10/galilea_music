// import ApiWeb from "../utils/getApi";

const API = "../json/videos.json";

const ApiWeb = async (idMusic) =>{
    const urlApi = API ;
    try {
        const data = await Fetch("../json/videos.json");
        const responseData = await data.json();
        return responseData[idMusic];
    } catch (error) {
        console.log("fetch data error", error);
    }
}

const templateMusic = async (musicId) =>{
    const data = ApiWeb(musicId);
    const viewVideos = `
    <video src="${data.videoBg}" autoplay muted loop class="music-bg"></video>
    <div class="content-music-principal">
        <video src="${data.video}" autoplay muted controls class="music-principal"></video>
        <h2 class="title-music">${data.title}</h2>
        <div class="hr-music"></div>
        <p class="desc-music"> ${data.desc} Encuentrala en todas las plataformas digitales como 
        <i class=""></i><br> Spotify
        <br> Youtube
        <br> Deezer
        </p>
    </div>
    `
    return viewVideos;
}


export default templateMusic;
