import React from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" />
          <Profile>
            <Name>codingj87</Name>
            <UserImage src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Rabbit-512.png" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search" passHref>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex 
  flex-col 
  h-screen
`;

const ActionItems = tw.div`
  flex-1 
  p-4
`;

const Header = tw.div`
  flex 
  justify-between 
  items-center
`;
const UberLogo = tw.img`
  h-16 
  p-4
`;

const Profile = tw.div`
  flex 
  items-center
`;

const Name = tw.div`
  mr-4 
  text-sm
`;

const UserImage = tw.img`
  h-12 
  w-12 
  rounded-full 
  border 
  border-gray-200 
  p-px
`;

const ActionButtons = tw.div`
  flex 
`;

const ActionButton = tw.div`
  flex
  bg-gray-200
  flex-1
  m-1
  h-32
  items-center
  flex-col
  justify-center
  rounded-lg
  transform
  hover:scale-105
  tansition
  text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20
  bg-gray-200
  text-2xl
  p-4
  flex
  items-center
  mt-8
`;
