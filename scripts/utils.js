const Utils = {

    parseRequestURL: () => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/");
        let request = {
            resource    :null,
            id          :null,
            verb        :null
        }

        request.resource    = r[1];
        request.id          = r[2];
        request.verb        = r[3];

        return request;

    }

    , sleep: (ms) => {
        return new Promise(resolver => setTimeout(resolver, ms));
    }

    , getParsedUrl: ( ) => {
    
        // Get the parsed URl from the addressbar
        const  request = Utils.parseRequestURL();
    
        // Parse the URL and if it has an id part, change it with the string ":id"
        const persed = (request.resource ? '/' + request.resource : '/') + 
            (request.id ? '/:id' : '') + 
            (request.verb ? '/' + request.verb : '');
    
        return persed;
        
    }
}

export default Utils;