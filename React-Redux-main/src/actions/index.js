export function addCount() {
    return {
        type: 'INC'
    }
}

export function reduceCount() {
    return {
        type: 'DEC'
    }
}

export function addUserFirstName(name) {
    return {
        type: 'ADD_USER_NAME',
        firstName : name
    }
}
