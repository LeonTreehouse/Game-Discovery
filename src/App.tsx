import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import GameGrid from "./componenets/GameGrid";
import GenreList from "./componenets/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main" `, //Bigger than 1024 pixels(This is all on chakras website)
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
