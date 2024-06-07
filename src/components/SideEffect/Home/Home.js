import React from "react";
import styles from "./Home.module.css";
import Card from "../../ui/Card";

const Home = () => {
  return (
    <Card className={styles.home}>
      <h1>Welcome Back!</h1>
    </Card>
  );
};

export default Home;
