import { FC } from "react";
import { NavLink } from "react-router-dom";
import { TestCard } from "../../component/TestCard";
import { tests } from "../../constant/testsApi";

import classes from "./styles.module.scss";

export const Home: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        {tests.map((obj) => (
          <NavLink key={obj.name} to={obj.pathname}>
            <TestCard name={obj.name} img={obj.img} desc={obj.desc} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
