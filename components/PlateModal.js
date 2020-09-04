import React from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/core';

import ModalFormule from './ModalFormule';

export default function PlateModal({
  plate,
  formuleState,
  handleFormuleSubmit,
  handleFormuleChange,
  selected,
  formule,
  post,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [modal, setModal] = React.useState(false);

  return (
    <Box p="30px">
      <SimpleGrid mt="6" mb="50px" columns={[1, 1, 2, 3]} spacing={12}>
        {post.formules.map((formule) => (
          <ModalFormule formuleState={formuleState} post={post} formule={formule}></ModalFormule>
        ))}
      </SimpleGrid>
    </Box>
  );
}
