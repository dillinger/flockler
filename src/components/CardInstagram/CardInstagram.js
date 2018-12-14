import React from "react";

export function CardInstagram(props) {
  const { caption, profile_picture, username,  } = props.attachments.instagram_item;
  return (
    <React.Fragment>
      <div className="social-list__c-card">
        <img src={props.cover_url} alt={props.title} />
      </div>
      <img src={profile_picture} alt={username} />
      {username}
      {caption}
    </React.Fragment>
  );
}
