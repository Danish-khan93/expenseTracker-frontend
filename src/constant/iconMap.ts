import { FiPrinter } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdLockOutline } from "react-icons/md";
import { GoShieldLock } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

export const iconMap = {
  printer: FiPrinter,
  add: IoIosAddCircleOutline,
  delete: AiOutlineDelete,
  edit: CiEdit,
  eye: IoEyeOutline,
  closeEye: IoEyeOffOutline,
  profile: FaRegUser,
  notification: CiBellOn,
  email: TfiEmail,
  password: MdLockOutline,
  shield: GoShieldLock,
  plus: FaPlus,
} as const;
