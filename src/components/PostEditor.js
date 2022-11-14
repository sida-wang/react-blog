import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import './Editor.css';

const PostEditor = ({ defaultFormData, onSubmitHandler}) => {
    const[markdown, setMarkdown] = useState(defaultFormData.content);

    const onTextChange = (e) => {
        setMarkdown(e.target.value);
    } 

    return (
        <Form className="p-3" onSubmit={onSubmitHandler}>
            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formTitle">
                        <label htmlFor="postTitle"><h4>Title</h4></label>
                        <input className="form-control form-control-lg" type="text" id="postTitle" name="title" defaultValue={defaultFormData.title} />
                </Form.Group>
                </Col>
                <Col xs={4}>
                <Form.Group className="mb-3" controlId="formSlug">
                        <label htmlFor="slug"><h4>Slug</h4></label>
                        <input className="form-control form-control-lg" type="text" id="slug" name="slug" defaultValue={defaultFormData.slug} />
                </Form.Group>
                </Col>                
            </Row>
            <Form.Group className="mb-3" controlId="formTextBody">
                <label htmlFor="rawTextArea"><h4>Raw Text</h4></label>
                <textarea className="form-control" id="rawTextArea" rows='10' name="markdown" onChange={onTextChange} value={markdown}>{markdown}</textarea>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPostPreview">
                <label><h4>Preview</h4></label>
                <article className="markdown-preview border rounded p-2">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                </article>
            </Form.Group>
            <Button type="submit" className="btn btn-primary" >Submit</Button>
        </Form>
  )
}

export default PostEditor