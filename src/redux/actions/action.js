export const login = () => dispatch => {
    dispatch({
        type: 'STUDENT_LOGIN'
    })
};

export const logout = () => dispatch => {
    dispatch({
        type: 'USER_LOGOUT'
    })
};
