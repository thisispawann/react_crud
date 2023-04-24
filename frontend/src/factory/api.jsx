const URL = "http://localhost:8081"

export const getStudentList = () => {
    const request = fetch(URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());
    return request;
}