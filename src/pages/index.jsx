import { Fragment, useContext } from "react";
import Header from "../components/header/header";
import style from "./index.module.css";
import Logo from "../media/logo.jpg";
import { useHistory } from "react-router";
import SelectComponents from "../components/select";
import SessionContext from "../session/SessionContext";
const Welcome = () => {
  const {
    difficult,
    ammount,
    actions: { setDifficult, setAmmount },
  } = useContext(SessionContext);
  let history = useHistory();
  const GetStarted = () => {
    history.push({ pathname: "/question" });
  };

  return (
    <Fragment>
      <Header />

      <div className={style.container}>
        <center>
          <img src={Logo} className={style.img} alt="logo" />
          <h3>A Trivia Game</h3>
          <div className={style.selects}>
            <SelectComponents
              menu={["easy", "medium", "hard"]}
              value={difficult}
              setValue={setDifficult}
              label="Difficult"
            />
            <SelectComponents
              menu={[10, 15, 20]}
              value={ammount}
              setValue={setAmmount}
              label="Ammount"
            />
          </div>

          <input
            type="button"
            value="GET STARTED"
            className={style.button}
            onClick={GetStarted}
          />
        </center>
      </div>
    </Fragment>
  );
};

export default Welcome;
