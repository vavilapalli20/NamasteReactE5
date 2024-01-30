import Details from "./Details";
import DetailsClass from "./DetailsClass";

const About =() =>{
    return(
        <div className="about-component">
            <div>
                <h1>About Us</h1>
                <p> This is a Food ordering App where you can order online </p>
                <Details name="Ravi Kiran (functional)" location="Kanpur" />
                <DetailsClass name="Ravi Kiran (Class)" location="Kanpur"/>
            </div>
        </div>
    );
}

export default About;