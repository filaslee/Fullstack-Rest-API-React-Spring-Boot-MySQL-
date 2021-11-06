import { Button, Form, FormGroup} from 'react-bootstrap';
import { useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useEffect} from "react";
import { useHistory} from "react-router-dom";

const Update = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const { id } = useParams();
  const { data: blog, error} = useFetch('http://localhost:9090/blog/' + id);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(blog.author);
    },500);
    return () => clearTimeout(timer);
  }, [blog])
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch('http://localhost:9090//blogupdate/' + id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      history.push('/');
    })
  }
  
  
  return (
  <div className="update">
   { error && <div>{ error }</div> }
      { title && (
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
           <Form.Select  aria-label="Floating label select example"  value={author} onChange={(e) => setAuthor(e.target.value)}>
             <option className='option'>Select Author</option>
             <option className='option' value="Filmon">Filmon</option>
             <option className='option' value="Samuel">Samuel</option>
             <option className='option' value="Henry">Henry</option>
           </Form.Select>
         </FormGroup>
         <Button type="submit" className="mb-3">Submit</Button>
      </Form>
      )}
  </div>

    );
  }
export default Update;
