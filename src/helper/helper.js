import {
  setDocumentItems,
  setAnswerItems,
  setFaqItems,
  setTotalNumberOfResults,
} from "../redux/slices/searchSlice";

// const KENDRA_SUGGESTED_ANSWERS = "Amazon Kendra suggested answers";
const MAX_TOP_ANSWER_LENGTH = 25;

// Input is answer.AdditionalAttributes[0].Value.TextWithHighlightValues
export const getTopAnswer = (text) => {
  if (text && text.Highlights) {
    for (const highlight of text.Highlights) {
      const length = highlight.EndOffset - highlight.BeginOffset;
      if (highlight && highlight.TopAnswer && length < MAX_TOP_ANSWER_LENGTH) {
        const excerpt = text.Text.substring(
          highlight.BeginOffset,
          highlight.EndOffset
        );
        return excerpt;
      }
    }
  }

  // return null;
  return text.Text;
};

export const sortKendraResults = (kendraResults, dispatch) => {
  if (kendraResults.TotalNumberOfResults < 1) {
    dispatch(setTotalNumberOfResults(0));
    return kendraResults;
  }
  let answerItems = [];
  let documentItems = [];
  let faqItems = [];
  kendraResults.ResultItems.forEach((resultItem) => {
    if (resultItem.Type === "ANSWER") {
      answerItems.push(resultItem);
    } else if (resultItem.Type === "DOCUMENT") {
      documentItems.push(resultItem);
    } else if (resultItem.Type === "QUESTION_ANSWER") {
      faqItems.push(resultItem);
    }
  });
  dispatch(setAnswerItems(answerItems));
  dispatch(setDocumentItems(documentItems));
  dispatch(setFaqItems(faqItems));
  dispatch(setTotalNumberOfResults(kendraResults.TotalNumberOfResults));
};
