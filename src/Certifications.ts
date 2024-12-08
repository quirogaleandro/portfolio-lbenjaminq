import DOCKER from "./Images/DOCKER.png";
import AWSSAA from "./Images/AWSSAA.png";
import AWSSAP from "./Images/AWSSAP.png";
import AWSCCP from "./Images/AWSCCP.png";
import AWSBESTPRACTICES from "./Images/AWSBESTPRACTICES.png";
import AWSMIGRATION from "./Images/AWSMIGRATION.png";
import AWSSECURITY from "./Images/AWSSECURITY.png";

interface Certification {
  img: string,
  label:string
}

export const CertificationsMap: Certification[] = [
  {
    img: AWSSAP,
    label: "AWSSAP",
  },
  {
    img: AWSSAA,
    label: "AWSSAA",
  },
  {
    img: AWSCCP,
    label: "AWSCCP",
  },
  {
    img: AWSBESTPRACTICES,
    label: "AWSBESTPRACTICES",
  },
  {
    img: AWSMIGRATION,
    label: "AWSMIGRATION",
  },
  {
    img: AWSSECURITY,
    label: "AWSSECURITY",
  },
  {
    img: DOCKER,
    label: "DOCKER",
  },
];
