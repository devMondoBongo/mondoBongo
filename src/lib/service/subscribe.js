const SibApiV3Sdk = require('sib-api-v3-sdk');

const { SENDINBLUE_API_KEY } = process.env.SENDINBLUE_API_KEY;

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.ContactsApi();
const createContact = new SibApiV3Sdk.CreateContact();

/*
Add contact to subscriber list
*/
export const subscribe = async ({ email, listIds, attributes }) => {
    const listIdsConverted = listIds.map((x) => +x); // listIds must be an array of number
    createContact.updateEnabled = true; // Allow user to update souscriptions choices
    createContact.email = email;
    createContact.listIds = listIdsConverted;
    createContact.attributes = attributes;

    await new Promise((resolve, reject) => {
        // Create contact or update existing contact with new souscriptions choices
        apiInstance.createContact(createContact).then(
            (data) => {
                console.log(`API called successfully.`);
                resolve(data);
            },
            (error) => {
                console.error('Promise is rejected', error);
                reject(error);
            },
        );
    });
};
