

export function getAppBaseHRef() {
    
    // for server side rendering.
    if(!window) {
        return '/';
    }
    
    const pathname = window.location.pathname;
    const pathnameregex = /^\/endpoint\/(?<dest>\w+)(\/|$).*/;
    var match = pathnameregex.exec(pathname);
    if(match && match.groups && match.groups['dest'] ) {        
        const app =  match.groups['dest'];
        return `/endpoint/${app}/`;
    }

    return pathname;
}