import React from 'react'

const Home = (props) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center container p-4 m-4">
                    <h2>COVID19 INDIA</h2>
                </div>
            <div className="d-flex justify-content-center align-items-center container">

                <div className="d-flex card shadow text-center p-2 m-2" style={{backgroundColor: "Salmon"}}>
                    
                    <h3>{props.counter}</h3>
                    {/* <div className="d-block"><small>+ 12,023</small></div> */}
                    <span className="d-block">Confirmed</span>
                    <span className="d-block">cases</span>
                </div>
                <div className="d-flex card shadow text-center p-2 m-2" style={{backgroundColor: "Coral"}}>
                    
                    <h3>{props.counter - props.discharged - props.death}</h3>
                    {/* <div className="d-block"><small>+ 12,023</small></div> */}
                    <span className="d-block">Active</span>
                    <span className="d-block">cases</span>
                </div>
                <div className="d-flex card shadow text-center p-2 m-2" style={{backgroundColor: "LightGreen"}}>
                    
                    <h3>{props.discharged}</h3>
                    {/* <div className="d-block"><small>+ 12,023</small></div> */}
                    <span className="d-block">Recovered</span>
                    <span className="d-block">cases</span>
                </div>
                <div className="d-flex card shadow text-center p-2 m-2" style={{backgroundColor: "Silver"}}>
                    
                    <h3>{props.death}</h3>
                    {/* <div className="d-block"><small>+ 12,023</small></div> */}
                    <span className="d-block">Deceased</span>
                    <span className="d-block">cases</span>
                </div>
                
            </div>
        </div>
    )
}

export default Home;
