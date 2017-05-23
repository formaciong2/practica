# API

Content-type: application/json

## Errors genèrics:
500


## Obtenció de tots els articles:
 GET	http://DESA3473:8080/practicang/rest/v1/articles/
 
### Retorna
 200 - [] d'articles.
### Errors
 404 - No hi ha articles.

## Obtenció d'un article:
 GET	http://DESA3473:8080/practicang/rest/v1/articles/...

### Retorna
 200 - Article
### Errors
 404 - No es troba l'article.

## Crear un article:
 POST	http://DESA3473:8080/practicang/rest/v1/articles
		Body:
		{"concepte": "...", "quantitat": ..., "preu": ... [, "descompte": ...]}

### Retorna
 200 - Article

## Actualitzar un article:
 PUT	http://DESA3473:8080/practicang/rest/v1/articles
		Body:
		{"id": ..., "concepte": "...", "quantitat": ..., "preu": ... [, "descompte": ...]}

### Retorna
 200 - Article
### Errors
 406 - Falta l'id a la request.

## Esborrar un article:
 DELETE	http://DESA3473:8080/practicang/rest/v1/articles/...

 ### Retorna
 200