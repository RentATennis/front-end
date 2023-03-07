import React from "react";
import DashListProducts from "../../components/DashListProducts";
import Header from "../../components/Header";
import InputRadioCategory from "../../components/SearchProducts/FormDashboard/InputRadio/RadioCategory";
import InputGender from "../../components/SearchProducts/FormDashboard/InputRadio/RadioGender";
import InputSelect from "../../components/SearchProducts/FormDashboard/InputSelected";

const Dashboard = () => {
  return (
    <>
      <Header />
      <InputRadioCategory />
      <InputGender />
      <InputSelect />
      <DashListProducts />
    </>
  );
};

export default Dashboard;
