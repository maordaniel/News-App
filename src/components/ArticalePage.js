import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";


function ArticlePage(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header >
                <Modal.Title>{props.article.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={{width: "450px"}}
                    src={props.article.urlToImage}
                    alt={props.article.publishedAt}
                />
                <p>
                    {props.article.publishedAt}
                </p>

                <p>
                    {props.article.author}
                </p>


                <p>
                    {props.article.description}
                </p>

                <p>
                    {props.article.content}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ArticlePage;