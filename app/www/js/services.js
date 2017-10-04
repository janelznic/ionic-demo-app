angular.module('starter.services', [])

.factory('Skills', function() {
  // Might use a resource here that returns a JSON array
  var skills = [{
    id: 0,
    title: 'HTML(5)',
    desc: 'From 1998 in Notepad and Windows 95 :-)',
    icon: 'ion-social-html5'
  }, {
    id: 1,
    title: 'CSS(3)',
    desc: 'Including responsive / adaptive webdesign, CSS preprocessors LESS/Sass, BEM/OOCSS',
    icon: 'ion-social-css3'
  }, {
    id: 2,
    title: 'JavaScript',
    desc: 'Including OO, ECMAScript 6+, TypeScript, Babel, Canvas/WebGL, SPA frameworks and Node.js',
    icon: 'ion-social-javascript'
  }, {
    id: 3,
    title: 'Databases',
    desc: 'MongoDB, Neo4j, SQL + ORM',
    icon: 'ion-social-buffer'
  }, {
    id: 4,
    title: 'Agile',
    desc: 'TDD/BDD, CD/CI, unit testing, SCRUM/kanban',
    icon: 'ion-android-star'
  }, {
    id: 5,
    title: 'DevOps',
    desc: 'Shell/bash scripting, Grunt/Gulp/Webpack, NPM/Yarn, Atlassian tools, Linux admin, Apache2/Nginx/JBoss/Tomcat, TCP/IP, HTTP(2), SSL&hellip;',
    icon: 'ion-social-tux'
  }, {
    id: 6,
    title: 'SVN/Git &amp; other tools',
    desc: 'Version control systems, pre/post commit hooks&hellip;',
    icon: 'ion-social-octocat'
  }, {
    id: 7,
    title: 'Accessibility',
    desc: 'WAI ARIA, NVDA/Jaws reader',
    icon: 'ion-android-search'
  }, {
    id: 8,
    title: 'Graphics, UX',
    desc: 'Adobe Photoshop, SVG, UX, testing, typography',
    icon: 'ion-android-color-palette'
  }, {
    id: 9,
    title: 'SEO/marketing',
    desc: 'Google Analytics, Webmasters Tools, SEO, analysis, PPC, CRM',
    icon: 'ion-ios-pie'
  }, {
    id: 10,
    title: 'Personal skills',
    desc: 'Teamwork player, responsibility, still open-minded for new ideas :-)',
    icon: 'ion-happy-outline'
  }];

  return {
    all: function() {
      return skills;
    },
    remove: function(skill) {
      skills.splice(skills.indexOf(skill), 1);
    },
    get: function(skillId) {
      for (var i=0, len=skills.length; i<len; i++) {
        if (skills[i].id === parseInt(skillId)) {
          return skills[i];
        }
      }
      return null;
    }
  };
});
