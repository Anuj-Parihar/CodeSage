


import '../Pages/Review.css'
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from 'react-simple-code-editor';
import { useEffect, useState } from 'react';
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';

function Review() {
  const [code, setCode] = useState("// Paste your JavaScript code here...");
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      setReview("Error retrieving review. Please try again.");
    }
    setLoading(false);
  }

  return (
    <main className="review-main">
      <div className="left-section">
        <h2 className="section-heading">Code Editor</h2>
        <div className="code-editor">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 16,
              minHeight: "100%",
              color: "#fff"
            }}
          />
        </div>
        <div onClick={reviewCode} className="review-button">
          {loading ? "Testing..." : "Test"}
        </div>
      </div>
      <div className="right-section">
        <h2 className="section-heading">Output Review</h2>
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  );
}

export default Review;
