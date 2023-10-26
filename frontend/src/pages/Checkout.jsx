import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "../components/Address";
import PaymentForm from "../components/PaymentForm";
import Review from "../components/Review";
import axios from "axios";
import { useState } from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        QuickPick
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step,setAddress,setCity,setPincode,setState, setCardName, setCardNumber, setCvv) {
  switch (step) {
    case 0:
      return <AddressForm setAddress={setAddress} setCity={setCity} setPincode={setPincode} setState={setState}/>;
    case 1:
      return <PaymentForm setCardName={setCardName} setCardNumber={setCardNumber} setCvv={setCvv} />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [address,setAddress] = useState("")
  const [pincode,setPincode] = useState("")
  const [city,setCity] = useState("")
  const [state,setState] = useState("")
  const [activeStep, setActiveStep] = React.useState(0);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [cvv, setCvv] = useState(0);

  const handleFirstNext = async() => {
    const fullAddress = `${address}, ${city}, ${state} - ${pincode}`;
    console.log(fullAddress)
    const response = await axios.post("/api/v1/checkoutcart", {
      address:fullAddress,
    });
    if (response.data.message === "Successfully got the address"){
      setActiveStep(activeStep + 1);
    }
  };

  const handleSecondNext = async () => {
    const data = {
      card_number: cardNumber,
      card_name: cardName,
      cvv: cvv,
    };

    const response = await axios.post("/api/v1/savePayment", data);
    if (response.data.message === "Set payment details"){
      setActiveStep(activeStep + 1);
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep,setAddress,setCity,setPincode,setState, setCardName, setCardNumber, setCvv)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={activeStep === 0 ? handleFirstNext: activeStep === 1 ? handleSecondNext : () => {}}
                  sx={{ mt: 3, ml: 1 }}
                >
                  
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
