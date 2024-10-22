// pages/create-quiz.js
"use client";
import { useState } from "react";
import CoverPage from "../coverpage/page";
import Section from "../section/page";

export default function CreateQuiz() {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "",
      description: "",
      questions: [],
      showQuestionTypes: false,
    },
  ]);

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      title: "",
      description: "",
      questions: [],
      showQuestionTypes: false,
    };
    setSections([...sections, newSection]);
  };

  const addQuestion = (sectionId, type) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: [
            ...section.questions,
            {
              id: section.questions.length + 1,
              type,
              options: type !== "text_input" && type !== "date" && type !== "rating" ? [""] : [],
              maxSelect: 1,
              isRequired: false,
              ratingLevel: type === "rating" ? 5 : null,
            },
          ],
          showQuestionTypes: false,
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const updateOption = (sectionId, questionId, optionIndex, value) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: section.questions.map((question) => {
            if (question.id === questionId) {
              const updatedOptions = [...question.options];
              updatedOptions[optionIndex] = value;
              return { ...question, options: updatedOptions };
            }
            return question;
          }),
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const updateRatingLevel = (sectionId, questionId, value) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: section.questions.map((question) => {
            if (question.id === questionId && question.type === "rating") {
              return { ...question, ratingLevel: value };
            }
            return question;
          }),
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const addOption = (sectionId, questionId) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: section.questions.map((question) => {
            if (question.id === questionId) {
              return { ...question, options: [...question.options, ""] };
            }
            return question;
          }),
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const removeOption = (sectionId, questionId, optionIndex) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: section.questions.map((question) => {
            const updatedOptions = question.options.filter(
              (_, idx) => idx !== optionIndex
            );
            return { ...question, options: updatedOptions };
          }),
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const updateMaxSelect = (sectionId, questionId, value) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: section.questions.map((question) => {
            if (question.id === questionId && question.type === "checkbox") {
              return { ...question, maxSelect: value };
            }
            return question;
          }),
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const toggleRequired = (sectionId, questionId) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: section.questions.map((question) => {
            if (question.id === questionId) {
              return { ...question, isRequired: !question.isRequired };
            }
            return question;
          }),
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const deleteQuestion = (sectionId, questionId) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          questions: section.questions.filter(
            (question) => question.id !== questionId
          ),
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const deleteSection = (sectionId) => {
    if (sectionId === 1) return;
    const updatedSections = sections
      .filter((section) => section.id !== sectionId)
      .map((section, index) => ({ ...section, id: index + 1 }));
    setSections(updatedSections);
  };

  const toggleAddQuestionVisibility = (sectionId) => {
    setShowAddQuestion((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const toggleQuestionTypesVisibility = (sectionId) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        return { ...section, showQuestionTypes: !section.showQuestionTypes };
      }
      return section;
    });
    setSections(updatedSections);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <CoverPage />
      {sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          questionTypes={questionTypes}
          addQuestion={addQuestion}
          updateOption={updateOption}
          updateRatingLevel={updateRatingLevel}
          addOption={addOption}
          removeOption={removeOption}
          updateMaxSelect={updateMaxSelect}
          toggleRequired={toggleRequired}
          deleteQuestion={deleteQuestion}
          deleteSection={deleteSection}
          toggleQuestionTypesVisibility={toggleQuestionTypesVisibility}
          addSection={addSection}
        />
      ))}
    </div>
  );
}