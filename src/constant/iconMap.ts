import { FiPrinter } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export const iconMap = {
  printer: FiPrinter,
  add: IoIosAddCircleOutline,
  delete: AiOutlineDelete,
  edit: CiEdit,
  eye: IoEyeOutline,
  closeEye: IoEyeOffOutline,
  profile: FaRegUser,
  notification: CiBellOn,
} as const;
