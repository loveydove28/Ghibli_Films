import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";
import "./about-page.scss"; // Ensure this path is correct

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film>();

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => setFilmDetails(response.data));
  }, [filmId]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="AboutPageWrapper">
      <div className="AboutPage">
        <h1>{filmDetails?.title}</h1>
        <img className="film-banner" src={filmDetails?.movie_banner} alt={filmDetails?.title}/>
        <h2>{filmDetails?.description}</h2>
        <h3>Director: {filmDetails?.director}</h3>
        <h4>Producer: {filmDetails?.producer}</h4>
        <h5>Release Date: {filmDetails?.release_date}</h5>
        <button onClick={handleBack}>Go Back</button>
      </div>
    </div>
  );
}

export default AboutPage;
