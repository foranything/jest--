import { mount } from '@vue/test-utils';
import page1 from '@/pages/page1';
import MessageList from '@/components/MessageList';

describe('Wrapper', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(page1);
  });

  it('wrapper id', () => {
    expect(wrapper.attributes().id).toBe('page1-id');
    expect(wrapper.attributes('id')).toBe('page1-id');
  });

  it('classes', () => {
    expect(wrapper.classes()).toContain('bar');
    expect(wrapper.classes('bar')).toBe(true);
  });

  it('contain', () => {
    expect(wrapper.contains(MessageList)).toBe(true);
    expect(wrapper.contains('ul')).toBe(true);
    expect(wrapper.contains('li')).toBe(true);
  });
});
