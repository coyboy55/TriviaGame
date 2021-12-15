import { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import SessionContext from "../../session/SessionContext";
import {fetchUrl} from '../../functions/fetchUrl'
import Question from "../../components/question";
import Answers from "../../components/answers";
import { get } from "lodash";
import { toast } from "react-toastify";
import Lose from "../lose/lose";

const Questions = () => {
  const [state, setState] = useState({});
  const [counter, setCounter] = useState(0);
  const [Answer, setAnswer] = useState('');
  const [failed, setFailed] = useState(false);

  
  const {
    difficult,
    ammount,
    question,
    points,
    actions: { setQuestion, setPoints },
  } = useContext(SessionContext);
  const getQuestions=async()=>{
    let res=await fetchUrl({difficult, ammount })
    setState(res)
    console.log(res);
  }

  useEffect(() => {
    getQuestions()
  }, []);

  const nextQuestion = ({Answer,correct}) => {
    if(Answer==correct){
         setCounter(counter + 1);
      setQuestion(question + 1);
      setPoints(points+1000)
      toast.success('Right!')
    }else{
      setFailed(true)
      toast.error('you lost!!!!!!')
    }
  };
let answers=state && state[counter] && state[counter].choices
let correct=state && state[counter] && state[counter].correct
if(failed) return <Lose/>
else
  return (
    <Fragment>
      <Header />
      <div>
        <center>
          <Question state={state} counter={counter}/>
        <Answers answers={answers} setAnswer={setAnswer} nextQuestion={nextQuestion} correct={correct}/>
        </center>
      </div>
    </Fragment>
  );
};

export default Questions;
