import Vue from 'vue';
export default function () {

  const skill = {
    template: "#skill",
    props: {
      skillName: String,
      skillPercent: Number
    }
  };

  const skillsRow = {
    template: '#skills-row',
    components: {
      skill
    },
    props: {
      skill: Object
    }
  };

  new Vue ({
    el: '#skills-component',
    template: '#skills-list',
    components: {
      skillsRow
    },
    data () {
      return {
        skills: {}
      }
    },
    created() {
      const data = require('../data/skills.json');
      this.skills = data;
    },
    mounted() {

    }
  }) ;
}
