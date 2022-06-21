import getId from "./getId";

const key = "scooters";

export function create(obj) {
  let data = localStorage.getItem(key);
  if (data === null) {
    data = JSON.stringify([]);
  }
  data = JSON.parse(data);
  obj.id = getId(key + "_id");
  data.push(obj);
  data = JSON.stringify(data);
  localStorage.setItem(key, data);
}
export function read() {
  let data = localStorage.getItem(key);
  if (data === null) {
    data = JSON.stringify([]);
  }
  data = JSON.parse(data);
  return data;
}

export function remove({ id }) {
  let data = localStorage.getItem(key);
  if (data === null) {
    data = JSON.stringify([]);
  }
  data = JSON.parse(data);
  data = data.filter((obj) => obj.id !== id);
  data = JSON.stringify(data);
  localStorage.setItem(key, data);
}

export function edit(obj) {
  let data = localStorage.getItem(key);
  if (data === null) {
    data = JSON.stringify([]);
  }
  data = JSON.parse(data);
  data = data.map((oldObject) => (oldObject.id !== obj.id ? oldObject : obj));
  data = JSON.stringify(data);
  localStorage.setItem(key, data);
}

export function scootersSort(value) {
  let data = localStorage.getItem("scooters-sort");
  if (data === null) {
    data = JSON.stringify("1");
  }
  data = JSON.parse(data);
  data = JSON.stringify(data);
  localStorage.setItem("scooters-sort", value);
  return data;
}
