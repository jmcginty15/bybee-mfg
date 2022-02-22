import Message from '../Message';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendEmail } from '../../helpers';
import './QuoteForm.css';

const parseDate = (date) => {
    let month = `${date.getMonth() + 1}`;
    if (month.length === 1) month = `0${month}`;
    let day = `${date.getDate()}`;
    if (day.length === 1) day = `0${day}`;
    return `${date.getFullYear()}-${month}-${day}`;
}

const QuoteForm = () => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useState(true);
    const history = useHistory();
    const date = parseDate(new Date());
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        quoteNeededBy: date,
        productNeededBy: date,
        company: '',
        text: ''
    });

    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSending(true);

        sendEmail(formData, 'quote_template').then((data) => {
            const result = data.results;
            setSuccess(result.total_accepted_recipients === 1 && result.total_rejected_recipients === 0);
            setSending(false);
            setSent(true);
        });
    }

    const reset = () => {
        setSuccess(true);
        setSent(false);
        history.push('/');
    }

    return (
        <div>
            {sent ? <Message success={success} type="quote" reset={reset} /> : <div className="QuoteForm">
                <Form className="QuoteForm-form" onSubmit={handleSubmit}>
                    <div className="QuoteForm-upper">
                        <FormGroup className="QuoteForm-left">
                            <Label>First name <span className="QuoteForm-req">*</span></Label>
                            <Input required className="QuoteForm-input" type="text" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className="QuoteForm-right">
                            <Label>Last name <span className="QuoteForm-req">*</span></Label>
                            <Input required className="QuoteForm-input" type="text" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className="QuoteForm-left">
                            <Label>Email <span className="QuoteForm-req">*</span></Label>
                            <Input required className="QuoteForm-input" type="email" name="email" placeholder="johndoe@example.com" value={formData.email} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className="QuoteForm-right">
                            <Label>Phone <span className="QuoteForm-req">*</span></Label>
                            <Input required className="QuoteForm-input" type="tel" name="phone" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className="QuoteForm-left">
                            <Label>Quote needed by <span className="QuoteForm-req">*</span></Label>
                            <Input required className="QuoteForm-input" type="date" name="quoteNeededBy" placeholder="johndoe@example.com" value={formData.quoteNeededBy} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className="QuoteForm-right">
                            <Label>Product needed by <span className="QuoteForm-req">*</span></Label>
                            <Input required className="QuoteForm-input" type="date" name="productNeededBy" placeholder="(123) 456-7890" value={formData.productNeededBy} onChange={handleChange} />
                        </FormGroup>
                        <small className="QuoteForm-note">Please note that taxidermy jobs require a minimum 4-6 month turnaround time.</small>
                    </div>
                    <FormGroup>
                        <Label>Company name</Label>
                        <Input className="QuoteForm-input" type="text" name="company" placeholder="Example Inc." value={formData.company} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Questions / Comments / Details <span className="QuoteForm-req">*</span></Label>
                        <Input required className="QuoteForm-input" type="textarea" name="text" rows="5" placeholder="Let us know what you need" value={formData.text} onChange={handleChange} />
                    </FormGroup>
                    {sending ? 'Sending...' : <Button color="success" type="submit">Submit</Button>}
                </Form>
            </div>}
        </div>
    );
}

export default QuoteForm;