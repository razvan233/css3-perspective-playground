let vm = Vue.createApp({
  data() {
    return {
      perspective: 0,
      rotX: 0,
      rotY: 0,
      rotZ: 0,
    };
  },
  methods: {
    getDeg(XYZ) {
      return `${XYZ}deg`;
    },
    resetAll() {
      this.rotX = this.rotY = this.rotZ = this.perspective = 0;
    },
    copyAll() {
      const el = document.createElement("textarea");
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      el.value = `transform: perspective(${
        this.perspective
      }px)  rotateX(${this.getDeg(this.rotX)}) rotateY(${this.getDeg(
        this.rotY
      )}) rotateZ(${this.getDeg(this.rotZ)})`;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      alert("Settings copied to the clipboard!");
      document.body.removeChild(el);
    },
  },
}).mount("#app");
