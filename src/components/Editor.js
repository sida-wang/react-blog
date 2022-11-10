import { Button } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import './Editor.css'

const Editor = () => {
    const[markdown, setMarkdown] = useState()

    const onChange = (e) => {
        setMarkdown(e.target.value);
    }  

    return (
        <section>
            <div className="form-group p-3">
                <label htmlFor="rawTextArea"><h4>Raw Text</h4></label>
                <textarea className="form-control" id="rawTextArea" rows='10' onChange={onChange}>{markdown}</textarea>
            </div>
            <div className="form-group p-3">
                <label><h4>Preview</h4></label>
                <article className="markdown-preview border rounded p-2">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                </article>
            </div>
            <Button type="submit" className="btn btn-primary">Submit</Button>
        </section>
  )
}

export default Editor