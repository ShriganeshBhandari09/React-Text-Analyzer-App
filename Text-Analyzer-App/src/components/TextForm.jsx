import { useState } from "react";
import "./TextForm.css";

const TextForm = () => {
  const [text, setText] = useState("");
  console.log(text);

  function handleChange(event) {
    setText(event.target.value);
  }
  function convertToUpperCase() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function convertToLowerCase() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function clearText() {
    let newText = "";
    setText(newText);
  }

  const countSentences = (text) =>
    text.split(/[.!?]\s+/).filter(Boolean).length;
  const countParagraphs = (text) =>
    (text.split(/\n+/) || []).filter(Boolean).length;
  const countSpaces = (text) => (text.match(/ /g) || []).length;
  const countPunctuations = (text) => (text.match(/[.,!?;:]/g) || []).length;
  return (
    <>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="text-form"
          rows="8"
          placeholder="Type, or copy/paste your content here."
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={convertToUpperCase}>
        UPPER CASE
      </button>
      <button className="btn btn-primary mx-3" onClick={convertToLowerCase}>
        lower case
      </button>
      <button className="btn btn-primary" onClick={clearText}>
        Clear Text
      </button>
      <div className="table-responsive my-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="table-header">
                Characters
              </th>
              <th scope="col" className="table-header">
                Words
              </th>
              <th scope="col" className="table-header">
                Sentences
              </th>
              <th scope="col" className="table-header">
                Paragraph
              </th>
              <th scope="col" className="table-header">
                Spaces
              </th>
              <th scope="col" className="table-header">
                Punctuations
              </th>
            </tr>
          </thead>
          <tbody className="table-data">
            <tr>
              <td scope="col">{text.length}</td>
              <td scope="col">
                {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
              </td>
              <td scope="col">{countSentences(text)}</td>
              <td scope="col">{countParagraphs(text)}</td>
              <td scope="col">{countSpaces(text)}</td>
              <td scope="col">{countPunctuations(text)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TextForm;
