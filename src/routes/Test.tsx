import { Lobby } from "@/components/lobby/Lobby";

export const TestRoute = () => {
  // const [content, setContent] = useState("");

  // const fetchContent = async () => {
  //   setContent(
  //     JSON.stringify(
  //       (await window.electron.getLcuUri(
  //         "/lol-lobby/v2/lobby/matchmaking/search-state"
  //       )) as any,
  //       null,
  //       2
  //     )
  //   );
  // };

  // useEffect(() => {
  //   fetchContent();
  // }, []);

  return <Lobby />;
};
