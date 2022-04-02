import axios from "axios";

export const TeacherData = async (key, id) => {
  return await axios.get(`http://localhost:3000/${key}`, {
    params: {
      id: id,
    },
  });
};
