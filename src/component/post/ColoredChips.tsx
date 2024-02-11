import { Chip } from '@mui/material';

interface Props {
  setSelectedWord: (word: string) => void;
}

function getRandomColor(): string {
  const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
  return colors[Math.floor(Math.random() * colors.length)];
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