import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

const template = {
  body: {
    id: "gjO-AEnbm9",
    rows: [
      {
        id: "hfCD1JyC4c",
        cells: [1],
        columns: [
          {
            id: "O4-6o-6YOi",
            contents: [
              {
                id: "K843fLhmUL",
                type: "text",
                values: {
                  containerPadding: "10px",
                  anchor: "",
                  fontSize: "14px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  displayCondition: null,
                  _styleGuide: null,
                  _meta: {
                    htmlID: "u_content_text_1",
                    htmlClassNames: "u_content_text",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  locked: false,
                  text: '<p style="line-height: 140%;">This is a new Text block. Change the text.</p>',
                  _languages: {},
                },
              },
            ],
            values: {
              backgroundColor: "",
              padding: "0px",
              border: {},
              borderRadius: "0px",
              _meta: {
                htmlID: "u_column_1",
                htmlClassNames: "u_column",
              },
              deletable: true,
              locked: false,
            },
          },
        ],
        values: {
          displayCondition: null,
          columns: false,
          _styleGuide: null,
          backgroundColor: "",
          columnsBackgroundColor: "",
          backgroundImage: {
            url: "",
            fullWidth: true,
            repeat: "no-repeat",
            size: "custom",
            position: "center",
            customPosition: ["50%", "50%"],
          },
          padding: "0px",
          anchor: "",
          hideDesktop: false,
          _meta: {
            htmlID: "u_row_1",
            htmlClassNames: "u_row",
          },
          selectable: true,
          draggable: true,
          duplicatable: true,
          deletable: true,
          hideable: true,
          locked: false,
        },
      },
    ],
    headers: [],
    footers: [],
    values: {
      _styleGuide: null,
      popupPosition: "center",
      popupWidth: "600px",
      popupHeight: "auto",
      borderRadius: "10px",
      contentAlign: "center",
      contentVerticalAlign: "center",
      contentWidth: "500px",
      fontFamily: {
        label: "Arial",
        value: "arial,helvetica,sans-serif",
      },
      textColor: "#000000",
      popupBackgroundColor: "#FFFFFF",
      popupBackgroundImage: {
        url: "",
        fullWidth: true,
        repeat: "no-repeat",
        size: "cover",
        position: "center",
      },
      popupOverlay_backgroundColor: "rgba(0, 0, 0, 0.1)",
      popupCloseButton_position: "top-right",
      popupCloseButton_backgroundColor: "#DDDDDD",
      popupCloseButton_iconColor: "#000000",
      popupCloseButton_borderRadius: "0px",
      popupCloseButton_margin: "0px",
      popupCloseButton_action: {
        name: "close_popup",
        attrs: {
          onClick:
            "document.querySelector('.u-popup-container').style.display = 'none';",
        },
      },
      language: {},
      backgroundColor: "#F7F8F9",
      preheaderText: "",
      linkStyle: {
        body: true,
        linkColor: "#0000ee",
        linkHoverColor: "#0000ee",
        linkUnderline: true,
        linkHoverUnderline: true,
      },
      backgroundImage: {
        url: "",
        fullWidth: true,
        repeat: "no-repeat",
        size: "custom",
        position: "center",
      },
      _meta: {
        htmlID: "u_body",
        htmlClassNames: "u_body",
      },
    },
  },
};

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

  const onReady = () => {
    emailEditorRef.current?.editor?.loadDesign(template);
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };

  return (
    <div style={{ height: "80vh", width: "1400px", margin: "0 auto" }}>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "14px" }}>
          <button onClick={exportHtml}>Export HTML</button>
        </div>

        <div style={{ padding: "14px" }}>
          <button onClick={saveDesign}>Save Design</button>
        </div>
      </div>

      <EmailEditor
        ref={emailEditorRef}
        onReady={onReady}
        minHeight={"100%"}
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
          },
        }}
      />
    </div>
  );
}

export default Unlayer;
