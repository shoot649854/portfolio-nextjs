import { Chip, Box } from "@mui/material";
import { CustomColor, ChipProps } from "./types";

function getRandomColor(): CustomColor {
  const colors: CustomColor[] = ["primary", "secondary", "error", "warning", "info", "success"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function ColoredChips({ keywords, setSelectedWord }: ChipProps): JSX.Element {
  const uniqueKeywords = Array.from(new Set(keywords));

  return (
    <Box>
      {uniqueKeywords.map((keyword: string) => {
        const color = getRandomColor();
        return (
          <Chip
            key={keyword}
            label={keyword}
            variant="outlined"
            color={color}
            onClick={() => {
              setSelectedWord(keyword);
            }}
            clickable
          />
        );
      })}
    </Box>
  );
}

export default ColoredChips;
