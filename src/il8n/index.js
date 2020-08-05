import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './lang/index'

Vue.use(VueI18n)
const il8n = new VueI18n({
    locale:'cn',
    messages
})

export default il8n