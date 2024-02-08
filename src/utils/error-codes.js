const ClientErrorCodes=Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
})

const ServerErrorCodes=Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
})

const SucessCodes=Object.freeze({
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
})

module.exports={
    ClientErrorCodes,
    ServerErrorCodes,
    SucessCodes
}