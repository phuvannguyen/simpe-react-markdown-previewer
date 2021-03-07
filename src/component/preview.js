function Preview({value}) {
    return (
        <div className="preview">
        <label for="preview">preview</label>
        <textarea id="preview" name="preview" rows="4" cols="50"  value={value}></textarea>
      </div>
    )
}
export default Preview