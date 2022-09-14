import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="main-contain"> 
			<div className="vara"></div>
			<div className="d-flex justify-content-center m-auto"> 
				<div className="card rounded-3" style={{width: "200px", height: "420px",backgroundColor: "black"}}>
					<div className="d-flex justify-content-center mt-3">
						<div className="luz rounded-circle" style={{width: "120px", height: "120px",backgroundColor: "red"}}>
						
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<div className="luz rounded-circle" style={{width: "120px", height: "120px",backgroundColor: "yellow"}}>
						
						</div>
					</div>
					<div className="d-flex justify-content-center mt-3">
						<div className="luz rounded-circle" style={{width: "120px", height: "120px",backgroundColor: "green"}}>
						
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Home;




