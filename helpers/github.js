'use strict'

/**
 * GitHub helpers.
 *
 * @author - Adam In Tae Gerard
 */

const {Octokit} = require("@octokit/rest")
const {createTokenAuth} = require("@octokit/auth-token");

const C = require('../config').CONFIG

let GH = null
let TOKEN = null

module.exports = {

    /**
     * https://developer.github.com/v3/auth/#via-oauth-and-personal-access-tokens
     * https://github.com/octokit/auth-token.js)
     */

    GET_AUTH: () => new Promise((resolve, reject) => {
        let auth = createTokenAuth(C.ACCESS_TOKEN)
        auth().then(authentication => {
            console.log(`Authentication succeeded: ${JSON.stringify(authentication)}\n`)
            console.log(`Token acquired: ${JSON.stringify(authentication.token)}\n`)
            TOKEN = authentication.token
            return resolve(TOKEN)
        })
    }),

    CLIENT_INIT: () => new Promise((resolve, reject) => {
        GH = new Octokit({
            auth: TOKEN
        })

        console.log(`Client initialized: ${JSON.stringify(GH)}!\n`)
        return resolve(GH)
    }),

    /**
     * https://developer.github.com/v3/orgs/members/#add-a-member
     * https://octokit.github.io/rest.js/v17#orgs-create-invitation
     */

    ADD_MEMBER: () => new Promise((resolve, reject) => {

        try {

            const {response} = GH.orgs.createInvitation({
                org: C.ORGANIZATION,
                username: C.USER_TO_ADD,
                role: 'member'
            });

            console.log(`Member invited!\n`)

        } catch (ex) {
            console.error(`Exception encountered: ${ex}!`)
        }

        return resolve(GH.orgs)
    })
}