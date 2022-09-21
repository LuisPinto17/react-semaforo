import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [ colorLuzActual, setColorLuzActual] = useState(undefined);
	
	const handleOn = (cambioLuz)=>{ 
		if (colorLuzActual == cambioLuz) {
			setColorLuzActual("apagate")
		}
		else 
		{
			setColorLuzActual(cambioLuz)
		}
	}

	const handleChange = ()=>{
		let colors = ["red","yellow","green"];
		let i = 0;
		setInterval(()=>{
			setColorLuzActual(colors[i%3]);
			i++;
		},1000)
	}

	return (
		<div className="main-contain"> 
			<div className="vara"></div>
			<div className="d-flex justify-content-center m-auto"> 
				<div className="card rounded-3" style={{width: "200px", height: "420px",backgroundColor: "black"}}>
					<div className="d-flex justify-content-center mt-3">
						<div className={colorLuzActual == "red" ? "red rounded-circle luz_roja" : "red rounded-circle opacity-50"} onClick={()=>{handleOn("red")}} style={{width: "120px", height: "120px"}}>
						
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
					<div className={colorLuzActual == "yellow" ? "yellow rounded-circle luz" : "yellow rounded-circle opacity-50"} onClick={()=>{handleOn("yellow")}} style={{width: "120px", height: "120px"}}>
						
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
					<div className={colorLuzActual == "green" ? "green rounded-circle luz_verde" : "green rounded-circle opacity-50"} onClick={()=>{handleOn("green")}} style={{width: "120px", height: "120px"}}>
						
						</div>
					</div>
				</div>
			</div>
		<div className="text-center">
			<button onClick={() => handleChange()}>Ciclar</button>
			{/* <button onClick={() => handleChange()}>Parar</button> */}
		</div>
		</div>

	);
};

export default Home;




