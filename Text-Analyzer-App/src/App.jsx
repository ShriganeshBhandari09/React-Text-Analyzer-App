import "./App.css";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div className="container my-5">
        <h1 className="h1-heading">Text Analyzer</h1>
        <p className="content">
          Text Analyzer is a simple free online tool for SEO web content
          analysis that helps you find most frequent phrases and words, number
          of characters, words, sentences and paragraphs, and estimated read and
          speak time of your content.
        </p>
        <TextForm />
      </div>
    </>
  );
}

export default App;
