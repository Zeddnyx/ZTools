import { IconType } from "react-icons";
import {RiPhoneFindFill } from "react-icons/ri";
import { BsCreditCard2Front,BsClipboardCheck} from "react-icons/bs"
import {PiWhatsappLogoLight} from "react-icons/pi"
import {AiFillCalculator} from "react-icons/ai"
import { WiEarthquake } from "react-icons/wi"
import { FiUser } from "react-icons/fi"
import {MdPassword, MdColorLens} from "react-icons/md"

interface Feature{
  title: string;
  link: string;
  icon: IconType;
}

export const feature: Feature[] = [
  {
    title: "check account",
    link: "/dashboard/check-account",
    icon: RiPhoneFindFill,
  },
  {
    title: "todo list",
    link: "/dashboard/todo-list",
    icon: BsClipboardCheck
  },
  {
    title: "cc number generator",
    link: "/dashboard/cc-number-generator",
    icon: BsCreditCard2Front,
  },
  {
    title: "send whatsapp",
    link: "/dashboard/send-whatsapp",
    icon: PiWhatsappLogoLight,
  },
  {
    title: "earth quakes",
    link: "/dashboard/earth-quakes",
    icon: WiEarthquake
  },
  {
    title: "calculator",
    link: "/dashboard/calculator",
    icon: AiFillCalculator
  },
  {
    title: "password generator",
    link: "/dashboard/password-generator",
    icon: MdPassword
  },
  {
    title: "random user",
    link: "/dashboard/random-user",
    icon: FiUser
  },
  {
    title: "color generator",
    link: "/dashboard/color-generator",
    icon: MdColorLens
  }
]
