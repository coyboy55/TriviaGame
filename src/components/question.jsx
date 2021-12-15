import { get } from "lodash";

const Question = (props) => {
  let { counter, state } = props;
  return <h2>{get(state[counter], "text", null)}</h2>;
};

export default Question;
