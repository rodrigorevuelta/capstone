import React from "react";
import Button from '@material-ui/core/Button';

const Home = () => {
  const elements = <Button variant="contained" color="primary">Hello World</Button>;
  
  return (<><div>{elements}</div></>);
}

export default Home;