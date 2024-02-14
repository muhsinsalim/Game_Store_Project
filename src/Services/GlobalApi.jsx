import axios from "axios";

const key = "8ea476e3b8c74d2e84325ca3f16a4d11";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenrelList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByCategoryId=(id)=>axiosCreate.get("/games?key="+key+"&genres="+id)

export default {
  getGenrelList,
  getAllGames,
  getGameListByCategoryId
};
