const runs = [
  {
    id: 1,
    name: 'Super Mario World',
    date: '2017-12-09',
    category: '96_exit',
    run_time: 10000,
    platform: 'SNES',
    video_url:'youtube.com/myvideo'
  }
];

class Run {
  constructor(data) {
    this.id = this.generateId();
    this.name = data.name;
    this.date = data.date;
    this.category = data.category;
    this.run_time = data.run_time;
    this.platform = data.platform;
    this.video_url = data.video_url;
  }
  generateId(){
    if (runs.length > 0) {
      return runs[runs.length-1].id + 1;
    }
    return 1;
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

function deleteRun(id) {
  let response = getOneRun(id);

  if (!response) {
    response = { errors: 'Please make sure id is inputted correctly' };
  } else {
    let index = runs.indexOf(response);
    runs.splice(index, 1);
  }

  return response;
}

function updateRun() {

}

module.exports = { getAllRuns, getOneRun, createRun, deleteRun, updateRun };
