import marked from "marked"
import "./preview.css"

function Preview({value}) {
    return (
      <div className="preview">
        <h6 for="preview">Preview</h6>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(value, {breaks: true})}}></div>

        
      </div>
    )
}
export default Preview