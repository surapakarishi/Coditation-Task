import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./App.css";

// import subCat from './subCat'
// import { IconName,BsFillArrowDownCircleFill } from "react-icons/bs";

const Home = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/Categories")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  const Edit = (id) => {
    console.log(id);
    navigate(`/Update/${id}`);
  };

  // const edit = (id) => {
  //   console.log(id);
  //   navigate(`/subCat/${id}`);
  // };

  const Delete = (id) => {
    if (window.confirm("Do you want to delete?")) {
      axios
        .delete(`http://localhost:8000/Categories/${id}`)
        .then((res) => {
          console.log(res);
          alert("Removed Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>List of categories</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>
                  Category
                  <Link to="/Create">
                    <Icon.FileEarmarkPlusFill
                      style={{ color: "whitesmoke", width: "26", height: "26" }}
                    />
                  </Link>{" "}
                  &nbsp;&nbsp;
                </td>
                <td>SubCategory&nbsp;&nbsp; </td>
                <td>Products</td>
                <td>Product-list</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.Category}</td>
                    <td>{item.SubCategory}</td>
                    <td>{item.product}</td>

                    <td>
                      <table className="table table-bordered">
                        <thead className="bg-light text-dark">
                          <tr>
                            <td>ID</td>
                            <td>Type</td>
                            <td>Products</td>
                          </tr>
                        </thead>
                        <tbody>
                          {item.Type &&
                            item.Type.map((sub) => {
                              return (
                                <tr key={sub.id}>
                                  <td>{sub.id}</td>
                                  <td>{sub.SubType}</td>
                                  <td>
                                    {sub.Product &&
                                      sub.Product.map((Prod, i) => {
                                        return (
                                          <ul key={i}>
                                            <li>{Prod.p1}</li>
                                            <li>{Prod.p2}</li>
                                            <li>{Prod.p3}</li>
                                          </ul>
                                        );
                                      })}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </td>
                    <td>
                      &nbsp;&nbsp;&nbsp;
                      <Icon.PencilSquare
                        onClick={() => {
                          Edit(item.id);
                        }}
                        style={{ color: "black", width: "26", height: "26" }}
                      />
                      &nbsp;&nbsp;&nbsp;
                      <Icon.Trash
                        onClick={() => {
                          Delete(item.id);
                        }}
                        style={{ color: "black", width: "26", height: "26" }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
