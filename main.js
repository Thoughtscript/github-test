'use strict'

/**
 * Main method.
 *
 * @author - Adam In Tae Gerard
 */

const G = require('./helpers/github')

try {

    process.on('warning', warning => { console.error(`Warning encountered: ${warning}`) })
    process.on('unhandledRejection', rej => {
        //suppress warnings about owner not having admin role
        //console.error(`Unhandled Rejection override: ${rej}`)
    })
    process.on('uncaughtException', exception => { console.error(`Error encountered: ${exception}`) })
    process.on('exit', msg => { console.log(`Service shutting down: ${msg}`) })

    G.GET_AUTH().then(successOne => {
        G.CLIENT_INIT().then(successTwo => {
            G.ADD_MEMBER().then(successFour => {
                console.log(`Example complete! Please check https://github.com/orgs/:org/people/pending_invitations\n`)
            })
        })
    })

} catch (ex) {
    console.error(`Exception ${ex}!`)
    process.exit()
}