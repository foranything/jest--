import Vue from "vue";
import page1 from "@/pages/page1.vue";

describe('page1', () => {
    let cmp, vm;

    beforeEach(() => {
      cmp = Vue.extend(page1); // Create a copy of the original component
      vm = new cmp({
        data: {
          // Replace data value with this fake data
          messages: ["Cat", "Dog"]
        }
      }).$mount(); // Instances and mounts the component
    });

    it('equals messages to ["Cat", "Dog"]', () => {
        expect(vm.messages).toEqual(["Cat", "Dog"]);
    });

    it("has the expected html structure", () => {
        expect(vm.$el).toMatchSnapshot();
    });
    // snapshot을 파일로 보관
    // snapshot이 없을 경우: 새로운 스냅샷 생성, error 없음
    // snapshot이 이미 있고, 스냅샷이 같은 경우: test 통과, error 없음
    // snapshot이 이미 있고, 스냅샷이 다른 경우: text 실패, error, yarn test -u 명령어로 스냅샷 업데이트 가능
    // 문제점: page1에 대한 독립적인 테스트이기 때문에 자식 컴포넌트에서 문제가 생길 시 원하지 않는 결과가 나올 수 있음
})
