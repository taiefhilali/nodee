    var http = require ('http');
    var url =require ('url');
    var querystring = require('querystring');




    var server = http.createServer( function (req, res) {
        var params= querystring.parse(url.parse(req.url).query);
        var page= url.parse(req.url).pathname;
        //console.log(page);
        res.writeHead (200,{"content-Type":"text/html"}) ;

if('id'in params && 'login' in params) {
    res.write('Votre id est'+params['id']+ 'et votre login'+params['login']);


}
else{
    res.write('Veuillez saisir votre id et login');
}


 if (page == '/') {
        res.write ('Vous êtes dans la page d\'accueil');
     }
     else if (page == '/Contact') {
        res.write ('Vous êtes dans la page Contact !');
     }
     else if (page == '/Affichage/1/user') {
        res.write ('Affichez 1\'utilisateur qui a 1\*id 1 !');
     }
     else{
        res.write ('404 not found!');
     }
    
    //  res.write ('<p>Voiciiiiiiii un paragraphe <strong>HTML</strong> !</p>');
    //  res.write('<!DOCTYPE html>'+
    //  '<html>'+
    //  '<head>'+
    //  '<title>Ma page Node.js !</title>'+
    //  '</head>'+
    //  '<body>'+
    //  '<p>Voici un pagraphe <strong>HTML</strong> !</p>'+
    //  '</body>'+
    //  '</html>');
   // res.write("bien on avance")
     res.end();
});
  
   server.listen (8080);