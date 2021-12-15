import randomArrayShuffle from "./randomArray";

/**
 * Used to make it easy to fetch from backend
 * @param {string}
 * @returns
 */
export async function fetchUrl({ difficult, ammount }) {
  let url = `https://opentdb.com/api.php?amount=${ammount}&difficulty=${difficult}&type=multiple`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    if (data.response_code === 0) {
      return fixResult(data.results);
    }
  } catch (e) {
    return e;
  }
}

const fixResult = (questions) => {
  return questions.map((question, index) => ({
    id: index,
    category: question.category,
    type: question.type,
    difficulty: question.difficulty,
    text: decodeHTML(question.question.trim()),
    choices: randomArrayShuffle(
      question.correct_answer.split(",").concat(question.incorrect_answers)
    ),
    correct: decodeHTML(question.correct_answer.trim()),
    incorrect: question.incorrect_answers,
  }));
};

const decodeHTML = (html) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};
