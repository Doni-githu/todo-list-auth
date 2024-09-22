import authHelper from "../helpers/authHelper.js";

export default async function(userId) {
    const accessToken = authHelper.generateAccessToken(userId)
    const {id, token} = authHelper.generateRefreshToken()

    return authHelper.replaceDBRefreshToken(id, userId)
        .then(() => ({
            accessToken,
            refreshToken: token
        }))
}

