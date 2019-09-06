import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('VuetifyLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VuetifyLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
