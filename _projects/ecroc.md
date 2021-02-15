---
title: Ecroc
type: Application web
preview: /images/preview-ecroc.png
description: Ecroc est un projet réalisé par une équipe de 5 personnes ayant pour but d’automatiser la distribution de nourriture pour son chien. La réalisation de ce projet constitue une de nos notes pour notre baccalauréat STI2D option SIN.
images-desktop: [
    '/images/preview-ecroc.png'
]
images-mobile: [
    '/images/preview-ecroc.png'
]
github: https://github.com/romaric-g/Ecroc
period: avril 2019
tags: ['front','back','hardware']
credits: ["Kylian Artonne", "Tanguy Delouche", "Andy Albaladejo", "Valentin"]
credits-link: [
    "https://www.linkedin.com/in/kylian-artonne-4236b1176/",
    "https://www.linkedin.com/in/tanguy-delouche-2675291a6/?originalSubdomain=fr",
    "",
    ""
]
---

Sa réalisation a nécessité une grande attention au cahier des charges pour que le projet réponde bien aux exigences demandé. Après de nombreuse études (Analyse de l’existant, Réalisation de diagramme, définition du besoin, etc.), nous avons pu commencé à faire une sélection des choix technique qui pourrait être utilisé.
Pour ma part, ma fonction a été de réaliser le site internet permettant d’avoir accès à notre distributeur de croquette à distance. La solution qui a été choisie pour sa réalisation est PHP ainsi que l’utilisation de SQL. Cela à été pour moi l’occasion de réaliser un premier projet avec cette technologie en laquelle j’avais peu d’expérience.

Le site est composé d’un système d’authentification, d’un panel de gestion de ces chiens ainsi que de nombreux paramètre de configuration. Le propriétaire peut en tant réel voir la consommation de nourriture ses différents chien, changé la quantité de nourriture en fonction des jours et des repas et peut etre alerté à tout moment de cas de problème sur l’appareil.
Pour que notre produit puisse fonctionner, je me suis aussi occupé en partie de la communication entre le site et un arduino. Pour cela, différents script PHP on été créés et un protocole de communication à été établie entre les 2 parties. Les données renvoyé par le serveur sont renvoyé en json et traité par l’arduino avec une librairie prévue à cette effet.