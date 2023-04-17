import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
// 전역 컴포넌트로 등록하는 경우, (1) 컴포넌트 사용 유무에 관계 없이 항상 빌드에 포함되며, (2) 종속 관계를 파악하기 어렵다.

const app = createApp(App)

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
