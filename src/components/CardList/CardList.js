import React from "react";
import { CardInstagram } from "../CardInstagram/CardInstagram";
import { CardTwitter } from "../CardTwitter/CardTwitter";


export function CardList(props) {
  console.log(props);
  const CardComponentsMap = {
    instagram: CardInstagram,
    tweet: CardTwitter
  };

  return (
    <React.Fragment>
      { props.list.map((item, index) => {
        const DynamicComponent = CardComponentsMap[item.type];
        return (
          <div key={index}>
            <DynamicComponent {...item} />
          </div>
        );
      }) }
    </React.Fragment>
  );
}
