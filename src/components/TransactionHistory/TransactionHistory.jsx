import ItemList from "./ItemList";
import css from "./TransactionHistory.module.css"
const TransactionHistory = ({ data }) => {
    return <table className={css.transactionHistory}>
  <thead className={css.transactionThead}>
    <tr className={css.row}>
      <th className={css.item}>Type</th>
      <th className={css.item}>Amount</th>
      <th className={css.item}>Currency</th>
    </tr>
  </thead>

  <tbody>
    <ItemList transaction={data} />
  </tbody>
</table>
}
export default TransactionHistory;