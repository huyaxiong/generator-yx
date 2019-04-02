import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './i18n/zh.json'
import en from './i18n/en.json'

Vue.use(VueI18n)

const messages = {
  en: en,
  zh: zh
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
