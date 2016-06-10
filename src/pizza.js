import { toppings as authorizedToppings } from './toppings.js'

export class Pizza {
  constructor (ref, nom, prix) {
    // this.id = id
    this.ref = ref
    this.nom = nom
    this.prix = prix
    this.toppings = []
    this.status = 0
  }

  setName (nom) {
    this.nom = nom
  }

  setToppings (toppings) {
    this.toppings = toppings
  }

  addTopping (topping) {
    // only authorized toppings
    if (Object.keys(authorizedToppings).indexOf(topping) === -1) return this

    // 2 identical toppings max
    if (this.toppings.filter(t => t === topping).length > 1) return this

    this.toppings.push(topping)

    return this
  }

  removeTopping (topping) {
    const pos = this.toppings.indexOf(topping)

    if (pos !== -1) {
      this.toppings.splice(pos, 1)
    }

    return this
  }

  isTopping (topping) {
    for (var i = 0; i < this.toppings.length; i++) {
      if (this.toppings[i] === topping) {
        return true
      }
    }

    return false
  }

  translate (topping, lang = 'en') {
    return authorizedToppings[topping][lang] || topping
  }

  toppings2string (lang = 'en') {
    return this.toppings

      // uniqs
      .reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) acc.push(topping)
        return acc
      }, [])

      // topping (translated (nb))
      .map(topping => {
        const size = this.toppings.filter(item => item === topping).length
        if (size > 1) return `${this.translate(topping, lang)} x${size}`
        return `${this.translate(topping, lang)}`
      })
      .join(', ')
  }

  cook (time = 1000) {
    return new Promise((resolve, reject) => {
      if (this.status === 1) return reject('Pizza en cours de cuisson')
      if (this.status === 2) return reject('Pizza déjà cuite')

      this.status = 1
      setTimeout(() => {
        this.status = 2
        resolve(this)
      }, time)
    })
  }
}
