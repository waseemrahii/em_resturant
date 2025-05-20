import TitleHead from '../../component/Header/TitleHead'
import Orders from '../../component/Orders/Orders'

const OrdersPage = () => {
  return (
    <div>
      <TitleHead title="Orders" desc="Orders"/>
      <div>
        <Orders/>
      </div>
    </div>
  )
}

export default OrdersPage
