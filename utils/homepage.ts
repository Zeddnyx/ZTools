import { IconType } from "react-icons";
import {RiPhoneFindFill } from "react-icons/ri";
import { BsCreditCard2Front,BsClipboardCheck} from "react-icons/bs"
import {PiWhatsappLogoLight} from "react-icons/pi"
import {AiFillCalculator} from "react-icons/ai"
import { WiEarthquake } from "react-icons/wi"
import { FiUser } from "react-icons/fi"
import {MdPassword} from "react-icons/md"

interface Homepage {
  title: string;
  link: string;
  icon: IconType;
}

export const homepage: Homepage[] = [
  {
    title: "check account",
    link: "/check-account",
    icon: RiPhoneFindFill,
  },
  {
    title: "cc number generator",
    link: "/cc-number-generator",
    icon: BsCreditCard2Front,
  },
  {
    title: "send whatsapp",
    link: "/send-whatsapp",
    icon: PiWhatsappLogoLight,
  },
  {
    title: "todo list",
    link: "/todo-list",
    icon: BsClipboardCheck
  },
  {
    title: "calculator",
    link: "/calculator",
    icon: AiFillCalculator
  },
  {
    title: "earth quakes",
    link: "/earth-quakes",
    icon: WiEarthquake
  },
  {
    title: "random user",
    link: "/random-user",
    icon: FiUser
  },
  {
    title: "password generator",
    link: "/password-generator",
    icon: MdPassword
  }
]
