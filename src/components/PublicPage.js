import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const PublicPage = () =>{
    const [datas, setData] = useState([]);
    useEffect(() =>{
        getHistory();  
    },[]);

    const getHistory = async () =>{
        const response = await axios.get('http://localhost:8080/history/public');
        setData(response.data.data); 
    };

    return(
        <div className="container m-3">
            <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Speed</th>
                            <th>Brake</th>
                            <th>Gear</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data,index) =>(
                            <tr key={data.id}>
                                <td>{data.speed} KM/Hour</td>
                                <td>{data.brakeConditionName}</td>
                                <td>{data.gearName}</td>
                                <td>{moment(data.createdAt).format('DD MMMM YYYY - HH:mm:ss')}</td>
                            </tr>
                        ))}             
                    </tbody>
                </table>
                </div>
            </div>
        </div>      
    )
}

export default PublicPage;
