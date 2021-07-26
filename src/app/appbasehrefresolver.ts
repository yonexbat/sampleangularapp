

export function getAppBaseHRef() {
    
    // there is no window in server side rendering
    if(!window) {
        return '/';
    }
    
    // check if the url matches a adhoc testing environment
    // If yes, extract the baseurl.
    const pathname = window.location.pathname;
    const pathnameregex = /^\/endpoint\/(?<dest>\w+)(\/|$).*/;
    var match = pathnameregex.exec(pathname);
    if(match && match.groups && match.groups['dest'] ) {        
        const app =  match.groups['dest'];
        return `/endpoint/${app}/`;
    } 
    
    // else read href form the base tag
    const base = document.querySelector('base'); 
    if(base && base.href) {
        return base.href;
    }

    return pathname;
}