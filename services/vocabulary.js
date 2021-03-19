const verbDictionay = {
  0: {
    id: "http://adlnet.gov/expapi/verbs/launched",
    display: {
      "en-UD": "launched",
      NO: "igangsatte",
    },
  },
  1: {
    id: "http://adlnet.gov/expapi/verbs/answered",
    display: {
      "en-UD": "answered",
      NO: "besvarte",
    },
  },
  2: {
    id: "http://adlnet.gov/expapi/verbs/exited",
    display: {
      "en-UD": "exited",
      NO: "avsluttet",
    },
  },
};

const validVerbs = {
  launched: 0,
  igangsatte: 0,
  answered: 1,
  besvarte: 1,
  exited: 2,
  avsluttet: 2,
};

const activityDictionay = {
  0: {
    id: "http://adlnet.gov/expapi/activities/course",
    /*  displays: {
      "en-UD": "course",
      NO: "kurs",
    }, */
    objectType: "Activity",
  },
  1: {
    id: "hhttp://adlnet.gov/expapi/activities/question",
    /*  displays: {
      "en-UD": "question",
      NO: "spørsmål",
    }, */
    objectType: "Activity",
  },
  2: {
    id: "http://adlnet.gov/expapi/activities/module",
    /*  displays: {
      "en-UD": "module",
      NO: "modul",
    }, */
    objectType: "Activity",
  },
  3: {
    id: "hhttp://adlnet.gov/expapi/activities/page",
    /*  displays: {
      "en-UD": "page",
      NO: "side",
    }, */
    objectType: "Activity",
  },
};

const validActivities = {
  course: 0,
  kurs: 0,
  question: 1,
  spørsmål: 1,
  module: 2,
  modul: 2,
  page: 3,
};

const getVerbObject = (verb) => {
  const id = validVerbs[verb];
  if (typeof id === "number") {
    return verbDictionay[id];
  } else {
    return "No verb";
  }
};

const getActivityObject = (activity) => {
  const id = validActivities[activity];
  if (typeof id === "number") {
    return activityDictionay[id];
  } else {
    return "No Activty";
  }
};

module.exports = {
  getVerbObject,
  getActivityObject,
};
