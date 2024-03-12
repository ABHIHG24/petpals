import React, { useState } from "react";
import "./Quiz.css";
const Quiz = () => {
  const questions = [
    {
      question: "Do you live in a house or an apartment?",
      options: ["House", "Apartment"],
    },

    {
      question: "How much time can you dedicate to exercise daily?",
      options: [
        "Less than 30 minutes",
        "30 minutes to 1 hour",
        "More than 1 hour",
      ],
    },
    {
      question: "Do you have any allergies to pet dander?",
      options: ["Yes", "No"],
    },
    {
      question: "How would you describe your energy level?",
      options: ["Low", "Moderate", "High"],
    },
    {
      question: "How much time are you willing to spend grooming your pet?",
      options: ["Minimal grooming", "Moderate grooming", "Extensive grooming"],
    },
    {
      question: "Are you comfortable with a pet that requires training?",
      options: [
        "Yes, I'm willing to train",
        "Preferably already trained",
        "No, I want a low-maintenance pet",
      ],
    },
    {
      question: "Do you have children in your household?",
      options: ["Yes", "No"],
    },
    {
      question: "How often do you travel?",
      options: ["Frequently", "Occasionally", "Rarely"],
    },
    {
      question: "Are you looking for a pet that is good with other animals?",
      options: ["Yes", "No, I want a solo pet"],
    },
    {
      question:
        "Do you prefer a pet with a calm demeanor or one that is more active?",
      options: ["Calm", "Active"],
    },
    {
      question: "Are you interested in adopting a puppy or an adult dog?",
      options: ["Puppy", "Adult"],
    },
    {
      question: "Do you have a fenced yard?",
      options: ["Yes", "No"],
    },
    {
      question: "How much time do you spend at home on average?",
      options: ["Most of the time", "Some of the time", "Rarely"],
    },
    {
      question: "Are you looking for a pet that is good with strangers?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you have experience with pet ownership?",
      options: ["Yes, I've had pets before", "No, I'm a first-time pet owner"],
    },
    {
      question: "Would you prefer a small, medium, or large-sized pet?",
      options: ["Small", "Medium", "Large"],
    },
    {
      question: "How much space do you have available for a pet?",
      options: ["Limited space", "Moderate space", "Plenty of space"],
    },
    {
      question: "Do you have any specific breed preferences?",
      options: ["Yes", "No"],
    },
    {
      question:
        "Are you willing to invest in pet training and obedience classes?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you have any age preference for the pet?",
      options: ["Puppy/Kitten", "Adult", "Senior"],
    },
    {
      question:
        "Do you have any mobility or physical limitations that may affect pet care?",
      options: ["Yes", "No"],
    },
    {
      question:
        "Are you willing to provide regular veterinary care for your pet?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you have a preference for indoor or outdoor pets?",
      options: ["Indoor", "Outdoor"],
    },
    {
      question:
        "Are you interested in adopting a purebred or a mixed-breed pet?",
      options: ["Purebred", "Mixed-breed"],
    },
    {
      question: "Are you open to adopting a special-needs pet?",
      options: ["Yes", "No"],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionIndex, optionIndex) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };

  const calculateResult = () => {
    return "Jack Russell Terrier";
  };

  return (
    <div>
      <div className="quiz-container">
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <h3>{question.question}</h3>
            <div className="options">
              {question.options.map((option, optionIndex) => (
                <button
                  className="option"
                  key={optionIndex}
                  onClick={() => handleAnswer(index, optionIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        {showResult && (
          <div className="result">
            <h2>Recommended Pet Breed:</h2>
            <p>{calculateResult()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
