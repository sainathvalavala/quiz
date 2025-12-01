import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetAllQuestionsQuery,
  useSubmittedAnswersMutation,
  useSaveResultMutation,
} from "../services/quizApi";
import { useFormik } from "formik";

const QuizPage = () => {
  const { category } = useParams();
  const { isLoading, data } = useGetAllQuestionsQuery(category);
  const [submittedAnswers, { data: submitResult }] =
    useSubmittedAnswersMutation();


  const [saveResult] = useSaveResultMutation();

  const [next, setNext] = useState(false);

  const quizForm = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      submittedAnswers(values);
    },
  });

  
  useEffect(() => {
    if (submitResult) {
      const username = localStorage.getItem("username");

      saveResult({
        username,
        score: submitResult.result,
        totalQuestions: submitResult.totalQuestions,
      });
    }
  }, [submitResult]);

  function nextPage() {
    setNext(true);
  }

  function prevPage() {
    setNext(false);
  }

  if (isLoading)
    return (
      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="fixed w-full flex items-center justify-between bg-[#232f3e]">
        <div className="text-[34px] font-bold text-purple-400 ps-4">
          {category} Quiz
        </div>

        <div className="text-white text-2xl font-extrabold font-semibold px-4">
          {submitResult && (
            <div>
              Your Score: {submitResult.result}/{submitResult.totalQuestions}
            </div>
          )}
        </div>

        <Link
          to={"/"}
          className="m-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md 
                          hover:shadow-lg transition"
        >
          Home
        </Link>
      </div>

      <div className="flex justify-center pt-20">
        <div className="w-full shadow-2xl max-w-xl">
          <form onSubmit={quizForm.handleSubmit}>
            {!next ? (
              <ol className="list-none ml-6 space-y-6">
                {data?.slice(0, 5).map((question, i) => {
                  return (
                    <li key={i} className="max-w-lg">
                      <span className="font-bold">{i + 1}. </span>
                      <p className="font-medium m-3 inline">
                        {question.question.text}
                      </p>

                      {question.options.map((option, idx) => (
                        <label key={idx} className="flex items-center gap-2 mb-2">
                          <input
                            type="radio"
                            name={question.sno}
                            value={option}
                            checked={quizForm.values[question.sno] == option}
                            onChange={quizForm.handleChange}
                          />
                          {option}
                        </label>
                      ))}
                    </li>
                  );
                })}

                <div className="flex justify-end m-3">
                  <button
                    type="button"
                    className="w-[100px] py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md"
                    onClick={nextPage}
                  >
                    Next
                  </button>
                </div>
              </ol>
            ) : (
              <ol className="list-none ml-6 space-y-6">
                {data?.slice(5, 10).map((question, i) => {
                  return (
                    <li key={i} className="max-w-lg">
                      <span className="font-bold">{i + 6}. </span>
                      <p className="font-medium m-3 inline">
                        {question.question.text}
                      </p>

                      {question.options.map((option, idx) => (
                        <label key={idx} className="flex items-center gap-2 mb-2">
                          <input
                            type="radio"
                            name={question.sno}
                            value={option}
                            checked={quizForm.values[question.sno] == option}
                            onChange={quizForm.handleChange}
                          />
                          {option}
                        </label>
                      ))}
                    </li>
                  );
                })}

                <div className="flex justify-between m-3">
                  <button
                    type="button"
                    className="w-[100px] py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-md"
                    onClick={prevPage}
                  >
                    Previous
                  </button>

                  <button
                    type="submit"
                    className="w-[100px] py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md"
                  >
                    Submit
                  </button>
                </div>
              </ol>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
