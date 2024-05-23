import {
   FaWindows,
   FaPlaystation,
   FaXbox,
   FaApple,
   FaLinux,
   FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
   platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
   const iconMap: { [key: string]: IconType } = {
      pc: FaWindows,
      playstation: FaPlaystation, 
      xbox: FaXbox,
      mac: FaApple,
      linux: FaLinux,
      andriod: FaAndroid,
      ios: MdPhoneIphone,
      web: BsGlobe
   }

   return (
      <HStack marginY={1}>
         {platforms.map((platform) => (
            <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
         ))}
      </HStack>
   );
};

export default PlatformIconList;
