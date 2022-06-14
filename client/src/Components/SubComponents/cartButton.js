import { AiOutlineShoppingCart } from 'react-icons/ai'
import "./cartButton.scss"
function CartButton() {
    return (
        <button className="button">
            <span className="button-icon">
                <AiOutlineShoppingCart  />
            </span>
            <span className="button-text">Cart</span>
            <span className="button-badge">2</span>
        </button>
    );
}

export default CartButton; 