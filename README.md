# API deployed on Heroku
[Iveys-API](https://mysterious-shelf-67917.herokuapp.com/)

# Endpoints

#### [POST] api/v1/oferta
- uuid: String,
- addressDestination: String,
- addressOrigin: String,
- cityCode: String,
- latitudeOrigin: String,
- longitudeOrigin: String,
- pointReferenceDestination: String,
- pointReferenceOrigin: String,
- serviceType: String,
- observations: String,
- guardian: String

#### [POST] api/v1/usuario
- user: String, -> Número de celular
- name: String,
- availability: Boolean
