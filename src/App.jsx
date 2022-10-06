import Card from './components/Card';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import { IconBrandGithub } from '@tabler/icons';
import Input from './components/Input';
import { Label } from './components/Label';
import { useState } from 'react';

const App = () => {
    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    function onChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    function submit (event){
        event.preventDefault()
        console.log(form)
    }

    return (
    <PlaceContentCenter>
            <Card>
                <Card.Title>Sign Up Now</Card.Title>
                
                <form onSubmit={submit}>
                <Card.Body>
                    <div className='mb-5 border roundedlg p-4'>
                        <p>Name: {form.name || '-----'}</p>
                        <p>Email: {form.email || '-----'}</p>
                    </div>
                    <div className="mb-6">
                        <Label htmlFor='name'value={'Name'}/>
                        <Input value={form.name} onChange={onChange} id={'name'} name={'name'}/>
                    </div>
                    <div className="mb-6">
                        <Label htmlFor='email'value={'Email'}/>
                        <Input value={form.email} onChange={onChange} id={'email'} name={'email'}/>
                    </div>
                    
                </Card.Body>
                <Card.Footer>
                    <Button>
                        <IconBrandGithub/>
                        Login
                    </Button>
                </Card.Footer>
                </form>
                
                
            </Card>
    </PlaceContentCenter>
    )
};

export default App;
