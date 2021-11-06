import { Button, Form, FormGroup} from 'react-bootstrap';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };
      fetch('http://localhost:9090/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        history.push('/');
      })
    }

  return (
    <div className="add-new-blog">
      <h2>Add New Blog</h2>
        <Form onSubmit={handleSubmit}> 
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Textarea</Form.Label>
            <Form.Control as="textarea" rows={3} required value={body} onChange={(e) => setBody(e.target.value)}/>
          </Form.Group>
          <FormGroup className="mb-3">
            <Form.Select aria-label="Floating label select example"  value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option>Select Author</option>
              <option value="Filmon">Filmon</option>
              <option value="Samuel">Samuel</option>
              <option value="Henry">Henry</option>
            </Form.Select>
          </FormGroup>
          <Button type="submit" className="mb-3">Submit</Button>
       </Form>
    </div>
  );
}
export default AddNewBlog;
