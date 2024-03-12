import React, { useEffect } from "react";
import articlesdata from "./artical.json";
import "./Article.css";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.withCredentials = true;

const Article = (props) => {
  const articles = articlesdata.articles;
  const [artical, addarticale] = React.useState({});
  const [artical1, setArticles] = React.useState([]);

  const addartice = () => {
    if (!props.login) {
      toast.success("Please login");
      return;
    }
    document.querySelector("#addArtical").style.display = "flex";
  };

  useEffect(
    () => {
      axios
        .get("http://localhost:5000/api/artical/get")
        .then((res) => {
          console.log(res.data);
          setArticles(res.data);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    },
    [],
    [artical]
  );

  const handleAddData = (e) => {
    addarticale({ ...artical, [e.target.name]: e.target.value });
  };
  function datasubmit() {
    document.querySelector("#addArtical").style.display = "none";

    const jwtToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      .split("=")[1];

    console.log(props.uid);
    addarticale({ ...artical, uid: props.uid });
    axios
      .post(`http://localhost:5000/api/artical/insert`, artical, {
        headers: {
          Authorization: `bearer ${jwtToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        document
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
        document
          .querySelectorAll("textarea")
          .forEach((textarea) => (textarea.value = ""));
        toast.success("successful");
      })

      .catch((err) => {
        console.error("Error:", err);
      });
  }

  function deleteData(id) {
    console.log(id);
    let data = { _id: id };
    console.log(data);
    axios
      .delete(`http://localhost:5000/api/artical/deleteOne`, { data })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  return (
    <div>
      <h1 className="text-3xl">Articles about Pets</h1>
      <div id="add-articals">
        <button id="btn-artical" onClick={addartice}>
          Add Artical
        </button>
      </div>
      <div id="addArtical">
        <input
          type="text"
          placeholder="tittle"
          name="title"
          onChange={(e) => {
            handleAddData(e);
          }}
        />
        <input
          type="text"
          placeholder="author name"
          name="author"
          onChange={(e) => {
            handleAddData(e);
          }}
        />
        <textarea
          placeholder="content"
          name="content"
          onChange={(e) => {
            handleAddData(e);
          }}
        />
        <button onClick={datasubmit}>Submit</button>
      </div>
      <div className="article-container">
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="article">
              <h2 className="text-2xl">{article.title}</h2>
              <p className="font-bold">Author: {article.author}</p>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="article-container">
        <ul>
          {artical1.map((article, index) => (
            <li key={index} className="article">
              <div className="article-content">
                <h2 className="text-3xl">{article.title}</h2>
                <p className="font-bold">Author: {article.author}</p>
                <p>{article.content}</p>
                {console.log(props.uid, article)}
              </div>
              <div className="article-buttons">
                {props.uid === article.uid ? (
                  <button
                    onClick={() => {
                      // console.log("hiiii");
                      deleteData(article._id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Article;
