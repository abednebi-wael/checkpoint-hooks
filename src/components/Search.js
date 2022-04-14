import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Search({ setFilterName }) {
  return (
    <div className="search-mov">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setFilterName(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}
export default Search;
