import { Card, CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

type Props = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

/** 内部/外部リンクの種類に応じてコンポーネントを読み替え */
const CustomLinkCard = ({ href = "/", children = "", className = "" }: Props) => {
  const isInternal = href && href.startsWith("/");
  const isAnchor = href && href.startsWith("#");
  const linkCardRegex = children && (children == 'card');
  const classes = `hover:text-red-700 ${className}`;

  if (linkCardRegex) {
    return (
    <Card className={classes ?? ''} itemProp="url">
          {children}
    </Card>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      itemProp="url"
    >
      {children}
    </a>
  );
};

export default CustomLinkCard;
