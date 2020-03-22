import csvtojson from 'csvtojson';

import freeActivities from 'raw-loader!./free-activities.csv'

function createJson() {
  return csvtojson()
    .fromString(freeActivities)
    .then(arr => arr.map(orig => ({
      label: orig.Name,
      type: orig.Type,
      url: orig.Link,
      description: orig.Notes,
    })))
}

export default createJson;
