import { getUser } from "./auth";

async function post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const { error, result } = await response.json();
    if (error)
        throw new Error(error);
    return result;
}

async function get(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const { error, result } = await response.json();
    if (error)
        throw new Error(error);
    return result;
}

export async function login(email, password) {
    return await post('/api/auth/login', {email, password})
}

// email, password, firstname, lastname, phone, owner, tech_tel, company

export async function register(registerData) {
    return await post('/api/auth/register', registerData)
}

export async function password_recovery(email) {
    return await post('/api/auth/password_recovery', email)
}

export async function getUserData() {
    return await get('/api/user?api_token=Ffjp9o9noA8hNndVe6iFWAjLVmt8FUsH')
}

// одинаковые

export async function getBenchesList() {
    return await get('/api/user_benches?api_token=3vI0En7EYsnY78q9Qt0oQVgKJZun4RbB')
}

export async function getBenchData() {
    return await get('/api/bench?api_token=3vI0En7EYsnY78q9Qt0oQVgKJZun4RbB&bench_id=1')
}

// одинаковые
 
export async function getGalleryImagesList() {
    return await get('/api/user_benches?api_token=3vI0En7EYsnY78q9Qt0oQVgKJZun4RbB')
}

export async function getRegisterInfo() {
    const user = getUser()
    return await get(`/api/user?api_token=${user.api_token}`)
}

export async function updateProfileInfo(profileData) {
    const user = getUser()
    return await get(`/api/user_update?api_token=${user.api_token}&${new URLSearchParams({
        email: profileData.email,
        lastname: profileData.lastname,
        firstname: profileData.firstname,
        phone: profileData.phone,
        tech_tel: profileData.tech_tel,
        'company.name': profileData.company?.name
    })}`)
    // return await get(`/api/user_update?api_token=${user.api_token}&lastname=${profileData.lastname}&firstname=${profileData.firstname}`)
}

