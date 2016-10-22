
function requireAuth(nextState, replace) {
    const data = JSON.parse(localStorage.getItem(localStorage.key(1)));
    if (!data.uid) {
        replace({
            pathname: '/login',
            state: {
                nextPathname: nextState.location.pathname,
            },
        });
    }
}

module.exports = requireAuth;
