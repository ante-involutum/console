import axios from "axios";

async function uploadfile() {}
async function createPlan(data) {
  const resp = await axios.post("http://tink.com:31695/files/v2/plan", data);
  return resp;
}

async function deleteFile(name) {
  const resp = await axios.delete(`http://tink.com:31695/files/${name}`);
  return resp;
}

async function getFiles() {
  const resp = await axios.get("http://tink.com:31695/files");
  return resp;
}

async function getPlans() {
  const resp = await axios.get("http://tink.com:31695/files/v2/plan");
  return resp;
}

async function reMake(name) {
  const resp = await axios.post("http://tink.com:31695/files/remake", {
    name: name,
  });
  return resp;
}

export { uploadfile, getFiles, deleteFile, reMake, createPlan, getPlans };
