import "./editor.css"

function Editor({handleOnChange, onKeyDown, value}) {
    return (
        <div className="editor">
        <h6 for="editor">Editor</h6>
        <textarea id="editor" name="editor" rows="4" cols="50" value={value}   onChange={handleOnChange}></textarea>
      </div>
    )
}
export default Editor