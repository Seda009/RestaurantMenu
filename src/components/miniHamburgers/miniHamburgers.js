import "./miniHamburgers.css";

function MiniHums(props) {
  return (
    <div className="humCart">
      <div className="humImg">
        <img src="https://s3-alpha-sig.figma.com/img/58c6/64a5/5490f46f34f5d3a61666f09db0723d92?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hMb4SpunB-97TKiSBf3hqEXJXaDFHFNyqLQJ-KL1AHhHmyI8JobTWO5PdH8M9vTJ9RlE3YoWRGQJoC8M9clyGbWCzVFzKlOTdSlwNA3fY~9Jypqh6XcuNLefx3z6XpkogELO7VbasaVtwEyOIMqXKDh-RzgL0rniNSHhNkmh57cTmVcmdm7HSl6wMhzxFC2~ReFbmiqEFp~sYMJbnc4mXhFUiSWvObDDjfFj-J3AkIWlGvU4PV3L8AQzupbNVnZrMHBR1yWokRQMYu8fZTEG9if0EM7VhePQJz5qOpRcOxfW7OroUcHcz4WWMeyqnzsvlNFFmAeNVWoJ19~ZBh6aqw__"></img>
      </div>
      <div className="humText">
        <p>
          {props.title} ------------------------ {props.price}
        </p>
      </div>
    </div>
  );
}

export default MiniHums;
