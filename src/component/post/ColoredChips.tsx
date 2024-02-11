import { Chip, Color } from '@mui/material';

interface Props {
  keywords: string[]; // Include the 'keywords' property here
  setSelectedWord: (word: string) => void;
}

type CustomColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';


function getRandomColor(): CustomColor {
  const colors: CustomColor[] = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function ColoredChips({ keywords, setSelectedWord }: Props): JSX.Element[] {
  // Filter out duplicate keywords
  const uniqueKeywords = Array.from(new Set(keywords));

  const coloredChips: JSX.Element[] = [];

  uniqueKeywords.forEach((keyword: string) => {
    const color = getRandomColor();
    coloredChips.push(
      <Chip
        key={keyword}
        label={keyword}
        variant='outlined'
        color={color}
        onClick={() => {
          setSelectedWord(keyword);
        }}
        clickable
      />
    );
  });

  return coloredChips;
}

export default ColoredChips;