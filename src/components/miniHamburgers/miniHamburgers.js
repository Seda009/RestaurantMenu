import "./miniHamburgers.css";

function MiniHums(props) {
  return (
    <div className="humCart">
      <div className="humImg">
        <img src="https://s3-alpha-sig.figma.com/img/58c6/64a5/5490f46f34f5d3a61666f09db0723d92?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZmH9A7HxA6SzhmO44Krl8VbKi4LMzHA9x0jEAyL1uHdJ6KYJRQb0jofxS4xJ1dLXSPvYHQ2lMzV-m50yN7qhM44DWB-jJPGWfkSycnDQDsWxYbf6twSnLRJhtZJStwfafdB3ke54FJDLUoOwOQO4GJHwoTZnkWGYfImzIk5tkpN4nYEUOGq3yfBlLAEls-HlgQzMPOXg7tVHVf5cTUOkmt6ZJRDB-LK-pZSht8dNOZbRWFCtgBjDF6n1dTO0tf7yS99vmTiSoOzq9rMavuYV6PDCbt1jfw7B9S6bi-fnC1ytLmFRuUE~n3NIuQiaRowKUeeWBPmRPNNyH~FsZt-3w__"></img>
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
