import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <div className={classes.logo}>Розумняшка</div>
        <div className={classes.items}>
          <NavLink to="" className={classes.button}>
            Всі тести
          </NavLink>
          <button className={classes.button}>Книги</button>
          <button className={classes.button}>Контакти</button>
        </div>
      </div>
    </div>
  );
};
