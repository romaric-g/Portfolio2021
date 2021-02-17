---
title: Ecroc
type: Application web
preview: /images/preview-min/preview-ecroc.jpg
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

Sa réalisation a nécessité une grande attention au cahier des charges pour que le projet réponde bien aux exigences demandées. Après de nombreuse études (Analyse de l'existant, Réalisation de diagramme, définition du besoin, etc.), nous avons pu commencé à faire une sélection des choix techniques qui pourrait être utilisé.

Pour ma part, ma fonction a été de réaliser le site internet permettant d'avoir accès à notre distributeur de croquette à distance. La solution qui a été choisie pour sa réalisation est PHP ainsi que l'utilisation de SQL. C'était pour moi l'occasion de réaliser un premier projet avec une technologie que je n'avais jamais utilisée.

Le site est composé d'un système d'authentification, d'un panel de gestion de ces chiens ainsi que de nombreux paramètres de configuration. Le propriétaire peut en tant réel voir la consommation de nourriture ses différents chiens, changé la quantité de nourriture en fonction des jours et des repas et peut être alerté à tout moment de cas de problème sur l'appareil.

Pour que notre produit puisse fonctionner, je me suis aussi occupé en partie de la communication entre le site et un arduino. Pour cela, différents scripts PHP on été créés et un protocole de communication a été établie entre les deux parties. Les données renvoyées par le serveur sont au format json et traité par l'arduino avec une librairie prévue à cet effet.