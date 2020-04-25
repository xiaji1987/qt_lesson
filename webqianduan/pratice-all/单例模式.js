class SingletoLogin {
  constructor(name, password) {
    this.name = name
    this.password = password
  }
  static getInstance(name, password) {
    if(!this.instance) {
      this.instance = new SingletoLogin(name, password)
    }
    return this.instance
  }
}