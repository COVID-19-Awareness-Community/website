import csvtojson from 'csvtojson';

import freeActivities from 'raw-loader!./free-activities.csv'
import funIdeas from 'raw-loader!./fun-ideas.csv'
import mentalHealth from 'raw-loader!./mental-health.csv'
import nationalOrganizing from 'raw-loader!./national-organizing.csv'
import supportServices from 'raw-loader!./support-services.csv'
import volunteerAndHelp from 'raw-loader!./volunteer-and-help.csv'

function createJson() {
  const promises = [
    [freeActivities, 'Free Activities'],
    [funIdeas, 'Fun Ideas'],
    [mentalHealth, 'Mental Health'],
    [nationalOrganizing, 'National Organizing'],
    [supportServices, 'Support Services'],
    [volunteerAndHelp, 'Volunteer And Help'],
  ].map(getJson);

  return Promise.all(promises)
  .then((arrs) => {
    return [].concat(...arrs);
  })
  
}

function getJson([source, category]) {
  return csvtojson()
  .fromString(source)
  .then(arr => arr.map(orig => ({
    label: orig.Name,
    type: orig.Type,
    url: orig.Link,
    description: orig.Notes,
    category
  })))
}

export default createJson;
