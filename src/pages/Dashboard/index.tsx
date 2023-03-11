import React, { useContext } from "react";
import DashListProducts from "../../components/DashListProducts";
import DynamicModal from "../../components/DynamicModal";
import Header from "../../components/Header";
import InputRadioCategory from "../../components/SearchProducts/FormDashboard/InputRadio/RadioCategory";
import InputGender from "../../components/SearchProducts/FormDashboard/InputRadio/RadioGender";
import InputSelect from "../../components/SearchProducts/FormDashboard/InputSelect";
import { ShopContext } from "../../contexts/ShopContext/ShopContext";
import { StyledDivInputs } from "./Styles";

const Dashboard = () => {
  const {dynamicModal} = useContext(ShopContext)
  return (
    <>
      <Header />
      <StyledDivInputs>
        <InputRadioCategory />
        <InputGender />
      </StyledDivInputs>
      <InputSelect />
      <DashListProducts />
      {dynamicModal === true ? <DynamicModal/> : null}
    </>
  );
};

export default Dashboard;
