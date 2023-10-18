let inputeditor;
let outputeditor;
let jsonData;

require.config({
  paths: { vs: "https://unpkg.com/monaco-editor@latest/min/vs" },
});

require(["vs/editor/editor.main"], function () {
  // Retrieve data from HTML attributes
  let code = document.getElementById("inputContainer").getAttribute("data");
  console.log("Monaco Editor is being loaded.");
  monaco.editor.defineTheme("customTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#1C2130",
    },
  });

  // Initialize the input Monaco Editor
  inputeditor = monaco.editor.create(
    document.getElementById("inputContainer"),
    {
      value: code,
      language: "json",
      theme: "customTheme",
      readOnly: false,
      fontSize: 14,
      lineHeight: 20,
      fontFamily: "Droid Sans Mono",
      wordWrap: "bounded",
      wordWrapColumn: 55,
    }
  );
  console.log("Monaco Editor is being loaded.");
});

const showMenu = () => {
  const menu = document.querySelector(".editor__menu-content");
  menu.classList.toggle("on-off-toggle");
};

console.log(inputeditor);
