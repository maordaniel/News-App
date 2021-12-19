import Articles from "./components/Articles";
import React, {useEffect, useState} from "react";
import NewsAPI from "newsapi";
import SearchInput from "./components/SearchInput";
import "./News.css";
import {Spinner} from "react-bootstrap";
import ArticlePage from "./components/ArticalePage";

function News() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    const [article, setArticle] = useState({title: "", publishedAt: "", urlToImage: "", description: "", content: ""});

    const handleClose = () => {
        setShow(false);
        setArticle({});
    };

    const handleShow = (item) => {
        setShow(true);
        setArticle(item);
    };


    //initialize news api key
    const newsapi = new NewsAPI('e757215315b04561943b9fdc9c8bc92b', {corsProxyUrl: 'https://cors-anywhere.herokuapp.com/'});

    //handle radio buttons
    const handleChange = e => {
        setCategory(e.target.value);
    };

    //get news
    const GetNews = () => {
        setIsLoading(true);
        //newsapi body
        let body = {
            category: category,
            language: 'en',
        }

        //append query
        if (searchInput !== "") {
            body["q"] = searchInput
        }

        try {
            newsapi.v2.topHeadlines(body).then(response => {
                if (response["status"] === "ok") {
                    console.log(response)
                    setArticles(response["articles"]);
                    setError(false);
                    setIsLoading(false);
                } else {
                    setError(true);
                    setIsLoading(false);
                    throw response;
                }

            });
        } catch (error) {
            const {response} = error;
            throw response
        }
    }

    useEffect(() => {
        //get news
        if (category !== "") {
            GetNews();
        }

    }, [category, searchInput]);

    return (
        <div className="container">
            <SearchInput setSearchInput={setSearchInput} handleChange={handleChange}/>
            {isLoading ?
                <div className="spinnerDiv">
                    <Spinner variant="primary" animation="border"
                             style={{width: '100px', height: '100px'}}/>
                </div>
                :
                error ?
                    <h1>Something went wrong please try again later</h1>
                    :
                    <div>
                        <Articles article={articles} handleShow={handleShow}/>
                        <ArticlePage show={show} article={article} handleClose={handleClose}/>
                    </div>
            }
        </div>
    );
}

export default News;
