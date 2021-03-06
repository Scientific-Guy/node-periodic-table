# Node-Periodic-Table

It will give you the data of a chemical element by name, symbol or number!

> **To Note:** Me and my team created the package. But the JSON Data of chemical elements which is took from an open source code by [https://github.com/Bowserinator](https://github.com/Bowserinator). We just made it available it as in NPM Package

# Quick Example
```js 
const npt = require('node-periodic-table')
```

Ways to get Info of an element
```js 
// By name
npt.getByName('Hydrogen')

// By number of the element in Periodic Table
npt.getByNumber(1)

// By chemical symbol of an element
npt.getBySymbol('H')

// By query
npt.getByQuery('Hydro')

// Get Version
npt.version
```

# Output
Output would be in JSON Form like this
```json 
{
        "name": "Hydrogen", 
        "appearance": "colorless gas", 
        "atomic_mass": 1.008, 
        "boil": 20.271, 
        "category": "diatomic nonmetal", 
        "color": null, 
        "density": 0.08988, 
        "discovered_by": "Henry Cavendish", 
        "melt": 13.99, 
        "molar_heat": 28.836, 
        "named_by": "Antoine Lavoisier", 
        "number": 1, 
        "period": 1, 
        "phase": "Gas", 
        "source": "https://en.wikipedia.org/wiki/Hydrogen", 
        "spectral_img": "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg", 
        "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.", 
        "symbol": "H", 
        "xpos": 1, 
        "ypos": 1, 
        "shells": [
            1
        ], 
        "electron_configuration": "1s1", 
        "electron_configuration_semantic": "1s1", 
        "electron_affinity": 72.769, 
        "electronegativity_pauling": 2.2, 
        "ionization_energies": [
            1312
        ]
    }
```

# Join our Discord Server
[https://discord.gg/FrduEZd](https://discord.gg/FrduEZd)
