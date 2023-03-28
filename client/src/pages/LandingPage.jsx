import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/LandingPage.module.css";

const LandingPage = () => {
	return (
		<div className={style.landingContainer}>
		   <div className={style.infoContainer} style={{ textAlign: 'center', maxWidth: '600px' }}>
             <h1>Bievenidos a MyPokemon</h1>
  			 <Link className={style.landingButton} to='/home'>  Ingresar	
			 </Link>
  			<p>  Hecho por Carlos Narváez, codeado con ❤️ y con mucho ☕ colombiano</p>
			</div>
		</div>
	);
};

export default LandingPage;
