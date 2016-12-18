function requireAuth(nextState, replace) {
    const key = Object.keys(localStorage).find(e => e.match(/firebase:authUser/));
    const data = JSON.parse(localStorage.getItem(key));
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
