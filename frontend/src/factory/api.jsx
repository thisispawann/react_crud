
const CONSTANT_URL = "http://localhost:8081"

export const getStudentList = () => {
    const request = fetch(CONSTANT_URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());
    return request;
}

// post request for user data
export const postUserData = (data) => {

    const URL = CONSTANT_URL + '/employee'
    const request = fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
    return request;
}