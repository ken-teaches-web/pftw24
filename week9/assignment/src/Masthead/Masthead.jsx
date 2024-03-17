import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Ken's Commander Decks" />
            <h1>Ken&apos;s Commander Decks</h1>
        </div>
    )
}