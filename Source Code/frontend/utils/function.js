
async function createStudent(student) {
    const res = await fetch("http://localhost:5000/student_registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })

    return res;
}


async function login(password, username) {
    const res = await fetch("http://localhost:5000/student_login", {
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





export { createStudent, login };