import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  const [Id, setId] = useState("");
  const [Category, setCategory] = useState("");
  const [SubCategory, setSubCategory] = useState("");
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/Categories/${id}`)
      .then((res) => {
        // console.log(res.data.Type[1]);
        setId(res.data.id);
        setCategory(res.data.Category);
        setSubCategory(res.data.SubCategory);
        setProduct(res.data.product);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ Category });
    const data = { Category, SubCategory, product };
    axios
      .patch(`http://localhost:8000/Categories/${id}`, data)
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
                <h2>Edit Category</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 mt-3">
                    <div className="form-group">
                      <label>Id</label>
                      <input
                        value={Id}
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

export default Update;
