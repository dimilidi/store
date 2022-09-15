import { useContext } from "react";
import { Stack, Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ShopContext } from "../../context/ShopContext";
import { UserContext } from "../../context/UserContext";
import CartItem from "../CartItem/CartItem";
import { products } from "../../data/products";
import { Link, useNavigate } from "react-router-dom";

function Cart({ isOpen }) {
  const { closeCart, cartItems, setCartItems } = useContext(ShopContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleOrder = ()=> {
    closeCart();
    if(isLoggedIn){
        setCartItems([])
    //   localStorage.removeItem("cartItems")
    navigate('order-confirmation')

    }else {
        navigate('/sign-in')
    }
  }


  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
         {cartItems.length===0 ? (

        <h3>Your Cart is empty ...</h3>
         
          ) : (
            <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
           <div className="total-price">
            Total:
            {cartItems.reduce((acc, curr) => {
              const item = products.find((item) => item.id === curr.id);
              return acc + (item?.price || 0) * curr.quantity;
            }, 0)}
          </div>
          <button
            className="add-btn"
            type="button"
            onClick={()=>handleOrder()}
          >
            <Nav.Link as={Link} to={isLoggedIn ? '/order-confirmation' : '/sign-in'}>
              Order
            </Nav.Link>
          </button>
        </Stack>
          )
        }
       
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
