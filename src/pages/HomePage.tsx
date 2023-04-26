import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../componenets/GameGrid";
import GameHeading from "../componenets/GameHeading";
import GenreList from "../componenets/GenreList";
import PlatformSelector from "../componenets/PlatformSelector";
import SortSelector from "../componenets/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main" `,
        lg: ` "aside main" `, //Bigger than 1024 pixels(This is all on chakras website)
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={3}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
