import { shallow } from '@vue/test-utils'
import Mockup from '@/views/Mockup.vue';

describe.skip('Mockup.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallow(Mockup, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

