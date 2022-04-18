import MoviesCard from "./components/MoviesCard";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";
import "./Css/style.css";
import Search from "./components/Search";
import poster1 from "./Images/scooby.jpg";
import poster2 from "./Images/mortal.png";
import poster3 from "./Images/Pirates of Caribbean.png";
import poster4 from "./Images/The Hunchback of Notre Dame.jpg";
import poster5 from "./Images/Robin Hood.png";
import poster6 from "./Images/titanic.jpg";
import poster7 from "./Images/Aladin.jpg";
import poster8 from "./Images/Coco.png";
import poster9 from "./Images/batman.jpg";
import poster10 from "./Images/Atlantis.jpg";
import poster11 from "./Images/The Lion King.jpg";
import poster12 from "./Images/saga.jpg";
import { useState } from "react";
import RatingComp from "./components/Rating";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Trailer from "./components/Trailer";

function App() {
  const [filterName, setFilterName] = useState("");
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "Scooby doo",
      description:
        "Scooby-Doo (also known as Scooby-Doo: The Movie) is a 2002 live action / computer animated fantasy adventure - comedy film based on the long-running Hanna-Barber. ",
      postUrl: poster1,
      rating: "4",
      genre: "Comedy",
      trailer: "https://youtu.be/o3dbeI0BU1k",
    },
    {
      id: 1,
      title: "Mortal kombat",
      description:
        " Mortal Kombat is an American series of martial arts action films based on the fighting video game series of the same name by Midway.",
      postUrl: poster2,
      rating: "4",
      genre: "Fantasy",
      trailer: "https://youtu.be/NYH2sLid0Zc",
    },
    {
      id: 2,
      title: "Pirates of Caribbean",
      description:
        "Pirates of the Caribbean is a sweeping action-adventure story set in an era when villainous pirates scavenged the Caribbean seas   . ",
      postUrl: poster3,
      rating: "4",
      genre: "Adventure",
      trailer: "https://www.youtube.com/embed/Hgeu5rhoxxY",
    },
    {
      id: 3,
      title: "The Hunchback of Notre Dame",
      description:
        "In 15th-century France, a gypsy girl is framed for murder by the infatuated Chief Justice, and only the deformed bellringer of Notre Dame Cathedral can save her.",
      postUrl: poster4,
      rating: "5",
      genre: "Musical",
      trailer: "https://www.youtube.com/embed/O6i3lyx1I_g",
    },
    {
      id: 4,
      title: "Robin Hood",
      description:
        "The story follows the adventures of Robin Hood, Little John, and the inhabitants of Nottingham as they fight against the excessive taxation of Prince John, and Robin Hood wins the hand of Maid Marian.",
      postUrl: poster5,
      rating: "4",
      genre: "Adventure",
      trailer: "https://www.youtube.com/embed/4ksNO_6XiFw",
    },
    {
      id: 5,
      title: "Titanic",
      description:
        "The beautiful Snow White is forced to flee to the forest to save her life due to the malice and envy of the evil queen.It is important to be of good character and pure soul because such persons will always be rewarded.",
      postUrl: poster6,
      rating: "5",
      genre: "Love story",
      trailer: "https://www.youtube.com/embed/0VE2e6QspvI",
    },

    {
      id: 6,
      title: "Aladin",
      description:
        "Aladdin is portrayed as quick-witted, and ultimately a caring person. Like most Disney male protagonists, he is a heroic young man who seeks to win the affection of many other characters, which demonstrates his insecurity.",
      postUrl: poster7,
      rating: "1",
      genre: "Fantasy",
      trailer: "https://www.youtube.com/embed/eTjHiQKJUDY",
    },
    {
      id: 7,
      title: "Coco",
      description:
        "The story follows a 12-year-old boy named Miguel who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family among the living and to reverse his family's ban on music.",
      postUrl: poster8,
      rating: "2",
      genre: "Mystery",
      trailer: "https://www.youtube.com/embed/Rvr68u6k5sI",
    },
    {
      id: 8,
      title: "The batman",
      description:
        "Bruce Wayne, known as Batman, and his second year as the Dark Knight and The Protector of Gotham City, revolves around when he finds himself confronted by Ridley, the sadistic serial killer, who targets gotham's main political figures.",
      postUrl: poster9,
      rating: "5",
      genre: "Action",
      trailer: "https://youtu.be/mqqft2x_Aa4",
    },
    {
      id: 9,
      title: "Atlantis:The Lost Empire",
      description:
        "Set in 1914, the film tells the story of young linguist Milo Thatch, who gains possession of a sacred book, which he believes will guide him and a crew of mercenaries to the lost city of Atlantis.",
      postUrl: poster10,
      rating: "4",
      genre: "Adventure",
      trailer: "https://www.youtube.com/embed/sZIimDPZQwg",
    },
    {
      id: 10,
      title: "The Lion King",
      description:
        "The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's paternal uncle Scar murders Mufasa to seize the throne, Simba is manipulated into thinking he was responsible and flees into exile.",
      postUrl: poster11,
      rating: "3",
      genre: "Drama",
      trailer: "https://www.youtube.com/embed/lFzVJEksoDY",
    },
    {
      id: 11,
      title: "The Twilight Saga",
      description:
        "Beauty and the Beast focuses on the relationship between the Beast (voice of Robby Benson), a prince who is magically transformed into a monster and his servants into household objects as punishment for his arrogance, and Belle (voice of Paige O'Hara), a young woman whom he imprisons in his castle.",
      postUrl: poster12,
      rating: "4.8",
      genre: "Fantasy",
      trailer: "https://youtu.be/ti0H-bvMi3I",
    },
  ]);

  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route
          path="/trailer/:id"
          element={<Trailer movies={movies} />}
        />

        <Route
          path="/movies"
          element={
            <MoviesCard
              movies={movies}
              filterName={filterName}
              rating={rating}
            />
          }
        />
      </Routes>

      <Search setFilterName={setFilterName} />
      <RatingComp setRating={setRating} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
