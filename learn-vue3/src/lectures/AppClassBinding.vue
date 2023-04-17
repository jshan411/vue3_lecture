<template>
  <div>
    <!-- <div class="text" v-bind:class="{ active: isActive, 'text-red': isRed, 'text-blue': !isRed }">
      텍스트입니다.
    </div> -->
    <div class="text" v-bind:class="classObject">텍스트 입니다.</div>
    <button v-on:click="toggle">toggle</button>
    <button v-on:click="toggleColor">change to {{ isRed ? 'blue' : 'red' }}</button>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  setup() {
    const isActive = ref(true)
    const isRed = ref(true)

    // const classObject = reactive({
    //   active: isActive,
    //   'text-red': isRed,
    //   'text-blue': !isRed
    // })
    // In this case, you're using the reactive function to create a reactive object with properties active and text-danger. However, you are using the initial values of isActive and hasError (with the .value property), which means that the classObject won't be reactive in response to changes in isActive and hasError. To fix this, you can use a computed property instead.

    const classObject = computed(() => {
      return {
        active: isActive.value,
        'text-red': isRed.value,
        'text-blue': !isRed.value
      }
    })
    // Here, you're using the computed function to create a computed property that returns a new object with the properties active and text-danger. The classObject will be reactive, updating the DOM whenever the values of isActive or hasError change. This is because you're using a function that depends on the .value property of isActive and hasError, which are reactive references.

    // In conclusion, given the provided code with ref, it's more suitable to use the computed approach to create a dynamic class object. This will ensure that the object remains reactive in response to changes in the isActive and hasError references. The reactive approach, in this particular case, does not create a properly reactive class object since it uses the initial values of the reactive references without establishing a dependency on them.

    // 추가로, reactive 안에서 사용할때는 ref 자체로 사용해야 하는데, computed 안에서 사용할때는 ref.value로 사용해야 한다.
    const toggle = () => {
      isActive.value = !isActive.value
    }
    const toggleColor = () => {
      isRed.value = !isRed.value
    }
    return {
      isActive,
      isRed,
      toggle,
      toggleColor,
      classObject
    }
  }
}
</script>

<style scoped>
.active {
  font-weight: 900;
}

.text-red {
  color: red;
}

.text-blue {
  color: blue;
}
</style>
