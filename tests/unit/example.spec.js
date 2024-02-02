import { shallowMount } from '@vue/test-utils'
import AddTodo from "@/components/AddTodo.vue";

describe('AddTodo.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Add todo'
    const wrapper = shallowMount(AddTodo)
    expect(wrapper.text()).toMatch(msg)
  })
})
