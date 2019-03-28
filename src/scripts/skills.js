//console.log('this is skills module');
import Vue from 'vue';

const skill = {
  template: '#skill'
}

const skillRow = {
  template: '#skills-row',
  components: {
    skill
  }
}

new Vue ({
  el: '#skills-component',
  template: '#skills-list',
  components: {
    skillRow
  }
}) ;