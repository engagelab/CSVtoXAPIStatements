const { getVerbObject, getActivityObject } = require("../services/vocabulary");

class Statement {
  constructor(name, email, timestamp, verb, activity) {
    this.actor = {
      objectType: "Agent",
      name,
      mbox: "mailto:" + email,
    };

    const verbID = getVerbObject(verb);
    this.verb = verbID;

    const activityID = getActivityObject(activity);
    this.object = activityID;

    this.timestamp = timestamp.replace("2018", "2020");
  }
}

module.exports = {
  Statement,
};
