import { useContext } from "react";
import SessionContext from "../../session/SessionContext";
import style from "./header.module.css";
const Header = (props) => {
  const { question, ammount, points } = useContext(SessionContext);
  let { time } = props;
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div>
          Questions :{question}/{ammount}
        </div>
        <div>
          Points :{points}/{ammount * 1000}
        </div>
        <div>Remaining time :{time}</div>
      </div>
    </header>
  );
};

export default Header;
