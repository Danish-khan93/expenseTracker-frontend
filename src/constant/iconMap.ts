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
import { IoSaveOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdPaper } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { LuUtilityPole } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { TbMeat } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { GoAlert } from "react-icons/go";

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
  save: IoSaveOutline,
  dashboard: LuLayoutDashboard,
  expense: IoMdPaper,
  category: MdOutlineCategory,
  // category icons
  home: IoHomeOutline,
  food: IoFastFoodOutline,
  transport: FaCarAlt,
  medical: FaBriefcaseMedical,
  utilities: LuUtilityPole,
  groseory: FaShoppingCart,
  meat: TbMeat,
  logout: LuLogOut,
  income: FaRegMoneyBill1,
  bank:CiBank,
  wallet:IoWalletOutline,
  alert:GoAlert,
} as const;
