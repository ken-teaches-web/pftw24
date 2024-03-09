/* eslint-disable react/prop-types */
import "./CommanderRow.css";

export function CommanderRow({commander, colors, hasWon, mainGroup, image, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td style={{fontWeight: hasWon ? 900 : 200, color: mainGroup ? "green" : "black"}}>{commander}</td>
            <td>{colors.join(", ")}</td>
            <td>{hasWon && "yes"}</td>
            <td>{mainGroup && "yes"}</td>
            <td><img src={image} alt={commander} /></td>
        </tr>
    )
}