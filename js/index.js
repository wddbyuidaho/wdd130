/* Add Course Specific JavaScript Below */
const baseUrl = 'https://byui-cit.github.io/wdd130/';
const localUrl = '/';
const menu = {
  resources: [
    { url: 'resources/syllabus.html', name: 'Syllabus' },
    { url: 'resources/dryoarimages.html', name: 'DryOar Images' },
    { url: 'resources/subpage_content.html', name: 'SubPage Content' },
    { url: 'resources/design-principles.html', name: 'Design Principles' },
    { url: 'resources/troubleshooting.html', name: 'Troubleshooting' },
    { url: 'resources/optimizing-images.html', name: 'Image Optimization' }
  ],
  activites: [
    { url: 'activities/software-setup.html', name: 'Software Setup', week: 1 },
    { url: 'activities/aboutme.html', name: 'About Me/HTML Vocab', week: 1 },
    { url: 'activities/site-planning.html', name: 'Site Planning', week: 2 },
    { url: 'activities/cssvocab.html', name: 'CSS Vocab', week: 2 },
    {
      url: 'activities/1-getting-started.html',
      name: 'Start the home page',
      week: 3
    },
    { url: 'activities/2-adding-css.html', name: 'Adding CSS', week: 4 },
    { url: 'activities/3-more-css.html', name: 'More CSS', week: 5 },
    { url: 'activities/elevator-pitch.html', name: 'Elevator Pitch', week: 5 },
    {
      url: 'activities/css-positioning.html',
      name: 'CSS Positioning',
      week: 6
    },
    {
      url: 'resources/layout-resources.html',
      name: 'CSS Layout Reading',
      week: 6
    },

    {
      url: 'activities/4-final-touches.html',
      name: 'Finishing Touches',
      week: 7
    },
    {
      url: 'activities/personal-site-plan.html',
      name: 'Personal Site PLan',
      week: 7
    },
    {
      url: 'activities/your-own-wireframe.html',
      name: 'Wireframing',
      week: 8
    },
    {
      url: 'activities/personal-site-content.html',
      name: 'Personal Site Plan 2: Content',
      week: 8
    },
    { url: 'activities/subpage1.html', name: 'Making a Subpage', week: 8 },
    { url: 'activities/final.html', name: 'DryOar Final', week: 9 },
    {
      url: 'activities/person-site-plan-complete.html',
      name: 'Completed Personal Site Plan',
      week: 9
    },
    { url: 'activities/forms.html', name: 'HTML Forms', week: 10 },
    {
      url: 'activities/personal-site-html.html',
      name: 'Personal Site HTML',
      week: 10
    },
    {
      url: 'activities/css-positioning-2.html',
      name: 'Layour Revisited',
      week: 11
    },
    {
      url: 'activities/personal-site-home.html',
      name: 'Personal Site Home',
      week: 11
    },
    {
      url: 'activities/card.html',
      name: 'Creating a Media Card component',
      week: 12
    },
    {
      url: 'activities/personal-site-sub1.html',
      name: 'Personal Site Page Two',
      week: 12
    },
    {
      url: 'activities/final.html',
      name: 'Final',
      week: 13
    }
  ]
};

function getView(url) {
  url = baseUrl + url;
  fetch(url).then(response => {
    response.text().then(partial => {
      var tmp = document.implementation.createHTMLDocument();
      tmp.body.innerHTML = partial;
      const images = tmp.querySelectorAll('img');
      images.forEach(image => {
        const imgParts = image.src.split('/');
        image.src = baseUrl + 'images/' + imgParts[imgParts.length - 1];
      });
      //tmp.querySelector('main');
      // console.dir(tmp.querySelector('main'));
      const container = document.getElementById('partialContainer');
      container.innerHTML = '';
      container.append(tmp.querySelector('main'));

      Prism.highlightAll();
      document.querySelector('.navToggle').checked = false;
    });
  });
}
getView('resources/syllabus.html');

function buildMenu() {
  const actList = document.getElementById('activitiesList');
  const resList = document.getElementById('resourcesList');

  //build Activities list first
  menu.activites.forEach(link => {
    let item = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.innerHTML = `${link.name} (Week: ${link.week})`;
    anchor.addEventListener('click', e => {
      e.preventDefault();
      getView(link.url);
    });
    //item.innerHTML = `<a href="${link.url}" onclick="getView('${link.url}')">${link.name} (Week: ${link.week})</a>`;
    item.appendChild(anchor);
    actList.appendChild(item);
  });
  menu.resources.forEach(link => {
    let item = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.innerHTML = link.name;
    anchor.addEventListener('click', e => {
      e.preventDefault();
      getView(link.url);
    });

    //item.innerHTML = `<a href="${link.url}">${link.name}</a>`;
    item.appendChild(anchor);
    resList.appendChild(item);
  });
}
buildMenu();

// document.getElementById('one').addEventListener('click', e => {
//   document.querySelector('main').scrollBy({
//     top: 0, // could be negative value
//     left: document.body.scrollWidth,
//     behavior: 'smooth'
//   });
// });
