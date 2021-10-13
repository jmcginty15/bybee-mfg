const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use(cors({ origin: '*' }));

const CLIENT_ROUTES = ['/', '/services', '/services/cnc-milling', '/services/cnc-turning', '/services/fabrication', '/contact', '/quote'];
app.use((req, res, next) => {
    if (CLIENT_ROUTES.includes(req.path)) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, './bybee-mfg/build', 'index.html'));
    } else {
        next();
    }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, './bybee-mfg/build')));

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;
const RECIPIENT_NAME = process.env.RECIPIENT_NAME;
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

app.post('/email_request', async (req, res, next) => {
    try {
        const { template } = req.body;
        const substitutionData = {};

        if (template === 'quote_template') {
            const { firstName, lastName, company, email, phone, quoteNeededBy, productNeededBy, text } = req.body;
            substitutionData['first_name'] = firstName;
            substitutionData['last_name'] = lastName;
            substitutionData['company_name'] = company;
            substitutionData['reply_email'] = email;
            substitutionData['phone'] = phone;
            substitutionData['quote_needed_by'] = quoteNeededBy;
            substitutionData['product_needed_by'] = productNeededBy;
            substitutionData['details'] = text;
        } else if (template === 'contact_template') {
            const { name, email, text } = req.body;
            substitutionData['name'] = name;
            substitutionData['reply_email'] = email;
            substitutionData['question_or_comment'] = text;
        }

        const reqBody = {
            recipients: [
                {
                    address: {
                        email: RECIPIENT_EMAIL,
                        name: RECIPIENT_NAME
                    }
                }
            ],
            content: {
                template_id: template,
                use_draft_template: true
            },
            substitution_data: substitutionData
        };

        const config = {
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            }
        };

        const apiRes = await axios.post(API_URL, reqBody, config);
        return res.json(apiRes.data);
    } catch (err) {
        return next(err);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});