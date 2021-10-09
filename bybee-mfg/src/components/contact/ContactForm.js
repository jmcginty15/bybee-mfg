import Message from '../Message';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import { sendEmail } from '../../helpers';
import './ContactForm.css';

const ContactForm = () => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: ''
    });

    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSending(true);

        sendEmail(formData, 'contact_template').then((data) => {
            const result = data.results;
            setSuccess(result.total_accepted_recipients === 1 && result.total_rejected_recipients === 0);
            setSending(false);
            setSent(true);
        });
    }

    const reset = () => {
        setFormData({
            name: '',
            email: '',
            text: ''
        });
        setSuccess(true);
        setSent(false);
    }

    return (
        <div>
            {sent ? <Message success={success} type="contact" reset={reset} /> : <div className="ContactForm">
                <h2>Send us an email</h2>
                <Form className="ContactForm-form" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Name <span className="ContactForm-req">*</span></Label>
                        <Input required type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label>Email <span className="ContactForm-req">*</span></Label>
                        <Input required type="email" name="email" placeholder="johndoe@example.com" value={formData.email} onChange={handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label>Question / Comment <span className="ContactForm-req">*</span></Label>
                        <Input required type="textarea" name="text" rows="5" placeholder="Say something interesting..." value={formData.text} onChange={handleChange} />
                    </FormGroup><br />
                    {sending ? 'Sending...' : <Button color="success">Submit</Button>}
                </Form>
            </div>}
        </div>
    )
}

export default ContactForm;