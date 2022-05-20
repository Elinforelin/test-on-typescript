import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { tests } from "../../constant/testsApi";
import { Home } from "../../pages/Home";
import { MathTest } from "../../pages/MathTest/indes";
import { Header } from "../Header";

const Root: FC = () => {
  return (
    <div>
      <Header />
      dfghjk
      <Routes>
        <Route path="" element={<Home />} />
        {tests.map((obj) => {
          return (
            <Route
              key={obj.name}
              path={obj.pathname}
              element={<MathTest questions={obj.questions} />}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Root;
