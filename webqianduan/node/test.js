const obj = {
  name: " jsCoder",
  skill: ["es6", "react", "angular"],
  say: function () {
    for (let i = 0, len = this.skill.length; i < len; i++) {
      setTimeout(() => {
        console.log('No.' + i + this.name);
        console.log(this.skill[i]);
        console.log('--------------------------');
      }, 0);
      console.log(i);
    }
  }
};
obj.say();