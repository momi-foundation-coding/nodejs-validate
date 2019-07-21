
interface validateResultData {
    valid: boolean,
    message?: string,
    errorMessage?: string | any
}

function validateResult(result: validateResultData) {
    if (result.valid === true) {
        return true
    } else {
        return false
    }
}

export default validateResult;
