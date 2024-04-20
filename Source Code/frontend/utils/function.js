
const server_url = 'http://192.168.1.37:5000';//ip address of the server


async function createStudent(student) {
    const res = await fetch(`${server_url}/student_registration`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })

    return res;
}

async function healthCheck() {
    const res = await fetch(server_url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(res.data)
}


async function login(password, username) {
    const res = await fetch(`${server_url}/student_login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: password,
            username: username
        })
    });

}





export { createStudent, login, healthCheck };