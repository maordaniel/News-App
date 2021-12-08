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
        console.log(item)
        setArticle(item);
    };


    //initialize news api key
    const newsapi = new NewsAPI('e757215315b04561943b9fdc9c8bc92b', {corsProxyUrl: 'https://cors-anywhere.herokuapp.com/'});

    //handle radio buttons
    const handleChange = e => {
        e.persist();
        setCategory(e.target.value);
    };

    //handle search input
    const handleInput = () => {
        console.log(searchInput);
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
            // GetNews();
        }

    }, [category, searchInput]);
    const s = [{
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Taylor Hatmaker",
        "title": "Instagram’s Adam Mosseri defends the app’s teen safety track record to Congress",
        "description": "Head of Instagram Adam Mosseri testified before Congress for the first time Wednesday, defending the app’s impacts on teens and its aspirations to bring younger children formally into the fold. In September, leaked documents from Facebook whistleblower France…",
        "url": "https://techcrunch.com/2021/12/08/instagrams-adam-mosseri-senate-hearing-teen-safety/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1237099115.jpeg?w=600",
        "publishedAt": "2021-12-08T22:18:20Z",
        "content": "Head of Instagram Adam Mosseri testified before Congress for the first time Wednesday, defending the apps impacts on teens and its aspirations to bring younger children formally into the fold.\r\nIn Se… [+5592 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Sarah Perez",
        "title": "Instagram head Adam Mosseri says the app will offer a chronological feed option early next year",
        "description": "Instagram is bringing back a chronological feed, according to statements made by Instagram head Adam Mosseri during his testimony today before a Senate panel over the harms to young people using the app. Mosseri was asked if he believed consumers should be ab…",
        "url": "https://techcrunch.com/2021/12/08/instagram-head-adam-mosseri-says-the-app-will-offer-a-chronological-feed-option-early-next-year/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/instagram-icon-ios-closeup.jpg?w=711",
        "publishedAt": "2021-12-08T21:57:37Z",
        "content": "Instagram is bringing back a chronological feed, according to statements made by Instagram head Adam Mosseri during his testimony today before a Senate panel over the harms to young people using the … [+2307 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Lucas Matney",
        "title": "Kickstarter plans to move its crowdfunding platform to the blockchain",
        "description": "Crowdfunding platform Kickstarter is making a big bet on the blockchain, announcing plans to create an open source protocol “that will essentially create a decentralized version of Kickstarter’s core functionality.” The company says the goal is for multiple p…",
        "url": "https://techcrunch.com/2021/12/08/kickstarter-plans-to-move-its-crowdfunding-platform-to-the-blockchain/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/03/kickstarter-ios-icon_preview.jpg?w=711",
        "publishedAt": "2021-12-08T21:30:38Z",
        "content": "Crowdfunding platform Kickstarter is making a big bet on the blockchain, announcing plans to create an open source protocol “that will essentially create a decentralized version of Kickstarters core … [+2538 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Amanda Silberling",
        "title": "Head of Instagram Adam Mosseri says teen accounts created on the web don't default to private",
        "description": "Adam Mosseri, Head of Instagram, is testifying before the Senate today about the impact of Instagram on teens’ mental health. His first appearance before the Senate, this is just one of several hearings that have taken place ever since whistleblower Frances H…",
        "url": "https://techcrunch.com/2021/12/08/head-of-instagram-adam-mosseri-says-teen-accounts-created-on-the-web-dont-default-to-private/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1237098710.jpeg?w=600",
        "publishedAt": "2021-12-08T20:50:17Z",
        "content": "Adam Mosseri, Head of Instagram, is testifying before the Senate today about the impact of Instagram on teens’ mental health. His first appearance before the Senate, this is just one of several heari… [+1234 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Sarah Perez",
        "title": "Apple won't have to make the App Store changes ordered in Epic ruling while case is appealed",
        "description": "Apple will not have to implement changes to its in-app purchase system and App Store guidelines as ordered by the judge’s ruling in its court battle with Epic Games. While Apple largely won that case, as the court ruled Apple was not acting as a monopolist, t…",
        "url": "https://techcrunch.com/2021/12/08/apple-wont-have-to-make-the-app-store-changes-ordered-in-epic-ruling-while-case-is-appealed/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/apple-app-store-ios-2021.jpg?w=712",
        "publishedAt": "2021-12-08T20:44:08Z",
        "content": "Apple will not have to implement changes to its in-app purchase system and App Store guidelines as ordered by the judge’s ruling in its court battle with Epic Games. While Apple largely won that case… [+2288 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Alex Wilhelm",
        "title": "Black Ops Ventures launches to invest in Black founders",
        "description": "The venture capital market is on a tear, pumping capital into a host of startups around the world. It’s generally considered a great time to raise capital and build a technology-centered, disruptive business. For some, that is. While the venture capital boom …",
        "url": "https://techcrunch.com/2021/12/08/black-ops-ventures-launches-to-invest-in-black-founders/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-102719801.jpg?w=533",
        "publishedAt": "2021-12-08T20:06:57Z",
        "content": "The venture capital market is on a tear, pumping capital into a host of startups around the world. It’s generally considered a great time to raise capital and build a technology-centered, disruptive … [+3529 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Mary Ann Azevedo",
        "title": "Silicon Valley's share of US VC funding falls to lowest level in more than a decade",
        "description": "So far in 2021, only about 27% of U.S. VC dollars have gone to Bay Area startups. It's been more than 10 years since that percentage fell below 30%, according to a report by Revolution and Pitchbook.",
        "url": "https://techcrunch.com/2021/12/08/silicon-valleys-share-of-us-vc-funding-falls-to-lowest-level-in-more-than-a-decade/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1293496370.jpg?w=712",
        "publishedAt": "2021-12-08T19:49:02Z",
        "content": "In 2014, more than 40% of U.S. seed- and early-stage venture dollars went to Bay Area startups.\r\nBut that was a long time ago.\r\nIn recent years, Bay Area startups have accounted for a smaller percent… [+1705 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Benjamin Whitby",
        "title": "How should we regulate DeFi?",
        "description": "How can authorities enforce regulations that don't rely on the presence of intermediaries? And how will regulations protect users and the market?",
        "url": "https://techcrunch.com/2021/12/08/how-should-we-regulate-defi/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-698155326.jpg?w=599",
        "publishedAt": "2021-12-08T19:30:39Z",
        "content": "Peer-to-peer trading, face to face, eye to eye it’s the way deals had been done for millennia, before distance and lack of trust forced us to use go-betweens such as banks and brokers to transact.\r\nN… [+6443 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Alex Wilhelm, Anna Heim",
        "title": "Gift Guide: The best non-business books for 2021 recommended by VCs",
        "description": "We’re pretty big reading nerds here at TechCrunch, which means that we like to collect yearly book recommendations and share them with you.",
        "url": "https://techcrunch.com/2021/12/08/gift-guide-the-best-non-business-books-for-2021-recommended-by-vcs/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3_RD.jpg?w=533",
        "publishedAt": "2021-12-08T19:06:26Z",
        "content": "Were pretty big reading nerds here at TechCrunch, which means that we like to collect yearly book recommendations and share them with you.\r\nWith our own Danny Crichton having left the fold for pastur… [+10704 chars]"
    }, {
        "source": {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Devin Coldewey",
        "title": "Hear NASA's Kathy Lueders talk about the next stage of mankind's push into space",
        "description": "We’re in the earliest stages of Artemis, NASA’s new push to establish an enduring human presence on the Moon, and Kathy Lueders will be leading a great deal of this ambitious undertaking. But it’s more than rockets and lunar landers, as she’ll explain at Tech…",
        "url": "https://techcrunch.com/2021/12/08/hear-nasas-kathy-lueders-talk-about-the-next-stage-of-mankinds-push-into-space/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/Kathy-Lueders-NASA-Space.png?w=711",
        "publishedAt": "2021-12-08T19:05:41Z",
        "content": "We’re in the earliest stages of Artemis, NASA’s new push to establish an enduring human presence on the Moon, and Kathy Lueders will be leading a great deal of this ambitious undertaking. But it’s mo… [+1470 chars]"
    }]

    return (
        <div className="container">
            <SearchInput setSearchInput={setSearchInput} handleChange={handleChange} handleInput={handleInput}/>
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
                        <Articles article={s} handleShow={handleShow}/>
                        <ArticlePage show={show} article={article} handleClose={handleClose}/>
                    </div>
            }
        </div>
    );
}

export default News;
