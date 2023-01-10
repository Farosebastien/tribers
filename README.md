# TRIBERS

## Site fictif de voyage

Ce projet a été réalisé avec ReactJS en intégrant entre autres, les styled-components, les contexts ainsi que les prop-types.

### Les données

Les données météo sont récupérées à partir de de l'API meteomatics.
Les données du "blog" sont récupérées à partir d'une mock API.

Vous devrez créer un fichier `.env` à la racine de votre projet et y entrer les informations suivantes:
1. REACT_APP_METEO_API= Vos informations de connection à l'API meteomatics que vous recevrez après avoir créer un compte.
2. REACT_APP_MOCKAPI= l'url de votre mockAPI 
     * les informations user sur votre mockAPI devront avoir le format suivant: 
        * `[{"firstName": "", "lastName": "", "email": "", "id": "", "password": "", "trips": ["1","0","1","1"]}]`
     * les informations post sur votre mockAPI devront avoir le format suivant: 
        * `[{"userId": "", "content": "", "postDate": "", "id": "", "name": ""}]`

### Utilisation du blog
Pour vous connecter au blog, vous pouvez utiliser les identifiants suivants :
* Email: bastien@tribers.com
* Mot de passe: LaCustomAgency

### Restrictions de fonctionnement
Du fait que ce site soit fictif, les fonctionnalités suivantes ne sont pas disponibles :
* L'inscription d'un nouvel utilisateur,
* La réservation d'un voyage
* L'ajout de commentaires au blog
* Pas de système de likes - dislikes des commentaires existants