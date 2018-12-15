import React from "react";
import "./cardList.css";

export function CardInstagram(props) {
  const {
    caption,
    profile_picture,
    username
  } = props.attachments.instagram_item;
  const bgImage = {
    background: `url(${props.cover_url}) no-repeat center center`,
    backgroundSize: `cover`
  };
  return (
    <React.Fragment>
      <div className="card">
        <a className="card__link" href={props.full_url}>
          <div className="card__background-image" style={bgImage}></div>
          <div className="card__user">
            <img
              className="card__avatar"
              src={profile_picture}
              alt={username}
              width="24"
              height="24"
            />
            <div className="card__wrapper">
              <div className="card__username">{username}</div>
              <div className="card__caption">{caption}</div>
            </div>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
}

export function CardTwitter(props) {
  const { oembed, profile_image_url, name } = props.attachments.tweet;

  return (
    <React.Fragment>
      <div className="card card-twitter">
        <div
          className="card__img"
          dangerouslySetInnerHTML={{ __html: oembed }}
        />
        <div className="card__user">
          <img
            className="card__avatar"
            src={profile_image_url}
            alt={name}
            width="24"
            height="24"
          />
          <div className="card__wrapper">
            <div className="card__username">{name}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export function CardList(props) {
  const CardComponentsMap = {
    instagram: CardInstagram,
    tweet: CardTwitter
  };

  return (
    <div className="c-card-list">
      {props.list.map((item, index) => {
        const DynamicComponent = CardComponentsMap[item.type];
        return (
          <React.Fragment key={index}>
            <DynamicComponent {...item} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
