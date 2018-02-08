const runs = [
  {
    id: 1,
    name: 'Super Mario World',
    date: '2017-12-09',
    category: '96_exit',
    runTime: '15:47',
    system: 'SNES',
    video_url:'youtube.com/myvideo'
  }
];

class Run {
  constructor(data) {
    this.id = runs[runs.length-1].id + 1;
    this.name = data.name;
    this.date = data.date;
    this.category = data.category;
    this.runTime = data.runTime;
    this.system = data.system;
    this.video_url = data.video_url;
  }
}

function getAllRuns() {
  const response = runs;
  return response;
}

function getOneRun(id) {
  const idToCheck = parseInt(id, 10);
  let response;

  runs.forEach((run) => {
    if (run.id === idToCheck) {
      response = run;
    }
  });

  if (!response) {
    response = { errors: 'Please make sure id is inputted correctly' };
  }

  return response;
}

function createRun(reqData) {
  const response = new Run(reqData);
  runs.push(response);
  return response;
}

function deleteRun() {

}

function updateRun() {

}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun, updateRun };
