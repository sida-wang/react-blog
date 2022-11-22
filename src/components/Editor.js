import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import './Editor.css';

const Editor = ({ defaultFormData, onSubmitHandler, type}) => {
    const[markdown, setMarkdown] = useState(type === "post" ? defaultFormData.content : defaultFormData.meta_title);

    const onTextChange = (e) => {
        setMarkdown(e.target.value);
    } 

    const labels = type === "post" ? {id: "postTitle", text:"Post Title"} : {id: "tagTitle", text: "Tag"}

    return (
        <Form className="p-3" onSubmit={onSubmitHandler}>
            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formTitle">
                        <label htmlFor={ labels.id }><h4>{ labels.text }</h4></label>
                        <input className="form-control form-control-lg bg-sepia" type="text" id={ labels.id } name="title" defaultValue={defaultFormData.title} />
                </Form.Group>
                </Col>
                <Col xs={4}>
                <Form.Group className="mb-3" controlId="formSlug">
                        <label htmlFor="slug"><h4>Slug</h4></label>
                        <input className="form-control form-control-lg bg-sepia" type="text" id="slug" name="slug" defaultValue={defaultFormData.slug} />
                </Form.Group>
                </Col>                
            </Row>
            <Form.Group className="mb-3" controlId="formTextBody">
                <label htmlFor="rawTextArea"><h4>Raw Text</h4></label>
                <textarea className="form-control bg-sepia" id="rawTextArea" rows='10' name="markdown" onChange={onTextChange} value={markdown}>{markdown}</textarea>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPreview">
                <label htmlFor="preview"><h4>Preview</h4></label>
                <article className="markdown-preview border rounded p-2">
                <ReactMarkdown id="preview" children={markdown} remarkPlugins={[remarkGfm]} />
                </article>
            </Form.Group>
            <Button type="submit" className="btn btn-primary" >Submit</Button>
        </Form>
  )
}

export default Editor