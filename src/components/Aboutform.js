import React, {useState} from 'react'

export default function Aboutform(props) {
    const [formText, setFormText] = useState('Enter text here')
    const typeToChange = (event) => {
        setFormText(event.target.value);
    }
    const clickToUppercase = () => {
        setFormText(formText.toUpperCase());
    }
    const clickToLowercase = () => {
        setFormText(formText.toLowerCase());
    }
    return (
    <section className="aboutformsec py-5">
        <div className="container">
            <div className="aboutforminner mb-4">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={formText} onChange={typeToChange} id="formbox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary me-2" onClick={clickToUppercase}>Click to Uppercase</button>
                <button className="btn btn-primary" onClick={clickToLowercase}>Click to Lowercase</button>
            </div>
            <div className="summarysec">
                <h2>{props.summeryheading}</h2>
                <p>{formText.split(" ").length} words and {formText.length} characters</p>
                <p>{0.008 * formText.split(" ").length}</p>
                <h3>Text Preview</h3>
                <p>{formText}</p>
            </div>
        </div>
    </section>
    )
}