export default {
    jwt: {
        secret: "Hello World",
        tokens: {
            access: {
                type: "access",
                expiresIn: "2m"
            },
            refresh: {
                type: "refresh",
                expiresIn: "5m"
            },
        }
    }
}