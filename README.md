# bolak-bibliotheque-demo

## IDE, outils, frameworks et autres dépendances
Il faut que vous installiez tout ça sur votre ordinateur avant de pouvoir commencer à programmer!

- node.js: https://nodejs.org/en/ (12.18)
- nodemon: https://www.npmjs.com/package/nodemon
- typescript: https://www.typescriptlang.org/#download-links
- vscode: https://code.visualstudio.com/Download
- git bash: https://git-scm.com/downloads

## Installer les dépendances
Avant de partir le serveur, execute la commande `yarn` (dans le répertoire du projet) (où il y a le fichier ReadMe) avec un terminal pour installer toutes les dépendances

## Partir le serveur
Executez cette commande dans un terminal (dans le répertoire du projet) (où il y a le fichier ReadMe):
`yarn start`

une page s'ouvrira automatiquement à `http://localhost:3000/`

## Rendre disponible tes changements sur Github
Execute ces trois commandes avec un terminal (dans le répertoire du projet) (où il y a le fichier ReadMe):
`git add *`
`git commit -m "message indiquant ce que tu as modifié"`
`git push`

La commande git push te demandera de t'authentifier avant de télécharger les modifications sur Github!

## Avoir les nouvelles modifications du Github
Si quelqu'un d'autres modifie le projet et que tu veux avoir la nouvelle version sur ta machine, execute avec un terminal:
`git pull`

## Run les tests
Exécutez la commande avec un terminal
`npm test`
pour rouler les tests!

## Convention de nommage
Utilisez le ALL_CAPS pour les constantes.

Utilisez le PascalCase pour les noms de types, les noms de vos composants React et les valeurs d'énumérations.

Utilisez le camelCase pour les noms de fonctions (ceci inclut les hooks), de propriétés et de variables.

Pour créer vos propres hooks utilisez toujours le mot clé use devant. Exemple: useCustomHook

Utilisez le kebab-case pour les noms de fichiers des composants React et vos classes css.

Évitez les abbréviations dans les noms de variables ou de fonctions.

Un tableau/list/dictionnaire devrait avoir un nom indiquant qu'il contient plusieurs objets, par exemple "cars".

On évite de mettre le type de l'objet dans le noms, par exemple on préfère "cars" à "listOfCars" lorsqu'on déclare une liste.

Un objet ne devrait pas avoir un nom qui porte à croire qu'il s'agit d'un tableau.

Les clés de traduction doivent suivre le format suivant: "<ComposanteReact>.<cleMessage>'. La cleMessage doit suivre les conventions de nommage pour les variables. Pour les clés de traduction qui sont utilisés à l'extérieur d'une d'une composante, elle doit identique au chemin d'accès utilisé dans le code (e.g. "DATA_ARRAY[0].data").

# Autres standards
Priorisez le plus possible l'utilisation de [composants fonctionnels](https://fr.reactjs.org/docs/hooks-state.html) et les [hooks](https://fr.reactjs.org/docs/hooks-overview.html)

Préférer utiliser la [composition](https://fr.reactjs.org/docs/composition-vs-inheritance.html) au lieu de l'héritage pour réutiliser du code, sinon, factoriser en plus petits composants

N'utilisez jamais var. Utilisez let et const.

N'utilisez jamais !important dans vos fichiers CSS.

N'utilisez jamais any, que ce soit implicitement ou explicitement.

N'utilisez pas le mot-clé function, utilisez les fonctions anonymes: () => {...}.

Déclarez tous les types de retour des fonctions (incluant void).

Évitez les fonctions qui ont plus d'une responsabilité.

N'utilisez pas de nombres magiques.

N'utilisez pas de chaînes de caractères magiques. Créez vos propres constantes avec des noms explicites.

Une fonction devrait avoir 3 paramètres ou moins.

Évitez la duplication de code.