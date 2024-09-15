import jsonwebtoken from "jsonwebtoken"

const jwt = {
    decode(token) {
        return jsonwebtoken.decode(token, {complete: true, json: true})
    },
    encode(id) {
        return jsonwebtoken.sign({id}, "Hello World")
    }
}

export default jwt

