import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text cleared", "warning");
    }
    const handleCopy = () => {
        let textselect = document.getElementById("mybox");
        textselect.select();
        navigator.clipboard.writeText(textselect.value);
        props.showAlert("Text copied", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
        props.showAlert("Removed extra spaces", "success");
    }
    return (
        <section className="textformsec py-5">
            <div className="container">
                <div className="textformsecinner mb-3" style={{color:props.mode==='light'?'#000':'#fff'}}>
                    <div className="mb-3">
                        <h1>{props.heading}</h1>
                        <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='light'?'#fff':'#343a40',color:props.mode==='light'?'#000':'#fff'}} id="mybox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to uppercase</button>
                    <button className="btn btn-primary me-2" onClick={handleLoClick}>Convert to lowercase</button>
                    <button className="btn btn-primary me-2" onClick={handleClearClick}>Clear text</button>
                    <button className="btn btn-primary me-2" onClick={handleCopy}>Copy text</button>
                    <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
                <div className="summery" style={{color:props.mode==='light'?'#000':'#fff'}}>
                    <h2>Your text summery</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
                </div>
            </div>
        </section>
    )
}