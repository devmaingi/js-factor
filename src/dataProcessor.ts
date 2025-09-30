 
import _ from 'lodash';

interface Data {
  id: String,
    name: String,
    price: Number,
    discountedPrice: Number
}

export function processData(data: Data[]): Data[] {
  let result = [];
 
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (!item) {
      throw new Error('Data item is null or undefined');
    }
 
    if (!item.id) {
      throw new Error('Data item is missing an id');
    }
 
    let processedItem = {
      id: item.id,
      name: item.name || 'Unknown',
      price: item.price || 0,
      discountedPrice: item.discountedPrice || item.price || 0,
    };
 
    result.push(processedItem);
  }
 
  return _.orderBy(result, ['discountedPrice'], ['asc']);
}
 
