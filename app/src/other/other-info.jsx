// components/EmailBuilder.jsx
import { useCallback, useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import presetNewsletter from "grapesjs-preset-newsletter";
import "grapesjs/dist/css/grapes.min.css";
import { GRAPES_HTML_TEMPLATE } from "./grapes.const.js";

const EmailBuilder = () => {
  const editorT = useRef(null);
  const editorRef = useRef(null);

  const getHtml = useCallback(() => {
    const editor = editorT.current;
    const html = editor?.runCommand("gjs-get-inlined-html");

    console.log(html, "html");
  }, []);

  useEffect(() => {
    editorT.current = grapesjs.init({
      container: editorRef.current,
      height: "800px",
      width: "auto",
      fromElement: false,
      storageManager: false,
      plugins: [presetNewsletter],
    });

    // example: load some content
    editorT.current.setComponents(GRAPES_HTML_TEMPLATE);

    return () => {
      editorT.current.destroy();
    };
  }, []);

  return (
    <div>
      <div style={{ padding: "14px 14px 14px 0" }}>
        <button onClick={getHtml}>Export Text</button>
      </div>

      <div ref={editorRef} />

      <div style={{ marginBottom: "200px" }}>
        <h3>Summary:</h3>

        <ul>
          <li>Template editing (drag & drop) ✅</li>

          <li>Merge tags support ❌</li>

          <li>Responsive design ✅</li>

          <li>Txt format ❌</li>
        </ul>

        <ul>
          <li>
            Pricing:{" "}
            <a href="https://grapesjs.com/#pricing">
              https://grapesjs.com/#pricing
            </a>{" "}
          </li>

          <li>
            NPM:{" "}
            <a href="https://www.npmjs.com/package/grapesjs-preset-newsletter">
              https://www.npmjs.com/package/grapesjs-preset-newsletter
            </a>{" "}
            (Published 2 years ago)
          </li>

          <li>
            GIT:{" "}
            <a href="https://github.com/GrapesJS/preset-newsletter">
              https://github.com/GrapesJS/preset-newsletter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmailBuilder;
