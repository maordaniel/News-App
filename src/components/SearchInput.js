import React, {useEffect, useState} from "react";
import {Button, FormControl, Form, InputGroup} from "react-bootstrap";


function SearchInput(props) {
    return (
        <div className="SearchWrapper">
            <div className="SearchTextInput">
                <InputGroup className="mb-3">
                    <FormControl
                        aria-label="News"
                        aria-describedby="basic-addon2"
                        onChange={e => props.setSearchInput(e.target.value)}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={props.handleInput}>
                        Search
                    </Button>
                </InputGroup>
            </div>

            <div className="SearchRadioInput">
                <Form.Check
                    inline
                    label="business"
                    value="business"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-1`}
                    onChange={props.handleChange}
                />
                <Form.Check
                    inline
                    label="entertainment"
                    value="entertainment"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-2`}
                    onChange={props.handleChange}
                />
                <Form.Check
                    inline
                    label="general"
                    value="general"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-3`}
                    onChange={props.handleChange}
                />
                <Form.Check
                    inline
                    label="health"
                    value="health"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-2`}
                    onChange={props.handleChange}
                />
                <Form.Check
                    inline
                    label="science"
                    value="science"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-5`}
                    onChange={props.handleChange}
                />
                <Form.Check
                    inline
                    label="sports"
                    value="sports"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-6`}
                    onChange={props.handleChange}
                />
                <Form.Check
                    inline
                    label="technology"
                    value="technology"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-7`}
                    onChange={props.handleChange}
                />
            </div>

        </div>
    )

}

export default SearchInput;