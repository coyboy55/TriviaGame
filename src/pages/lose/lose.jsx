import { Fragment, useContext } from "react";
import { useHistory } from "react-router";
import lose from "../../media/lose.jpg";
import SessionContext from "../../session/SessionContext";
const Lose = () => {
  const history = useHistory();
  const {
    actions: { setPoints, setTimer, setQuestion },
  } = useContext(SessionContext);
  const handleRestar = () => {
    setPoints(0);
    setTimer(15);
    setQuestion(0);
    history.push({ pathname: "/" });
  };
  return (
    <Fragment>
      <center>
        <div>
          <img src={lose} style={{ width: "25%" }} />
        </div>

        <button
          style={{
            margin: "1%",
            padding: "1% 7% 1% 7%",
            backgroundColor: "gray",
            color: "white",
            borderStyle: "none",
            marginTop: "5%",
          }}
          onClick={handleRestar}
        >
          restar
        </button>
      </center>
    </Fragment>
  );
};

export default Lose;
