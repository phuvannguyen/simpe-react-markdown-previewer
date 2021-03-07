function Editor({handleOnChange}) {
    return (
        <div className="editor">
        <label for="editor">Editor</label>
        <textarea id="editor" name="editor" rows="4" cols="50"  onChange={handleOnChange}></textarea>
      </div>
    )
}
export default Editor