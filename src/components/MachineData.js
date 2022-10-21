import axios from "axios";
import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/" 
  });

export default function MachineData(){
    const [minerData, setMinerData] = useState([]);

    useEffect(() => {
       client.get('machinedata').then((response) => {
        setMinerData(response.data);
        //   console.log("DATA=")
        //   console.log(response.data)
       });
    }, []);
  
    return(
        <div style={{display:'flex', padding:'2%'}}>
            <Table style={{width:'90%',margin:'auto'}} striped="columns">
            <thead>
                <tr>
                <th>Order Date</th>
                <th>Facility</th>
                <th>Machine Name</th>
                <th>Quantity</th>
                <th>Power</th>
                <th>Monthly Fee</th>
                <th>Mining Pool</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {minerData.map(( listValue, index ) => {
                return (
                    <tr>
                    <td>{listValue.orderDate}</td>
                    <td>{listValue.facility}</td>
                    <td>{listValue.machineName}</td>
                    <td>{listValue.quantity}</td>
                    <td>{listValue.power}</td>
                    <td>{listValue.monthlyFee}</td>
                    <td>{listValue.miningPool}</td>
                    <td>{listValue.status}</td>
                    </tr>
                    );
            })}
            </tbody>
            </Table>
        </div>
    )
}

