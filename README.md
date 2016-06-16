# SEC 2

-npm install
-nodemon
Voor het encrypten van de gegevens heb is de library Crypto gebruik. Deze hheeft de mogelijkheid om dingen te encrypten en decrypten via het aes-256-cbc algorimte.

Nadat de gegevens zijn geëncrypt worden omgezet naar base64.

## Encryptie
Het proces van encrypten wordt in de volgende stappen afgehandeld.

- De username wordt geëncrypt met default password
- Het password wordt geëncrypt met de geëncrypte username.
- De tekst wordt geëncrypt met de geëncrypte password.

Deze 3 worden vervolgens opgeslagen in een mongodb.

## Decryptie
Het proces van decrypten wordt in de volgende stappen afgehandeld.

- De username wordt geëncrypt met de default password.
- Het password wordt geëncrupt met de geëncrupte username.
- Der wordt in mongodb gezocht naar een record met de encrypted username en password.
- als deze gegevonden wordt de tekst gedecrypt met het encrypted password.
 De gegevens worden teruggezonden.
