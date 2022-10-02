/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Lottie from "react-lottie";
import ReactHowler from "react-howler";
import lotties from "./lotties";
import { useState } from "react";

const container = css`
  width: 100%;
  min-height: 100vh;
  background-color: #5c5c5c;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  justify-content: center;
`;
const title = css`
  font-size: 84px;
  text-transform: uppercase;
  font-family: "Teko", sans-serif;
`;
const wrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 14px;
  max-width: calc(160px * 4 - 10px);
`;
const itemBox = css`
  width: 160px;
  aspect-ratio: 1/1;
  border: 6px solid white;
  border-radius: 40px;
  overflow: hidden;
  background-color: transparent;
  :hover {
    background-color: #383838;
  }
  transition: background-color 0.3s;
  cursor: pointer;
`;

type SoundType = (
  | "bell"
  | "bird"
  | "bubble"
  | "campfire"
  | "machine"
  | "pencil"
  | "rain"
  | "thunder"
  | "wind"
)[];

const sounds: SoundType = [
  "bell",
  "bird",
  "bubble",
  "campfire",
  "machine",
  "pencil",
  "rain",
  "thunder",
  "wind",
];

const initialState = {
  bell: false,
  bird: false,
  bubble: false,
  campfire: false,
  machine: false,
  pencil: false,
  rain: false,
  thunder: false,
  wind: false,
};

const App = () => {
  const [isPlay, setPlay] = useState(initialState);

  return (
    <div css={container}>
      <h2 css={title}>sound pad</h2>
      <div css={wrapper}>
        {sounds.map((sound) => (
          <button
            css={itemBox}
            key={sound}
            onClick={() =>
              setPlay((prev) => ({ ...prev, [sound]: !prev[sound] }))
            }
          >
            <ReactHowler
              src={`/sounds/${sound}.mp3`}
              playing={isPlay[sound]}
              loop
              preload
            />
            <Lottie
              options={{
                loop: true,
                autoplay: false,
                animationData: lotties[sound],
              }}
              isStopped={!isPlay[sound]}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
