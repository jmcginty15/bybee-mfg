import './EquipmentCard.css';

const EquipmentCard = ({ item }) => {
    return (
        <div className="EquipmentCard">
            <h3>{item.service}</h3>
            <ul className="EquipmentCard-list">
                {item.equipment.map(piece => <li key={piece}>{piece}</li>)}
            </ul>
        </div>
    )
}

export default EquipmentCard;