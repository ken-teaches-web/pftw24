import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
import trophy from "../assets/icons/trophy_icon.svg";
import suitcase from "../assets/icons/suitcase_briefcase_icon.svg";
import trash from "../assets/icons/can_trash_icon.svg";
import copy from "../assets/icons/bxs_copy_icon.svg";
export default function ItemCard({
    commander,
    colors,
    theme,
    hasWon,
    mainGroup,
    image,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="commanderCard">
            {hasWon && <div className="hasWon"> <img src={trophy} title="this deck has won" /></div>}
            {mainGroup && <div className="mainGroup"> <img src={suitcase} title="I take this deck with" /></div>}
            <div className="cardImg">
                <img src={image} alt={commander} />
            </div>
            <div className="cardTitle">{commander}</div>
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash} /></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy} /></a>
            </div>
            {colors.map((color) => {
                return <div key={color} className={clsx(["stripe", color])} />
            })}
        </div>
    )
}
ItemCard.propTypes = {
    commander: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    theme: PropTypes.string,
    hasWon: PropTypes.bool,
    mainGroup: PropTypes.bool,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}