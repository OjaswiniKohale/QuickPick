import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect,useState } from "react";


export default function Review() {
  
  const [productDetails,setProductDetails] = useState([])
  const [deliveryCost,setDeliveryCost] = useState(0)
  useEffect(()=>{
    fetchProductDetails()
    handleDeliveryCost()
  },[])
  const handleDeliveryCost = async() => {
    const response = await axios.get("/api/v1/deliveryCost");
    console.log(response.data);
    if(response.data.deliveryCost){
      setDeliveryCost(response.data.deliveryCost)
    }
  }
  const fetchProductDetails = async() => {
  const response = await axios.get("/api/v1/reviewOrder");
  console.log(response.data)
  if(response.data){
    setProductDetails(response.data)
  }
}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {productDetails.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={`x ${product.quantity}`} />
            <Typography variant="body2">Rs.{product.total_price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Delivery Cost" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          + Rs.{deliveryCost}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Rs.{deliveryCost*21}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
