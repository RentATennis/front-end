import React from "react";
import DashListProducts from "../../components/DashListProducts";
import Header from "../../components/Header";
import InputRadioCategory from "../../components/SearchProducts/FormDashboard/InputRadio/RadioCategory";
import InputGender from "../../components/SearchProducts/FormDashboard/InputRadio/RadioGender";
import InputSelect from "../../components/SearchProducts/FormDashboard/InputSelect";
import { StyledDivInputs } from "./Styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <StyledDivInputs>
        <InputRadioCategory />
        <InputGender />
      </StyledDivInputs>
      <InputSelect />
      <DashListProducts />
    </>
  );
};

export default Dashboard;
