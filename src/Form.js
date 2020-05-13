import React from "react";
import { Button, TextField } from "@material-ui/core";
const Form = props => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <p>Just type the city name </p>
        <p className="check">you must spelling correctly</p>

        <TextField
          id="standard-basic"
          name="city"
          placeholder="City....."
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          find
        </Button>
      </form>
    </div>
  );
};

export default Form;
