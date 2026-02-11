import { ACTION_TYPE } from "../action"

const initialAppState = {
    wasLogout: false,
    modal: {
        isOpen: true,
        text: "Удалить комментарий?",
        onConfirm: () => {},
        onCancel: () => {},
    }
}

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        // case 

        case ACTION_TYPE.LOGOUT: 
            return {
                ...state,
                wasLogout: !state.wasLogout
            }

        default: {
            return state
        }
    }
}