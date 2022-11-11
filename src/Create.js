import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./App.css";

const Create = () => {
  const [id, setId] = useState("");
  const [Category, setCategory] = useState("");
  const [SubCategory, setSubCategory] = useState("");
  const [product, setProduct] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Category);
    console.log(SubCategory);

    const data = { Category, SubCategory, product };
    axios
      .post("http://localhost:8000/Categories", data)
      .then((res) => {
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
                <h2>Add Category</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <label>Id</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <label>Category</label>
                      <input
                        value={Category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <label>Sub-Category</label>
                      <input
                        value={SubCategory}
                        onChange={(e) => setSubCategory(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <label>Product</label>
                      <input
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <Button variant="success" type="submit">
                        save
                      </Button>
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

export default Create;
