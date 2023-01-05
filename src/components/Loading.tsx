import './styles/Loading.scss';

export default function Loading() {
  return (
      <div id="loading_span">
        Loading <br />
        <div id="dot_one" className="dots">.</div> <br />
        <div id="dot_two" className="dots">.</div> <br />
        <div id="dot_three" className="dots">.</div>
      </div>
  );
}
