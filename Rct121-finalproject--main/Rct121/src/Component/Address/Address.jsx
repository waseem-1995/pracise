import React from "react";
import CartFoot from "../Cart/CartFoot";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import {
  AddAddressButton,
  AddressCheckoutAdd,
  Addressdiv,
  AddressFormDiv,
  ButtonDiv,
  CityInput,
  ContactDetails,
  ContactInput,
  BoxContainer,
  DotsCheckoutAdd,
  FormDiv,
  FormLeftdiv,
  FormRightDiv,
  AddInput,
  Headings,
  NameInput,
  PinCodeInput,
  PlaceorderButton,
  PlaceorderDiv,
  SaveAddressdiv,
  SaveHome,
  SaveWork,
  StateInput,
  TownInput
} from "./Address.element";
import Logoimg from "../../Images/Logoimg.png";
import order from "../../Images/order.png";
import {
  BagCheckout,
  DotsCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  PaymentCheckout,
  SecureLogo,
  SecureN
} from "../Cart/CartNav.element";
import {
  AllPriceDiv,
  CoupDis,
  CoupDisDiv,
  CoupDisrs,
  CoviFee,
  CoviFeediv,
  CoviFeeKM,
  CoviFeers,
  Dmrp,
  DmrpDiv,
  Dmrprs,
  PriceDetailsT,
  Tmrp,
  TmrpDiv,
  Tmrprs,
  TotalAmount,
  TotalAmountdiv,
  TotalAmountrs,
  TotalPriceDiv
} from "../Cart/CartRight.element";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Address = () => {
  const navigate = useNavigate();
  const bagData = useSelector((state) => state.bag.bagData);

  let totalAmount = 0;
  bagData?.map(
    (e) =>
      (totalAmount += Math.floor(
        Number(e.off_price) * ((100 - Number(e.discount)) / 100)
      ))
  );

  let totalMRP = 0;
  bagData?.map((e) => (totalMRP += Math.floor(Number(e.off_price))));

  let totalDiscount = totalMRP - totalAmount;
  const goToPayment = () => {
    navigate("/payment");
  };
  const addAddress = (e) => {
    e.preventDefault();
    // toast.success("Address Added SuccessFully");
  };
  return (
    <BoxContainer>
      <NavContainer>
        <NavLogo>
          <Logo src={Logoimg} onClick={() => navigate("/")} />
        </NavLogo>
        <NavCheckOutSteps>
          <BagCheckout>BAG</BagCheckout>
          <DotsCheckoutAdd>---------</DotsCheckoutAdd>
          <AddressCheckoutAdd>ADDRESS</AddressCheckoutAdd>
          <DotsCheckout>---------</DotsCheckout>
          <PaymentCheckout>PAYMENT</PaymentCheckout>
        </NavCheckOutSteps>
        <NavSecure>
          <SecureLogo src={order} />
          <SecureN>100% SECURE</SecureN>
        </NavSecure>
      </NavContainer>
      <AddressFormDiv>
        <FormLeftdiv>
          <FormDiv>
            <ContactDetails>
              <Headings>Contact Details</Headings>

              <NameInput placeholder="Enter Your Name" />
              <ContactInput placeholder="Enter Your Mobile No." />
            </ContactDetails>
            <Addressdiv>
              <Headings>Address</Headings>
              <PinCodeInput placeholder="Enter Pin Code" />
              <AddInput placeholder="Enter Full Address" />
              <TownInput placeholder="Enter Locality/Town" />
              <CityInput placeholder="Enter City/District" />
              <StateInput placeholder="Enter State" />
            </Addressdiv>
            <SaveAddressdiv>
              <Headings>Save Address as:</Headings>
              <SaveHome>Home</SaveHome>
              <SaveWork>Work</SaveWork>
            </SaveAddressdiv>
            <ButtonDiv>
              <AddAddressButton onClick={addAddress}>
                ADD ADDRESS
              </AddAddressButton>
            </ButtonDiv>
          </FormDiv>
        </FormLeftdiv>
        <FormRightDiv>
          <AllPriceDiv>
            <PriceDetailsT>
              PRICE DETAILS ({bagData.length} Items)
            </PriceDetailsT>
            <TmrpDiv>
              <Tmrp>TOTAL MRP</Tmrp>
              <Tmrprs>₹{totalMRP}</Tmrprs>
            </TmrpDiv>
            <DmrpDiv>
              <Dmrp>Discount on MRP</Dmrp>
              <Dmrprs>-₹{totalDiscount}</Dmrprs>
            </DmrpDiv>
            <CoupDisDiv>
              <CoupDis>Coupon Discount</CoupDis>
              <CoupDisrs>Apply Coupon</CoupDisrs>
            </CoupDisDiv>
            <CoviFeediv>
              <CoviFee>Convenience Fee</CoviFee>
              <CoviFeeKM>Know More</CoviFeeKM>
              <CoviFeers>FREE</CoviFeers>
            </CoviFeediv>
          </AllPriceDiv>
          <TotalPriceDiv>
            <TotalAmountdiv>
              <TotalAmount>Total Amount</TotalAmount>
              <TotalAmountrs>₹{totalAmount}</TotalAmountrs>
            </TotalAmountdiv>
            <PlaceorderDiv>
              <PlaceorderButton onClick={goToPayment}>
                PLACE ORDER
              </PlaceorderButton>
            </PlaceorderDiv>
          </TotalPriceDiv>
        </FormRightDiv>
      </AddressFormDiv>
      <CartFoot />
      {/* <ToastContainer /> */}
    </BoxContainer>
  );
};

export default Address;
