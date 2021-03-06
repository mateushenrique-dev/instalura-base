import React, { useState } from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Modal from '../src/components/commons/Modal';
import Button from '../src/components/commons/Button';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/foundation/layout/ Grid';

export default function Home() {
  const [isOpen, setModalState] = useState(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu />

      <Modal
        isOpen={isOpen}
        onClose={() => setModalState(false)}
      >
        {(propsDoModal) => (
          <Box
            backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <div>
              Meu modal para o cadastro do usuario
            </div>
          </Box>
        )}
      </Modal>

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </Text>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              marginBottom={{
                xs: '32px',
                md: '75px',
              }}
              onClick={() => setModalState(true)}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="Imagem Celular"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
