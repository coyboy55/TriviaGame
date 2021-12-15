import { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import SessionContext from "../../session/SessionContext";
import { fetchUrl } from "../../functions/fetchUrl";
import Question from "../../components/question";
import Answers from "../../components/answers";
import { useTimer } from "use-timer";
import { toast } from "react-toastify";
import Lose from "../lose/lose";

const Questions = () => {
  const [state, setState] = useState({});
  const [counter, setCounter] = useState(0);
  const [failed, setFailed] = useState(false);
  const { time, start, advanceTime } = useTimer({
    initialTime: 15,
    timerType: "DECREMENTAL",
    endTime: 0,
    onTimeOver: () => {
      setFailed(true);
    },
  });

  const {
    difficult,
    ammount,
    question,
    points,
    actions: { setQuestion, setPoints },
  } = useContext(SessionContext);
  const getQuestions = async () => {
    let res = await fetchUrl({ difficult, ammount });
    setState(res);
    setQuestion(question+1)
  };

  useEffect(() => {
    getQuestions();
    start();
  }, []);

  const nextQuestion = ({ Answer, correct }) => {
    if (Answer == correct) {
      setCounter(counter + 1);
      setQuestion(question + 1);
      setPoints(points + 1000);
      toast.success("Right!");
      advanceTime(time - 15);
    } else {
      setFailed(true);
      toast.error("you lost!!!!!!");
    }
  };
  let answers = state && state[counter] && state[counter].choices;
  let correct = state && state[counter] && state[counter].correct;
  // status == 'RUNNING' && setTimer(time);
  if (failed) return <Lose />;
  else
    return (
      <Fragment>
        <Header time={time} />
        <div>
          <center>
            <Question state={state} counter={counter} />
            <Answers
              answers={answers}
              nextQuestion={nextQuestion}
              correct={correct}
            />
            {/* <button onClick={()=>}>reset</button> */}
          </center>
        </div>
      </Fragment>
    );
};

export default Questions;
