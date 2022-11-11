import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const SubCat = () => {

  const {id} = useParams();
  const [Id, setId] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();


  useEffect(()=>{
    axios.get(`http://localhost:8000/Categories/${id}`) 
    .then((res)=>{
      setType(res.data.Type[0].SubType);
      setId(res.data.Type[0].id)
      

    })
    .catch((err)=>console.log(err))
    
  },[id])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ type });
    const data = { type };
    axios
      .put(`http://localhost:8000/Categories${id}`, data)
      .then((res) => {
        console.log(res.data.Type[1]);
        alert("saved successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add type</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Id</label>
                      <input
                        value={Id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Category</label>
                      <input
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <Button type="submit">save</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubCat;
