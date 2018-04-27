import React, { Component } from 'react';
import '../App.css';


class Home extends Component {
    render() {
        return (
            <div>

                <div className="row" style={{ marginTop: "65px", backgroundImage: "url(./images/placeholder.png)" }}>
                    <div className="col s3">
                    </div>
                    <div className="col s6 center-align" style={{ marginTop: "15px" }}>
                        <img src="./images/tjj_logo.png" alt="Tecumseh Jiu Jitsu" />
                        <p style={{ fontSize: "1.8em"}}> Welcome to Tecumseh Jiu Jitsu!</p>
                    </div>
                </div>
                <div className="col s3">
                </div>
                <div className="row" style={{ backgroundColor: "white", color: "black"}}>
                    <div className="col s4">
                        <h3 className="center-align">What is Brazilian Jiu Jitsu?</h3>
                        <p className="boxtext">Brazilian Jiu-Jitsu is a martial art, combat sport and self-defense system that focuses on grappling and specifically
                            ground fighting techniques. The art is derived from Japanese Kodokan Judo and teaches that a smaller and
                            physically weaker person can successfully defend against a larger and physically stronger attacker with the
                            correct use of leverage and understanding of bio-mechanics.</p>
                    </div>
                    <div className="col s4">
                        <h3 className="center-align">History of Ribeiro Jiu Jitsu</h3>
                        <p className="boxtext">The Ribeiro Jiu-Jitsu Association (RJJA) was founded in 1995 by the legendary Saulo Ribeiro and is currently
                            one of the most successful BJJ teams in the world. Saulo Ribeiro is considered to be one of the premier BJJ
                            instructors in the world today and one of the greatest BJJ champions in history. Saulo has produced many
                            champions under his leadership, but the one who stands out the most is his younger brother, Alexandre “Xande”
                            Ribeiro. Xande Ribeiro is a 3rd degree Black Belt in Jiu-Jitsu, a six time World Jiu-Jitsu Champion, and
                            two time ADCC Submission Grappling World Champion. Today, Saulo Ribeiro, alongside his brother Alexandre
                            “Xande” Ribeiro teaches at the University of Jiu-Jitsu in San Diego, California, which they also founded.
                            They also make time to visit each of the RJJA academies every year to teach and provide their mentorship.</p>

                    </div>
                    <div className="col s4">
                        <h3 className="center-align">Tecumseh Jiu Jitsu</h3>
                        <p className="boxtext">Tecumseh Jiu Jitsu was founded by Miss Loree and Dean Hersche as Kingsville Martial Arts Academy. After years
                            of successful operation in Kingsville, Dean and Miss Loree relocated to Tecumseh and rebranded the school
                            as Tecumseh Martial Arts Academy. In continuing the proven legacy of the best Brazilian Jiu Jitsu instruction
                            in the area, Eric Marentette and Miss Loree currently teach Brazilian Jiu-Jitsu to people of all ages. Tecumseh
                            Jiu Jitsu maintains its strong ties to the Ribeiro Jiu-Jitsu Association (RJJA) and its teachings.</p>
                    </div>

                </div>
                <div className="row" style={{ backgroundColor: "#545659" }}>
                    <h3 style={{padding: "10px", marginTop: "0px"}}>Academy News</h3>
                </div>
                <div className="row" style={{ backgroundColor: "white", color: "black"}}>
                    <div className="col s6">
                        <h3>Location</h3>
                        <p>12365 Tecumseh Rd E, Windsor, ON N8N 1M5 </p>
                        <p style={{fontSize: "0.8em"}}> We are conveniently located at 12365 Tecumseh Road East in Tecumseh, Ontario. This location allows us to service
                            clients from Windsor, Tecumseh, Lakeshore and the rest of Essex County.</p>
                    </div>
                    <div className="col s6 center-align">
                        <iframe title="Map to TJJ" width="600" height="350" frameborder="0" style={{border: "0"}} src="https://www.google.com/maps/embed/v1/place?q=Ribeiro%20Jiu-Jitsu%20Tecumseh&key=AIzaSyCnFCGtFepTtGvVy9GnKJdDXMjH28n8SHM"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;