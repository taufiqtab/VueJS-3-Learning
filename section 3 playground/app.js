Vue.createApp({
  data(){
    return{
      prespective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    }
  },
  computed: {
    box() {
      return {
        transform: `
          perspective(${this.prespective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `
      }
    }
  },
  methods: {
    reset(){
      this.prespective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
    },
    copy() {
      const el = document.createElement('textarea')

      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      el.value = `transform: ${this.box.transform}`

      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}).mount('#app')