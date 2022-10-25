import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebase from "../firebase";

function Dashboard(){
    const [history, setHistories] = useState([]);
    useEffect(
        () =>
            onSnapshot(collection(firebase,"status_car"),(snapshot) =>
            setHistories(snapshot.docs.map((doc) =>doc.data()))
            ),
            []
    );
    return(
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <div className="columns mt-5 is-centered">
                    <h1>DASHBOARD TEAM</h1>
                </div>

                <div className="card">
                    <div className="card-content is-centered">
                        <div className="content columns mt-5 is-centered">
                            Car Race Condition
                        </div>
                    <table className="table is-striped is-fullwidth center">
                        <thead>
                            <tr>
                                <th>Speed</th>
                                <th>Brake</th>
                                <th>Gear</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((data,index) =>(
                                <tr key={data.id}>
                                    <td>{data.speed} KM/Hour</td>
                                    <td>{data.brakeConditionName}</td>
                                    <td>{data.gearName}</td>
                                </tr>
                            ))}             
                        </tbody>
                    </table>
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default Dashboard;
