export type CustomColor = "primary" | "secondary" | "error" | "warning" | "info" | "success";

export type ChipProps = {
  keywords: string[];
  setSelectedWord: (word: string) => void;
}