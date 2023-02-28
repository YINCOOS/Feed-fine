import React from 'react';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safe-area.component';

import {FlatList } from 'react-native';
import {RestaurantInfoCard} from '../components/restaurants-info-card.component';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};

`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList 
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeArea>
  );
};
