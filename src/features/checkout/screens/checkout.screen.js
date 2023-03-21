import React, {useContext, useState, useEffect} from 'react';
import {Text} from '../../../components/typography/text.component';
import {List} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {CartContext} from '../../../services/cart/cart.context';
import {RestaurantInfoCard} from '../../restaurants/components/restaurants-info-card.component';
import {CreditCardInput} from '../components/credit-card.component';
import {
  CartIcon,
  CartIconContainer,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from '../components/checkout.styles';
import {payRequest} from '../../../services/checkout/checkout.service';

export const CheckoutScreen = ({navigation}) => {
  console.log(CartContext);
  const {cart, restaurant, clearCart} = useContext(CartContext);
  const [sum, setSum] = useState(0);
  const [name, setName] = useState('');
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate('CheckoutError', {
        error: 'Please enter a valid card',
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then(result => {
        setIsLoading(false);
        clearCart();
        navigation.navigate('CheckoutSuccess');
      })
      .catch(err => {
        setIsLoading(false);
        navigation.navigate('CheckoutError', {error: err});
      });
  };

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
    }
    const newSum = cart.reduce((acc, {price}) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your Cart is empy!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="left" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({item, price, quantity}) => (
              <List.Item
                key={item}
                title={item}
                description={`$${price / 100}`}
                right={() => <Text>{quantity}</Text>}
                left={() => <List.Icon color="black" icon="check" />}
              />
            ))}
          </List.Section>
        </Spacer>
        <Spacer position="left" size="medium">
          <Spacer position="left" size="large">
            <Text>Total:{sum / 100}</Text>
          </Spacer>
        </Spacer>
        <NameInput
          label="Input Your Name"
          value={name}
          onChangeText={t => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate('CheckoutError', {
                  error: 'Something went wrong processing your transaction',
                })
              }
            />
          )}
        </Spacer>
        <Spacer position="top" size="large" />
        <PayButton
          disabled={isLoading}
          icon="cash"
          mode="contained"
          onPress={() => {
            onPay();
          }}>
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}>
            {' '}
            Clear Cart{' '}
          </ClearButton>
        </Spacer>
        <Spacer position="top" size="large" />
      </ScrollView>
    </SafeArea>
  );
};
