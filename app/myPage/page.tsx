'use client';

import { Box } from '@chakra-ui/react';

import AppContainer from '@/components/common/AppContainer';
import Navbar from '@/components/common/NavBar';
import Header from '@/components/home/Header';

const MyInfo = () => {
  return (
    <AppContainer>
      <Header mt={7} />
      <Box h={16} />
      마이페이지
      <Navbar currentTab="MyInfo" />
    </AppContainer>
  );
};

export default MyInfo;
