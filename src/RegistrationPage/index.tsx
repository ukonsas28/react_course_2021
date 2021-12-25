import React from "react";
import Footer from "../Footer";
import FruitCart from "../FruitCart";
// import Form from "../Form";
import Header from "../Header";

const data = [
  {
    id: 1,
    name: "Orange",
    cost: 2,
  },
  {
    id: 2,
    name: "Apple",
    cost: 3,
  },
  {
    id: 3,
    name: "Lemon",
    cost: 3,
  },
  {
    id: 4,
    name: "Banana",
    cost: 5,
  },
];

const RegistrationPage: React.FC = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <main className="main">
        {data.map(({ name, cost, id }) => (
          <div key={id}>
            <h1>{name}</h1>
            <span>{cost}</span>
          </div>
          // <FruitCart key={id} name={name} cost={cost} />
        ))}
        {/* {[
          <FruitCart name={data[0].name} cost={data[0].cost} />,
          <FruitCart name={data[1].name} cost={data[1].cost} />,
          <FruitCart name={data[2].name} cost={data[2].cost} />,
          <FruitCart name={data[3].name} cost={data[3].cost} />,
        ]} */}
        {/* <Form /> */}
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
