import React, { useState } from "react";
import "./rolemanagement.css";
import { Col, Table } from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BsFillFileEarmarkZipFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import  DataGrid  from "react-data-grid";
import * as XLSX from 'xlsx'
function Projectmanagement() {

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Name' }
  ];
  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
  ];  
  
  //Start
 console.log(columns);

 const [colDefs, setColDefs] = useState();
  const [data, setData] = useState();
  const EXTENSIONS = ['xlsx','xlx','csv'];

  const getExtensions = (file)=>{
      // console.log(file);
      const parts = file.name.split('.');
     const FileExten = parts[parts.length-1];
    //  console.log(FileExten)
    return EXTENSIONS.includes(FileExten);
 
  } 

  //Onchange Function
    const ImportExcel = (e)=>{
        // console.log(e.target.files[0]);
        const file = e.target.files[0];
        
        const reader = new FileReader();

        // Convert Data Into json

        const convertToJson = (headers,data)=>{
            const rows = [];
            data.forEach(row => {
                let rowData = {}
                row.forEach((element,index)=>{
                    rowData[headers[index]] = element;

                })
                rows.push(rowData);
            });
            return rows 

        }

        reader.onload = (event)=>{
            // console.log(event);

            //Parse Data
            const BSTR = event.target.result;
            const WorkBooK = XLSX.read(BSTR,{type:'binary'});

            //Get First Sheet

            const WorkSheetName = WorkBooK.SheetNames[0];
            const WorkSheet =  WorkBooK.Sheets[WorkSheetName];
            // console.log(WorkSheet);

            //Conver to Array

            const FileData = XLSX.utils.sheet_to_json(WorkSheet,{header:1});
            // console.log(FileData[0]);  

            // Headers 

            const headers = FileData[0];
            // console.log("This is header",headers)
            

            const heads = headers.map(head=>({title:head,field:head}));
            console.log(heads);
            setColDefs(heads);

            // Remove header from the file 
            FileData.splice(0,1);
           setData(convertToJson(headers,FileData));
           
        } 
         if(getExtensions(file)){
          reader.readAsBinaryString(file);
         }else{
           alert("Invalid file. Select EXCEL Or CSV file.. !")
         }
        
        
    }
console.log(colDefs)
  //End

  return (
    <>
      <div className="">
        <div id="Usermanagment">
          <div className="d-flex align-items-center">
            <div>
              <h5>Projects</h5>
              <p>You can check your projects here</p>
            </div>
          </div>
          {/* TAble */}
          <div id="table-div">
            <div className="d-flex align-items-center">
              <div>
                <Link className="btn btn-primary" to="/addproject">
                  Add User
                </Link>
              </div>
              <div
                className="form-group"
                style={{ margin: "auto", color: "rgba(0, 0, 0, 0)!important" }}
              >
                <h5>Import Project</h5>
                <input
                  type="file"
                  style={{
                    color: "rgba(0, 0, 0, 0)",
                    border: "none",
                    outline: "none",
                    marginLeft: "15px",
                  }}
                />
              </div>
            </div>
              <div>
                <DataGrid columns={columns}  rows={rows}/>
               
              </div>
           
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Projectmanagement;
