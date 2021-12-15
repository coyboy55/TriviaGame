import { Fragment } from "react";

const Answers = (props) => {
  let { answers, correct, nextQuestion } = props;
  return (
    <Fragment>
      {answers &&
        answers.map((answer, index) => (
          <div>
            <button
              style={{
                margin: "1%",
                padding: "1% 7% 1% 7%",
                backgroundColor: "gray",
                color: "white",
                borderStyle: "none",
                marginTop: "5%",
              }}
              value={answer}
              key={index}
              onClick={(e)=>{nextQuestion({Answer:e.target.value,correct})}}
            >
              {answer}
            </button>
            <br />
          </div>
        ))}
    </Fragment>
  );
};

export default Answers;
