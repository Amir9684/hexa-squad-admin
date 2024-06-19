import toast from "react-hot-toast";
import instance from "../../../interceptor";

const DeleteCourseComment = async (id, to) => {
  try {
    const result = await instance.delete(
      "/Course/DeleteCourseComment?CourseCommandId=" + id
    );
    console.log(result);
    if (result.success) {
      toast.success(result.message);
      setTimeout(() => {
        window.location = to;
      }, 700);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export default DeleteCourseComment;
