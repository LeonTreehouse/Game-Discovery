import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router-dom";

import ExpandableText from "../componenets/ExpandableText";
import GameAttributes from "../componenets/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
