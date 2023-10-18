let jsonData = "";
let editor;

require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editorContainer"), {
    value: jsonData,
    language: "json",
    theme: "myTheme",
    readOnly: false,
    fontSize: 14,
    lineHeight: 20,
    minimap: { enabled: false },
    fontFamily: "Droid Sans Mono",
    wordWrap: "bounded",
    wordWrapColumn: 55,
  });
});
