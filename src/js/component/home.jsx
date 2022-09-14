import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ colorLuz, setColorLuz] = useState(undefined);
	const handleOn = (cambioLuz)=>{
		if (colorLuz == cambioLuz) {
			setColorLuz("ninguna")
		}
		else 
		{
			setColorLuz(cambioLuz)
		}
	}

	const handleChange = ()=>{
		let colors = ["red","yellow","green"];
		let i = 0;
		setInterval(()=>{
			setColorLuz(colors[i%3]);
			i++;
		},1000)
	}

	return (
		<div className="main-contain"> 
			<div className="vara"></div>
			<div className="d-flex justify-content-center m-auto"> 
				<div className="card rounded-3" style={{width: "200px", height: "420px",backgroundColor: "black"}}>
					<div className="d-flex justify-content-center mt-3">
						<div className={colorLuz == "red" ? "red rounded-circle luz" : "red rounded-circle"} onClick={()=>{handleOn("red")}} style={{width: "120px", height: "120px"}}>
						
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
					<div className={colorLuz == "yellow" ? "yellow rounded-circle luz" : "yellow rounded-circle"} onClick={()=>{handleOn("yellow")}} style={{width: "120px", height: "120px"}}>
						
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
					<div className={colorLuz == "green" ? "green rounded-circle luz" : "green rounded-circle"} onClick={()=>{handleOn("green")}} style={{width: "120px", height: "120px"}}>
						
						</div>
					</div>
				</div>
			</div>
		<button onClick={() => handleChange()}>Test</button>
		</div>

	);
};

export default Home;




