import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardImg,
} from "react-bootstrap";


function Articles(props) {
    return (
        <div className="Articles">
            {props.article.length > 0 ?
                props.article.map(item =>
                    <Card key={item.title} className="Article">
                        <Card.Body>
                            <CardImg className="ArticleImg" onClick={() => props.handleShow(item)}
                                     src={item.urlToImage} alt={item.title}/>
                            <Card.Title onClick={() => props.handleShow(item)}>{item.title}</Card.Title>
                            <Card.Text onClick={() => props.handleShow(item)}>
                                {item.publishedAt}
                            </Card.Text>
                            <Card.Text className="ArticleText" onClick={() => props.handleShow(item)}>
                                {item.description}
                            </Card.Text>
                            <a className="ReadButton" href={item.url}>
                                Read more
                            </a>
                        </Card.Body>
                    </Card>)
                :
                null
            }
        </div>
    )

}

export default Articles;