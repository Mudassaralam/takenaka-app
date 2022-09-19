import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./adduser.css";
function Adduser() {

    const history = useHistory();
    const localdata = localStorage.getItem("data");
    const parseData = JSON.parse(localdata);

//    let tokenget = parseData.data.token;

//    console.log(token)

    const [data,setData] = useState({
        "number": "",
        "year": "",
        "abbrev": "",
        "country":"",
        "name": "",
        "client": "",
        "structure": "",
        "b":"",
        "f": "",
        "p": "",
        "floorArea":'',
        "contractType": "",
        "from": "",
        "handOver": "",
        "location": "",
        "buildingType": "",
        "buildingType1": "",
        "client_business": "",
        "locality": "",
        "prjectCode": ""   
    });
    const OnFormSubmit = (e)=>{
        e.preventDefault();
        // console.log(data);
    };

    const inputHandler = (e)=>{
    if(e.target.id === 'number'){
        setData({...data,number:e.target.value})
    }
    if(e.target.id === 'year'){
        setData({...data,year:e.target.value})
    }
    if(e.target.id === 'abbrev'){
        setData({...data,abbrev:e.target.value})
    }
    if(e.target.id === 'country'){
        setData({...data,country:e.target.value})
    }
    if(e.target.id === 'name'){
        setData({...data,name:e.target.value})
    }
    if(e.target.id === 'client'){
        setData({...data,client:e.target.value})
    }
    if(e.target.id === 'structure'){
        setData({...data,structure:e.target.value})
    }
    if(e.target.id === 'b'){
        setData({...data,b:e.target.value})
    }
    if(e.target.id === 'f'){
        setData({...data,f:e.target.value})
    }
    if(e.target.id === 'p'){
        setData({...data,p:e.target.value})
    }
    if(e.target.id === 'floorArea'){
        setData({...data,floorArea:e.target.value})
    }
    if(e.target.id === 'contracttype'){
        setData({...data,contractType:e.target.value})
    }
    if(e.target.id === 'from'){
        setData({...data,from:e.target.value})
    }
    if(e.target.id === 'handOver'){
        setData({...data,handOver:e.target.value})
    }
    if(e.target.id === 'location'){
        setData({...data,location:e.target.value})
    }
    if(e.target.id === 'buildingtype'){
        setData({...data,buildingType:e.target.value})
    }
    if(e.target.id === 'buildingtype1'){
        setData({...data,buildingType1:e.target.value})
    }
    if(e.target.id === 'buisnesstype'){
        setData({...data,client_business:e.target.value})
    }
    if(e.target.id === 'locality'){
        setData({...data,locality:e.target.value})
    }
    if(e.target.id === 'locality'){
        setData({...data,locality:e.target.value})
    }
    if(e.target.id === 'projectcode'){
        setData({...data,prjectCode:e.target.value})
    }

    }


    const OnSaveData = ()=>{
        console.log(data);
        axios.post(`${process.env.REACT_APP_BASE_URL}/takenaka/project`,{
        "number": data.number,
      "year": data.year,
      "abbrev": data.abbrev,
      "country":data.country,
      "name": data.name,
      "client": data.client,
      "structure": data.structure,
      "b":data.b,
      "f": data.f,
      "p": data.p,
      "floorArea": data.floorArea,
      "contractType": data.contractType,
      "from": data.from,
      "handOver": data.handOver,
      "location": data.location,
      "buildingType": data.buildingType,
      "buildingType1": data.buildingType1,
      "client_business": data.client_business,
      "locality": data.locality,
      "prjectCode": data.prjectCode
        },{
            headers:{
                token: parseData.data.token,
            }
        }).then((response)=>{
            setData(response.data);
            console.log(response);

            if(response.status === 200){
                history.push('/usermanagement');
                alert('User Added Successfully');
            }else{
                console.log('User is not Added')
                alert('User is not Added')
            }
        })
        


    }


  return (
    <>
      <div className="container maincontainer">
        <h2>Add Project</h2>
        <div className="formdiv">
          <form onSubmit={OnFormSubmit}>
          <div className="formdiv">
            <div className="mb-3">
              <label className="form-label">Number</label>
              <input
                type="text"
                id="number"
                className="form-control"
                placeholder="Number"
                value={data.number}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Year</label>
              <input
                type="text"
                id="year"
                className="form-control"
                placeholder="Year"
                value={data.year}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Abbrev</label>
              <input
                type="text"
                id="abbrev"
                className="form-control"
                placeholder="Abbrev"
                value={data.abbrev}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">County</label>
              <input
                type="text"
                id="country"
                className="form-control"
                placeholder="Country"
                value={data.country}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                value={data.name}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Client</label>
              <input
                type="text"
                id="client"
                className="form-control"
                placeholder="Client"
                value={data.client}
                onChange={inputHandler}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">Structure</label>
              <input
                type="text"
                id="structure"
                className="form-control"
                placeholder="Structure"
                value={data.structure}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">B</label>
              <input
                type="text"
                id="b"
                className="form-control"
                placeholder="B"
                value={data.b}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">F</label>
              <input
                type="text"
                id="f"
                className="form-control"
                placeholder="F"
                value={data.f}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">P</label>
              <input
                type="text"
                id="p"
                className="form-control"
                placeholder="P"
                value={data.p}
                onChange={inputHandler}
              />
            </div>  
            <div className="mb-3">
              <label className="form-label">Floor Area</label>
              <input
                type="text"
                id="floorArea"
                className="form-control"
                placeholder="Floor Area"
                value={data.floorArea}
                onChange={inputHandler}
              />
            </div> 
            <div className="mb-3">
              <label className="form-label">Contract Type</label>
              <input
                type="text"
                id="contracttype"
                className="form-control"
                placeholder="Contract Type"
                value={data.contractType}
                onChange={inputHandler}
              />
            </div> 
            <div className="mb-3">
              <label className="form-label">From</label>
              <input
                type="text"
                id="from"   
                className="form-control"    
                placeholder="From"
                value={data.from}
                onChange={inputHandler}
              />
            </div> 
            <div className="mb-3">
              <label className="form-label">Hand Over</label>
              <input
                type="text"
                id="handOver"   
                className="form-control"    
                placeholder="Hand Over"
                value={data.handOver}
                onChange={inputHandler}
              />
            </div> 
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                id="location"   
                className="form-control"    
                placeholder="Location"
                value={data.location}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Building Type</label>
              <input
                type="text"
                id="buildingtype"   
                className="form-control"    
                placeholder="Building Type"
                value={data.buildingType}
                onChange={inputHandler}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">Building Type1</label>
              <input
                type="text"
                id="buildingtype1"   
                className="form-control"    
                placeholder="Building Type1"
                value={data.buildingType1}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Buisness Type</label>
              <input
                type="text"
                id="buisnesstype"   
                className="form-control"    
                placeholder="Buisness Type"
                value={data.buisnessType}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Locality</label>
              <input
                type="text"
                id="locality"   
                className="form-control"    
                placeholder="Locality"
                value={data.locality}
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Project Code</label>
              <input
                type="text"
                id="projectcode"   
                className="form-control"    
                placeholder="Project Code"
                value={data.prjectCode}
                onChange={inputHandler}
              />
            </div>
            <br/>
            
            <div style={{width:'100%'}}>
                <button className="btn btn-primary" onClick={OnSaveData}>Add Project</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Adduser;
