function receivesAFunction(cd) {
    return cd();
}

function returnsANamedFunction () {
    return(function sth() { return ""; });
}

function returnsAnAnonymousFunction() {
    return(function () { return ""; }) ;
}