import { Box, Center, Container } from '@chakra-ui/react';

const Home = () => {
    return (
        <>
            <Container as="section">
                <Box m={2}>Tomato</Box>
                <Center bg="tomato" h="100px" color="white">
                    This is the Center
                </Center>
            </Container>
        </>
    );
};
export { Home };
