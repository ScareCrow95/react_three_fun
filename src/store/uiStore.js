import { makeAutoObservable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  theme = 'light'
  /**
   * @type {RootStore}
   */
  root = null
  models = {
    flight: { float: true },
    hammer: { float: true },
    cart: { float: false },
  }
  selected = 'cart'
  material = null
  constructor(root) {
    makeAutoObservable(this)
    this.root = root
  }
}
