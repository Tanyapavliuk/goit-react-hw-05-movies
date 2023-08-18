import css from "./ItemList.module.css"
const ItemList = ({ transaction }) => {
    return transaction.map(el => 
    <tr key={el.id}>
        <td className={css.item}>{el.type}</td>
        <td className={css.item}>{el.amount}</td>
        <td className={css.item}>{el.currency}</td>
    </tr>
    )
}
export default ItemList;