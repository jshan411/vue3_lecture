<template>
  <div>
    <h2>input value</h2>
    <!-- v-bind로 바인딩하면 화면에서 변경된 내용이 JS까지 변경하지 않음. -->
    <!-- <input type="text" v-bind:value="inputValue" /> -->
    <!-- v-bind로 바인딩하고 화면에서 변경된 내용이 JS까지 변경하게 하려면, JS의 inputValue를 화면에 뿌리고, 화면에서 input 이벤트가 v-on으로 발생하면 이 값을 다시 event.target.value에 넣어줘야 한다. 반응형 ref이므로 .value가 필요하다. -->
    <!-- <input
      type="text"
      v-bind:value="inputValue"
      @input="(event) => (inputValue = event.target.value)"
    /> -->
    <!-- 위 내용(양방향 바인딩)을 v-model로 선언하면 된다. -->
    <!-- <input type="text" v-model="inputValue" /> -->

    <!-- v-model은 내부적으로 HTML요소가 어떤 요소냐에 따라 서로 다른 속성(:value)과 이벤트(@input)을 사용한다.
    (1) input type="text"와 textarea는 value 속성과 input 이벤트를 사용한다.
    (2) checkbox와 radio버튼은 checked 속성과 change 이벤트를 사용한다.
    (3) select 태그는 value 속성과 change 이벤트를 사용한다. -->
    <!-- 기본적으로, v-model은 각 input 이벤트 후 입력과 데이터를 동기화한다. 이 때, .lazy를 사용하면 change 이벤트 이후에 동기화 할 수 있다. -->
    <!-- <input type="text" v-model.lazy="inputValue" /> -->
    <!-- input:text는 기본적으로 string을 입력으로 받는데, .number를 이용하면 이를 numeric으로 바꿀 수 있다. -->
    <!-- 단, 숫자가 아닌 문자를 입력하면 그대로 문자로 저장한다. -->
    <!-- <input type="text" v-model.number="inputValue" /> -->
    <!-- .lazy와 .number를 함께 사용할 수 있다. -->
    <!-- <input type="text" v-model.lazy.number="inputValue" /> -->
    <!-- <input type="text" v-model.trim="inputValue" /> -->
    <!-- <input type="text" v-model.lazy.trim="inputValue" /> -->
    <input type="text" v-model.lazy.trim.number="inputValue" />

    <div>{{ inputValue }}</div>
    <div>{{ typeof inputValue }}</div>

    <h2>textarea value</h2>
    <textarea v-model="textareaValue"></textarea>
    <div>{{ textareaValue }}</div>

    <h2>checkbox value</h2>
    <!-- <input type="checkbox" id="checkbox" :checked="checkboxValue" /> -->
    <!-- <input
      type="checkbox"
      id="checkbox"
      :checked="checkboxValue"
      @change="(event) => (checkboxValue = event.target.checked)"
    /> -->
    <input type="checkbox" id="checkbox" v-model="checkboxValue" />
    <!-- <input
      type="checkbox"
      id="checkbox"
      v-model="checkboxValue"
      true-value="Yes"
      false-value="No"
    /> -->
    <label for="checkbox">{{ checkboxValue }}</label>
    <h3>checkbox values</h3>
    <label>
      <input type="checkbox" value="html" v-model="checkboxValues" />
      HTML
    </label>
    <label>
      <input type="checkbox" value="css" v-model="checkboxValues" />
      CSS
    </label>
    <label>
      <input type="checkbox" value="javascript" v-model="checkboxValues" />
      JavaScript
    </label>
    <div>{{ checkboxValues }}</div>
    <!-- :checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)" -->

    <h2>radio value</h2>
    <label>
      <!-- <input type="radio" name="type" value="O" :checked="radioValue" /> -->
      <!-- <input
        type="radio"
        name="type"
        value="O"
        :checked="radioValue === 'O'"
        @change="(event) => (radioValue = event.target.value)"
      /> -->
      <input type="radio" name="type" value="O" v-model="radioValue" />
      O형
    </label>
    <label>
      <!-- <input type="radio" name="type" value="A" :checked="radioValue" /> -->
      <!-- <input
        type="radio"
        name="type"
        value="A"
        :checked="radioValue === 'A'"
        @change="(event) => (radioValue = event.target.value)"
      /> -->
      <input type="radio" name="type" value="A" v-model="radioValue" />
      A형
    </label>
    <div>{{ radioValue }}형이 선택되었습니다.</div>

    <h2>select value</h2>
    <!-- <select name="" id="" :value="selectValue">
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">JavaScript 수업</option>
    </select> -->
    <!-- <select
      name=""
      id=""
      :value="selectValue"
      @change="(event) => (selectValue = event.target.value)"
    >
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">JavaScript 수업</option>
    </select> -->
    <select v-model="selectValue">
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">JavaScript 수업</option>
    </select>
    <div>{{ selectValue }} 수업이 좋습니다.</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputValue = ref('')
    const textareaValue = ref('')
    const checkboxValue = ref(true)
    // const checkboxValue = ref('Yes')
    const checkboxValues = ref([])
    const radioValue = ref('O')
    const selectValue = ref('html')
    return {
      inputValue,
      textareaValue,
      checkboxValue,
      radioValue,
      selectValue,
      checkboxValues
    }
  }
}
</script>

<style lang="scss" scoped></style>
