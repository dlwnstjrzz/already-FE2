import { Box, Flex, Text, FlexProps } from '@chakra-ui/react';

import AvatarIcon from '../icons/AvatarIcon';
type MemberCardProps = {
  icon?: React.ReactNode | undefined;
  userCode?: string;
};
const MemeberCard: React.FC<MemberCardProps & FlexProps> = ({
  icon = '',
  userCode = '',
  ...props
}) => {
  return (
    <Flex
      borderRadius={'10px'}
      align={'center'}
      justify={icon ? 'space-between' : ''}
      w={icon ? '260px' : '130px'}
      px={icon ? 3 : 5}
      pr={icon ? 5 : ''}
      py={3}
      bg={'#FFF'}
      {...props}
    >
      <Flex align={'center'}>
        <AvatarIcon />
        <Box ml={3}>
          <Text textStyle={'subtitle2'}>name1</Text>
          {userCode && (
            <Text color={'#ADA4A5'} textStyle={'caption1'}>
              {userCode}
            </Text>
          )}
        </Box>
      </Flex>
      {icon && icon}
    </Flex>
  );
};

export default MemeberCard;
