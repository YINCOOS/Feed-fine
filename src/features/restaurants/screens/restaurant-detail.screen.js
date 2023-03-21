import React, {useState, useContext} from 'react';
import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import {Spacer} from '../../../components/spacer/spacer.component';
import {OrderButton} from '../components/restaurant-list.styles';
import {CartContext} from '../../../services/cart/cart.context';
import {RestaurantInfoCard} from '../components/restaurants-info-card.component';
import {SafeArea} from '../../../components/utility/safe-area.component';

export const RestaurantDetailScreen = ({navigation, route}) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const {restaurant} = route.params;

  const {addToCart} = useContext(CartContext);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
          <List.Item title="Bacon and Eggs" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}>
          <List.Item title="Burger with Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="food" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}>
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}>
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          mode="contained"
          icon="cash"
          onPress={() => {
            addToCart({item: 'special', price: 1299}, restaurant);
            navigation.navigate('Checkout');
          }}>
          ORDER SPECIAL ONLY 12.99
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
