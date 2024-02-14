import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GameByCategoryId from "../Components/GameByCategoryId";

const Home = () => {
  const [AllGamelist, setAllGameList] = useState();
  const [gameListByCategories, getGameListByCategories] = useState([]);
  useEffect(() => {
    getAllGamesList();
    getGameListByCategoryId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((res) => {
      setAllGameList(res.data.results);
    });
  };
  const getGameListByCategoryId = (id) => {
    GlobalApi.getGameListByCategoryId(id).then((res) => {
      console.log("gameListByCategoryId", res.data.results);
      getGameListByCategories(res.data.results);

    });
  };
  return (
    <div className=" grid grid-cols-4 p-8">
      <div className="hidden md:block">
        <GenreList GenreId={(GenreId)=>getGameListByCategoryId(GenreId)} />
      </div>
      <div className=" col-span-4  md:col-span-3 ">
        {AllGamelist?.length > 0 && gameListByCategories.length > 0 ? (
          <div>
            <Banner gameBanner={AllGamelist[0]} />
            <TrendingGames gameList={AllGamelist} />
            <GameByCategoryId gameList={gameListByCategories} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;

//8ea476e3b8c74d2e84325ca3f16a4d11
