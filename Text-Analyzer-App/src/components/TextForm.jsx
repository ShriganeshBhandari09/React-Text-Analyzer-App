import { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
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
      <div className="table-responsive">
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
