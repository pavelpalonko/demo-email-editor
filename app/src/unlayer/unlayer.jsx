import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

import { UNLAYER_TEMPLATE_JSON } from "./unlayer.const.js";

function Unlayer() {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      console.log("export HTML:", html);
    });
  };

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design } = data;
      console.log("export design:", design);
    });
  };

  const exportPlainText = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer.exportPlainText((data) => {
      const { text } = data;
      console.log("export TEXT:", text);
    });
  };

  const onReady = () => {
    emailEditorRef.current?.editor?.loadDesign(UNLAYER_TEMPLATE_JSON);
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };

  return (
    <>
      <div style={{ width: "1400px", margin: "0 auto", paddingTop: "40px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ padding: "14px 14px 14px 0" }}>
            <button onClick={exportHtml}>Export HTML</button>
          </div>

          <div style={{ padding: "14px 14px 14px 0" }}>
            <button onClick={saveDesign}>Export Design</button>
          </div>

          <div style={{ padding: "14px 14px 14px 0" }}>
            <button onClick={exportPlainText}>Export Text</button>
          </div>

          <p>This data can be seen in the browser console.</p>
        </div>

        <EmailEditor
          ref={emailEditorRef}
          onReady={onReady}
          minHeight={800}
          options={{
            mergeTags: {
              first_name: {
                name: "First Name",
                value: "{{first_name}}",
                sample: "John",
              },
              last_name: {
                name: "Last Name",
                value: "{{last_name}}",
                sample: "Doe",
              },
              tag_url: {
                name: "Tag url",
                value: "{{tag_url}}",
                sample: "/test",
              },
            },
          }}
        />
      </div>

      <div style={{ marginBottom: "200px" }}>
        <h3>Summary:</h3>

        <ul>
          <li>Template editing (drag & drop) ✅</li>

          <li>Merge tags support ✅</li>

          <li>Responsive design ✅</li>

          <li>Txt format ✅</li>
        </ul>

        <ul>
          <li>
            Pricing:{" "}
            <a href="https://unlayer.com/pricing">
              https://unlayer.com/pricing
            </a>{" "}
          </li>

          <li>
            NPM:{" "}
            <a href="https://www.npmjs.com/package/react-email-editor">
              https://www.npmjs.com/package/react-email-editor
            </a>{" "}
            (Published 10 months ago)
          </li>

          <li>
            GIT:{" "}
            <a href="https://github.com/unlayer/react-email-editor">
              https://github.com/unlayer/react-email-editor
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Unlayer;
