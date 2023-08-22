import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import { Button,Container,Form } from 'react-bootstrap';
import {useForm} from "react-hook-form";

function App() {
  const { register, handleSubmit, formState : {errors}, } = useForm();
  const [data, setData] = useState();
  return (
    <Container>
      <h4>React Hook Form</h4>
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Form.Group className='mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control {...register('email', {required: "required", pattern: {value: /\S+@\S+\.\S+/, message: 'Email address is invalid.',},})} type="Email" placeholder='Email'/>
        <Form.Text className="text-danger">
          {errors.email?.message}
        </Form.Text>
        </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control {...register('password', {required: "required", minLength: {value: 8, message: "Password must be at least 8 characters."},})} type="Password" placeholder='Password'/>
      <Form.Text className="text-danger">
        {errors.password?.message}
      </Form.Text>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Member Type</Form.Label>
        <Form.Select{...register('userType')}>
          <option value="1" selected>Normal</option>
          <option value="2">VIP</option>
          <option value="3">Admin</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Text>{data}</Form.Text>
          <Form.Check {...register('remember')} type="checkbox" label="Remember me"/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
