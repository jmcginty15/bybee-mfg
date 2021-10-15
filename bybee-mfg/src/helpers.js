import axios from 'axios';

// const API_URL = 'http://localhost:8000/email_request';
const API_URL = `${window.location.origin}/email_request`;

const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
}

export const sendEmail = async (data, template) => {
    if (template === 'quote_template') {
        data.quoteNeededBy = formatDate(data.quoteNeededBy);
        data.productNeededBy = formatDate(data.productNeededBy);
    }
    const res = await axios.post(API_URL, { ...data, template: template });
    return res.data;
}
