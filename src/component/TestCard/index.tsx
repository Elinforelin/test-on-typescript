import { FC } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectNumberOfTest } from "../../store/mathTest/selector";
import classes from "./styles.module.scss";

interface TestProps {
  name: string;
  img: string;
  desc: string;
}

export const TestCard: FC<TestProps> = ({ name, img, desc }) => {
  const numberOfQuestion = useSelector(selectNumberOfTest);

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
