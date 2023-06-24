import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  LockClosedIcon,
  TableCellsIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [

  {
    color: "blue",
    title: "One Click deployment",
    icon: FingerPrintIcon,
    description:
    "Cloud-fence simplifies deployment with its intuitive interface, allowing easy and fast implementation of a full stack network security across all your clouds.",
  },
 
  {
    color: "red",
    title: "Full Stack Network Security and Posture management",
    icon: LockClosedIcon,
    description:
      "Secure your cloud infrastructure from end to end with our full stack approach, ensuring comprehensive protection at every layer.",
  },
  {
    color: "teal",
    title: "Single Dashboard",
    icon: TableCellsIcon,
    description:
      "Gain unparalleled visibility and control over all your cloud infrastructure. Cloud-fence offers a groundbreaking dashboard where network security and posture management seamlessly converge.",
  },
 
];

export default featuresData;
